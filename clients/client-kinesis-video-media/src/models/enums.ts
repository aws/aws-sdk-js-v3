// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const StartSelectorType = {
  CONTINUATION_TOKEN: "CONTINUATION_TOKEN",
  EARLIEST: "EARLIEST",
  FRAGMENT_NUMBER: "FRAGMENT_NUMBER",
  NOW: "NOW",
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;
/**
 * @public
 */
export type StartSelectorType = (typeof StartSelectorType)[keyof typeof StartSelectorType];
