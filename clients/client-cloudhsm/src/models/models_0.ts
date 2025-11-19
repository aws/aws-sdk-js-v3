// smithy-typescript generated code
import { ClientVersion, CloudHsmObjectState, HsmStatus, SubscriptionType } from "./enums";

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
  HapgArn?: string | undefined;
}

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
  EniIp?: string | undefined;

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
  ExternalId?: string | undefined;

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
  ClientToken?: string | undefined;

  /**
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one
   *       syslog monitoring server.</p>
   * @public
   */
  SyslogIp?: string | undefined;
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
  HsmArn?: string | undefined;
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
  Label?: string | undefined;

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
  ClientArn?: string | undefined;
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
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 * @public
 */
export interface DescribeHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   * @public
   */
  HapgArn?: string | undefined;

  /**
   * <p>The serial number of the high-availability partition group.</p>
   * @public
   */
  HapgSerial?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  HsmsLastActionFailed?: string[] | undefined;

  /**
   * <p></p>
   * @public
   */
  HsmsPendingDeletion?: string[] | undefined;

  /**
   * <p></p>
   * @public
   */
  HsmsPendingRegistration?: string[] | undefined;

  /**
   * <p>The label for the high-availability partition group.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The date and time the high-availability partition group was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: string | undefined;

  /**
   * <p>The list of partition serial numbers that belong to the high-availability partition
   *       group.</p>
   * @public
   */
  PartitionSerialList?: string[] | undefined;

  /**
   * <p>The state of the high-availability partition group.</p>
   * @public
   */
  State?: CloudHsmObjectState | undefined;
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
  HsmArn?: string | undefined;

  /**
   * <p>The serial number of the HSM. Either the <code>HsmArn</code> or the
   *         <code>HsmSerialNumber</code> parameter must be specified.</p>
   * @public
   */
  HsmSerialNumber?: string | undefined;
}

/**
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 * @public
 */
export interface DescribeHsmResponse {
  /**
   * <p>The ARN of the HSM.</p>
   * @public
   */
  HsmArn?: string | undefined;

  /**
   * <p>The status of the HSM.</p>
   * @public
   */
  Status?: HsmStatus | undefined;

  /**
   * <p>Contains additional information about the status of the HSM.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>The Availability Zone that the HSM is in.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The identifier of the elastic network interface (ENI) attached to the HSM.</p>
   * @public
   */
  EniId?: string | undefined;

  /**
   * <p>The IP address assigned to the HSM's ENI.</p>
   * @public
   */
  EniIp?: string | undefined;

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
  SubscriptionType?: SubscriptionType | undefined;

  /**
   * <p>The subscription start date.</p>
   * @public
   */
  SubscriptionStartDate?: string | undefined;

  /**
   * <p>The subscription end date.</p>
   * @public
   */
  SubscriptionEndDate?: string | undefined;

  /**
   * <p>The identifier of the VPC that the HSM is in.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The identifier of the subnet that the HSM is in.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ARN of the IAM role assigned to the HSM.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The serial number of the HSM.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The name of the HSM vendor.</p>
   * @public
   */
  VendorName?: string | undefined;

  /**
   * <p>The HSM model type.</p>
   * @public
   */
  HsmType?: string | undefined;

  /**
   * <p>The HSM software version.</p>
   * @public
   */
  SoftwareVersion?: string | undefined;

  /**
   * <p>The public SSH key.</p>
   * @public
   */
  SshPublicKey?: string | undefined;

  /**
   * <p>The date and time that the SSH key was last updated.</p>
   * @public
   */
  SshKeyLastUpdated?: string | undefined;

  /**
   * <p>The URI of the certificate server.</p>
   * @public
   */
  ServerCertUri?: string | undefined;

  /**
   * <p>The date and time that the server certificate was last updated.</p>
   * @public
   */
  ServerCertLastUpdated?: string | undefined;

  /**
   * <p>The list of partitions on the HSM.</p>
   * @public
   */
  Partitions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeLunaClientRequest {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string | undefined;

  /**
   * <p>The certificate fingerprint.</p>
   * @public
   */
  CertificateFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLunaClientResponse {
  /**
   * <p>The ARN of the client.</p>
   * @public
   */
  ClientArn?: string | undefined;

  /**
   * <p>The certificate installed on the HSMs used by this client.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The certificate fingerprint.</p>
   * @public
   */
  CertificateFingerprint?: string | undefined;

  /**
   * <p>The date and time the client was last modified.</p>
   * @public
   */
  LastModifiedTimestamp?: string | undefined;

  /**
   * <p>The label of the client.</p>
   * @public
   */
  Label?: string | undefined;
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
  ConfigType?: string | undefined;

  /**
   * <p>The chrystoki.conf configuration file.</p>
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   * @public
   */
  ConfigCred?: string | undefined;
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
  AZList?: string[] | undefined;
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
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;
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
  HsmList?: string[] | undefined;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to
   *       retrieve the next set of items.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;
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
  Label?: string | undefined;

  /**
   * <p>The list of partition serial numbers to make members of the high-availability partition
   *       group.</p>
   * @public
   */
  PartitionSerialList?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyHapgResponse {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   * @public
   */
  HapgArn?: string | undefined;
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
  SubnetId?: string | undefined;

  /**
   * <p>The new IP address for the elastic network interface (ENI) attached to the
   *       HSM.</p>
   *          <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP
   *       address will be randomly chosen from the CIDR range of the new subnet.</p>
   * @public
   */
  EniIp?: string | undefined;

  /**
   * <p>The new IAM role ARN.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The new external ID.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports
   *       one syslog monitoring server.</p>
   * @public
   */
  SyslogIp?: string | undefined;
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
  HsmArn?: string | undefined;
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
  ClientArn?: string | undefined;
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
