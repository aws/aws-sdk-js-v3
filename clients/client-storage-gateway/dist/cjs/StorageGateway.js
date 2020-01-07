"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StorageGatewayClient_1 = require("./StorageGatewayClient");
const ActivateGatewayCommand_1 = require("./commands/ActivateGatewayCommand");
const AddCacheCommand_1 = require("./commands/AddCacheCommand");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const AddUploadBufferCommand_1 = require("./commands/AddUploadBufferCommand");
const AddWorkingStorageCommand_1 = require("./commands/AddWorkingStorageCommand");
const AssignTapePoolCommand_1 = require("./commands/AssignTapePoolCommand");
const AttachVolumeCommand_1 = require("./commands/AttachVolumeCommand");
const CancelArchivalCommand_1 = require("./commands/CancelArchivalCommand");
const CancelRetrievalCommand_1 = require("./commands/CancelRetrievalCommand");
const CreateCachediSCSIVolumeCommand_1 = require("./commands/CreateCachediSCSIVolumeCommand");
const CreateNFSFileShareCommand_1 = require("./commands/CreateNFSFileShareCommand");
const CreateSMBFileShareCommand_1 = require("./commands/CreateSMBFileShareCommand");
const CreateSnapshotCommand_1 = require("./commands/CreateSnapshotCommand");
const CreateSnapshotFromVolumeRecoveryPointCommand_1 = require("./commands/CreateSnapshotFromVolumeRecoveryPointCommand");
const CreateStorediSCSIVolumeCommand_1 = require("./commands/CreateStorediSCSIVolumeCommand");
const CreateTapeWithBarcodeCommand_1 = require("./commands/CreateTapeWithBarcodeCommand");
const CreateTapesCommand_1 = require("./commands/CreateTapesCommand");
const DeleteBandwidthRateLimitCommand_1 = require("./commands/DeleteBandwidthRateLimitCommand");
const DeleteChapCredentialsCommand_1 = require("./commands/DeleteChapCredentialsCommand");
const DeleteFileShareCommand_1 = require("./commands/DeleteFileShareCommand");
const DeleteGatewayCommand_1 = require("./commands/DeleteGatewayCommand");
const DeleteSnapshotScheduleCommand_1 = require("./commands/DeleteSnapshotScheduleCommand");
const DeleteTapeArchiveCommand_1 = require("./commands/DeleteTapeArchiveCommand");
const DeleteTapeCommand_1 = require("./commands/DeleteTapeCommand");
const DeleteVolumeCommand_1 = require("./commands/DeleteVolumeCommand");
const DescribeAvailabilityMonitorTestCommand_1 = require("./commands/DescribeAvailabilityMonitorTestCommand");
const DescribeBandwidthRateLimitCommand_1 = require("./commands/DescribeBandwidthRateLimitCommand");
const DescribeCacheCommand_1 = require("./commands/DescribeCacheCommand");
const DescribeCachediSCSIVolumesCommand_1 = require("./commands/DescribeCachediSCSIVolumesCommand");
const DescribeChapCredentialsCommand_1 = require("./commands/DescribeChapCredentialsCommand");
const DescribeGatewayInformationCommand_1 = require("./commands/DescribeGatewayInformationCommand");
const DescribeMaintenanceStartTimeCommand_1 = require("./commands/DescribeMaintenanceStartTimeCommand");
const DescribeNFSFileSharesCommand_1 = require("./commands/DescribeNFSFileSharesCommand");
const DescribeSMBFileSharesCommand_1 = require("./commands/DescribeSMBFileSharesCommand");
const DescribeSMBSettingsCommand_1 = require("./commands/DescribeSMBSettingsCommand");
const DescribeSnapshotScheduleCommand_1 = require("./commands/DescribeSnapshotScheduleCommand");
const DescribeStorediSCSIVolumesCommand_1 = require("./commands/DescribeStorediSCSIVolumesCommand");
const DescribeTapeArchivesCommand_1 = require("./commands/DescribeTapeArchivesCommand");
const DescribeTapeRecoveryPointsCommand_1 = require("./commands/DescribeTapeRecoveryPointsCommand");
const DescribeTapesCommand_1 = require("./commands/DescribeTapesCommand");
const DescribeUploadBufferCommand_1 = require("./commands/DescribeUploadBufferCommand");
const DescribeVTLDevicesCommand_1 = require("./commands/DescribeVTLDevicesCommand");
const DescribeWorkingStorageCommand_1 = require("./commands/DescribeWorkingStorageCommand");
const DetachVolumeCommand_1 = require("./commands/DetachVolumeCommand");
const DisableGatewayCommand_1 = require("./commands/DisableGatewayCommand");
const JoinDomainCommand_1 = require("./commands/JoinDomainCommand");
const ListFileSharesCommand_1 = require("./commands/ListFileSharesCommand");
const ListGatewaysCommand_1 = require("./commands/ListGatewaysCommand");
const ListLocalDisksCommand_1 = require("./commands/ListLocalDisksCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTapesCommand_1 = require("./commands/ListTapesCommand");
const ListVolumeInitiatorsCommand_1 = require("./commands/ListVolumeInitiatorsCommand");
const ListVolumeRecoveryPointsCommand_1 = require("./commands/ListVolumeRecoveryPointsCommand");
const ListVolumesCommand_1 = require("./commands/ListVolumesCommand");
const NotifyWhenUploadedCommand_1 = require("./commands/NotifyWhenUploadedCommand");
const RefreshCacheCommand_1 = require("./commands/RefreshCacheCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetCacheCommand_1 = require("./commands/ResetCacheCommand");
const RetrieveTapeArchiveCommand_1 = require("./commands/RetrieveTapeArchiveCommand");
const RetrieveTapeRecoveryPointCommand_1 = require("./commands/RetrieveTapeRecoveryPointCommand");
const SetLocalConsolePasswordCommand_1 = require("./commands/SetLocalConsolePasswordCommand");
const SetSMBGuestPasswordCommand_1 = require("./commands/SetSMBGuestPasswordCommand");
const ShutdownGatewayCommand_1 = require("./commands/ShutdownGatewayCommand");
const StartAvailabilityMonitorTestCommand_1 = require("./commands/StartAvailabilityMonitorTestCommand");
const StartGatewayCommand_1 = require("./commands/StartGatewayCommand");
const UpdateBandwidthRateLimitCommand_1 = require("./commands/UpdateBandwidthRateLimitCommand");
const UpdateChapCredentialsCommand_1 = require("./commands/UpdateChapCredentialsCommand");
const UpdateGatewayInformationCommand_1 = require("./commands/UpdateGatewayInformationCommand");
const UpdateGatewaySoftwareNowCommand_1 = require("./commands/UpdateGatewaySoftwareNowCommand");
const UpdateMaintenanceStartTimeCommand_1 = require("./commands/UpdateMaintenanceStartTimeCommand");
const UpdateNFSFileShareCommand_1 = require("./commands/UpdateNFSFileShareCommand");
const UpdateSMBFileShareCommand_1 = require("./commands/UpdateSMBFileShareCommand");
const UpdateSMBSecurityStrategyCommand_1 = require("./commands/UpdateSMBSecurityStrategyCommand");
const UpdateSnapshotScheduleCommand_1 = require("./commands/UpdateSnapshotScheduleCommand");
const UpdateVTLDeviceTypeCommand_1 = require("./commands/UpdateVTLDeviceTypeCommand");
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
class StorageGateway extends StorageGatewayClient_1.StorageGatewayClient {
    activateGateway(args, optionsOrCb, cb) {
        const command = new ActivateGatewayCommand_1.ActivateGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addCache(args, optionsOrCb, cb) {
        const command = new AddCacheCommand_1.AddCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTagsToResource(args, optionsOrCb, cb) {
        const command = new AddTagsToResourceCommand_1.AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addUploadBuffer(args, optionsOrCb, cb) {
        const command = new AddUploadBufferCommand_1.AddUploadBufferCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addWorkingStorage(args, optionsOrCb, cb) {
        const command = new AddWorkingStorageCommand_1.AddWorkingStorageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    assignTapePool(args, optionsOrCb, cb) {
        const command = new AssignTapePoolCommand_1.AssignTapePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    attachVolume(args, optionsOrCb, cb) {
        const command = new AttachVolumeCommand_1.AttachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelArchival(args, optionsOrCb, cb) {
        const command = new CancelArchivalCommand_1.CancelArchivalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelRetrieval(args, optionsOrCb, cb) {
        const command = new CancelRetrievalCommand_1.CancelRetrievalCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCachediSCSIVolume(args, optionsOrCb, cb) {
        const command = new CreateCachediSCSIVolumeCommand_1.CreateCachediSCSIVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNFSFileShare(args, optionsOrCb, cb) {
        const command = new CreateNFSFileShareCommand_1.CreateNFSFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSMBFileShare(args, optionsOrCb, cb) {
        const command = new CreateSMBFileShareCommand_1.CreateSMBFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSnapshot(args, optionsOrCb, cb) {
        const command = new CreateSnapshotCommand_1.CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSnapshotFromVolumeRecoveryPoint(args, optionsOrCb, cb) {
        const command = new CreateSnapshotFromVolumeRecoveryPointCommand_1.CreateSnapshotFromVolumeRecoveryPointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStorediSCSIVolume(args, optionsOrCb, cb) {
        const command = new CreateStorediSCSIVolumeCommand_1.CreateStorediSCSIVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTapeWithBarcode(args, optionsOrCb, cb) {
        const command = new CreateTapeWithBarcodeCommand_1.CreateTapeWithBarcodeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTapes(args, optionsOrCb, cb) {
        const command = new CreateTapesCommand_1.CreateTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteBandwidthRateLimit(args, optionsOrCb, cb) {
        const command = new DeleteBandwidthRateLimitCommand_1.DeleteBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteChapCredentials(args, optionsOrCb, cb) {
        const command = new DeleteChapCredentialsCommand_1.DeleteChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFileShare(args, optionsOrCb, cb) {
        const command = new DeleteFileShareCommand_1.DeleteFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGateway(args, optionsOrCb, cb) {
        const command = new DeleteGatewayCommand_1.DeleteGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotScheduleCommand_1.DeleteSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTape(args, optionsOrCb, cb) {
        const command = new DeleteTapeCommand_1.DeleteTapeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTapeArchive(args, optionsOrCb, cb) {
        const command = new DeleteTapeArchiveCommand_1.DeleteTapeArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVolume(args, optionsOrCb, cb) {
        const command = new DeleteVolumeCommand_1.DeleteVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAvailabilityMonitorTest(args, optionsOrCb, cb) {
        const command = new DescribeAvailabilityMonitorTestCommand_1.DescribeAvailabilityMonitorTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeBandwidthRateLimit(args, optionsOrCb, cb) {
        const command = new DescribeBandwidthRateLimitCommand_1.DescribeBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCache(args, optionsOrCb, cb) {
        const command = new DescribeCacheCommand_1.DescribeCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCachediSCSIVolumes(args, optionsOrCb, cb) {
        const command = new DescribeCachediSCSIVolumesCommand_1.DescribeCachediSCSIVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeChapCredentials(args, optionsOrCb, cb) {
        const command = new DescribeChapCredentialsCommand_1.DescribeChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGatewayInformation(args, optionsOrCb, cb) {
        const command = new DescribeGatewayInformationCommand_1.DescribeGatewayInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMaintenanceStartTime(args, optionsOrCb, cb) {
        const command = new DescribeMaintenanceStartTimeCommand_1.DescribeMaintenanceStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNFSFileShares(args, optionsOrCb, cb) {
        const command = new DescribeNFSFileSharesCommand_1.DescribeNFSFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSMBFileShares(args, optionsOrCb, cb) {
        const command = new DescribeSMBFileSharesCommand_1.DescribeSMBFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSMBSettings(args, optionsOrCb, cb) {
        const command = new DescribeSMBSettingsCommand_1.DescribeSMBSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotScheduleCommand_1.DescribeSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStorediSCSIVolumes(args, optionsOrCb, cb) {
        const command = new DescribeStorediSCSIVolumesCommand_1.DescribeStorediSCSIVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTapeArchives(args, optionsOrCb, cb) {
        const command = new DescribeTapeArchivesCommand_1.DescribeTapeArchivesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTapeRecoveryPoints(args, optionsOrCb, cb) {
        const command = new DescribeTapeRecoveryPointsCommand_1.DescribeTapeRecoveryPointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTapes(args, optionsOrCb, cb) {
        const command = new DescribeTapesCommand_1.DescribeTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUploadBuffer(args, optionsOrCb, cb) {
        const command = new DescribeUploadBufferCommand_1.DescribeUploadBufferCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVTLDevices(args, optionsOrCb, cb) {
        const command = new DescribeVTLDevicesCommand_1.DescribeVTLDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeWorkingStorage(args, optionsOrCb, cb) {
        const command = new DescribeWorkingStorageCommand_1.DescribeWorkingStorageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    detachVolume(args, optionsOrCb, cb) {
        const command = new DetachVolumeCommand_1.DetachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableGateway(args, optionsOrCb, cb) {
        const command = new DisableGatewayCommand_1.DisableGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    joinDomain(args, optionsOrCb, cb) {
        const command = new JoinDomainCommand_1.JoinDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFileShares(args, optionsOrCb, cb) {
        const command = new ListFileSharesCommand_1.ListFileSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGateways(args, optionsOrCb, cb) {
        const command = new ListGatewaysCommand_1.ListGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLocalDisks(args, optionsOrCb, cb) {
        const command = new ListLocalDisksCommand_1.ListLocalDisksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTapes(args, optionsOrCb, cb) {
        const command = new ListTapesCommand_1.ListTapesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVolumeInitiators(args, optionsOrCb, cb) {
        const command = new ListVolumeInitiatorsCommand_1.ListVolumeInitiatorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVolumeRecoveryPoints(args, optionsOrCb, cb) {
        const command = new ListVolumeRecoveryPointsCommand_1.ListVolumeRecoveryPointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVolumes(args, optionsOrCb, cb) {
        const command = new ListVolumesCommand_1.ListVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    notifyWhenUploaded(args, optionsOrCb, cb) {
        const command = new NotifyWhenUploadedCommand_1.NotifyWhenUploadedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    refreshCache(args, optionsOrCb, cb) {
        const command = new RefreshCacheCommand_1.RefreshCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromResource(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromResourceCommand_1.RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resetCache(args, optionsOrCb, cb) {
        const command = new ResetCacheCommand_1.ResetCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    retrieveTapeArchive(args, optionsOrCb, cb) {
        const command = new RetrieveTapeArchiveCommand_1.RetrieveTapeArchiveCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    retrieveTapeRecoveryPoint(args, optionsOrCb, cb) {
        const command = new RetrieveTapeRecoveryPointCommand_1.RetrieveTapeRecoveryPointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setLocalConsolePassword(args, optionsOrCb, cb) {
        const command = new SetLocalConsolePasswordCommand_1.SetLocalConsolePasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setSMBGuestPassword(args, optionsOrCb, cb) {
        const command = new SetSMBGuestPasswordCommand_1.SetSMBGuestPasswordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    shutdownGateway(args, optionsOrCb, cb) {
        const command = new ShutdownGatewayCommand_1.ShutdownGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startAvailabilityMonitorTest(args, optionsOrCb, cb) {
        const command = new StartAvailabilityMonitorTestCommand_1.StartAvailabilityMonitorTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startGateway(args, optionsOrCb, cb) {
        const command = new StartGatewayCommand_1.StartGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateBandwidthRateLimit(args, optionsOrCb, cb) {
        const command = new UpdateBandwidthRateLimitCommand_1.UpdateBandwidthRateLimitCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateChapCredentials(args, optionsOrCb, cb) {
        const command = new UpdateChapCredentialsCommand_1.UpdateChapCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGatewayInformation(args, optionsOrCb, cb) {
        const command = new UpdateGatewayInformationCommand_1.UpdateGatewayInformationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGatewaySoftwareNow(args, optionsOrCb, cb) {
        const command = new UpdateGatewaySoftwareNowCommand_1.UpdateGatewaySoftwareNowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMaintenanceStartTime(args, optionsOrCb, cb) {
        const command = new UpdateMaintenanceStartTimeCommand_1.UpdateMaintenanceStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNFSFileShare(args, optionsOrCb, cb) {
        const command = new UpdateNFSFileShareCommand_1.UpdateNFSFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSMBFileShare(args, optionsOrCb, cb) {
        const command = new UpdateSMBFileShareCommand_1.UpdateSMBFileShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSMBSecurityStrategy(args, optionsOrCb, cb) {
        const command = new UpdateSMBSecurityStrategyCommand_1.UpdateSMBSecurityStrategyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSnapshotSchedule(args, optionsOrCb, cb) {
        const command = new UpdateSnapshotScheduleCommand_1.UpdateSnapshotScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateVTLDeviceType(args, optionsOrCb, cb) {
        const command = new UpdateVTLDeviceTypeCommand_1.UpdateVTLDeviceTypeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.StorageGateway = StorageGateway;
//# sourceMappingURL=StorageGateway.js.map