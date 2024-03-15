// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudHSMServiceException as __BaseException } from "./CloudHSMServiceException";

/**
 * <p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM
 *       resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResponse {
  /**
   * <p>The status of the operation.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>Indicates that an internal error occurred.</p>
 * @public
 */
export class CloudHsmInternalException extends __BaseException {
  readonly name: "CloudHsmInternalException" = "CloudHsmInternalException";
  readonly $fault: "server" = "server";
  /**
   * <p>Indicates if the action can be retried.</p>
   * @public
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
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 * @public
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name: "CloudHsmServiceException" = "CloudHsmServiceException";
  readonly $fault: "client" = "client";
  /**
   * <p>Indicates if the action can be retried.</p>
   * @public
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
 * <p>Indicates that one or more of the request parameters are not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>Indicates if the action can be retried.</p>
   * @public
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
 * <p>Contains the inputs for the <a>CreateHapgRequest</a> action.</p>
 * @public
 */
export interface CreateHapgRequest {
  /**
   * <p>The label of the new high-availability partition group.</p>
   * @public
   */
  Label: string | undefined;
}

/**
 * <p>Contains the output of the <a>CreateHAPartitionGroup</a> action.</p>
 * @public
 */
export interface CreateHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   * @public
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
 * <p>Contains the inputs for the <code>CreateHsm</code> operation.</p>
 * @public
 */
export interface CreateHsmRequest {
  /**
   * <p>The identifier of the subnet in your VPC in which to place the HSM.</p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p>The SSH public key to install on the HSM.</p>
   * @public
   */
  SshKey: string | undefined;

  /**
   * <p>The IP address to assign to the HSM's ENI.</p>
   *          <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR
   *       range of the subnet.</p>
   * @public
   */
  EniIp?: string;

  /**
   * <p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your
   *       behalf.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The external ID from <code>IamRoleArn</code>, if present.</p>
   * @public
   */
  ExternalId?: string;

  /**
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
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * <p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the
   *       same token will be ignored.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one
   *       syslog monitoring server.</p>
   * @public
   */
  SyslogIp?: string;
}

/**
 * <p>Contains the output of the <code>CreateHsm</code> operation.</p>
 * @public
 */
export interface CreateHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   * @public
   */
  HsmArn?: string;
}

/**
 * <p>Contains the inputs for the <a>CreateLunaClient</a> action.</p>
 * @public
 */
export interface CreateLunaClientRequest {
  /**
   * <p>The label for the client.</p>
   * @public
   */
  Label?: string;

  /**
   * <p>The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used
   *       by this client.</p>
   * @public
   */
  Certificate: string | undefined;
}

/**
 * <p>Contains the output of the <a>CreateLunaClient</a> action.</p>
 * @public
 */
export interface CreateLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string;
}

/**
 * <p>Contains the inputs for the <a>DeleteHapg</a> action.</p>
 * @public
 */
export interface DeleteHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to delete.</p>
   * @public
   */
  HapgArn: string | undefined;
}

/**
 * <p>Contains the output of the <a>DeleteHapg</a> action.</p>
 * @public
 */
export interface DeleteHapgResponse {
  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>DeleteHsm</a> operation.</p>
 * @public
 */
export interface DeleteHsmRequest {
  /**
   * <p>The ARN of the HSM to delete.</p>
   * @public
   */
  HsmArn: string | undefined;
}

/**
 * <p>Contains the output of the <a>DeleteHsm</a> operation.</p>
 * @public
 */
export interface DeleteHsmResponse {
  /**
   * <p>The status of the operation.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientRequest {
  /**
   * <p>The ARN of the client to delete.</p>
   * @public
   */
  ClientArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientResponse {
  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>DescribeHapg</a> action.</p>
 * @public
 */
export interface DescribeHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to describe.</p>
   * @public
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
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 * @public
 */
export interface DescribeHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   * @public
   */
  HapgArn?: string;

  /**
   * <p>The serial number of the high-availability partition group.</p>
   * @public
   */
  HapgSerial?: string;

  /**
   * <p></p>
   * @public
   */
  HsmsLastActionFailed?: string[];

  /**
   * <p></p>
   * @public
   */
  HsmsPendingDeletion?: string[];

  /**
   * <p></p>
   * @public
   */
  HsmsPendingRegistration?: string[];

  /**
   * <p>The label for the high-availability partition group.</p>
   * @public
   */
  Label?: string;

  /**
   * <p>The date and time the high-availability partition group was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: string;

  /**
   * <p>The list of partition serial numbers that belong to the high-availability partition
   *       group.</p>
   * @public
   */
  PartitionSerialList?: string[];

  /**
   * <p>The state of the high-availability partition group.</p>
   * @public
   */
  State?: CloudHsmObjectState;
}

/**
 * <p>Contains the inputs for the <a>DescribeHsm</a> operation.</p>
 * @public
 */
export interface DescribeHsmRequest {
  /**
   * <p>The ARN of the HSM. Either the <code>HsmArn</code> or the <code>SerialNumber</code>
   *       parameter must be specified.</p>
   * @public
   */
  HsmArn?: string;

  /**
   * <p>The serial number of the HSM. Either the <code>HsmArn</code> or the
   *         <code>HsmSerialNumber</code> parameter must be specified.</p>
   * @public
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
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 * @public
 */
export interface DescribeHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   * @public
   */
  HsmArn?: string;

  /**
   * <p>The status of the HSM.</p>
   * @public
   */
  Status?: HsmStatus;

  /**
   * <p>Contains additional information about the status of the HSM.</p>
   * @public
   */
  StatusDetails?: string;

  /**
   * <p>The Availability Zone that the HSM is in.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The identifier of the elastic network interface (ENI) attached to the HSM.</p>
   * @public
   */
  EniId?: string;

  /**
   * <p>The IP address assigned to the HSM's ENI.</p>
   * @public
   */
  EniIp?: string;

  /**
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
   * @public
   */
  SubscriptionType?: SubscriptionType;

  /**
   * <p>The subscription start date.</p>
   * @public
   */
  SubscriptionStartDate?: string;

  /**
   * <p>The subscription end date.</p>
   * @public
   */
  SubscriptionEndDate?: string;

  /**
   * <p>The identifier of the VPC that the HSM is in.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The identifier of the subnet that the HSM is in.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The ARN of the IAM role assigned to the HSM.</p>
   * @public
   */
  IamRoleArn?: string;

  /**
   * <p>The serial number of the HSM.</p>
   * @public
   */
  SerialNumber?: string;

  /**
   * <p>The name of the HSM vendor.</p>
   * @public
   */
  VendorName?: string;

  /**
   * <p>The HSM model type.</p>
   * @public
   */
  HsmType?: string;

  /**
   * <p>The HSM software version.</p>
   * @public
   */
  SoftwareVersion?: string;

  /**
   * <p>The public SSH key.</p>
   * @public
   */
  SshPublicKey?: string;

  /**
   * <p>The date and time that the SSH key was last updated.</p>
   * @public
   */
  SshKeyLastUpdated?: string;

  /**
   * <p>The URI of the certificate server.</p>
   * @public
   */
  ServerCertUri?: string;

  /**
   * <p>The date and time that the server certificate was last updated.</p>
   * @public
   */
  ServerCertLastUpdated?: string;

  /**
   * <p>The list of partitions on the HSM.</p>
   * @public
   */
  Partitions?: string[];
}

/**
 * @public
 */
export interface DescribeLunaClientRequest {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string;

  /**
   * <p>The certificate fingerprint.</p>
   * @public
   */
  CertificateFingerprint?: string;
}

/**
 * @public
 */
export interface DescribeLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string;

  /**
   * <p>The certificate installed on the HSMs used by this client.</p>
   * @public
   */
  Certificate?: string;

  /**
   * <p>The certificate fingerprint.</p>
   * @public
   */
  CertificateFingerprint?: string;

  /**
   * <p>The date and time the client was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: string;

  /**
   * <p>The label of the client.</p>
   * @public
   */
  Label?: string;
}

/**
 * @public
 */
export interface GetConfigRequest {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn: string | undefined;

  /**
   * <p>The client version.</p>
   * @public
   */
  ClientVersion: ClientVersion | undefined;

  /**
   * <p>A list of ARNs that identify the high-availability partition groups that are associated
   *       with the client.</p>
   * @public
   */
  HapgList: string[] | undefined;
}

/**
 * @public
 */
export interface GetConfigResponse {
  /**
   * <p>The type of credentials.</p>
   * @public
   */
  ConfigType?: string;

  /**
   * <p>The chrystoki.conf configuration file.</p>
   * @public
   */
  ConfigFile?: string;

  /**
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   * @public
   */
  ConfigCred?: string;
}

/**
 * <p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>
 * @public
 */
export interface ListAvailableZonesRequest {}

/**
 * @public
 */
export interface ListAvailableZonesResponse {
  /**
   * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
   * @public
   */
  AZList?: string[];
}

/**
 * @public
 */
export interface ListHapgsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass
   *       null if this is the first call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHapgsResponse {
  /**
   * <p>The list of high-availability partition groups.</p>
   * @public
   */
  HapgList: string[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to
   *       retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHsmsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass
   *       null if this is the first call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Contains the output of the <code>ListHsms</code> operation.</p>
 * @public
 */
export interface ListHsmsResponse {
  /**
   * <p>The list of ARNs that identify the HSMs.</p>
   * @public
   */
  HsmList?: string[];

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to
   *       retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLunaClientsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>.
   *       Pass null if this is the first call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLunaClientsResponse {
  /**
   * <p>The list of clients.</p>
   * @public
   */
  ClientList: string[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to
   *       retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>One or more tags.</p>
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to modify.</p>
   * @public
   */
  HapgArn: string | undefined;

  /**
   * <p>The new label for the high-availability partition group.</p>
   * @public
   */
  Label?: string;

  /**
   * <p>The list of partition serial numbers to make members of the high-availability partition
   *       group.</p>
   * @public
   */
  PartitionSerialList?: string[];
}

/**
 * @public
 */
export interface ModifyHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   * @public
   */
  HapgArn?: string;
}

/**
 * <p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>
 * @public
 */
export interface ModifyHsmRequest {
  /**
   * <p>The ARN of the HSM to modify.</p>
   * @public
   */
  HsmArn: string | undefined;

  /**
   * <p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same
   *       Availability Zone as the current subnet.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The new IP address for the elastic network interface (ENI) attached to the
   *       HSM.</p>
   *          <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP
   *       address will be randomly chosen from the CIDR range of the new subnet.</p>
   * @public
   */
  EniIp?: string;

  /**
   * <p>The new IAM role ARN.</p>
   * @public
   */
  IamRoleArn?: string;

  /**
   * <p>The new external ID.</p>
   * @public
   */
  ExternalId?: string;

  /**
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports
   *       one syslog monitoring server.</p>
   * @public
   */
  SyslogIp?: string;
}

/**
 * <p>Contains the output of the <a>ModifyHsm</a> operation.</p>
 * @public
 */
export interface ModifyHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   * @public
   */
  HsmArn?: string;
}

/**
 * @public
 */
export interface ModifyLunaClientRequest {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn: string | undefined;

  /**
   * <p>The new certificate for the client.</p>
   * @public
   */
  Certificate: string | undefined;
}

/**
 * @public
 */
export interface ModifyLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key or keys to remove.</p>
   *          <p>Specify only the tag key to remove (not the value). To overwrite the value for an
   *       existing tag, use <a>AddTagsToResource</a>.</p>
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResponse {
  /**
   * <p>The status of the operation.</p>
   * @public
   */
  Status: string | undefined;
}
