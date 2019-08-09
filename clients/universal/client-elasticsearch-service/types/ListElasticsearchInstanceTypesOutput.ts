import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. </p>
 */
export interface ListElasticsearchInstanceTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> List of instance types supported by Amazon Elasticsearch service for given <code> <a>ElasticsearchVersion</a> </code> </p>
   */
  ElasticsearchInstanceTypes?: Array<
    | "m3.medium.elasticsearch"
    | "m3.large.elasticsearch"
    | "m3.xlarge.elasticsearch"
    | "m3.2xlarge.elasticsearch"
    | "m4.large.elasticsearch"
    | "m4.xlarge.elasticsearch"
    | "m4.2xlarge.elasticsearch"
    | "m4.4xlarge.elasticsearch"
    | "m4.10xlarge.elasticsearch"
    | "m5.large.elasticsearch"
    | "m5.xlarge.elasticsearch"
    | "m5.2xlarge.elasticsearch"
    | "m5.4xlarge.elasticsearch"
    | "m5.12xlarge.elasticsearch"
    | "r5.large.elasticsearch"
    | "r5.xlarge.elasticsearch"
    | "r5.2xlarge.elasticsearch"
    | "r5.4xlarge.elasticsearch"
    | "r5.12xlarge.elasticsearch"
    | "c5.large.elasticsearch"
    | "c5.xlarge.elasticsearch"
    | "c5.2xlarge.elasticsearch"
    | "c5.4xlarge.elasticsearch"
    | "c5.9xlarge.elasticsearch"
    | "c5.18xlarge.elasticsearch"
    | "t2.micro.elasticsearch"
    | "t2.small.elasticsearch"
    | "t2.medium.elasticsearch"
    | "r3.large.elasticsearch"
    | "r3.xlarge.elasticsearch"
    | "r3.2xlarge.elasticsearch"
    | "r3.4xlarge.elasticsearch"
    | "r3.8xlarge.elasticsearch"
    | "i2.xlarge.elasticsearch"
    | "i2.2xlarge.elasticsearch"
    | "d2.xlarge.elasticsearch"
    | "d2.2xlarge.elasticsearch"
    | "d2.4xlarge.elasticsearch"
    | "d2.8xlarge.elasticsearch"
    | "c4.large.elasticsearch"
    | "c4.xlarge.elasticsearch"
    | "c4.2xlarge.elasticsearch"
    | "c4.4xlarge.elasticsearch"
    | "c4.8xlarge.elasticsearch"
    | "r4.large.elasticsearch"
    | "r4.xlarge.elasticsearch"
    | "r4.2xlarge.elasticsearch"
    | "r4.4xlarge.elasticsearch"
    | "r4.8xlarge.elasticsearch"
    | "r4.16xlarge.elasticsearch"
    | "i3.large.elasticsearch"
    | "i3.xlarge.elasticsearch"
    | "i3.2xlarge.elasticsearch"
    | "i3.4xlarge.elasticsearch"
    | "i3.8xlarge.elasticsearch"
    | "i3.16xlarge.elasticsearch"
    | string
  >;

  /**
   * <p>In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
