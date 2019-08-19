import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListHapgsOutput shape
 */
export interface ListHapgsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of high-availability partition groups.</p>
   */
  HapgList: Array<string>;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to retrieve the next set of items.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
