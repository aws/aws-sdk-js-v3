import { _UsageRecord, _UnmarshalledUsageRecord } from "./_UsageRecord";

/**
 * <p>A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.</p>
 */
export interface _UsageRecordResult {
  /**
   * <p>The UsageRecord that was part of the BatchMeterUsage request.</p>
   */
  UsageRecord?: _UsageRecord;

  /**
   * <p>The MeteringRecordId is a unique identifier for this metering event.</p>
   */
  MeteringRecordId?: string;

  /**
   * <p>The UsageRecordResult Status indicates the status of an individual UsageRecord processed by BatchMeterUsage.</p> <ul> <li> <p> <i>Success</i>- The UsageRecord was accepted and honored by BatchMeterUsage.</p> </li> <li> <p> <i>CustomerNotSubscribed</i>- The CustomerIdentifier specified is not subscribed to your product. The UsageRecord was not honored. Future UsageRecords for this customer will fail until the customer subscribes to your product.</p> </li> <li> <p> <i>DuplicateRecord</i>- Indicates that the UsageRecord was invalid and not honored. A previously metered UsageRecord had the same customer, dimension, and time, but a different quantity.</p> </li> </ul>
   */
  Status?: "Success" | "CustomerNotSubscribed" | "DuplicateRecord" | string;
}

export interface _UnmarshalledUsageRecordResult extends _UsageRecordResult {
  /**
   * <p>The UsageRecord that was part of the BatchMeterUsage request.</p>
   */
  UsageRecord?: _UnmarshalledUsageRecord;
}
