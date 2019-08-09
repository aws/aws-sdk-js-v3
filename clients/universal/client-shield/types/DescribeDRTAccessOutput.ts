import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDRTAccessOutput shape
 */
export interface DescribeDRTAccessOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the role the DRT used to access your AWS account.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of Amazon S3 buckets accessed by the DRT.</p>
   */
  LogBucketList?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
