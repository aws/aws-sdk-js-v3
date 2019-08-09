import { _UnmarshalledRecordDetail } from "./_RecordDetail";
import { _UnmarshalledRecordOutput } from "./_RecordOutput";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRecordOutput shape
 */
export interface DescribeRecordOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the product.</p>
   */
  RecordDetail?: _UnmarshalledRecordDetail;

  /**
   * <p>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
   */
  RecordOutputs?: Array<_UnmarshalledRecordOutput>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
