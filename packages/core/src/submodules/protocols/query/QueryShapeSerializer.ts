import { determineTimestampFormat, extendedEncodeURIComponent } from "@smithy/core/protocols";
import { NormalizedSchema, SCHEMA } from "@smithy/core/schema";
import { dateToUtcString } from "@smithy/smithy-client";
import type { CodecSettings, Schema, ShapeSerializer } from "@smithy/types";
import { toBase64 } from "@smithy/util-base64";

import { SerdeContextConfig } from "../ConfigurableSerdeContext";

export class QueryShapeSerializer extends SerdeContextConfig implements ShapeSerializer<string | Uint8Array> {
  private buffer: string | undefined;

  public constructor(private settings: CodecSettings) {
    super();
  }

  public write(schema: Schema, value: unknown, prefix = ""): void {
    if (this.buffer === undefined) {
      this.buffer = "";
    }
    const ns = NormalizedSchema.of(schema);
    if (prefix && !prefix.endsWith(".")) {
      prefix += ".";
    }

    if (ns.isBlobSchema()) {
      if (typeof value === "string" || value instanceof Uint8Array) {
        this.writeKey(prefix);
        this.writeValue((this.serdeContext?.base64Encoder ?? toBase64)(value as Uint8Array));
      }
    } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
      if (value != null) {
        this.writeKey(prefix);
        this.writeValue(String(value));
      }
    } else if (ns.isBigDecimalSchema() || ns.isBigIntegerSchema()) {
      if (value != null) {
        this.writeKey(prefix);
        this.writeValue(String(value));
      }
    } else if (ns.isTimestampSchema()) {
      if (value instanceof Date) {
        this.writeKey(prefix);
        const format = determineTimestampFormat(ns, this.settings);
        switch (format) {
          case SCHEMA.TIMESTAMP_DATE_TIME:
            this.writeValue(value.toISOString().replace(".000Z", "Z"));
            break;
          case SCHEMA.TIMESTAMP_HTTP_DATE:
            this.writeValue(dateToUtcString(value));
            break;
          case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
            this.writeValue(String(value.getTime() / 1000));
            break;
        }
      }
    } else if (ns.isDocumentSchema()) {
      throw new Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${ns.getName(true)}`);
    } else if (ns.isListSchema()) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          this.writeKey(prefix);
          this.writeValue("");
        } else {
          const member = ns.getValueSchema();
          const flat = ns.getMergedTraits().xmlFlattened;
          let i = 1;
          for (const item of value) {
            if (item == null) {
              continue;
            }
            const suffix = member.getMergedTraits().xmlName ?? "member";
            const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
            this.write(member, item, key);
            ++i;
          }
        }
      }
    } else if (ns.isMapSchema()) {
      if (value && typeof value === "object") {
        const keySchema = ns.getKeySchema();
        const memberSchema = ns.getValueSchema();
        const flat = ns.getMergedTraits().xmlFlattened;
        let i = 1;
        for (const [k, v] of Object.entries(value)) {
          if (v == null) {
            continue;
          }
          const keySuffix = keySchema.getMergedTraits().xmlName ?? "key";
          const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;

          const valueSuffix = memberSchema.getMergedTraits().xmlName ?? "value";
          const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;

          this.write(keySchema, k, key);
          this.write(memberSchema, v, valueKey);
          ++i;
        }
      }
    } else if (ns.isStructSchema()) {
      if (value && typeof value === "object") {
        for (const [memberName, member] of Object.entries(ns.getMemberSchemas())) {
          if ((value as any)[memberName] == null) {
            continue;
          }
          const suffix = member.getMergedTraits().xmlName ?? memberName;
          const key = `${prefix}${suffix}`;
          this.write(member, (value as any)[memberName], key);
        }
      }
    } else if (ns.isUnitSchema()) {
    } else {
      throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
    }
  }

  public flush(): string | Uint8Array {
    if (this.buffer === undefined) {
      throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
    }
    const str = this.buffer;
    delete this.buffer;
    return str;
  }

  public writeKey(key: string) {
    if (key.endsWith(".")) {
      key = key.slice(0, key.length - 1);
    }
    this.buffer += `&${extendedEncodeURIComponent(key)}=`;
  }

  public writeValue(value: string) {
    this.buffer += extendedEncodeURIComponent(value);
  }
}
