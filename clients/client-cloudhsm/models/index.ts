import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddTagsToResourceRequest {
  __type?: "AddTagsToResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  TagList: Array<Tag> | undefined;
}

export namespace AddTagsToResourceRequest {
  export function isa(o: any): o is AddTagsToResourceRequest {
    return __isa(o, "AddTagsToResourceRequest");
  }
}

export interface AddTagsToResourceResponse {
  __type?: "AddTagsToResourceResponse";
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

export namespace AddTagsToResourceResponse {
  export function isa(o: any): o is AddTagsToResourceResponse {
    return __isa(o, "AddTagsToResourceResponse");
  }
}

export enum ClientVersion {
  FIVE_ONE = "5.1",
  FIVE_THREE = "5.3"
}

/**
 * <p>Indicates that an internal error occurred.</p>
 */
export interface CloudHsmInternalException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmInternalException";
  $fault: "server";
  /**
   * <p>Additional information about the error.</p>
   */
  message?: string;

  /**
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;
}

export namespace CloudHsmInternalException {
  export function isa(o: any): o is CloudHsmInternalException {
    return __isa(o, "CloudHsmInternalException");
  }
}

export enum CloudHsmObjectState {
  DEGRADED = "DEGRADED",
  READY = "READY",
  UPDATING = "UPDATING"
}

/**
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 */
export interface CloudHsmServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudHsmServiceException";
  $fault: "client";
  /**
   * <p>Additional information about the error.</p>
   */
  message?: string;

  /**
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;
}

export namespace CloudHsmServiceException {
  export function isa(o: any): o is CloudHsmServiceException {
    return __isa(o, "CloudHsmServiceException");
  }
}

/**
 * <p>Contains the inputs for the <a>CreateHapgRequest</a> action.</p>
 */
export interface CreateHapgRequest {
  __type?: "CreateHapgRequest";
  /**
   * <p>The label of the new high-availability partition group.</p>
   */
  Label: string | undefined;
}

export namespace CreateHapgRequest {
  export function isa(o: any): o is CreateHapgRequest {
    return __isa(o, "CreateHapgRequest");
  }
}

/**
 * <p>Contains the output of the <a>CreateHAPartitionGroup</a> action.</p>
 */
export interface CreateHapgResponse {
  __type?: "CreateHapgResponse";
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

export namespace CreateHapgResponse {
  export function isa(o: any): o is CreateHapgResponse {
    return __isa(o, "CreateHapgResponse");
  }
}

/**
 * <p>Contains the inputs for the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmRequest {
  __type?: "CreateHsmRequest";
  /**
   * <p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the
   *       same token will be ignored.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IP address to assign to the HSM's ENI.</p>
   *          <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR
   *       range of the subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The external ID from <code>IamRoleArn</code>, if present.</p>
   */
  ExternalId?: string;

  /**
   * <p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your
   *       behalf.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The SSH public key to install on the HSM.</p>
   */
  SshKey: string | undefined;

  /**
   * <p>The identifier of the subnet in your VPC in which to place the HSM.</p>
   */
  SubnetId: string | undefined;

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
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one
   *       syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

export namespace CreateHsmRequest {
  export function isa(o: any): o is CreateHsmRequest {
    return __isa(o, "CreateHsmRequest");
  }
}

/**
 * <p>Contains the output of the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmResponse {
  __type?: "CreateHsmResponse";
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

export namespace CreateHsmResponse {
  export function isa(o: any): o is CreateHsmResponse {
    return __isa(o, "CreateHsmResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientRequest {
  __type?: "CreateLunaClientRequest";
  /**
   * <p>The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used
   *       by this client.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The label for the client.</p>
   */
  Label?: string;
}

export namespace CreateLunaClientRequest {
  export function isa(o: any): o is CreateLunaClientRequest {
    return __isa(o, "CreateLunaClientRequest");
  }
}

/**
 * <p>Contains the output of the <a>CreateLunaClient</a> action.</p>
 */
export interface CreateLunaClientResponse {
  __type?: "CreateLunaClientResponse";
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

export namespace CreateLunaClientResponse {
  export function isa(o: any): o is CreateLunaClientResponse {
    return __isa(o, "CreateLunaClientResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgRequest {
  __type?: "DeleteHapgRequest";
  /**
   * <p>The ARN of the high-availability partition group to delete.</p>
   */
  HapgArn: string | undefined;
}

export namespace DeleteHapgRequest {
  export function isa(o: any): o is DeleteHapgRequest {
    return __isa(o, "DeleteHapgRequest");
  }
}

/**
 * <p>Contains the output of the <a>DeleteHapg</a> action.</p>
 */
export interface DeleteHapgResponse {
  __type?: "DeleteHapgResponse";
  /**
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

export namespace DeleteHapgResponse {
  export function isa(o: any): o is DeleteHapgResponse {
    return __isa(o, "DeleteHapgResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmRequest {
  __type?: "DeleteHsmRequest";
  /**
   * <p>The ARN of the HSM to delete.</p>
   */
  HsmArn: string | undefined;
}

export namespace DeleteHsmRequest {
  export function isa(o: any): o is DeleteHsmRequest {
    return __isa(o, "DeleteHsmRequest");
  }
}

/**
 * <p>Contains the output of the <a>DeleteHsm</a> operation.</p>
 */
export interface DeleteHsmResponse {
  __type?: "DeleteHsmResponse";
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

export namespace DeleteHsmResponse {
  export function isa(o: any): o is DeleteHsmResponse {
    return __isa(o, "DeleteHsmResponse");
  }
}

export interface DeleteLunaClientRequest {
  __type?: "DeleteLunaClientRequest";
  /**
   * <p>The ARN of the client to delete.</p>
   */
  ClientArn: string | undefined;
}

export namespace DeleteLunaClientRequest {
  export function isa(o: any): o is DeleteLunaClientRequest {
    return __isa(o, "DeleteLunaClientRequest");
  }
}

export interface DeleteLunaClientResponse {
  __type?: "DeleteLunaClientResponse";
  /**
   * <p>The status of the action.</p>
   */
  Status: string | undefined;
}

export namespace DeleteLunaClientResponse {
  export function isa(o: any): o is DeleteLunaClientResponse {
    return __isa(o, "DeleteLunaClientResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgRequest {
  __type?: "DescribeHapgRequest";
  /**
   * <p>The ARN of the high-availability partition group to describe.</p>
   */
  HapgArn: string | undefined;
}

export namespace DescribeHapgRequest {
  export function isa(o: any): o is DescribeHapgRequest {
    return __isa(o, "DescribeHapgRequest");
  }
}

/**
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgResponse {
  __type?: "DescribeHapgResponse";
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
  HsmsLastActionFailed?: Array<string>;

  /**
   * <p></p>
   */
  HsmsPendingDeletion?: Array<string>;

  /**
   * <p></p>
   */
  HsmsPendingRegistration?: Array<string>;

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
  PartitionSerialList?: Array<string>;

  /**
   * <p>The state of the high-availability partition group.</p>
   */
  State?: CloudHsmObjectState | string;
}

export namespace DescribeHapgResponse {
  export function isa(o: any): o is DescribeHapgResponse {
    return __isa(o, "DescribeHapgResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmRequest {
  __type?: "DescribeHsmRequest";
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

export namespace DescribeHsmRequest {
  export function isa(o: any): o is DescribeHsmRequest {
    return __isa(o, "DescribeHsmRequest");
  }
}

/**
 * <p>Contains the output of the <a>DescribeHsm</a> operation.</p>
 */
export interface DescribeHsmResponse {
  __type?: "DescribeHsmResponse";
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
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;

  /**
   * <p>The HSM model type.</p>
   */
  HsmType?: string;

  /**
   * <p>The ARN of the IAM role assigned to the HSM.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The list of partitions on the HSM.</p>
   */
  Partitions?: Array<string>;

  /**
   * <p>The serial number of the HSM.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The date and time that the server certificate was last updated.</p>
   */
  ServerCertLastUpdated?: string;

  /**
   * <p>The URI of the certificate server.</p>
   */
  ServerCertUri?: string;

  /**
   * <p>The HSM software version.</p>
   */
  SoftwareVersion?: string;

  /**
   * <p>The date and time that the SSH key was last updated.</p>
   */
  SshKeyLastUpdated?: string;

  /**
   * <p>The public SSH key.</p>
   */
  SshPublicKey?: string;

  /**
   * <p>The status of the HSM.</p>
   */
  Status?: HsmStatus | string;

  /**
   * <p>Contains additional information about the status of the HSM.</p>
   */
  StatusDetails?: string;

  /**
   * <p>The identifier of the subnet that the HSM is in.</p>
   */
  SubnetId?: string;

  /**
   * <p>The subscription end date.</p>
   */
  SubscriptionEndDate?: string;

  /**
   * <p>The subscription start date.</p>
   */
  SubscriptionStartDate?: string;

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
   * <p>The name of the HSM vendor.</p>
   */
  VendorName?: string;

  /**
   * <p>The identifier of the VPC that the HSM is in.</p>
   */
  VpcId?: string;
}

export namespace DescribeHsmResponse {
  export function isa(o: any): o is DescribeHsmResponse {
    return __isa(o, "DescribeHsmResponse");
  }
}

export interface DescribeLunaClientRequest {
  __type?: "DescribeLunaClientRequest";
  /**
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;

  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

export namespace DescribeLunaClientRequest {
  export function isa(o: any): o is DescribeLunaClientRequest {
    return __isa(o, "DescribeLunaClientRequest");
  }
}

export interface DescribeLunaClientResponse {
  __type?: "DescribeLunaClientResponse";
  /**
   * <p>The certificate installed on the HSMs used by this client.</p>
   */
  Certificate?: string;

  /**
   * <p>The certificate fingerprint.</p>
   */
  CertificateFingerprint?: string;

  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;

  /**
   * <p>The label of the client.</p>
   */
  Label?: string;

  /**
   * <p>The date and time the client was last modified.</p>
   */
  LastModifiedTimestamp?: string;
}

export namespace DescribeLunaClientResponse {
  export function isa(o: any): o is DescribeLunaClientResponse {
    return __isa(o, "DescribeLunaClientResponse");
  }
}

export interface GetConfigRequest {
  __type?: "GetConfigRequest";
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
  HapgList: Array<string> | undefined;
}

export namespace GetConfigRequest {
  export function isa(o: any): o is GetConfigRequest {
    return __isa(o, "GetConfigRequest");
  }
}

export interface GetConfigResponse {
  __type?: "GetConfigResponse";
  /**
   * <p>The certificate file containing the server.pem files of the HSMs.</p>
   */
  ConfigCred?: string;

  /**
   * <p>The chrystoki.conf configuration file.</p>
   */
  ConfigFile?: string;

  /**
   * <p>The type of credentials.</p>
   */
  ConfigType?: string;
}

export namespace GetConfigResponse {
  export function isa(o: any): o is GetConfigResponse {
    return __isa(o, "GetConfigResponse");
  }
}

export enum HsmStatus {
  DEGRADED = "DEGRADED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
  UPDATING = "UPDATING"
}

/**
 * <p>Indicates that one or more of the request parameters are not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>Additional information about the error.</p>
   */
  message?: string;

  /**
   * <p>Indicates if the action can be retried.</p>
   */
  retryable?: boolean;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>
 */
export interface ListAvailableZonesRequest {
  __type?: "ListAvailableZonesRequest";
}

export namespace ListAvailableZonesRequest {
  export function isa(o: any): o is ListAvailableZonesRequest {
    return __isa(o, "ListAvailableZonesRequest");
  }
}

export interface ListAvailableZonesResponse {
  __type?: "ListAvailableZonesResponse";
  /**
   * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
   */
  AZList?: Array<string>;
}

export namespace ListAvailableZonesResponse {
  export function isa(o: any): o is ListAvailableZonesResponse {
    return __isa(o, "ListAvailableZonesResponse");
  }
}

export interface ListHapgsRequest {
  __type?: "ListHapgsRequest";
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListHapgsRequest {
  export function isa(o: any): o is ListHapgsRequest {
    return __isa(o, "ListHapgsRequest");
  }
}

export interface ListHapgsResponse {
  __type?: "ListHapgsResponse";
  /**
   * <p>The list of high-availability partition groups.</p>
   */
  HapgList: Array<string> | undefined;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHapgs</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace ListHapgsResponse {
  export function isa(o: any): o is ListHapgsResponse {
    return __isa(o, "ListHapgsResponse");
  }
}

export interface ListHsmsRequest {
  __type?: "ListHsmsRequest";
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass
   *       null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListHsmsRequest {
  export function isa(o: any): o is ListHsmsRequest {
    return __isa(o, "ListHsmsRequest");
  }
}

/**
 * <p>Contains the output of the <code>ListHsms</code> operation.</p>
 */
export interface ListHsmsResponse {
  __type?: "ListHsmsResponse";
  /**
   * <p>The list of ARNs that identify the HSMs.</p>
   */
  HsmList?: Array<string>;

  /**
   * <p>If not null, more results are available. Pass this value to <code>ListHsms</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace ListHsmsResponse {
  export function isa(o: any): o is ListHsmsResponse {
    return __isa(o, "ListHsmsResponse");
  }
}

export interface ListLunaClientsRequest {
  __type?: "ListLunaClientsRequest";
  /**
   * <p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>.
   *       Pass null if this is the first call.</p>
   */
  NextToken?: string;
}

export namespace ListLunaClientsRequest {
  export function isa(o: any): o is ListLunaClientsRequest {
    return __isa(o, "ListLunaClientsRequest");
  }
}

export interface ListLunaClientsResponse {
  __type?: "ListLunaClientsResponse";
  /**
   * <p>The list of clients.</p>
   */
  ClientList: Array<string> | undefined;

  /**
   * <p>If not null, more results are available. Pass this to <code>ListLunaClients</code> to
   *       retrieve the next set of items.</p>
   */
  NextToken?: string;
}

export namespace ListLunaClientsResponse {
  export function isa(o: any): o is ListLunaClientsResponse {
    return __isa(o, "ListLunaClientsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>One or more tags.</p>
   */
  TagList: Array<Tag> | undefined;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ModifyHapgRequest {
  __type?: "ModifyHapgRequest";
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
  PartitionSerialList?: Array<string>;
}

export namespace ModifyHapgRequest {
  export function isa(o: any): o is ModifyHapgRequest {
    return __isa(o, "ModifyHapgRequest");
  }
}

export interface ModifyHapgResponse {
  __type?: "ModifyHapgResponse";
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;
}

export namespace ModifyHapgResponse {
  export function isa(o: any): o is ModifyHapgResponse {
    return __isa(o, "ModifyHapgResponse");
  }
}

/**
 * <p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmRequest {
  __type?: "ModifyHsmRequest";
  /**
   * <p>The new IP address for the elastic network interface (ENI) attached to the
   *       HSM.</p>
   *          <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP
   *       address will be randomly chosen from the CIDR range of the new subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The new external ID.</p>
   */
  ExternalId?: string;

  /**
   * <p>The ARN of the HSM to modify.</p>
   */
  HsmArn: string | undefined;

  /**
   * <p>The new IAM role ARN.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same
   *       Availability Zone as the current subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports
   *       one syslog monitoring server.</p>
   */
  SyslogIp?: string;
}

export namespace ModifyHsmRequest {
  export function isa(o: any): o is ModifyHsmRequest {
    return __isa(o, "ModifyHsmRequest");
  }
}

/**
 * <p>Contains the output of the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmResponse {
  __type?: "ModifyHsmResponse";
  /**
   * <p>The ARN of the HSM.</p>
   */
  HsmArn?: string;
}

export namespace ModifyHsmResponse {
  export function isa(o: any): o is ModifyHsmResponse {
    return __isa(o, "ModifyHsmResponse");
  }
}

export interface ModifyLunaClientRequest {
  __type?: "ModifyLunaClientRequest";
  /**
   * <p>The new certificate for the client.</p>
   */
  Certificate: string | undefined;

  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn: string | undefined;
}

export namespace ModifyLunaClientRequest {
  export function isa(o: any): o is ModifyLunaClientRequest {
    return __isa(o, "ModifyLunaClientRequest");
  }
}

export interface ModifyLunaClientResponse {
  __type?: "ModifyLunaClientResponse";
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn?: string;
}

export namespace ModifyLunaClientResponse {
  export function isa(o: any): o is ModifyLunaClientResponse {
    return __isa(o, "ModifyLunaClientResponse");
  }
}

export interface RemoveTagsFromResourceRequest {
  __type?: "RemoveTagsFromResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key or keys to remove.</p>
   *          <p>Specify only the tag key to remove (not the value). To overwrite the value for an
   *       existing tag, use <a>AddTagsToResource</a>.</p>
   */
  TagKeyList: Array<string> | undefined;
}

export namespace RemoveTagsFromResourceRequest {
  export function isa(o: any): o is RemoveTagsFromResourceRequest {
    return __isa(o, "RemoveTagsFromResourceRequest");
  }
}

export interface RemoveTagsFromResourceResponse {
  __type?: "RemoveTagsFromResourceResponse";
  /**
   * <p>The status of the operation.</p>
   */
  Status: string | undefined;
}

export namespace RemoveTagsFromResourceResponse {
  export function isa(o: any): o is RemoveTagsFromResourceResponse {
    return __isa(o, "RemoveTagsFromResourceResponse");
  }
}

export enum SubscriptionType {
  PRODUCTION = "PRODUCTION"
}

/**
 * <p>A key-value pair that identifies or specifies metadata about an AWS CloudHSM
 *       resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}
