/**
 * <p>A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device.</p>
 */
export interface _Ec2AmiResource {
  /**
   * <p>The ID of the AMI in Amazon EC2.</p>
   */
  AmiId: string;

  /**
   * <p>The ID of the AMI on the supported device.</p>
   */
  SnowballAmiId?: string;
}

export type _UnmarshalledEc2AmiResource = _Ec2AmiResource;
