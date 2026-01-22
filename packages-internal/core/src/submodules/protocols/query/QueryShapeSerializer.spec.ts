import { NumericValue } from "@smithy/core/serde";
import type { TimestampDateTimeSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { unionStruct, unionStructControl, widget } from "../test-schema.spec";
import { QueryShapeSerializer } from "./QueryShapeSerializer";

describe(QueryShapeSerializer.name, () => {
  const serializer = new QueryShapeSerializer({
    timestampFormat: { default: 5 satisfies TimestampDateTimeSchema, useTrait: true },
  });

  it("serializes data to Query", async () => {
    const data = {
      timestamp: new Date(0),
      bigint: 10000000000000000000000054321n,
      bigdecimal: new NumericValue("0.10000000000000000000000054321", "bigDecimal"),
      blob: new Uint8Array([0, 0, 0, 1]),
    };
    serializer.write(widget, data);
    const serialization = serializer.flush();
    expect(serialization).toEqual(
      `&blob=AAAAAQ%3D%3D&timestamp=0&bigint=10000000000000000000000054321&bigdecimal=0.10000000000000000000000054321`
    );
  });

  it("serializes $unknown union members", () => {
    {
      serializer.write(unionStruct, {
        union: {
          $unknown: [
            "unknownKey",
            {
              timestamp: new Date(0),
              blob: new Uint8Array([0, 1, 2, 3]),
            },
          ],
        },
      });
      const serialization = String(serializer.flush()).replaceAll(/&/g, "\n&");
      expect(serialization).toEqual(`
&union.unknownKey.entry.1.key=timestamp
&union.unknownKey.entry.1.value=1970-01-01T00%3A00%3A00Z
&union.unknownKey.entry.2.key=blob
&union.unknownKey.entry.2.value=AAECAw%3D%3D`);
    }
    {
      serializer.write(unionStructControl, {
        union: {
          $unknown: [
            "unknownKey",
            {
              timestamp: new Date(0),
              blob: new Uint8Array([0, 1, 2, 3]),
            },
          ],
        },
      });
      const serialization = serializer.flush();
      expect(serialization).toEqual(``);
    }
  });
});
