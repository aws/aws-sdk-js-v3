/**
 * _CreateBucketConfiguration shape
 */
export interface _CreateBucketConfiguration {
  /**
   * <p>Specifies the region where the bucket will be created. If you don't specify a region, the bucket will be created in US Standard.</p>
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
}

export type _UnmarshalledCreateBucketConfiguration = _CreateBucketConfiguration;
