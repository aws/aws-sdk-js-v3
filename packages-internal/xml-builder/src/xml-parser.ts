import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  attributeNamePrefix: "",
  htmlEntities: true,
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
});
parser.addEntity("#xD", "\r");
parser.addEntity("#10", "\n");

/**
 * @internal
 */
export function parseXML(xmlString: string): any {
  return parser.parse(xmlString, true);
}
