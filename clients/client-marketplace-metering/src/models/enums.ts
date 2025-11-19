// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const UsageRecordResultStatus = {
  CUSTOMER_NOT_SUBSCRIBED: "CustomerNotSubscribed",
  DUPLICATE_RECORD: "DuplicateRecord",
  SUCCESS: "Success",
} as const;
/**
 * @public
 */
export type UsageRecordResultStatus = (typeof UsageRecordResultStatus)[keyof typeof UsageRecordResultStatus];
