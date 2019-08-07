import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeLimits</code> operation.</p>
 */
export interface DescribeLimitsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maximum total read capacity units that your account allows you to provision across all of your tables in this region.</p>
   */
  AccountMaxReadCapacityUnits?: number;

  /**
   * <p>The maximum total write capacity units that your account allows you to provision across all of your tables in this region.</p>
   */
  AccountMaxWriteCapacityUnits?: number;

  /**
   * <p>The maximum read capacity units that your account allows you to provision for a new table that you are creating in this region, including the read capacity units provisioned for its global secondary indexes (GSIs).</p>
   */
  TableMaxReadCapacityUnits?: number;

  /**
   * <p>The maximum write capacity units that your account allows you to provision for a new table that you are creating in this region, including the write capacity units provisioned for its global secondary indexes (GSIs).</p>
   */
  TableMaxWriteCapacityUnits?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
