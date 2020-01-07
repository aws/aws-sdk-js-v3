import { StorageGatewayClient } from "./StorageGatewayClient";
import { ActivateGatewayCommandInput, ActivateGatewayCommandOutput } from "./commands/ActivateGatewayCommand";
import { AddCacheCommandInput, AddCacheCommandOutput } from "./commands/AddCacheCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { AddUploadBufferCommandInput, AddUploadBufferCommandOutput } from "./commands/AddUploadBufferCommand";
import { AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput } from "./commands/AddWorkingStorageCommand";
import { AssignTapePoolCommandInput, AssignTapePoolCommandOutput } from "./commands/AssignTapePoolCommand";
import { AttachVolumeCommandInput, AttachVolumeCommandOutput } from "./commands/AttachVolumeCommand";
import { CancelArchivalCommandInput, CancelArchivalCommandOutput } from "./commands/CancelArchivalCommand";
import { CancelRetrievalCommandInput, CancelRetrievalCommandOutput } from "./commands/CancelRetrievalCommand";
import { CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput } from "./commands/CreateCachediSCSIVolumeCommand";
import { CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput } from "./commands/CreateNFSFileShareCommand";
import { CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput } from "./commands/CreateSMBFileShareCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotFromVolumeRecoveryPointCommandInput, CreateSnapshotFromVolumeRecoveryPointCommandOutput } from "./commands/CreateSnapshotFromVolumeRecoveryPointCommand";
import { CreateStorediSCSIVolumeCommandInput, CreateStorediSCSIVolumeCommandOutput } from "./commands/CreateStorediSCSIVolumeCommand";
import { CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput } from "./commands/CreateTapeWithBarcodeCommand";
import { CreateTapesCommandInput, CreateTapesCommandOutput } from "./commands/CreateTapesCommand";
import { DeleteBandwidthRateLimitCommandInput, DeleteBandwidthRateLimitCommandOutput } from "./commands/DeleteBandwidthRateLimitCommand";
import { DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput } from "./commands/DeleteChapCredentialsCommand";
import { DeleteFileShareCommandInput, DeleteFileShareCommandOutput } from "./commands/DeleteFileShareCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import { DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput } from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput } from "./commands/DeleteTapeArchiveCommand";
import { DeleteTapeCommandInput, DeleteTapeCommandOutput } from "./commands/DeleteTapeCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import { DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput } from "./commands/DescribeAvailabilityMonitorTestCommand";
import { DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput } from "./commands/DescribeBandwidthRateLimitCommand";
import { DescribeCacheCommandInput, DescribeCacheCommandOutput } from "./commands/DescribeCacheCommand";
import { DescribeCachediSCSIVolumesCommandInput, DescribeCachediSCSIVolumesCommandOutput } from "./commands/DescribeCachediSCSIVolumesCommand";
import { DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput } from "./commands/DescribeChapCredentialsCommand";
import { DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput } from "./commands/DescribeGatewayInformationCommand";
import { DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput } from "./commands/DescribeMaintenanceStartTimeCommand";
import { DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput } from "./commands/DescribeNFSFileSharesCommand";
import { DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput } from "./commands/DescribeSMBFileSharesCommand";
import { DescribeSMBSettingsCommandInput, DescribeSMBSettingsCommandOutput } from "./commands/DescribeSMBSettingsCommand";
import { DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput } from "./commands/DescribeSnapshotScheduleCommand";
import { DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput } from "./commands/DescribeStorediSCSIVolumesCommand";
import { DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput } from "./commands/DescribeTapeArchivesCommand";
import { DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput } from "./commands/DescribeTapeRecoveryPointsCommand";
import { DescribeTapesCommandInput, DescribeTapesCommandOutput } from "./commands/DescribeTapesCommand";
import { DescribeUploadBufferCommandInput, DescribeUploadBufferCommandOutput } from "./commands/DescribeUploadBufferCommand";
import { DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput } from "./commands/DescribeVTLDevicesCommand";
import { DescribeWorkingStorageCommandInput, DescribeWorkingStorageCommandOutput } from "./commands/DescribeWorkingStorageCommand";
import { DetachVolumeCommandInput, DetachVolumeCommandOutput } from "./commands/DetachVolumeCommand";
import { DisableGatewayCommandInput, DisableGatewayCommandOutput } from "./commands/DisableGatewayCommand";
import { JoinDomainCommandInput, JoinDomainCommandOutput } from "./commands/JoinDomainCommand";
import { ListFileSharesCommandInput, ListFileSharesCommandOutput } from "./commands/ListFileSharesCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListLocalDisksCommandInput, ListLocalDisksCommandOutput } from "./commands/ListLocalDisksCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTapesCommandInput, ListTapesCommandOutput } from "./commands/ListTapesCommand";
import { ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput } from "./commands/ListVolumeInitiatorsCommand";
import { ListVolumeRecoveryPointsCommandInput, ListVolumeRecoveryPointsCommandOutput } from "./commands/ListVolumeRecoveryPointsCommand";
import { ListVolumesCommandInput, ListVolumesCommandOutput } from "./commands/ListVolumesCommand";
import { NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput } from "./commands/NotifyWhenUploadedCommand";
import { RefreshCacheCommandInput, RefreshCacheCommandOutput } from "./commands/RefreshCacheCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheCommandInput, ResetCacheCommandOutput } from "./commands/ResetCacheCommand";
import { RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput } from "./commands/RetrieveTapeArchiveCommand";
import { RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput } from "./commands/RetrieveTapeRecoveryPointCommand";
import { SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput } from "./commands/SetLocalConsolePasswordCommand";
import { SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput } from "./commands/SetSMBGuestPasswordCommand";
import { ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput } from "./commands/ShutdownGatewayCommand";
import { StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput } from "./commands/StartAvailabilityMonitorTestCommand";
import { StartGatewayCommandInput, StartGatewayCommandOutput } from "./commands/StartGatewayCommand";
import { UpdateBandwidthRateLimitCommandInput, UpdateBandwidthRateLimitCommandOutput } from "./commands/UpdateBandwidthRateLimitCommand";
import { UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput } from "./commands/UpdateChapCredentialsCommand";
import { UpdateGatewayInformationCommandInput, UpdateGatewayInformationCommandOutput } from "./commands/UpdateGatewayInformationCommand";
import { UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput } from "./commands/UpdateGatewaySoftwareNowCommand";
import { UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput } from "./commands/UpdateMaintenanceStartTimeCommand";
import { UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput } from "./commands/UpdateNFSFileShareCommand";
import { UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput } from "./commands/UpdateSMBFileShareCommand";
import { UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput } from "./commands/UpdateSMBSecurityStrategyCommand";
import { UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput } from "./commands/UpdateSnapshotScheduleCommand";
import { UpdateVTLDeviceTypeCommandInput, UpdateVTLDeviceTypeCommandOutput } from "./commands/UpdateVTLDeviceTypeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Storage Gateway Service</fullname>
 *
 *          <p>AWS Storage Gateway is the service that connects an on-premises software appliance
 *          with cloud-based storage to provide seamless and secure integration between an
 *          organization's on-premises IT environment and the AWS storage infrastructure. The service
 *          enables you to securely upload data to the AWS cloud for cost effective backup and rapid
 *          disaster recovery.</p>
 *          <p>Use the following links to get started using the <i>AWS Storage Gateway
 *             Service API Reference</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">AWS Storage Gateway Required Request Headers</a>: Describes the required
 *                headers that you must send with every POST request to AWS Storage Gateway.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing Requests</a>: AWS Storage Gateway requires that you authenticate
 *                every request you send; this topic describes how sign such a request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error Responses</a>: Provides reference information about AWS Storage Gateway
 *                errors.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in AWS
 *                   Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway
 *                operations, their request parameters, response elements, possible errors, and
 *                examples of requests and responses.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region">AWS
 *                   Storage Gateway Regions and Endpoints:</a> Provides a list of each AWS Region
 *                and the endpoints available for use with AWS Storage Gateway. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs
 *             with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your
 *             resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the
 *             ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with
 *             the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the
 *             EC2 API might not behave as expected.</p>
 *          </note>
 *          <important>
 *             <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
 *             volumes are changing to a longer format. Starting in December 2016, all new volumes and
 *             snapshots will be created with a 17-character string. Starting in April 2016, you will
 *             be able to use these longer IDs so you can test your systems with the new format. For
 *             more information, see <a href="https://aws.amazon.com/ec2/faqs/#longer-ids">Longer
 *                EC2 and EBS Resource IDs</a>. </p>
 *             <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
 *             looks like the following:</p>
 *             <p>
 *                <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
 *             <p>A snapshot ID with the longer ID format looks like the following:
 *                <code>snap-78e226633445566ee</code>.</p>
 *             <p>For more information, see <a href="https://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement: Heads-up –
 *                Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p>
 *          </important>
 */
export declare class StorageGateway extends StorageGatewayClient {
    /**
     * <p>Activates the gateway you previously deployed on your host. In the activation
     *          process, you specify information such as the AWS Region that you want to use for storing
     *          snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule
     *          window, an activation key, and a name for your gateway. The activation process also
     *          associates your gateway with your account; for more information, see <a>UpdateGatewayInformation</a>.</p>
     *          <note>
     *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
     *          </note>
     */
    activateGateway(args: ActivateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<ActivateGatewayCommandOutput>;
    activateGateway(args: ActivateGatewayCommandInput, cb: (err: any, data?: ActivateGatewayCommandOutput) => void): void;
    activateGateway(args: ActivateGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ActivateGatewayCommandOutput) => void): void;
    /**
     * <p>Configures one or more gateway local disks as cache for a gateway. This operation is
     *          only supported in the cached volume, tape and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">Storage Gateway Concepts</a>).</p>
     *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want
     *          to add cache, and one or more disk IDs that you want to configure as cache.</p>
     */
    addCache(args: AddCacheCommandInput, options?: __HttpHandlerOptions): Promise<AddCacheCommandOutput>;
    addCache(args: AddCacheCommandInput, cb: (err: any, data?: AddCacheCommandOutput) => void): void;
    addCache(args: AddCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddCacheCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
     *          resources, which you can use to categorize these resources. For example, you can categorize
     *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
     *          which you define. You can add tags to the following AWS Storage Gateway
     *          resources:</p>
     *          <ul>
     *             <li>
     *                <p>Storage gateways of all types</p>
     *             </li>
     *             <li>
     *                <p>Storage volumes</p>
     *             </li>
     *             <li>
     *                <p>Virtual tapes</p>
     *             </li>
     *             <li>
     *                <p>NFS and SMB file shares</p>
     *             </li>
     *          </ul>
     *
     *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage
     *          volumes that are recovered to a new gateway maintain their tags.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Configures one or more gateway local disks as upload buffer for a specified gateway.
     *          This operation is supported for the stored volume, cached volume and tape gateway
     *          types.</p>
     *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want
     *          to add upload buffer, and one or more disk IDs that you want to configure as upload
     *          buffer.</p>
     */
    addUploadBuffer(args: AddUploadBufferCommandInput, options?: __HttpHandlerOptions): Promise<AddUploadBufferCommandOutput>;
    addUploadBuffer(args: AddUploadBufferCommandInput, cb: (err: any, data?: AddUploadBufferCommandOutput) => void): void;
    addUploadBuffer(args: AddUploadBufferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddUploadBufferCommandOutput) => void): void;
    /**
     * <p>Configures one or more gateway local disks as working storage for a gateway. This
     *          operation is only supported in the stored volume gateway type. This operation is deprecated
     *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
     *          instead.</p>
     *          <note>
     *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
     *             gateway.</p>
     *          </note>
     *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want
     *          to add working storage, and one or more disk IDs that you want to configure as working
     *          storage.</p>
     */
    addWorkingStorage(args: AddWorkingStorageCommandInput, options?: __HttpHandlerOptions): Promise<AddWorkingStorageCommandOutput>;
    addWorkingStorage(args: AddWorkingStorageCommandInput, cb: (err: any, data?: AddWorkingStorageCommandOutput) => void): void;
    addWorkingStorage(args: AddWorkingStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddWorkingStorageCommandOutput) => void): void;
    /**
     * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
     *          the S3 storage class that is associated with the pool. When you use your backup application
     *          to eject the tape, the tape is archived directly into the S3 storage class (Glacier or Deep
     *          Archive) that corresponds to the pool.</p>
     *          <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
     */
    assignTapePool(args: AssignTapePoolCommandInput, options?: __HttpHandlerOptions): Promise<AssignTapePoolCommandOutput>;
    assignTapePool(args: AssignTapePoolCommandInput, cb: (err: any, data?: AssignTapePoolCommandOutput) => void): void;
    assignTapePool(args: AssignTapePoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssignTapePoolCommandOutput) => void): void;
    /**
     * <p>Connects a volume to an iSCSI connection and then attaches the volume to the
     *          specified gateway. Detaching and attaching a volume enables you to recover your data from
     *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
     *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
     *          instance.</p>
     */
    attachVolume(args: AttachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<AttachVolumeCommandOutput>;
    attachVolume(args: AttachVolumeCommandInput, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
    attachVolume(args: AttachVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AttachVolumeCommandOutput) => void): void;
    /**
     * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the
     *          archiving process is initiated. This operation is only supported in the tape gateway
     *          type.</p>
     */
    cancelArchival(args: CancelArchivalCommandInput, options?: __HttpHandlerOptions): Promise<CancelArchivalCommandOutput>;
    cancelArchival(args: CancelArchivalCommandInput, cb: (err: any, data?: CancelArchivalCommandOutput) => void): void;
    cancelArchival(args: CancelArchivalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelArchivalCommandOutput) => void): void;
    /**
     * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway
     *          after the retrieval process is initiated. The virtual tape is returned to the VTS. This
     *          operation is only supported in the tape gateway type.</p>
     */
    cancelRetrieval(args: CancelRetrievalCommandInput, options?: __HttpHandlerOptions): Promise<CancelRetrievalCommandOutput>;
    cancelRetrieval(args: CancelRetrievalCommandInput, cb: (err: any, data?: CancelRetrievalCommandOutput) => void): void;
    cancelRetrieval(args: CancelRetrievalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelRetrievalCommandOutput) => void): void;
    /**
     * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
     *          supported in the cached volume gateway type.</p>
     *          <note>
     *             <p>Cache storage must be allocated to the gateway before you can create a cached
     *             volume. Use the <a>AddCache</a> operation to add cache storage to a gateway.
     *          </p>
     *          </note>
     *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
     *          target name, an IP address on which to expose the target, and a unique client token. In
     *          response, the gateway creates the volume and returns information about it. This information
     *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
     *          initiators can use to connect to the volume target.</p>
     *
     *          <p>Optionally, you can provide the ARN for an existing volume as the
     *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
     *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
     *          equal to or larger than the size of the copied volume, in bytes.</p>
     */
    createCachediSCSIVolume(args: CreateCachediSCSIVolumeCommandInput, options?: __HttpHandlerOptions): Promise<CreateCachediSCSIVolumeCommandOutput>;
    createCachediSCSIVolume(args: CreateCachediSCSIVolumeCommandInput, cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void): void;
    createCachediSCSIVolume(args: CreateCachediSCSIVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCachediSCSIVolumeCommandOutput) => void): void;
    /**
     * <p>Creates a Network File System (NFS) file share on an existing file gateway. In
     *          Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud
     *          storage. Storage Gateway exposes file shares using a NFS interface. This operation is only
     *          supported for file gateways.</p>
     *
     *          <important>
     *             <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to
     *             enable you create a file share. Make sure AWS STS is activated in the AWS Region you are
     *             creating your file gateway in. If AWS STS is not activated in the AWS Region, activate
     *             it. For information about how to activate AWS STS, see Activating and Deactivating AWS
     *             STS in an AWS Region in the AWS Identity and Access Management User Guide. </p>
     *             <p>File gateway does not support creating hard or symbolic links on a file
     *             share.</p>
     *          </important>
     */
    createNFSFileShare(args: CreateNFSFileShareCommandInput, options?: __HttpHandlerOptions): Promise<CreateNFSFileShareCommandOutput>;
    createNFSFileShare(args: CreateNFSFileShareCommandInput, cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void): void;
    createNFSFileShare(args: CreateNFSFileShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNFSFileShareCommandOutput) => void): void;
    /**
     * <p>Creates a Server Message Block (SMB) file share on an existing file gateway. In
     *          Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud
     *          storage. Storage Gateway expose file shares using a SMB interface. This operation is only
     *          supported for file gateways.</p>
     *
     *          <important>
     *             <p>File gateways require AWS Security Token Service (AWS STS) to be activated to
     *             enable you to create a file share. Make sure that AWS STS is activated in the AWS Region
     *             you are creating your file gateway in. If AWS STS is not activated in this AWS Region,
     *             activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
     *                Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
     *                Access Management User Guide.</i>
     *             </p>
     *             <p>File gateways don't support creating hard or symbolic links on a file
     *             share.</p>
     *          </important>
     */
    createSMBFileShare(args: CreateSMBFileShareCommandInput, options?: __HttpHandlerOptions): Promise<CreateSMBFileShareCommandOutput>;
    createSMBFileShare(args: CreateSMBFileShareCommandInput, cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void): void;
    createSMBFileShare(args: CreateSMBFileShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSMBFileShareCommandOutput) => void): void;
    /**
     * <p>Initiates a snapshot of a volume.</p>
     *          <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your
     *          data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the
     *          data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2).
     *          You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API
     *          enables you to take ad-hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a
     *             Snapshot Schedule</a>.</p>
     *          <p>In the CreateSnapshot request you identify the volume by providing its Amazon
     *          Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage
     *          Gateway takes the snapshot of specified volume, the snapshot and description appears in the
     *          AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID.
     *          You can use this snapshot ID to check the snapshot progress or later use it when you want
     *          to create a volume from a snapshot. This operation is only supported in stored and cached
     *          volume gateway type.</p>
     *
     *          <note>
     *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more
     *             information, see DescribeSnapshots or DeleteSnapshot in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html">EC2 API
     *             reference</a>.</p>
     *          </note>
     *          <important>
     *             <p>Volume and snapshot IDs are changing to a longer length ID format. For more
     *             information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p>
     *          </important>
     */
    createSnapshot(args: CreateSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotCommandOutput>;
    createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    createSnapshot(args: CreateSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    /**
     * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is
     *          only supported in the cached volume gateway type.</p>
     *          <p>A volume recovery point is a point in time at which all data of the volume is
     *          consistent and from which you can create a snapshot. To get a list of volume recovery point
     *          for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p>
     *          <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the
     *          volume by providing its Amazon Resource Name (ARN). You must also provide a description for
     *          the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
     *          its description appear in the AWS Storage Gateway console.
     *           In response, the gateway returns
     *          you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
     *          it when you want to create a volume from a snapshot.</p>
     *          <note>
     *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more
     *             information, in <i>Amazon Elastic Compute Cloud API
     *             Reference</i>.</p>
     *          </note>
     */
    createSnapshotFromVolumeRecoveryPoint(args: CreateSnapshotFromVolumeRecoveryPointCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput>;
    createSnapshotFromVolumeRecoveryPoint(args: CreateSnapshotFromVolumeRecoveryPointCommandInput, cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void): void;
    createSnapshotFromVolumeRecoveryPoint(args: CreateSnapshotFromVolumeRecoveryPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotFromVolumeRecoveryPointCommandOutput) => void): void;
    /**
     * <p>Creates a volume on a specified gateway. This operation is only supported in the
     *          stored volume gateway type.</p>
     *          <p>The size of the volume to create is inferred from the disk size. You can choose to
     *          preserve existing data on the disk, create volume from an existing snapshot, or create an
     *          empty volume. If you choose to create an empty gateway volume, then any existing data on
     *          the disk is erased.</p>
     *          <p>In the request you must specify the gateway and the disk information on which you are
     *          creating the volume. In response, the gateway creates the volume and returns volume
     *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
     *          ARN that initiators can use to connect to the volume target.</p>
     */
    createStorediSCSIVolume(args: CreateStorediSCSIVolumeCommandInput, options?: __HttpHandlerOptions): Promise<CreateStorediSCSIVolumeCommandOutput>;
    createStorediSCSIVolume(args: CreateStorediSCSIVolumeCommandInput, cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void): void;
    createStorediSCSIVolume(args: CreateStorediSCSIVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStorediSCSIVolumeCommandOutput) => void): void;
    /**
     * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape
     *          and then archive the tape. A barcode is unique and can not be reused if it has already been
     *          used on a tape . This applies to barcodes used on deleted tapes. This operation is only
     *          supported in the tape gateway type.</p>
     *          <note>
     *             <p>Cache storage must be allocated to the gateway before you can create a virtual
     *             tape. Use the <a>AddCache</a> operation to add cache storage to a
     *             gateway.</p>
     *          </note>
     */
    createTapeWithBarcode(args: CreateTapeWithBarcodeCommandInput, options?: __HttpHandlerOptions): Promise<CreateTapeWithBarcodeCommandOutput>;
    createTapeWithBarcode(args: CreateTapeWithBarcodeCommandInput, cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void): void;
    createTapeWithBarcode(args: CreateTapeWithBarcodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTapeWithBarcodeCommandOutput) => void): void;
    /**
     * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then
     *          archive the tapes. This operation is only supported in the tape gateway type.</p>
     *          <note>
     *             <p>Cache storage must be allocated to the gateway before you can create virtual
     *             tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway.
     *          </p>
     *          </note>
     */
    createTapes(args: CreateTapesCommandInput, options?: __HttpHandlerOptions): Promise<CreateTapesCommandOutput>;
    createTapes(args: CreateTapesCommandInput, cb: (err: any, data?: CreateTapesCommandOutput) => void): void;
    createTapes(args: CreateTapesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTapesCommandOutput) => void): void;
    /**
     * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
     *          download bandwidth rate limit, or you can delete both. If you delete only one of the
     *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
     *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported for the stored volume, cached volume and tape gateway types.</p>
     */
    deleteBandwidthRateLimit(args: DeleteBandwidthRateLimitCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBandwidthRateLimitCommandOutput>;
    deleteBandwidthRateLimit(args: DeleteBandwidthRateLimitCommandInput, cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void): void;
    deleteBandwidthRateLimit(args: DeleteBandwidthRateLimitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBandwidthRateLimitCommandOutput) => void): void;
    /**
     * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a
     *          specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.</p>
     */
    deleteChapCredentials(args: DeleteChapCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChapCredentialsCommandOutput>;
    deleteChapCredentials(args: DeleteChapCredentialsCommandInput, cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void): void;
    deleteChapCredentials(args: DeleteChapCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChapCredentialsCommandOutput) => void): void;
    /**
     * <p>Deletes a file share from a file gateway. This operation is only supported for file
     *          gateways.</p>
     */
    deleteFileShare(args: DeleteFileShareCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFileShareCommandOutput>;
    deleteFileShare(args: DeleteFileShareCommandInput, cb: (err: any, data?: DeleteFileShareCommandOutput) => void): void;
    deleteFileShare(args: DeleteFileShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFileShareCommandOutput) => void): void;
    /**
     * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
     *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
     *          not delete the gateway virtual machine (VM) from your host computer.</p>
     *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the
     *          gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will
     *          not complete. After you delete a gateway, your next step is to remove it from your
     *          environment.</p>
     *          <important>
     *             <p>You no longer pay software charges after the gateway is deleted; however, your
     *             existing Amazon EBS snapshots persist and you will continue to be billed for these
     *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
     *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
     *             can delete your snapshots using the Amazon EC2 console. For more information, see the
     *                <a href="http://aws.amazon.com/storagegateway"> AWS Storage Gateway Detail
     *             Page</a>. </p>
     *          </important>
     */
    deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
    deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
    deleteGateway(args: DeleteGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
    /**
     * <p>Deletes a snapshot of a volume.</p>
     *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This
     *          API action enables you to delete a snapshot schedule for a volume. For more information,
     *          see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html">Working with
     *             Snapshots</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
     *          volume by providing its Amazon Resource Name (ARN). This operation is only supported in
     *          stored and cached volume gateway types.</p>
     *          <note>
     *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. in <i>Amazon
     *                Elastic Compute Cloud API Reference</i>.</p>
     *          </note>
     */
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSnapshotScheduleCommandOutput>;
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void): void;
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified virtual tape. This operation is only supported in the tape
     *          gateway type.</p>
     */
    deleteTape(args: DeleteTapeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTapeCommandOutput>;
    deleteTape(args: DeleteTapeCommandInput, cb: (err: any, data?: DeleteTapeCommandOutput) => void): void;
    deleteTape(args: DeleteTapeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTapeCommandOutput) => void): void;
    /**
     * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation
     *          is only supported in the tape gateway type.</p>
     */
    deleteTapeArchive(args: DeleteTapeArchiveCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTapeArchiveCommandOutput>;
    deleteTapeArchive(args: DeleteTapeArchiveCommandInput, cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void): void;
    deleteTapeArchive(args: DeleteTapeArchiveCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTapeArchiveCommandOutput) => void): void;
    /**
     * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API.
     *          This operation is only supported in the cached volume and stored volume types. For stored
     *          volume gateways, the local disk that was configured as the storage volume is not deleted.
     *          You can reuse the local disk to create another storage volume. </p>
     *          <p>Before you delete a volume, make sure there are no iSCSI connections to the volume
     *          you are deleting. You should also make sure there is no snapshot in progress. You can use
     *          the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
     *          deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
     *             Reference</i>.</p>
     *          <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
     *          you want to delete.</p>
     */
    deleteVolume(args: DeleteVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVolumeCommandOutput>;
    deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
    deleteVolume(args: DeleteVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
    /**
     * <p>Returns information about the most recent High Availability monitoring test that was
     *          performed on the host in a cluster. If a test isn't performed, the status and start time in
     *          the response would be null.</p>
     */
    describeAvailabilityMonitorTest(args: DescribeAvailabilityMonitorTestCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAvailabilityMonitorTestCommandOutput>;
    describeAvailabilityMonitorTest(args: DescribeAvailabilityMonitorTestCommandInput, cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void): void;
    describeAvailabilityMonitorTest(args: DescribeAvailabilityMonitorTestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAvailabilityMonitorTestCommandOutput) => void): void;
    /**
     * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
     *          which means no bandwidth rate limiting is in effect. This operation is supported for the stored volume, cached volume and tape gateway types.'</p>
     *          <p>This operation only returns a value for a bandwidth rate limit only if the limit is
     *          set. If no limits are set for the gateway, then this operation returns only the gateway ARN
     *          in the response body. To specify which gateway to describe, use the Amazon Resource Name
     *          (ARN) of the gateway in your request.</p>
     */
    describeBandwidthRateLimit(args: DescribeBandwidthRateLimitCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBandwidthRateLimitCommandOutput>;
    describeBandwidthRateLimit(args: DescribeBandwidthRateLimitCommandInput, cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void): void;
    describeBandwidthRateLimit(args: DescribeBandwidthRateLimitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBandwidthRateLimitCommandOutput) => void): void;
    /**
     * <p>Returns information about the cache of a gateway. This operation is only supported in
     *          the cached volume, tape and file gateway types.</p>
     *          <p>The response includes disk IDs that are configured as cache, and it includes the
     *          amount of cache allocated and used.</p>
     */
    describeCache(args: DescribeCacheCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheCommandOutput>;
    describeCache(args: DescribeCacheCommandInput, cb: (err: any, data?: DescribeCacheCommandOutput) => void): void;
    describeCache(args: DescribeCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheCommandOutput) => void): void;
    /**
     * <p>Returns a description of the gateway volumes specified in the request. This operation
     *          is only supported in the cached volume gateway types.</p>
     *          <p>The list of gateway volumes in the request must be from one gateway. In the response
     *          Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name
     *          (ARN).</p>
     */
    describeCachediSCSIVolumes(args: DescribeCachediSCSIVolumesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCachediSCSIVolumesCommandOutput>;
    describeCachediSCSIVolumes(args: DescribeCachediSCSIVolumesCommandInput, cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void): void;
    describeCachediSCSIVolumes(args: DescribeCachediSCSIVolumesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCachediSCSIVolumesCommandOutput) => void): void;
    /**
     * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
     *          information for a specified iSCSI target, one for each target-initiator pair.
     *          This operation is supported in the volume and tape gateway types.</p>
     */
    describeChapCredentials(args: DescribeChapCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChapCredentialsCommandOutput>;
    describeChapCredentials(args: DescribeChapCredentialsCommandInput, cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void): void;
    describeChapCredentials(args: DescribeChapCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChapCredentialsCommandOutput) => void): void;
    /**
     * <p>Returns metadata about a gateway such as its name, network interfaces, configured
     *          time zone, and the state (whether the gateway is running or not). To specify which gateway
     *          to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
     */
    describeGatewayInformation(args: DescribeGatewayInformationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGatewayInformationCommandOutput>;
    describeGatewayInformation(args: DescribeGatewayInformationCommandInput, cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void): void;
    describeGatewayInformation(args: DescribeGatewayInformationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGatewayInformationCommandOutput) => void): void;
    /**
     * <p>Returns your gateway's weekly maintenance start time including the day and time of
     *          the week. Note that values are in terms of the gateway's time zone.</p>
     */
    describeMaintenanceStartTime(args: DescribeMaintenanceStartTimeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceStartTimeCommandOutput>;
    describeMaintenanceStartTime(args: DescribeMaintenanceStartTimeCommandInput, cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void): void;
    describeMaintenanceStartTime(args: DescribeMaintenanceStartTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceStartTimeCommandOutput) => void): void;
    /**
     * <p>Gets a description for one or more Network File System (NFS) file shares from a file
     *          gateway. This operation is only supported for file gateways.</p>
     */
    describeNFSFileShares(args: DescribeNFSFileSharesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNFSFileSharesCommandOutput>;
    describeNFSFileShares(args: DescribeNFSFileSharesCommandInput, cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void): void;
    describeNFSFileShares(args: DescribeNFSFileSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNFSFileSharesCommandOutput) => void): void;
    /**
     * <p>Gets a description for one or more Server Message Block (SMB) file shares from a file
     *          gateway. This operation is only supported for file gateways.</p>
     */
    describeSMBFileShares(args: DescribeSMBFileSharesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSMBFileSharesCommandOutput>;
    describeSMBFileShares(args: DescribeSMBFileSharesCommandInput, cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void): void;
    describeSMBFileShares(args: DescribeSMBFileSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSMBFileSharesCommandOutput) => void): void;
    /**
     * <p>Gets a description of a Server Message Block (SMB) file share settings from a file
     *          gateway. This operation is only supported for file gateways.</p>
     */
    describeSMBSettings(args: DescribeSMBSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSMBSettingsCommandOutput>;
    describeSMBSettings(args: DescribeSMBSettingsCommandInput, cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void): void;
    describeSMBSettings(args: DescribeSMBSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSMBSettingsCommandOutput) => void): void;
    /**
     * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot
     *          schedule information includes intervals at which snapshots are automatically initiated on
     *          the volume. This operation is only supported in the cached volume and stored volume
     *          types.</p>
     */
    describeSnapshotSchedule(args: DescribeSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSnapshotScheduleCommandOutput>;
    describeSnapshotSchedule(args: DescribeSnapshotScheduleCommandInput, cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void): void;
    describeSnapshotSchedule(args: DescribeSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Returns the description of the gateway volumes specified in the request. The list of
     *          gateway volumes in the request must be from one gateway. In the response Amazon Storage
     *          Gateway returns volume information sorted by volume ARNs. This operation is only supported
     *          in stored volume gateway type.</p>
     */
    describeStorediSCSIVolumes(args: DescribeStorediSCSIVolumesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStorediSCSIVolumesCommandOutput>;
    describeStorediSCSIVolumes(args: DescribeStorediSCSIVolumesCommandInput, cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void): void;
    describeStorediSCSIVolumes(args: DescribeStorediSCSIVolumesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStorediSCSIVolumesCommandOutput) => void): void;
    /**
     * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS).
     *          This operation is only supported in the tape gateway type.</p>
     *          <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a
     *          description of all virtual tapes found in the VTS associated with your account.</p>
     */
    describeTapeArchives(args: DescribeTapeArchivesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTapeArchivesCommandOutput>;
    describeTapeArchives(args: DescribeTapeArchivesCommandInput, cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void): void;
    describeTapeArchives(args: DescribeTapeArchivesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTapeArchivesCommandOutput) => void): void;
    /**
     * <p>Returns a list of virtual tape recovery points that are available for the specified
     *          tape gateway.</p>
     *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on
     *          the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
     *          points can be recovered to a new gateway. This operation is only supported in the tape
     *          gateway type.</p>
     */
    describeTapeRecoveryPoints(args: DescribeTapeRecoveryPointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTapeRecoveryPointsCommandOutput>;
    describeTapeRecoveryPoints(args: DescribeTapeRecoveryPointsCommandInput, cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void): void;
    describeTapeRecoveryPoints(args: DescribeTapeRecoveryPointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTapeRecoveryPointsCommandOutput) => void): void;
    /**
     * <p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes.
     *          If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes
     *          associated with the specified gateway. This operation is only supported in the tape gateway
     *          type.</p>
     */
    describeTapes(args: DescribeTapesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTapesCommandOutput>;
    describeTapes(args: DescribeTapesCommandInput, cb: (err: any, data?: DescribeTapesCommandOutput) => void): void;
    describeTapes(args: DescribeTapesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTapesCommandOutput) => void): void;
    /**
     * <p>Returns information about the upload buffer of a gateway. This operation is supported
     *          for the stored volume, cached volume and tape gateway types.</p>
     *          <p>The response includes disk IDs that are configured as upload buffer space, and it
     *          includes the amount of upload buffer space allocated and used.</p>
     */
    describeUploadBuffer(args: DescribeUploadBufferCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUploadBufferCommandOutput>;
    describeUploadBuffer(args: DescribeUploadBufferCommandInput, cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void): void;
    describeUploadBuffer(args: DescribeUploadBufferCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUploadBufferCommandOutput) => void): void;
    /**
     * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
     *          gateway. In the response, AWS Storage Gateway returns VTL device information.</p>
     *          <p>This operation is only supported in the tape gateway type.</p>
     */
    describeVTLDevices(args: DescribeVTLDevicesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVTLDevicesCommandOutput>;
    describeVTLDevices(args: DescribeVTLDevicesCommandInput, cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void): void;
    describeVTLDevices(args: DescribeVTLDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeVTLDevicesCommandOutput) => void): void;
    /**
     * <p>Returns information about the working storage of a gateway. This operation is only
     *          supported in the stored volumes gateway type. This operation is deprecated in cached
     *          volumes API version (20120630). Use DescribeUploadBuffer instead.</p>
     *          <note>
     *             <p>Working storage is also referred to as upload buffer. You can also use the
     *             DescribeUploadBuffer operation to add upload buffer to a stored volume
     *             gateway.</p>
     *          </note>
     *          <p>The response includes disk IDs that are configured as working storage, and it
     *          includes the amount of working storage allocated and used.</p>
     */
    describeWorkingStorage(args: DescribeWorkingStorageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkingStorageCommandOutput>;
    describeWorkingStorage(args: DescribeWorkingStorageCommandInput, cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void): void;
    describeWorkingStorage(args: DescribeWorkingStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkingStorageCommandOutput) => void): void;
    /**
     * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
     *          specified gateway. Detaching and attaching a volume enables you to recover your data from
     *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
     *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
     *          instance. This operation is only supported in the volume gateway type.</p>
     */
    detachVolume(args: DetachVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DetachVolumeCommandOutput>;
    detachVolume(args: DetachVolumeCommandInput, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
    detachVolume(args: DetachVolumeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetachVolumeCommandOutput) => void): void;
    /**
     * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if
     *          your gateway VM is damaged, you can disable the gateway so you can recover virtual
     *          tapes.</p>
     *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
     *          operation is only supported in the tape gateway type.</p>
     *          <important>
     *             <p>Once a gateway is disabled it cannot be enabled.</p>
     *          </important>
     */
    disableGateway(args: DisableGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DisableGatewayCommandOutput>;
    disableGateway(args: DisableGatewayCommandInput, cb: (err: any, data?: DisableGatewayCommandOutput) => void): void;
    disableGateway(args: DisableGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableGatewayCommandOutput) => void): void;
    /**
     * <p>Adds a file gateway to an Active Directory domain. This operation is only supported
     *          for file gateways that support the SMB file protocol.</p>
     */
    joinDomain(args: JoinDomainCommandInput, options?: __HttpHandlerOptions): Promise<JoinDomainCommandOutput>;
    joinDomain(args: JoinDomainCommandInput, cb: (err: any, data?: JoinDomainCommandOutput) => void): void;
    joinDomain(args: JoinDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: JoinDomainCommandOutput) => void): void;
    /**
     * <p>Gets a list of the file shares for a specific file gateway, or the list of file
     *          shares that belong to the calling user account. This operation is only supported for file
     *          gateways.</p>
     */
    listFileShares(args: ListFileSharesCommandInput, options?: __HttpHandlerOptions): Promise<ListFileSharesCommandOutput>;
    listFileShares(args: ListFileSharesCommandInput, cb: (err: any, data?: ListFileSharesCommandOutput) => void): void;
    listFileShares(args: ListFileSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFileSharesCommandOutput) => void): void;
    /**
     * <p>Lists gateways owned by an AWS account in an AWS Region specified in the request. The
     *          returned list is ordered by gateway Amazon Resource Name (ARN).</p>
     *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
     *          pagination that allows you to optionally reduce the number of gateways returned in a
     *          response.</p>
     *          <p>If you have more gateways than are returned in a response (that is, the response
     *          returns only a truncated list of your gateways), the response contains a marker that you
     *          can specify in your next request to fetch the next page of gateways.</p>
     */
    listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
    listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    listGateways(args: ListGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    /**
     * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
     *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
     *          <p>The request returns a list of all disks, specifying which are configured as working
     *          storage, cache storage, or stored volume or not configured at all. The response includes a
     *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
     *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
     *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
     *          corrupted).</p>
     */
    listLocalDisks(args: ListLocalDisksCommandInput, options?: __HttpHandlerOptions): Promise<ListLocalDisksCommandOutput>;
    listLocalDisks(args: ListLocalDisksCommandInput, cb: (err: any, data?: ListLocalDisksCommandOutput) => void): void;
    listLocalDisks(args: ListLocalDisksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLocalDisksCommandOutput) => void): void;
    /**
     * <p>Lists the tags that have been added to the specified resource. This operation is
     *          supported in storage gateways of all types.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf
     *          (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names
     *          (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your
     *          VTL and VTS.</p>
     *          <p>This operation supports pagination. By default, the operation returns a maximum of up
     *          to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to
     *          limit the number of tapes in the response. If the number of tapes returned in the response
     *          is truncated, the response includes a <code>Marker</code> element that you can use in your
     *          subsequent request to retrieve the next set of tapes. This operation is only supported in
     *          the tape gateway type.</p>
     */
    listTapes(args: ListTapesCommandInput, options?: __HttpHandlerOptions): Promise<ListTapesCommandOutput>;
    listTapes(args: ListTapesCommandInput, cb: (err: any, data?: ListTapesCommandOutput) => void): void;
    listTapes(args: ListTapesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTapesCommandOutput) => void): void;
    /**
     * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
     *          determine whether a volume is being used or not. This operation is only supported in the
     *          cached volume and stored volume gateway types.</p>
     */
    listVolumeInitiators(args: ListVolumeInitiatorsCommandInput, options?: __HttpHandlerOptions): Promise<ListVolumeInitiatorsCommandOutput>;
    listVolumeInitiators(args: ListVolumeInitiatorsCommandInput, cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void): void;
    listVolumeInitiators(args: ListVolumeInitiatorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVolumeInitiatorsCommandOutput) => void): void;
    /**
     * <p>Lists the recovery points for a specified gateway. This operation is only supported
     *          in the cached volume gateway type.</p>
     *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time
     *          at which all data of the volume is consistent and from which you can create a snapshot or
     *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
     *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
     */
    listVolumeRecoveryPoints(args: ListVolumeRecoveryPointsCommandInput, options?: __HttpHandlerOptions): Promise<ListVolumeRecoveryPointsCommandOutput>;
    listVolumeRecoveryPoints(args: ListVolumeRecoveryPointsCommandInput, cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void): void;
    listVolumeRecoveryPoints(args: ListVolumeRecoveryPointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVolumeRecoveryPointsCommandOutput) => void): void;
    /**
     * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
     *          response includes only the volume ARNs. If you want additional volume information, use the
     *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
     *          <p>The operation supports pagination. By default, the operation returns a maximum of up
     *          to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to
     *          limit the number of volumes in the response. If the number of volumes returned in the
     *          response is truncated, the response includes a Marker field. You can use this Marker value
     *          in your subsequent request to retrieve the next set of volumes. This operation is only
     *          supported in the cached volume and stored volume gateway types.</p>
     */
    listVolumes(args: ListVolumesCommandInput, options?: __HttpHandlerOptions): Promise<ListVolumesCommandOutput>;
    listVolumes(args: ListVolumesCommandInput, cb: (err: any, data?: ListVolumesCommandOutput) => void): void;
    listVolumes(args: ListVolumesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVolumesCommandOutput) => void): void;
    /**
     * <p>Sends you notification through CloudWatch Events when all files written to your file
     *          share have been uploaded to Amazon S3.</p>
     *          <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all
     *          files written to your file share up to that point in time have been uploaded to Amazon S3.
     *          These files include files written to the file share up to the time that you make a request
     *          for notification. When the upload is done, Storage Gateway sends you notification through
     *          an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification
     *          through event targets such as Amazon SNS or AWS Lambda function. This operation is only
     *          supported for file gateways.</p>
     *
     *          <p>For more information, see Getting File Upload Notification in the Storage
     *          Gateway User Guide
     *          (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification).
     *       </p>
     */
    notifyWhenUploaded(args: NotifyWhenUploadedCommandInput, options?: __HttpHandlerOptions): Promise<NotifyWhenUploadedCommandOutput>;
    notifyWhenUploaded(args: NotifyWhenUploadedCommandInput, cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void): void;
    notifyWhenUploaded(args: NotifyWhenUploadedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: NotifyWhenUploadedCommandOutput) => void): void;
    /**
     * <p>Refreshes the cache for the specified file share. This operation finds objects in the
     *          Amazon S3 bucket that were added, removed or replaced since the gateway last listed the
     *          bucket's contents and cached the results. This operation is only supported in the file
     *          gateway type. You can subscribe to be notified through an Amazon CloudWatch event when your
     *          RefreshCache operation completes. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting Notified About File Operations</a>.</p>
     *          <p>When this API is called, it only initiates the refresh operation. When the API call
     *          completes and returns a success code, it doesn't necessarily mean that the file refresh has
     *          completed. You should use the refresh-complete notification to determine that the operation
     *          has completed before you check for new files on the gateway file share. You can subscribe
     *          to be notified through an CloudWatch event when your <code>RefreshCache</code> operation
     *          completes. </p>
     *          <p>Throttle limit: This API is asynchronous so the gateway will accept no more than two
     *          refreshes at any time. We recommend using the refresh-complete CloudWatch event
     *          notification before issuing additional requests. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification">Getting Notified About File Operations</a>.</p>
     *
     *          <p>If you invoke the RefreshCache API when two requests are already being processed, any
     *          new request will cause an <code>InvalidGatewayRequestException</code> error because too
     *          many requests were sent to the server.</p>
     *
     *
     *
     *          <p>For more information, see "https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-notification".</p>
     */
    refreshCache(args: RefreshCacheCommandInput, options?: __HttpHandlerOptions): Promise<RefreshCacheCommandOutput>;
    refreshCache(args: RefreshCacheCommandInput, cb: (err: any, data?: RefreshCacheCommandOutput) => void): void;
    refreshCache(args: RefreshCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RefreshCacheCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified resource. This operation is
     *          supported in storage gateways of all types.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Resets all cache disks that have encountered a error and makes the disks available
     *          for reconfiguration as cache storage. If your cache disk encounters a error, the gateway
     *          prevents read and write operations on virtual tapes in the gateway. For example, an error
     *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
     *          gateway loses its cache storage. At this point you can reconfigure the disks as cache
     *          disks. This operation is only supported in the cached volume and tape types.</p>
     *          <important>
     *             <p>If the cache disk you are resetting contains data that has not been uploaded to
     *             Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no
     *             configured cache disks left in the gateway, so you must configure at least one new cache
     *             disk for your gateway to function properly.</p>
     *          </important>
     */
    resetCache(args: ResetCacheCommandInput, options?: __HttpHandlerOptions): Promise<ResetCacheCommandOutput>;
    resetCache(args: ResetCacheCommandInput, cb: (err: any, data?: ResetCacheCommandOutput) => void): void;
    resetCache(args: ResetCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetCacheCommandOutput) => void): void;
    /**
     * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape
     *          gateway. Virtual tapes archived in the VTS are not associated with any gateway. However
     *          after a tape is retrieved, it is associated with a gateway, even though it is also listed
     *          in the VTS, that is, archive. This operation is only supported in the tape gateway
     *          type.</p>
     *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
     *          another gateway. You must archive the tape again before you can retrieve it to another
     *          gateway. This operation is only supported in the tape gateway type.</p>
     */
    retrieveTapeArchive(args: RetrieveTapeArchiveCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveTapeArchiveCommandOutput>;
    retrieveTapeArchive(args: RetrieveTapeArchiveCommandInput, cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void): void;
    retrieveTapeArchive(args: RetrieveTapeArchiveCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetrieveTapeArchiveCommandOutput) => void): void;
    /**
     * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
     *          supported in the tape gateway type.</p>
     *          <p>A recovery point is a point in time view of a virtual tape at which all the data on
     *          the tape is consistent. If your gateway crashes, virtual tapes that have recovery points
     *          can be recovered to a new gateway.</p>
     *          <note>
     *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
     *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
     *             for retrieving recovery points.</p>
     *          </note>
     */
    retrieveTapeRecoveryPoint(args: RetrieveTapeRecoveryPointCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveTapeRecoveryPointCommandOutput>;
    retrieveTapeRecoveryPoint(args: RetrieveTapeRecoveryPointCommandInput, cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void): void;
    retrieveTapeRecoveryPoint(args: RetrieveTapeRecoveryPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetrieveTapeRecoveryPointCommandOutput) => void): void;
    /**
     * <p>Sets the password for your VM local console. When you log in to the local console for
     *          the first time, you log in to the VM with the default credentials. We recommend that you
     *          set a new password. You don't need to know the default password to set a new
     *          password.</p>
     */
    setLocalConsolePassword(args: SetLocalConsolePasswordCommandInput, options?: __HttpHandlerOptions): Promise<SetLocalConsolePasswordCommandOutput>;
    setLocalConsolePassword(args: SetLocalConsolePasswordCommandInput, cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void): void;
    setLocalConsolePassword(args: SetLocalConsolePasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetLocalConsolePasswordCommandOutput) => void): void;
    /**
     * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
     *          user is the user when the authentication method for the file share is set to
     *             <code>GuestAccess</code>.</p>
     */
    setSMBGuestPassword(args: SetSMBGuestPasswordCommandInput, options?: __HttpHandlerOptions): Promise<SetSMBGuestPasswordCommandOutput>;
    setSMBGuestPassword(args: SetSMBGuestPasswordCommandInput, cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void): void;
    setSMBGuestPassword(args: SetSMBGuestPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetSMBGuestPasswordCommandOutput) => void): void;
    /**
     * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource
     *          Name (ARN) of the gateway in the body of your request.</p>
     *          <p>The operation shuts down the gateway service component running in the gateway's
     *          virtual machine (VM) and not the host VM.</p>
     *          <note>
     *             <p>If you want to shut down the VM, it is recommended that you first shut down the
     *             gateway component in the VM to avoid unpredictable conditions.</p>
     *          </note>
     *          <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>.
     *          Your applications cannot read from or write to the gateway's storage volumes, and there are
     *          no snapshots taken.</p>
     *          <note>
     *             <p>When you make a shutdown request, you will get a <code>200 OK</code> success
     *             response immediately. However, it might take some time for the gateway to shut down. You
     *             can call the <a>DescribeGatewayInformation</a> API to check the status. For
     *             more information, see <a>ActivateGateway</a>.</p>
     *          </note>
     *          <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the
     *          gateway.</p>
     */
    shutdownGateway(args: ShutdownGatewayCommandInput, options?: __HttpHandlerOptions): Promise<ShutdownGatewayCommandOutput>;
    shutdownGateway(args: ShutdownGatewayCommandInput, cb: (err: any, data?: ShutdownGatewayCommandOutput) => void): void;
    shutdownGateway(args: ShutdownGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ShutdownGatewayCommandOutput) => void): void;
    /**
     * <p>Start a test that verifies that the specified gateway is configured for High
     *          Availability monitoring in your host environment. This request only initiates the test and
     *          that a successful response only indicates that the test was started. It doesn't indicate
     *          that the test passed. For the status of the test, invoke the
     *             <code>DescribeAvailabilityMonitorTest</code> API. </p>
     *          <note>
     *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
     *          </note>
     */
    startAvailabilityMonitorTest(args: StartAvailabilityMonitorTestCommandInput, options?: __HttpHandlerOptions): Promise<StartAvailabilityMonitorTestCommandOutput>;
    startAvailabilityMonitorTest(args: StartAvailabilityMonitorTestCommandInput, cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void): void;
    startAvailabilityMonitorTest(args: StartAvailabilityMonitorTestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAvailabilityMonitorTestCommandOutput) => void): void;
    /**
     * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can
     *          read from or write to the gateway's storage volumes and you will be able to take snapshot
     *          backups.</p>
     *          <note>
     *             <p>When you make a request, you will get a 200 OK success response immediately.
     *             However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
     *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
     *          </note>
     *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway
     *          in your request.</p>
     */
    startGateway(args: StartGatewayCommandInput, options?: __HttpHandlerOptions): Promise<StartGatewayCommandOutput>;
    startGateway(args: StartGatewayCommandInput, cb: (err: any, data?: StartGatewayCommandOutput) => void): void;
    startGateway(args: StartGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartGatewayCommandOutput) => void): void;
    /**
     * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
     *          download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth
     *          rate limit, the existing rate limit remains. This operation is supported for the stored volume, cached volume and tape gateway types.'</p>
     *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any
     *          limit, the gateway does not have any limitations on its bandwidth usage and could
     *          potentially use the maximum available bandwidth.</p>
     *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway
     *          in your request.</p>
     */
    updateBandwidthRateLimit(args: UpdateBandwidthRateLimitCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBandwidthRateLimitCommandOutput>;
    updateBandwidthRateLimit(args: UpdateBandwidthRateLimitCommandInput, cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void): void;
    updateBandwidthRateLimit(args: UpdateBandwidthRateLimitCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBandwidthRateLimitCommandOutput) => void): void;
    /**
     * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
     *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
     *          added security, you might use it. This operation is supported in the volume and tape gateway types.</p>
     *          <important>
     *             <p>When you update CHAP credentials, all existing connections on the target are
     *             closed and initiators must reconnect with the new credentials.</p>
     *          </important>
     */
    updateChapCredentials(args: UpdateChapCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChapCredentialsCommandOutput>;
    updateChapCredentials(args: UpdateChapCredentialsCommandInput, cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void): void;
    updateChapCredentials(args: UpdateChapCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChapCredentialsCommandOutput) => void): void;
    /**
     * <p>Updates a gateway's metadata, which includes the gateway's name and time zone. To
     *          specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your
     *          request.</p>
     *          <note>
     *             <p>For Gateways activated after September 2, 2015, the gateway's ARN contains the
     *             gateway ID rather than the gateway name. However, changing the name of the gateway has
     *             no effect on the gateway's ARN.</p>
     *          </note>
     */
    updateGatewayInformation(args: UpdateGatewayInformationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayInformationCommandOutput>;
    updateGatewayInformation(args: UpdateGatewayInformationCommandInput, cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void): void;
    updateGatewayInformation(args: UpdateGatewayInformationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void): void;
    /**
     * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers
     *          the software update.</p>
     *          <note>
     *             <p>When you make this request, you get a <code>200 OK</code> success response
     *             immediately. However, it might take some time for the update to complete. You can call
     *                <a>DescribeGatewayInformation</a> to verify the gateway is in the
     *                <code>STATE_RUNNING</code> state.</p>
     *          </note>
     *          <important>
     *             <p>A software update forces a system restart of your gateway. You can minimize the
     *             chance of any disruption to your applications by increasing your iSCSI Initiators'
     *             timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and
     *             Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing Your Windows iSCSI Settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing Your Linux iSCSI Settings</a>, respectively.</p>
     *          </important>
     */
    updateGatewaySoftwareNow(args: UpdateGatewaySoftwareNowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewaySoftwareNowCommandOutput>;
    updateGatewaySoftwareNow(args: UpdateGatewaySoftwareNowCommandInput, cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void): void;
    updateGatewaySoftwareNow(args: UpdateGatewaySoftwareNowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void): void;
    /**
     * <p>Updates a gateway's weekly maintenance start time information, including day and time
     *          of the week. The maintenance time is the time in your gateway's time zone.</p>
     */
    updateMaintenanceStartTime(args: UpdateMaintenanceStartTimeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMaintenanceStartTimeCommandOutput>;
    updateMaintenanceStartTime(args: UpdateMaintenanceStartTimeCommandInput, cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void): void;
    updateMaintenanceStartTime(args: UpdateMaintenanceStartTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMaintenanceStartTimeCommandOutput) => void): void;
    /**
     * <p>Updates a Network File System (NFS) file share. This operation is only supported in
     *          the file gateway type.</p>
     *          <note>
     *             <p>To leave a file share field unchanged, set the corresponding input field to
     *             null.</p>
     *          </note>
     *          <p>Updates the following file share setting:</p>
     *
     *          <ul>
     *             <li>
     *                <p>Default storage class for your S3 bucket</p>
     *             </li>
     *             <li>
     *                <p>Metadata defaults for your S3 bucket</p>
     *             </li>
     *             <li>
     *                <p>Allowed NFS clients for your file share</p>
     *             </li>
     *             <li>
     *                <p>Squash settings</p>
     *             </li>
     *             <li>
     *                <p>Write status of your file share</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>To leave a file share field unchanged, set the corresponding input field to null.
     *             This operation is only supported in file gateways.</p>
     *          </note>
     */
    updateNFSFileShare(args: UpdateNFSFileShareCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNFSFileShareCommandOutput>;
    updateNFSFileShare(args: UpdateNFSFileShareCommandInput, cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void): void;
    updateNFSFileShare(args: UpdateNFSFileShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNFSFileShareCommandOutput) => void): void;
    /**
     * <p>Updates a Server Message Block (SMB) file share.</p>
     *          <note>
     *             <p>To leave a file share field unchanged, set the corresponding input field to null.
     *             This operation is only supported for file gateways.</p>
     *          </note>
     *          <important>
     *             <p>File gateways require AWS Security Token Service (AWS STS) to be activated to
     *             enable you to create a file share. Make sure that AWS STS is activated in the AWS Region
     *             you are creating your file gateway in. If AWS STS is not activated in this AWS Region,
     *             activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
     *                Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
     *                Access Management User Guide.</i>
     *             </p>
     *             <p>File gateways don't support creating hard or symbolic links on a file
     *             share.</p>
     *          </important>
     */
    updateSMBFileShare(args: UpdateSMBFileShareCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSMBFileShareCommandOutput>;
    updateSMBFileShare(args: UpdateSMBFileShareCommandInput, cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void): void;
    updateSMBFileShare(args: UpdateSMBFileShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSMBFileShareCommandOutput) => void): void;
    /**
     * <p>Updates the SMB security strategy on a file gateway. This action is only supported in file gateways.</p>
     *          <note>
     *             <p>This API is called Security level in the User Guide.</p>
     *             <p>A higher security level can affect performance of the gateway.</p>
     *          </note>
     */
    updateSMBSecurityStrategy(args: UpdateSMBSecurityStrategyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSMBSecurityStrategyCommandOutput>;
    updateSMBSecurityStrategy(args: UpdateSMBSecurityStrategyCommandInput, cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void): void;
    updateSMBSecurityStrategy(args: UpdateSMBSecurityStrategyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSMBSecurityStrategyCommandOutput) => void): void;
    /**
     * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
     *          supported in the cached volume and stored volume gateway types.</p>
     *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
     *          creation time of the volume. You can use this API to change the snapshot schedule
     *          configured for the volume.</p>
     *          <p>In the request you must identify the gateway volume whose snapshot schedule you want
     *          to update, and the schedule information, including when you want the snapshot to begin on a
     *          day and the frequency (in hours) of snapshots.</p>
     */
    updateSnapshotSchedule(args: UpdateSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSnapshotScheduleCommandOutput>;
    updateSnapshotSchedule(args: UpdateSnapshotScheduleCommandInput, cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void): void;
    updateSnapshotSchedule(args: UpdateSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Updates the type of medium changer in a tape gateway. When you activate a tape
     *          gateway, you select a medium changer type for the tape gateway. This operation enables you
     *          to select a different type of medium changer after a tape gateway is activated. This
     *          operation is only supported in the tape gateway type.</p>
     */
    updateVTLDeviceType(args: UpdateVTLDeviceTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVTLDeviceTypeCommandOutput>;
    updateVTLDeviceType(args: UpdateVTLDeviceTypeCommandInput, cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void): void;
    updateVTLDeviceType(args: UpdateVTLDeviceTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVTLDeviceTypeCommandOutput) => void): void;
}
