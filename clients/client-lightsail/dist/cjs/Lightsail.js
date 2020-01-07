"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LightsailClient_1 = require("./LightsailClient");
const AllocateStaticIpCommand_1 = require("./commands/AllocateStaticIpCommand");
const AttachDiskCommand_1 = require("./commands/AttachDiskCommand");
const AttachInstancesToLoadBalancerCommand_1 = require("./commands/AttachInstancesToLoadBalancerCommand");
const AttachLoadBalancerTlsCertificateCommand_1 = require("./commands/AttachLoadBalancerTlsCertificateCommand");
const AttachStaticIpCommand_1 = require("./commands/AttachStaticIpCommand");
const CloseInstancePublicPortsCommand_1 = require("./commands/CloseInstancePublicPortsCommand");
const CopySnapshotCommand_1 = require("./commands/CopySnapshotCommand");
const CreateCloudFormationStackCommand_1 = require("./commands/CreateCloudFormationStackCommand");
const CreateDiskCommand_1 = require("./commands/CreateDiskCommand");
const CreateDiskFromSnapshotCommand_1 = require("./commands/CreateDiskFromSnapshotCommand");
const CreateDiskSnapshotCommand_1 = require("./commands/CreateDiskSnapshotCommand");
const CreateDomainCommand_1 = require("./commands/CreateDomainCommand");
const CreateDomainEntryCommand_1 = require("./commands/CreateDomainEntryCommand");
const CreateInstanceSnapshotCommand_1 = require("./commands/CreateInstanceSnapshotCommand");
const CreateInstancesCommand_1 = require("./commands/CreateInstancesCommand");
const CreateInstancesFromSnapshotCommand_1 = require("./commands/CreateInstancesFromSnapshotCommand");
const CreateKeyPairCommand_1 = require("./commands/CreateKeyPairCommand");
const CreateLoadBalancerCommand_1 = require("./commands/CreateLoadBalancerCommand");
const CreateLoadBalancerTlsCertificateCommand_1 = require("./commands/CreateLoadBalancerTlsCertificateCommand");
const CreateRelationalDatabaseCommand_1 = require("./commands/CreateRelationalDatabaseCommand");
const CreateRelationalDatabaseFromSnapshotCommand_1 = require("./commands/CreateRelationalDatabaseFromSnapshotCommand");
const CreateRelationalDatabaseSnapshotCommand_1 = require("./commands/CreateRelationalDatabaseSnapshotCommand");
const DeleteAutoSnapshotCommand_1 = require("./commands/DeleteAutoSnapshotCommand");
const DeleteDiskCommand_1 = require("./commands/DeleteDiskCommand");
const DeleteDiskSnapshotCommand_1 = require("./commands/DeleteDiskSnapshotCommand");
const DeleteDomainCommand_1 = require("./commands/DeleteDomainCommand");
const DeleteDomainEntryCommand_1 = require("./commands/DeleteDomainEntryCommand");
const DeleteInstanceCommand_1 = require("./commands/DeleteInstanceCommand");
const DeleteInstanceSnapshotCommand_1 = require("./commands/DeleteInstanceSnapshotCommand");
const DeleteKeyPairCommand_1 = require("./commands/DeleteKeyPairCommand");
const DeleteKnownHostKeysCommand_1 = require("./commands/DeleteKnownHostKeysCommand");
const DeleteLoadBalancerCommand_1 = require("./commands/DeleteLoadBalancerCommand");
const DeleteLoadBalancerTlsCertificateCommand_1 = require("./commands/DeleteLoadBalancerTlsCertificateCommand");
const DeleteRelationalDatabaseCommand_1 = require("./commands/DeleteRelationalDatabaseCommand");
const DeleteRelationalDatabaseSnapshotCommand_1 = require("./commands/DeleteRelationalDatabaseSnapshotCommand");
const DetachDiskCommand_1 = require("./commands/DetachDiskCommand");
const DetachInstancesFromLoadBalancerCommand_1 = require("./commands/DetachInstancesFromLoadBalancerCommand");
const DetachStaticIpCommand_1 = require("./commands/DetachStaticIpCommand");
const DisableAddOnCommand_1 = require("./commands/DisableAddOnCommand");
const DownloadDefaultKeyPairCommand_1 = require("./commands/DownloadDefaultKeyPairCommand");
const EnableAddOnCommand_1 = require("./commands/EnableAddOnCommand");
const ExportSnapshotCommand_1 = require("./commands/ExportSnapshotCommand");
const GetActiveNamesCommand_1 = require("./commands/GetActiveNamesCommand");
const GetAutoSnapshotsCommand_1 = require("./commands/GetAutoSnapshotsCommand");
const GetBlueprintsCommand_1 = require("./commands/GetBlueprintsCommand");
const GetBundlesCommand_1 = require("./commands/GetBundlesCommand");
const GetCloudFormationStackRecordsCommand_1 = require("./commands/GetCloudFormationStackRecordsCommand");
const GetDiskCommand_1 = require("./commands/GetDiskCommand");
const GetDiskSnapshotCommand_1 = require("./commands/GetDiskSnapshotCommand");
const GetDiskSnapshotsCommand_1 = require("./commands/GetDiskSnapshotsCommand");
const GetDisksCommand_1 = require("./commands/GetDisksCommand");
const GetDomainCommand_1 = require("./commands/GetDomainCommand");
const GetDomainsCommand_1 = require("./commands/GetDomainsCommand");
const GetExportSnapshotRecordsCommand_1 = require("./commands/GetExportSnapshotRecordsCommand");
const GetInstanceAccessDetailsCommand_1 = require("./commands/GetInstanceAccessDetailsCommand");
const GetInstanceCommand_1 = require("./commands/GetInstanceCommand");
const GetInstanceMetricDataCommand_1 = require("./commands/GetInstanceMetricDataCommand");
const GetInstancePortStatesCommand_1 = require("./commands/GetInstancePortStatesCommand");
const GetInstanceSnapshotCommand_1 = require("./commands/GetInstanceSnapshotCommand");
const GetInstanceSnapshotsCommand_1 = require("./commands/GetInstanceSnapshotsCommand");
const GetInstanceStateCommand_1 = require("./commands/GetInstanceStateCommand");
const GetInstancesCommand_1 = require("./commands/GetInstancesCommand");
const GetKeyPairCommand_1 = require("./commands/GetKeyPairCommand");
const GetKeyPairsCommand_1 = require("./commands/GetKeyPairsCommand");
const GetLoadBalancerCommand_1 = require("./commands/GetLoadBalancerCommand");
const GetLoadBalancerMetricDataCommand_1 = require("./commands/GetLoadBalancerMetricDataCommand");
const GetLoadBalancerTlsCertificatesCommand_1 = require("./commands/GetLoadBalancerTlsCertificatesCommand");
const GetLoadBalancersCommand_1 = require("./commands/GetLoadBalancersCommand");
const GetOperationCommand_1 = require("./commands/GetOperationCommand");
const GetOperationsCommand_1 = require("./commands/GetOperationsCommand");
const GetOperationsForResourceCommand_1 = require("./commands/GetOperationsForResourceCommand");
const GetRegionsCommand_1 = require("./commands/GetRegionsCommand");
const GetRelationalDatabaseBlueprintsCommand_1 = require("./commands/GetRelationalDatabaseBlueprintsCommand");
const GetRelationalDatabaseBundlesCommand_1 = require("./commands/GetRelationalDatabaseBundlesCommand");
const GetRelationalDatabaseCommand_1 = require("./commands/GetRelationalDatabaseCommand");
const GetRelationalDatabaseEventsCommand_1 = require("./commands/GetRelationalDatabaseEventsCommand");
const GetRelationalDatabaseLogEventsCommand_1 = require("./commands/GetRelationalDatabaseLogEventsCommand");
const GetRelationalDatabaseLogStreamsCommand_1 = require("./commands/GetRelationalDatabaseLogStreamsCommand");
const GetRelationalDatabaseMasterUserPasswordCommand_1 = require("./commands/GetRelationalDatabaseMasterUserPasswordCommand");
const GetRelationalDatabaseMetricDataCommand_1 = require("./commands/GetRelationalDatabaseMetricDataCommand");
const GetRelationalDatabaseParametersCommand_1 = require("./commands/GetRelationalDatabaseParametersCommand");
const GetRelationalDatabaseSnapshotCommand_1 = require("./commands/GetRelationalDatabaseSnapshotCommand");
const GetRelationalDatabaseSnapshotsCommand_1 = require("./commands/GetRelationalDatabaseSnapshotsCommand");
const GetRelationalDatabasesCommand_1 = require("./commands/GetRelationalDatabasesCommand");
const GetStaticIpCommand_1 = require("./commands/GetStaticIpCommand");
const GetStaticIpsCommand_1 = require("./commands/GetStaticIpsCommand");
const ImportKeyPairCommand_1 = require("./commands/ImportKeyPairCommand");
const IsVpcPeeredCommand_1 = require("./commands/IsVpcPeeredCommand");
const OpenInstancePublicPortsCommand_1 = require("./commands/OpenInstancePublicPortsCommand");
const PeerVpcCommand_1 = require("./commands/PeerVpcCommand");
const PutInstancePublicPortsCommand_1 = require("./commands/PutInstancePublicPortsCommand");
const RebootInstanceCommand_1 = require("./commands/RebootInstanceCommand");
const RebootRelationalDatabaseCommand_1 = require("./commands/RebootRelationalDatabaseCommand");
const ReleaseStaticIpCommand_1 = require("./commands/ReleaseStaticIpCommand");
const StartInstanceCommand_1 = require("./commands/StartInstanceCommand");
const StartRelationalDatabaseCommand_1 = require("./commands/StartRelationalDatabaseCommand");
const StopInstanceCommand_1 = require("./commands/StopInstanceCommand");
const StopRelationalDatabaseCommand_1 = require("./commands/StopRelationalDatabaseCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnpeerVpcCommand_1 = require("./commands/UnpeerVpcCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDomainEntryCommand_1 = require("./commands/UpdateDomainEntryCommand");
const UpdateLoadBalancerAttributeCommand_1 = require("./commands/UpdateLoadBalancerAttributeCommand");
const UpdateRelationalDatabaseCommand_1 = require("./commands/UpdateRelationalDatabaseCommand");
const UpdateRelationalDatabaseParametersCommand_1 = require("./commands/UpdateRelationalDatabaseParametersCommand");
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
class Lightsail extends LightsailClient_1.LightsailClient {
    allocateStaticIp(args, optionsOrCb, cb) {
        const command = new AllocateStaticIpCommand_1.AllocateStaticIpCommand(args);
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
    attachDisk(args, optionsOrCb, cb) {
        const command = new AttachDiskCommand_1.AttachDiskCommand(args);
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
    attachInstancesToLoadBalancer(args, optionsOrCb, cb) {
        const command = new AttachInstancesToLoadBalancerCommand_1.AttachInstancesToLoadBalancerCommand(args);
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
    attachLoadBalancerTlsCertificate(args, optionsOrCb, cb) {
        const command = new AttachLoadBalancerTlsCertificateCommand_1.AttachLoadBalancerTlsCertificateCommand(args);
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
    attachStaticIp(args, optionsOrCb, cb) {
        const command = new AttachStaticIpCommand_1.AttachStaticIpCommand(args);
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
    closeInstancePublicPorts(args, optionsOrCb, cb) {
        const command = new CloseInstancePublicPortsCommand_1.CloseInstancePublicPortsCommand(args);
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
    copySnapshot(args, optionsOrCb, cb) {
        const command = new CopySnapshotCommand_1.CopySnapshotCommand(args);
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
    createCloudFormationStack(args, optionsOrCb, cb) {
        const command = new CreateCloudFormationStackCommand_1.CreateCloudFormationStackCommand(args);
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
    createDisk(args, optionsOrCb, cb) {
        const command = new CreateDiskCommand_1.CreateDiskCommand(args);
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
    createDiskFromSnapshot(args, optionsOrCb, cb) {
        const command = new CreateDiskFromSnapshotCommand_1.CreateDiskFromSnapshotCommand(args);
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
    createDiskSnapshot(args, optionsOrCb, cb) {
        const command = new CreateDiskSnapshotCommand_1.CreateDiskSnapshotCommand(args);
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
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
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
    createDomainEntry(args, optionsOrCb, cb) {
        const command = new CreateDomainEntryCommand_1.CreateDomainEntryCommand(args);
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
    createInstanceSnapshot(args, optionsOrCb, cb) {
        const command = new CreateInstanceSnapshotCommand_1.CreateInstanceSnapshotCommand(args);
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
    createInstances(args, optionsOrCb, cb) {
        const command = new CreateInstancesCommand_1.CreateInstancesCommand(args);
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
    createInstancesFromSnapshot(args, optionsOrCb, cb) {
        const command = new CreateInstancesFromSnapshotCommand_1.CreateInstancesFromSnapshotCommand(args);
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
    createKeyPair(args, optionsOrCb, cb) {
        const command = new CreateKeyPairCommand_1.CreateKeyPairCommand(args);
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
    createLoadBalancer(args, optionsOrCb, cb) {
        const command = new CreateLoadBalancerCommand_1.CreateLoadBalancerCommand(args);
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
    createLoadBalancerTlsCertificate(args, optionsOrCb, cb) {
        const command = new CreateLoadBalancerTlsCertificateCommand_1.CreateLoadBalancerTlsCertificateCommand(args);
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
    createRelationalDatabase(args, optionsOrCb, cb) {
        const command = new CreateRelationalDatabaseCommand_1.CreateRelationalDatabaseCommand(args);
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
    createRelationalDatabaseFromSnapshot(args, optionsOrCb, cb) {
        const command = new CreateRelationalDatabaseFromSnapshotCommand_1.CreateRelationalDatabaseFromSnapshotCommand(args);
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
    createRelationalDatabaseSnapshot(args, optionsOrCb, cb) {
        const command = new CreateRelationalDatabaseSnapshotCommand_1.CreateRelationalDatabaseSnapshotCommand(args);
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
    deleteAutoSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteAutoSnapshotCommand_1.DeleteAutoSnapshotCommand(args);
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
    deleteDisk(args, optionsOrCb, cb) {
        const command = new DeleteDiskCommand_1.DeleteDiskCommand(args);
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
    deleteDiskSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteDiskSnapshotCommand_1.DeleteDiskSnapshotCommand(args);
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
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
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
    deleteDomainEntry(args, optionsOrCb, cb) {
        const command = new DeleteDomainEntryCommand_1.DeleteDomainEntryCommand(args);
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
    deleteInstance(args, optionsOrCb, cb) {
        const command = new DeleteInstanceCommand_1.DeleteInstanceCommand(args);
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
    deleteInstanceSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteInstanceSnapshotCommand_1.DeleteInstanceSnapshotCommand(args);
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
    deleteKeyPair(args, optionsOrCb, cb) {
        const command = new DeleteKeyPairCommand_1.DeleteKeyPairCommand(args);
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
    deleteKnownHostKeys(args, optionsOrCb, cb) {
        const command = new DeleteKnownHostKeysCommand_1.DeleteKnownHostKeysCommand(args);
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
    deleteLoadBalancer(args, optionsOrCb, cb) {
        const command = new DeleteLoadBalancerCommand_1.DeleteLoadBalancerCommand(args);
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
    deleteLoadBalancerTlsCertificate(args, optionsOrCb, cb) {
        const command = new DeleteLoadBalancerTlsCertificateCommand_1.DeleteLoadBalancerTlsCertificateCommand(args);
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
    deleteRelationalDatabase(args, optionsOrCb, cb) {
        const command = new DeleteRelationalDatabaseCommand_1.DeleteRelationalDatabaseCommand(args);
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
    deleteRelationalDatabaseSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteRelationalDatabaseSnapshotCommand_1.DeleteRelationalDatabaseSnapshotCommand(args);
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
    detachDisk(args, optionsOrCb, cb) {
        const command = new DetachDiskCommand_1.DetachDiskCommand(args);
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
    detachInstancesFromLoadBalancer(args, optionsOrCb, cb) {
        const command = new DetachInstancesFromLoadBalancerCommand_1.DetachInstancesFromLoadBalancerCommand(args);
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
    detachStaticIp(args, optionsOrCb, cb) {
        const command = new DetachStaticIpCommand_1.DetachStaticIpCommand(args);
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
    disableAddOn(args, optionsOrCb, cb) {
        const command = new DisableAddOnCommand_1.DisableAddOnCommand(args);
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
    downloadDefaultKeyPair(args, optionsOrCb, cb) {
        const command = new DownloadDefaultKeyPairCommand_1.DownloadDefaultKeyPairCommand(args);
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
    enableAddOn(args, optionsOrCb, cb) {
        const command = new EnableAddOnCommand_1.EnableAddOnCommand(args);
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
    exportSnapshot(args, optionsOrCb, cb) {
        const command = new ExportSnapshotCommand_1.ExportSnapshotCommand(args);
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
    getActiveNames(args, optionsOrCb, cb) {
        const command = new GetActiveNamesCommand_1.GetActiveNamesCommand(args);
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
    getAutoSnapshots(args, optionsOrCb, cb) {
        const command = new GetAutoSnapshotsCommand_1.GetAutoSnapshotsCommand(args);
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
    getBlueprints(args, optionsOrCb, cb) {
        const command = new GetBlueprintsCommand_1.GetBlueprintsCommand(args);
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
    getBundles(args, optionsOrCb, cb) {
        const command = new GetBundlesCommand_1.GetBundlesCommand(args);
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
    getCloudFormationStackRecords(args, optionsOrCb, cb) {
        const command = new GetCloudFormationStackRecordsCommand_1.GetCloudFormationStackRecordsCommand(args);
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
    getDisk(args, optionsOrCb, cb) {
        const command = new GetDiskCommand_1.GetDiskCommand(args);
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
    getDiskSnapshot(args, optionsOrCb, cb) {
        const command = new GetDiskSnapshotCommand_1.GetDiskSnapshotCommand(args);
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
    getDiskSnapshots(args, optionsOrCb, cb) {
        const command = new GetDiskSnapshotsCommand_1.GetDiskSnapshotsCommand(args);
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
    getDisks(args, optionsOrCb, cb) {
        const command = new GetDisksCommand_1.GetDisksCommand(args);
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
    getDomain(args, optionsOrCb, cb) {
        const command = new GetDomainCommand_1.GetDomainCommand(args);
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
    getDomains(args, optionsOrCb, cb) {
        const command = new GetDomainsCommand_1.GetDomainsCommand(args);
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
    getExportSnapshotRecords(args, optionsOrCb, cb) {
        const command = new GetExportSnapshotRecordsCommand_1.GetExportSnapshotRecordsCommand(args);
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
    getInstance(args, optionsOrCb, cb) {
        const command = new GetInstanceCommand_1.GetInstanceCommand(args);
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
    getInstanceAccessDetails(args, optionsOrCb, cb) {
        const command = new GetInstanceAccessDetailsCommand_1.GetInstanceAccessDetailsCommand(args);
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
    getInstanceMetricData(args, optionsOrCb, cb) {
        const command = new GetInstanceMetricDataCommand_1.GetInstanceMetricDataCommand(args);
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
    getInstancePortStates(args, optionsOrCb, cb) {
        const command = new GetInstancePortStatesCommand_1.GetInstancePortStatesCommand(args);
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
    getInstanceSnapshot(args, optionsOrCb, cb) {
        const command = new GetInstanceSnapshotCommand_1.GetInstanceSnapshotCommand(args);
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
    getInstanceSnapshots(args, optionsOrCb, cb) {
        const command = new GetInstanceSnapshotsCommand_1.GetInstanceSnapshotsCommand(args);
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
    getInstanceState(args, optionsOrCb, cb) {
        const command = new GetInstanceStateCommand_1.GetInstanceStateCommand(args);
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
    getInstances(args, optionsOrCb, cb) {
        const command = new GetInstancesCommand_1.GetInstancesCommand(args);
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
    getKeyPair(args, optionsOrCb, cb) {
        const command = new GetKeyPairCommand_1.GetKeyPairCommand(args);
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
    getKeyPairs(args, optionsOrCb, cb) {
        const command = new GetKeyPairsCommand_1.GetKeyPairsCommand(args);
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
    getLoadBalancer(args, optionsOrCb, cb) {
        const command = new GetLoadBalancerCommand_1.GetLoadBalancerCommand(args);
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
    getLoadBalancerMetricData(args, optionsOrCb, cb) {
        const command = new GetLoadBalancerMetricDataCommand_1.GetLoadBalancerMetricDataCommand(args);
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
    getLoadBalancerTlsCertificates(args, optionsOrCb, cb) {
        const command = new GetLoadBalancerTlsCertificatesCommand_1.GetLoadBalancerTlsCertificatesCommand(args);
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
    getLoadBalancers(args, optionsOrCb, cb) {
        const command = new GetLoadBalancersCommand_1.GetLoadBalancersCommand(args);
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
    getOperation(args, optionsOrCb, cb) {
        const command = new GetOperationCommand_1.GetOperationCommand(args);
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
    getOperations(args, optionsOrCb, cb) {
        const command = new GetOperationsCommand_1.GetOperationsCommand(args);
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
    getOperationsForResource(args, optionsOrCb, cb) {
        const command = new GetOperationsForResourceCommand_1.GetOperationsForResourceCommand(args);
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
    getRegions(args, optionsOrCb, cb) {
        const command = new GetRegionsCommand_1.GetRegionsCommand(args);
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
    getRelationalDatabase(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseCommand_1.GetRelationalDatabaseCommand(args);
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
    getRelationalDatabaseBlueprints(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseBlueprintsCommand_1.GetRelationalDatabaseBlueprintsCommand(args);
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
    getRelationalDatabaseBundles(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseBundlesCommand_1.GetRelationalDatabaseBundlesCommand(args);
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
    getRelationalDatabaseEvents(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseEventsCommand_1.GetRelationalDatabaseEventsCommand(args);
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
    getRelationalDatabaseLogEvents(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseLogEventsCommand_1.GetRelationalDatabaseLogEventsCommand(args);
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
    getRelationalDatabaseLogStreams(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseLogStreamsCommand_1.GetRelationalDatabaseLogStreamsCommand(args);
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
    getRelationalDatabaseMasterUserPassword(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseMasterUserPasswordCommand_1.GetRelationalDatabaseMasterUserPasswordCommand(args);
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
    getRelationalDatabaseMetricData(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseMetricDataCommand_1.GetRelationalDatabaseMetricDataCommand(args);
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
    getRelationalDatabaseParameters(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseParametersCommand_1.GetRelationalDatabaseParametersCommand(args);
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
    getRelationalDatabaseSnapshot(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseSnapshotCommand_1.GetRelationalDatabaseSnapshotCommand(args);
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
    getRelationalDatabaseSnapshots(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabaseSnapshotsCommand_1.GetRelationalDatabaseSnapshotsCommand(args);
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
    getRelationalDatabases(args, optionsOrCb, cb) {
        const command = new GetRelationalDatabasesCommand_1.GetRelationalDatabasesCommand(args);
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
    getStaticIp(args, optionsOrCb, cb) {
        const command = new GetStaticIpCommand_1.GetStaticIpCommand(args);
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
    getStaticIps(args, optionsOrCb, cb) {
        const command = new GetStaticIpsCommand_1.GetStaticIpsCommand(args);
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
    importKeyPair(args, optionsOrCb, cb) {
        const command = new ImportKeyPairCommand_1.ImportKeyPairCommand(args);
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
    isVpcPeered(args, optionsOrCb, cb) {
        const command = new IsVpcPeeredCommand_1.IsVpcPeeredCommand(args);
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
    openInstancePublicPorts(args, optionsOrCb, cb) {
        const command = new OpenInstancePublicPortsCommand_1.OpenInstancePublicPortsCommand(args);
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
    peerVpc(args, optionsOrCb, cb) {
        const command = new PeerVpcCommand_1.PeerVpcCommand(args);
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
    putInstancePublicPorts(args, optionsOrCb, cb) {
        const command = new PutInstancePublicPortsCommand_1.PutInstancePublicPortsCommand(args);
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
    rebootInstance(args, optionsOrCb, cb) {
        const command = new RebootInstanceCommand_1.RebootInstanceCommand(args);
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
    rebootRelationalDatabase(args, optionsOrCb, cb) {
        const command = new RebootRelationalDatabaseCommand_1.RebootRelationalDatabaseCommand(args);
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
    releaseStaticIp(args, optionsOrCb, cb) {
        const command = new ReleaseStaticIpCommand_1.ReleaseStaticIpCommand(args);
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
    startInstance(args, optionsOrCb, cb) {
        const command = new StartInstanceCommand_1.StartInstanceCommand(args);
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
    startRelationalDatabase(args, optionsOrCb, cb) {
        const command = new StartRelationalDatabaseCommand_1.StartRelationalDatabaseCommand(args);
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
    stopInstance(args, optionsOrCb, cb) {
        const command = new StopInstanceCommand_1.StopInstanceCommand(args);
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
    stopRelationalDatabase(args, optionsOrCb, cb) {
        const command = new StopRelationalDatabaseCommand_1.StopRelationalDatabaseCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    unpeerVpc(args, optionsOrCb, cb) {
        const command = new UnpeerVpcCommand_1.UnpeerVpcCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateDomainEntry(args, optionsOrCb, cb) {
        const command = new UpdateDomainEntryCommand_1.UpdateDomainEntryCommand(args);
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
    updateLoadBalancerAttribute(args, optionsOrCb, cb) {
        const command = new UpdateLoadBalancerAttributeCommand_1.UpdateLoadBalancerAttributeCommand(args);
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
    updateRelationalDatabase(args, optionsOrCb, cb) {
        const command = new UpdateRelationalDatabaseCommand_1.UpdateRelationalDatabaseCommand(args);
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
    updateRelationalDatabaseParameters(args, optionsOrCb, cb) {
        const command = new UpdateRelationalDatabaseParametersCommand_1.UpdateRelationalDatabaseParametersCommand(args);
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
exports.Lightsail = Lightsail;
//# sourceMappingURL=Lightsail.js.map