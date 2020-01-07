"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DirectoryServiceClient_1 = require("./DirectoryServiceClient");
const AcceptSharedDirectoryCommand_1 = require("./commands/AcceptSharedDirectoryCommand");
const AddIpRoutesCommand_1 = require("./commands/AddIpRoutesCommand");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const CancelSchemaExtensionCommand_1 = require("./commands/CancelSchemaExtensionCommand");
const ConnectDirectoryCommand_1 = require("./commands/ConnectDirectoryCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateComputerCommand_1 = require("./commands/CreateComputerCommand");
const CreateConditionalForwarderCommand_1 = require("./commands/CreateConditionalForwarderCommand");
const CreateDirectoryCommand_1 = require("./commands/CreateDirectoryCommand");
const CreateLogSubscriptionCommand_1 = require("./commands/CreateLogSubscriptionCommand");
const CreateMicrosoftADCommand_1 = require("./commands/CreateMicrosoftADCommand");
const CreateSnapshotCommand_1 = require("./commands/CreateSnapshotCommand");
const CreateTrustCommand_1 = require("./commands/CreateTrustCommand");
const DeleteConditionalForwarderCommand_1 = require("./commands/DeleteConditionalForwarderCommand");
const DeleteDirectoryCommand_1 = require("./commands/DeleteDirectoryCommand");
const DeleteLogSubscriptionCommand_1 = require("./commands/DeleteLogSubscriptionCommand");
const DeleteSnapshotCommand_1 = require("./commands/DeleteSnapshotCommand");
const DeleteTrustCommand_1 = require("./commands/DeleteTrustCommand");
const DeregisterCertificateCommand_1 = require("./commands/DeregisterCertificateCommand");
const DeregisterEventTopicCommand_1 = require("./commands/DeregisterEventTopicCommand");
const DescribeCertificateCommand_1 = require("./commands/DescribeCertificateCommand");
const DescribeConditionalForwardersCommand_1 = require("./commands/DescribeConditionalForwardersCommand");
const DescribeDirectoriesCommand_1 = require("./commands/DescribeDirectoriesCommand");
const DescribeDomainControllersCommand_1 = require("./commands/DescribeDomainControllersCommand");
const DescribeEventTopicsCommand_1 = require("./commands/DescribeEventTopicsCommand");
const DescribeLDAPSSettingsCommand_1 = require("./commands/DescribeLDAPSSettingsCommand");
const DescribeSharedDirectoriesCommand_1 = require("./commands/DescribeSharedDirectoriesCommand");
const DescribeSnapshotsCommand_1 = require("./commands/DescribeSnapshotsCommand");
const DescribeTrustsCommand_1 = require("./commands/DescribeTrustsCommand");
const DisableLDAPSCommand_1 = require("./commands/DisableLDAPSCommand");
const DisableRadiusCommand_1 = require("./commands/DisableRadiusCommand");
const DisableSsoCommand_1 = require("./commands/DisableSsoCommand");
const EnableLDAPSCommand_1 = require("./commands/EnableLDAPSCommand");
const EnableRadiusCommand_1 = require("./commands/EnableRadiusCommand");
const EnableSsoCommand_1 = require("./commands/EnableSsoCommand");
const GetDirectoryLimitsCommand_1 = require("./commands/GetDirectoryLimitsCommand");
const GetSnapshotLimitsCommand_1 = require("./commands/GetSnapshotLimitsCommand");
const ListCertificatesCommand_1 = require("./commands/ListCertificatesCommand");
const ListIpRoutesCommand_1 = require("./commands/ListIpRoutesCommand");
const ListLogSubscriptionsCommand_1 = require("./commands/ListLogSubscriptionsCommand");
const ListSchemaExtensionsCommand_1 = require("./commands/ListSchemaExtensionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RegisterCertificateCommand_1 = require("./commands/RegisterCertificateCommand");
const RegisterEventTopicCommand_1 = require("./commands/RegisterEventTopicCommand");
const RejectSharedDirectoryCommand_1 = require("./commands/RejectSharedDirectoryCommand");
const RemoveIpRoutesCommand_1 = require("./commands/RemoveIpRoutesCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const ResetUserPasswordCommand_1 = require("./commands/ResetUserPasswordCommand");
const RestoreFromSnapshotCommand_1 = require("./commands/RestoreFromSnapshotCommand");
const ShareDirectoryCommand_1 = require("./commands/ShareDirectoryCommand");
const StartSchemaExtensionCommand_1 = require("./commands/StartSchemaExtensionCommand");
const UnshareDirectoryCommand_1 = require("./commands/UnshareDirectoryCommand");
const UpdateConditionalForwarderCommand_1 = require("./commands/UpdateConditionalForwarderCommand");
const UpdateNumberOfDomainControllersCommand_1 = require("./commands/UpdateNumberOfDomainControllersCommand");
const UpdateRadiusCommand_1 = require("./commands/UpdateRadiusCommand");
const UpdateTrustCommand_1 = require("./commands/UpdateTrustCommand");
const VerifyTrustCommand_1 = require("./commands/VerifyTrustCommand");
/**
 * <fullname>AWS Directory Service</fullname>
 *          <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *          Services</a>.</p>
 *          </note>
 */
class DirectoryService extends DirectoryServiceClient_1.DirectoryServiceClient {
    acceptSharedDirectory(args, optionsOrCb, cb) {
        const command = new AcceptSharedDirectoryCommand_1.AcceptSharedDirectoryCommand(args);
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
    addIpRoutes(args, optionsOrCb, cb) {
        const command = new AddIpRoutesCommand_1.AddIpRoutesCommand(args);
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
    cancelSchemaExtension(args, optionsOrCb, cb) {
        const command = new CancelSchemaExtensionCommand_1.CancelSchemaExtensionCommand(args);
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
    connectDirectory(args, optionsOrCb, cb) {
        const command = new ConnectDirectoryCommand_1.ConnectDirectoryCommand(args);
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
    createAlias(args, optionsOrCb, cb) {
        const command = new CreateAliasCommand_1.CreateAliasCommand(args);
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
    createComputer(args, optionsOrCb, cb) {
        const command = new CreateComputerCommand_1.CreateComputerCommand(args);
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
    createConditionalForwarder(args, optionsOrCb, cb) {
        const command = new CreateConditionalForwarderCommand_1.CreateConditionalForwarderCommand(args);
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
    createDirectory(args, optionsOrCb, cb) {
        const command = new CreateDirectoryCommand_1.CreateDirectoryCommand(args);
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
    createLogSubscription(args, optionsOrCb, cb) {
        const command = new CreateLogSubscriptionCommand_1.CreateLogSubscriptionCommand(args);
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
    createMicrosoftAD(args, optionsOrCb, cb) {
        const command = new CreateMicrosoftADCommand_1.CreateMicrosoftADCommand(args);
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
    createTrust(args, optionsOrCb, cb) {
        const command = new CreateTrustCommand_1.CreateTrustCommand(args);
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
    deleteConditionalForwarder(args, optionsOrCb, cb) {
        const command = new DeleteConditionalForwarderCommand_1.DeleteConditionalForwarderCommand(args);
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
    deleteDirectory(args, optionsOrCb, cb) {
        const command = new DeleteDirectoryCommand_1.DeleteDirectoryCommand(args);
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
    deleteLogSubscription(args, optionsOrCb, cb) {
        const command = new DeleteLogSubscriptionCommand_1.DeleteLogSubscriptionCommand(args);
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
    deleteSnapshot(args, optionsOrCb, cb) {
        const command = new DeleteSnapshotCommand_1.DeleteSnapshotCommand(args);
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
    deleteTrust(args, optionsOrCb, cb) {
        const command = new DeleteTrustCommand_1.DeleteTrustCommand(args);
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
    deregisterCertificate(args, optionsOrCb, cb) {
        const command = new DeregisterCertificateCommand_1.DeregisterCertificateCommand(args);
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
    deregisterEventTopic(args, optionsOrCb, cb) {
        const command = new DeregisterEventTopicCommand_1.DeregisterEventTopicCommand(args);
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
    describeCertificate(args, optionsOrCb, cb) {
        const command = new DescribeCertificateCommand_1.DescribeCertificateCommand(args);
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
    describeConditionalForwarders(args, optionsOrCb, cb) {
        const command = new DescribeConditionalForwardersCommand_1.DescribeConditionalForwardersCommand(args);
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
    describeDirectories(args, optionsOrCb, cb) {
        const command = new DescribeDirectoriesCommand_1.DescribeDirectoriesCommand(args);
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
    describeDomainControllers(args, optionsOrCb, cb) {
        const command = new DescribeDomainControllersCommand_1.DescribeDomainControllersCommand(args);
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
    describeEventTopics(args, optionsOrCb, cb) {
        const command = new DescribeEventTopicsCommand_1.DescribeEventTopicsCommand(args);
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
    describeLDAPSSettings(args, optionsOrCb, cb) {
        const command = new DescribeLDAPSSettingsCommand_1.DescribeLDAPSSettingsCommand(args);
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
    describeSharedDirectories(args, optionsOrCb, cb) {
        const command = new DescribeSharedDirectoriesCommand_1.DescribeSharedDirectoriesCommand(args);
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
    describeSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeSnapshotsCommand_1.DescribeSnapshotsCommand(args);
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
    describeTrusts(args, optionsOrCb, cb) {
        const command = new DescribeTrustsCommand_1.DescribeTrustsCommand(args);
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
    disableLDAPS(args, optionsOrCb, cb) {
        const command = new DisableLDAPSCommand_1.DisableLDAPSCommand(args);
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
    disableRadius(args, optionsOrCb, cb) {
        const command = new DisableRadiusCommand_1.DisableRadiusCommand(args);
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
    disableSso(args, optionsOrCb, cb) {
        const command = new DisableSsoCommand_1.DisableSsoCommand(args);
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
    enableLDAPS(args, optionsOrCb, cb) {
        const command = new EnableLDAPSCommand_1.EnableLDAPSCommand(args);
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
    enableRadius(args, optionsOrCb, cb) {
        const command = new EnableRadiusCommand_1.EnableRadiusCommand(args);
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
    enableSso(args, optionsOrCb, cb) {
        const command = new EnableSsoCommand_1.EnableSsoCommand(args);
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
    getDirectoryLimits(args, optionsOrCb, cb) {
        const command = new GetDirectoryLimitsCommand_1.GetDirectoryLimitsCommand(args);
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
    getSnapshotLimits(args, optionsOrCb, cb) {
        const command = new GetSnapshotLimitsCommand_1.GetSnapshotLimitsCommand(args);
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
    listCertificates(args, optionsOrCb, cb) {
        const command = new ListCertificatesCommand_1.ListCertificatesCommand(args);
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
    listIpRoutes(args, optionsOrCb, cb) {
        const command = new ListIpRoutesCommand_1.ListIpRoutesCommand(args);
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
    listLogSubscriptions(args, optionsOrCb, cb) {
        const command = new ListLogSubscriptionsCommand_1.ListLogSubscriptionsCommand(args);
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
    listSchemaExtensions(args, optionsOrCb, cb) {
        const command = new ListSchemaExtensionsCommand_1.ListSchemaExtensionsCommand(args);
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
    registerCertificate(args, optionsOrCb, cb) {
        const command = new RegisterCertificateCommand_1.RegisterCertificateCommand(args);
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
    registerEventTopic(args, optionsOrCb, cb) {
        const command = new RegisterEventTopicCommand_1.RegisterEventTopicCommand(args);
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
    rejectSharedDirectory(args, optionsOrCb, cb) {
        const command = new RejectSharedDirectoryCommand_1.RejectSharedDirectoryCommand(args);
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
    removeIpRoutes(args, optionsOrCb, cb) {
        const command = new RemoveIpRoutesCommand_1.RemoveIpRoutesCommand(args);
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
    resetUserPassword(args, optionsOrCb, cb) {
        const command = new ResetUserPasswordCommand_1.ResetUserPasswordCommand(args);
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
    restoreFromSnapshot(args, optionsOrCb, cb) {
        const command = new RestoreFromSnapshotCommand_1.RestoreFromSnapshotCommand(args);
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
    shareDirectory(args, optionsOrCb, cb) {
        const command = new ShareDirectoryCommand_1.ShareDirectoryCommand(args);
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
    startSchemaExtension(args, optionsOrCb, cb) {
        const command = new StartSchemaExtensionCommand_1.StartSchemaExtensionCommand(args);
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
    unshareDirectory(args, optionsOrCb, cb) {
        const command = new UnshareDirectoryCommand_1.UnshareDirectoryCommand(args);
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
    updateConditionalForwarder(args, optionsOrCb, cb) {
        const command = new UpdateConditionalForwarderCommand_1.UpdateConditionalForwarderCommand(args);
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
    updateNumberOfDomainControllers(args, optionsOrCb, cb) {
        const command = new UpdateNumberOfDomainControllersCommand_1.UpdateNumberOfDomainControllersCommand(args);
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
    updateRadius(args, optionsOrCb, cb) {
        const command = new UpdateRadiusCommand_1.UpdateRadiusCommand(args);
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
    updateTrust(args, optionsOrCb, cb) {
        const command = new UpdateTrustCommand_1.UpdateTrustCommand(args);
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
    verifyTrust(args, optionsOrCb, cb) {
        const command = new VerifyTrustCommand_1.VerifyTrustCommand(args);
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
exports.DirectoryService = DirectoryService;
//# sourceMappingURL=DirectoryService.js.map