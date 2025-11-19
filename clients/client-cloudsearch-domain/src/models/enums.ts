// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const QueryParser = {
  dismax: "dismax",
  lucene: "lucene",
  simple: "simple",
  structured: "structured",
} as const;
/**
 * @public
 */
export type QueryParser = (typeof QueryParser)[keyof typeof QueryParser];

/**
 * @public
 * @enum
 */
export const ContentType = {
  application_json: "application/json",
  application_xml: "application/xml",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];
