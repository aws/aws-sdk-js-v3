import { XMLParser } from "fast-xml-parser";

import { type EntityDecoder, COMMON_HTML, CURRENCY, EntityDecoderImpl, XML } from "./xml-external/nodable_entities";

/**
 * Custom entity decoder that preserves C0 control characters (e.g. U+0015)
 * which XML 1.0 strict mode would strip. AWS services may return these
 * characters in responses despite XML 1.0 declaration.
 *
 * @internal
 */
const entityDecoder: EntityDecoder = new EntityDecoderImpl({
  namedEntities: { ...XML, ...COMMON_HTML, ...CURRENCY },
  numericAllowed: true,
  limit: {
    maxTotalExpansions: Infinity,
  },
  ncr: {
    xmlVersion: 1.1,
  },
});

/**
 * Because this is only used against trusted server responses,
 * we should not be setting any client side limits.
 *
 * @internal
 */
const parser = new XMLParser({
  attributeNamePrefix: "",
  processEntities: {
    enabled: true,
    maxTotalExpansions: Infinity,
  },
  htmlEntities: true,
  entityDecoder: {
    setExternalEntities: (entities: Record<string, string>): void => {
      entityDecoder.setExternalEntities(entities);
    },
    addInputEntities: (entities: Record<string, string>): void => {
      entityDecoder.addInputEntities(entities);
    },
    reset: (): void => {
      entityDecoder.reset();
    },
    decode: (text: string): string => {
      return entityDecoder.decode(text);
    },
    /**
     * The previous XML parser allowed C0 control chars despite
     * any presence of the xml 1.0 declaration `<?xml version="1.0" encoding="UTF-8"?>`.
     * We will avoid having the xml version set by the incoming payload
     * as a workaround.
     */
    setXmlVersion: (version: string) => void {},
  },
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
  maxNestedTags: Infinity,
});

/**
 * @internal
 */
export function parseXML(xmlString: string): any {
  return parser.parse(xmlString, true);
}
