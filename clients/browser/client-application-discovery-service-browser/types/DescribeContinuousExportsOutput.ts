import { _UnmarshalledContinuousExportDescription } from "./_ContinuousExportDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeContinuousExportsOutput shape
 */
export interface DescribeContinuousExportsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of continuous export descriptions.</p>
   */
  descriptions?: Array<_UnmarshalledContinuousExportDescription>;

  /**
   * <p>The token from the previous call to <code>DescribeExportTasks</code>.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
