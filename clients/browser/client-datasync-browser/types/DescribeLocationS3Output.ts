import { _UnmarshalledS3Config } from "./_S3Config";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeLocationS3Response</p>
 */
export interface DescribeLocationS3Output
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket location.</p>
   */
  LocationArn?: string;

  /**
   * <p>The URL of the Amazon S3 location that was described.</p>
   */
  LocationUri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>AWS DataSync User Guide</i>.</p>
   */
  S3Config?: _UnmarshalledS3Config;

  /**
   * <p>The time that the Amazon S3 bucket location was created.</p>
   */
  CreationTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
