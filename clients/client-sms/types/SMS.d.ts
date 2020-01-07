import { SMSClient } from "./SMSClient";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput } from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput } from "./commands/DeleteAppLaunchConfigurationCommand";
import { DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput } from "./commands/DeleteAppReplicationConfigurationCommand";
import { DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput } from "./commands/DeleteReplicationJobCommand";
import { DeleteServerCatalogCommandInput, DeleteServerCatalogCommandOutput } from "./commands/DeleteServerCatalogCommand";
import { DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput } from "./commands/DisassociateConnectorCommand";
import { GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput } from "./commands/GenerateChangeSetCommand";
import { GenerateTemplateCommandInput, GenerateTemplateCommandOutput } from "./commands/GenerateTemplateCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import { GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput } from "./commands/GetAppLaunchConfigurationCommand";
import { GetAppReplicationConfigurationCommandInput, GetAppReplicationConfigurationCommandOutput } from "./commands/GetAppReplicationConfigurationCommand";
import { GetConnectorsCommandInput, GetConnectorsCommandOutput } from "./commands/GetConnectorsCommand";
import { GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput } from "./commands/GetReplicationJobsCommand";
import { GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput } from "./commands/GetReplicationRunsCommand";
import { GetServersCommandInput, GetServersCommandOutput } from "./commands/GetServersCommand";
import { ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput } from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommandInput, LaunchAppCommandOutput } from "./commands/LaunchAppCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import { PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput } from "./commands/PutAppLaunchConfigurationCommand";
import { PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput } from "./commands/PutAppReplicationConfigurationCommand";
import { StartAppReplicationCommandInput, StartAppReplicationCommandOutput } from "./commands/StartAppReplicationCommand";
import { StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput } from "./commands/StartOnDemandReplicationRunCommand";
import { StopAppReplicationCommandInput, StopAppReplicationCommandOutput } from "./commands/StopAppReplicationCommand";
import { TerminateAppCommandInput, TerminateAppCommandOutput } from "./commands/TerminateAppCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import { UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput } from "./commands/UpdateReplicationJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AAWS Sever Migration Service</fullname>
 *         <p>This is the <i>AWS Sever Migration Service API Reference</i>. It provides descriptions,
 *             syntax, and usage examples for each of the actions and data types for the AWS Sever Migration Service
 *             (AWS SMS). The topic for each action shows the Query API request parameters and the XML
 *             response. You can also view the XML request elements in the WSDL.</p>
 *         <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to the
 *             programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
 *         <p>To learn more about the Server Migration Service, see the following resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://aws.amazon.com/server-migration-service/">AWS Sever Migration Service
 *                         product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html">AWS Sever Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export declare class SMS extends SMSClient {
    /**
     * <p>Creates an application. An application consists of one or more server groups. Each
     *             server group contain one or more servers.</p>
     */
    createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
    createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    createApp(args: CreateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    /**
     * <p>Creates a replication job. The replication job schedules periodic replication runs
     *             to replicate your server to AWS. Each replication run creates an Amazon Machine Image
     *             (AMI).</p>
     */
    createReplicationJob(args: CreateReplicationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationJobCommandOutput>;
    createReplicationJob(args: CreateReplicationJobCommandInput, cb: (err: any, data?: CreateReplicationJobCommandOutput) => void): void;
    createReplicationJob(args: CreateReplicationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationJobCommandOutput) => void): void;
    /**
     * <p>Deletes an existing application. Optionally deletes the launched stack associated with
     *             the application and all AWS SMS replication jobs for servers in the application.</p>
     */
    deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
    deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    deleteApp(args: DeleteAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    /**
     * <p>Deletes existing launch configuration for an application.</p>
     */
    deleteAppLaunchConfiguration(args: DeleteAppLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppLaunchConfigurationCommandOutput>;
    deleteAppLaunchConfiguration(args: DeleteAppLaunchConfigurationCommandInput, cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void): void;
    deleteAppLaunchConfiguration(args: DeleteAppLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes existing replication configuration for an application.</p>
     */
    deleteAppReplicationConfiguration(args: DeleteAppReplicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppReplicationConfigurationCommandOutput>;
    deleteAppReplicationConfiguration(args: DeleteAppReplicationConfigurationCommandInput, cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void): void;
    deleteAppReplicationConfiguration(args: DeleteAppReplicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppReplicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified replication job.</p>
     *         <p>After you delete a replication job, there are no further replication runs. AWS
     *             deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created
     *             by the replication runs are not deleted.</p>
     */
    deleteReplicationJob(args: DeleteReplicationJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationJobCommandOutput>;
    deleteReplicationJob(args: DeleteReplicationJobCommandInput, cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void): void;
    deleteReplicationJob(args: DeleteReplicationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationJobCommandOutput) => void): void;
    /**
     * <p>Deletes all servers from your server catalog.</p>
     */
    deleteServerCatalog(args: DeleteServerCatalogCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServerCatalogCommandOutput>;
    deleteServerCatalog(args: DeleteServerCatalogCommandInput, cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void): void;
    deleteServerCatalog(args: DeleteServerCatalogCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServerCatalogCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified connector from AWS SMS.</p>
     *         <p>After you disassociate a connector, it is no longer available to support
     *             replication jobs.</p>
     */
    disassociateConnector(args: DisassociateConnectorCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateConnectorCommandOutput>;
    disassociateConnector(args: DisassociateConnectorCommandInput, cb: (err: any, data?: DisassociateConnectorCommandOutput) => void): void;
    disassociateConnector(args: DisassociateConnectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateConnectorCommandOutput) => void): void;
    /**
     * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
     *             object in the customer’s Amazon S3 bucket.</p>
     */
    generateChangeSet(args: GenerateChangeSetCommandInput, options?: __HttpHandlerOptions): Promise<GenerateChangeSetCommandOutput>;
    generateChangeSet(args: GenerateChangeSetCommandInput, cb: (err: any, data?: GenerateChangeSetCommandOutput) => void): void;
    generateChangeSet(args: GenerateChangeSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateChangeSetCommandOutput) => void): void;
    /**
     * <p>Generates an Amazon CloudFormation template based on the current launch configuration and writes it to
     *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
     */
    generateTemplate(args: GenerateTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GenerateTemplateCommandOutput>;
    generateTemplate(args: GenerateTemplateCommandInput, cb: (err: any, data?: GenerateTemplateCommandOutput) => void): void;
    generateTemplate(args: GenerateTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieve information about an application.</p>
     */
    getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
    getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
    getApp(args: GetAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAppCommandOutput) => void): void;
    /**
     * <p>Retrieves the application launch configuration associated with an application.</p>
     */
    getAppLaunchConfiguration(args: GetAppLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetAppLaunchConfigurationCommandOutput>;
    getAppLaunchConfiguration(args: GetAppLaunchConfigurationCommandInput, cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void): void;
    getAppLaunchConfiguration(args: GetAppLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAppLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves an application replication configuration associatd with an
     *             application.</p>
     */
    getAppReplicationConfiguration(args: GetAppReplicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetAppReplicationConfigurationCommandOutput>;
    getAppReplicationConfiguration(args: GetAppReplicationConfigurationCommandInput, cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void): void;
    getAppReplicationConfiguration(args: GetAppReplicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAppReplicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Describes the connectors registered with the AWS SMS.</p>
     */
    getConnectors(args: GetConnectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorsCommandOutput>;
    getConnectors(args: GetConnectorsCommandInput, cb: (err: any, data?: GetConnectorsCommandOutput) => void): void;
    getConnectors(args: GetConnectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectorsCommandOutput) => void): void;
    /**
     * <p>Describes the specified replication job or all of your replication jobs.</p>
     */
    getReplicationJobs(args: GetReplicationJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetReplicationJobsCommandOutput>;
    getReplicationJobs(args: GetReplicationJobsCommandInput, cb: (err: any, data?: GetReplicationJobsCommandOutput) => void): void;
    getReplicationJobs(args: GetReplicationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReplicationJobsCommandOutput) => void): void;
    /**
     * <p>Describes the replication runs for the specified replication job.</p>
     */
    getReplicationRuns(args: GetReplicationRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetReplicationRunsCommandOutput>;
    getReplicationRuns(args: GetReplicationRunsCommandInput, cb: (err: any, data?: GetReplicationRunsCommandOutput) => void): void;
    getReplicationRuns(args: GetReplicationRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReplicationRunsCommandOutput) => void): void;
    /**
     * <p>Describes the servers in your server catalog.</p>
     *         <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
     */
    getServers(args: GetServersCommandInput, options?: __HttpHandlerOptions): Promise<GetServersCommandOutput>;
    getServers(args: GetServersCommandInput, cb: (err: any, data?: GetServersCommandOutput) => void): void;
    getServers(args: GetServersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServersCommandOutput) => void): void;
    /**
     * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
     *             monitoring all servers that you want to import.</p>
     *         <p>This call returns immediately, but might take additional time to retrieve all the
     *             servers.</p>
     */
    importServerCatalog(args: ImportServerCatalogCommandInput, options?: __HttpHandlerOptions): Promise<ImportServerCatalogCommandOutput>;
    importServerCatalog(args: ImportServerCatalogCommandInput, cb: (err: any, data?: ImportServerCatalogCommandOutput) => void): void;
    importServerCatalog(args: ImportServerCatalogCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportServerCatalogCommandOutput) => void): void;
    /**
     * <p>Launches an application stack.</p>
     */
    launchApp(args: LaunchAppCommandInput, options?: __HttpHandlerOptions): Promise<LaunchAppCommandOutput>;
    launchApp(args: LaunchAppCommandInput, cb: (err: any, data?: LaunchAppCommandOutput) => void): void;
    launchApp(args: LaunchAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LaunchAppCommandOutput) => void): void;
    /**
     * <p>Returns a list of summaries for all applications.</p>
     */
    listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
    listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    listApps(args: ListAppsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    /**
     * <p>Creates a launch configuration for an application.</p>
     */
    putAppLaunchConfiguration(args: PutAppLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutAppLaunchConfigurationCommandOutput>;
    putAppLaunchConfiguration(args: PutAppLaunchConfigurationCommandInput, cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void): void;
    putAppLaunchConfiguration(args: PutAppLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAppLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates or updates a replication configuration for an application.</p>
     */
    putAppReplicationConfiguration(args: PutAppReplicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutAppReplicationConfigurationCommandOutput>;
    putAppReplicationConfiguration(args: PutAppReplicationConfigurationCommandInput, cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void): void;
    putAppReplicationConfiguration(args: PutAppReplicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAppReplicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Starts replicating an application.</p>
     */
    startAppReplication(args: StartAppReplicationCommandInput, options?: __HttpHandlerOptions): Promise<StartAppReplicationCommandOutput>;
    startAppReplication(args: StartAppReplicationCommandInput, cb: (err: any, data?: StartAppReplicationCommandOutput) => void): void;
    startAppReplication(args: StartAppReplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAppReplicationCommandOutput) => void): void;
    /**
     * <p>Starts an on-demand replication run for the specified replication job. This
     *             replication run starts immediately. This replication run is in addition to the ones
     *             already scheduled.</p>
     *         <p>There is a limit on the number of on-demand replications runs you can request in a
     *             24-hour period.</p>
     */
    startOnDemandReplicationRun(args: StartOnDemandReplicationRunCommandInput, options?: __HttpHandlerOptions): Promise<StartOnDemandReplicationRunCommandOutput>;
    startOnDemandReplicationRun(args: StartOnDemandReplicationRunCommandInput, cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void): void;
    startOnDemandReplicationRun(args: StartOnDemandReplicationRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartOnDemandReplicationRunCommandOutput) => void): void;
    /**
     * <p>Stops replicating an application.</p>
     */
    stopAppReplication(args: StopAppReplicationCommandInput, options?: __HttpHandlerOptions): Promise<StopAppReplicationCommandOutput>;
    stopAppReplication(args: StopAppReplicationCommandInput, cb: (err: any, data?: StopAppReplicationCommandOutput) => void): void;
    stopAppReplication(args: StopAppReplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAppReplicationCommandOutput) => void): void;
    /**
     * <p>Terminates the stack for an application.</p>
     */
    terminateApp(args: TerminateAppCommandInput, options?: __HttpHandlerOptions): Promise<TerminateAppCommandOutput>;
    terminateApp(args: TerminateAppCommandInput, cb: (err: any, data?: TerminateAppCommandOutput) => void): void;
    terminateApp(args: TerminateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateAppCommandOutput) => void): void;
    /**
     * <p>Updates an application.</p>
     */
    updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
    updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
    updateApp(args: UpdateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
    /**
     * <p>Updates the specified settings for the specified replication job.</p>
     */
    updateReplicationJob(args: UpdateReplicationJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReplicationJobCommandOutput>;
    updateReplicationJob(args: UpdateReplicationJobCommandInput, cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void): void;
    updateReplicationJob(args: UpdateReplicationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReplicationJobCommandOutput) => void): void;
}
