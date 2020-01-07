"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceFarmClient_1 = require("./DeviceFarmClient");
const CreateDevicePoolCommand_1 = require("./commands/CreateDevicePoolCommand");
const CreateInstanceProfileCommand_1 = require("./commands/CreateInstanceProfileCommand");
const CreateNetworkProfileCommand_1 = require("./commands/CreateNetworkProfileCommand");
const CreateProjectCommand_1 = require("./commands/CreateProjectCommand");
const CreateRemoteAccessSessionCommand_1 = require("./commands/CreateRemoteAccessSessionCommand");
const CreateTestGridProjectCommand_1 = require("./commands/CreateTestGridProjectCommand");
const CreateTestGridUrlCommand_1 = require("./commands/CreateTestGridUrlCommand");
const CreateUploadCommand_1 = require("./commands/CreateUploadCommand");
const CreateVPCEConfigurationCommand_1 = require("./commands/CreateVPCEConfigurationCommand");
const DeleteDevicePoolCommand_1 = require("./commands/DeleteDevicePoolCommand");
const DeleteInstanceProfileCommand_1 = require("./commands/DeleteInstanceProfileCommand");
const DeleteNetworkProfileCommand_1 = require("./commands/DeleteNetworkProfileCommand");
const DeleteProjectCommand_1 = require("./commands/DeleteProjectCommand");
const DeleteRemoteAccessSessionCommand_1 = require("./commands/DeleteRemoteAccessSessionCommand");
const DeleteRunCommand_1 = require("./commands/DeleteRunCommand");
const DeleteTestGridProjectCommand_1 = require("./commands/DeleteTestGridProjectCommand");
const DeleteUploadCommand_1 = require("./commands/DeleteUploadCommand");
const DeleteVPCEConfigurationCommand_1 = require("./commands/DeleteVPCEConfigurationCommand");
const GetAccountSettingsCommand_1 = require("./commands/GetAccountSettingsCommand");
const GetDeviceCommand_1 = require("./commands/GetDeviceCommand");
const GetDeviceInstanceCommand_1 = require("./commands/GetDeviceInstanceCommand");
const GetDevicePoolCommand_1 = require("./commands/GetDevicePoolCommand");
const GetDevicePoolCompatibilityCommand_1 = require("./commands/GetDevicePoolCompatibilityCommand");
const GetInstanceProfileCommand_1 = require("./commands/GetInstanceProfileCommand");
const GetJobCommand_1 = require("./commands/GetJobCommand");
const GetNetworkProfileCommand_1 = require("./commands/GetNetworkProfileCommand");
const GetOfferingStatusCommand_1 = require("./commands/GetOfferingStatusCommand");
const GetProjectCommand_1 = require("./commands/GetProjectCommand");
const GetRemoteAccessSessionCommand_1 = require("./commands/GetRemoteAccessSessionCommand");
const GetRunCommand_1 = require("./commands/GetRunCommand");
const GetSuiteCommand_1 = require("./commands/GetSuiteCommand");
const GetTestCommand_1 = require("./commands/GetTestCommand");
const GetTestGridProjectCommand_1 = require("./commands/GetTestGridProjectCommand");
const GetTestGridSessionCommand_1 = require("./commands/GetTestGridSessionCommand");
const GetUploadCommand_1 = require("./commands/GetUploadCommand");
const GetVPCEConfigurationCommand_1 = require("./commands/GetVPCEConfigurationCommand");
const InstallToRemoteAccessSessionCommand_1 = require("./commands/InstallToRemoteAccessSessionCommand");
const ListArtifactsCommand_1 = require("./commands/ListArtifactsCommand");
const ListDeviceInstancesCommand_1 = require("./commands/ListDeviceInstancesCommand");
const ListDevicePoolsCommand_1 = require("./commands/ListDevicePoolsCommand");
const ListDevicesCommand_1 = require("./commands/ListDevicesCommand");
const ListInstanceProfilesCommand_1 = require("./commands/ListInstanceProfilesCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListNetworkProfilesCommand_1 = require("./commands/ListNetworkProfilesCommand");
const ListOfferingPromotionsCommand_1 = require("./commands/ListOfferingPromotionsCommand");
const ListOfferingTransactionsCommand_1 = require("./commands/ListOfferingTransactionsCommand");
const ListOfferingsCommand_1 = require("./commands/ListOfferingsCommand");
const ListProjectsCommand_1 = require("./commands/ListProjectsCommand");
const ListRemoteAccessSessionsCommand_1 = require("./commands/ListRemoteAccessSessionsCommand");
const ListRunsCommand_1 = require("./commands/ListRunsCommand");
const ListSamplesCommand_1 = require("./commands/ListSamplesCommand");
const ListSuitesCommand_1 = require("./commands/ListSuitesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTestGridProjectsCommand_1 = require("./commands/ListTestGridProjectsCommand");
const ListTestGridSessionActionsCommand_1 = require("./commands/ListTestGridSessionActionsCommand");
const ListTestGridSessionArtifactsCommand_1 = require("./commands/ListTestGridSessionArtifactsCommand");
const ListTestGridSessionsCommand_1 = require("./commands/ListTestGridSessionsCommand");
const ListTestsCommand_1 = require("./commands/ListTestsCommand");
const ListUniqueProblemsCommand_1 = require("./commands/ListUniqueProblemsCommand");
const ListUploadsCommand_1 = require("./commands/ListUploadsCommand");
const ListVPCEConfigurationsCommand_1 = require("./commands/ListVPCEConfigurationsCommand");
const PurchaseOfferingCommand_1 = require("./commands/PurchaseOfferingCommand");
const RenewOfferingCommand_1 = require("./commands/RenewOfferingCommand");
const ScheduleRunCommand_1 = require("./commands/ScheduleRunCommand");
const StopJobCommand_1 = require("./commands/StopJobCommand");
const StopRemoteAccessSessionCommand_1 = require("./commands/StopRemoteAccessSessionCommand");
const StopRunCommand_1 = require("./commands/StopRunCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDeviceInstanceCommand_1 = require("./commands/UpdateDeviceInstanceCommand");
const UpdateDevicePoolCommand_1 = require("./commands/UpdateDevicePoolCommand");
const UpdateInstanceProfileCommand_1 = require("./commands/UpdateInstanceProfileCommand");
const UpdateNetworkProfileCommand_1 = require("./commands/UpdateNetworkProfileCommand");
const UpdateProjectCommand_1 = require("./commands/UpdateProjectCommand");
const UpdateTestGridProjectCommand_1 = require("./commands/UpdateTestGridProjectCommand");
const UpdateUploadCommand_1 = require("./commands/UpdateUploadCommand");
const UpdateVPCEConfigurationCommand_1 = require("./commands/UpdateVPCEConfigurationCommand");
/**
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
class DeviceFarm extends DeviceFarmClient_1.DeviceFarmClient {
    createDevicePool(args, optionsOrCb, cb) {
        const command = new CreateDevicePoolCommand_1.CreateDevicePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createInstanceProfile(args, optionsOrCb, cb) {
        const command = new CreateInstanceProfileCommand_1.CreateInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkProfile(args, optionsOrCb, cb) {
        const command = new CreateNetworkProfileCommand_1.CreateNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProject(args, optionsOrCb, cb) {
        const command = new CreateProjectCommand_1.CreateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRemoteAccessSession(args, optionsOrCb, cb) {
        const command = new CreateRemoteAccessSessionCommand_1.CreateRemoteAccessSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTestGridProject(args, optionsOrCb, cb) {
        const command = new CreateTestGridProjectCommand_1.CreateTestGridProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTestGridUrl(args, optionsOrCb, cb) {
        const command = new CreateTestGridUrlCommand_1.CreateTestGridUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUpload(args, optionsOrCb, cb) {
        const command = new CreateUploadCommand_1.CreateUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVPCEConfiguration(args, optionsOrCb, cb) {
        const command = new CreateVPCEConfigurationCommand_1.CreateVPCEConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDevicePool(args, optionsOrCb, cb) {
        const command = new DeleteDevicePoolCommand_1.DeleteDevicePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInstanceProfile(args, optionsOrCb, cb) {
        const command = new DeleteInstanceProfileCommand_1.DeleteInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkProfile(args, optionsOrCb, cb) {
        const command = new DeleteNetworkProfileCommand_1.DeleteNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProject(args, optionsOrCb, cb) {
        const command = new DeleteProjectCommand_1.DeleteProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRemoteAccessSession(args, optionsOrCb, cb) {
        const command = new DeleteRemoteAccessSessionCommand_1.DeleteRemoteAccessSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRun(args, optionsOrCb, cb) {
        const command = new DeleteRunCommand_1.DeleteRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTestGridProject(args, optionsOrCb, cb) {
        const command = new DeleteTestGridProjectCommand_1.DeleteTestGridProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUpload(args, optionsOrCb, cb) {
        const command = new DeleteUploadCommand_1.DeleteUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVPCEConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteVPCEConfigurationCommand_1.DeleteVPCEConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAccountSettings(args, optionsOrCb, cb) {
        const command = new GetAccountSettingsCommand_1.GetAccountSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevice(args, optionsOrCb, cb) {
        const command = new GetDeviceCommand_1.GetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeviceInstance(args, optionsOrCb, cb) {
        const command = new GetDeviceInstanceCommand_1.GetDeviceInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevicePool(args, optionsOrCb, cb) {
        const command = new GetDevicePoolCommand_1.GetDevicePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevicePoolCompatibility(args, optionsOrCb, cb) {
        const command = new GetDevicePoolCompatibilityCommand_1.GetDevicePoolCompatibilityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInstanceProfile(args, optionsOrCb, cb) {
        const command = new GetInstanceProfileCommand_1.GetInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getJob(args, optionsOrCb, cb) {
        const command = new GetJobCommand_1.GetJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getNetworkProfile(args, optionsOrCb, cb) {
        const command = new GetNetworkProfileCommand_1.GetNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getOfferingStatus(args, optionsOrCb, cb) {
        const command = new GetOfferingStatusCommand_1.GetOfferingStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getProject(args, optionsOrCb, cb) {
        const command = new GetProjectCommand_1.GetProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRemoteAccessSession(args, optionsOrCb, cb) {
        const command = new GetRemoteAccessSessionCommand_1.GetRemoteAccessSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRun(args, optionsOrCb, cb) {
        const command = new GetRunCommand_1.GetRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSuite(args, optionsOrCb, cb) {
        const command = new GetSuiteCommand_1.GetSuiteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTest(args, optionsOrCb, cb) {
        const command = new GetTestCommand_1.GetTestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTestGridProject(args, optionsOrCb, cb) {
        const command = new GetTestGridProjectCommand_1.GetTestGridProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTestGridSession(args, optionsOrCb, cb) {
        const command = new GetTestGridSessionCommand_1.GetTestGridSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUpload(args, optionsOrCb, cb) {
        const command = new GetUploadCommand_1.GetUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVPCEConfiguration(args, optionsOrCb, cb) {
        const command = new GetVPCEConfigurationCommand_1.GetVPCEConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    installToRemoteAccessSession(args, optionsOrCb, cb) {
        const command = new InstallToRemoteAccessSessionCommand_1.InstallToRemoteAccessSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listArtifacts(args, optionsOrCb, cb) {
        const command = new ListArtifactsCommand_1.ListArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDeviceInstances(args, optionsOrCb, cb) {
        const command = new ListDeviceInstancesCommand_1.ListDeviceInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDevicePools(args, optionsOrCb, cb) {
        const command = new ListDevicePoolsCommand_1.ListDevicePoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDevices(args, optionsOrCb, cb) {
        const command = new ListDevicesCommand_1.ListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstanceProfiles(args, optionsOrCb, cb) {
        const command = new ListInstanceProfilesCommand_1.ListInstanceProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listJobs(args, optionsOrCb, cb) {
        const command = new ListJobsCommand_1.ListJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNetworkProfiles(args, optionsOrCb, cb) {
        const command = new ListNetworkProfilesCommand_1.ListNetworkProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOfferingPromotions(args, optionsOrCb, cb) {
        const command = new ListOfferingPromotionsCommand_1.ListOfferingPromotionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOfferingTransactions(args, optionsOrCb, cb) {
        const command = new ListOfferingTransactionsCommand_1.ListOfferingTransactionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOfferings(args, optionsOrCb, cb) {
        const command = new ListOfferingsCommand_1.ListOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProjects(args, optionsOrCb, cb) {
        const command = new ListProjectsCommand_1.ListProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRemoteAccessSessions(args, optionsOrCb, cb) {
        const command = new ListRemoteAccessSessionsCommand_1.ListRemoteAccessSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRuns(args, optionsOrCb, cb) {
        const command = new ListRunsCommand_1.ListRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSamples(args, optionsOrCb, cb) {
        const command = new ListSamplesCommand_1.ListSamplesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSuites(args, optionsOrCb, cb) {
        const command = new ListSuitesCommand_1.ListSuitesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    listTestGridProjects(args, optionsOrCb, cb) {
        const command = new ListTestGridProjectsCommand_1.ListTestGridProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTestGridSessionActions(args, optionsOrCb, cb) {
        const command = new ListTestGridSessionActionsCommand_1.ListTestGridSessionActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTestGridSessionArtifacts(args, optionsOrCb, cb) {
        const command = new ListTestGridSessionArtifactsCommand_1.ListTestGridSessionArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTestGridSessions(args, optionsOrCb, cb) {
        const command = new ListTestGridSessionsCommand_1.ListTestGridSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTests(args, optionsOrCb, cb) {
        const command = new ListTestsCommand_1.ListTestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUniqueProblems(args, optionsOrCb, cb) {
        const command = new ListUniqueProblemsCommand_1.ListUniqueProblemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUploads(args, optionsOrCb, cb) {
        const command = new ListUploadsCommand_1.ListUploadsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVPCEConfigurations(args, optionsOrCb, cb) {
        const command = new ListVPCEConfigurationsCommand_1.ListVPCEConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseOffering(args, optionsOrCb, cb) {
        const command = new PurchaseOfferingCommand_1.PurchaseOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    renewOffering(args, optionsOrCb, cb) {
        const command = new RenewOfferingCommand_1.RenewOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    scheduleRun(args, optionsOrCb, cb) {
        const command = new ScheduleRunCommand_1.ScheduleRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopJob(args, optionsOrCb, cb) {
        const command = new StopJobCommand_1.StopJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopRemoteAccessSession(args, optionsOrCb, cb) {
        const command = new StopRemoteAccessSessionCommand_1.StopRemoteAccessSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopRun(args, optionsOrCb, cb) {
        const command = new StopRunCommand_1.StopRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
    updateDeviceInstance(args, optionsOrCb, cb) {
        const command = new UpdateDeviceInstanceCommand_1.UpdateDeviceInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDevicePool(args, optionsOrCb, cb) {
        const command = new UpdateDevicePoolCommand_1.UpdateDevicePoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateInstanceProfile(args, optionsOrCb, cb) {
        const command = new UpdateInstanceProfileCommand_1.UpdateInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNetworkProfile(args, optionsOrCb, cb) {
        const command = new UpdateNetworkProfileCommand_1.UpdateNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProject(args, optionsOrCb, cb) {
        const command = new UpdateProjectCommand_1.UpdateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTestGridProject(args, optionsOrCb, cb) {
        const command = new UpdateTestGridProjectCommand_1.UpdateTestGridProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUpload(args, optionsOrCb, cb) {
        const command = new UpdateUploadCommand_1.UpdateUploadCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateVPCEConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateVPCEConfigurationCommand_1.UpdateVPCEConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
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
exports.DeviceFarm = DeviceFarm;
//# sourceMappingURL=DeviceFarm.js.map