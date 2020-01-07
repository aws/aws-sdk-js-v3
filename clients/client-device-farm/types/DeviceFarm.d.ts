import { DeviceFarmClient } from "./DeviceFarmClient";
import { CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput } from "./commands/CreateDevicePoolCommand";
import { CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput } from "./commands/CreateInstanceProfileCommand";
import { CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput } from "./commands/CreateNetworkProfileCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput } from "./commands/CreateRemoteAccessSessionCommand";
import { CreateTestGridProjectCommandInput, CreateTestGridProjectCommandOutput } from "./commands/CreateTestGridProjectCommand";
import { CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput } from "./commands/CreateTestGridUrlCommand";
import { CreateUploadCommandInput, CreateUploadCommandOutput } from "./commands/CreateUploadCommand";
import { CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput } from "./commands/CreateVPCEConfigurationCommand";
import { DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput } from "./commands/DeleteDevicePoolCommand";
import { DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput } from "./commands/DeleteInstanceProfileCommand";
import { DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput } from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import { DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput } from "./commands/DeleteTestGridProjectCommand";
import { DeleteUploadCommandInput, DeleteUploadCommandOutput } from "./commands/DeleteUploadCommand";
import { DeleteVPCEConfigurationCommandInput, DeleteVPCEConfigurationCommandOutput } from "./commands/DeleteVPCEConfigurationCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput } from "./commands/GetDeviceInstanceCommand";
import { GetDevicePoolCommandInput, GetDevicePoolCommandOutput } from "./commands/GetDevicePoolCommand";
import { GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput } from "./commands/GetDevicePoolCompatibilityCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "./commands/GetNetworkProfileCommand";
import { GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput } from "./commands/GetOfferingStatusCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import { GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput } from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetSuiteCommandInput, GetSuiteCommandOutput } from "./commands/GetSuiteCommand";
import { GetTestCommandInput, GetTestCommandOutput } from "./commands/GetTestCommand";
import { GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput } from "./commands/GetTestGridProjectCommand";
import { GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput } from "./commands/GetTestGridSessionCommand";
import { GetUploadCommandInput, GetUploadCommandOutput } from "./commands/GetUploadCommand";
import { GetVPCEConfigurationCommandInput, GetVPCEConfigurationCommandOutput } from "./commands/GetVPCEConfigurationCommand";
import { InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput } from "./commands/InstallToRemoteAccessSessionCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import { ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput } from "./commands/ListDeviceInstancesCommand";
import { ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput } from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput } from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListNetworkProfilesCommandInput, ListNetworkProfilesCommandOutput } from "./commands/ListNetworkProfilesCommand";
import { ListOfferingPromotionsCommandInput, ListOfferingPromotionsCommandOutput } from "./commands/ListOfferingPromotionsCommand";
import { ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput } from "./commands/ListOfferingTransactionsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput } from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListSamplesCommandInput, ListSamplesCommandOutput } from "./commands/ListSamplesCommand";
import { ListSuitesCommandInput, ListSuitesCommandOutput } from "./commands/ListSuitesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTestGridProjectsCommandInput, ListTestGridProjectsCommandOutput } from "./commands/ListTestGridProjectsCommand";
import { ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput } from "./commands/ListTestGridSessionActionsCommand";
import { ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput } from "./commands/ListTestGridSessionArtifactsCommand";
import { ListTestGridSessionsCommandInput, ListTestGridSessionsCommandOutput } from "./commands/ListTestGridSessionsCommand";
import { ListTestsCommandInput, ListTestsCommandOutput } from "./commands/ListTestsCommand";
import { ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput } from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommandInput, ListUploadsCommandOutput } from "./commands/ListUploadsCommand";
import { ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput } from "./commands/ListVPCEConfigurationsCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RenewOfferingCommandInput, RenewOfferingCommandOutput } from "./commands/RenewOfferingCommand";
import { ScheduleRunCommandInput, ScheduleRunCommandOutput } from "./commands/ScheduleRunCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import { StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput } from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommandInput, StopRunCommandOutput } from "./commands/StopRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput } from "./commands/UpdateDeviceInstanceCommand";
import { UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput } from "./commands/UpdateDevicePoolCommand";
import { UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput } from "./commands/UpdateInstanceProfileCommand";
import { UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateTestGridProjectCommandInput, UpdateTestGridProjectCommandOutput } from "./commands/UpdateTestGridProjectCommand";
import { UpdateUploadCommandInput, UpdateUploadCommandOutput } from "./commands/UpdateUploadCommand";
import { UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput } from "./commands/UpdateVPCEConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class DeviceFarm extends DeviceFarmClient {
    /**
     * <p>Creates a device pool.</p>
     */
    createDevicePool(args: CreateDevicePoolCommandInput, options?: __HttpHandlerOptions): Promise<CreateDevicePoolCommandOutput>;
    createDevicePool(args: CreateDevicePoolCommandInput, cb: (err: any, data?: CreateDevicePoolCommandOutput) => void): void;
    createDevicePool(args: CreateDevicePoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDevicePoolCommandOutput) => void): void;
    /**
     * <p>Creates a profile that can be applied to one or more private fleet device
     *             instances.</p>
     */
    createInstanceProfile(args: CreateInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateInstanceProfileCommandOutput>;
    createInstanceProfile(args: CreateInstanceProfileCommandInput, cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void): void;
    createInstanceProfile(args: CreateInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Creates a network profile.</p>
     */
    createNetworkProfile(args: CreateNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkProfileCommandOutput>;
    createNetworkProfile(args: CreateNetworkProfileCommandInput, cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void): void;
    createNetworkProfile(args: CreateNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Creates a project.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Specifies and starts a remote access session.</p>
     */
    createRemoteAccessSession(args: CreateRemoteAccessSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateRemoteAccessSessionCommandOutput>;
    createRemoteAccessSession(args: CreateRemoteAccessSessionCommandInput, cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void): void;
    createRemoteAccessSession(args: CreateRemoteAccessSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void): void;
    /**
     * <p>Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a>
     *          instances.</p>
     */
    createTestGridProject(args: CreateTestGridProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateTestGridProjectCommandOutput>;
    createTestGridProject(args: CreateTestGridProjectCommandInput, cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void): void;
    createTestGridProject(args: CreateTestGridProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void): void;
    /**
     * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
     *          constructor.</p>
     */
    createTestGridUrl(args: CreateTestGridUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreateTestGridUrlCommandOutput>;
    createTestGridUrl(args: CreateTestGridUrlCommandInput, cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void): void;
    createTestGridUrl(args: CreateTestGridUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void): void;
    /**
     * <p>Uploads an app or test scripts.</p>
     */
    createUpload(args: CreateUploadCommandInput, options?: __HttpHandlerOptions): Promise<CreateUploadCommandOutput>;
    createUpload(args: CreateUploadCommandInput, cb: (err: any, data?: CreateUploadCommandOutput) => void): void;
    createUpload(args: CreateUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUploadCommandOutput) => void): void;
    /**
     * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
     *             (VPC) endpoint.</p>
     */
    createVPCEConfiguration(args: CreateVPCEConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateVPCEConfigurationCommandOutput>;
    createVPCEConfiguration(args: CreateVPCEConfigurationCommandInput, cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void): void;
    createVPCEConfiguration(args: CreateVPCEConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
     *             owned by the system.</p>
     */
    deleteDevicePool(args: DeleteDevicePoolCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDevicePoolCommandOutput>;
    deleteDevicePool(args: DeleteDevicePoolCommandInput, cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void): void;
    deleteDevicePool(args: DeleteDevicePoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void): void;
    /**
     * <p>Deletes a profile that can be applied to one or more private device instances.</p>
     */
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInstanceProfileCommandOutput>;
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void): void;
    deleteInstanceProfile(args: DeleteInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a network profile.</p>
     */
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNetworkProfileCommandOutput>;
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void): void;
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Device Farm project, given the project ARN.</p>
     *         <p> Deleting this resource does not stop an in-progress run.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Deletes a completed remote access session and its results.</p>
     */
    deleteRemoteAccessSession(args: DeleteRemoteAccessSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRemoteAccessSessionCommandOutput>;
    deleteRemoteAccessSession(args: DeleteRemoteAccessSessionCommandInput, cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void): void;
    deleteRemoteAccessSession(args: DeleteRemoteAccessSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void): void;
    /**
     * <p>Deletes the run, given the run ARN.</p>
     *         <p> Deleting this resource does not stop an in-progress run.</p>
     */
    deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
    deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
    deleteRun(args: DeleteRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
    /**
     * <p> Deletes a Selenium testing project and all content generated under it. </p>
     *          <important>
     *             <p>You cannot undo this operation.</p>
     *          </important>
     *          <note>
     *             <p>You cannot delete a project if it has active sessions.</p>
     *          </note>
     */
    deleteTestGridProject(args: DeleteTestGridProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTestGridProjectCommandOutput>;
    deleteTestGridProject(args: DeleteTestGridProjectCommandInput, cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void): void;
    deleteTestGridProject(args: DeleteTestGridProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void): void;
    /**
     * <p>Deletes an upload given the upload ARN.</p>
     */
    deleteUpload(args: DeleteUploadCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUploadCommandOutput>;
    deleteUpload(args: DeleteUploadCommandInput, cb: (err: any, data?: DeleteUploadCommandOutput) => void): void;
    deleteUpload(args: DeleteUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUploadCommandOutput) => void): void;
    /**
     * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
     */
    deleteVPCEConfiguration(args: DeleteVPCEConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVPCEConfigurationCommandOutput>;
    deleteVPCEConfiguration(args: DeleteVPCEConfigurationCommandInput, cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void): void;
    deleteVPCEConfiguration(args: DeleteVPCEConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
     *             account.</p>
     */
    getAccountSettings(args: GetAccountSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountSettingsCommandOutput>;
    getAccountSettings(args: GetAccountSettingsCommandInput, cb: (err: any, data?: GetAccountSettingsCommandOutput) => void): void;
    getAccountSettings(args: GetAccountSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountSettingsCommandOutput) => void): void;
    /**
     * <p>Gets information about a unique device type.</p>
     */
    getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
    getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    getDevice(args: GetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    /**
     * <p>Returns information about a device instance that belongs to a private device fleet.</p>
     */
    getDeviceInstance(args: GetDeviceInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceInstanceCommandOutput>;
    getDeviceInstance(args: GetDeviceInstanceCommandInput, cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void): void;
    getDeviceInstance(args: GetDeviceInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void): void;
    /**
     * <p>Gets information about a device pool.</p>
     */
    getDevicePool(args: GetDevicePoolCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicePoolCommandOutput>;
    getDevicePool(args: GetDevicePoolCommandInput, cb: (err: any, data?: GetDevicePoolCommandOutput) => void): void;
    getDevicePool(args: GetDevicePoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicePoolCommandOutput) => void): void;
    /**
     * <p>Gets information about compatibility with a device pool.</p>
     */
    getDevicePoolCompatibility(args: GetDevicePoolCompatibilityCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicePoolCompatibilityCommandOutput>;
    getDevicePoolCompatibility(args: GetDevicePoolCompatibilityCommandInput, cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void): void;
    getDevicePoolCompatibility(args: GetDevicePoolCompatibilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified instance profile.</p>
     */
    getInstanceProfile(args: GetInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceProfileCommandOutput>;
    getInstanceProfile(args: GetInstanceProfileCommandInput, cb: (err: any, data?: GetInstanceProfileCommandOutput) => void): void;
    getInstanceProfile(args: GetInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Gets information about a job.</p>
     */
    getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
    getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    getJob(args: GetJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    /**
     * <p>Returns information about a network profile.</p>
     */
    getNetworkProfile(args: GetNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkProfileCommandOutput>;
    getNetworkProfile(args: GetNetworkProfileCommandInput, cb: (err: any, data?: GetNetworkProfileCommandOutput) => void): void;
    getNetworkProfile(args: GetNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
     *             indicates how many offerings are currently available and the offerings that will be available in the next
     *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
     *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
     */
    getOfferingStatus(args: GetOfferingStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetOfferingStatusCommandOutput>;
    getOfferingStatus(args: GetOfferingStatusCommandInput, cb: (err: any, data?: GetOfferingStatusCommandOutput) => void): void;
    getOfferingStatus(args: GetOfferingStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOfferingStatusCommandOutput) => void): void;
    /**
     * <p>Gets information about a project.</p>
     */
    getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
    getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
    getProject(args: GetProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
    /**
     * <p>Returns a link to a currently running remote access session.</p>
     */
    getRemoteAccessSession(args: GetRemoteAccessSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetRemoteAccessSessionCommandOutput>;
    getRemoteAccessSession(args: GetRemoteAccessSessionCommandInput, cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void): void;
    getRemoteAccessSession(args: GetRemoteAccessSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void): void;
    /**
     * <p>Gets information about a run.</p>
     */
    getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
    getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
    getRun(args: GetRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRunCommandOutput) => void): void;
    /**
     * <p>Gets information about a suite.</p>
     */
    getSuite(args: GetSuiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteCommandOutput>;
    getSuite(args: GetSuiteCommandInput, cb: (err: any, data?: GetSuiteCommandOutput) => void): void;
    getSuite(args: GetSuiteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSuiteCommandOutput) => void): void;
    /**
     * <p>Gets information about a test.</p>
     */
    getTest(args: GetTestCommandInput, options?: __HttpHandlerOptions): Promise<GetTestCommandOutput>;
    getTest(args: GetTestCommandInput, cb: (err: any, data?: GetTestCommandOutput) => void): void;
    getTest(args: GetTestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTestCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a Selenium testing project.</p>
     */
    getTestGridProject(args: GetTestGridProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetTestGridProjectCommandOutput>;
    getTestGridProject(args: GetTestGridProjectCommandInput, cb: (err: any, data?: GetTestGridProjectCommandOutput) => void): void;
    getTestGridProject(args: GetTestGridProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTestGridProjectCommandOutput) => void): void;
    /**
     * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
     *          <ul>
     *             <li>
     *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
     *             </li>
     *             <li>
     *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
     *             </li>
     *          </ul>
     *          <p></p>
     */
    getTestGridSession(args: GetTestGridSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetTestGridSessionCommandOutput>;
    getTestGridSession(args: GetTestGridSessionCommandInput, cb: (err: any, data?: GetTestGridSessionCommandOutput) => void): void;
    getTestGridSession(args: GetTestGridSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTestGridSessionCommandOutput) => void): void;
    /**
     * <p>Gets information about an upload.</p>
     */
    getUpload(args: GetUploadCommandInput, options?: __HttpHandlerOptions): Promise<GetUploadCommandOutput>;
    getUpload(args: GetUploadCommandInput, cb: (err: any, data?: GetUploadCommandOutput) => void): void;
    getUpload(args: GetUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUploadCommandOutput) => void): void;
    /**
     * <p>Returns information about the configuration settings for your Amazon Virtual Private
     *             Cloud (VPC) endpoint.</p>
     */
    getVPCEConfiguration(args: GetVPCEConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetVPCEConfigurationCommandOutput>;
    getVPCEConfiguration(args: GetVPCEConfigurationCommandInput, cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void): void;
    getVPCEConfiguration(args: GetVPCEConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void): void;
    /**
     * <p>Installs an application to the device in a remote access session. For Android
     *             applications, the file must be in .apk format. For iOS applications, the file must be in
     *             .ipa format.</p>
     */
    installToRemoteAccessSession(args: InstallToRemoteAccessSessionCommandInput, options?: __HttpHandlerOptions): Promise<InstallToRemoteAccessSessionCommandOutput>;
    installToRemoteAccessSession(args: InstallToRemoteAccessSessionCommandInput, cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void): void;
    installToRemoteAccessSession(args: InstallToRemoteAccessSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void): void;
    /**
     * <p>Gets information about artifacts.</p>
     */
    listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
    listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
    listArtifacts(args: ListArtifactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
    /**
     * <p>Returns information about the private device instances associated with one or more AWS
     *             accounts.</p>
     */
    listDeviceInstances(args: ListDeviceInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceInstancesCommandOutput>;
    listDeviceInstances(args: ListDeviceInstancesCommandInput, cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void): void;
    listDeviceInstances(args: ListDeviceInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void): void;
    /**
     * <p>Gets information about device pools.</p>
     */
    listDevicePools(args: ListDevicePoolsCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicePoolsCommandOutput>;
    listDevicePools(args: ListDevicePoolsCommandInput, cb: (err: any, data?: ListDevicePoolsCommandOutput) => void): void;
    listDevicePools(args: ListDevicePoolsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicePoolsCommandOutput) => void): void;
    /**
     * <p>Gets information about unique device types.</p>
     */
    listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
    listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    listDevices(args: ListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    /**
     * <p>Returns information about all the instance profiles in an AWS account.</p>
     */
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceProfilesCommandOutput>;
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void): void;
    listInstanceProfiles(args: ListInstanceProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void): void;
    /**
     * <p>Gets information about jobs for a given test run.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Returns the list of available network profiles.</p>
     */
    listNetworkProfiles(args: ListNetworkProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworkProfilesCommandOutput>;
    listNetworkProfiles(args: ListNetworkProfilesCommandInput, cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void): void;
    listNetworkProfiles(args: ListNetworkProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void): void;
    /**
     * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
     *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
     *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
     */
    listOfferingPromotions(args: ListOfferingPromotionsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingPromotionsCommandOutput>;
    listOfferingPromotions(args: ListOfferingPromotionsCommandInput, cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void): void;
    listOfferingPromotions(args: ListOfferingPromotionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
     *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
     *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
     *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
     */
    listOfferingTransactions(args: ListOfferingTransactionsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingTransactionsCommandOutput>;
    listOfferingTransactions(args: ListOfferingTransactionsCommandInput, cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void): void;
    listOfferingTransactions(args: ListOfferingTransactionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of products or offerings that the user can manage through the API. Each offering record
     *             indicates the recurring price per unit and the frequency for that offering. The API returns a
     *                 <code>NotEligible</code> error if the user is not permitted to invoke the operation.  If you must be
     *             able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
     */
    listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
    listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    listOfferings(args: ListOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
    /**
     * <p>Gets information about projects.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all currently running remote access sessions.</p>
     */
    listRemoteAccessSessions(args: ListRemoteAccessSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRemoteAccessSessionsCommandOutput>;
    listRemoteAccessSessions(args: ListRemoteAccessSessionsCommandInput, cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void): void;
    listRemoteAccessSessions(args: ListRemoteAccessSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void): void;
    /**
     * <p>Gets information about runs, given an AWS Device Farm project ARN.</p>
     */
    listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
    listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
    listRuns(args: ListRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
    /**
     * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
     */
    listSamples(args: ListSamplesCommandInput, options?: __HttpHandlerOptions): Promise<ListSamplesCommandOutput>;
    listSamples(args: ListSamplesCommandInput, cb: (err: any, data?: ListSamplesCommandOutput) => void): void;
    listSamples(args: ListSamplesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSamplesCommandOutput) => void): void;
    /**
     * <p>Gets information about test suites for a given job.</p>
     */
    listSuites(args: ListSuitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSuitesCommandOutput>;
    listSuites(args: ListSuitesCommandInput, cb: (err: any, data?: ListSuitesCommandOutput) => void): void;
    listSuites(args: ListSuitesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSuitesCommandOutput) => void): void;
    /**
     * <p>List the tags for an AWS Device Farm resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Gets a list of all Selenium testing projects in your account.</p>
     */
    listTestGridProjects(args: ListTestGridProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestGridProjectsCommandOutput>;
    listTestGridProjects(args: ListTestGridProjectsCommandInput, cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void): void;
    listTestGridProjects(args: ListTestGridProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
     */
    listTestGridSessionActions(args: ListTestGridSessionActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestGridSessionActionsCommandOutput>;
    listTestGridSessionActions(args: ListTestGridSessionActionsCommandInput, cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void): void;
    listTestGridSessionActions(args: ListTestGridSessionActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of artifacts created during the session.</p>
     */
    listTestGridSessionArtifacts(args: ListTestGridSessionArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestGridSessionArtifactsCommandOutput>;
    listTestGridSessionArtifacts(args: ListTestGridSessionArtifactsCommandInput, cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void): void;
    listTestGridSessionArtifacts(args: ListTestGridSessionArtifactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of sessions for a <a>TestGridProject</a>.</p>
     */
    listTestGridSessions(args: ListTestGridSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestGridSessionsCommandOutput>;
    listTestGridSessions(args: ListTestGridSessionsCommandInput, cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void): void;
    listTestGridSessions(args: ListTestGridSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void): void;
    /**
     * <p>Gets information about tests in a given test suite.</p>
     */
    listTests(args: ListTestsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestsCommandOutput>;
    listTests(args: ListTestsCommandInput, cb: (err: any, data?: ListTestsCommandOutput) => void): void;
    listTests(args: ListTestsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTestsCommandOutput) => void): void;
    /**
     * <p>Gets information about unique problems, such as exceptions or crashes.</p>
     *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
     *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
     *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
     *             individual entries for that exception.</p>
     */
    listUniqueProblems(args: ListUniqueProblemsCommandInput, options?: __HttpHandlerOptions): Promise<ListUniqueProblemsCommandOutput>;
    listUniqueProblems(args: ListUniqueProblemsCommandInput, cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void): void;
    listUniqueProblems(args: ListUniqueProblemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void): void;
    /**
     * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
     */
    listUploads(args: ListUploadsCommandInput, options?: __HttpHandlerOptions): Promise<ListUploadsCommandOutput>;
    listUploads(args: ListUploadsCommandInput, cb: (err: any, data?: ListUploadsCommandOutput) => void): void;
    listUploads(args: ListUploadsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUploadsCommandOutput) => void): void;
    /**
     * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
     *             configurations in the AWS account.</p>
     */
    listVPCEConfigurations(args: ListVPCEConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListVPCEConfigurationsCommandOutput>;
    listVPCEConfigurations(args: ListVPCEConfigurationsCommandInput, cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void): void;
    listVPCEConfigurations(args: ListVPCEConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void): void;
    /**
     * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
     *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
     *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
     *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
     */
    purchaseOffering(args: PurchaseOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseOfferingCommandOutput>;
    purchaseOffering(args: PurchaseOfferingCommandInput, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    purchaseOffering(args: PurchaseOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseOfferingCommandOutput) => void): void;
    /**
     * <p>Explicitly sets the quantity of devices to renew for an offering, starting from the
     *                 <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the
     *             user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
     */
    renewOffering(args: RenewOfferingCommandInput, options?: __HttpHandlerOptions): Promise<RenewOfferingCommandOutput>;
    renewOffering(args: RenewOfferingCommandInput, cb: (err: any, data?: RenewOfferingCommandOutput) => void): void;
    renewOffering(args: RenewOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RenewOfferingCommandOutput) => void): void;
    /**
     * <p>Schedules a run.</p>
     */
    scheduleRun(args: ScheduleRunCommandInput, options?: __HttpHandlerOptions): Promise<ScheduleRunCommandOutput>;
    scheduleRun(args: ScheduleRunCommandInput, cb: (err: any, data?: ScheduleRunCommandOutput) => void): void;
    scheduleRun(args: ScheduleRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ScheduleRunCommandOutput) => void): void;
    /**
     * <p>Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
     *             where tests have not started. You are not billed for this device. On the device where tests have started,
     *             setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
     *             and any tests that were in progress or already completed.</p>
     */
    stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
    stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
    stopJob(args: StopJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopJobCommandOutput) => void): void;
    /**
     * <p>Ends a specified remote access session.</p>
     */
    stopRemoteAccessSession(args: StopRemoteAccessSessionCommandInput, options?: __HttpHandlerOptions): Promise<StopRemoteAccessSessionCommandOutput>;
    stopRemoteAccessSession(args: StopRemoteAccessSessionCommandInput, cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void): void;
    stopRemoteAccessSession(args: StopRemoteAccessSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void): void;
    /**
     * <p>Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
     *             where tests have not started. You are not billed for these devices. On devices where tests have started
     *             executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
     *             setup, teardown, and any tests that were in progress or already completed.</p>
     */
    stopRun(args: StopRunCommandInput, options?: __HttpHandlerOptions): Promise<StopRunCommandOutput>;
    stopRun(args: StopRunCommandInput, cb: (err: any, data?: StopRunCommandOutput) => void): void;
    stopRun(args: StopRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopRunCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags
     *             on a resource are not specified in the request parameters, they are not changed. When a resource is deleted,
     *             the tags associated with that resource are also deleted.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates information about a private device instance.</p>
     */
    updateDeviceInstance(args: UpdateDeviceInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceInstanceCommandOutput>;
    updateDeviceInstance(args: UpdateDeviceInstanceCommandInput, cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void): void;
    updateDeviceInstance(args: UpdateDeviceInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void): void;
    /**
     * <p>Modifies the name, description, and rules in a device pool given the attributes and
     *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
     *             whole (or not at all).</p>
     */
    updateDevicePool(args: UpdateDevicePoolCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDevicePoolCommandOutput>;
    updateDevicePool(args: UpdateDevicePoolCommandInput, cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void): void;
    updateDevicePool(args: UpdateDevicePoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void): void;
    /**
     * <p>Updates information about an existing private device instance profile.</p>
     */
    updateInstanceProfile(args: UpdateInstanceProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInstanceProfileCommandOutput>;
    updateInstanceProfile(args: UpdateInstanceProfileCommandInput, cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void): void;
    updateInstanceProfile(args: UpdateInstanceProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void): void;
    /**
     * <p>Updates the network profile.</p>
     */
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNetworkProfileCommandOutput>;
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void): void;
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Modifies the specified project name, given the project ARN and a new
     *             name.</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    /**
     * <p>Change details of a project.</p>
     */
    updateTestGridProject(args: UpdateTestGridProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTestGridProjectCommandOutput>;
    updateTestGridProject(args: UpdateTestGridProjectCommandInput, cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void): void;
    updateTestGridProject(args: UpdateTestGridProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void): void;
    /**
     * <p>Updates an uploaded test spec.</p>
     */
    updateUpload(args: UpdateUploadCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUploadCommandOutput>;
    updateUpload(args: UpdateUploadCommandInput, cb: (err: any, data?: UpdateUploadCommandOutput) => void): void;
    updateUpload(args: UpdateUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUploadCommandOutput) => void): void;
    /**
     * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
     */
    updateVPCEConfiguration(args: UpdateVPCEConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVPCEConfigurationCommandOutput>;
    updateVPCEConfiguration(args: UpdateVPCEConfigurationCommandInput, cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void): void;
    updateVPCEConfiguration(args: UpdateVPCEConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void): void;
}
