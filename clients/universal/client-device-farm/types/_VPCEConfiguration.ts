/**
 * <p>Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 */
export interface _VPCEConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint configuration.</p>
   */
  arn?: string;

  /**
   * <p>The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.</p>
   */
  vpceConfigurationName?: string;

  /**
   * <p>The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.</p>
   */
  vpceServiceName?: string;

  /**
   * <p>The DNS name that maps to the private IP address of the service you want to access.</p>
   */
  serviceDnsName?: string;

  /**
   * <p>An optional description, providing more details about your VPC endpoint configuration.</p>
   */
  vpceConfigurationDescription?: string;
}

export type _UnmarshalledVPCEConfiguration = _VPCEConfiguration;
