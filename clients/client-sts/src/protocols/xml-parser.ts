import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  attributeNamePrefix: "",
  htmlEntities: true,
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseTagValue: false,
  trimValues: false,
  tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
});

parser.addEntity("#xD", "\r");
parser.addEntity("#10", "\n");

/**
 * @internal
 */
export const parse = ((encoded: any, ignored?: any) => {
  return parser.parse(encoded);
}) as any;
