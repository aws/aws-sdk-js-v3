import { LightsailClient } from "./LightsailClient";
import { AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput } from "./commands/AllocateStaticIpCommand";
import { AttachDiskCommandInput, AttachDiskCommandOutput } from "./commands/AttachDiskCommand";
import { AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput } from "./commands/AttachInstancesToLoadBalancerCommand";
import { AttachLoadBalancerTlsCertificateCommandInput, AttachLoadBalancerTlsCertificateCommandOutput } from "./commands/AttachLoadBalancerTlsCertificateCommand";
import { AttachStaticIpCommandInput, AttachStaticIpCommandOutput } from "./commands/AttachStaticIpCommand";
import { CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput } from "./commands/CloseInstancePublicPortsCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import { CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput } from "./commands/CreateCloudFormationStackCommand";
import { CreateDiskCommandInput, CreateDiskCommandOutput } from "./commands/CreateDiskCommand";
import { CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput } from "./commands/CreateDiskFromSnapshotCommand";
import { CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput } from "./commands/CreateDiskSnapshotCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput } from "./commands/CreateDomainEntryCommand";
import { CreateInstanceSnapshotCommandInput, CreateInstanceSnapshotCommandOutput } from "./commands/CreateInstanceSnapshotCommand";
import { CreateInstancesCommandInput, CreateInstancesCommandOutput } from "./commands/CreateInstancesCommand";
import { CreateInstancesFromSnapshotCommandInput, CreateInstancesFromSnapshotCommandOutput } from "./commands/CreateInstancesFromSnapshotCommand";
import { CreateKeyPairCommandInput, CreateKeyPairCommandOutput } from "./commands/CreateKeyPairCommand";
import { CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput } from "./commands/CreateLoadBalancerCommand";
import { CreateLoadBalancerTlsCertificateCommandInput, CreateLoadBalancerTlsCertificateCommandOutput } from "./commands/CreateLoadBalancerTlsCertificateCommand";
import { CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput } from "./commands/CreateRelationalDatabaseCommand";
import { CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput } from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import { CreateRelationalDatabaseSnapshotCommandInput, CreateRelationalDatabaseSnapshotCommandOutput } from "./commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteAutoSnapshotCommandInput, DeleteAutoSnapshotCommandOutput } from "./commands/DeleteAutoSnapshotCommand";
import { DeleteDiskCommandInput, DeleteDiskCommandOutput } from "./commands/DeleteDiskCommand";
import { DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput } from "./commands/DeleteDiskSnapshotCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput } from "./commands/DeleteDomainEntryCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import { DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput } from "./commands/DeleteInstanceSnapshotCommand";
import { DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput } from "./commands/DeleteKeyPairCommand";
import { DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput } from "./commands/DeleteKnownHostKeysCommand";
import { DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput } from "./commands/DeleteLoadBalancerCommand";
import { DeleteLoadBalancerTlsCertificateCommandInput, DeleteLoadBalancerTlsCertificateCommandOutput } from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import { DeleteRelationalDatabaseCommandInput, DeleteRelationalDatabaseCommandOutput } from "./commands/DeleteRelationalDatabaseCommand";
import { DeleteRelationalDatabaseSnapshotCommandInput, DeleteRelationalDatabaseSnapshotCommandOutput } from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import { DetachDiskCommandInput, DetachDiskCommandOutput } from "./commands/DetachDiskCommand";
import { DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput } from "./commands/DetachInstancesFromLoadBalancerCommand";
import { DetachStaticIpCommandInput, DetachStaticIpCommandOutput } from "./commands/DetachStaticIpCommand";
import { DisableAddOnCommandInput, DisableAddOnCommandOutput } from "./commands/DisableAddOnCommand";
import { DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput } from "./commands/DownloadDefaultKeyPairCommand";
import { EnableAddOnCommandInput, EnableAddOnCommandOutput } from "./commands/EnableAddOnCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "./commands/ExportSnapshotCommand";
import { GetActiveNamesCommandInput, GetActiveNamesCommandOutput } from "./commands/GetActiveNamesCommand";
import { GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput } from "./commands/GetAutoSnapshotsCommand";
import { GetBlueprintsCommandInput, GetBlueprintsCommandOutput } from "./commands/GetBlueprintsCommand";
import { GetBundlesCommandInput, GetBundlesCommandOutput } from "./commands/GetBundlesCommand";
import { GetCloudFormationStackRecordsCommandInput, GetCloudFormationStackRecordsCommandOutput } from "./commands/GetCloudFormationStackRecordsCommand";
import { GetDiskCommandInput, GetDiskCommandOutput } from "./commands/GetDiskCommand";
import { GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput } from "./commands/GetDiskSnapshotCommand";
import { GetDiskSnapshotsCommandInput, GetDiskSnapshotsCommandOutput } from "./commands/GetDiskSnapshotsCommand";
import { GetDisksCommandInput, GetDisksCommandOutput } from "./commands/GetDisksCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainsCommandInput, GetDomainsCommandOutput } from "./commands/GetDomainsCommand";
import { GetExportSnapshotRecordsCommandInput, GetExportSnapshotRecordsCommandOutput } from "./commands/GetExportSnapshotRecordsCommand";
import { GetInstanceAccessDetailsCommandInput, GetInstanceAccessDetailsCommandOutput } from "./commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import { GetInstanceMetricDataCommandInput, GetInstanceMetricDataCommandOutput } from "./commands/GetInstanceMetricDataCommand";
import { GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput } from "./commands/GetInstancePortStatesCommand";
import { GetInstanceSnapshotCommandInput, GetInstanceSnapshotCommandOutput } from "./commands/GetInstanceSnapshotCommand";
import { GetInstanceSnapshotsCommandInput, GetInstanceSnapshotsCommandOutput } from "./commands/GetInstanceSnapshotsCommand";
import { GetInstanceStateCommandInput, GetInstanceStateCommandOutput } from "./commands/GetInstanceStateCommand";
import { GetInstancesCommandInput, GetInstancesCommandOutput } from "./commands/GetInstancesCommand";
import { GetKeyPairCommandInput, GetKeyPairCommandOutput } from "./commands/GetKeyPairCommand";
import { GetKeyPairsCommandInput, GetKeyPairsCommandOutput } from "./commands/GetKeyPairsCommand";
import { GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput } from "./commands/GetLoadBalancerCommand";
import { GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput } from "./commands/GetLoadBalancerMetricDataCommand";
import { GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput } from "./commands/GetLoadBalancerTlsCertificatesCommand";
import { GetLoadBalancersCommandInput, GetLoadBalancersCommandOutput } from "./commands/GetLoadBalancersCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "./commands/GetOperationCommand";
import { GetOperationsCommandInput, GetOperationsCommandOutput } from "./commands/GetOperationsCommand";
import { GetOperationsForResourceCommandInput, GetOperationsForResourceCommandOutput } from "./commands/GetOperationsForResourceCommand";
import { GetRegionsCommandInput, GetRegionsCommandOutput } from "./commands/GetRegionsCommand";
import { GetRelationalDatabaseBlueprintsCommandInput, GetRelationalDatabaseBlueprintsCommandOutput } from "./commands/GetRelationalDatabaseBlueprintsCommand";
import { GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput } from "./commands/GetRelationalDatabaseBundlesCommand";
import { GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput } from "./commands/GetRelationalDatabaseCommand";
import { GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput } from "./commands/GetRelationalDatabaseEventsCommand";
import { GetRelationalDatabaseLogEventsCommandInput, GetRelationalDatabaseLogEventsCommandOutput } from "./commands/GetRelationalDatabaseLogEventsCommand";
import { GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput } from "./commands/GetRelationalDatabaseLogStreamsCommand";
import { GetRelationalDatabaseMasterUserPasswordCommandInput, GetRelationalDatabaseMasterUserPasswordCommandOutput } from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import { GetRelationalDatabaseMetricDataCommandInput, GetRelationalDatabaseMetricDataCommandOutput } from "./commands/GetRelationalDatabaseMetricDataCommand";
import { GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput } from "./commands/GetRelationalDatabaseParametersCommand";
import { GetRelationalDatabaseSnapshotCommandInput, GetRelationalDatabaseSnapshotCommandOutput } from "./commands/GetRelationalDatabaseSnapshotCommand";
import { GetRelationalDatabaseSnapshotsCommandInput, GetRelationalDatabaseSnapshotsCommandOutput } from "./commands/GetRelationalDatabaseSnapshotsCommand";
import { GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput } from "./commands/GetRelationalDatabasesCommand";
import { GetStaticIpCommandInput, GetStaticIpCommandOutput } from "./commands/GetStaticIpCommand";
import { GetStaticIpsCommandInput, GetStaticIpsCommandOutput } from "./commands/GetStaticIpsCommand";
import { ImportKeyPairCommandInput, ImportKeyPairCommandOutput } from "./commands/ImportKeyPairCommand";
import { IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput } from "./commands/IsVpcPeeredCommand";
import { OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput } from "./commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommandInput, PeerVpcCommandOutput } from "./commands/PeerVpcCommand";
import { PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput } from "./commands/PutInstancePublicPortsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import { RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput } from "./commands/RebootRelationalDatabaseCommand";
import { ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput } from "./commands/ReleaseStaticIpCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import { StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput } from "./commands/StartRelationalDatabaseCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import { StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput } from "./commands/StopRelationalDatabaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnpeerVpcCommandInput, UnpeerVpcCommandOutput } from "./commands/UnpeerVpcCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput } from "./commands/UpdateDomainEntryCommand";
import { UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput } from "./commands/UpdateLoadBalancerAttributeCommand";
import { UpdateRelationalDatabaseCommandInput, UpdateRelationalDatabaseCommandOutput } from "./commands/UpdateRelationalDatabaseCommand";
import { UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput } from "./commands/UpdateRelationalDatabaseParametersCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need
 *       virtual private servers. Lightsail includes everything you need to launch your project
 *       quickly - a virtual machine, a managed database, SSD-based storage, data transfer, DNS
 *       management, and a static IP - for a low, predictable price. You manage those Lightsail
 *       servers through the Lightsail console or by using the API or command-line interface
 *       (CLI).</p>
 *          <p>For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/all">Lightsail Dev Guide</a>.</p>
 *          <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and
 *       Access Management (IAM) to generate access keys. For details about how to set this up, see the
 *         <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>
 */
export declare class Lightsail extends LightsailClient {
    /**
     * <p>Allocates a static IP address.</p>
     */
    allocateStaticIp(args: AllocateStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<AllocateStaticIpCommandOutput>;
    allocateStaticIp(args: AllocateStaticIpCommandInput, cb: (err: any, data?: AllocateStaticIpCommandOutput) => void): void;
    allocateStaticIp(args: AllocateStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AllocateStaticIpCommandOutput) => void): void;
    /**
     * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes
     *       it to the instance with the specified disk name.</p>
     *          <p>The <code>attach disk</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>disk name</code>. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachDisk(args: AttachDiskCommandInput, options?: __HttpHandlerOptions): Promise<AttachDiskCommandOutput>;
    attachDisk(args: AttachDiskCommandInput, cb: (err: any, data?: AttachDiskCommandOutput) => void): void;
    attachDisk(args: AttachDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachDiskCommandOutput) => void): void;
    /**
     * <p>Attaches one or more Lightsail instances to a load balancer.</p>
     *          <p>After some time, the instances are attached to the load balancer and the health check
     *       status is available.</p>
     *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<AttachInstancesToLoadBalancerCommandOutput>;
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void): void;
    attachInstancesToLoadBalancer(args: AttachInstancesToLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is
     *       just an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>Once you create and validate your certificate, you can attach it to your load balancer.
     *       You can also use this API to rotate the certificates on your account. Use the <code>attach
     *         load balancer tls certificate</code> operation with the non-attached certificate, and it
     *       will replace the existing one and become the attached certificate.</p>
     *          <p>The <code>attach load balancer tls certificate</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<AttachLoadBalancerTlsCertificateCommandOutput>;
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void): void;
    attachLoadBalancerTlsCertificate(args: AttachLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
     */
    attachStaticIp(args: AttachStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<AttachStaticIpCommandOutput>;
    attachStaticIp(args: AttachStaticIpCommandInput, cb: (err: any, data?: AttachStaticIpCommandOutput) => void): void;
    attachStaticIp(args: AttachStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachStaticIpCommandOutput) => void): void;
    /**
     * <p>Closes the public ports on a specific Amazon Lightsail instance.</p>
     *          <p>The <code>close instance public ports</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>instance name</code>.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<CloseInstancePublicPortsCommandOutput>;
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void): void;
    closeInstancePublicPorts(args: CloseInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
     *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
     *       used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to
     *       another in Amazon Lightsail.</p>
     *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
     *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
     *       parameters.</p>
     *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
     *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
     *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
     *         auto snapshot</code> parameters.</p>
     */
    copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
    copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    copySnapshot(args: CopySnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    /**
     * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
     *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
     *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
     *         records</code> operation to get a list of the CloudFormation stacks created.</p>
     *          <important>
     *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
     *           cloud formation stack</code> operation again with the same export snapshot record.</p>
     *          </important>
     */
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateCloudFormationStackCommandOutput>;
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void): void;
    createCloudFormationStack(args: CreateCloudFormationStackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void): void;
    /**
     * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the
     *       same Availability Zone (e.g., <code>us-east-2a</code>).</p>
     *          <p>The <code>create disk</code> operation supports tag-based access control via request
     *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDisk(args: CreateDiskCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskCommandOutput>;
    createDisk(args: CreateDiskCommandInput, cb: (err: any, data?: CreateDiskCommandOutput) => void): void;
    createDisk(args: CreateDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskCommandOutput) => void): void;
    /**
     * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The
     *       resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone
     *       (e.g., <code>us-east-2a</code>).</p>
     *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control
     *       via request tags and resource tags applied to the resource identified by <code>disk snapshot
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskFromSnapshotCommandOutput>;
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void): void;
    createDiskFromSnapshot(args: CreateDiskFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
     *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
     *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
     *       capture data that has been written to your disk at the time the snapshot command is issued.
     *       This may exclude any data that has been cached by any applications or the operating system. If
     *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
     *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
     *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
     *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
     *       use your disk while the snapshot status is pending.</p>
     *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
     *       might want to do this, for example, to recover data from the system volume of a botched
     *       instance or to create a backup of the system volume like you would for a block storage disk.
     *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
     *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
     *       be created. After the snapshot is available, you can create a block storage disk from the
     *       snapshot and attach it to a running instance to access the data on the disk.</p>
     *
     *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDiskSnapshotCommandOutput>;
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void): void;
    createDiskSnapshot(args: CreateDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a domain resource for the specified domain (e.g., example.com).</p>
     *          <p>The <code>create domain</code> operation supports tag-based access control via request
     *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Creates one of the following entry records associated with the domain: Address (A),
     *       canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA),
     *       service locator (SRV), or text (TXT).</p>
     *          <p>The <code>create domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createDomainEntry(args: CreateDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainEntryCommandOutput>;
    createDomainEntry(args: CreateDomainEntryCommandInput, cb: (err: any, data?: CreateDomainEntryCommandOutput) => void): void;
    createDomainEntry(args: CreateDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainEntryCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a specific virtual private server, or
     *         <i>instance</i>. You can use a snapshot to create a new instance that is based
     *       on that snapshot.</p>
     *          <p>The <code>create instance snapshot</code> operation supports tag-based access control
     *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceSnapshotCommandOutput>;
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void): void;
    createInstanceSnapshot(args: CreateInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates one or more Amazon Lightsail instances.</p>
     *          <p>The <code>create instances</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstances(args: CreateInstancesCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstancesCommandOutput>;
    createInstances(args: CreateInstancesCommandInput, cb: (err: any, data?: CreateInstancesCommandOutput) => void): void;
    createInstances(args: CreateInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstancesCommandOutput) => void): void;
    /**
     * <p>Creates one or more new instances from a manual or automatic snapshot of an
     *       instance.</p>
     *          <p>The <code>create instances from snapshot</code> operation supports tag-based access
     *       control via request tags and resource tags applied to the resource identified by
     *         <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstancesFromSnapshotCommandOutput>;
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void): void;
    createInstancesFromSnapshot(args: CreateInstancesFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates an SSH key pair.</p>
     *          <p>The <code>create key pair</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createKeyPair(args: CreateKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<CreateKeyPairCommandOutput>;
    createKeyPair(args: CreateKeyPairCommandInput, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
    createKeyPair(args: CreateKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateKeyPairCommandOutput) => void): void;
    /**
     * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load
     *       balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5
     *       load balancers per AWS Region in your account.</p>
     *          <p>When you create a load balancer, you can specify a unique name and port settings. To
     *       change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code>
     *       operation.</p>
     *          <p>The <code>create load balancer</code> operation supports tag-based access control via
     *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoadBalancerCommandOutput>;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    createLoadBalancer(args: CreateLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Creates a Lightsail load balancer TLS certificate.</p>
     *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>The <code>create load balancer tls certificate</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<CreateLoadBalancerTlsCertificateCommandOutput>;
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void): void;
    createLoadBalancerTlsCertificate(args: CreateLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Creates a new database in Amazon Lightsail.</p>
     *          <p>The <code>create relational database</code> operation supports tag-based access control
     *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseCommandOutput>;
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void): void;
    createRelationalDatabase(args: CreateRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
     *          <p>You can create a new database from a snapshot in if something goes wrong with your
     *       original database, or to change it to a different plan, such as a high availability or
     *       standard plan.</p>
     *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
     *       access control via request tags and resource tags applied to the resource identified by
     *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput>;
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void): void;
    createRelationalDatabaseFromSnapshot(args: CreateRelationalDatabaseFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for
     *       backups, to make copies of a database, and to save data before deleting a database.</p>
     *          <p>The <code>create relational database snapshot</code> operation supports tag-based
     *       access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRelationalDatabaseSnapshotCommandOutput>;
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void): void;
    createRelationalDatabaseSnapshot(args: CreateRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAutoSnapshotCommandOutput>;
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void): void;
    deleteAutoSnapshot(args: DeleteAutoSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes the specified block storage disk. The disk must be in the
     *         <code>available</code> state (not attached to a Lightsail instance).</p>
     *          <note>
     *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
     *
     *          </note>
     *          <p>The <code>delete disk</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>disk name</code>. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDisk(args: DeleteDiskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiskCommandOutput>;
    deleteDisk(args: DeleteDiskCommandInput, cb: (err: any, data?: DeleteDiskCommandOutput) => void): void;
    deleteDisk(args: DeleteDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDiskCommandOutput) => void): void;
    /**
     * <p>Deletes the specified disk snapshot.</p>
     *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
     *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
     *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
     *       regardless of which prior snapshots have been deleted, all active snapshots will have access
     *       to all the information needed to restore the disk.</p>
     *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDiskSnapshotCommandOutput>;
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void): void;
    deleteDiskSnapshot(args: DeleteDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes the specified domain recordset and all of its domain records.</p>
     *          <p>The <code>delete domain</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>domain name</code>. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Deletes a specific domain entry.</p>
     *          <p>The <code>delete domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainEntryCommandOutput>;
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void): void;
    deleteDomainEntry(args: DeleteDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Lightsail instance.</p>
     *          <p>The <code>delete instance</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteInstance(args: DeleteInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceCommandOutput>;
    deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    deleteInstance(args: DeleteInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a specific snapshot of a virtual private server (or
     *         <i>instance</i>).</p>
     *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by <code>instance snapshot name</code>.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceSnapshotCommandOutput>;
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void): void;
    deleteInstanceSnapshot(args: DeleteInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes a specific SSH key pair.</p>
     *          <p>The <code>delete key pair</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>key pair name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteKeyPair(args: DeleteKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKeyPairCommandOutput>;
    deleteKeyPair(args: DeleteKeyPairCommandInput, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
    deleteKeyPair(args: DeleteKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteKeyPairCommandOutput) => void): void;
    /**
     * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
     *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
     *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
     *          <important>
     *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
     *         or if you are familiar with the new host key or certificate on the instance. For more
     *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
     *           client</a>.</p>
     *          </important>
     */
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKnownHostKeysCommandOutput>;
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void): void;
    deleteKnownHostKeys(args: DeleteKnownHostKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void): void;
    /**
     * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once
     *       the load balancer is deleted, you will need to create a new load balancer, create a new
     *       certificate, and verify domain ownership again.</p>
     *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoadBalancerCommandOutput>;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    deleteLoadBalancer(args: DeleteLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>
     *          <p>The <code>delete load balancer tls certificate</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLoadBalancerTlsCertificateCommandOutput>;
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void): void;
    deleteLoadBalancerTlsCertificate(args: DeleteLoadBalancerTlsCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes a database in Amazon Lightsail.</p>
     *          <p>The <code>delete relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRelationalDatabaseCommandOutput>;
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void): void;
    deleteRelationalDatabase(args: DeleteRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Deletes a database snapshot in Amazon Lightsail.</p>
     *          <p>The <code>delete relational database snapshot</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by relationalDatabaseName.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRelationalDatabaseSnapshotCommandOutput>;
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void): void;
    deleteRelationalDatabaseSnapshot(args: DeleteRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
     *       any file systems on the device within your operating system before stopping the instance and
     *       detaching the disk.</p>
     *          <p>The <code>detach disk</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>disk name</code>. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    detachDisk(args: DetachDiskCommandInput, options?: __HttpHandlerOptions): Promise<DetachDiskCommandOutput>;
    detachDisk(args: DetachDiskCommandInput, cb: (err: any, data?: DetachDiskCommandOutput) => void): void;
    detachDisk(args: DetachDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachDiskCommandOutput) => void): void;
    /**
     * <p>Detaches the specified instances from a Lightsail load balancer.</p>
     *          <p>This operation waits until the instances are no longer needed before they are detached
     *       from the load balancer.</p>
     *          <p>The <code>detach instances from load balancer</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<DetachInstancesFromLoadBalancerCommandOutput>;
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void): void;
    detachInstancesFromLoadBalancer(args: DetachInstancesFromLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Detaches a static IP from the Amazon Lightsail instance to which it is
     *       attached.</p>
     */
    detachStaticIp(args: DetachStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<DetachStaticIpCommandOutput>;
    detachStaticIp(args: DetachStaticIpCommandInput, cb: (err: any, data?: DetachStaticIpCommandOutput) => void): void;
    detachStaticIp(args: DetachStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachStaticIpCommandOutput) => void): void;
    /**
     * <p>Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    disableAddOn(args: DisableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<DisableAddOnCommandOutput>;
    disableAddOn(args: DisableAddOnCommandInput, cb: (err: any, data?: DisableAddOnCommandOutput) => void): void;
    disableAddOn(args: DisableAddOnCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableAddOnCommandOutput) => void): void;
    /**
     * <p>Downloads the default SSH key pair from the user's account.</p>
     */
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<DownloadDefaultKeyPairCommandOutput>;
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void): void;
    downloadDefaultKeyPair(args: DownloadDefaultKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void): void;
    /**
     * <p>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see
     *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    enableAddOn(args: EnableAddOnCommandInput, options?: __HttpHandlerOptions): Promise<EnableAddOnCommandOutput>;
    enableAddOn(args: EnableAddOnCommandInput, cb: (err: any, data?: EnableAddOnCommandOutput) => void): void;
    enableAddOn(args: EnableAddOnCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableAddOnCommandOutput) => void): void;
    /**
     * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
     *       This operation results in an export snapshot record that can be used with the <code>create
     *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
     *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
     *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
     *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
     *       source Lightsail snapshot.</p>
     *          <p></p>
     *          <p>The <code>export snapshot</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>source snapshot name</code>. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     *          <note>
     *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
     *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
     *          </note>
     */
    exportSnapshot(args: ExportSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<ExportSnapshotCommandOutput>;
    exportSnapshot(args: ExportSnapshotCommandInput, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
    exportSnapshot(args: ExportSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns the names of all active (not deleted) resources.</p>
     */
    getActiveNames(args: GetActiveNamesCommandInput, options?: __HttpHandlerOptions): Promise<GetActiveNamesCommandOutput>;
    getActiveNames(args: GetActiveNamesCommandInput, cb: (err: any, data?: GetActiveNamesCommandOutput) => void): void;
    getActiveNames(args: GetActiveNamesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetActiveNamesCommandOutput) => void): void;
    /**
     * <p>Returns the available automatic snapshots for an instance or disk. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
     */
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetAutoSnapshotsCommandOutput>;
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void): void;
    getAutoSnapshots(args: GetAutoSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns the list of available instance images, or <i>blueprints</i>. You
     *       can use a blueprint to create a new instance already running a specific operating system, as
     *       well as a preinstalled app or development stack. The software each instance is running depends
     *       on the blueprint image you choose.</p>
     *          <note>
     *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
     *         support customers with existing instances and are not necessarily available to create new
     *         instances. Blueprints are marked inactive when they become outdated due to operating system
     *         updates or new application releases.</p>
     *          </note>
     */
    getBlueprints(args: GetBlueprintsCommandInput, options?: __HttpHandlerOptions): Promise<GetBlueprintsCommandOutput>;
    getBlueprints(args: GetBlueprintsCommandInput, cb: (err: any, data?: GetBlueprintsCommandOutput) => void): void;
    getBlueprints(args: GetBlueprintsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlueprintsCommandOutput) => void): void;
    /**
     * <p>Returns the list of bundles that are available for purchase. A bundle describes the
     *       specs for your virtual private server (or <i>instance</i>).</p>
     */
    getBundles(args: GetBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetBundlesCommandOutput>;
    getBundles(args: GetBundlesCommandInput, cb: (err: any, data?: GetBundlesCommandOutput) => void): void;
    getBundles(args: GetBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBundlesCommandOutput) => void): void;
    /**
     * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
     *         formation stack</code> operation.</p>
     *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
     *       snapshot.</p>
     */
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetCloudFormationStackRecordsCommandOutput>;
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void): void;
    getCloudFormationStackRecords(args: GetCloudFormationStackRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific block storage disk.</p>
     */
    getDisk(args: GetDiskCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskCommandOutput>;
    getDisk(args: GetDiskCommandInput, cb: (err: any, data?: GetDiskCommandOutput) => void): void;
    getDisk(args: GetDiskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific block storage disk snapshot.</p>
     */
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskSnapshotCommandOutput>;
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void): void;
    getDiskSnapshot(args: GetDiskSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns information about all block storage disk snapshots in your AWS account and
     *       region.</p>
     *          <p>If you are describing a long list of disk snapshots, you can paginate the output to
     *       make the list more manageable. You can use the pageToken and nextPageToken values to retrieve
     *       the next items in the list.</p>
     */
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetDiskSnapshotsCommandOutput>;
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void): void;
    getDiskSnapshots(args: GetDiskSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns information about all block storage disks in your AWS account and
     *       region.</p>
     *          <p>If you are describing a long list of disks, you can paginate the output to make the
     *       list more manageable. You can use the pageToken and nextPageToken values to retrieve the next
     *       items in the list.</p>
     */
    getDisks(args: GetDisksCommandInput, options?: __HttpHandlerOptions): Promise<GetDisksCommandOutput>;
    getDisks(args: GetDisksCommandInput, cb: (err: any, data?: GetDisksCommandOutput) => void): void;
    getDisks(args: GetDisksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDisksCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific domain recordset.</p>
     */
    getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
    getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    getDomain(args: GetDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
    /**
     * <p>Returns a list of all domains in the user's account.</p>
     */
    getDomains(args: GetDomainsCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainsCommandOutput>;
    getDomains(args: GetDomainsCommandInput, cb: (err: any, data?: GetDomainsCommandOutput) => void): void;
    getDomains(args: GetDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainsCommandOutput) => void): void;
    /**
     * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code>
     *       operation.</p>
     *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
     *       resources with the <code>create cloud formation stack</code> operation.</p>
     */
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetExportSnapshotRecordsCommandOutput>;
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void): void;
    getExportSnapshotRecords(args: GetExportSnapshotRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual
     *       private server.</p>
     */
    getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
    getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    getInstance(args: GetInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
    /**
     * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server,
     *       or <i>instance</i>.</p>
     *          <p>The <code>get instance access details</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>instance name</code>.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceAccessDetailsCommandOutput>;
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void): void;
    getInstanceAccessDetails(args: GetInstanceAccessDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void): void;
    /**
     * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an
     *       instance name.</p>
     */
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceMetricDataCommandOutput>;
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void): void;
    getInstanceMetricData(args: GetInstanceMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns the port states for a specific virtual private server, or
     *         <i>instance</i>.</p>
     */
    getInstancePortStates(args: GetInstancePortStatesCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancePortStatesCommandOutput>;
    getInstancePortStates(args: GetInstancePortStatesCommandInput, cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void): void;
    getInstancePortStates(args: GetInstancePortStatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific instance snapshot.</p>
     */
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceSnapshotCommandOutput>;
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void): void;
    getInstanceSnapshot(args: GetInstanceSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns all instance snapshots for the user's account.</p>
     */
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceSnapshotsCommandOutput>;
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void): void;
    getInstanceSnapshots(args: GetInstanceSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
     */
    getInstanceState(args: GetInstanceStateCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceStateCommandOutput>;
    getInstanceState(args: GetInstanceStateCommandInput, cb: (err: any, data?: GetInstanceStateCommandOutput) => void): void;
    getInstanceState(args: GetInstanceStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceStateCommandOutput) => void): void;
    /**
     * <p>Returns information about all Amazon Lightsail virtual private servers, or
     *         <i>instances</i>.</p>
     */
    getInstances(args: GetInstancesCommandInput, options?: __HttpHandlerOptions): Promise<GetInstancesCommandOutput>;
    getInstances(args: GetInstancesCommandInput, cb: (err: any, data?: GetInstancesCommandOutput) => void): void;
    getInstances(args: GetInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstancesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific key pair.</p>
     */
    getKeyPair(args: GetKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairCommandOutput>;
    getKeyPair(args: GetKeyPairCommandInput, cb: (err: any, data?: GetKeyPairCommandOutput) => void): void;
    getKeyPair(args: GetKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKeyPairCommandOutput) => void): void;
    /**
     * <p>Returns information about all key pairs in the user's account.</p>
     */
    getKeyPairs(args: GetKeyPairsCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyPairsCommandOutput>;
    getKeyPairs(args: GetKeyPairsCommandInput, cb: (err: any, data?: GetKeyPairsCommandOutput) => void): void;
    getKeyPairs(args: GetKeyPairsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKeyPairsCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified Lightsail load balancer.</p>
     */
    getLoadBalancer(args: GetLoadBalancerCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerCommandOutput>;
    getLoadBalancer(args: GetLoadBalancerCommandInput, cb: (err: any, data?: GetLoadBalancerCommandOutput) => void): void;
    getLoadBalancer(args: GetLoadBalancerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerCommandOutput) => void): void;
    /**
     * <p>Returns information about health metrics for your Lightsail load balancer.</p>
     */
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerMetricDataCommandOutput>;
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void): void;
    getLoadBalancerMetricData(args: GetLoadBalancerMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns information about the TLS certificates that are associated with the specified
     *       Lightsail load balancer.</p>
     *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
     *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer.
     *       One is active and the other is inactive.</p>
     */
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancerTlsCertificatesCommandOutput>;
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void): void;
    getLoadBalancerTlsCertificates(args: GetLoadBalancerTlsCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns information about all load balancers in an account.</p>
     *          <p>If you are describing a long list of load balancers, you can paginate the output to
     *       make the list more manageable. You can use the pageToken and nextPageToken values to retrieve
     *       the next items in the list.</p>
     */
    getLoadBalancers(args: GetLoadBalancersCommandInput, options?: __HttpHandlerOptions): Promise<GetLoadBalancersCommandOutput>;
    getLoadBalancers(args: GetLoadBalancersCommandInput, cb: (err: any, data?: GetLoadBalancersCommandOutput) => void): void;
    getLoadBalancers(args: GetLoadBalancersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLoadBalancersCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific operation. Operations include events such as when
     *       you create an instance, allocate a static IP, attach a static IP, and so on.</p>
     */
    getOperation(args: GetOperationCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationCommandOutput>;
    getOperation(args: GetOperationCommandInput, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    getOperation(args: GetOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationCommandOutput) => void): void;
    /**
     * <p>Returns information about all operations.</p>
     *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be
     *       paged by making each subsequent call to <code>GetOperations</code> use the maximum (last)
     *         <code>statusChangedAt</code> value from the previous request.</p>
     */
    getOperations(args: GetOperationsCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationsCommandOutput>;
    getOperations(args: GetOperationsCommandInput, cb: (err: any, data?: GetOperationsCommandOutput) => void): void;
    getOperations(args: GetOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationsCommandOutput) => void): void;
    /**
     * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
     */
    getOperationsForResource(args: GetOperationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetOperationsForResourceCommandOutput>;
    getOperationsForResource(args: GetOperationsForResourceCommandInput, cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void): void;
    getOperationsForResource(args: GetOperationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include
     *         availability zones</code> parameter to also return the Availability Zones in a
     *       region.</p>
     */
    getRegions(args: GetRegionsCommandInput, options?: __HttpHandlerOptions): Promise<GetRegionsCommandOutput>;
    getRegions(args: GetRegionsCommandInput, cb: (err: any, data?: GetRegionsCommandOutput) => void): void;
    getRegions(args: GetRegionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRegionsCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific database in Amazon Lightsail.</p>
     */
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseCommandOutput>;
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void): void;
    getRelationalDatabase(args: GetRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint
     *       describes the major engine version of a database.</p>
     *          <p>You can use a blueprint ID to create a new database that runs a specific database
     *       engine.</p>
     */
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseBlueprintsCommandOutput>;
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void): void;
    getRelationalDatabaseBlueprints(args: GetRelationalDatabaseBlueprintsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void): void;
    /**
     * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes
     *       the performance specifications for a database.</p>
     *          <p>You can use a bundle ID to create a new database with explicit performance
     *       specifications.</p>
     */
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseBundlesCommandOutput>;
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void): void;
    getRelationalDatabaseBundles(args: GetRelationalDatabaseBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void): void;
    /**
     * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
     */
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseEventsCommandOutput>;
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void): void;
    getRelationalDatabaseEvents(args: GetRelationalDatabaseEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
     */
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseLogEventsCommandOutput>;
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void): void;
    getRelationalDatabaseLogEvents(args: GetRelationalDatabaseLogEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of available log streams for a specific database in
     *       Amazon Lightsail.</p>
     */
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseLogStreamsCommandOutput>;
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void): void;
    getRelationalDatabaseLogStreams(args: GetRelationalDatabaseLogStreamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void): void;
    /**
     * <p>Returns the current, previous, or pending versions of the master user password for a
     *       Lightsail database.</p>
     *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by
     *       relationalDatabaseName.</p>
     */
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput>;
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void): void;
    getRelationalDatabaseMasterUserPassword(args: GetRelationalDatabaseMasterUserPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordCommandOutput) => void): void;
    /**
     * <p>Returns the data points of the specified metric for a database in
     *       Amazon Lightsail.</p>
     */
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseMetricDataCommandOutput>;
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void): void;
    getRelationalDatabaseMetricData(args: GetRelationalDatabaseMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void): void;
    /**
     * <p>Returns all of the runtime parameters offered by the underlying database software, or
     *       engine, for a specific database in Amazon Lightsail.</p>
     *          <p>In addition to the parameter names and values, this operation returns other information
     *       about each parameter. This information includes whether changes require a reboot, whether the
     *       parameter is modifiable, the allowed values, and the data types.</p>
     */
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseParametersCommandOutput>;
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void): void;
    getRelationalDatabaseParameters(args: GetRelationalDatabaseParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
     */
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseSnapshotCommandOutput>;
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void): void;
    getRelationalDatabaseSnapshot(args: GetRelationalDatabaseSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void): void;
    /**
     * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
     */
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabaseSnapshotsCommandOutput>;
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void): void;
    getRelationalDatabaseSnapshots(args: GetRelationalDatabaseSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns information about all of your databases in Amazon Lightsail.</p>
     */
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, options?: __HttpHandlerOptions): Promise<GetRelationalDatabasesCommandOutput>;
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void): void;
    getRelationalDatabases(args: GetRelationalDatabasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void): void;
    /**
     * <p>Returns information about a specific static IP.</p>
     */
    getStaticIp(args: GetStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpCommandOutput>;
    getStaticIp(args: GetStaticIpCommandInput, cb: (err: any, data?: GetStaticIpCommandOutput) => void): void;
    getStaticIp(args: GetStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStaticIpCommandOutput) => void): void;
    /**
     * <p>Returns information about all static IPs in the user's account.</p>
     */
    getStaticIps(args: GetStaticIpsCommandInput, options?: __HttpHandlerOptions): Promise<GetStaticIpsCommandOutput>;
    getStaticIps(args: GetStaticIpsCommandInput, cb: (err: any, data?: GetStaticIpsCommandOutput) => void): void;
    getStaticIps(args: GetStaticIpsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetStaticIpsCommandOutput) => void): void;
    /**
     * <p>Imports a public SSH key from a specific key pair.</p>
     */
    importKeyPair(args: ImportKeyPairCommandInput, options?: __HttpHandlerOptions): Promise<ImportKeyPairCommandOutput>;
    importKeyPair(args: ImportKeyPairCommandInput, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
    importKeyPair(args: ImportKeyPairCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportKeyPairCommandOutput) => void): void;
    /**
     * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
     */
    isVpcPeered(args: IsVpcPeeredCommandInput, options?: __HttpHandlerOptions): Promise<IsVpcPeeredCommandOutput>;
    isVpcPeered(args: IsVpcPeeredCommandInput, cb: (err: any, data?: IsVpcPeeredCommandOutput) => void): void;
    isVpcPeered(args: IsVpcPeeredCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IsVpcPeeredCommandOutput) => void): void;
    /**
     * <p>Adds public ports to an Amazon Lightsail instance.</p>
     *          <p>The <code>open instance public ports</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<OpenInstancePublicPortsCommandOutput>;
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void): void;
    openInstancePublicPorts(args: OpenInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
     */
    peerVpc(args: PeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<PeerVpcCommandOutput>;
    peerVpc(args: PeerVpcCommandInput, cb: (err: any, data?: PeerVpcCommandOutput) => void): void;
    peerVpc(args: PeerVpcCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PeerVpcCommandOutput) => void): void;
    /**
     * <p>Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for
     *       every protocol not included in the current request.</p>
     *          <p>The <code>put instance public ports</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, options?: __HttpHandlerOptions): Promise<PutInstancePublicPortsCommandOutput>;
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void): void;
    putInstancePublicPorts(args: PutInstancePublicPortsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void): void;
    /**
     * <p>Restarts a specific instance.</p>
     *          <p>The <code>reboot instance</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    rebootInstance(args: RebootInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootInstanceCommandOutput>;
    rebootInstance(args: RebootInstanceCommandInput, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
    rebootInstance(args: RebootInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootInstanceCommandOutput) => void): void;
    /**
     * <p>Restarts a specific database in Amazon Lightsail.</p>
     *          <p>The <code>reboot relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<RebootRelationalDatabaseCommandOutput>;
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void): void;
    rebootRelationalDatabase(args: RebootRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Deletes a specific static IP from your account.</p>
     */
    releaseStaticIp(args: ReleaseStaticIpCommandInput, options?: __HttpHandlerOptions): Promise<ReleaseStaticIpCommandOutput>;
    releaseStaticIp(args: ReleaseStaticIpCommandInput, cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void): void;
    releaseStaticIp(args: ReleaseStaticIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void): void;
    /**
     * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an
     *       instance, use the <code>reboot instance</code> operation.</p>
     *          <note>
     *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
     *         instance. To use the same IP address after stopping and starting an instance, create a
     *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
     *          </note>
     *          <p>The <code>start instance</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>instance name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    startInstance(args: StartInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartInstanceCommandOutput>;
    startInstance(args: StartInstanceCommandInput, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    startInstance(args: StartInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartInstanceCommandOutput) => void): void;
    /**
     * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a
     *       database, use the <code>reboot relational database</code> operation.</p>
     *          <p>The <code>start relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<StartRelationalDatabaseCommandOutput>;
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void): void;
    startRelationalDatabase(args: StartRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Stops a specific Amazon Lightsail instance that is currently running.</p>
     *          <note>
     *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
     *         instance. To use the same IP address after stopping and starting an instance, create a
     *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
     *          </note>
     *          <p>The <code>stop instance</code> operation supports tag-based access control via resource
     *       tags applied to the resource identified by <code>instance name</code>. For more information,
     *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    stopInstance(args: StopInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopInstanceCommandOutput>;
    stopInstance(args: StopInstanceCommandInput, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    stopInstance(args: StopInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
     *          <p>The <code>stop relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<StopRelationalDatabaseCommandOutput>;
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void): void;
    stopRelationalDatabase(args: StopRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a
     *       maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique
     *       per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
     *         Dev Guide</a>.</p>
     *          <p>The <code>tag resource</code> operation supports tag-based access control via request tags
     *       and resource tags applied to the resource identified by <code>resource name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
     */
    unpeerVpc(args: UnpeerVpcCommandInput, options?: __HttpHandlerOptions): Promise<UnpeerVpcCommandOutput>;
    unpeerVpc(args: UnpeerVpcCommandInput, cb: (err: any, data?: UnpeerVpcCommandOutput) => void): void;
    unpeerVpc(args: UnpeerVpcCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnpeerVpcCommandOutput) => void): void;
    /**
     * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail
     *       resource.</p>
     *          <p>The <code>untag resource</code> operation supports tag-based access control via request
     *       tags and resource tags applied to the resource identified by <code>resource name</code>. For
     *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a domain recordset after it is created.</p>
     *          <p>The <code>update domain entry</code> operation supports tag-based access control via
     *       resource tags applied to the resource identified by <code>domain name</code>. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateDomainEntry(args: UpdateDomainEntryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainEntryCommandOutput>;
    updateDomainEntry(args: UpdateDomainEntryCommandInput, cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void): void;
    updateDomainEntry(args: UpdateDomainEntryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void): void;
    /**
     * <p>Updates the specified attribute for a load balancer. You can only update one attribute
     *       at a time.</p>
     *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
     *       control via resource tags applied to the resource identified by <code>load balancer
     *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLoadBalancerAttributeCommandOutput>;
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void): void;
    updateLoadBalancerAttribute(args: UpdateLoadBalancerAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void): void;
    /**
     * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
     *          <p>Updates are applied immediately, or in cases where the updates could result in an
     *       outage, are applied during the database's predefined maintenance window.</p>
     *          <p>The <code>update relational database</code> operation supports tag-based access control
     *       via resource tags applied to the resource identified by relationalDatabaseName. For more
     *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRelationalDatabaseCommandOutput>;
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void): void;
    updateRelationalDatabase(args: UpdateRelationalDatabaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void): void;
    /**
     * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
     *          <p>Parameter updates don't cause outages; therefore, their application is not subject to
     *       the preferred maintenance window. However, there are two ways in which parameter updates are
     *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
     *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
     *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
     *       the <code>reboot relational database</code> operation.</p>
     *          <p>The <code>update relational database parameters</code> operation supports tag-based
     *       access control via resource tags applied to the resource identified by relationalDatabaseName.
     *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
     */
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRelationalDatabaseParametersCommandOutput>;
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void): void;
    updateRelationalDatabaseParameters(args: UpdateRelationalDatabaseParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRelationalDatabaseParametersCommandOutput) => void): void;
}
