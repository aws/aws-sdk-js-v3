"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WorkSpacesClient_1 = require("./WorkSpacesClient");
const AssociateIpGroupsCommand_1 = require("./commands/AssociateIpGroupsCommand");
const AuthorizeIpRulesCommand_1 = require("./commands/AuthorizeIpRulesCommand");
const CopyWorkspaceImageCommand_1 = require("./commands/CopyWorkspaceImageCommand");
const CreateIpGroupCommand_1 = require("./commands/CreateIpGroupCommand");
const CreateTagsCommand_1 = require("./commands/CreateTagsCommand");
const CreateWorkspacesCommand_1 = require("./commands/CreateWorkspacesCommand");
const DeleteIpGroupCommand_1 = require("./commands/DeleteIpGroupCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DeleteWorkspaceImageCommand_1 = require("./commands/DeleteWorkspaceImageCommand");
const DeregisterWorkspaceDirectoryCommand_1 = require("./commands/DeregisterWorkspaceDirectoryCommand");
const DescribeAccountCommand_1 = require("./commands/DescribeAccountCommand");
const DescribeAccountModificationsCommand_1 = require("./commands/DescribeAccountModificationsCommand");
const DescribeClientPropertiesCommand_1 = require("./commands/DescribeClientPropertiesCommand");
const DescribeIpGroupsCommand_1 = require("./commands/DescribeIpGroupsCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DescribeWorkspaceBundlesCommand_1 = require("./commands/DescribeWorkspaceBundlesCommand");
const DescribeWorkspaceDirectoriesCommand_1 = require("./commands/DescribeWorkspaceDirectoriesCommand");
const DescribeWorkspaceImagesCommand_1 = require("./commands/DescribeWorkspaceImagesCommand");
const DescribeWorkspaceSnapshotsCommand_1 = require("./commands/DescribeWorkspaceSnapshotsCommand");
const DescribeWorkspacesCommand_1 = require("./commands/DescribeWorkspacesCommand");
const DescribeWorkspacesConnectionStatusCommand_1 = require("./commands/DescribeWorkspacesConnectionStatusCommand");
const DisassociateIpGroupsCommand_1 = require("./commands/DisassociateIpGroupsCommand");
const ImportWorkspaceImageCommand_1 = require("./commands/ImportWorkspaceImageCommand");
const ListAvailableManagementCidrRangesCommand_1 = require("./commands/ListAvailableManagementCidrRangesCommand");
const MigrateWorkspaceCommand_1 = require("./commands/MigrateWorkspaceCommand");
const ModifyAccountCommand_1 = require("./commands/ModifyAccountCommand");
const ModifyClientPropertiesCommand_1 = require("./commands/ModifyClientPropertiesCommand");
const ModifySelfservicePermissionsCommand_1 = require("./commands/ModifySelfservicePermissionsCommand");
const ModifyWorkspaceAccessPropertiesCommand_1 = require("./commands/ModifyWorkspaceAccessPropertiesCommand");
const ModifyWorkspaceCreationPropertiesCommand_1 = require("./commands/ModifyWorkspaceCreationPropertiesCommand");
const ModifyWorkspacePropertiesCommand_1 = require("./commands/ModifyWorkspacePropertiesCommand");
const ModifyWorkspaceStateCommand_1 = require("./commands/ModifyWorkspaceStateCommand");
const RebootWorkspacesCommand_1 = require("./commands/RebootWorkspacesCommand");
const RebuildWorkspacesCommand_1 = require("./commands/RebuildWorkspacesCommand");
const RegisterWorkspaceDirectoryCommand_1 = require("./commands/RegisterWorkspaceDirectoryCommand");
const RestoreWorkspaceCommand_1 = require("./commands/RestoreWorkspaceCommand");
const RevokeIpRulesCommand_1 = require("./commands/RevokeIpRulesCommand");
const StartWorkspacesCommand_1 = require("./commands/StartWorkspacesCommand");
const StopWorkspacesCommand_1 = require("./commands/StopWorkspacesCommand");
const TerminateWorkspacesCommand_1 = require("./commands/TerminateWorkspacesCommand");
const UpdateRulesOfIpGroupCommand_1 = require("./commands/UpdateRulesOfIpGroupCommand");
/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 */
class WorkSpaces extends WorkSpacesClient_1.WorkSpacesClient {
    associateIpGroups(args, optionsOrCb, cb) {
        const command = new AssociateIpGroupsCommand_1.AssociateIpGroupsCommand(args);
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
    authorizeIpRules(args, optionsOrCb, cb) {
        const command = new AuthorizeIpRulesCommand_1.AuthorizeIpRulesCommand(args);
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
    copyWorkspaceImage(args, optionsOrCb, cb) {
        const command = new CopyWorkspaceImageCommand_1.CopyWorkspaceImageCommand(args);
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
    createIpGroup(args, optionsOrCb, cb) {
        const command = new CreateIpGroupCommand_1.CreateIpGroupCommand(args);
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
    createTags(args, optionsOrCb, cb) {
        const command = new CreateTagsCommand_1.CreateTagsCommand(args);
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
    createWorkspaces(args, optionsOrCb, cb) {
        const command = new CreateWorkspacesCommand_1.CreateWorkspacesCommand(args);
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
    deleteIpGroup(args, optionsOrCb, cb) {
        const command = new DeleteIpGroupCommand_1.DeleteIpGroupCommand(args);
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
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
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
    deleteWorkspaceImage(args, optionsOrCb, cb) {
        const command = new DeleteWorkspaceImageCommand_1.DeleteWorkspaceImageCommand(args);
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
    deregisterWorkspaceDirectory(args, optionsOrCb, cb) {
        const command = new DeregisterWorkspaceDirectoryCommand_1.DeregisterWorkspaceDirectoryCommand(args);
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
    describeAccount(args, optionsOrCb, cb) {
        const command = new DescribeAccountCommand_1.DescribeAccountCommand(args);
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
    describeAccountModifications(args, optionsOrCb, cb) {
        const command = new DescribeAccountModificationsCommand_1.DescribeAccountModificationsCommand(args);
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
    describeClientProperties(args, optionsOrCb, cb) {
        const command = new DescribeClientPropertiesCommand_1.DescribeClientPropertiesCommand(args);
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
    describeIpGroups(args, optionsOrCb, cb) {
        const command = new DescribeIpGroupsCommand_1.DescribeIpGroupsCommand(args);
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
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
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
    describeWorkspaceBundles(args, optionsOrCb, cb) {
        const command = new DescribeWorkspaceBundlesCommand_1.DescribeWorkspaceBundlesCommand(args);
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
    describeWorkspaceDirectories(args, optionsOrCb, cb) {
        const command = new DescribeWorkspaceDirectoriesCommand_1.DescribeWorkspaceDirectoriesCommand(args);
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
    describeWorkspaceImages(args, optionsOrCb, cb) {
        const command = new DescribeWorkspaceImagesCommand_1.DescribeWorkspaceImagesCommand(args);
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
    describeWorkspaceSnapshots(args, optionsOrCb, cb) {
        const command = new DescribeWorkspaceSnapshotsCommand_1.DescribeWorkspaceSnapshotsCommand(args);
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
    describeWorkspaces(args, optionsOrCb, cb) {
        const command = new DescribeWorkspacesCommand_1.DescribeWorkspacesCommand(args);
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
    describeWorkspacesConnectionStatus(args, optionsOrCb, cb) {
        const command = new DescribeWorkspacesConnectionStatusCommand_1.DescribeWorkspacesConnectionStatusCommand(args);
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
    disassociateIpGroups(args, optionsOrCb, cb) {
        const command = new DisassociateIpGroupsCommand_1.DisassociateIpGroupsCommand(args);
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
    importWorkspaceImage(args, optionsOrCb, cb) {
        const command = new ImportWorkspaceImageCommand_1.ImportWorkspaceImageCommand(args);
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
    listAvailableManagementCidrRanges(args, optionsOrCb, cb) {
        const command = new ListAvailableManagementCidrRangesCommand_1.ListAvailableManagementCidrRangesCommand(args);
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
    migrateWorkspace(args, optionsOrCb, cb) {
        const command = new MigrateWorkspaceCommand_1.MigrateWorkspaceCommand(args);
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
    modifyAccount(args, optionsOrCb, cb) {
        const command = new ModifyAccountCommand_1.ModifyAccountCommand(args);
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
    modifyClientProperties(args, optionsOrCb, cb) {
        const command = new ModifyClientPropertiesCommand_1.ModifyClientPropertiesCommand(args);
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
    modifySelfservicePermissions(args, optionsOrCb, cb) {
        const command = new ModifySelfservicePermissionsCommand_1.ModifySelfservicePermissionsCommand(args);
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
    modifyWorkspaceAccessProperties(args, optionsOrCb, cb) {
        const command = new ModifyWorkspaceAccessPropertiesCommand_1.ModifyWorkspaceAccessPropertiesCommand(args);
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
    modifyWorkspaceCreationProperties(args, optionsOrCb, cb) {
        const command = new ModifyWorkspaceCreationPropertiesCommand_1.ModifyWorkspaceCreationPropertiesCommand(args);
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
    modifyWorkspaceProperties(args, optionsOrCb, cb) {
        const command = new ModifyWorkspacePropertiesCommand_1.ModifyWorkspacePropertiesCommand(args);
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
    modifyWorkspaceState(args, optionsOrCb, cb) {
        const command = new ModifyWorkspaceStateCommand_1.ModifyWorkspaceStateCommand(args);
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
    rebootWorkspaces(args, optionsOrCb, cb) {
        const command = new RebootWorkspacesCommand_1.RebootWorkspacesCommand(args);
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
    rebuildWorkspaces(args, optionsOrCb, cb) {
        const command = new RebuildWorkspacesCommand_1.RebuildWorkspacesCommand(args);
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
    registerWorkspaceDirectory(args, optionsOrCb, cb) {
        const command = new RegisterWorkspaceDirectoryCommand_1.RegisterWorkspaceDirectoryCommand(args);
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
    restoreWorkspace(args, optionsOrCb, cb) {
        const command = new RestoreWorkspaceCommand_1.RestoreWorkspaceCommand(args);
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
    revokeIpRules(args, optionsOrCb, cb) {
        const command = new RevokeIpRulesCommand_1.RevokeIpRulesCommand(args);
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
    startWorkspaces(args, optionsOrCb, cb) {
        const command = new StartWorkspacesCommand_1.StartWorkspacesCommand(args);
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
    stopWorkspaces(args, optionsOrCb, cb) {
        const command = new StopWorkspacesCommand_1.StopWorkspacesCommand(args);
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
    terminateWorkspaces(args, optionsOrCb, cb) {
        const command = new TerminateWorkspacesCommand_1.TerminateWorkspacesCommand(args);
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
    updateRulesOfIpGroup(args, optionsOrCb, cb) {
        const command = new UpdateRulesOfIpGroupCommand_1.UpdateRulesOfIpGroupCommand(args);
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
exports.WorkSpaces = WorkSpaces;
//# sourceMappingURL=WorkSpaces.js.map