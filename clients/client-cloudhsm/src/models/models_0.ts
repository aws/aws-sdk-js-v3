// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudHSMServiceException as __BaseException } from "./CloudHSMServiceException";

/**
 * @public
 * <p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM
 *       resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags.</p>
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResponse {
  /**
   * @public
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

/**
 * @public
 * <p>Indicates that an internal error occurred.</p>
 */
export class CloudHsmInternalException extends __BaseException {
  readonly name: "CloudHsmInternalException" = "CloudHsmInternalException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInternalException, __BaseException>) {
    super({
      name: "CloudHsmInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInternalException.prototype);
    this.retryable = opts.retryable;
  }
}

/**
 * @public
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name: "CloudHsmServiceException" = "CloudHsmServiceException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmServiceException, __BaseException>) {
    super({
      name: "CloudHsmServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmServiceException.prototype);
    this.retryable = opts.retryable;
  }
}

/**
 * @public
 * <p>Indicates that one or more of the request parameters are not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.retryable = opts.retryable;
  }
}

/**
 * @public
 * @enum
 */
export const ClientVersion = {
  FIVE_ONE: "5.1",
  FIVE_THREE: "5.3",
} as const;

/**
 * @public
 */
export type ClientVersion = (typeof ClientVersion)[keyof typeof ClientVersion];

/**
 * @public
 * <p>Contains the inputs for the <a>CreateHapgRequest</a> action.</p>
 */
export interface CreateHapgRequest {
  /**
   * @public
   * <p>The label of the new high-availability partition group.</p>
   */
  Label: string | undefined;
}

/**
 * @public
 * <p>Contains the output of the <a>CreateHAPartitionGroup</a> action.</p>
 */
export interface CreateHapgResponse {
  /**
   * @public
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  PRODUCTION: "PRODUCTION",
} as const;

/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * <p>Contains the inputs for the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmRequest {
  /**
   * @public
   * <p>The identifier of the subnet in your VPC in which to place the HSM.</p>
   */
  SubnetId: string | undefined;

  /**
   * @public
   * <p>The SSH public key to install on the HSM.</p>
   */
  SshKey: string | undefined;

  /**
   * @public
   * <p>The IP address to assign to the HSM's ENI.</p>
   *          <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR
   *       range of the subnet.</p>
   */
  EniIp?: string;

  /**
   * @public
   * <p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your
   *       behalf.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>The external ID from <code>IamRoleArn</code>, if present.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>Specifies the type of subscription for the HSM.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PRODUCTION</b> - The HSM is being used in a production
   *           environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TRIAL</b> - The HSM is being used in a product
   *           trial.</p>
   *             </li>
   *          </ul>
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * @public
   * <p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the
   *       same token will be ignored.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one
   *       syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

/**
 * @public
 * <p>Contains the output of the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmResponse {
  /**
   * @public
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientRequest {
  /**
   * @public
   * <p>The label for the client.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used
   *       by this client.</p>
   */
  Certificate: string | undefined;
}

/**
 * @public
 * <p>Contains the output of the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientResponse {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgRequest {
  /**
   * @public
   * <p>The ARN of the high-availability partition group to delete.</p>
   */
  HapgArn: string | undefined;
}

/**
 * @public
 * <p>Contains the output of the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgResponse {
  /**
   * @public
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

/**
 * @public
 * <p>Contains the inputs for the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmRequest {
  /**
   * @public
   * <p>The ARN of the HSM to delete.</p>
   */
  HsmArn: string | undefined;
}

/**
 * @public
 * <p>Contains the output of the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmResponse {
  /**
   * @public
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientRequest {
  /**
   * @public
   * <p>The ARN of the client to delete.</p>
   */
  ClientArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientResponse {
  /**
   * @public
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

/**
 * @public
 * <p>Contains the inputs for the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgRequest {
  /**
   * @public
   * <p>The ARN of the high-availability partition group to describe.</p>
   */
  HapgArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CloudHsmObjectState = {
  DEGRADED: "DEGRADED",
  READY: "READY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type CloudHsmObjectState = (typeof CloudHsmObjectState)[keyof typeof CloudHsmObjectState];

/**
 * @public
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgResponse {
  /**
   * @public
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;

  /**
   * @public
   * <p>The serial number of the high-availability partition group.</p>
   */
  HapgSerial?: string;

  /**
   * @public
   * <p></p>
   */
  HsmsLastActionFailed?: string[];

  /**
   * @public
   * <p></p>
   */
  HsmsPendingDeletion?: string[];

  /**
   * @public
   * <p></p>
   */
  HsmsPendingRegistration?: string[];

  /**
   * @public
   * <p>The label for the high-availability partition group.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The date and time the high-availability partition group was last modified.</p>
   */
  LastModifiedTimestamp?: string;

  /**
   * @public
   * <p>The list of partition serial numbers that belong to the high-availability partition
   *       group.</p>
   */
  PartitionSerialList?: string[];

  /**
   * @public
   * <p>The state of the high-availability partition group.</p>
   */
  State?: CloudHsmObjectState;
}

/**
 * @public
 * <p>Contains the inputs for the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmRequest {
  /**
   * @public
   * <p>The ARN of the HSM. Either the <code>HsmArn</code> or the <code>SerialNumber</code>
   *       parameter must be specified.</p>
   */
  HsmArn?: string;

  /**
   * @public
   * <p>The serial number of the HSM. Either the <code>HsmArn</code> or the
   *         <code>HsmSerialNumber</code> parameter must be specified.</p>
   */
  HsmSerialNumber?: string;
}

/**
 * @public
 * @enum
 */
export const HsmStatus = {
  DEGRADED: "DEGRADED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type HsmStatus = (typeof HsmStatus)[keyof typeof HsmStatus];

/**
 * @public
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmResponse {
  /**
   * @public
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;

  /**
   * @public
   * <p>The status of the HSM.</p>
   */
  Status?: HsmStatus;

  /**
   * @public
   * <p>Contains additional information about the status of the HSM.</p>
   */
  StatusDetails?: string;

  /**
   * @public
   * <p>The Availability Zone that the HSM is in.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The identifier of the elastic network interface (ENI) attached to the HSM.</p>
   */
  EniId?: string;

  /**
   * @public
   * <p>The IP address assigned to the HSM's ENI.</p>
   */
  EniIp?: string;

  /**
   * @public
   * <p>Specifies the type of subscription for the HSM.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PRODUCTION</b> - The HSM is being used in a production
   *           environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TRIAL</b> - The HSM is being used in a product
   *           trial.</p>
   *             </li>
   *          </ul>
   */
  SubscriptionType?: SubscriptionType;

  /**
   * @public
   * <p>The subscription start date.</p>
   */
  SubscriptionStartDate?: string;

  /**
   * @public
   * <p>The subscription end date.</p>
   */
  SubscriptionEndDate?: string;

  /**
   * @public
   * <p>The identifier of the VPC that the HSM is in.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The identifier of the subnet that the HSM is in.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The ARN of the IAM role assigned to the HSM.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>The serial number of the HSM.</p>
   */
  SerialNumber?: string;

  /**
   * @public
   * <p>The name of the HSM vendor.</p>
   */
  VendorName?: string;

  /**
   * @public
   * <p>The HSM model type.</p>
   */
  HsmType?: string;

  /**
   * @public
   * <p>The HSM software version.</p>
   */
  SoftwareVersion?: string;

  /**
   * @public
   * <p>The public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * @public
   * <p>The date and time that the SSH key was last updated.</p>
   */
  SshKeyLastUpdated?: string;

  /**
   * @public
   * <p>The URI of the certificate server.</p>
   */
  ServerCertUri?: string;

  /**
   * @public
   * <p>The date and time that the server certificate was last updated.</p>
   */
  ServerCertLastUpdated?: string;

  /**
   * @public
   * <p>The list of partitions on the HSM.</p>
   */
  Partitions?: string[];
}

/**
 * @public
 */
export interface DescribeLunaClientRequest {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;

  /**
   * @public
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;
}

/**
 * @public
 */
export interface DescribeLunaClientResponse {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;

  /**
   * @public
   * <p>The certificate installed on the HSMs used by this client.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;

  /**
   * @public
   * <p>The date and time the client was last modified.</p>
   */
  LastModifiedTimestamp?: string;

  /**
   * @public
   * <p>The label of the client.</p>
   */
  Label?: string;
}

/**
 * @public
 */
export interface GetConfigRequest {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn: string | undefined;

  /**
   * @public
   * <p>The client version.</p>
   */
  ClientVersion: ClientVersion | undefined;

  /**
   * @public
   * <p>A list of ARNs that identify the high-availability partition groups that are associated
   *       with the client.</p>
   */
  HapgList: string[] | undefined;
}

/**
 * @public
 */
export interface GetConfigResponse {
  /**
   * @public
   * <p>The type of credentials.</p>
   */
  ConfigType?: string;

  /**
   * @public
   * <p>The chrystoki.conf configuration file.</p>
   */
  ConfigFile?: string;

  /**
   * @public
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   */
  ConfigCred?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>
 */
export interface ListAvailableZonesRequest {}

/**
 * @public
 */
export interface ListAvailableZonesResponse {
  /**
   * @public
   * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
   */
  AZList?: string[];
}

/**
 * @public
 */
export interface ListHapgsRequest {
  /**
   * @public
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHapgsResponse {
  /**
   * @public
   * <p>The list of high-availability partition groups.</p>
   */
  HapgList: string[] | undefined;

  /**
   * @public
   * <p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHsmsRequest {
  /**
   * @public
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the output of the <code>ListHsms</code> operation.</p>
 */
export interface ListHsmsResponse {
  /**
   * @public
   * <p>The list of ARNs that identify the HSMs.</p>
   */
  HsmList?: string[];

  /**
   * @public
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLunaClientsRequest {
  /**
   * @public
   * <p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>.
   *       Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLunaClientsResponse {
  /**
   * @public
   * <p>The list of clients.</p>
   */
  ClientList: string[] | undefined;

  /**
   * @public
   * <p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>One or more tags.</p>
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyHapgRequest {
  /**
   * @public
   * <p>The ARN of the high-availability partition group to modify.</p>
   */
  HapgArn: string | undefined;

  /**
   * @public
   * <p>The new label for the high-availability partition group.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The list of partition serial numbers to make members of the high-availability partition
   *       group.</p>
   */
  PartitionSerialList?: string[];
}

/**
 * @public
 */
export interface ModifyHapgResponse {
  /**
   * @public
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

/**
 * @public
 * <p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmRequest {
  /**
   * @public
   * <p>The ARN of the HSM to modify.</p>
   */
  HsmArn: string | undefined;

  /**
   * @public
   * <p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same
   *       Availability Zone as the current subnet.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The new IP address for the elastic network interface (ENI) attached to the
   *       HSM.</p>
   *          <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP
   *       address will be randomly chosen from the CIDR range of the new subnet.</p>
   */
  EniIp?: string;

  /**
   * @public
   * <p>The new IAM role ARN.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>The new external ID.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports
   *       one syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

/**
 * @public
 * <p>Contains the output of the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmResponse {
  /**
   * @public
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

/**
 * @public
 */
export interface ModifyLunaClientRequest {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn: string | undefined;

  /**
   * @public
   * <p>The new certificate for the client.</p>
   */
  Certificate: string | undefined;
}

/**
 * @public
 */
export interface ModifyLunaClientResponse {
  /**
   * @public
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag key or keys to remove.</p>
   *          <p>Specify only the tag key to remove (not the value). To overwrite the value for an
   *       existing tag, use <a>AddTagsToResource</a>.</p>
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResponse {
  /**
   * @public
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}
