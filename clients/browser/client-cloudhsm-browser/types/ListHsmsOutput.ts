import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of the <code>ListHsms</code> operation.</p>
 */
export interface ListHsmsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of ARNs that identify the HSMs.</p>
   */
  HsmList?: Array<string>;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
