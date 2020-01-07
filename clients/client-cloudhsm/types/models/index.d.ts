import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
export declare namespace AddTagsToResourceRequest {
    function isa(o: any): o is AddTagsToResourceRequest;
}
export interface AddTagsToResourceResponse {
    __type?: "AddTagsToResourceResponse";
    /**
     * <p>The status of the operation.</p>
     */
    Status: string | undefined;
}
export declare namespace AddTagsToResourceResponse {
    function isa(o: any): o is AddTagsToResourceResponse;
}
export declare enum ClientVersion {
    FIVE_ONE = "5.1",
    FIVE_THREE = "5.3"
}
/**
 * <p>Indicates that an internal error occurred.</p>
 */
export interface CloudHsmInternalException extends __SmithyException, $MetadataBearer {
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
export declare namespace CloudHsmInternalException {
    function isa(o: any): o is CloudHsmInternalException;
}
export declare enum CloudHsmObjectState {
    DEGRADED = "DEGRADED",
    READY = "READY",
    UPDATING = "UPDATING"
}
/**
 * <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 */
export interface CloudHsmServiceException extends __SmithyException, $MetadataBearer {
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
export declare namespace CloudHsmServiceException {
    function isa(o: any): o is CloudHsmServiceException;
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
export declare namespace CreateHapgRequest {
    function isa(o: any): o is CreateHapgRequest;
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
export declare namespace CreateHapgResponse {
    function isa(o: any): o is CreateHapgResponse;
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
export declare namespace CreateHsmRequest {
    function isa(o: any): o is CreateHsmRequest;
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
export declare namespace CreateHsmResponse {
    function isa(o: any): o is CreateHsmResponse;
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
export declare namespace CreateLunaClientRequest {
    function isa(o: any): o is CreateLunaClientRequest;
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
export declare namespace CreateLunaClientResponse {
    function isa(o: any): o is CreateLunaClientResponse;
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
export declare namespace DeleteHapgRequest {
    function isa(o: any): o is DeleteHapgRequest;
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
export declare namespace DeleteHapgResponse {
    function isa(o: any): o is DeleteHapgResponse;
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
export declare namespace DeleteHsmRequest {
    function isa(o: any): o is DeleteHsmRequest;
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
export declare namespace DeleteHsmResponse {
    function isa(o: any): o is DeleteHsmResponse;
}
export interface DeleteLunaClientRequest {
    __type?: "DeleteLunaClientRequest";
    /**
     * <p>The ARN of the client to delete.</p>
     */
    ClientArn: string | undefined;
}
export declare namespace DeleteLunaClientRequest {
    function isa(o: any): o is DeleteLunaClientRequest;
}
export interface DeleteLunaClientResponse {
    __type?: "DeleteLunaClientResponse";
    /**
     * <p>The status of the action.</p>
     */
    Status: string | undefined;
}
export declare namespace DeleteLunaClientResponse {
    function isa(o: any): o is DeleteLunaClientResponse;
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
export declare namespace DescribeHapgRequest {
    function isa(o: any): o is DescribeHapgRequest;
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
export declare namespace DescribeHapgResponse {
    function isa(o: any): o is DescribeHapgResponse;
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
export declare namespace DescribeHsmRequest {
    function isa(o: any): o is DescribeHsmRequest;
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
export declare namespace DescribeHsmResponse {
    function isa(o: any): o is DescribeHsmResponse;
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
export declare namespace DescribeLunaClientRequest {
    function isa(o: any): o is DescribeLunaClientRequest;
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
export declare namespace DescribeLunaClientResponse {
    function isa(o: any): o is DescribeLunaClientResponse;
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
export declare namespace GetConfigRequest {
    function isa(o: any): o is GetConfigRequest;
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
export declare namespace GetConfigResponse {
    function isa(o: any): o is GetConfigResponse;
}
export declare enum HsmStatus {
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
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
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
export declare namespace InvalidRequestException {
    function isa(o: any): o is InvalidRequestException;
}
/**
 * <p>Contains the inputs for the <a>ListAvailableZones</a> action.</p>
 */
export interface ListAvailableZonesRequest {
    __type?: "ListAvailableZonesRequest";
}
export declare namespace ListAvailableZonesRequest {
    function isa(o: any): o is ListAvailableZonesRequest;
}
export interface ListAvailableZonesResponse {
    __type?: "ListAvailableZonesResponse";
    /**
     * <p>The list of Availability Zones that have available AWS CloudHSM capacity.</p>
     */
    AZList?: Array<string>;
}
export declare namespace ListAvailableZonesResponse {
    function isa(o: any): o is ListAvailableZonesResponse;
}
export interface ListHapgsRequest {
    __type?: "ListHapgsRequest";
    /**
     * <p>The <code>NextToken</code> value from a previous call to <code>ListHapgs</code>. Pass
     *       null if this is the first call.</p>
     */
    NextToken?: string;
}
export declare namespace ListHapgsRequest {
    function isa(o: any): o is ListHapgsRequest;
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
export declare namespace ListHapgsResponse {
    function isa(o: any): o is ListHapgsResponse;
}
export interface ListHsmsRequest {
    __type?: "ListHsmsRequest";
    /**
     * <p>The <code>NextToken</code> value from a previous call to <code>ListHsms</code>. Pass
     *       null if this is the first call.</p>
     */
    NextToken?: string;
}
export declare namespace ListHsmsRequest {
    function isa(o: any): o is ListHsmsRequest;
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
export declare namespace ListHsmsResponse {
    function isa(o: any): o is ListHsmsResponse;
}
export interface ListLunaClientsRequest {
    __type?: "ListLunaClientsRequest";
    /**
     * <p>The <code>NextToken</code> value from a previous call to <code>ListLunaClients</code>.
     *       Pass null if this is the first call.</p>
     */
    NextToken?: string;
}
export declare namespace ListLunaClientsRequest {
    function isa(o: any): o is ListLunaClientsRequest;
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
export declare namespace ListLunaClientsResponse {
    function isa(o: any): o is ListLunaClientsResponse;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS CloudHSM resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * <p>One or more tags.</p>
     */
    TagList: Array<Tag> | undefined;
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
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
export declare namespace ModifyHapgRequest {
    function isa(o: any): o is ModifyHapgRequest;
}
export interface ModifyHapgResponse {
    __type?: "ModifyHapgResponse";
    /**
     * <p>The ARN of the high-availability partition group.</p>
     */
    HapgArn?: string;
}
export declare namespace ModifyHapgResponse {
    function isa(o: any): o is ModifyHapgResponse;
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
export declare namespace ModifyHsmRequest {
    function isa(o: any): o is ModifyHsmRequest;
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
export declare namespace ModifyHsmResponse {
    function isa(o: any): o is ModifyHsmResponse;
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
export declare namespace ModifyLunaClientRequest {
    function isa(o: any): o is ModifyLunaClientRequest;
}
export interface ModifyLunaClientResponse {
    __type?: "ModifyLunaClientResponse";
    /**
     * <p>The ARN of the client.</p>
     */
    ClientArn?: string;
}
export declare namespace ModifyLunaClientResponse {
    function isa(o: any): o is ModifyLunaClientResponse;
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
export declare namespace RemoveTagsFromResourceRequest {
    function isa(o: any): o is RemoveTagsFromResourceRequest;
}
export interface RemoveTagsFromResourceResponse {
    __type?: "RemoveTagsFromResourceResponse";
    /**
     * <p>The status of the operation.</p>
     */
    Status: string | undefined;
}
export declare namespace RemoveTagsFromResourceResponse {
    function isa(o: any): o is RemoveTagsFromResourceResponse;
}
export declare enum SubscriptionType {
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
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
