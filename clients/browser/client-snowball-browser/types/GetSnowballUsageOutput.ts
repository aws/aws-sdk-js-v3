import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSnowballUsageOutput shape
 */
export interface GetSnowballUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The service limit for number of Snowballs this account can have at once. The default service limit is 1 (one).</p>
   */
  SnowballLimit?: number;

  /**
   * <p>The number of Snowballs that this account is currently using.</p>
   */
  SnowballsInUse?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
