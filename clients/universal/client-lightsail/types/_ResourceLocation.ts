/**
 * <p>Describes the resource location.</p>
 */
export interface _ResourceLocation {
  /**
   * <p>The Availability Zone. Follows the format <code>us-east-2a</code> (case-sensitive).</p>
   */
  availabilityZone?: string;

  /**
   * <p>The AWS Region name.</p>
   */
  regionName?:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "eu-central-1"
    | "ca-central-1"
    | "ap-south-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | string;
}

export type _UnmarshalledResourceLocation = _ResourceLocation;
