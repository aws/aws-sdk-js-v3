import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace AccessDeniedException {
    function isa(o: any): o is AccessDeniedException;
}
export declare enum AccessDirection {
    inbound = "inbound",
    outbound = "outbound"
}
/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 */
export interface AccountSetupInProgressException extends __SmithyException, $MetadataBearer {
    name: "AccountSetupInProgressException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace AccountSetupInProgressException {
    function isa(o: any): o is AccountSetupInProgressException;
}
/**
 * <p>Describes an add-on that is enabled for an Amazon Lightsail resource.</p>
 */
export interface AddOn {
    __type?: "AddOn";
    /**
     * <p>The name of the add-on.</p>
     */
    name?: string;
    /**
     * <p>The next daily time an automatic snapshot will be created.</p>
     *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
     *       (UTC).</p>
     *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
     *       after.</p>
     */
    nextSnapshotTimeOfDay?: string;
    /**
     * <p>The daily time when an automatic snapshot is created.</p>
     *          <p>The time shown is in <code>HH:00</code> format, and in Coordinated Universal Time
     *       (UTC).</p>
     *          <p>The snapshot is automatically created between the time shown and up to 45 minutes
     *       after.</p>
     */
    snapshotTimeOfDay?: string;
    /**
     * <p>The status of the add-on.</p>
     */
    status?: string;
}
export declare namespace AddOn {
    function isa(o: any): o is AddOn;
}
/**
 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail
 *       resource.</p>
 *          <note>
 *             <p>An additional cost may be associated with enabling add-ons. For more information, see
 *         the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing
 *         page</a>.</p>
 *          </note>
 */
export interface AddOnRequest {
    __type?: "AddOnRequest";
    /**
     * <p>The add-on type.</p>
     */
    addOnType: AddOnType | string | undefined;
    /**
     * <p>An object that represents additional parameters when enabling or modifying the automatic
     *       snapshot add-on.</p>
     */
    autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
}
export declare namespace AddOnRequest {
    function isa(o: any): o is AddOnRequest;
}
export declare enum AddOnType {
    AutoSnapshot = "AutoSnapshot"
}
export interface AllocateStaticIpRequest {
    __type?: "AllocateStaticIpRequest";
    /**
     * <p>The name of the static IP address.</p>
     */
    staticIpName: string | undefined;
}
export declare namespace AllocateStaticIpRequest {
    function isa(o: any): o is AllocateStaticIpRequest;
}
export interface AllocateStaticIpResult {
    __type?: "AllocateStaticIpResult";
    /**
     * <p>An array of key-value pairs containing information about the static IP address you
     *       allocated.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace AllocateStaticIpResult {
    function isa(o: any): o is AllocateStaticIpResult;
}
export interface AttachDiskRequest {
    __type?: "AttachDiskRequest";
    /**
     * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
    /**
     * <p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>
     */
    diskPath: string | undefined;
    /**
     * <p>The name of the Lightsail instance where you want to utilize the storage
     *       disk.</p>
     */
    instanceName: string | undefined;
}
export declare namespace AttachDiskRequest {
    function isa(o: any): o is AttachDiskRequest;
}
export interface AttachDiskResult {
    __type?: "AttachDiskResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace AttachDiskResult {
    function isa(o: any): o is AttachDiskResult;
}
export interface AttachInstancesToLoadBalancerRequest {
    __type?: "AttachInstancesToLoadBalancerRequest";
    /**
     * <p>An array of strings representing the instance name(s) you want to attach to your load
     *       balancer.</p>
     *          <p>An instance must be <code>running</code> before you can attach it to your load
     *       balancer.</p>
     *          <p>There are no additional limits on the number of instances you can attach to your load
     *       balancer, aside from the limit of Lightsail instances you can create in your account
     *       (20).</p>
     */
    instanceNames: Array<string> | undefined;
    /**
     * <p>The name of the load balancer.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace AttachInstancesToLoadBalancerRequest {
    function isa(o: any): o is AttachInstancesToLoadBalancerRequest;
}
export interface AttachInstancesToLoadBalancerResult {
    __type?: "AttachInstancesToLoadBalancerResult";
    /**
     * <p>An object representing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace AttachInstancesToLoadBalancerResult {
    function isa(o: any): o is AttachInstancesToLoadBalancerResult;
}
export interface AttachLoadBalancerTlsCertificateRequest {
    __type?: "AttachLoadBalancerTlsCertificateRequest";
    /**
     * <p>The name of your SSL/TLS certificate.</p>
     */
    certificateName: string | undefined;
    /**
     * <p>The name of the load balancer to which you want to associate the SSL/TLS
     *       certificate.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace AttachLoadBalancerTlsCertificateRequest {
    function isa(o: any): o is AttachLoadBalancerTlsCertificateRequest;
}
export interface AttachLoadBalancerTlsCertificateResult {
    __type?: "AttachLoadBalancerTlsCertificateResult";
    /**
     * <p>An object representing the API operations.</p>
     *          <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get
     *       the certificate and use it for another purpose.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace AttachLoadBalancerTlsCertificateResult {
    function isa(o: any): o is AttachLoadBalancerTlsCertificateResult;
}
export interface AttachStaticIpRequest {
    __type?: "AttachStaticIpRequest";
    /**
     * <p>The instance name to which you want to attach the static IP address.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>The name of the static IP.</p>
     */
    staticIpName: string | undefined;
}
export declare namespace AttachStaticIpRequest {
    function isa(o: any): o is AttachStaticIpRequest;
}
export interface AttachStaticIpResult {
    __type?: "AttachStaticIpResult";
    /**
     * <p>An array of key-value pairs containing information about your API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace AttachStaticIpResult {
    function isa(o: any): o is AttachStaticIpResult;
}
/**
 * <p>Describes a block storage disk that is attached to an instance, and is included in an
 *       automatic snapshot.</p>
 */
export interface AttachedDisk {
    __type?: "AttachedDisk";
    /**
     * <p>The path of the disk (e.g., <code>/dev/xvdf</code>).</p>
     */
    path?: string;
    /**
     * <p>The size of the disk in GB.</p>
     */
    sizeInGb?: number;
}
export declare namespace AttachedDisk {
    function isa(o: any): o is AttachedDisk;
}
/**
 * <p>Describes a request to enable or modify the automatic snapshot add-on for an
 *       Amazon Lightsail instance or disk.</p>
 *          <p>When you modify the automatic snapshot time for a resource, it is typically effective
 *       immediately except under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>If an automatic snapshot has been created for the current day, and you change the
 *           snapshot time to a later time of day, then the new snapshot time will be effective the
 *           following day. This ensures that two snapshots are not created for the current day.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot has not yet been created for the current day, and you change
 *           the snapshot time to an earlier time of day, then the new snapshot time will be effective
 *           the following day and a snapshot is automatically created at the previously set time for
 *           the current day. This ensures that a snapshot is created for the current day.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot has not yet been created for the current day, and you change
 *           the snapshot time to a time that is within 30 minutes from your current time, then the new
 *           snapshot time will be effective the following day and a snapshot is automatically created
 *           at the previously set time for the current day. This ensures that a snapshot is created
 *           for the current day, because 30 minutes is required between your current time and the new
 *           snapshot time that you specify.</p>
 *             </li>
 *             <li>
 *                <p>If an automatic snapshot is scheduled to be created within 30 minutes from your
 *           current time and you change the snapshot time, then the new snapshot time will be
 *           effective the following day and a snapshot is automatically created at the previously set
 *           time for the current day. This ensures that a snapshot is created for the current day,
 *           because 30 minutes is required between your current time and the new snapshot time that
 *           you specify.</p>
 *             </li>
 *          </ul>
 */
export interface AutoSnapshotAddOnRequest {
    __type?: "AutoSnapshotAddOnRequest";
    /**
     * <p>The daily time when an automatic snapshot will be created.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be in <code>HH:00</code> format, and in an hourly increment.</p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>The snapshot will be automatically created between the time specified and up to 45
     *           minutes after.</p>
     *             </li>
     *          </ul>
     */
    snapshotTimeOfDay?: string;
}
export declare namespace AutoSnapshotAddOnRequest {
    function isa(o: any): o is AutoSnapshotAddOnRequest;
}
/**
 * <p>Describes an automatic snapshot.</p>
 */
export interface AutoSnapshotDetails {
    __type?: "AutoSnapshotDetails";
    /**
     * <p>The timestamp when the automatic snapshot was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The date of the automatic snapshot in <code>YYYY-MM-DD</code> format.</p>
     */
    date?: string;
    /**
     * <p>An array of objects that describe the block storage disks attached to the instance when
     *       the automatic snapshot was created.</p>
     */
    fromAttachedDisks?: Array<AttachedDisk>;
    /**
     * <p>The status of the automatic snapshot.</p>
     */
    status?: AutoSnapshotStatus | string;
}
export declare namespace AutoSnapshotDetails {
    function isa(o: any): o is AutoSnapshotDetails;
}
export declare enum AutoSnapshotStatus {
    FAILED = "Failed",
    IN_PROGRESS = "InProgress",
    NOT_FOUND = "NotFound",
    SUCCESS = "Success"
}
/**
 * <p>Describes an Availability Zone.</p>
 */
export interface AvailabilityZone {
    __type?: "AvailabilityZone";
    /**
     * <p>The state of the Availability Zone.</p>
     */
    state?: string;
    /**
     * <p>The name of the Availability Zone. The format is <code>us-east-2a</code>
     *       (case-sensitive).</p>
     */
    zoneName?: string;
}
export declare namespace AvailabilityZone {
    function isa(o: any): o is AvailabilityZone;
}
/**
 * <p>Describes a blueprint (a virtual private server image).</p>
 */
export interface Blueprint {
    __type?: "Blueprint";
    /**
     * <p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or
     *         <code>app_lamp_7_0</code>).</p>
     */
    blueprintId?: string;
    /**
     * <p>The description of the blueprint.</p>
     */
    description?: string;
    /**
     * <p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>
     */
    group?: string;
    /**
     * <p>A Boolean value indicating whether the blueprint is active. Inactive blueprints are
     *       listed to support customers with existing instances but are not necessarily available for
     *       launch of new instances. Blueprints are marked inactive when they become outdated due to
     *       operating system updates or new application releases.</p>
     */
    isActive?: boolean;
    /**
     * <p>The end-user license agreement URL for the image or blueprint.</p>
     */
    licenseUrl?: string;
    /**
     * <p>The minimum bundle power required to run this blueprint. For example, you need a bundle
     *       with a power value of 500 or more to create an instance that uses a blueprint with a minimum
     *       power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes.
     *     </p>
     */
    minPower?: number;
    /**
     * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
     */
    name?: string;
    /**
     * <p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the
     *       blueprint.</p>
     */
    platform?: InstancePlatform | string;
    /**
     * <p>The product URL to learn more about the image or blueprint.</p>
     */
    productUrl?: string;
    /**
     * <p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>
     */
    type?: BlueprintType | string;
    /**
     * <p>The version number of the operating system, application, or stack (e.g.,
     *         <code>2016.03.0</code>).</p>
     */
    version?: string;
    /**
     * <p>The version code.</p>
     */
    versionCode?: string;
}
export declare namespace Blueprint {
    function isa(o: any): o is Blueprint;
}
export declare enum BlueprintType {
    app = "app",
    os = "os"
}
/**
 * <p>Describes a bundle, which is a set of specs describing your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface Bundle {
    __type?: "Bundle";
    /**
     * <p>The bundle ID (e.g., <code>micro_1_0</code>).</p>
     */
    bundleId?: string;
    /**
     * <p>The number of vCPUs included in the bundle (e.g., <code>2</code>).</p>
     */
    cpuCount?: number;
    /**
     * <p>The size of the SSD (e.g., <code>30</code>).</p>
     */
    diskSizeInGb?: number;
    /**
     * <p>The Amazon EC2 instance type (e.g., <code>t2.micro</code>).</p>
     */
    instanceType?: string;
    /**
     * <p>A Boolean value indicating whether the bundle is active.</p>
     */
    isActive?: boolean;
    /**
     * <p>A friendly name for the bundle (e.g., <code>Micro</code>).</p>
     */
    name?: string;
    /**
     * <p>A numeric value that represents the power of the bundle (e.g., <code>500</code>). You
     *       can use the bundle's power value in conjunction with a blueprint's minimum power value to
     *       determine whether the blueprint will run on the bundle. For example, you need a bundle with a
     *       power value of 500 or more to create an instance that uses a blueprint with a minimum power
     *       value of 500.</p>
     */
    power?: number;
    /**
     * <p>The price in US dollars (e.g., <code>5.0</code>).</p>
     */
    price?: number;
    /**
     * <p>The amount of RAM in GB (e.g., <code>2.0</code>).</p>
     */
    ramSizeInGb?: number;
    /**
     * <p>The operating system platform (Linux/Unix-based or Windows Server-based) that the
     *       bundle supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that
     *       supports the <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a
     *         <code>LINUX_UNIX</code> bundle.</p>
     */
    supportedPlatforms?: Array<InstancePlatform | string>;
    /**
     * <p>The data transfer rate per month in GB (e.g., <code>2000</code>).</p>
     */
    transferPerMonthInGb?: number;
}
export declare namespace Bundle {
    function isa(o: any): o is Bundle;
}
export interface CloseInstancePublicPortsRequest {
    __type?: "CloseInstancePublicPortsRequest";
    /**
     * <p>The name of the instance on which you're attempting to close the public
     *       ports.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>Information about the public port you are trying to close.</p>
     */
    portInfo: PortInfo | undefined;
}
export declare namespace CloseInstancePublicPortsRequest {
    function isa(o: any): o is CloseInstancePublicPortsRequest;
}
export interface CloseInstancePublicPortsResult {
    __type?: "CloseInstancePublicPortsResult";
    /**
     * <p>An array of key-value pairs that contains information about the operation.</p>
     */
    operation?: Operation;
}
export declare namespace CloseInstancePublicPortsResult {
    function isa(o: any): o is CloseInstancePublicPortsResult;
}
/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to
 *       create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
 */
export interface CloudFormationStackRecord {
    __type?: "CloudFormationStackRecord";
    /**
     * <p>The Amazon Resource Name (ARN) of the CloudFormation stack record.</p>
     */
    arn?: string;
    /**
     * <p>The date when the CloudFormation stack record was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>A list of objects describing the destination service, which is AWS CloudFormation, and the Amazon
     *       Resource Name (ARN) of the AWS CloudFormation stack.</p>
     */
    destinationInfo?: DestinationInfo;
    /**
     * <p>A list of objects describing the Availability Zone and AWS Region of the CloudFormation
     *       stack record.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the CloudFormation stack record. It starts with
     *         <code>CloudFormationStackRecord</code> followed by a GUID.</p>
     */
    name?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>CloudFormationStackRecord</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>A list of objects describing the source of the CloudFormation stack record.</p>
     */
    sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;
    /**
     * <p>The current state of the CloudFormation stack record.</p>
     */
    state?: RecordState | string;
}
export declare namespace CloudFormationStackRecord {
    function isa(o: any): o is CloudFormationStackRecord;
}
/**
 * <p>Describes the source of a CloudFormation stack record (i.e., the export snapshot
 *       record).</p>
 */
export interface CloudFormationStackRecordSourceInfo {
    __type?: "CloudFormationStackRecordSourceInfo";
    /**
     * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
     */
    arn?: string;
    /**
     * <p>The name of the record.</p>
     */
    name?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
     */
    resourceType?: CloudFormationStackRecordSourceType | string;
}
export declare namespace CloudFormationStackRecordSourceInfo {
    function isa(o: any): o is CloudFormationStackRecordSourceInfo;
}
export declare enum CloudFormationStackRecordSourceType {
    ExportSnapshotRecord = "ExportSnapshotRecord"
}
export interface CopySnapshotRequest {
    __type?: "CopySnapshotRequest";
    /**
     * <p>The date of the source automatic snapshot to copy. Use the <code>get auto snapshots</code>
     *       operation to identify the dates of the available automatic snapshots.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
     *             </li>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
     *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
     *             auto snapshot</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    restoreDate?: string;
    /**
     * <p>The AWS Region where the source manual or automatic snapshot is located.</p>
     */
    sourceRegion: RegionName | string | undefined;
    /**
     * <p>The name of the source instance or disk from which the source automatic snapshot was
     *       created.</p>
     *          <p>Constraint:</p>
     *          <ul>
     *             <li>
     *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    sourceResourceName?: string;
    /**
     * <p>The name of the source manual snapshot to copy.</p>
     *          <p>Constraint:</p>
     *          <ul>
     *             <li>
     *                <p>Define this parameter only when copying a manual snapshot as another manual
     *           snapshot.</p>
     *             </li>
     *          </ul>
     */
    sourceSnapshotName?: string;
    /**
     * <p>The name of the new manual snapshot to be created as a copy.</p>
     */
    targetSnapshotName: string | undefined;
    /**
     * <p>A Boolean value to indicate whether to use the latest available automatic snapshot of the
     *       specified source instance or disk.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>restore date</code>
     *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
     *             date</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    useLatestRestorableAutoSnapshot?: boolean;
}
export declare namespace CopySnapshotRequest {
    function isa(o: any): o is CopySnapshotRequest;
}
export interface CopySnapshotResult {
    __type?: "CopySnapshotResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CopySnapshotResult {
    function isa(o: any): o is CopySnapshotResult;
}
export interface CreateCloudFormationStackRequest {
    __type?: "CreateCloudFormationStackRequest";
    /**
     * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only
     *       pass one instance entry at a time in this array. You will get an invalid parameter error if
     *       you pass more than one instance entry in this array.</p>
     */
    instances: Array<InstanceEntry> | undefined;
}
export declare namespace CreateCloudFormationStackRequest {
    function isa(o: any): o is CreateCloudFormationStackRequest;
}
export interface CreateCloudFormationStackResult {
    __type?: "CreateCloudFormationStackResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateCloudFormationStackResult {
    function isa(o: any): o is CreateCloudFormationStackResult;
}
export interface CreateDiskFromSnapshotRequest {
    __type?: "CreateDiskFromSnapshotRequest";
    /**
     * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
     */
    addOns?: Array<AddOnRequest>;
    /**
     * <p>The Availability Zone where you want to create the disk (e.g.,
     *       <code>us-east-2a</code>). Choose the same Availability Zone as the Lightsail instance where
     *       you want to create the disk.</p>
     *          <p>Use the GetRegions operation to list the Availability Zones where Lightsail is
     *       currently available.</p>
     */
    availabilityZone: string | undefined;
    /**
     * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
    /**
     * <p>The name of the disk snapshot (e.g., <code>my-snapshot</code>) from which to create the
     *       new storage disk.</p>
     *          <p>Constraint:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>source disk name</code>
     *           parameter. The <code>disk snapshot name</code> and <code>source disk name</code>
     *           parameters are mutually exclusive.</p>
     *             </li>
     *          </ul>
     */
    diskSnapshotName?: string;
    /**
     * <p>The date of the automatic snapshot to use for the new disk. Use the <code>get auto
     *         snapshots</code> operation to identify the dates of the available automatic
     *       snapshots.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
     *             </li>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
     *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
     *             auto snapshot</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
     *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    restoreDate?: string;
    /**
     * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
     */
    sizeInGb: number | undefined;
    /**
     * <p>The name of the source disk from which the source automatic snapshot was created.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>disk snapshot name</code>
     *           parameter. The <code>source disk name</code> and <code>disk snapshot name</code>
     *           parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
     *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    sourceDiskName?: string;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>restore date</code>
     *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
     *             date</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
     *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    useLatestRestorableAutoSnapshot?: boolean;
}
export declare namespace CreateDiskFromSnapshotRequest {
    function isa(o: any): o is CreateDiskFromSnapshotRequest;
}
export interface CreateDiskFromSnapshotResult {
    __type?: "CreateDiskFromSnapshotResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateDiskFromSnapshotResult {
    function isa(o: any): o is CreateDiskFromSnapshotResult;
}
export interface CreateDiskRequest {
    __type?: "CreateDiskRequest";
    /**
     * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
     */
    addOns?: Array<AddOnRequest>;
    /**
     * <p>The Availability Zone where you want to create the disk (e.g.,
     *       <code>us-east-2a</code>). Use the same Availability Zone as the Lightsail instance to which
     *       you want to attach the disk.</p>
     *          <p>Use the <code>get regions</code> operation to list the Availability Zones where
     *       Lightsail is currently available.</p>
     */
    availabilityZone: string | undefined;
    /**
     * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
    /**
     * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
     */
    sizeInGb: number | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateDiskRequest {
    function isa(o: any): o is CreateDiskRequest;
}
export interface CreateDiskResult {
    __type?: "CreateDiskResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateDiskResult {
    function isa(o: any): o is CreateDiskResult;
}
export interface CreateDiskSnapshotRequest {
    __type?: "CreateDiskSnapshotRequest";
    /**
     * <p>The unique name of the source disk (e.g., <code>Disk-Virginia-1</code>).</p>
     *          <note>
     *             <p>This parameter cannot be defined together with the <code>instance name</code> parameter.
     *         The <code>disk name</code> and <code>instance name</code> parameters are mutually
     *         exclusive.</p>
     *          </note>
     */
    diskName?: string;
    /**
     * <p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based
     *       on the source disk.</p>
     */
    diskSnapshotName: string | undefined;
    /**
     * <p>The unique name of the source instance (e.g., <code>Amazon_Linux-512MB-Virginia-1</code>).
     *       When this is defined, a snapshot of the instance's system volume is created.</p>
     *          <note>
     *             <p>This parameter cannot be defined together with the <code>disk name</code> parameter. The
     *           <code>instance name</code> and <code>disk name</code> parameters are mutually
     *         exclusive.</p>
     *          </note>
     */
    instanceName?: string;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateDiskSnapshotRequest {
    function isa(o: any): o is CreateDiskSnapshotRequest;
}
export interface CreateDiskSnapshotResult {
    __type?: "CreateDiskSnapshotResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateDiskSnapshotResult {
    function isa(o: any): o is CreateDiskSnapshotResult;
}
export interface CreateDomainEntryRequest {
    __type?: "CreateDomainEntryRequest";
    /**
     * <p>An array of key-value pairs containing information about the domain entry
     *       request.</p>
     */
    domainEntry: DomainEntry | undefined;
    /**
     * <p>The domain name (e.g., <code>example.com</code>) for which you want to create the
     *       domain entry.</p>
     */
    domainName: string | undefined;
}
export declare namespace CreateDomainEntryRequest {
    function isa(o: any): o is CreateDomainEntryRequest;
}
export interface CreateDomainEntryResult {
    __type?: "CreateDomainEntryResult";
    /**
     * <p>An array of key-value pairs containing information about the operation.</p>
     */
    operation?: Operation;
}
export declare namespace CreateDomainEntryResult {
    function isa(o: any): o is CreateDomainEntryResult;
}
export interface CreateDomainRequest {
    __type?: "CreateDomainRequest";
    /**
     * <p>The domain name to manage (e.g., <code>example.com</code>).</p>
     *          <note>
     *             <p>You cannot register a new domain name using Lightsail. You must register a domain
     *         name using Amazon Route 53 or another domain name registrar. If you have already registered
     *         your domain, you can enter its name in this parameter to manage the DNS records for that
     *         domain.</p>
     *          </note>
     */
    domainName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateDomainRequest {
    function isa(o: any): o is CreateDomainRequest;
}
export interface CreateDomainResult {
    __type?: "CreateDomainResult";
    /**
     * <p>An array of key-value pairs containing information about the domain resource you
     *       created.</p>
     */
    operation?: Operation;
}
export declare namespace CreateDomainResult {
    function isa(o: any): o is CreateDomainResult;
}
export interface CreateInstanceSnapshotRequest {
    __type?: "CreateInstanceSnapshotRequest";
    /**
     * <p>The Lightsail instance on which to base your snapshot.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>The name for your new snapshot.</p>
     */
    instanceSnapshotName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateInstanceSnapshotRequest {
    function isa(o: any): o is CreateInstanceSnapshotRequest;
}
export interface CreateInstanceSnapshotResult {
    __type?: "CreateInstanceSnapshotResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your create
     *       instances snapshot request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateInstanceSnapshotResult {
    function isa(o: any): o is CreateInstanceSnapshotResult;
}
export interface CreateInstancesFromSnapshotRequest {
    __type?: "CreateInstancesFromSnapshotRequest";
    /**
     * <p>An array of objects representing the add-ons to enable for the new instance.</p>
     */
    addOns?: Array<AddOnRequest>;
    /**
     * <p>An object containing information about one or more disk mappings.</p>
     */
    attachedDiskMapping?: {
        [key: string]: Array<DiskMap>;
    };
    /**
     * <p>The Availability Zone where you want to create your instances. Use the following
     *       formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones
     *       by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
     *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
     *       parameter to your request.</p>
     */
    availabilityZone: string | undefined;
    /**
     * <p>The bundle of specification information for your virtual private server (or
     *         <i>instance</i>), including the pricing plan (e.g.,
     *       <code>micro_1_0</code>).</p>
     */
    bundleId: string | undefined;
    /**
     * <p>The names for your new instances.</p>
     */
    instanceNames: Array<string> | undefined;
    /**
     * <p>The name of the instance snapshot on which you are basing your new instances. Use the
     *       get instance snapshots operation to return information about your existing
     *       snapshots.</p>
     *          <p>Constraint:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>source instance name</code>
     *           parameter. The <code>instance snapshot name</code> and <code>source instance name</code>
     *           parameters are mutually exclusive.</p>
     *             </li>
     *          </ul>
     */
    instanceSnapshotName?: string;
    /**
     * <p>The name for your key pair.</p>
     */
    keyPairName?: string;
    /**
     * <p>The date of the automatic snapshot to use for the new instance. Use the <code>get auto
     *         snapshots</code> operation to identify the dates of the available automatic
     *       snapshots.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
     *             </li>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
     *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
     *             auto snapshot</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    restoreDate?: string;
    /**
     * <p>The name of the source instance from which the source automatic snapshot was
     *       created.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>instance snapshot name</code>
     *           parameter. The <code>source instance name</code> and <code>instance snapshot name</code>
     *           parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    sourceInstanceName?: string;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>This parameter cannot be defined together with the <code>restore date</code>
     *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
     *             date</code> parameters are mutually exclusive.</p>
     *             </li>
     *             <li>
     *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
     *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     *             </li>
     *          </ul>
     */
    useLatestRestorableAutoSnapshot?: boolean;
    /**
     * <p>You can create a launch script that configures a server with additional user data. For
     *       example, <code>apt-get -y update</code>.</p>
     *          <note>
     *             <p>Depending on the machine image you choose, the command to get software on your
     *         instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
     *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
     *           <a href="https://lightsail.aws.amazon.com/ls/docs/getting-started/article/compare-options-choose-lightsail-instance-image">Dev Guide</a>.</p>
     *          </note>
     */
    userData?: string;
}
export declare namespace CreateInstancesFromSnapshotRequest {
    function isa(o: any): o is CreateInstancesFromSnapshotRequest;
}
export interface CreateInstancesFromSnapshotResult {
    __type?: "CreateInstancesFromSnapshotResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your create
     *       instances from snapshot request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateInstancesFromSnapshotResult {
    function isa(o: any): o is CreateInstancesFromSnapshotResult;
}
export interface CreateInstancesRequest {
    __type?: "CreateInstancesRequest";
    /**
     * <p>An array of objects representing the add-ons to enable for the new instance.</p>
     */
    addOns?: Array<AddOnRequest>;
    /**
     * <p>The Availability Zone in which to create your instance. Use the following format:
     *         <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using
     *       the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
     *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
     *       parameter to your request.</p>
     */
    availabilityZone: string | undefined;
    /**
     * <p>The ID for a virtual private server image (e.g., <code>app_wordpress_4_4</code> or
     *         <code>app_lamp_7_0</code>). Use the <code>get blueprints</code> operation to return a list
     *       of available images (or <i>blueprints</i>).</p>
     *          <note>
     *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
     *         support customers with existing instances and are not necessarily available to create new
     *         instances. Blueprints are marked inactive when they become outdated due to operating system
     *         updates or new application releases.</p>
     *          </note>
     */
    blueprintId: string | undefined;
    /**
     * <p>The bundle of specification information for your virtual private server (or
     *         <i>instance</i>), including the pricing plan (e.g.,
     *       <code>micro_1_0</code>).</p>
     */
    bundleId: string | undefined;
    /**
     * <p>(Deprecated) The name for your custom image.</p>
     *          <note>
     *             <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now
     *         deprecated.</p>
     *          </note>
     */
    customImageName?: string;
    /**
     * <p>The names to use for your new Lightsail instances. Separate multiple values using
     *       quotation marks and commas, for example:
     *       <code>["MyFirstInstance","MySecondInstance"]</code>
     *          </p>
     */
    instanceNames: Array<string> | undefined;
    /**
     * <p>The name of your key pair.</p>
     */
    keyPairName?: string;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>A launch script you can create that configures a server with additional user data. For
     *       example, you might want to run <code>apt-get -y update</code>.</p>
     *          <note>
     *             <p>Depending on the machine image you choose, the command to get software on your
     *         instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
     *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
     *           <a href="https://lightsail.aws.amazon.com/ls/docs/getting-started/article/compare-options-choose-lightsail-instance-image">Dev Guide</a>.</p>
     *          </note>
     */
    userData?: string;
}
export declare namespace CreateInstancesRequest {
    function isa(o: any): o is CreateInstancesRequest;
}
export interface CreateInstancesResult {
    __type?: "CreateInstancesResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your create
     *       instances request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateInstancesResult {
    function isa(o: any): o is CreateInstancesResult;
}
export interface CreateKeyPairRequest {
    __type?: "CreateKeyPairRequest";
    /**
     * <p>The name for your new key pair.</p>
     */
    keyPairName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateKeyPairRequest {
    function isa(o: any): o is CreateKeyPairRequest;
}
export interface CreateKeyPairResult {
    __type?: "CreateKeyPairResult";
    /**
     * <p>An array of key-value pairs containing information about the new key pair you just
     *       created.</p>
     */
    keyPair?: KeyPair;
    /**
     * <p>An array of key-value pairs containing information about the results of your create key
     *       pair request.</p>
     */
    operation?: Operation;
    /**
     * <p>A base64-encoded RSA private key.</p>
     */
    privateKeyBase64?: string;
    /**
     * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
     */
    publicKeyBase64?: string;
}
export declare namespace CreateKeyPairResult {
    function isa(o: any): o is CreateKeyPairResult;
}
export interface CreateLoadBalancerRequest {
    __type?: "CreateLoadBalancerRequest";
    /**
     * <p>The optional alternative domains and subdomains to use with your SSL/TLS certificate
     *       (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>,
     *         <code>blog.example.com</code>).</p>
     */
    certificateAlternativeNames?: Array<string>;
    /**
     * <p>The domain name with which your certificate is associated (e.g.,
     *         <code>example.com</code>).</p>
     *          <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is
     *       required (and vice-versa).</p>
     */
    certificateDomainName?: string;
    /**
     * <p>The name of the SSL/TLS certificate.</p>
     *          <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is
     *       required (and vice-versa).</p>
     */
    certificateName?: string;
    /**
     * <p>The path you provided to perform the load balancer health check. If you didn't specify
     *       a health check path, Lightsail uses the root path of your website (e.g.,
     *       <code>"/"</code>).</p>
     *          <p>You may want to specify a custom health check path other than the root of your
     *       application if your home page loads slowly or has a lot of media or scripting on it.</p>
     */
    healthCheckPath?: string;
    /**
     * <p>The instance port where you're creating your load balancer.</p>
     */
    instancePort: number | undefined;
    /**
     * <p>The name of your load balancer.</p>
     */
    loadBalancerName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateLoadBalancerRequest {
    function isa(o: any): o is CreateLoadBalancerRequest;
}
export interface CreateLoadBalancerResult {
    __type?: "CreateLoadBalancerResult";
    /**
     * <p>An object containing information about the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateLoadBalancerResult {
    function isa(o: any): o is CreateLoadBalancerResult;
}
export interface CreateLoadBalancerTlsCertificateRequest {
    __type?: "CreateLoadBalancerTlsCertificateRequest";
    /**
     * <p>An array of strings listing alternative domains and subdomains for your SSL/TLS
     *       certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9
     *       alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g.,
     *         <code>*.example.com</code>).</p>
     */
    certificateAlternativeNames?: Array<string>;
    /**
     * <p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS
     *       certificate.</p>
     */
    certificateDomainName: string | undefined;
    /**
     * <p>The SSL/TLS certificate name.</p>
     *          <p>You can have up to 10 certificates in your account at one time. Each Lightsail load
     *       balancer can have up to 2 certificates associated with it at one time. There is also an
     *       overall limit to the number of certificates that can be issue in a 365-day period. For more
     *       information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>
     */
    certificateName: string | undefined;
    /**
     * <p>The load balancer name where you want to create the SSL/TLS certificate.</p>
     */
    loadBalancerName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateLoadBalancerTlsCertificateRequest {
    function isa(o: any): o is CreateLoadBalancerTlsCertificateRequest;
}
export interface CreateLoadBalancerTlsCertificateResult {
    __type?: "CreateLoadBalancerTlsCertificateResult";
    /**
     * <p>An object containing information about the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateLoadBalancerTlsCertificateResult {
    function isa(o: any): o is CreateLoadBalancerTlsCertificateResult;
}
export interface CreateRelationalDatabaseFromSnapshotRequest {
    __type?: "CreateRelationalDatabaseFromSnapshotRequest";
    /**
     * <p>The Availability Zone in which to create your new database. Use the
     *         <code>us-east-2a</code> case-sensitive format.</p>
     *          <p>You can get a list of Availability Zones by using the <code>get regions</code>
     *       operation. Be sure to add the <code>include relational database Availability Zones</code>
     *       parameter to your request.</p>
     */
    availabilityZone?: string;
    /**
     * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
     *       specifies a database that is available to resources outside of your Lightsail account. A
     *       value of <code>false</code> specifies a database that is available only to your Lightsail
     *       resources in the same region as your database.</p>
     */
    publiclyAccessible?: boolean;
    /**
     * <p>The bundle ID for your new database. A bundle describes the performance specifications
     *       for your database.</p>
     *          <p>You can get a list of database bundle IDs by using the <code>get relational database
     *         bundles</code> operation.</p>
     *          <p>When creating a new database from a snapshot, you cannot choose a bundle that is
     *       smaller than the bundle of the source database.</p>
     */
    relationalDatabaseBundleId?: string;
    /**
     * <p>The name to use for your new database.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
     *             </li>
     *             <li>
     *                <p>The first and last character must be a letter or number.</p>
     *             </li>
     *          </ul>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>The name of the database snapshot from which to create your new database.</p>
     */
    relationalDatabaseSnapshotName?: string;
    /**
     * <p>The date and time to restore your database from.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be before the latest restorable time for the database.</p>
     *             </li>
     *             <li>
     *                <p>Cannot be specified if the <code>use latest restorable time</code> parameter is
     *             <code>true</code>.</p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Specified in the Unix time format.</p>
     *                <p>For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC,
     *           then you input <code>1538424000</code> as the restore time.</p>
     *
     *             </li>
     *          </ul>
     */
    restoreTime?: Date;
    /**
     * <p>The name of the source database.</p>
     */
    sourceRelationalDatabaseName?: string;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>Specifies whether your database is restored from the latest backup time. A value of
     *         <code>true</code> restores from the latest backup time. </p>
     *          <p>Default: <code>false</code>
     *          </p>
     *          <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is
     *       provided.</p>
     */
    useLatestRestorableTime?: boolean;
}
export declare namespace CreateRelationalDatabaseFromSnapshotRequest {
    function isa(o: any): o is CreateRelationalDatabaseFromSnapshotRequest;
}
export interface CreateRelationalDatabaseFromSnapshotResult {
    __type?: "CreateRelationalDatabaseFromSnapshotResult";
    /**
     * <p>An object describing the result of your create relational database from snapshot
     *       request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateRelationalDatabaseFromSnapshotResult {
    function isa(o: any): o is CreateRelationalDatabaseFromSnapshotResult;
}
export interface CreateRelationalDatabaseRequest {
    __type?: "CreateRelationalDatabaseRequest";
    /**
     * <p>The Availability Zone in which to create your new database. Use the
     *         <code>us-east-2a</code> case-sensitive format.</p>
     *          <p>You can get a list of Availability Zones by using the <code>get regions</code>
     *       operation. Be sure to add the <code>include relational database Availability Zones</code>
     *       parameter to your request.</p>
     */
    availabilityZone?: string;
    /**
     * <p>The name of the master database created when the Lightsail database resource is
     *       created.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must contain from 1 to 64 alphanumeric characters.</p>
     *             </li>
     *             <li>
     *                <p>Cannot be a word reserved by the specified database engine</p>
     *             </li>
     *          </ul>
     */
    masterDatabaseName: string | undefined;
    /**
     * <p>The password for the master user of your new database. The password can include any
     *       printable ASCII character except "/", """, or "@".</p>
     *          <p>Constraints: Must contain 8 to 41 characters.</p>
     */
    masterUserPassword?: string;
    /**
     * <p>The master user name for your new database.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Master user name is required.</p>
     *             </li>
     *             <li>
     *                <p>Must contain from 1 to 16 alphanumeric characters.</p>
     *             </li>
     *             <li>
     *                <p>The first character must be a letter.</p>
     *             </li>
     *             <li>
     *                <p>Cannot be a reserved word for the database engine you choose.</p>
     *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
     *           Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a> or <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>
     *           respectively.</p>
     *             </li>
     *          </ul>
     */
    masterUsername: string | undefined;
    /**
     * <p>The daily time range during which automated backups are created for your new database
     *       if automated backups are enabled.</p>
     *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
     *       each AWS Region. For more information about the preferred backup window time blocks for each
     *       region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service (Amazon RDS) documentation.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p>
     *                <p>Example: <code>16:00-16:30</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Must not conflict with the preferred maintenance window.</p>
     *             </li>
     *             <li>
     *                <p>Must be at least 30 minutes.</p>
     *             </li>
     *          </ul>
     */
    preferredBackupWindow?: string;
    /**
     * <p>The weekly time range during which system maintenance can occur on your new
     *       database.</p>
     *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
     *       each AWS Region, occurring on a random day of the week.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p>
     *             </li>
     *             <li>
     *                <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
     *             </li>
     *             <li>
     *                <p>Must be at least 30 minutes.</p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Example: <code>Tue:17:00-Tue:17:30</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    preferredMaintenanceWindow?: string;
    /**
     * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
     *       specifies a database that is available to resources outside of your Lightsail account. A
     *       value of <code>false</code> specifies a database that is available only to your Lightsail
     *       resources in the same region as your database.</p>
     */
    publiclyAccessible?: boolean;
    /**
     * <p>The blueprint ID for your new database. A blueprint describes the major engine version
     *       of a database.</p>
     *          <p>You can get a list of database blueprints IDs by using the <code>get relational
     *         database blueprints</code> operation.</p>
     */
    relationalDatabaseBlueprintId: string | undefined;
    /**
     * <p>The bundle ID for your new database. A bundle describes the performance specifications
     *       for your database.</p>
     *          <p>You can get a list of database bundle IDs by using the <code>get relational database
     *         bundles</code> operation.</p>
     */
    relationalDatabaseBundleId: string | undefined;
    /**
     * <p>The name to use for your new database.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
     *             </li>
     *             <li>
     *                <p>The first and last character must be a letter or number.</p>
     *             </li>
     *          </ul>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateRelationalDatabaseRequest {
    function isa(o: any): o is CreateRelationalDatabaseRequest;
}
export interface CreateRelationalDatabaseResult {
    __type?: "CreateRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your create relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateRelationalDatabaseResult {
    function isa(o: any): o is CreateRelationalDatabaseResult;
}
export interface CreateRelationalDatabaseSnapshotRequest {
    __type?: "CreateRelationalDatabaseSnapshotRequest";
    /**
     * <p>The name of the database on which to base your new snapshot.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>The name for your new database snapshot.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
     *             </li>
     *             <li>
     *                <p>The first and last character must be a letter or number.</p>
     *             </li>
     *          </ul>
     */
    relationalDatabaseSnapshotName: string | undefined;
    /**
     * <p>The tag keys and optional values to add to the resource during create.</p>
     *          <p>To tag a resource after it has been created, see the <code>tag resource</code>
     *       operation.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace CreateRelationalDatabaseSnapshotRequest {
    function isa(o: any): o is CreateRelationalDatabaseSnapshotRequest;
}
export interface CreateRelationalDatabaseSnapshotResult {
    __type?: "CreateRelationalDatabaseSnapshotResult";
    /**
     * <p>An object describing the result of your create relational database snapshot
     *       request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace CreateRelationalDatabaseSnapshotResult {
    function isa(o: any): o is CreateRelationalDatabaseSnapshotResult;
}
export interface DeleteAutoSnapshotRequest {
    __type?: "DeleteAutoSnapshotRequest";
    /**
     * <p>The date of the automatic snapshot to delete in <code>YYYY-MM-DD</code> format. Use the
     *         <code>get auto snapshots</code> operation to get the available automatic snapshots for a
     *       resource.</p>
     */
    date: string | undefined;
    /**
     * <p>The name of the source instance or disk from which to delete the automatic
     *       snapshot.</p>
     */
    resourceName: string | undefined;
}
export declare namespace DeleteAutoSnapshotRequest {
    function isa(o: any): o is DeleteAutoSnapshotRequest;
}
export interface DeleteAutoSnapshotResult {
    __type?: "DeleteAutoSnapshotResult";
    /**
     * <p>An array of objects that describe the result of your request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteAutoSnapshotResult {
    function isa(o: any): o is DeleteAutoSnapshotResult;
}
export interface DeleteDiskRequest {
    __type?: "DeleteDiskRequest";
    /**
     * <p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
    /**
     * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
     */
    forceDeleteAddOns?: boolean;
}
export declare namespace DeleteDiskRequest {
    function isa(o: any): o is DeleteDiskRequest;
}
export interface DeleteDiskResult {
    __type?: "DeleteDiskResult";
    /**
     * <p>An array of objects that describe the result of your request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteDiskResult {
    function isa(o: any): o is DeleteDiskResult;
}
export interface DeleteDiskSnapshotRequest {
    __type?: "DeleteDiskSnapshotRequest";
    /**
     * <p>The name of the disk snapshot you want to delete (e.g.,
     *       <code>my-disk-snapshot</code>).</p>
     */
    diskSnapshotName: string | undefined;
}
export declare namespace DeleteDiskSnapshotRequest {
    function isa(o: any): o is DeleteDiskSnapshotRequest;
}
export interface DeleteDiskSnapshotResult {
    __type?: "DeleteDiskSnapshotResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteDiskSnapshotResult {
    function isa(o: any): o is DeleteDiskSnapshotResult;
}
export interface DeleteDomainEntryRequest {
    __type?: "DeleteDomainEntryRequest";
    /**
     * <p>An array of key-value pairs containing information about your domain entries.</p>
     */
    domainEntry: DomainEntry | undefined;
    /**
     * <p>The name of the domain entry to delete.</p>
     */
    domainName: string | undefined;
}
export declare namespace DeleteDomainEntryRequest {
    function isa(o: any): o is DeleteDomainEntryRequest;
}
export interface DeleteDomainEntryResult {
    __type?: "DeleteDomainEntryResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your delete
     *       domain entry request.</p>
     */
    operation?: Operation;
}
export declare namespace DeleteDomainEntryResult {
    function isa(o: any): o is DeleteDomainEntryResult;
}
export interface DeleteDomainRequest {
    __type?: "DeleteDomainRequest";
    /**
     * <p>The specific domain name to delete.</p>
     */
    domainName: string | undefined;
}
export declare namespace DeleteDomainRequest {
    function isa(o: any): o is DeleteDomainRequest;
}
export interface DeleteDomainResult {
    __type?: "DeleteDomainResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your delete
     *       domain request.</p>
     */
    operation?: Operation;
}
export declare namespace DeleteDomainResult {
    function isa(o: any): o is DeleteDomainResult;
}
export interface DeleteInstanceRequest {
    __type?: "DeleteInstanceRequest";
    /**
     * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
     */
    forceDeleteAddOns?: boolean;
    /**
     * <p>The name of the instance to delete.</p>
     */
    instanceName: string | undefined;
}
export declare namespace DeleteInstanceRequest {
    function isa(o: any): o is DeleteInstanceRequest;
}
export interface DeleteInstanceResult {
    __type?: "DeleteInstanceResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your delete
     *       instance request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteInstanceResult {
    function isa(o: any): o is DeleteInstanceResult;
}
export interface DeleteInstanceSnapshotRequest {
    __type?: "DeleteInstanceSnapshotRequest";
    /**
     * <p>The name of the snapshot to delete.</p>
     */
    instanceSnapshotName: string | undefined;
}
export declare namespace DeleteInstanceSnapshotRequest {
    function isa(o: any): o is DeleteInstanceSnapshotRequest;
}
export interface DeleteInstanceSnapshotResult {
    __type?: "DeleteInstanceSnapshotResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your delete
     *       instance snapshot request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteInstanceSnapshotResult {
    function isa(o: any): o is DeleteInstanceSnapshotResult;
}
export interface DeleteKeyPairRequest {
    __type?: "DeleteKeyPairRequest";
    /**
     * <p>The name of the key pair to delete.</p>
     */
    keyPairName: string | undefined;
}
export declare namespace DeleteKeyPairRequest {
    function isa(o: any): o is DeleteKeyPairRequest;
}
export interface DeleteKeyPairResult {
    __type?: "DeleteKeyPairResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your delete key
     *       pair request.</p>
     */
    operation?: Operation;
}
export declare namespace DeleteKeyPairResult {
    function isa(o: any): o is DeleteKeyPairResult;
}
export interface DeleteKnownHostKeysRequest {
    __type?: "DeleteKnownHostKeysRequest";
    /**
     * <p>The name of the instance for which you want to reset the host key or certificate.</p>
     */
    instanceName: string | undefined;
}
export declare namespace DeleteKnownHostKeysRequest {
    function isa(o: any): o is DeleteKnownHostKeysRequest;
}
export interface DeleteKnownHostKeysResult {
    __type?: "DeleteKnownHostKeysResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteKnownHostKeysResult {
    function isa(o: any): o is DeleteKnownHostKeysResult;
}
export interface DeleteLoadBalancerRequest {
    __type?: "DeleteLoadBalancerRequest";
    /**
     * <p>The name of the load balancer you want to delete.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace DeleteLoadBalancerRequest {
    function isa(o: any): o is DeleteLoadBalancerRequest;
}
export interface DeleteLoadBalancerResult {
    __type?: "DeleteLoadBalancerResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteLoadBalancerResult {
    function isa(o: any): o is DeleteLoadBalancerResult;
}
export interface DeleteLoadBalancerTlsCertificateRequest {
    __type?: "DeleteLoadBalancerTlsCertificateRequest";
    /**
     * <p>The SSL/TLS certificate name.</p>
     */
    certificateName: string | undefined;
    /**
     * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p>
     *          <p>There can be two certificates associated with a Lightsail load balancer: the primary
     *       and the backup. The <code>force</code> parameter is required when the primary SSL/TLS
     *       certificate is in use by an instance attached to the load balancer.</p>
     */
    force?: boolean;
    /**
     * <p>The load balancer name.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace DeleteLoadBalancerTlsCertificateRequest {
    function isa(o: any): o is DeleteLoadBalancerTlsCertificateRequest;
}
export interface DeleteLoadBalancerTlsCertificateResult {
    __type?: "DeleteLoadBalancerTlsCertificateResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteLoadBalancerTlsCertificateResult {
    function isa(o: any): o is DeleteLoadBalancerTlsCertificateResult;
}
export interface DeleteRelationalDatabaseRequest {
    __type?: "DeleteRelationalDatabaseRequest";
    /**
     * <p>The name of the database snapshot created if <code>skip final snapshot</code> is
     *         <code>false</code>, which is the default value for that parameter.</p>
     *          <note>
     *             <p>Specifying this parameter and also specifying the <code>skip final snapshot</code>
     *         parameter to <code>true</code> results in an error.</p>
     *          </note>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
     *             </li>
     *             <li>
     *                <p>The first and last character must be a letter or number.</p>
     *             </li>
     *          </ul>
     */
    finalRelationalDatabaseSnapshotName?: string;
    /**
     * <p>The name of the database that you are deleting.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>Determines whether a final database snapshot is created before your database is
     *       deleted. If <code>true</code> is specified, no database snapshot is created. If
     *         <code>false</code> is specified, a database snapshot is created before your database is
     *       deleted.</p>
     *          <p>You must specify the <code>final relational database snapshot name</code> parameter if
     *       the <code>skip final snapshot</code> parameter is <code>false</code>.</p>
     *          <p>Default: <code>false</code>
     *          </p>
     */
    skipFinalSnapshot?: boolean;
}
export declare namespace DeleteRelationalDatabaseRequest {
    function isa(o: any): o is DeleteRelationalDatabaseRequest;
}
export interface DeleteRelationalDatabaseResult {
    __type?: "DeleteRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your delete relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteRelationalDatabaseResult {
    function isa(o: any): o is DeleteRelationalDatabaseResult;
}
export interface DeleteRelationalDatabaseSnapshotRequest {
    __type?: "DeleteRelationalDatabaseSnapshotRequest";
    /**
     * <p>The name of the database snapshot that you are deleting.</p>
     */
    relationalDatabaseSnapshotName: string | undefined;
}
export declare namespace DeleteRelationalDatabaseSnapshotRequest {
    function isa(o: any): o is DeleteRelationalDatabaseSnapshotRequest;
}
export interface DeleteRelationalDatabaseSnapshotResult {
    __type?: "DeleteRelationalDatabaseSnapshotResult";
    /**
     * <p>An object describing the result of your delete relational database snapshot
     *       request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DeleteRelationalDatabaseSnapshotResult {
    function isa(o: any): o is DeleteRelationalDatabaseSnapshotResult;
}
/**
 * <p>Describes the destination of a record.</p>
 */
export interface DestinationInfo {
    __type?: "DestinationInfo";
    /**
     * <p>The ID of the resource created at the destination.</p>
     */
    id?: string;
    /**
     * <p>The destination service of the record.</p>
     */
    service?: string;
}
export declare namespace DestinationInfo {
    function isa(o: any): o is DestinationInfo;
}
export interface DetachDiskRequest {
    __type?: "DetachDiskRequest";
    /**
     * <p>The unique name of the disk you want to detach from your instance (e.g.,
     *         <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
}
export declare namespace DetachDiskRequest {
    function isa(o: any): o is DetachDiskRequest;
}
export interface DetachDiskResult {
    __type?: "DetachDiskResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DetachDiskResult {
    function isa(o: any): o is DetachDiskResult;
}
export interface DetachInstancesFromLoadBalancerRequest {
    __type?: "DetachInstancesFromLoadBalancerRequest";
    /**
     * <p>An array of strings containing the names of the instances you want to detach from the
     *       load balancer.</p>
     */
    instanceNames: Array<string> | undefined;
    /**
     * <p>The name of the Lightsail load balancer.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace DetachInstancesFromLoadBalancerRequest {
    function isa(o: any): o is DetachInstancesFromLoadBalancerRequest;
}
export interface DetachInstancesFromLoadBalancerResult {
    __type?: "DetachInstancesFromLoadBalancerResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DetachInstancesFromLoadBalancerResult {
    function isa(o: any): o is DetachInstancesFromLoadBalancerResult;
}
export interface DetachStaticIpRequest {
    __type?: "DetachStaticIpRequest";
    /**
     * <p>The name of the static IP to detach from the instance.</p>
     */
    staticIpName: string | undefined;
}
export declare namespace DetachStaticIpRequest {
    function isa(o: any): o is DetachStaticIpRequest;
}
export interface DetachStaticIpResult {
    __type?: "DetachStaticIpResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your detach
     *       static IP request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DetachStaticIpResult {
    function isa(o: any): o is DetachStaticIpResult;
}
export interface DisableAddOnRequest {
    __type?: "DisableAddOnRequest";
    /**
     * <p>The add-on type to disable.</p>
     */
    addOnType: AddOnType | string | undefined;
    /**
     * <p>The name of the source resource for which to disable the add-on.</p>
     */
    resourceName: string | undefined;
}
export declare namespace DisableAddOnRequest {
    function isa(o: any): o is DisableAddOnRequest;
}
export interface DisableAddOnResult {
    __type?: "DisableAddOnResult";
    /**
     * <p>An array of objects that describe the result of your request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace DisableAddOnResult {
    function isa(o: any): o is DisableAddOnResult;
}
/**
 * <p>Describes a system disk or a block storage disk.</p>
 */
export interface Disk {
    __type?: "Disk";
    /**
     * <p>An array of objects representing the add-ons enabled on the disk.</p>
     */
    addOns?: Array<AddOn>;
    /**
     * <p>The Amazon Resource Name (ARN) of the disk.</p>
     */
    arn?: string;
    /**
     * <p>The resources to which the disk is attached.</p>
     */
    attachedTo?: string;
    /**
     * <p>(Deprecated) The attachment state of the disk.</p>
     *          <note>
     *             <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code>
     *         for system disks in the API response. It is now deprecated, but still included in the
     *         response. Use <code>isAttached</code> instead.</p>
     *          </note>
     */
    attachmentState?: string;
    /**
     * <p>The date when the disk was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>(Deprecated) The number of GB in use by the disk.</p>
     *          <note>
     *             <p>In releases prior to November 14, 2017, this parameter was not included in the API
     *         response. It is now deprecated.</p>
     *          </note>
     */
    gbInUse?: number;
    /**
     * <p>The input/output operations per second (IOPS) of the disk.</p>
     */
    iops?: number;
    /**
     * <p>A Boolean value indicating whether the disk is attached.</p>
     */
    isAttached?: boolean;
    /**
     * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
     *       loaded on it).</p>
     */
    isSystemDisk?: boolean;
    /**
     * <p>The AWS Region and Availability Zone where the disk is located.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The unique name of the disk.</p>
     */
    name?: string;
    /**
     * <p>The disk path.</p>
     */
    path?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>Disk</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The size of the disk in GB.</p>
     */
    sizeInGb?: number;
    /**
     * <p>Describes the status of the disk.</p>
     */
    state?: DiskState | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace Disk {
    function isa(o: any): o is Disk;
}
/**
 * <p>Describes a disk.</p>
 */
export interface DiskInfo {
    __type?: "DiskInfo";
    /**
     * <p>A Boolean value indicating whether this disk is a system disk (has an operating system
     *       loaded on it).</p>
     */
    isSystemDisk?: boolean;
    /**
     * <p>The disk name.</p>
     */
    name?: string;
    /**
     * <p>The disk path.</p>
     */
    path?: string;
    /**
     * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
     */
    sizeInGb?: number;
}
export declare namespace DiskInfo {
    function isa(o: any): o is DiskInfo;
}
/**
 * <p>Describes a block storage disk mapping.</p>
 */
export interface DiskMap {
    __type?: "DiskMap";
    /**
     * <p>The new disk name (e.g., <code>my-new-disk</code>).</p>
     */
    newDiskName?: string;
    /**
     * <p>The original disk path exposed to the instance (for example,
     *       <code>/dev/sdh</code>).</p>
     */
    originalDiskPath?: string;
}
export declare namespace DiskMap {
    function isa(o: any): o is DiskMap;
}
/**
 * <p>Describes a block storage disk snapshot.</p>
 */
export interface DiskSnapshot {
    __type?: "DiskSnapshot";
    /**
     * <p>The Amazon Resource Name (ARN) of the disk snapshot.</p>
     */
    arn?: string;
    /**
     * <p>The date when the disk snapshot was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was
     *       created.</p>
     */
    fromDiskArn?: string;
    /**
     * <p>The unique name of the source disk from which the disk snapshot was created.</p>
     */
    fromDiskName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume)
     *       snapshot was created.</p>
     */
    fromInstanceArn?: string;
    /**
     * <p>The unique name of the source instance from which the disk (system volume) snapshot was
     *       created.</p>
     */
    fromInstanceName?: string;
    /**
     * <p>A Boolean value indicating whether the snapshot was created from an automatic
     *       snapshot.</p>
     */
    isFromAutoSnapshot?: boolean;
    /**
     * <p>The AWS Region and Availability Zone where the disk snapshot was created.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
     */
    name?: string;
    /**
     * <p>The progress of the disk snapshot operation.</p>
     */
    progress?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The size of the disk in GB.</p>
     */
    sizeInGb?: number;
    /**
     * <p>The status of the disk snapshot operation.</p>
     */
    state?: DiskSnapshotState | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace DiskSnapshot {
    function isa(o: any): o is DiskSnapshot;
}
/**
 * <p>Describes a disk snapshot.</p>
 */
export interface DiskSnapshotInfo {
    __type?: "DiskSnapshotInfo";
    /**
     * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
     */
    sizeInGb?: number;
}
export declare namespace DiskSnapshotInfo {
    function isa(o: any): o is DiskSnapshotInfo;
}
export declare enum DiskSnapshotState {
    Completed = "completed",
    Error = "error",
    Pending = "pending",
    Unknown = "unknown"
}
export declare enum DiskState {
    Available = "available",
    Error = "error",
    InUse = "in-use",
    Pending = "pending",
    Unknown = "unknown"
}
/**
 * <p>Describes a domain where you are storing recordsets in Lightsail.</p>
 */
export interface Domain {
    __type?: "Domain";
    /**
     * <p>The Amazon Resource Name (ARN) of the domain recordset (e.g.,
     *         <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>
     */
    arn?: string;
    /**
     * <p>The date when the domain recordset was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>An array of key-value pairs containing information about the domain entries.</p>
     */
    domainEntries?: Array<DomainEntry>;
    /**
     * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the domain.</p>
     */
    name?: string;
    /**
     * <p>The resource type. </p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace Domain {
    function isa(o: any): o is Domain;
}
/**
 * <p>Describes a domain recordset entry.</p>
 */
export interface DomainEntry {
    __type?: "DomainEntry";
    /**
     * <p>The ID of the domain recordset entry.</p>
     */
    id?: string;
    /**
     * <p>When <code>true</code>, specifies whether the domain entry is an alias used by the
     *       Lightsail load balancer. You can include an alias (A type) record in your request, which
     *       points to a load balancer DNS name and routes traffic to your load balancer</p>
     */
    isAlias?: boolean;
    /**
     * <p>The name of the domain.</p>
     */
    name?: string;
    /**
     * <p>(Deprecated) The options for the domain entry.</p>
     *          <note>
     *             <p>In releases prior to November 29, 2017, this parameter was not included in the API
     *         response. It is now deprecated.</p>
     *          </note>
     */
    options?: {
        [key: string]: string;
    };
    /**
     * <p>The target AWS name server (e.g., <code>ns-111.awsdns-22.com.</code>).</p>
     *          <p>For Lightsail load balancers, the value looks like
     *         <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. Be sure
     *       to also set <code>isAlias</code> to <code>true</code> when setting up an A record for a load
     *       balancer.</p>
     */
    target?: string;
    /**
     * <p>The type of domain entry, such as address (A), canonical name (CNAME), mail exchanger
     *       (MX), name server (NS), start of authority (SOA), service locator (SRV), or text
     *       (TXT).</p>
     *          <p>The following domain entry types can be used:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>A</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CNAME</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MX</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NS</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SOA</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SRV</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TXT</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    type?: string;
}
export declare namespace DomainEntry {
    function isa(o: any): o is DomainEntry;
}
export interface DownloadDefaultKeyPairRequest {
    __type?: "DownloadDefaultKeyPairRequest";
}
export declare namespace DownloadDefaultKeyPairRequest {
    function isa(o: any): o is DownloadDefaultKeyPairRequest;
}
export interface DownloadDefaultKeyPairResult {
    __type?: "DownloadDefaultKeyPairResult";
    /**
     * <p>A base64-encoded RSA private key.</p>
     */
    privateKeyBase64?: string;
    /**
     * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
     */
    publicKeyBase64?: string;
}
export declare namespace DownloadDefaultKeyPairResult {
    function isa(o: any): o is DownloadDefaultKeyPairResult;
}
export interface EnableAddOnRequest {
    __type?: "EnableAddOnRequest";
    /**
     * <p>An array of strings representing the add-on to enable or modify.</p>
     */
    addOnRequest: AddOnRequest | undefined;
    /**
     * <p>The name of the source resource for which to enable or modify the add-on.</p>
     */
    resourceName: string | undefined;
}
export declare namespace EnableAddOnRequest {
    function isa(o: any): o is EnableAddOnRequest;
}
export interface EnableAddOnResult {
    __type?: "EnableAddOnResult";
    /**
     * <p>An array of objects that describe the result of your request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace EnableAddOnResult {
    function isa(o: any): o is EnableAddOnResult;
}
/**
 * <p>Describes an export snapshot record.</p>
 */
export interface ExportSnapshotRecord {
    __type?: "ExportSnapshotRecord";
    /**
     * <p>The Amazon Resource Name (ARN) of the export snapshot record.</p>
     */
    arn?: string;
    /**
     * <p>The date when the export snapshot record was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>A list of objects describing the destination of the export snapshot record.</p>
     */
    destinationInfo?: DestinationInfo;
    /**
     * <p>The AWS Region and Availability Zone where the export snapshot record is located.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The export snapshot record name.</p>
     */
    name?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>ExportSnapshotRecord</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>A list of objects describing the source of the export snapshot record.</p>
     */
    sourceInfo?: ExportSnapshotRecordSourceInfo;
    /**
     * <p>The state of the export snapshot record.</p>
     */
    state?: RecordState | string;
}
export declare namespace ExportSnapshotRecord {
    function isa(o: any): o is ExportSnapshotRecord;
}
/**
 * <p>Describes the source of an export snapshot record.</p>
 */
export interface ExportSnapshotRecordSourceInfo {
    __type?: "ExportSnapshotRecordSourceInfo";
    /**
     * <p>The Amazon Resource Name (ARN) of the source instance or disk snapshot.</p>
     */
    arn?: string;
    /**
     * <p>The date when the source instance or disk snapshot was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>A list of objects describing a disk snapshot.</p>
     */
    diskSnapshotInfo?: DiskSnapshotInfo;
    /**
     * <p>The Amazon Resource Name (ARN) of the snapshot's source instance or disk.</p>
     */
    fromResourceArn?: string;
    /**
     * <p>The name of the snapshot's source instance or disk.</p>
     */
    fromResourceName?: string;
    /**
     * <p>A list of objects describing an instance snapshot.</p>
     */
    instanceSnapshotInfo?: InstanceSnapshotInfo;
    /**
     * <p>The name of the source instance or disk snapshot.</p>
     */
    name?: string;
    /**
     * <p>The Lightsail resource type (e.g., <code>InstanceSnapshot</code> or
     *         <code>DiskSnapshot</code>).</p>
     */
    resourceType?: ExportSnapshotRecordSourceType | string;
}
export declare namespace ExportSnapshotRecordSourceInfo {
    function isa(o: any): o is ExportSnapshotRecordSourceInfo;
}
export declare enum ExportSnapshotRecordSourceType {
    DiskSnapshot = "DiskSnapshot",
    InstanceSnapshot = "InstanceSnapshot"
}
export interface ExportSnapshotRequest {
    __type?: "ExportSnapshotRequest";
    /**
     * <p>The name of the instance or disk snapshot to be exported to Amazon EC2.</p>
     */
    sourceSnapshotName: string | undefined;
}
export declare namespace ExportSnapshotRequest {
    function isa(o: any): o is ExportSnapshotRequest;
}
export interface ExportSnapshotResult {
    __type?: "ExportSnapshotResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace ExportSnapshotResult {
    function isa(o: any): o is ExportSnapshotResult;
}
export interface GetActiveNamesRequest {
    __type?: "GetActiveNamesRequest";
    /**
     * <p>A token used for paginating results from your get active names request.</p>
     */
    pageToken?: string;
}
export declare namespace GetActiveNamesRequest {
    function isa(o: any): o is GetActiveNamesRequest;
}
export interface GetActiveNamesResult {
    __type?: "GetActiveNamesResult";
    /**
     * <p>The list of active names returned by the get active names request.</p>
     */
    activeNames?: Array<string>;
    /**
     * <p>A token used for advancing to the next page of results from your get active names
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetActiveNamesResult {
    function isa(o: any): o is GetActiveNamesResult;
}
export interface GetAutoSnapshotsRequest {
    __type?: "GetAutoSnapshotsRequest";
    /**
     * <p>The name of the source instance or disk from which to get automatic snapshot
     *       information.</p>
     */
    resourceName: string | undefined;
}
export declare namespace GetAutoSnapshotsRequest {
    function isa(o: any): o is GetAutoSnapshotsRequest;
}
export interface GetAutoSnapshotsResult {
    __type?: "GetAutoSnapshotsResult";
    /**
     * <p>An array of objects that describe the automatic snapshots that are available for the
     *       specified source instance or disk.</p>
     */
    autoSnapshots?: Array<AutoSnapshotDetails>;
    /**
     * <p>The name of the source instance or disk for the automatic snapshots.</p>
     */
    resourceName?: string;
    /**
     * <p>The resource type (e.g., <code>Instance</code> or <code>Disk</code>).</p>
     */
    resourceType?: ResourceType | string;
}
export declare namespace GetAutoSnapshotsResult {
    function isa(o: any): o is GetAutoSnapshotsResult;
}
export interface GetBlueprintsRequest {
    __type?: "GetBlueprintsRequest";
    /**
     * <p>A Boolean value indicating whether to include inactive results in your
     *       request.</p>
     */
    includeInactive?: boolean;
    /**
     * <p>A token used for advancing to the next page of results from your get blueprints
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetBlueprintsRequest {
    function isa(o: any): o is GetBlueprintsRequest;
}
export interface GetBlueprintsResult {
    __type?: "GetBlueprintsResult";
    /**
     * <p>An array of key-value pairs that contains information about the available
     *       blueprints.</p>
     */
    blueprints?: Array<Blueprint>;
    /**
     * <p>A token used for advancing to the next page of results from your get blueprints
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetBlueprintsResult {
    function isa(o: any): o is GetBlueprintsResult;
}
export interface GetBundlesRequest {
    __type?: "GetBundlesRequest";
    /**
     * <p>A Boolean value that indicates whether to include inactive bundle results in your
     *       request.</p>
     */
    includeInactive?: boolean;
    /**
     * <p>A token used for advancing to the next page of results from your get bundles
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetBundlesRequest {
    function isa(o: any): o is GetBundlesRequest;
}
export interface GetBundlesResult {
    __type?: "GetBundlesResult";
    /**
     * <p>An array of key-value pairs that contains information about the available
     *       bundles.</p>
     */
    bundles?: Array<Bundle>;
    /**
     * <p>A token used for advancing to the next page of results from your get active names
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetBundlesResult {
    function isa(o: any): o is GetBundlesResult;
}
export interface GetCloudFormationStackRecordsRequest {
    __type?: "GetCloudFormationStackRecordsRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get cloud
     *         formation stack records</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetCloudFormationStackRecordsRequest {
    function isa(o: any): o is GetCloudFormationStackRecordsRequest;
}
export interface GetCloudFormationStackRecordsResult {
    __type?: "GetCloudFormationStackRecordsResult";
    /**
     * <p>A list of objects describing the CloudFormation stack records.</p>
     */
    cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
    /**
     * <p>A token used for advancing to the next page of results of your get relational database
     *       bundles request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetCloudFormationStackRecordsResult {
    function isa(o: any): o is GetCloudFormationStackRecordsResult;
}
export interface GetDiskRequest {
    __type?: "GetDiskRequest";
    /**
     * <p>The name of the disk (e.g., <code>my-disk</code>).</p>
     */
    diskName: string | undefined;
}
export declare namespace GetDiskRequest {
    function isa(o: any): o is GetDiskRequest;
}
export interface GetDiskResult {
    __type?: "GetDiskResult";
    /**
     * <p>An object containing information about the disk.</p>
     */
    disk?: Disk;
}
export declare namespace GetDiskResult {
    function isa(o: any): o is GetDiskResult;
}
export interface GetDiskSnapshotRequest {
    __type?: "GetDiskSnapshotRequest";
    /**
     * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
     */
    diskSnapshotName: string | undefined;
}
export declare namespace GetDiskSnapshotRequest {
    function isa(o: any): o is GetDiskSnapshotRequest;
}
export interface GetDiskSnapshotResult {
    __type?: "GetDiskSnapshotResult";
    /**
     * <p>An object containing information about the disk snapshot.</p>
     */
    diskSnapshot?: DiskSnapshot;
}
export declare namespace GetDiskSnapshotResult {
    function isa(o: any): o is GetDiskSnapshotResult;
}
export interface GetDiskSnapshotsRequest {
    __type?: "GetDiskSnapshotsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your GetDiskSnapshots
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetDiskSnapshotsRequest {
    function isa(o: any): o is GetDiskSnapshotsRequest;
}
export interface GetDiskSnapshotsResult {
    __type?: "GetDiskSnapshotsResult";
    /**
     * <p>An array of objects containing information about all block storage disk
     *       snapshots.</p>
     */
    diskSnapshots?: Array<DiskSnapshot>;
    /**
     * <p>A token used for advancing to the next page of results from your GetDiskSnapshots
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetDiskSnapshotsResult {
    function isa(o: any): o is GetDiskSnapshotsResult;
}
export interface GetDisksRequest {
    __type?: "GetDisksRequest";
    /**
     * <p>A token used for advancing to the next page of results from your GetDisks
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetDisksRequest {
    function isa(o: any): o is GetDisksRequest;
}
export interface GetDisksResult {
    __type?: "GetDisksResult";
    /**
     * <p>An array of objects containing information about all block storage disks.</p>
     */
    disks?: Array<Disk>;
    /**
     * <p>A token used for advancing to the next page of results from your GetDisks
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetDisksResult {
    function isa(o: any): o is GetDisksResult;
}
export interface GetDomainRequest {
    __type?: "GetDomainRequest";
    /**
     * <p>The domain name for which your want to return information about.</p>
     */
    domainName: string | undefined;
}
export declare namespace GetDomainRequest {
    function isa(o: any): o is GetDomainRequest;
}
export interface GetDomainResult {
    __type?: "GetDomainResult";
    /**
     * <p>An array of key-value pairs containing information about your get domain
     *       request.</p>
     */
    domain?: Domain;
}
export declare namespace GetDomainResult {
    function isa(o: any): o is GetDomainResult;
}
export interface GetDomainsRequest {
    __type?: "GetDomainsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get domains
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetDomainsRequest {
    function isa(o: any): o is GetDomainsRequest;
}
export interface GetDomainsResult {
    __type?: "GetDomainsResult";
    /**
     * <p>An array of key-value pairs containing information about each of the domain entries in
     *       the user's account.</p>
     */
    domains?: Array<Domain>;
    /**
     * <p>A token used for advancing to the next page of results from your get active names
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetDomainsResult {
    function isa(o: any): o is GetDomainsResult;
}
export interface GetExportSnapshotRecordsRequest {
    __type?: "GetExportSnapshotRecordsRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get export
     *         snapshot records</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetExportSnapshotRecordsRequest {
    function isa(o: any): o is GetExportSnapshotRecordsRequest;
}
export interface GetExportSnapshotRecordsResult {
    __type?: "GetExportSnapshotRecordsResult";
    /**
     * <p>A list of objects describing the export snapshot records.</p>
     */
    exportSnapshotRecords?: Array<ExportSnapshotRecord>;
    /**
     * <p>A token used for advancing to the next page of results of your get relational database
     *       bundles request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetExportSnapshotRecordsResult {
    function isa(o: any): o is GetExportSnapshotRecordsResult;
}
export interface GetInstanceAccessDetailsRequest {
    __type?: "GetInstanceAccessDetailsRequest";
    /**
     * <p>The name of the instance to access.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>The protocol to use to connect to your instance. Defaults to
     *       <code>ssh</code>.</p>
     */
    protocol?: InstanceAccessProtocol | string;
}
export declare namespace GetInstanceAccessDetailsRequest {
    function isa(o: any): o is GetInstanceAccessDetailsRequest;
}
export interface GetInstanceAccessDetailsResult {
    __type?: "GetInstanceAccessDetailsResult";
    /**
     * <p>An array of key-value pairs containing information about a get instance access
     *       request.</p>
     */
    accessDetails?: InstanceAccessDetails;
}
export declare namespace GetInstanceAccessDetailsResult {
    function isa(o: any): o is GetInstanceAccessDetailsResult;
}
export interface GetInstanceMetricDataRequest {
    __type?: "GetInstanceMetricDataRequest";
    /**
     * <p>The end time of the time period.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>The name of the instance for which you want to get metrics data.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>The metric name to get data about. </p>
     */
    metricName: InstanceMetricName | string | undefined;
    /**
     * <p>The granularity, in seconds, of the returned data points.</p>
     */
    period: number | undefined;
    /**
     * <p>The start time of the time period.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>The instance statistics. </p>
     */
    statistics: Array<MetricStatistic | string> | undefined;
    /**
     * <p>The unit. The list of valid values is below.</p>
     */
    unit: MetricUnit | string | undefined;
}
export declare namespace GetInstanceMetricDataRequest {
    function isa(o: any): o is GetInstanceMetricDataRequest;
}
export interface GetInstanceMetricDataResult {
    __type?: "GetInstanceMetricDataResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       instance metric data request.</p>
     */
    metricData?: Array<MetricDatapoint>;
    /**
     * <p>The metric name to return data for.</p>
     */
    metricName?: InstanceMetricName | string;
}
export declare namespace GetInstanceMetricDataResult {
    function isa(o: any): o is GetInstanceMetricDataResult;
}
export interface GetInstancePortStatesRequest {
    __type?: "GetInstancePortStatesRequest";
    /**
     * <p>The name of the instance.</p>
     */
    instanceName: string | undefined;
}
export declare namespace GetInstancePortStatesRequest {
    function isa(o: any): o is GetInstancePortStatesRequest;
}
export interface GetInstancePortStatesResult {
    __type?: "GetInstancePortStatesResult";
    /**
     * <p>Information about the port states resulting from your request.</p>
     */
    portStates?: Array<InstancePortState>;
}
export declare namespace GetInstancePortStatesResult {
    function isa(o: any): o is GetInstancePortStatesResult;
}
export interface GetInstanceRequest {
    __type?: "GetInstanceRequest";
    /**
     * <p>The name of the instance.</p>
     */
    instanceName: string | undefined;
}
export declare namespace GetInstanceRequest {
    function isa(o: any): o is GetInstanceRequest;
}
export interface GetInstanceResult {
    __type?: "GetInstanceResult";
    /**
     * <p>An array of key-value pairs containing information about the specified
     *       instance.</p>
     */
    instance?: Instance;
}
export declare namespace GetInstanceResult {
    function isa(o: any): o is GetInstanceResult;
}
export interface GetInstanceSnapshotRequest {
    __type?: "GetInstanceSnapshotRequest";
    /**
     * <p>The name of the snapshot for which you are requesting information.</p>
     */
    instanceSnapshotName: string | undefined;
}
export declare namespace GetInstanceSnapshotRequest {
    function isa(o: any): o is GetInstanceSnapshotRequest;
}
export interface GetInstanceSnapshotResult {
    __type?: "GetInstanceSnapshotResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       instance snapshot request.</p>
     */
    instanceSnapshot?: InstanceSnapshot;
}
export declare namespace GetInstanceSnapshotResult {
    function isa(o: any): o is GetInstanceSnapshotResult;
}
export interface GetInstanceSnapshotsRequest {
    __type?: "GetInstanceSnapshotsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get instance snapshots
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetInstanceSnapshotsRequest {
    function isa(o: any): o is GetInstanceSnapshotsRequest;
}
export interface GetInstanceSnapshotsResult {
    __type?: "GetInstanceSnapshotsResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       instance snapshots request.</p>
     */
    instanceSnapshots?: Array<InstanceSnapshot>;
    /**
     * <p>A token used for advancing to the next page of results from your get instance snapshots
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetInstanceSnapshotsResult {
    function isa(o: any): o is GetInstanceSnapshotsResult;
}
export interface GetInstanceStateRequest {
    __type?: "GetInstanceStateRequest";
    /**
     * <p>The name of the instance to get state information about.</p>
     */
    instanceName: string | undefined;
}
export declare namespace GetInstanceStateRequest {
    function isa(o: any): o is GetInstanceStateRequest;
}
export interface GetInstanceStateResult {
    __type?: "GetInstanceStateResult";
    /**
     * <p>The state of the instance.</p>
     */
    state?: InstanceState;
}
export declare namespace GetInstanceStateResult {
    function isa(o: any): o is GetInstanceStateResult;
}
export interface GetInstancesRequest {
    __type?: "GetInstancesRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get instances
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetInstancesRequest {
    function isa(o: any): o is GetInstancesRequest;
}
export interface GetInstancesResult {
    __type?: "GetInstancesResult";
    /**
     * <p>An array of key-value pairs containing information about your instances.</p>
     */
    instances?: Array<Instance>;
    /**
     * <p>A token used for advancing to the next page of results from your get instances
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetInstancesResult {
    function isa(o: any): o is GetInstancesResult;
}
export interface GetKeyPairRequest {
    __type?: "GetKeyPairRequest";
    /**
     * <p>The name of the key pair for which you are requesting information.</p>
     */
    keyPairName: string | undefined;
}
export declare namespace GetKeyPairRequest {
    function isa(o: any): o is GetKeyPairRequest;
}
export interface GetKeyPairResult {
    __type?: "GetKeyPairResult";
    /**
     * <p>An array of key-value pairs containing information about the key pair.</p>
     */
    keyPair?: KeyPair;
}
export declare namespace GetKeyPairResult {
    function isa(o: any): o is GetKeyPairResult;
}
export interface GetKeyPairsRequest {
    __type?: "GetKeyPairsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get key pairs
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetKeyPairsRequest {
    function isa(o: any): o is GetKeyPairsRequest;
}
export interface GetKeyPairsResult {
    __type?: "GetKeyPairsResult";
    /**
     * <p>An array of key-value pairs containing information about the key pairs.</p>
     */
    keyPairs?: Array<KeyPair>;
    /**
     * <p>A token used for advancing to the next page of results from your get key pairs
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetKeyPairsResult {
    function isa(o: any): o is GetKeyPairsResult;
}
export interface GetLoadBalancerMetricDataRequest {
    __type?: "GetLoadBalancerMetricDataRequest";
    /**
     * <p>The end time of the period.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>The name of the load balancer.</p>
     */
    loadBalancerName: string | undefined;
    /**
     * <p>The metric about which you want to return information. Valid values are listed below,
     *       along with the most useful <code>statistics</code> to include in your request.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>ClientTLSNegotiationErrorCount</code>
     *                   </b> - The
     *           number of TLS connections initiated by the client that did not establish a session with
     *           the load balancer. Possible causes include a mismatch of ciphers or protocols.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HealthyHostCount</code>
     *                   </b> - The number of
     *           target instances that are considered healthy.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
     *             <code>Minimum</code>, and <code>Maximum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>UnhealthyHostCount</code>
     *                   </b> - The number of
     *           target instances that are considered unhealthy.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
     *             <code>Minimum</code>, and <code>Maximum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_LB_4XX_Count</code>
     *                   </b> - The number of
     *           HTTP 4XX client error codes that originate from the load balancer. Client errors are
     *           generated when requests are malformed or incomplete. These requests have not been received
     *           by the target instance. This count does not include any response codes generated by the
     *           target instances.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_LB_5XX_Count</code>
     *                   </b> - The number of
     *           HTTP 5XX server error codes that originate from the load balancer. This count does not
     *           include any response codes generated by the target instances.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and
     *             <code>Average</code> all return <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_2XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_3XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer. </p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_4XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_5XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>InstanceResponseTime</code>
     *                   </b> - The time
     *           elapsed, in seconds, after the request leaves the load balancer until a response from the
     *           target instance is received.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is
     *           <code>Average</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>RejectedConnectionCount</code>
     *                   </b> - The number
     *           of connections that were rejected because the load balancer had reached its maximum number
     *           of connections.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>RequestCount</code>
     *                   </b> - The number of requests
     *           processed over IPv4. This count includes only the requests with a response generated by a
     *           target instance of the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *          </ul>
     */
    metricName: LoadBalancerMetricName | string | undefined;
    /**
     * <p>The granularity, in seconds, of the returned data points.</p>
     */
    period: number | undefined;
    /**
     * <p>The start time of the period.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>An array of statistics that you want to request metrics for. Valid values are listed
     *       below.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>SampleCount</code>
     *                   </b> - The count (number) of
     *           data points used for the statistical calculation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Average</code>
     *                   </b> - The value of Sum /
     *           SampleCount during the specified period. By comparing this statistic with the Minimum and
     *           Maximum, you can determine the full scope of a metric and how close the average use is to
     *           the Minimum and Maximum. This comparison helps you to know when to increase or decrease
     *           your resources as needed.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Sum</code>
     *                   </b> - All values submitted for the
     *           matching metric added together. This statistic can be useful for determining the total
     *           volume of a metric.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Minimum</code>
     *                   </b> - The lowest value observed
     *           during the specified period. You can use this value to determine low volumes of activity
     *           for your application.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Maximum</code>
     *                   </b> - The highest value observed
     *           during the specified period. You can use this value to determine high volumes of activity
     *           for your application.</p>
     *             </li>
     *          </ul>
     */
    statistics: Array<MetricStatistic | string> | undefined;
    /**
     * <p>The unit for the time period request. Valid values are listed below.</p>
     */
    unit: MetricUnit | string | undefined;
}
export declare namespace GetLoadBalancerMetricDataRequest {
    function isa(o: any): o is GetLoadBalancerMetricDataRequest;
}
export interface GetLoadBalancerMetricDataResult {
    __type?: "GetLoadBalancerMetricDataResult";
    /**
     * <p>An array of metric datapoint objects.</p>
     */
    metricData?: Array<MetricDatapoint>;
    /**
     * <p>The metric about which you are receiving information. Valid values are listed below,
     *       along with the most useful <code>statistics</code> to include in your request.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>ClientTLSNegotiationErrorCount</code>
     *                   </b> - The
     *           number of TLS connections initiated by the client that did not establish a session with
     *           the load balancer. Possible causes include a mismatch of ciphers or protocols.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HealthyHostCount</code>
     *                   </b> - The number of
     *           target instances that are considered healthy.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
     *             <code>Minimum</code>, and <code>Maximum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>UnhealthyHostCount</code>
     *                   </b> - The number of
     *           target instances that are considered unhealthy.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
     *             <code>Minimum</code>, and <code>Maximum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_LB_4XX_Count</code>
     *                   </b> - The number of
     *           HTTP 4XX client error codes that originate from the load balancer. Client errors are
     *           generated when requests are malformed or incomplete. These requests have not been received
     *           by the target instance. This count does not include any response codes generated by the
     *           target instances.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_LB_5XX_Count</code>
     *                   </b> - The number of
     *           HTTP 5XX server error codes that originate from the load balancer. This count does not
     *           include any response codes generated by the target instances.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and
     *             <code>Average</code> all return <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_2XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_3XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer. </p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_4XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>HTTPCode_Instance_5XX_Count</code>
     *                   </b> - The
     *           number of HTTP response codes generated by the target instances. This does not include any
     *           response codes generated by the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>InstanceResponseTime</code>
     *                   </b> - The time
     *           elapsed, in seconds, after the request leaves the load balancer until a response from the
     *           target instance is received.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is
     *           <code>Average</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>RejectedConnectionCount</code>
     *                   </b> - The number
     *           of connections that were rejected because the load balancer had reached its maximum number
     *           of connections.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>RequestCount</code>
     *                   </b> - The number of requests
     *           processed over IPv4. This count includes only the requests with a response generated by a
     *           target instance of the load balancer.</p>
     *                <p>
     *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
     *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
     *             <code>1</code>.</p>
     *             </li>
     *          </ul>
     */
    metricName?: LoadBalancerMetricName | string;
}
export declare namespace GetLoadBalancerMetricDataResult {
    function isa(o: any): o is GetLoadBalancerMetricDataResult;
}
export interface GetLoadBalancerRequest {
    __type?: "GetLoadBalancerRequest";
    /**
     * <p>The name of the load balancer.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace GetLoadBalancerRequest {
    function isa(o: any): o is GetLoadBalancerRequest;
}
export interface GetLoadBalancerResult {
    __type?: "GetLoadBalancerResult";
    /**
     * <p>An object containing information about your load balancer.</p>
     */
    loadBalancer?: LoadBalancer;
}
export declare namespace GetLoadBalancerResult {
    function isa(o: any): o is GetLoadBalancerResult;
}
export interface GetLoadBalancerTlsCertificatesRequest {
    __type?: "GetLoadBalancerTlsCertificatesRequest";
    /**
     * <p>The name of the load balancer you associated with your SSL/TLS certificate.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace GetLoadBalancerTlsCertificatesRequest {
    function isa(o: any): o is GetLoadBalancerTlsCertificatesRequest;
}
export interface GetLoadBalancerTlsCertificatesResult {
    __type?: "GetLoadBalancerTlsCertificatesResult";
    /**
     * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS
     *       certificates.</p>
     */
    tlsCertificates?: Array<LoadBalancerTlsCertificate>;
}
export declare namespace GetLoadBalancerTlsCertificatesResult {
    function isa(o: any): o is GetLoadBalancerTlsCertificatesResult;
}
export interface GetLoadBalancersRequest {
    __type?: "GetLoadBalancersRequest";
    /**
     * <p>A token used for paginating the results from your GetLoadBalancers request.</p>
     */
    pageToken?: string;
}
export declare namespace GetLoadBalancersRequest {
    function isa(o: any): o is GetLoadBalancersRequest;
}
export interface GetLoadBalancersResult {
    __type?: "GetLoadBalancersResult";
    /**
     * <p>An array of LoadBalancer objects describing your load balancers.</p>
     */
    loadBalancers?: Array<LoadBalancer>;
    /**
     * <p>A token used for advancing to the next page of results from your GetLoadBalancers
     *       request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetLoadBalancersResult {
    function isa(o: any): o is GetLoadBalancersResult;
}
export interface GetOperationRequest {
    __type?: "GetOperationRequest";
    /**
     * <p>A GUID used to identify the operation.</p>
     */
    operationId: string | undefined;
}
export declare namespace GetOperationRequest {
    function isa(o: any): o is GetOperationRequest;
}
export interface GetOperationResult {
    __type?: "GetOperationResult";
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       operation request.</p>
     */
    operation?: Operation;
}
export declare namespace GetOperationResult {
    function isa(o: any): o is GetOperationResult;
}
export interface GetOperationsForResourceRequest {
    __type?: "GetOperationsForResourceRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get operations for
     *       resource request.</p>
     */
    pageToken?: string;
    /**
     * <p>The name of the resource for which you are requesting information.</p>
     */
    resourceName: string | undefined;
}
export declare namespace GetOperationsForResourceRequest {
    function isa(o: any): o is GetOperationsForResourceRequest;
}
export interface GetOperationsForResourceResult {
    __type?: "GetOperationsForResourceResult";
    /**
     * <p>(Deprecated) Returns the number of pages of results that remain.</p>
     *          <note>
     *             <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the
     *         API. It is now deprecated, and the API returns the <code>next page token</code> parameter
     *         instead.</p>
     *          </note>
     */
    nextPageCount?: string;
    /**
     * <p>An identifier that was returned from the previous call to this operation, which can be
     *       used to return the next set of items in the list.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       operations for resource request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace GetOperationsForResourceResult {
    function isa(o: any): o is GetOperationsForResourceResult;
}
export interface GetOperationsRequest {
    __type?: "GetOperationsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get operations
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetOperationsRequest {
    function isa(o: any): o is GetOperationsRequest;
}
export interface GetOperationsResult {
    __type?: "GetOperationsResult";
    /**
     * <p>A token used for advancing to the next page of results from your get operations
     *       request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An array of key-value pairs containing information about the results of your get
     *       operations request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace GetOperationsResult {
    function isa(o: any): o is GetOperationsResult;
}
export interface GetRegionsRequest {
    __type?: "GetRegionsRequest";
    /**
     * <p>A Boolean value indicating whether to also include Availability Zones in your get
     *       regions request. Availability Zones are indicated with a letter: e.g.,
     *       <code>us-east-2a</code>.</p>
     */
    includeAvailabilityZones?: boolean;
    /**
     * <p>>A Boolean value indicating whether to also include Availability Zones for databases in
     *       your get regions request. Availability Zones are indicated with a letter (e.g.,
     *         <code>us-east-2a</code>).</p>
     */
    includeRelationalDatabaseAvailabilityZones?: boolean;
}
export declare namespace GetRegionsRequest {
    function isa(o: any): o is GetRegionsRequest;
}
export interface GetRegionsResult {
    __type?: "GetRegionsResult";
    /**
     * <p>An array of key-value pairs containing information about your get regions
     *       request.</p>
     */
    regions?: Array<Region>;
}
export declare namespace GetRegionsResult {
    function isa(o: any): o is GetRegionsResult;
}
export interface GetRelationalDatabaseBlueprintsRequest {
    __type?: "GetRelationalDatabaseBlueprintsRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database blueprints</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetRelationalDatabaseBlueprintsRequest {
    function isa(o: any): o is GetRelationalDatabaseBlueprintsRequest;
}
export interface GetRelationalDatabaseBlueprintsResult {
    __type?: "GetRelationalDatabaseBlueprintsResult";
    /**
     * <p>An object describing the result of your get relational database blueprints
     *       request.</p>
     */
    blueprints?: Array<RelationalDatabaseBlueprint>;
    /**
     * <p>A token used for advancing to the next page of results of your get relational database
     *       blueprints request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetRelationalDatabaseBlueprintsResult {
    function isa(o: any): o is GetRelationalDatabaseBlueprintsResult;
}
export interface GetRelationalDatabaseBundlesRequest {
    __type?: "GetRelationalDatabaseBundlesRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database bundles</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetRelationalDatabaseBundlesRequest {
    function isa(o: any): o is GetRelationalDatabaseBundlesRequest;
}
export interface GetRelationalDatabaseBundlesResult {
    __type?: "GetRelationalDatabaseBundlesResult";
    /**
     * <p>An object describing the result of your get relational database bundles
     *       request.</p>
     */
    bundles?: Array<RelationalDatabaseBundle>;
    /**
     * <p>A token used for advancing to the next page of results of your get relational database
     *       bundles request.</p>
     */
    nextPageToken?: string;
}
export declare namespace GetRelationalDatabaseBundlesResult {
    function isa(o: any): o is GetRelationalDatabaseBundlesResult;
}
export interface GetRelationalDatabaseEventsRequest {
    __type?: "GetRelationalDatabaseEventsRequest";
    /**
     * <p>The number of minutes in the past from which to retrieve events. For example, to get
     *       all events from the past 2 hours, enter 120.</p>
     *          <p>Default: <code>60</code>
     *          </p>
     *          <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>
     */
    durationInMinutes?: number;
    /**
     * <p>A token used for advancing to a specific page of results from for get relational
     *       database events request.</p>
     */
    pageToken?: string;
    /**
     * <p>The name of the database from which to get events.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace GetRelationalDatabaseEventsRequest {
    function isa(o: any): o is GetRelationalDatabaseEventsRequest;
}
export interface GetRelationalDatabaseEventsResult {
    __type?: "GetRelationalDatabaseEventsResult";
    /**
     * <p>A token used for advancing to the next page of results from your get relational
     *       database events request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An object describing the result of your get relational database events
     *       request.</p>
     */
    relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
}
export declare namespace GetRelationalDatabaseEventsResult {
    function isa(o: any): o is GetRelationalDatabaseEventsResult;
}
export interface GetRelationalDatabaseLogEventsRequest {
    __type?: "GetRelationalDatabaseLogEventsRequest";
    /**
     * <p>The end of the time interval from which to get log events.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Specified in the Unix time format.</p>
     *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then
     *           you input <code>1538424000</code> as the end time.</p>
     *
     *             </li>
     *          </ul>
     */
    endTime?: Date;
    /**
     * <p>The name of the log stream.</p>
     *          <p>Use the <code>get relational database log streams</code> operation to get a list of
     *       available log streams.</p>
     */
    logStreamName: string | undefined;
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database log events</code> request.</p>
     */
    pageToken?: string;
    /**
     * <p>The name of your database for which to get log events.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is
     *       specified, the log event starts from the head of the log. If <code>false</code> is specified,
     *       the log event starts from the tail of the log.</p>
     *          <note>
     *             <p>For PostgreSQL, the default value of <code>false</code> is the only option
     *         available.</p>
     *          </note>
     */
    startFromHead?: boolean;
    /**
     * <p>The start of the time interval from which to get log events.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Specified in the Unix time format.</p>
     *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then
     *           you input <code>1538424000</code> as the start time.</p>
     *             </li>
     *          </ul>
     */
    startTime?: Date;
}
export declare namespace GetRelationalDatabaseLogEventsRequest {
    function isa(o: any): o is GetRelationalDatabaseLogEventsRequest;
}
export interface GetRelationalDatabaseLogEventsResult {
    __type?: "GetRelationalDatabaseLogEventsResult";
    /**
     * <p>A token used for advancing to the previous page of results from your get relational
     *       database log events request.</p>
     */
    nextBackwardToken?: string;
    /**
     * <p>A token used for advancing to the next page of results from your get relational
     *       database log events request.</p>
     */
    nextForwardToken?: string;
    /**
     * <p>An object describing the result of your get relational database log events
     *       request.</p>
     */
    resourceLogEvents?: Array<LogEvent>;
}
export declare namespace GetRelationalDatabaseLogEventsResult {
    function isa(o: any): o is GetRelationalDatabaseLogEventsResult;
}
export interface GetRelationalDatabaseLogStreamsRequest {
    __type?: "GetRelationalDatabaseLogStreamsRequest";
    /**
     * <p>The name of your database for which to get log streams.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace GetRelationalDatabaseLogStreamsRequest {
    function isa(o: any): o is GetRelationalDatabaseLogStreamsRequest;
}
export interface GetRelationalDatabaseLogStreamsResult {
    __type?: "GetRelationalDatabaseLogStreamsResult";
    /**
     * <p>An object describing the result of your get relational database log streams
     *       request.</p>
     */
    logStreams?: Array<string>;
}
export declare namespace GetRelationalDatabaseLogStreamsResult {
    function isa(o: any): o is GetRelationalDatabaseLogStreamsResult;
}
export interface GetRelationalDatabaseMasterUserPasswordRequest {
    __type?: "GetRelationalDatabaseMasterUserPasswordRequest";
    /**
     * <p>The password version to return.</p>
     *          <p>Specifying <code>CURRENT</code> or <code>PREVIOUS</code> returns the current or
     *       previous passwords respectively. Specifying <code>PENDING</code> returns the newest version of
     *       the password that will rotate to <code>CURRENT</code>. After the <code>PENDING</code> password
     *       rotates to <code>CURRENT</code>, the <code>PENDING</code> password is no longer
     *       available.</p>
     *          <p>Default: <code>CURRENT</code>
     *          </p>
     */
    passwordVersion?: RelationalDatabasePasswordVersion | string;
    /**
     * <p>The name of your database for which to get the master user password.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace GetRelationalDatabaseMasterUserPasswordRequest {
    function isa(o: any): o is GetRelationalDatabaseMasterUserPasswordRequest;
}
export interface GetRelationalDatabaseMasterUserPasswordResult {
    __type?: "GetRelationalDatabaseMasterUserPasswordResult";
    /**
     * <p>The timestamp when the specified version of the master user password was
     *       created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The master user password for the <code>password version</code> specified.</p>
     */
    masterUserPassword?: string;
}
export declare namespace GetRelationalDatabaseMasterUserPasswordResult {
    function isa(o: any): o is GetRelationalDatabaseMasterUserPasswordResult;
}
export interface GetRelationalDatabaseMetricDataRequest {
    __type?: "GetRelationalDatabaseMetricDataRequest";
    /**
     * <p>The end of the time interval from which to get metric data.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Specified in the Unix time format.</p>
     *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then
     *           you input <code>1538424000</code> as the end time.</p>
     *
     *             </li>
     *          </ul>
     */
    endTime: Date | undefined;
    /**
     * <p>The name of the metric data to return.</p>
     */
    metricName: RelationalDatabaseMetricName | string | undefined;
    /**
     * <p>The granularity, in seconds, of the returned data points.</p>
     */
    period: number | undefined;
    /**
     * <p>The name of your database from which to get metric data.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>The start of the time interval from which to get metric data.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Specified in the Unix time format.</p>
     *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then
     *           you input <code>1538424000</code> as the start time.</p>
     *
     *             </li>
     *          </ul>
     */
    startTime: Date | undefined;
    /**
     * <p>The array of statistics for your metric data request.</p>
     */
    statistics: Array<MetricStatistic | string> | undefined;
    /**
     * <p>The unit for the metric data request.</p>
     */
    unit: MetricUnit | string | undefined;
}
export declare namespace GetRelationalDatabaseMetricDataRequest {
    function isa(o: any): o is GetRelationalDatabaseMetricDataRequest;
}
export interface GetRelationalDatabaseMetricDataResult {
    __type?: "GetRelationalDatabaseMetricDataResult";
    /**
     * <p>An object describing the result of your get relational database metric data
     *       request.</p>
     */
    metricData?: Array<MetricDatapoint>;
    /**
     * <p>The name of the metric.</p>
     */
    metricName?: RelationalDatabaseMetricName | string;
}
export declare namespace GetRelationalDatabaseMetricDataResult {
    function isa(o: any): o is GetRelationalDatabaseMetricDataResult;
}
export interface GetRelationalDatabaseParametersRequest {
    __type?: "GetRelationalDatabaseParametersRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database parameters</code> request.</p>
     */
    pageToken?: string;
    /**
     * <p>The name of your database for which to get parameters.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace GetRelationalDatabaseParametersRequest {
    function isa(o: any): o is GetRelationalDatabaseParametersRequest;
}
export interface GetRelationalDatabaseParametersResult {
    __type?: "GetRelationalDatabaseParametersResult";
    /**
     * <p>A token used for advancing to the next page of results from your get static IPs
     *       request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An object describing the result of your get relational database parameters
     *       request.</p>
     */
    parameters?: Array<RelationalDatabaseParameter>;
}
export declare namespace GetRelationalDatabaseParametersResult {
    function isa(o: any): o is GetRelationalDatabaseParametersResult;
}
export interface GetRelationalDatabaseRequest {
    __type?: "GetRelationalDatabaseRequest";
    /**
     * <p>The name of the database that you are looking up.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace GetRelationalDatabaseRequest {
    function isa(o: any): o is GetRelationalDatabaseRequest;
}
export interface GetRelationalDatabaseResult {
    __type?: "GetRelationalDatabaseResult";
    /**
     * <p>An object describing the specified database.</p>
     */
    relationalDatabase?: RelationalDatabase;
}
export declare namespace GetRelationalDatabaseResult {
    function isa(o: any): o is GetRelationalDatabaseResult;
}
export interface GetRelationalDatabaseSnapshotRequest {
    __type?: "GetRelationalDatabaseSnapshotRequest";
    /**
     * <p>The name of the database snapshot for which to get information.</p>
     */
    relationalDatabaseSnapshotName: string | undefined;
}
export declare namespace GetRelationalDatabaseSnapshotRequest {
    function isa(o: any): o is GetRelationalDatabaseSnapshotRequest;
}
export interface GetRelationalDatabaseSnapshotResult {
    __type?: "GetRelationalDatabaseSnapshotResult";
    /**
     * <p>An object describing the specified database snapshot.</p>
     */
    relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}
export declare namespace GetRelationalDatabaseSnapshotResult {
    function isa(o: any): o is GetRelationalDatabaseSnapshotResult;
}
export interface GetRelationalDatabaseSnapshotsRequest {
    __type?: "GetRelationalDatabaseSnapshotsRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database snapshots</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetRelationalDatabaseSnapshotsRequest {
    function isa(o: any): o is GetRelationalDatabaseSnapshotsRequest;
}
export interface GetRelationalDatabaseSnapshotsResult {
    __type?: "GetRelationalDatabaseSnapshotsResult";
    /**
     * <p>A token used for advancing to the next page of results from your get relational
     *       database snapshots request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An object describing the result of your get relational database snapshots
     *       request.</p>
     */
    relationalDatabaseSnapshots?: Array<RelationalDatabaseSnapshot>;
}
export declare namespace GetRelationalDatabaseSnapshotsResult {
    function isa(o: any): o is GetRelationalDatabaseSnapshotsResult;
}
export interface GetRelationalDatabasesRequest {
    __type?: "GetRelationalDatabasesRequest";
    /**
     * <p>A token used for advancing to a specific page of results for your <code>get relational
     *         database</code> request.</p>
     */
    pageToken?: string;
}
export declare namespace GetRelationalDatabasesRequest {
    function isa(o: any): o is GetRelationalDatabasesRequest;
}
export interface GetRelationalDatabasesResult {
    __type?: "GetRelationalDatabasesResult";
    /**
     * <p>A token used for advancing to the next page of results from your get relational
     *       databases request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An object describing the result of your get relational databases request.</p>
     */
    relationalDatabases?: Array<RelationalDatabase>;
}
export declare namespace GetRelationalDatabasesResult {
    function isa(o: any): o is GetRelationalDatabasesResult;
}
export interface GetStaticIpRequest {
    __type?: "GetStaticIpRequest";
    /**
     * <p>The name of the static IP in Lightsail.</p>
     */
    staticIpName: string | undefined;
}
export declare namespace GetStaticIpRequest {
    function isa(o: any): o is GetStaticIpRequest;
}
export interface GetStaticIpResult {
    __type?: "GetStaticIpResult";
    /**
     * <p>An array of key-value pairs containing information about the requested static
     *       IP.</p>
     */
    staticIp?: StaticIp;
}
export declare namespace GetStaticIpResult {
    function isa(o: any): o is GetStaticIpResult;
}
export interface GetStaticIpsRequest {
    __type?: "GetStaticIpsRequest";
    /**
     * <p>A token used for advancing to the next page of results from your get static IPs
     *       request.</p>
     */
    pageToken?: string;
}
export declare namespace GetStaticIpsRequest {
    function isa(o: any): o is GetStaticIpsRequest;
}
export interface GetStaticIpsResult {
    __type?: "GetStaticIpsResult";
    /**
     * <p>A token used for advancing to the next page of results from your get static IPs
     *       request.</p>
     */
    nextPageToken?: string;
    /**
     * <p>An array of key-value pairs containing information about your get static IPs
     *       request.</p>
     */
    staticIps?: Array<StaticIp>;
}
export declare namespace GetStaticIpsResult {
    function isa(o: any): o is GetStaticIpsResult;
}
/**
 * <p>Describes the public SSH host keys or the RDP certificate.</p>
 */
export interface HostKeyAttributes {
    __type?: "HostKeyAttributes";
    /**
     * <p>The SSH host key algorithm or the RDP certificate format.</p>
     *          <p>For SSH host keys, the algorithm may be <code>ssh-rsa</code>,
     *         <code>ecdsa-sha2-nistp256</code>, <code>ssh-ed25519</code>, etc. For RDP certificates, the
     *       algorithm is always <code>x509-cert</code>.</p>
     */
    algorithm?: string;
    /**
     * <p>The SHA-1 fingerprint of the returned SSH host key or RDP certificate.</p>
     *          <ul>
     *             <li>
     *                <p>Example of an SHA-1 SSH fingerprint:</p>
     *                <p>
     *                   <code>SHA1:1CHH6FaAaXjtFOsR/t83vf91SR0</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Example of an SHA-1 RDP fingerprint:</p>
     *                <p>
     *                   <code>af:34:51:fe:09:f0:e0:da:b8:4e:56:ca:60:c2:10:ff:38:06:db:45</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    fingerprintSHA1?: string;
    /**
     * <p>The SHA-256 fingerprint of the returned SSH host key or RDP certificate.</p>
     *          <ul>
     *             <li>
     *                <p>Example of an SHA-256 SSH fingerprint:</p>
     *                <p>
     *                   <code>SHA256:KTsMnRBh1IhD17HpdfsbzeGA4jOijm5tyXsMjKVbB8o</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Example of an SHA-256 RDP fingerprint:</p>
     *                <p>
     *                   <code>03:9b:36:9f:4b:de:4e:61:70:fc:7c:c9:78:e7:d2:1a:1c:25:a8:0c:91:f6:7c:e4:d6:a0:85:c8:b4:53:99:68</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    fingerprintSHA256?: string;
    /**
     * <p>The returned RDP certificate is not valid after this point in time.</p>
     *          <p>This value is listed only for RDP certificates.</p>
     */
    notValidAfter?: Date;
    /**
     * <p>The returned RDP certificate is valid after this point in time.</p>
     *          <p>This value is listed only for RDP certificates.</p>
     */
    notValidBefore?: Date;
    /**
     * <p>The public SSH host key or the RDP certificate.</p>
     */
    publicKey?: string;
    /**
     * <p>The time that the SSH host key or RDP certificate was recorded by Lightsail.</p>
     */
    witnessedAt?: Date;
}
export declare namespace HostKeyAttributes {
    function isa(o: any): o is HostKeyAttributes;
}
export interface ImportKeyPairRequest {
    __type?: "ImportKeyPairRequest";
    /**
     * <p>The name of the key pair for which you want to import the public key.</p>
     */
    keyPairName: string | undefined;
    /**
     * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
     */
    publicKeyBase64: string | undefined;
}
export declare namespace ImportKeyPairRequest {
    function isa(o: any): o is ImportKeyPairRequest;
}
export interface ImportKeyPairResult {
    __type?: "ImportKeyPairResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operation?: Operation;
}
export declare namespace ImportKeyPairResult {
    function isa(o: any): o is ImportKeyPairResult;
}
/**
 * <p>Describes an instance (a virtual private server).</p>
 */
export interface Instance {
    __type?: "Instance";
    /**
     * <p>An array of objects representing the add-ons enabled on the instance.</p>
     */
    addOns?: Array<AddOn>;
    /**
     * <p>The Amazon Resource Name (ARN) of the instance (e.g.,
     *         <code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).</p>
     */
    arn?: string;
    /**
     * <p>The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).</p>
     */
    blueprintId?: string;
    /**
     * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
     */
    blueprintName?: string;
    /**
     * <p>The bundle for the instance (e.g., <code>micro_1_0</code>).</p>
     */
    bundleId?: string;
    /**
     * <p>The timestamp when the instance was created (e.g.,
     *       <code>1479734909.17</code>).</p>
     */
    createdAt?: Date;
    /**
     * <p>The size of the vCPU and the amount of RAM for the instance.</p>
     */
    hardware?: InstanceHardware;
    /**
     * <p>The IPv6 address of the instance.</p>
     */
    ipv6Address?: string;
    /**
     * <p>A Boolean value indicating whether this instance has a static IP assigned to
     *       it.</p>
     */
    isStaticIp?: boolean;
    /**
     * <p>The region name and Availability Zone where the instance is located.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name the user gave the instance (e.g.,
     *       <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
     */
    name?: string;
    /**
     * <p>Information about the public ports and monthly data transfer rates for the
     *       instance.</p>
     */
    networking?: InstanceNetworking;
    /**
     * <p>The private IP address of the instance.</p>
     */
    privateIpAddress?: string;
    /**
     * <p>The public IP address of the instance.</p>
     */
    publicIpAddress?: string;
    /**
     * <p>The type of resource (usually <code>Instance</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The name of the SSH key being used to connect to the instance (e.g.,
     *         <code>LightsailDefaultKeyPair</code>).</p>
     */
    sshKeyName?: string;
    /**
     * <p>The status code and the state (e.g., <code>running</code>) for the instance.</p>
     */
    state?: InstanceState;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>The user name for connecting to the instance (e.g., <code>ec2-user</code>).</p>
     */
    username?: string;
}
export declare namespace Instance {
    function isa(o: any): o is Instance;
}
/**
 * <p>The parameters for gaining temporary access to one of your Amazon Lightsail
 *       instances.</p>
 */
export interface InstanceAccessDetails {
    __type?: "InstanceAccessDetails";
    /**
     * <p>For SSH access, the public key to use when accessing your instance For OpenSSH clients
     *       (e.g., command line SSH), you should save this value to
     *       <code>tempkey-cert.pub</code>.</p>
     */
    certKey?: string;
    /**
     * <p>For SSH access, the date on which the temporary keys expire.</p>
     */
    expiresAt?: Date;
    /**
     * <p>Describes the public SSH host keys or the RDP certificate.</p>
     */
    hostKeys?: Array<HostKeyAttributes>;
    /**
     * <p>The name of this Amazon Lightsail instance.</p>
     */
    instanceName?: string;
    /**
     * <p>The public IP address of the Amazon Lightsail instance.</p>
     */
    ipAddress?: string;
    /**
     * <p>For RDP access, the password for your Amazon Lightsail instance. Password will be an
     *       empty string if the password for your new instance is not ready yet. When you create an
     *       instance, it can take up to 15 minutes for the instance to be ready.</p>
     *          <note>
     *             <p>If you create an instance using any key pair other than the default
     *           (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty
     *         string.</p>
     *             <p>If you change the Administrator password on the instance, Lightsail will continue
     *         to return the original password value. When accessing the instance using RDP, you need to
     *         manually enter the Administrator password after changing it from the default.</p>
     *          </note>
     */
    password?: string;
    /**
     * <p>For a Windows Server-based instance, an object with the data you can use to retrieve
     *       your password. This is only needed if <code>password</code> is empty and the instance is not
     *       new (and therefore the password is not ready yet). When you create an instance, it can take up
     *       to 15 minutes for the instance to be ready.</p>
     */
    passwordData?: PasswordData;
    /**
     * <p>For SSH access, the temporary private key. For OpenSSH clients (e.g., command line
     *       SSH), you should save this value to <code>tempkey</code>).</p>
     */
    privateKey?: string;
    /**
     * <p>The protocol for these Amazon Lightsail instance access details.</p>
     */
    protocol?: InstanceAccessProtocol | string;
    /**
     * <p>The user name to use when logging in to the Amazon Lightsail instance.</p>
     */
    username?: string;
}
export declare namespace InstanceAccessDetails {
    function isa(o: any): o is InstanceAccessDetails;
}
export declare enum InstanceAccessProtocol {
    rdp = "rdp",
    ssh = "ssh"
}
/**
 * <p>Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the
 *         <code>create cloud formation stack</code> operation.</p>
 */
export interface InstanceEntry {
    __type?: "InstanceEntry";
    /**
     * <p>The Availability Zone for the new Amazon EC2 instance.</p>
     */
    availabilityZone: string | undefined;
    /**
     * <p>The instance type (e.g., <code>t2.micro</code>) to use for the new Amazon EC2 instance.</p>
     */
    instanceType: string | undefined;
    /**
     * <p>The port configuration to use for the new Amazon EC2 instance.</p>
     *          <p>The following configuration options are available:</p>
     *          <ul>
     *             <li>
     *                <p>DEFAULT — Use the default firewall settings from the image.</p>
     *             </li>
     *             <li>
     *                <p>INSTANCE — Use the firewall settings from the source Lightsail instance.</p>
     *             </li>
     *             <li>
     *                <p>NONE — Default to Amazon EC2.</p>
     *             </li>
     *             <li>
     *                <p>CLOSED — All ports closed.</p>
     *             </li>
     *          </ul>
     */
    portInfoSource: PortInfoSourceType | string | undefined;
    /**
     * <p>The name of the export snapshot record, which contains the exported Lightsail instance
     *       snapshot that will be used as the source of the new Amazon EC2 instance.</p>
     *          <p>Use the <code>get export snapshot records</code> operation to get a list of export
     *       snapshot records that you can use to create a CloudFormation stack.</p>
     */
    sourceName: string | undefined;
    /**
     * <p>A launch script you can create that configures a server with additional user data. For
     *       example, you might want to run <code>apt-get -y update</code>.</p>
     *          <note>
     *             <p>Depending on the machine image you choose, the command to get software on your
     *         instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
     *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>.</p>
     *          </note>
     */
    userData?: string;
}
export declare namespace InstanceEntry {
    function isa(o: any): o is InstanceEntry;
}
/**
 * <p>Describes the hardware for the instance.</p>
 */
export interface InstanceHardware {
    __type?: "InstanceHardware";
    /**
     * <p>The number of vCPUs the instance has.</p>
     */
    cpuCount?: number;
    /**
     * <p>The disks attached to the instance.</p>
     */
    disks?: Array<Disk>;
    /**
     * <p>The amount of RAM in GB on the instance (e.g., <code>1.0</code>).</p>
     */
    ramSizeInGb?: number;
}
export declare namespace InstanceHardware {
    function isa(o: any): o is InstanceHardware;
}
export declare enum InstanceHealthReason {
    InstanceDeregistrationInProgress = "Instance.DeregistrationInProgress",
    InstanceFailedHealthChecks = "Instance.FailedHealthChecks",
    InstanceInvalidState = "Instance.InvalidState",
    InstanceIpUnusable = "Instance.IpUnusable",
    InstanceNotInUse = "Instance.NotInUse",
    InstanceNotRegistered = "Instance.NotRegistered",
    InstanceResponseCodeMismatch = "Instance.ResponseCodeMismatch",
    InstanceTimeout = "Instance.Timeout",
    LbInitialHealthChecking = "Lb.InitialHealthChecking",
    LbInternalError = "Lb.InternalError",
    LbRegistrationInProgress = "Lb.RegistrationInProgress"
}
export declare enum InstanceHealthState {
    Draining = "draining",
    Healthy = "healthy",
    Initial = "initial",
    Unavailable = "unavailable",
    Unhealthy = "unhealthy",
    Unused = "unused"
}
/**
 * <p>Describes information about the health of the instance.</p>
 */
export interface InstanceHealthSummary {
    __type?: "InstanceHealthSummary";
    /**
     * <p>Describes the overall instance health. Valid values are below.</p>
     */
    instanceHealth?: InstanceHealthState | string;
    /**
     * <p>More information about the instance health. If the <code>instanceHealth</code> is
     *         <code>healthy</code>, then an <code>instanceHealthReason</code> value is not
     *       provided.</p>
     *          <p>If <b>
     *                <code>instanceHealth</code>
     *             </b> is
     *       <code>initial</code>, the <b>
     *                <code>instanceHealthReason</code>
     *             </b>
     *       value can be one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Lb.RegistrationInProgress</code>
     *                   </b> - The target
     *           instance is in the process of being registered with the load balancer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Lb.InitialHealthChecking</code>
     *                   </b> - The
     *           Lightsail load balancer is still sending the target instance the minimum number of
     *           health checks required to determine its health status.</p>
     *             </li>
     *          </ul>
     *          <p>If <b>
     *                <code>instanceHealth</code>
     *             </b> is
     *         <code>unhealthy</code>, the <b>
     *                <code>instanceHealthReason</code>
     *             </b> value can be one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.ResponseCodeMismatch</code>
     *                   </b> - The
     *           health checks did not return an expected HTTP code.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.Timeout</code>
     *                   </b> - The health check
     *           requests timed out.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.FailedHealthChecks</code>
     *                   </b> - The health
     *           checks failed because the connection to the target instance timed out, the target instance
     *           response was malformed, or the target instance failed the health check for an unknown
     *           reason.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Lb.InternalError</code>
     *                   </b> - The health checks
     *           failed due to an internal error.</p>
     *             </li>
     *          </ul>
     *          <p>If <b>
     *                <code>instanceHealth</code>
     *             </b> is <code>unused</code>,
     *       the <b>
     *                <code>instanceHealthReason</code>
     *             </b> value can be one of the
     *       following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.NotRegistered</code>
     *                   </b> - The target
     *           instance is not registered with the target group.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.NotInUse</code>
     *                   </b> - The target group is
     *           not used by any load balancer, or the target instance is in an Availability Zone that is
     *           not enabled for its load balancer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.IpUnusable</code>
     *                   </b> - The target IP
     *           address is reserved for use by a Lightsail load balancer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.InvalidState</code>
     *                   </b> - The target is in
     *           the stopped or terminated state.</p>
     *             </li>
     *          </ul>
     *          <p>If <b>
     *                <code>instanceHealth</code>
     *             </b> is
     *         <code>draining</code>, the <b>
     *                <code>instanceHealthReason</code>
     *             </b> value can be one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance.DeregistrationInProgress</code>
     *                   </b> - The
     *           target instance is in the process of being deregistered and the deregistration delay
     *           period has not expired.</p>
     *             </li>
     *          </ul>
     */
    instanceHealthReason?: InstanceHealthReason | string;
    /**
     * <p>The name of the Lightsail instance for which you are requesting health check
     *       data.</p>
     */
    instanceName?: string;
}
export declare namespace InstanceHealthSummary {
    function isa(o: any): o is InstanceHealthSummary;
}
export declare enum InstanceMetricName {
    CPUUtilization = "CPUUtilization",
    NetworkIn = "NetworkIn",
    NetworkOut = "NetworkOut",
    StatusCheckFailed = "StatusCheckFailed",
    StatusCheckFailed_Instance = "StatusCheckFailed_Instance",
    StatusCheckFailed_System = "StatusCheckFailed_System"
}
/**
 * <p>Describes monthly data transfer rates and port information for an instance.</p>
 */
export interface InstanceNetworking {
    __type?: "InstanceNetworking";
    /**
     * <p>The amount of data in GB allocated for monthly data transfers.</p>
     */
    monthlyTransfer?: MonthlyTransfer;
    /**
     * <p>An array of key-value pairs containing information about the ports on the
     *       instance.</p>
     */
    ports?: Array<InstancePortInfo>;
}
export declare namespace InstanceNetworking {
    function isa(o: any): o is InstanceNetworking;
}
export declare enum InstancePlatform {
    LinuxUnix = "LINUX_UNIX",
    Windows = "WINDOWS"
}
/**
 * <p>Describes information about the instance ports.</p>
 */
export interface InstancePortInfo {
    __type?: "InstancePortInfo";
    /**
     * <p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>
     */
    accessDirection?: AccessDirection | string;
    /**
     * <p>The location from which access is allowed (e.g., <code>Anywhere
     *       (0.0.0.0/0)</code>).</p>
     */
    accessFrom?: string;
    /**
     * <p>The type of access (<code>Public</code> or <code>Private</code>).</p>
     */
    accessType?: PortAccessType | string;
    /**
     * <p>The common name.</p>
     */
    commonName?: string;
    /**
     * <p>The first port in the range.</p>
     */
    fromPort?: number;
    /**
     * <p>The protocol being used. Can be one of the following.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered,
     *           and error-checked delivery of streamed data between applications running on hosts
     *           communicating by an IP network. If you have an application that doesn't require reliable
     *           data stream service, use UDP instead.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>all</code> - All transport layer protocol types. For more general
     *           information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport
     *             layer</a> on Wikipedia.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can
     *           send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
     *           communications are not required to set up transmission channels or data paths.
     *           Applications that don't require reliable data stream service can use UDP, which provides a
     *           connectionless datagram service that emphasizes reduced latency over reliability. If you
     *           do require reliable data stream service, use TCP instead.</p>
     *             </li>
     *          </ul>
     */
    protocol?: NetworkProtocol | string;
    /**
     * <p>The last port in the range.</p>
     */
    toPort?: number;
}
export declare namespace InstancePortInfo {
    function isa(o: any): o is InstancePortInfo;
}
/**
 * <p>Describes the port state.</p>
 */
export interface InstancePortState {
    __type?: "InstancePortState";
    /**
     * <p>The first port in the range.</p>
     */
    fromPort?: number;
    /**
     * <p>The protocol being used. Can be one of the following.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered,
     *           and error-checked delivery of streamed data between applications running on hosts
     *           communicating by an IP network. If you have an application that doesn't require reliable
     *           data stream service, use UDP instead.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>all</code> - All transport layer protocol types. For more general
     *           information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport
     *             layer</a> on Wikipedia.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>udp</code> - With User Datagram Protocol (UDP), computer applications can
     *           send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior
     *           communications are not required to set up transmission channels or data paths.
     *           Applications that don't require reliable data stream service can use UDP, which provides a
     *           connectionless datagram service that emphasizes reduced latency over reliability. If you
     *           do require reliable data stream service, use TCP instead.</p>
     *             </li>
     *          </ul>
     */
    protocol?: NetworkProtocol | string;
    /**
     * <p>Specifies whether the instance port is <code>open</code> or
     *       <code>closed</code>.</p>
     */
    state?: PortState | string;
    /**
     * <p>The last port in the range.</p>
     */
    toPort?: number;
}
export declare namespace InstancePortState {
    function isa(o: any): o is InstancePortState;
}
/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshot {
    __type?: "InstanceSnapshot";
    /**
     * <p>The Amazon Resource Name (ARN) of the snapshot (e.g.,
     *         <code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).</p>
     */
    arn?: string;
    /**
     * <p>The timestamp when the snapshot was created (e.g.,
     *       <code>1479907467.024</code>).</p>
     */
    createdAt?: Date;
    /**
     * <p>An array of disk objects containing information about all block storage
     *       disks.</p>
     */
    fromAttachedDisks?: Array<Disk>;
    /**
     * <p>The blueprint ID from which you created the snapshot (e.g.,
     *       <code>os_debian_8_3</code>). A blueprint is a virtual private server (or
     *         <i>instance</i>) image used to create instances quickly.</p>
     */
    fromBlueprintId?: string;
    /**
     * <p>The bundle ID from which you created the snapshot (e.g.,
     *       <code>micro_1_0</code>).</p>
     */
    fromBundleId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the instance from which the snapshot was created
     *       (e.g.,
     *         <code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).</p>
     */
    fromInstanceArn?: string;
    /**
     * <p>The instance from which the snapshot was created.</p>
     */
    fromInstanceName?: string;
    /**
     * <p>A Boolean value indicating whether the snapshot was created from an automatic
     *       snapshot.</p>
     */
    isFromAutoSnapshot?: boolean;
    /**
     * <p>The region name and Availability Zone where you created the snapshot.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the snapshot.</p>
     */
    name?: string;
    /**
     * <p>The progress of the snapshot.</p>
     */
    progress?: string;
    /**
     * <p>The type of resource (usually <code>InstanceSnapshot</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The size in GB of the SSD.</p>
     */
    sizeInGb?: number;
    /**
     * <p>The state the snapshot is in.</p>
     */
    state?: InstanceSnapshotState | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace InstanceSnapshot {
    function isa(o: any): o is InstanceSnapshot;
}
/**
 * <p>Describes an instance snapshot.</p>
 */
export interface InstanceSnapshotInfo {
    __type?: "InstanceSnapshotInfo";
    /**
     * <p>The blueprint ID from which the source instance (e.g.,
     *       <code>os_debian_8_3</code>).</p>
     */
    fromBlueprintId?: string;
    /**
     * <p>The bundle ID from which the source instance was created (e.g.,
     *       <code>micro_1_0</code>).</p>
     */
    fromBundleId?: string;
    /**
     * <p>A list of objects describing the disks that were attached to the source instance.</p>
     */
    fromDiskInfo?: Array<DiskInfo>;
}
export declare namespace InstanceSnapshotInfo {
    function isa(o: any): o is InstanceSnapshotInfo;
}
export declare enum InstanceSnapshotState {
    Available = "available",
    Error = "error",
    Pending = "pending"
}
/**
 * <p>Describes the virtual private server (or <i>instance</i>)
 *       status.</p>
 */
export interface InstanceState {
    __type?: "InstanceState";
    /**
     * <p>The status code for the instance.</p>
     */
    code?: number;
    /**
     * <p>The state of the instance (e.g., <code>running</code> or
     *       <code>pending</code>).</p>
     */
    name?: string;
}
export declare namespace InstanceState {
    function isa(o: any): o is InstanceState;
}
/**
 * <p>Lightsail throws this exception when user input does not conform to the validation
 *       rules of an input field.</p>
 *          <note>
 *             <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please
 *         set your AWS Region configuration to us-east-1 to create, view, or edit these
 *         resources.</p>
 *          </note>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
    name: "InvalidInputException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace InvalidInputException {
    function isa(o: any): o is InvalidInputException;
}
export interface IsVpcPeeredRequest {
    __type?: "IsVpcPeeredRequest";
}
export declare namespace IsVpcPeeredRequest {
    function isa(o: any): o is IsVpcPeeredRequest;
}
export interface IsVpcPeeredResult {
    __type?: "IsVpcPeeredResult";
    /**
     * <p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise,
     *         <code>false</code>.</p>
     */
    isPeered?: boolean;
}
export declare namespace IsVpcPeeredResult {
    function isa(o: any): o is IsVpcPeeredResult;
}
/**
 * <p>Describes the SSH key pair.</p>
 */
export interface KeyPair {
    __type?: "KeyPair";
    /**
     * <p>The Amazon Resource Name (ARN) of the key pair (e.g.,
     *         <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).</p>
     */
    arn?: string;
    /**
     * <p>The timestamp when the key pair was created (e.g.,
     *       <code>1479816991.349</code>).</p>
     */
    createdAt?: Date;
    /**
     * <p>The RSA fingerprint of the key pair.</p>
     */
    fingerprint?: string;
    /**
     * <p>The region name and Availability Zone where the key pair was created.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The friendly name of the SSH key pair.</p>
     */
    name?: string;
    /**
     * <p>The resource type (usually <code>KeyPair</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace KeyPair {
    function isa(o: any): o is KeyPair;
}
/**
 * <p>Describes the Lightsail load balancer.</p>
 */
export interface LoadBalancer {
    __type?: "LoadBalancer";
    /**
     * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
     */
    arn?: string;
    /**
     * <p>A string to string map of the configuration options for your load balancer. Valid
     *       values are listed below.</p>
     */
    configurationOptions?: {
        [key: string]: string;
    };
    /**
     * <p>The date when your load balancer was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The DNS name of your Lightsail load balancer.</p>
     */
    dnsName?: string;
    /**
     * <p>The path you specified to perform your health checks. If no path is specified, the load
     *       balancer tries to make a request to the default (root) page.</p>
     */
    healthCheckPath?: string;
    /**
     * <p>An array of InstanceHealthSummary objects describing the health of the load
     *       balancer.</p>
     */
    instanceHealthSummary?: Array<InstanceHealthSummary>;
    /**
     * <p>The port where the load balancer will direct traffic to your Lightsail instances. For
     *       HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
     */
    instancePort?: number;
    /**
     * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>).
     *       Lightsail automatically creates your load balancer across Availability Zones.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>
     */
    name?: string;
    /**
     * <p>The protocol you have enabled for your load balancer. Valid values are below.</p>
     *          <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just
     *       <code>HTTP</code>.</p>
     */
    protocol?: LoadBalancerProtocol | string;
    /**
     * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For
     *       HTTPS, use port 443.</p>
     */
    publicPorts?: Array<number>;
    /**
     * <p>The resource type (e.g., <code>LoadBalancer</code>.</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The status of your load balancer. Valid values are below.</p>
     */
    state?: LoadBalancerState | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about your Lightsail load balancer. This code enables our support team to look up your
     *       Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
    /**
     * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional
     *       information about the SSL/TLS certificates. For example, if <code>true</code>, the certificate
     *       is attached to the load balancer.</p>
     */
    tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
}
export declare namespace LoadBalancer {
    function isa(o: any): o is LoadBalancer;
}
export declare enum LoadBalancerAttributeName {
    HealthCheckPath = "HealthCheckPath",
    SessionStickinessEnabled = "SessionStickinessEnabled",
    SessionStickiness_LB_CookieDurationSeconds = "SessionStickiness_LB_CookieDurationSeconds"
}
export declare enum LoadBalancerMetricName {
    ClientTLSNegotiationErrorCount = "ClientTLSNegotiationErrorCount",
    HTTPCode_Instance_2XX_Count = "HTTPCode_Instance_2XX_Count",
    HTTPCode_Instance_3XX_Count = "HTTPCode_Instance_3XX_Count",
    HTTPCode_Instance_4XX_Count = "HTTPCode_Instance_4XX_Count",
    HTTPCode_Instance_5XX_Count = "HTTPCode_Instance_5XX_Count",
    HTTPCode_LB_4XX_Count = "HTTPCode_LB_4XX_Count",
    HTTPCode_LB_5XX_Count = "HTTPCode_LB_5XX_Count",
    HealthyHostCount = "HealthyHostCount",
    InstanceResponseTime = "InstanceResponseTime",
    RejectedConnectionCount = "RejectedConnectionCount",
    RequestCount = "RequestCount",
    UnhealthyHostCount = "UnhealthyHostCount"
}
export declare enum LoadBalancerProtocol {
    HTTP = "HTTP",
    HTTP_HTTPS = "HTTP_HTTPS"
}
export declare enum LoadBalancerState {
    Active = "active",
    ActiveImpaired = "active_impaired",
    Failed = "failed",
    Provisioning = "provisioning",
    Unknown = "unknown"
}
/**
 * <p>Describes a load balancer SSL/TLS certificate.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 */
export interface LoadBalancerTlsCertificate {
    __type?: "LoadBalancerTlsCertificate";
    /**
     * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
     */
    arn?: string;
    /**
     * <p>The time when you created your SSL/TLS certificate.</p>
     */
    createdAt?: Date;
    /**
     * <p>The domain name for your SSL/TLS certificate.</p>
     */
    domainName?: string;
    /**
     * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the
     *       records.</p>
     */
    domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
    /**
     * <p>The reason for the SSL/TLS certificate validation failure.</p>
     */
    failureReason?: LoadBalancerTlsCertificateFailureReason | string;
    /**
     * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
     *       balancer.</p>
     */
    isAttached?: boolean;
    /**
     * <p>The time when the SSL/TLS certificate was issued.</p>
     */
    issuedAt?: Date;
    /**
     * <p>The issuer of the certificate.</p>
     */
    issuer?: string;
    /**
     * <p>The algorithm that was used to generate the key pair (the public and private
     *       key).</p>
     */
    keyAlgorithm?: string;
    /**
     * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
     */
    loadBalancerName?: string;
    /**
     * <p>The AWS Region and Availability Zone where you created your certificate.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>
     */
    name?: string;
    /**
     * <p>The timestamp when the SSL/TLS certificate expires.</p>
     */
    notAfter?: Date;
    /**
     * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
     */
    notBefore?: Date;
    /**
     * <p>An object containing information about the status of Lightsail's managed renewal for
     *       the certificate.</p>
     */
    renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
    /**
     * <p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Instance</code>
     *                   </b> - A Lightsail instance (a
     *           virtual private server)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>StaticIp</code>
     *                   </b> - A static IP
     *           address</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>KeyPair</code>
     *                   </b> - The key pair used to
     *           connect to a Lightsail instance</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>InstanceSnapshot</code>
     *                   </b> - A Lightsail
     *           instance snapshot</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Domain</code>
     *                   </b> - A DNS zone</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>PeeredVpc</code>
     *                   </b> - A peered VPC</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>LoadBalancer</code>
     *                   </b> - A Lightsail load
     *           balancer</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>LoadBalancerTlsCertificate</code>
     *                   </b> - An
     *           SSL/TLS certificate associated with a Lightsail load balancer</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>Disk</code>
     *                   </b> - A Lightsail block storage
     *           disk</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>
     *                      <code>DiskSnapshot</code>
     *                   </b> - A block storage disk
     *           snapshot</p>
     *             </li>
     *          </ul>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The reason the certificate was revoked. Valid values are below.</p>
     */
    revocationReason?: LoadBalancerTlsCertificateRevocationReason | string;
    /**
     * <p>The timestamp when the SSL/TLS certificate was revoked.</p>
     */
    revokedAt?: Date;
    /**
     * <p>The serial number of the certificate.</p>
     */
    serial?: string;
    /**
     * <p>The algorithm that was used to sign the certificate.</p>
     */
    signatureAlgorithm?: string;
    /**
     * <p>The status of the SSL/TLS certificate. Valid values are below.</p>
     */
    status?: LoadBalancerTlsCertificateStatus | string;
    /**
     * <p>The name of the entity that is associated with the public key contained in the
     *       certificate.</p>
     */
    subject?: string;
    /**
     * <p>One or more domains or subdomains included in the certificate. This list contains the
     *       domain names that are bound to the public key that is contained in the certificate. The
     *       subject alternative names include the canonical domain name (CNAME) of the certificate and
     *       additional domain names that can be used to connect to the website, such as
     *         <code>example.com</code>, <code>www.example.com</code>, or
     *       <code>m.example.com</code>.</p>
     */
    subjectAlternativeNames?: Array<string>;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about your Lightsail load balancer or SSL/TLS certificate. This code enables our support
     *       team to look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace LoadBalancerTlsCertificate {
    function isa(o: any): o is LoadBalancerTlsCertificate;
}
export declare enum LoadBalancerTlsCertificateDomainStatus {
    Failed = "FAILED",
    PendingValidation = "PENDING_VALIDATION",
    Success = "SUCCESS"
}
/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use
 *       to validate domain ownership.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationOption {
    __type?: "LoadBalancerTlsCertificateDomainValidationOption";
    /**
     * <p>The fully qualified domain name in the certificate request.</p>
     */
    domainName?: string;
    /**
     * <p>The status of the domain validation. Valid values are listed below.</p>
     */
    validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;
}
export declare namespace LoadBalancerTlsCertificateDomainValidationOption {
    function isa(o: any): o is LoadBalancerTlsCertificateDomainValidationOption;
}
/**
 * <p>Describes the validation record of each domain name in the SSL/TLS
 *       certificate.</p>
 */
export interface LoadBalancerTlsCertificateDomainValidationRecord {
    __type?: "LoadBalancerTlsCertificateDomainValidationRecord";
    /**
     * <p>The domain name against which your SSL/TLS certificate was validated.</p>
     */
    domainName?: string;
    /**
     * <p>A fully qualified domain name in the certificate. For example,
     *       <code>example.com</code>.</p>
     */
    name?: string;
    /**
     * <p>The type of validation record. For example, <code>CNAME</code> for domain
     *       validation.</p>
     */
    type?: string;
    /**
     * <p>The validation status. Valid values are listed below.</p>
     */
    validationStatus?: LoadBalancerTlsCertificateDomainStatus | string;
    /**
     * <p>The value for that type.</p>
     */
    value?: string;
}
export declare namespace LoadBalancerTlsCertificateDomainValidationRecord {
    function isa(o: any): o is LoadBalancerTlsCertificateDomainValidationRecord;
}
export declare enum LoadBalancerTlsCertificateFailureReason {
    AdditionalVerificationRequired = "ADDITIONAL_VERIFICATION_REQUIRED",
    DomainNotAllowed = "DOMAIN_NOT_ALLOWED",
    InvalidPublicDomain = "INVALID_PUBLIC_DOMAIN",
    NoAvailableContacts = "NO_AVAILABLE_CONTACTS",
    Other = "OTHER"
}
export declare enum LoadBalancerTlsCertificateRenewalStatus {
    Failed = "FAILED",
    PendingAutoRenewal = "PENDING_AUTO_RENEWAL",
    PendingValidation = "PENDING_VALIDATION",
    Success = "SUCCESS"
}
/**
 * <p>Contains information about the status of Lightsail's managed renewal for the
 *       certificate.</p>
 */
export interface LoadBalancerTlsCertificateRenewalSummary {
    __type?: "LoadBalancerTlsCertificateRenewalSummary";
    /**
     * <p>Contains information about the validation of each domain name in the certificate, as it
     *       pertains to Lightsail's managed renewal. This is different from the initial validation that
     *       occurs as a result of the RequestCertificate request.</p>
     */
    domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
    /**
     * <p>The status of Lightsail's managed renewal of the certificate. Valid values are listed
     *       below.</p>
     */
    renewalStatus?: LoadBalancerTlsCertificateRenewalStatus | string;
}
export declare namespace LoadBalancerTlsCertificateRenewalSummary {
    function isa(o: any): o is LoadBalancerTlsCertificateRenewalSummary;
}
export declare enum LoadBalancerTlsCertificateRevocationReason {
    AACompromise = "A_A_COMPROMISE",
    AffiliationChanged = "AFFILIATION_CHANGED",
    CaCompromise = "CA_COMPROMISE",
    CertificateHold = "CERTIFICATE_HOLD",
    CessationOfOperation = "CESSATION_OF_OPERATION",
    KeyCompromise = "KEY_COMPROMISE",
    PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
    RemoveFromCrl = "REMOVE_FROM_CRL",
    Superceded = "SUPERCEDED",
    Unspecified = "UNSPECIFIED"
}
export declare enum LoadBalancerTlsCertificateStatus {
    Expired = "EXPIRED",
    Failed = "FAILED",
    Inactive = "INACTIVE",
    Issued = "ISSUED",
    PendingValidation = "PENDING_VALIDATION",
    Revoked = "REVOKED",
    Unknown = "UNKNOWN",
    ValidationTimedOut = "VALIDATION_TIMED_OUT"
}
/**
 * <p>Provides a summary of SSL/TLS certificate metadata.</p>
 */
export interface LoadBalancerTlsCertificateSummary {
    __type?: "LoadBalancerTlsCertificateSummary";
    /**
     * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load
     *       balancer.</p>
     */
    isAttached?: boolean;
    /**
     * <p>The name of the SSL/TLS certificate.</p>
     */
    name?: string;
}
export declare namespace LoadBalancerTlsCertificateSummary {
    function isa(o: any): o is LoadBalancerTlsCertificateSummary;
}
/**
 * <p>Describes a database log event.</p>
 */
export interface LogEvent {
    __type?: "LogEvent";
    /**
     * <p>The timestamp when the database log event was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The message of the database log event.</p>
     */
    message?: string;
}
export declare namespace LogEvent {
    function isa(o: any): o is LogEvent;
}
/**
 * <p>Describes the metric data point.</p>
 */
export interface MetricDatapoint {
    __type?: "MetricDatapoint";
    /**
     * <p>The average.</p>
     */
    average?: number;
    /**
     * <p>The maximum.</p>
     */
    maximum?: number;
    /**
     * <p>The minimum.</p>
     */
    minimum?: number;
    /**
     * <p>The sample count.</p>
     */
    sampleCount?: number;
    /**
     * <p>The sum.</p>
     */
    sum?: number;
    /**
     * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
     */
    timestamp?: Date;
    /**
     * <p>The unit. </p>
     */
    unit?: MetricUnit | string;
}
export declare namespace MetricDatapoint {
    function isa(o: any): o is MetricDatapoint;
}
export declare enum MetricStatistic {
    Average = "Average",
    Maximum = "Maximum",
    Minimum = "Minimum",
    SampleCount = "SampleCount",
    Sum = "Sum"
}
export declare enum MetricUnit {
    Bits = "Bits",
    BitsSecond = "Bits/Second",
    Bytes = "Bytes",
    BytesSecond = "Bytes/Second",
    Count = "Count",
    CountSecond = "Count/Second",
    Gigabits = "Gigabits",
    GigabitsSecond = "Gigabits/Second",
    Gigabytes = "Gigabytes",
    GigabytesSecond = "Gigabytes/Second",
    Kilobits = "Kilobits",
    KilobitsSecond = "Kilobits/Second",
    Kilobytes = "Kilobytes",
    KilobytesSecond = "Kilobytes/Second",
    Megabits = "Megabits",
    MegabitsSecond = "Megabits/Second",
    Megabytes = "Megabytes",
    MegabytesSecond = "Megabytes/Second",
    Microseconds = "Microseconds",
    Milliseconds = "Milliseconds",
    None = "None",
    Percent = "Percent",
    Seconds = "Seconds",
    Terabits = "Terabits",
    TerabitsSecond = "Terabits/Second",
    Terabytes = "Terabytes",
    TerabytesSecond = "Terabytes/Second"
}
/**
 * <p>Describes the monthly data transfer in and out of your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface MonthlyTransfer {
    __type?: "MonthlyTransfer";
    /**
     * <p>The amount allocated per month (in GB).</p>
     */
    gbPerMonthAllocated?: number;
}
export declare namespace MonthlyTransfer {
    function isa(o: any): o is MonthlyTransfer;
}
export declare enum NetworkProtocol {
    ALL = "all",
    TCP = "tcp",
    UDP = "udp"
}
/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace NotFoundException {
    function isa(o: any): o is NotFoundException;
}
export interface OpenInstancePublicPortsRequest {
    __type?: "OpenInstancePublicPortsRequest";
    /**
     * <p>The name of the instance for which you want to open the public ports.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>An array of key-value pairs containing information about the port mappings.</p>
     */
    portInfo: PortInfo | undefined;
}
export declare namespace OpenInstancePublicPortsRequest {
    function isa(o: any): o is OpenInstancePublicPortsRequest;
}
export interface OpenInstancePublicPortsResult {
    __type?: "OpenInstancePublicPortsResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operation?: Operation;
}
export declare namespace OpenInstancePublicPortsResult {
    function isa(o: any): o is OpenInstancePublicPortsResult;
}
/**
 * <p>Describes the API operation.</p>
 */
export interface Operation {
    __type?: "Operation";
    /**
     * <p>The timestamp when the operation was initialized (e.g.,
     *       <code>1479816991.349</code>).</p>
     */
    createdAt?: Date;
    /**
     * <p>The error code.</p>
     */
    errorCode?: string;
    /**
     * <p>The error details.</p>
     */
    errorDetails?: string;
    /**
     * <p>The ID of the operation.</p>
     */
    id?: string;
    /**
     * <p>A Boolean value indicating whether the operation is terminal.</p>
     */
    isTerminal?: boolean;
    /**
     * <p>The AWS Region and Availability Zone.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).</p>
     */
    operationDetails?: string;
    /**
     * <p>The type of operation. </p>
     */
    operationType?: OperationType | string;
    /**
     * <p>The resource name.</p>
     */
    resourceName?: string;
    /**
     * <p>The resource type. </p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The status of the operation. </p>
     */
    status?: OperationStatus | string;
    /**
     * <p>The timestamp when the status was changed (e.g.,
     *       <code>1479816991.349</code>).</p>
     */
    statusChangedAt?: Date;
}
export declare namespace Operation {
    function isa(o: any): o is Operation;
}
/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 */
export interface OperationFailureException extends __SmithyException, $MetadataBearer {
    name: "OperationFailureException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace OperationFailureException {
    function isa(o: any): o is OperationFailureException;
}
export declare enum OperationStatus {
    Completed = "Completed",
    Failed = "Failed",
    NotStarted = "NotStarted",
    Started = "Started",
    Succeeded = "Succeeded"
}
export declare enum OperationType {
    AllocateStaticIp = "AllocateStaticIp",
    AttachDisk = "AttachDisk",
    AttachInstancesToLoadBalancer = "AttachInstancesToLoadBalancer",
    AttachLoadBalancerTlsCertificate = "AttachLoadBalancerTlsCertificate",
    AttachStaticIp = "AttachStaticIp",
    CloseInstancePublicPorts = "CloseInstancePublicPorts",
    CreateDisk = "CreateDisk",
    CreateDiskFromSnapshot = "CreateDiskFromSnapshot",
    CreateDiskSnapshot = "CreateDiskSnapshot",
    CreateDomain = "CreateDomain",
    CreateInstance = "CreateInstance",
    CreateInstanceSnapshot = "CreateInstanceSnapshot",
    CreateInstancesFromSnapshot = "CreateInstancesFromSnapshot",
    CreateLoadBalancer = "CreateLoadBalancer",
    CreateLoadBalancerTlsCertificate = "CreateLoadBalancerTlsCertificate",
    CreateRelationalDatabase = "CreateRelationalDatabase",
    CreateRelationalDatabaseFromSnapshot = "CreateRelationalDatabaseFromSnapshot",
    CreateRelationalDatabaseSnapshot = "CreateRelationalDatabaseSnapshot",
    DeleteDisk = "DeleteDisk",
    DeleteDiskSnapshot = "DeleteDiskSnapshot",
    DeleteDomain = "DeleteDomain",
    DeleteDomainEntry = "DeleteDomainEntry",
    DeleteInstance = "DeleteInstance",
    DeleteInstanceSnapshot = "DeleteInstanceSnapshot",
    DeleteKnownHostKeys = "DeleteKnownHostKeys",
    DeleteLoadBalancer = "DeleteLoadBalancer",
    DeleteLoadBalancerTlsCertificate = "DeleteLoadBalancerTlsCertificate",
    DeleteRelationalDatabase = "DeleteRelationalDatabase",
    DeleteRelationalDatabaseSnapshot = "DeleteRelationalDatabaseSnapshot",
    DetachDisk = "DetachDisk",
    DetachInstancesFromLoadBalancer = "DetachInstancesFromLoadBalancer",
    DetachStaticIp = "DetachStaticIp",
    DisableAddOn = "DisableAddOn",
    EnableAddOn = "EnableAddOn",
    OpenInstancePublicPorts = "OpenInstancePublicPorts",
    PutInstancePublicPorts = "PutInstancePublicPorts",
    RebootInstance = "RebootInstance",
    RebootRelationalDatabase = "RebootRelationalDatabase",
    ReleaseStaticIp = "ReleaseStaticIp",
    StartInstance = "StartInstance",
    StartRelationalDatabase = "StartRelationalDatabase",
    StopInstance = "StopInstance",
    StopRelationalDatabase = "StopRelationalDatabase",
    UpdateDomainEntry = "UpdateDomainEntry",
    UpdateLoadBalancerAttribute = "UpdateLoadBalancerAttribute",
    UpdateRelationalDatabase = "UpdateRelationalDatabase",
    UpdateRelationalDatabaseParameters = "UpdateRelationalDatabaseParameters"
}
/**
 * <p>The password data for the Windows Server-based instance, including the ciphertext and
 *       the key pair name.</p>
 */
export interface PasswordData {
    __type?: "PasswordData";
    /**
     * <p>The encrypted password. Ciphertext will be an empty string if access to your new
     *       instance is not ready yet. When you create an instance, it can take up to 15 minutes for the
     *       instance to be ready.</p>
     *          <note>
     *             <p>If you use the default key pair (<code>LightsailDefaultKeyPair</code>), the decrypted
     *         password will be available in the password field.</p>
     *             <p>If you are using a custom key pair, you need to use your own means of
     *         decryption.</p>
     *             <p>If you change the Administrator password on the instance, Lightsail will continue
     *         to return the original ciphertext value. When accessing the instance using RDP, you need to
     *         manually enter the Administrator password after changing it from the default.</p>
     *          </note>
     */
    ciphertext?: string;
    /**
     * <p>The name of the key pair that you used when creating your instance. If no key pair name
     *       was specified when creating the instance, Lightsail uses the default key pair
     *         (<code>LightsailDefaultKeyPair</code>).</p>
     *          <p>If you are using a custom key pair, you need to use your own means of decrypting your
     *       password using the <code>ciphertext</code>. Lightsail creates the ciphertext by encrypting
     *       your password with the public key part of this key pair.</p>
     */
    keyPairName?: string;
}
export declare namespace PasswordData {
    function isa(o: any): o is PasswordData;
}
export interface PeerVpcRequest {
    __type?: "PeerVpcRequest";
}
export declare namespace PeerVpcRequest {
    function isa(o: any): o is PeerVpcRequest;
}
export interface PeerVpcResult {
    __type?: "PeerVpcResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operation?: Operation;
}
export declare namespace PeerVpcResult {
    function isa(o: any): o is PeerVpcResult;
}
/**
 * <p>Describes a pending database maintenance action.</p>
 */
export interface PendingMaintenanceAction {
    __type?: "PendingMaintenanceAction";
    /**
     * <p>The type of pending database maintenance action.</p>
     */
    action?: string;
    /**
     * <p>The effective date of the pending database maintenance action.</p>
     */
    currentApplyDate?: Date;
    /**
     * <p>Additional detail about the pending database maintenance action.</p>
     */
    description?: string;
}
export declare namespace PendingMaintenanceAction {
    function isa(o: any): o is PendingMaintenanceAction;
}
/**
 * <p>Describes a pending database value modification.</p>
 */
export interface PendingModifiedRelationalDatabaseValues {
    __type?: "PendingModifiedRelationalDatabaseValues";
    /**
     * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
     */
    backupRetentionEnabled?: boolean;
    /**
     * <p>The database engine version.</p>
     */
    engineVersion?: string;
    /**
     * <p>The password for the master user of the database.</p>
     */
    masterUserPassword?: string;
}
export declare namespace PendingModifiedRelationalDatabaseValues {
    function isa(o: any): o is PendingModifiedRelationalDatabaseValues;
}
export declare enum PortAccessType {
    Private = "Private",
    Public = "Public"
}
/**
 * <p>Describes information about the ports on your virtual private server (or
 *         <i>instance</i>).</p>
 */
export interface PortInfo {
    __type?: "PortInfo";
    /**
     * <p>The first port in the range.</p>
     */
    fromPort?: number;
    /**
     * <p>The protocol. </p>
     */
    protocol?: NetworkProtocol | string;
    /**
     * <p>The last port in the range.</p>
     */
    toPort?: number;
}
export declare namespace PortInfo {
    function isa(o: any): o is PortInfo;
}
export declare enum PortInfoSourceType {
    Closed = "CLOSED",
    Default = "DEFAULT",
    Instance = "INSTANCE",
    None = "NONE"
}
export declare enum PortState {
    Closed = "closed",
    Open = "open"
}
export interface PutInstancePublicPortsRequest {
    __type?: "PutInstancePublicPortsRequest";
    /**
     * <p>The Lightsail instance name of the public port(s) you are setting.</p>
     */
    instanceName: string | undefined;
    /**
     * <p>Specifies information about the public port(s).</p>
     */
    portInfos: Array<PortInfo> | undefined;
}
export declare namespace PutInstancePublicPortsRequest {
    function isa(o: any): o is PutInstancePublicPortsRequest;
}
export interface PutInstancePublicPortsResult {
    __type?: "PutInstancePublicPortsResult";
    /**
     * <p>Describes metadata about the operation you just executed.</p>
     */
    operation?: Operation;
}
export declare namespace PutInstancePublicPortsResult {
    function isa(o: any): o is PutInstancePublicPortsResult;
}
export interface RebootInstanceRequest {
    __type?: "RebootInstanceRequest";
    /**
     * <p>The name of the instance to reboot.</p>
     */
    instanceName: string | undefined;
}
export declare namespace RebootInstanceRequest {
    function isa(o: any): o is RebootInstanceRequest;
}
export interface RebootInstanceResult {
    __type?: "RebootInstanceResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace RebootInstanceResult {
    function isa(o: any): o is RebootInstanceResult;
}
export interface RebootRelationalDatabaseRequest {
    __type?: "RebootRelationalDatabaseRequest";
    /**
     * <p>The name of your database to reboot.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace RebootRelationalDatabaseRequest {
    function isa(o: any): o is RebootRelationalDatabaseRequest;
}
export interface RebootRelationalDatabaseResult {
    __type?: "RebootRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your reboot relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace RebootRelationalDatabaseResult {
    function isa(o: any): o is RebootRelationalDatabaseResult;
}
export declare enum RecordState {
    Failed = "Failed",
    Started = "Started",
    Succeeded = "Succeeded"
}
/**
 * <p>Describes the AWS Region.</p>
 */
export interface Region {
    __type?: "Region";
    /**
     * <p>The Availability Zones. Follows the format <code>us-east-2a</code>
     *       (case-sensitive).</p>
     */
    availabilityZones?: Array<AvailabilityZone>;
    /**
     * <p>The continent code (e.g., <code>NA</code>, meaning North America).</p>
     */
    continentCode?: string;
    /**
     * <p>The description of the AWS Region (e.g., <code>This region is recommended to serve
     *         users in the eastern United States and eastern Canada</code>).</p>
     */
    description?: string;
    /**
     * <p>The display name (e.g., <code>Ohio</code>).</p>
     */
    displayName?: string;
    /**
     * <p>The region name (e.g., <code>us-east-2</code>).</p>
     */
    name?: RegionName | string;
    /**
     * <p>The Availability Zones for databases. Follows the format <code>us-east-2a</code>
     *       (case-sensitive).</p>
     */
    relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
}
export declare namespace Region {
    function isa(o: any): o is Region;
}
export declare enum RegionName {
    AP_NORTHEAST_1 = "ap-northeast-1",
    AP_NORTHEAST_2 = "ap-northeast-2",
    AP_SOUTHEAST_1 = "ap-southeast-1",
    AP_SOUTHEAST_2 = "ap-southeast-2",
    AP_SOUTH_1 = "ap-south-1",
    CA_CENTRAL_1 = "ca-central-1",
    EU_CENTRAL_1 = "eu-central-1",
    EU_WEST_1 = "eu-west-1",
    EU_WEST_2 = "eu-west-2",
    EU_WEST_3 = "eu-west-3",
    US_EAST_1 = "us-east-1",
    US_EAST_2 = "us-east-2",
    US_WEST_1 = "us-west-1",
    US_WEST_2 = "us-west-2"
}
/**
 * <p>Describes a database.</p>
 */
export interface RelationalDatabase {
    __type?: "RelationalDatabase";
    /**
     * <p>The Amazon Resource Name (ARN) of the database.</p>
     */
    arn?: string;
    /**
     * <p>A Boolean value indicating whether automated backup retention is enabled for the
     *       database.</p>
     */
    backupRetentionEnabled?: boolean;
    /**
     * <p>The certificate associated with the database.</p>
     */
    caCertificateIdentifier?: string;
    /**
     * <p>The timestamp when the database was created. Formatted in Unix time.</p>
     */
    createdAt?: Date;
    /**
     * <p>The database software (for example, <code>MySQL</code>).</p>
     */
    engine?: string;
    /**
     * <p>The database engine version (for example, <code>5.7.23</code>).</p>
     */
    engineVersion?: string;
    /**
     * <p>Describes the hardware of the database.</p>
     */
    hardware?: RelationalDatabaseHardware;
    /**
     * <p>The latest point in time to which the database can be restored. Formatted in Unix
     *       time.</p>
     */
    latestRestorableTime?: Date;
    /**
     * <p>The Region name and Availability Zone where the database is located.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the master database created when the Lightsail database resource is
     *       created.</p>
     */
    masterDatabaseName?: string;
    /**
     * <p>The master endpoint for the database.</p>
     */
    masterEndpoint?: RelationalDatabaseEndpoint;
    /**
     * <p>The master user name of the database.</p>
     */
    masterUsername?: string;
    /**
     * <p>The unique name of the database resource in Lightsail.</p>
     */
    name?: string;
    /**
     * <p>The status of parameter updates for the database.</p>
     */
    parameterApplyStatus?: string;
    /**
     * <p>Describes the pending maintenance actions for the database.</p>
     */
    pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
    /**
     * <p>Describes pending database value modifications.</p>
     */
    pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
    /**
     * <p>The daily time range during which automated backups are created for the database (for
     *       example, <code>16:00-16:30</code>).</p>
     */
    preferredBackupWindow?: string;
    /**
     * <p>The weekly time range during which system maintenance can occur on the
     *       database.</p>
     *          <p>In the format <code>ddd:hh24:mi-ddd:hh24:mi</code>. For example,
     *         <code>Tue:17:00-Tue:17:30</code>.</p>
     */
    preferredMaintenanceWindow?: string;
    /**
     * <p>A Boolean value indicating whether the database is publicly accessible.</p>
     */
    publiclyAccessible?: boolean;
    /**
     * <p>The blueprint ID for the database. A blueprint describes the major engine version of a
     *       database.</p>
     */
    relationalDatabaseBlueprintId?: string;
    /**
     * <p>The bundle ID for the database. A bundle describes the performance specifications for
     *       your database.</p>
     */
    relationalDatabaseBundleId?: string;
    /**
     * <p>The Lightsail resource type for the database (for example,
     *         <code>RelationalDatabase</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>Describes the secondary Availability Zone of a high availability database.</p>
     *          <p>The secondary database is used for failover support of a high availability
     *       database.</p>
     */
    secondaryAvailabilityZone?: string;
    /**
     * <p>Describes the current state of the database.</p>
     */
    state?: string;
    /**
     * <p>The support code for the database. Include this code in your email to support when you
     *       have questions about a database in Lightsail. This code enables our support team to look up
     *       your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace RelationalDatabase {
    function isa(o: any): o is RelationalDatabase;
}
/**
 * <p>Describes a database image, or blueprint. A blueprint describes the major engine
 *       version of a database.</p>
 */
export interface RelationalDatabaseBlueprint {
    __type?: "RelationalDatabaseBlueprint";
    /**
     * <p>The ID for the database blueprint.</p>
     */
    blueprintId?: string;
    /**
     * <p>The database software of the database blueprint (for example,
     *       <code>MySQL</code>).</p>
     */
    engine?: RelationalDatabaseEngine | string;
    /**
     * <p>The description of the database engine for the database blueprint.</p>
     */
    engineDescription?: string;
    /**
     * <p>The database engine version for the database blueprint (for example,
     *         <code>5.7.23</code>).</p>
     */
    engineVersion?: string;
    /**
     * <p>The description of the database engine version for the database blueprint.</p>
     */
    engineVersionDescription?: string;
    /**
     * <p>A Boolean value indicating whether the engine version is the default for the database
     *       blueprint.</p>
     */
    isEngineDefault?: boolean;
}
export declare namespace RelationalDatabaseBlueprint {
    function isa(o: any): o is RelationalDatabaseBlueprint;
}
/**
 * <p>Describes a database bundle. A bundle describes the performance specifications of the
 *       database.</p>
 */
export interface RelationalDatabaseBundle {
    __type?: "RelationalDatabaseBundle";
    /**
     * <p>The ID for the database bundle.</p>
     */
    bundleId?: string;
    /**
     * <p>The number of virtual CPUs (vCPUs) for the database bundle.</p>
     */
    cpuCount?: number;
    /**
     * <p>The size of the disk for the database bundle.</p>
     */
    diskSizeInGb?: number;
    /**
     * <p>A Boolean value indicating whether the database bundle is active.</p>
     */
    isActive?: boolean;
    /**
     * <p>A Boolean value indicating whether the database bundle is encrypted.</p>
     */
    isEncrypted?: boolean;
    /**
     * <p>The name for the database bundle.</p>
     */
    name?: string;
    /**
     * <p>The cost of the database bundle in US currency.</p>
     */
    price?: number;
    /**
     * <p>The amount of RAM in GB (for example, <code>2.0</code>) for the database
     *       bundle.</p>
     */
    ramSizeInGb?: number;
    /**
     * <p>The data transfer rate per month in GB for the database bundle.</p>
     */
    transferPerMonthInGb?: number;
}
export declare namespace RelationalDatabaseBundle {
    function isa(o: any): o is RelationalDatabaseBundle;
}
/**
 * <p>Describes an endpoint for a database.</p>
 */
export interface RelationalDatabaseEndpoint {
    __type?: "RelationalDatabaseEndpoint";
    /**
     * <p>Specifies the DNS address of the database.</p>
     */
    address?: string;
    /**
     * <p>Specifies the port that the database is listening on.</p>
     */
    port?: number;
}
export declare namespace RelationalDatabaseEndpoint {
    function isa(o: any): o is RelationalDatabaseEndpoint;
}
export declare enum RelationalDatabaseEngine {
    MYSQL = "mysql"
}
/**
 * <p>Describes an event for a database.</p>
 */
export interface RelationalDatabaseEvent {
    __type?: "RelationalDatabaseEvent";
    /**
     * <p>The timestamp when the database event was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The category that the database event belongs to.</p>
     */
    eventCategories?: Array<string>;
    /**
     * <p>The message of the database event.</p>
     */
    message?: string;
    /**
     * <p>The database that the database event relates to.</p>
     */
    resource?: string;
}
export declare namespace RelationalDatabaseEvent {
    function isa(o: any): o is RelationalDatabaseEvent;
}
/**
 * <p>Describes the hardware of a database.</p>
 */
export interface RelationalDatabaseHardware {
    __type?: "RelationalDatabaseHardware";
    /**
     * <p>The number of vCPUs for the database.</p>
     */
    cpuCount?: number;
    /**
     * <p>The size of the disk for the database.</p>
     */
    diskSizeInGb?: number;
    /**
     * <p>The amount of RAM in GB for the database.</p>
     */
    ramSizeInGb?: number;
}
export declare namespace RelationalDatabaseHardware {
    function isa(o: any): o is RelationalDatabaseHardware;
}
export declare enum RelationalDatabaseMetricName {
    CPUUtilization = "CPUUtilization",
    DatabaseConnections = "DatabaseConnections",
    DiskQueueDepth = "DiskQueueDepth",
    FreeStorageSpace = "FreeStorageSpace",
    NetworkReceiveThroughput = "NetworkReceiveThroughput",
    NetworkTransmitThroughput = "NetworkTransmitThroughput"
}
/**
 * <p>Describes the parameters of a database.</p>
 */
export interface RelationalDatabaseParameter {
    __type?: "RelationalDatabaseParameter";
    /**
     * <p>Specifies the valid range of values for the parameter.</p>
     */
    allowedValues?: string;
    /**
     * <p>Indicates when parameter updates are applied.</p>
     *          <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
     */
    applyMethod?: string;
    /**
     * <p>Specifies the engine-specific parameter type.</p>
     */
    applyType?: string;
    /**
     * <p>Specifies the valid data type for the parameter.</p>
     */
    dataType?: string;
    /**
     * <p>Provides a description of the parameter.</p>
     */
    description?: string;
    /**
     * <p>A Boolean value indicating whether the parameter can be modified.</p>
     */
    isModifiable?: boolean;
    /**
     * <p>Specifies the name of the parameter.</p>
     */
    parameterName?: string;
    /**
     * <p>Specifies the value of the parameter.</p>
     */
    parameterValue?: string;
}
export declare namespace RelationalDatabaseParameter {
    function isa(o: any): o is RelationalDatabaseParameter;
}
export declare enum RelationalDatabasePasswordVersion {
    CURRENT = "CURRENT",
    PENDING = "PENDING",
    PREVIOUS = "PREVIOUS"
}
/**
 * <p>Describes a database snapshot.</p>
 */
export interface RelationalDatabaseSnapshot {
    __type?: "RelationalDatabaseSnapshot";
    /**
     * <p>The Amazon Resource Name (ARN) of the database snapshot.</p>
     */
    arn?: string;
    /**
     * <p>The timestamp when the database snapshot was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The software of the database snapshot (for example, <code>MySQL</code>)</p>
     */
    engine?: string;
    /**
     * <p>The database engine version for the database snapshot (for example,
     *       <code>5.7.23</code>).</p>
     */
    engineVersion?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the database from which the database snapshot was
     *       created.</p>
     */
    fromRelationalDatabaseArn?: string;
    /**
     * <p>The blueprint ID of the database from which the database snapshot was created. A
     *       blueprint describes the major engine version of a database.</p>
     */
    fromRelationalDatabaseBlueprintId?: string;
    /**
     * <p>The bundle ID of the database from which the database snapshot was created.</p>
     */
    fromRelationalDatabaseBundleId?: string;
    /**
     * <p>The name of the source database from which the database snapshot was created.</p>
     */
    fromRelationalDatabaseName?: string;
    /**
     * <p>The Region name and Availability Zone where the database snapshot is located.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the database snapshot.</p>
     */
    name?: string;
    /**
     * <p>The Lightsail resource type.</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The size of the disk in GB (for example, <code>32</code>) for the database
     *       snapshot.</p>
     */
    sizeInGb?: number;
    /**
     * <p>The state of the database snapshot.</p>
     */
    state?: string;
    /**
     * <p>The support code for the database snapshot. Include this code in your email to support
     *       when you have questions about a database snapshot in Lightsail. This code enables our
     *       support team to look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
    /**
     * <p>The tag keys and optional values for the resource. For more information about tags in
     *       Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     */
    tags?: Array<Tag>;
}
export declare namespace RelationalDatabaseSnapshot {
    function isa(o: any): o is RelationalDatabaseSnapshot;
}
export interface ReleaseStaticIpRequest {
    __type?: "ReleaseStaticIpRequest";
    /**
     * <p>The name of the static IP to delete.</p>
     */
    staticIpName: string | undefined;
}
export declare namespace ReleaseStaticIpRequest {
    function isa(o: any): o is ReleaseStaticIpRequest;
}
export interface ReleaseStaticIpResult {
    __type?: "ReleaseStaticIpResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace ReleaseStaticIpResult {
    function isa(o: any): o is ReleaseStaticIpResult;
}
/**
 * <p>Describes the resource location.</p>
 */
export interface ResourceLocation {
    __type?: "ResourceLocation";
    /**
     * <p>The Availability Zone. Follows the format <code>us-east-2a</code>
     *       (case-sensitive).</p>
     */
    availabilityZone?: string;
    /**
     * <p>The AWS Region name.</p>
     */
    regionName?: RegionName | string;
}
export declare namespace ResourceLocation {
    function isa(o: any): o is ResourceLocation;
}
export declare enum ResourceType {
    CloudFormationStackRecord = "CloudFormationStackRecord",
    Disk = "Disk",
    DiskSnapshot = "DiskSnapshot",
    Domain = "Domain",
    ExportSnapshotRecord = "ExportSnapshotRecord",
    Instance = "Instance",
    InstanceSnapshot = "InstanceSnapshot",
    KeyPair = "KeyPair",
    LoadBalancer = "LoadBalancer",
    LoadBalancerTlsCertificate = "LoadBalancerTlsCertificate",
    PeeredVpc = "PeeredVpc",
    RelationalDatabase = "RelationalDatabase",
    RelationalDatabaseSnapshot = "RelationalDatabaseSnapshot",
    StaticIp = "StaticIp"
}
/**
 * <p>A general service exception.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace ServiceException {
    function isa(o: any): o is ServiceException;
}
export interface StartInstanceRequest {
    __type?: "StartInstanceRequest";
    /**
     * <p>The name of the instance (a virtual private server) to start.</p>
     */
    instanceName: string | undefined;
}
export declare namespace StartInstanceRequest {
    function isa(o: any): o is StartInstanceRequest;
}
export interface StartInstanceResult {
    __type?: "StartInstanceResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace StartInstanceResult {
    function isa(o: any): o is StartInstanceResult;
}
export interface StartRelationalDatabaseRequest {
    __type?: "StartRelationalDatabaseRequest";
    /**
     * <p>The name of your database to start.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace StartRelationalDatabaseRequest {
    function isa(o: any): o is StartRelationalDatabaseRequest;
}
export interface StartRelationalDatabaseResult {
    __type?: "StartRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your start relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace StartRelationalDatabaseResult {
    function isa(o: any): o is StartRelationalDatabaseResult;
}
/**
 * <p>Describes the static IP.</p>
 */
export interface StaticIp {
    __type?: "StaticIp";
    /**
     * <p>The Amazon Resource Name (ARN) of the static IP (e.g.,
     *         <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>
     */
    arn?: string;
    /**
     * <p>The instance where the static IP is attached (e.g.,
     *         <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
     */
    attachedTo?: string;
    /**
     * <p>The timestamp when the static IP was created (e.g.,
     *       <code>1479735304.222</code>).</p>
     */
    createdAt?: Date;
    /**
     * <p>The static IP address.</p>
     */
    ipAddress?: string;
    /**
     * <p>A Boolean value indicating whether the static IP is attached.</p>
     */
    isAttached?: boolean;
    /**
     * <p>The region and Availability Zone where the static IP was created.</p>
     */
    location?: ResourceLocation;
    /**
     * <p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>
     */
    name?: string;
    /**
     * <p>The resource type (usually <code>StaticIp</code>).</p>
     */
    resourceType?: ResourceType | string;
    /**
     * <p>The support code. Include this code in your email to support when you have questions
     *       about an instance or another resource in Lightsail. This code enables our support team to
     *       look up your Lightsail information more easily.</p>
     */
    supportCode?: string;
}
export declare namespace StaticIp {
    function isa(o: any): o is StaticIp;
}
export interface StopInstanceRequest {
    __type?: "StopInstanceRequest";
    /**
     * <p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a
     *         <code>stopping</code> state to stop.</p>
     *          <important>
     *             <p>Only use the <code>force</code> parameter if your instance is stuck in the
     *           <code>stopping</code> state. In any other state, your instance should stop normally
     *         without adding this parameter to your API request.</p>
     *          </important>
     */
    force?: boolean;
    /**
     * <p>The name of the instance (a virtual private server) to stop.</p>
     */
    instanceName: string | undefined;
}
export declare namespace StopInstanceRequest {
    function isa(o: any): o is StopInstanceRequest;
}
export interface StopInstanceResult {
    __type?: "StopInstanceResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace StopInstanceResult {
    function isa(o: any): o is StopInstanceResult;
}
export interface StopRelationalDatabaseRequest {
    __type?: "StopRelationalDatabaseRequest";
    /**
     * <p>The name of your database to stop.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>The name of your new database snapshot to be created before stopping your
     *       database.</p>
     */
    relationalDatabaseSnapshotName?: string;
}
export declare namespace StopRelationalDatabaseRequest {
    function isa(o: any): o is StopRelationalDatabaseRequest;
}
export interface StopRelationalDatabaseResult {
    __type?: "StopRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your stop relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace StopRelationalDatabaseResult {
    function isa(o: any): o is StopRelationalDatabaseResult;
}
/**
 * <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p>
 *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
 *         Dev Guide</a>.</p>
 */
export interface Tag {
    __type?: "Tag";
    /**
     * <p>The key of the tag.</p>
     *          <p>Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the
     *       following characters: + - = . _ : / @</p>
     */
    key?: string;
    /**
     * <p>The value of the tag.</p>
     *          <p>Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the
     *       following characters: + - = . _ : / @</p>
     */
    value?: string;
}
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to which you want to add a tag.</p>
     */
    resourceArn?: string;
    /**
     * <p>The name of the resource to which you are adding tags.</p>
     */
    resourceName: string | undefined;
    /**
     * <p>The tag key and optional value.</p>
     */
    tags: Array<Tag> | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface TagResourceResult {
    __type?: "TagResourceResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace TagResourceResult {
    function isa(o: any): o is TagResourceResult;
}
/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 */
export interface UnauthenticatedException extends __SmithyException, $MetadataBearer {
    name: "UnauthenticatedException";
    $fault: "client";
    code?: string;
    docs?: string;
    message?: string;
    tip?: string;
}
export declare namespace UnauthenticatedException {
    function isa(o: any): o is UnauthenticatedException;
}
export interface UnpeerVpcRequest {
    __type?: "UnpeerVpcRequest";
}
export declare namespace UnpeerVpcRequest {
    function isa(o: any): o is UnpeerVpcRequest;
}
export interface UnpeerVpcResult {
    __type?: "UnpeerVpcResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operation?: Operation;
}
export declare namespace UnpeerVpcResult {
    function isa(o: any): o is UnpeerVpcResult;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.</p>
     */
    resourceArn?: string;
    /**
     * <p>The name of the resource from which you are removing a tag.</p>
     */
    resourceName: string | undefined;
    /**
     * <p>The tag keys to delete from the specified resource.</p>
     */
    tagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UntagResourceResult {
    __type?: "UntagResourceResult";
    /**
     * <p>A list of objects describing the API operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace UntagResourceResult {
    function isa(o: any): o is UntagResourceResult;
}
export interface UpdateDomainEntryRequest {
    __type?: "UpdateDomainEntryRequest";
    /**
     * <p>An array of key-value pairs containing information about the domain entry.</p>
     */
    domainEntry: DomainEntry | undefined;
    /**
     * <p>The name of the domain recordset to update.</p>
     */
    domainName: string | undefined;
}
export declare namespace UpdateDomainEntryRequest {
    function isa(o: any): o is UpdateDomainEntryRequest;
}
export interface UpdateDomainEntryResult {
    __type?: "UpdateDomainEntryResult";
    /**
     * <p>An array of key-value pairs containing information about the request
     *       operation.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace UpdateDomainEntryResult {
    function isa(o: any): o is UpdateDomainEntryResult;
}
export interface UpdateLoadBalancerAttributeRequest {
    __type?: "UpdateLoadBalancerAttributeRequest";
    /**
     * <p>The name of the attribute you want to update. Valid values are below.</p>
     */
    attributeName: LoadBalancerAttributeName | string | undefined;
    /**
     * <p>The value that you want to specify for the attribute name.</p>
     */
    attributeValue: string | undefined;
    /**
     * <p>The name of the load balancer that you want to modify (e.g.,
     *         <code>my-load-balancer</code>.</p>
     */
    loadBalancerName: string | undefined;
}
export declare namespace UpdateLoadBalancerAttributeRequest {
    function isa(o: any): o is UpdateLoadBalancerAttributeRequest;
}
export interface UpdateLoadBalancerAttributeResult {
    __type?: "UpdateLoadBalancerAttributeResult";
    /**
     * <p>An object describing the API operations.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace UpdateLoadBalancerAttributeResult {
    function isa(o: any): o is UpdateLoadBalancerAttributeResult;
}
export interface UpdateRelationalDatabaseParametersRequest {
    __type?: "UpdateRelationalDatabaseParametersRequest";
    /**
     * <p>The database parameters to update.</p>
     */
    parameters: Array<RelationalDatabaseParameter> | undefined;
    /**
     * <p>The name of your database for which to update parameters.</p>
     */
    relationalDatabaseName: string | undefined;
}
export declare namespace UpdateRelationalDatabaseParametersRequest {
    function isa(o: any): o is UpdateRelationalDatabaseParametersRequest;
}
export interface UpdateRelationalDatabaseParametersResult {
    __type?: "UpdateRelationalDatabaseParametersResult";
    /**
     * <p>An object describing the result of your update relational database parameters
     *       request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace UpdateRelationalDatabaseParametersResult {
    function isa(o: any): o is UpdateRelationalDatabaseParametersResult;
}
export interface UpdateRelationalDatabaseRequest {
    __type?: "UpdateRelationalDatabaseRequest";
    /**
     * <p>When <code>true</code>, applies changes immediately. When <code>false</code>, applies
     *       changes during the preferred maintenance window. Some changes may cause an outage.</p>
     *          <p>Default: <code>false</code>
     *          </p>
     */
    applyImmediately?: boolean;
    /**
     * <p>Indicates the certificate that needs to be associated with the database.</p>
     */
    caCertificateIdentifier?: string;
    /**
     * <p>When <code>true</code>, disables automated backup retention for your
     *       database.</p>
     *          <p>Disabling backup retention deletes all automated database backups. Before disabling
     *       this, you may want to create a snapshot of your database using the <code>create relational
     *         database snapshot</code> operation.</p>
     *          <p>Updates are applied during the next maintenance window because this can result in an
     *       outage.</p>
     */
    disableBackupRetention?: boolean;
    /**
     * <p>When <code>true</code>, enables automated backup retention for your database.</p>
     *          <p>Updates are applied during the next maintenance window because this can result in an
     *       outage.</p>
     */
    enableBackupRetention?: boolean;
    /**
     * <p>The password for the master user of your database. The password can include any
     *       printable ASCII character except "/", """, or "@".</p>
     *          <p>Constraints: Must contain 8 to 41 characters.</p>
     */
    masterUserPassword?: string;
    /**
     * <p>The daily time range during which automated backups are created for your database if
     *       automated backups are enabled.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p>
     *                <p>Example: <code>16:00-16:30</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Must not conflict with the preferred maintenance window.</p>
     *             </li>
     *             <li>
     *                <p>Must be at least 30 minutes.</p>
     *             </li>
     *          </ul>
     */
    preferredBackupWindow?: string;
    /**
     * <p>The weekly time range during which system maintenance can occur on your
     *       database.</p>
     *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for
     *       each AWS Region, occurring on a random day of the week.</p>
     *          <p>Constraints:</p>
     *          <ul>
     *             <li>
     *                <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p>
     *             </li>
     *             <li>
     *                <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
     *             </li>
     *             <li>
     *                <p>Must be at least 30 minutes.</p>
     *             </li>
     *             <li>
     *                <p>Specified in Coordinated Universal Time (UTC).</p>
     *             </li>
     *             <li>
     *                <p>Example: <code>Tue:17:00-Tue:17:30</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    preferredMaintenanceWindow?: string;
    /**
     * <p>Specifies the accessibility options for your database. A value of <code>true</code>
     *       specifies a database that is available to resources outside of your Lightsail account. A
     *       value of <code>false</code> specifies a database that is available only to your Lightsail
     *       resources in the same region as your database.</p>
     */
    publiclyAccessible?: boolean;
    /**
     * <p>The name of your database to update.</p>
     */
    relationalDatabaseName: string | undefined;
    /**
     * <p>When <code>true</code>, the master user password is changed to a new strong password
     *       generated by Lightsail.</p>
     *          <p>Use the <code>get relational database master user password</code> operation to get the
     *       new password.</p>
     */
    rotateMasterUserPassword?: boolean;
}
export declare namespace UpdateRelationalDatabaseRequest {
    function isa(o: any): o is UpdateRelationalDatabaseRequest;
}
export interface UpdateRelationalDatabaseResult {
    __type?: "UpdateRelationalDatabaseResult";
    /**
     * <p>An object describing the result of your update relational database request.</p>
     */
    operations?: Array<Operation>;
}
export declare namespace UpdateRelationalDatabaseResult {
    function isa(o: any): o is UpdateRelationalDatabaseResult;
}
