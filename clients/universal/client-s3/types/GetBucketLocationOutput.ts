import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketLocationOutput shape
 */
export interface GetBucketLocationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  LocationConstraint?:
    | "EU"
    | "eu-west-1"
    | "us-west-1"
    | "us-west-2"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "sa-east-1"
    | "cn-north-1"
    | "eu-central-1"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
