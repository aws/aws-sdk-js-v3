// smithy-typescript generated code
import type { ClientVersion, CloudHsmObjectState, HsmStatus, SubscriptionType } from "./enums";

/**
 * A key-value pair that identifies or specifies metadata about an AWS CloudHSM resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResponse {
  /**
   * The status of the operation.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * Contains the inputs for the CreateHapgRequest action.
 *
 * @public
 */
export interface CreateHapgRequest {
  /**
   * The label of the new high-availability partition group.
   *
   * @public
   */
  Label: string | undefined;
}

/**
 * Contains the output of the CreateHAPartitionGroup action.
 *
 * @public
 */
export interface CreateHapgResponse {
  /**
   * The ARN of the high-availability partition group.
   *
   * @public
   */
  HapgArn?: string | undefined;
}

/**
 * Contains the inputs for the `CreateHsm` operation.
 *
 * @public
 */
export interface CreateHsmRequest {
  /**
   * The identifier of the subnet in your VPC in which to place the HSM.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The SSH public key to install on the HSM.
   *
   * @public
   */
  SshKey: string | undefined;

  /**
   * The IP address to assign to the HSM's ENI.
   *
   * If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.
   *
   * @public
   */
  EniIp?: string | undefined;

  /**
   * The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The external ID from `IamRoleArn`, if present.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * Specifies the type of subscription for the HSM.
   *
   * - **PRODUCTION** - The HSM is being used in a production environment.
   * - **TRIAL** - The HSM is being used in a product trial.
   *
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;

  /**
   * A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.
   *
   * @public
   */
  SyslogIp?: string | undefined;
}

/**
 * Contains the output of the `CreateHsm` operation.
 *
 * @public
 */
export interface CreateHsmResponse {
  /**
   * The ARN of the HSM.
   *
   * @public
   */
  HsmArn?: string | undefined;
}

/**
 * Contains the inputs for the CreateLunaClient action.
 *
 * @public
 */
export interface CreateLunaClientRequest {
  /**
   * The label for the client.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used by this client.
   *
   * @public
   */
  Certificate: string | undefined;
}

/**
 * Contains the output of the CreateLunaClient action.
 *
 * @public
 */
export interface CreateLunaClientResponse {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn?: string | undefined;
}

/**
 * Contains the inputs for the DeleteHapg action.
 *
 * @public
 */
export interface DeleteHapgRequest {
  /**
   * The ARN of the high-availability partition group to delete.
   *
   * @public
   */
  HapgArn: string | undefined;
}

/**
 * Contains the output of the DeleteHapg action.
 *
 * @public
 */
export interface DeleteHapgResponse {
  /**
   * The status of the action.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * Contains the inputs for the DeleteHsm operation.
 *
 * @public
 */
export interface DeleteHsmRequest {
  /**
   * The ARN of the HSM to delete.
   *
   * @public
   */
  HsmArn: string | undefined;
}

/**
 * Contains the output of the DeleteHsm operation.
 *
 * @public
 */
export interface DeleteHsmResponse {
  /**
   * The status of the operation.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientRequest {
  /**
   * The ARN of the client to delete.
   *
   * @public
   */
  ClientArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLunaClientResponse {
  /**
   * The status of the action.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * Contains the inputs for the DescribeHapg action.
 *
 * @public
 */
export interface DescribeHapgRequest {
  /**
   * The ARN of the high-availability partition group to describe.
   *
   * @public
   */
  HapgArn: string | undefined;
}

/**
 * Contains the output of the DescribeHapg action.
 *
 * @public
 */
export interface DescribeHapgResponse {
  /**
   * The ARN of the high-availability partition group.
   *
   * @public
   */
  HapgArn?: string | undefined;

  /**
   * The serial number of the high-availability partition group.
   *
   * @public
   */
  HapgSerial?: string | undefined;

  /**
   * @public
   */
  HsmsLastActionFailed?: string[] | undefined;

  /**
   * @public
   */
  HsmsPendingDeletion?: string[] | undefined;

  /**
   * @public
   */
  HsmsPendingRegistration?: string[] | undefined;

  /**
   * The label for the high-availability partition group.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The date and time the high-availability partition group was last modified.
   *
   * @public
   */
  LastModifiedTimestamp?: string | undefined;

  /**
   * The list of partition serial numbers that belong to the high-availability partition group.
   *
   * @public
   */
  PartitionSerialList?: string[] | undefined;

  /**
   * The state of the high-availability partition group.
   *
   * @public
   */
  State?: CloudHsmObjectState | undefined;
}

/**
 * Contains the inputs for the DescribeHsm operation.
 *
 * @public
 */
export interface DescribeHsmRequest {
  /**
   * The ARN of the HSM. Either the `HsmArn` or the `SerialNumber` parameter must be specified.
   *
   * @public
   */
  HsmArn?: string | undefined;

  /**
   * The serial number of the HSM. Either the `HsmArn` or the `HsmSerialNumber` parameter must be specified.
   *
   * @public
   */
  HsmSerialNumber?: string | undefined;
}

/**
 * Contains the output of the DescribeHsm operation.
 *
 * @public
 */
export interface DescribeHsmResponse {
  /**
   * The ARN of the HSM.
   *
   * @public
   */
  HsmArn?: string | undefined;

  /**
   * The status of the HSM.
   *
   * @public
   */
  Status?: HsmStatus | undefined;

  /**
   * Contains additional information about the status of the HSM.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * The Availability Zone that the HSM is in.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The identifier of the elastic network interface (ENI) attached to the HSM.
   *
   * @public
   */
  EniId?: string | undefined;

  /**
   * The IP address assigned to the HSM's ENI.
   *
   * @public
   */
  EniIp?: string | undefined;

  /**
   * Specifies the type of subscription for the HSM.
   *
   * - **PRODUCTION** - The HSM is being used in a production environment.
   * - **TRIAL** - The HSM is being used in a product trial.
   *
   * @public
   */
  SubscriptionType?: SubscriptionType | undefined;

  /**
   * The subscription start date.
   *
   * @public
   */
  SubscriptionStartDate?: string | undefined;

  /**
   * The subscription end date.
   *
   * @public
   */
  SubscriptionEndDate?: string | undefined;

  /**
   * The identifier of the VPC that the HSM is in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The identifier of the subnet that the HSM is in.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The ARN of the IAM role assigned to the HSM.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The serial number of the HSM.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The name of the HSM vendor.
   *
   * @public
   */
  VendorName?: string | undefined;

  /**
   * The HSM model type.
   *
   * @public
   */
  HsmType?: string | undefined;

  /**
   * The HSM software version.
   *
   * @public
   */
  SoftwareVersion?: string | undefined;

  /**
   * The public SSH key.
   *
   * @public
   */
  SshPublicKey?: string | undefined;

  /**
   * The date and time that the SSH key was last updated.
   *
   * @public
   */
  SshKeyLastUpdated?: string | undefined;

  /**
   * The URI of the certificate server.
   *
   * @public
   */
  ServerCertUri?: string | undefined;

  /**
   * The date and time that the server certificate was last updated.
   *
   * @public
   */
  ServerCertLastUpdated?: string | undefined;

  /**
   * The list of partitions on the HSM.
   *
   * @public
   */
  Partitions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeLunaClientRequest {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn?: string | undefined;

  /**
   * The certificate fingerprint.
   *
   * @public
   */
  CertificateFingerprint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLunaClientResponse {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn?: string | undefined;

  /**
   * The certificate installed on the HSMs used by this client.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The certificate fingerprint.
   *
   * @public
   */
  CertificateFingerprint?: string | undefined;

  /**
   * The date and time the client was last modified.
   *
   * @public
   */
  LastModifiedTimestamp?: string | undefined;

  /**
   * The label of the client.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigRequest {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn: string | undefined;

  /**
   * The client version.
   *
   * @public
   */
  ClientVersion: ClientVersion | undefined;

  /**
   * A list of ARNs that identify the high-availability partition groups that are associated with the client.
   *
   * @public
   */
  HapgList: string[] | undefined;
}

/**
 * @public
 */
export interface GetConfigResponse {
  /**
   * The type of credentials.
   *
   * @public
   */
  ConfigType?: string | undefined;

  /**
   * The chrystoki.conf configuration file.
   *
   * @public
   */
  ConfigFile?: string | undefined;

  /**
   * The certificate file containing the server.pem files of the HSMs.
   *
   * @public
   */
  ConfigCred?: string | undefined;
}

/**
 * Contains the inputs for the ListAvailableZones action.
 *
 * @public
 */
export interface ListAvailableZonesRequest {}

/**
 * @public
 */
export interface ListAvailableZonesResponse {
  /**
   * The list of Availability Zones that have available AWS CloudHSM capacity.
   *
   * @public
   */
  AZList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListHapgsRequest {
  /**
   * The `NextToken` value from a previous call to `ListHapgs`. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHapgsResponse {
  /**
   * The list of high-availability partition groups.
   *
   * @public
   */
  HapgList: string[] | undefined;

  /**
   * If not null, more results are available. Pass this value to `ListHapgs` to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHsmsRequest {
  /**
   * The `NextToken` value from a previous call to `ListHsms`. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the output of the `ListHsms` operation.
 *
 * @public
 */
export interface ListHsmsResponse {
  /**
   * The list of ARNs that identify the HSMs.
   *
   * @public
   */
  HsmList?: string[] | undefined;

  /**
   * If not null, more results are available. Pass this value to `ListHsms` to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLunaClientsRequest {
  /**
   * The `NextToken` value from a previous call to `ListLunaClients`. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLunaClientsResponse {
  /**
   * The list of clients.
   *
   * @public
   */
  ClientList: string[] | undefined;

  /**
   * If not null, more results are available. Pass this to `ListLunaClients` to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the AWS CloudHSM resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * One or more tags.
   *
   * @public
   */
  TagList: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyHapgRequest {
  /**
   * The ARN of the high-availability partition group to modify.
   *
   * @public
   */
  HapgArn: string | undefined;

  /**
   * The new label for the high-availability partition group.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The list of partition serial numbers to make members of the high-availability partition group.
   *
   * @public
   */
  PartitionSerialList?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyHapgResponse {
  /**
   * The ARN of the high-availability partition group.
   *
   * @public
   */
  HapgArn?: string | undefined;
}

/**
 * Contains the inputs for the ModifyHsm operation.
 *
 * @public
 */
export interface ModifyHsmRequest {
  /**
   * The ARN of the HSM to modify.
   *
   * @public
   */
  HsmArn: string | undefined;

  /**
   * The new identifier of the subnet that the HSM is in. The new subnet must be in the same Availability Zone as the current subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The new IP address for the elastic network interface (ENI) attached to the HSM.
   *
   * If the HSM is moved to a different subnet, and an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the new subnet.
   *
   * @public
   */
  EniIp?: string | undefined;

  /**
   * The new IAM role ARN.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The new external ID.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.
   *
   * @public
   */
  SyslogIp?: string | undefined;
}

/**
 * Contains the output of the ModifyHsm operation.
 *
 * @public
 */
export interface ModifyHsmResponse {
  /**
   * The ARN of the HSM.
   *
   * @public
   */
  HsmArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyLunaClientRequest {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn: string | undefined;

  /**
   * The new certificate for the client.
   *
   * @public
   */
  Certificate: string | undefined;
}

/**
 * @public
 */
export interface ModifyLunaClientResponse {
  /**
   * The ARN of the client.
   *
   * @public
   */
  ClientArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the AWS CloudHSM resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag key or keys to remove.
   *
   * Specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use AddTagsToResource.
   *
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResponse {
  /**
   * The status of the operation.
   *
   * @public
   */
  Status: string | undefined;
}
