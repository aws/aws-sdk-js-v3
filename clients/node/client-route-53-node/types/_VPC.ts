/**
 * <p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p>
 */
export interface _VPC {
  /**
   * <p>(Private hosted zones only) The region that an Amazon VPC was created in.</p>
   */
  VPCRegion?:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "eu-central-1"
    | "ap-east-1"
    | "me-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-south-1"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | "ap-northeast-3"
    | "eu-north-1"
    | "sa-east-1"
    | "ca-central-1"
    | "cn-north-1"
    | string;

  /**
   * <p>(Private hosted zones only) The ID of an Amazon VPC. </p>
   */
  VPCId?: string;
}

export type _UnmarshalledVPC = _VPC;
