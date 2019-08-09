import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;

  /**
   * <p>The status of the HSM.</p>
   */
  Status?:
    | "PENDING"
    | "RUNNING"
    | "UPDATING"
    | "SUSPENDED"
    | "TERMINATING"
    | "TERMINATED"
    | "DEGRADED"
    | string;

  /**
   * <p>Contains additional information about the status of the HSM.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The Availability Zone that the HSM is in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier of the elastic network interface (ENI) attached to the HSM.</p>
   */
  EniId?: string;

  /**
   * <p>The IP address assigned to the HSM's ENI.</p>
   */
  EniIp?: string;

  /**
   * <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
   */
  SubscriptionType?: "PRODUCTION" | string;

  /**
   * <p>The subscription start date.</p>
   */
  SubscriptionStartDate?: string;

  /**
   * <p>The subscription end date.</p>
   */
  SubscriptionEndDate?: string;

  /**
   * <p>The identifier of the VPC that the HSM is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The identifier of the subnet that the HSM is in.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ARN of the IAM role assigned to the HSM.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The serial number of the HSM.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The name of the HSM vendor.</p>
   */
  VendorName?: string;

  /**
   * <p>The HSM model type.</p>
   */
  HsmType?: string;

  /**
   * <p>The HSM software version.</p>
   */
  SoftwareVersion?: string;

  /**
   * <p>The public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>The date and time that the SSH key was last updated.</p>
   */
  SshKeyLastUpdated?: string;

  /**
   * <p>The URI of the certificate server.</p>
   */
  ServerCertUri?: string;

  /**
   * <p>The date and time that the server certificate was last updated.</p>
   */
  ServerCertLastUpdated?: string;

  /**
   * <p>The list of partitions on the HSM.</p>
   */
  Partitions?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
