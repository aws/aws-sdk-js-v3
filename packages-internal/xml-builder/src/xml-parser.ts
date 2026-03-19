import { XMLParser } from "fast-xml-parser";

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
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
  maxNestedTags: Infinity,
});
parser.addEntity("#xD", "\r");
parser.addEntity("#10", "\n");

/**
 * @internal
 */
export function parseXML(xmlString: string): any {
  return parser.parse(xmlString, true);
}
