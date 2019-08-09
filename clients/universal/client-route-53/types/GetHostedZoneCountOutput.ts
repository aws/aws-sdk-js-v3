import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response to a <code>GetHostedZoneCount</code> request.</p>
 */
export interface GetHostedZoneCountOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The total number of public and private hosted zones that are associated with the current AWS account.</p>
   */
  HostedZoneCount: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
