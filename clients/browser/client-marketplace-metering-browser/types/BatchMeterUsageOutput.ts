import { _UnmarshalledUsageRecordResult } from "./_UsageRecordResult";
import { _UnmarshalledUsageRecord } from "./_UsageRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.</p>
 */
export interface BatchMeterUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains all UsageRecords processed by BatchMeterUsage. These records were either honored by AWS Marketplace Metering Service or were invalid.</p>
   */
  Results?: Array<_UnmarshalledUsageRecordResult>;

  /**
   * <p>Contains all UsageRecords that were not processed by BatchMeterUsage. This is a list of UsageRecords. You can retry the failed request by making another BatchMeterUsage call with this list as input in the BatchMeterUsageRequest.</p>
   */
  UnprocessedRecords?: Array<_UnmarshalledUsageRecord>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
