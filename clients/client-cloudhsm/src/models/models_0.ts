// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CloudHSMServiceException as __BaseException } from "./CloudHSMServiceException";

/**
 * <p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM
 *       resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export interface AddTagsToResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  TagList: Tag[] | undefined;
}

export interface AddTagsToResourceResponse {
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

/**
 * <p>Indicates that an internal error occurred.</p>
 */
export class CloudHsmInternalException extends __BaseException {
  readonly name: "CloudHsmInternalException" = "CloudHsmInternalException";
  readonly $fault: "server" = "server";
  /**
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
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name: "CloudHsmServiceException" = "CloudHsmServiceException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>Indicates that one or more of the request parameters are not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
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

export enum ClientVersion {
  FIVE_ONE = "5.1",
  FIVE_THREE = "5.3",
}

/**
 * <p>Contains the inputs for the <a>CreateHapgRequest</a> action.</p>
 */
export interface CreateHapgRequest {
  /**
   * <p>The label of the new high-availability partition group.</p>
   */
  Label: string | undefined;
}

/**
 * <p>Contains the output of the <a>CreateHAPartitionGroup</a> action.</p>
 */
export interface CreateHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

export enum SubscriptionType {
  PRODUCTION = "PRODUCTION",
}

/**
 * <p>Contains the inputs for the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmRequest {
  /**
   * <p>The identifier of the subnet in your VPC in which to place the HSM.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The SSH public key to install on the HSM.</p>
   */
  SshKey: string | undefined;

  /**
   * <p>The IP address to assign to the HSM's ENI.</p>
   *          <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR
   *       range of the subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your
   *       behalf.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The external ID from <code>IamRoleArn</code>, if present.</p>
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
   */
  SubscriptionType: SubscriptionType | string | undefined;

  /**
   * <p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the
   *       same token will be ignored.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one
   *       syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

/**
 * <p>Contains the output of the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

/**
 * <p>Contains the inputs for the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientRequest {
  /**
   * <p>The label for the client.</p>
   */
  Label?: string;

  /**
   * <p>The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used
   *       by this client.</p>
   */
  Certificate: string | undefined;
}

/**
 * <p>Contains the output of the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

/**
 * <p>Contains the inputs for the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to delete.</p>
   */
  HapgArn: string | undefined;
}

/**
 * <p>Contains the output of the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgResponse {
  /**
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmRequest {
  /**
   * <p>The ARN of the HSM to delete.</p>
   */
  HsmArn: string | undefined;
}

/**
 * <p>Contains the output of the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmResponse {
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

export interface DeleteLunaClientRequest {
  /**
   * <p>The ARN of the client to delete.</p>
   */
  ClientArn: string | undefined;
}

export interface DeleteLunaClientResponse {
  /**
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

/**
 * <p>Contains the inputs for the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to describe.</p>
   */
  HapgArn: string | undefined;
}

export enum CloudHsmObjectState {
  DEGRADED = "DEGRADED",
  READY = "READY",
  UPDATING = "UPDATING",
}

/**
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;

  /**
   * <p>The serial number of the high-availability partition group.</p>
   */
  HapgSerial?: string;

  /**
   * <p></p>
   */
  HsmsLastActionFailed?: string[];

  /**
   * <p></p>
   */
  HsmsPendingDeletion?: string[];

  /**
   * <p></p>
   */
  HsmsPendingRegistration?: string[];

  /**
   * <p>The label for the high-availability partition group.</p>
   */
  Label?: string;

  /**
   * <p>The date and time the high-availability partition group was last modified.</p>
   */
  LastModifiedTimestamp?: string;

  /**
   * <p>The list of partition serial numbers that belong to the high-availability partition
   *       group.</p>
   */
  PartitionSerialList?: string[];

  /**
   * <p>The state of the high-availability partition group.</p>
   */
  State?: CloudHsmObjectState | string;
}

/**
 * <p>Contains the inputs for the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmRequest {
  /**
   * <p>The ARN of the HSM. Either the <code>HsmArn</code> or the <code>SerialNumber</code>
   *       parameter must be specified.</p>
   */
  HsmArn?: string;

  /**
   * <p>The serial number of the HSM. Either the <code>HsmArn</code> or the
   *         <code>HsmSerialNumber</code> parameter must be specified.</p>
   */
  HsmSerialNumber?: string;
}

export enum HsmStatus {
  DEGRADED = "DEGRADED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
  UPDATING = "UPDATING",
}

/**
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;

  /**
   * <p>The status of the HSM.</p>
   */
  Status?: HsmStatus | string;

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
  SubscriptionType?: SubscriptionType | string;

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
  Partitions?: string[];
}

export interface DescribeLunaClientRequest {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;

  /**
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;
}

export interface DescribeLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;

  /**
   * <p>The certificate installed on the HSMs used by this client.</p>
   */
  Certificate?: string;

  /**
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;

  /**
   * <p>The date and time the client was last modified.</p>
   */
  LastModifiedTimestamp?: string;

  /**
   * <p>The label of the client.</p>
   */
  Label?: string;
}

export interface GetConfigRequest {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn: string | undefined;

  /**
   * <p>The client version.</p>
   */
  ClientVersion: ClientVersion | string | undefined;

  /**
   * <p>A list of ARNs that identify the high-availability partition groups that are associated
   *       with the client.</p>
   */
  HapgList: string[] | undefined;
}

export interface GetConfigResponse {
  /**
   * <p>The type of credentials.</p>
   */
  ConfigType?: string;

  /**
   * <p>The chrystoki.conf configuration file.</p>
   */
  ConfigFile?: string;

  /**
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   */
  ConfigCred?: string;
}

/**
 * <p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>
 */
export interface ListAvailableZonesRequest {}

export interface ListAvailableZonesResponse {
  /**
   * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
   */
  AZList?: string[];
}

export interface ListHapgsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

export interface ListHapgsResponse {
  /**
   * <p>The list of high-availability partition groups.</p>
   */
  HapgList: string[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export interface ListHsmsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the output of the <code>ListHsms</code> operation.</p>
 */
export interface ListHsmsResponse {
  /**
   * <p>The list of ARNs that identify the HSMs.</p>
   */
  HsmList?: string[];

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export interface ListLunaClientsRequest {
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>.
   *       Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export interface ListLunaClientsResponse {
  /**
   * <p>The list of clients.</p>
   */
  ClientList: string[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>One or more tags.</p>
   */
  TagList: Tag[] | undefined;
}

export interface ModifyHapgRequest {
  /**
   * <p>The ARN of the high-availability partition group to modify.</p>
   */
  HapgArn: string | undefined;

  /**
   * <p>The new label for the high-availability partition group.</p>
   */
  Label?: string;

  /**
   * <p>The list of partition serial numbers to make members of the high-availability partition
   *       group.</p>
   */
  PartitionSerialList?: string[];
}

export interface ModifyHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

/**
 * <p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmRequest {
  /**
   * <p>The ARN of the HSM to modify.</p>
   */
  HsmArn: string | undefined;

  /**
   * <p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same
   *       Availability Zone as the current subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The new IP address for the elastic network interface (ENI) attached to the
   *       HSM.</p>
   *          <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP
   *       address will be randomly chosen from the CIDR range of the new subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The new IAM role ARN.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The new external ID.</p>
   */
  ExternalId?: string;

  /**
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports
   *       one syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

/**
 * <p>Contains the output of the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

export interface ModifyLunaClientRequest {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn: string | undefined;

  /**
   * <p>The new certificate for the client.</p>
   */
  Certificate: string | undefined;
}

export interface ModifyLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

export interface RemoveTagsFromResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key or keys to remove.</p>
   *          <p>Specify only the tag key to remove (not the value). To overwrite the value for an
   *       existing tag, use <a>AddTagsToResource</a>.</p>
   */
  TagKeyList: string[] | undefined;
}

export interface RemoveTagsFromResourceResponse {
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceRequestFilterSensitiveLog = (obj: AddTagsToResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsToResourceResponseFilterSensitiveLog = (obj: AddTagsToResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHapgRequestFilterSensitiveLog = (obj: CreateHapgRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHapgResponseFilterSensitiveLog = (obj: CreateHapgResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHsmRequestFilterSensitiveLog = (obj: CreateHsmRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHsmResponseFilterSensitiveLog = (obj: CreateHsmResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLunaClientRequestFilterSensitiveLog = (obj: CreateLunaClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLunaClientResponseFilterSensitiveLog = (obj: CreateLunaClientResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHapgRequestFilterSensitiveLog = (obj: DeleteHapgRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHapgResponseFilterSensitiveLog = (obj: DeleteHapgResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHsmRequestFilterSensitiveLog = (obj: DeleteHsmRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHsmResponseFilterSensitiveLog = (obj: DeleteHsmResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLunaClientRequestFilterSensitiveLog = (obj: DeleteLunaClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLunaClientResponseFilterSensitiveLog = (obj: DeleteLunaClientResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHapgRequestFilterSensitiveLog = (obj: DescribeHapgRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHapgResponseFilterSensitiveLog = (obj: DescribeHapgResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHsmRequestFilterSensitiveLog = (obj: DescribeHsmRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHsmResponseFilterSensitiveLog = (obj: DescribeHsmResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLunaClientRequestFilterSensitiveLog = (obj: DescribeLunaClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLunaClientResponseFilterSensitiveLog = (obj: DescribeLunaClientResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigRequestFilterSensitiveLog = (obj: GetConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigResponseFilterSensitiveLog = (obj: GetConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableZonesRequestFilterSensitiveLog = (obj: ListAvailableZonesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableZonesResponseFilterSensitiveLog = (obj: ListAvailableZonesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHapgsRequestFilterSensitiveLog = (obj: ListHapgsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHapgsResponseFilterSensitiveLog = (obj: ListHapgsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHsmsRequestFilterSensitiveLog = (obj: ListHsmsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHsmsResponseFilterSensitiveLog = (obj: ListHsmsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLunaClientsRequestFilterSensitiveLog = (obj: ListLunaClientsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLunaClientsResponseFilterSensitiveLog = (obj: ListLunaClientsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHapgRequestFilterSensitiveLog = (obj: ModifyHapgRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHapgResponseFilterSensitiveLog = (obj: ModifyHapgResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHsmRequestFilterSensitiveLog = (obj: ModifyHsmRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyHsmResponseFilterSensitiveLog = (obj: ModifyHsmResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLunaClientRequestFilterSensitiveLog = (obj: ModifyLunaClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLunaClientResponseFilterSensitiveLog = (obj: ModifyLunaClientResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsFromResourceRequestFilterSensitiveLog = (obj: RemoveTagsFromResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsFromResourceResponseFilterSensitiveLog = (obj: RemoveTagsFromResourceResponse): any => ({
  ...obj,
});
