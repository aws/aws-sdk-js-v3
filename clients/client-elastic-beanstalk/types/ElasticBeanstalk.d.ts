import { ElasticBeanstalkClient } from "./ElasticBeanstalkClient";
import { AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput } from "./commands/AbortEnvironmentUpdateCommand";
import { ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput } from "./commands/ApplyEnvironmentManagedActionCommand";
import { CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput } from "./commands/CheckDNSAvailabilityCommand";
import { ComposeEnvironmentsCommandInput, ComposeEnvironmentsCommandOutput } from "./commands/ComposeEnvironmentsCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput } from "./commands/CreateApplicationVersionCommand";
import { CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput } from "./commands/CreateConfigurationTemplateCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import { CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput } from "./commands/CreatePlatformVersionCommand";
import { CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput } from "./commands/CreateStorageLocationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput } from "./commands/DeleteApplicationVersionCommand";
import { DeleteConfigurationTemplateCommandInput, DeleteConfigurationTemplateCommandOutput } from "./commands/DeleteConfigurationTemplateCommand";
import { DeleteEnvironmentConfigurationCommandInput, DeleteEnvironmentConfigurationCommandOutput } from "./commands/DeleteEnvironmentConfigurationCommand";
import { DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput } from "./commands/DeletePlatformVersionCommand";
import { DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput } from "./commands/DescribeAccountAttributesCommand";
import { DescribeApplicationVersionsCommandInput, DescribeApplicationVersionsCommandOutput } from "./commands/DescribeApplicationVersionsCommand";
import { DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput } from "./commands/DescribeApplicationsCommand";
import { DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput } from "./commands/DescribeConfigurationOptionsCommand";
import { DescribeConfigurationSettingsCommandInput, DescribeConfigurationSettingsCommandOutput } from "./commands/DescribeConfigurationSettingsCommand";
import { DescribeEnvironmentHealthCommandInput, DescribeEnvironmentHealthCommandOutput } from "./commands/DescribeEnvironmentHealthCommand";
import { DescribeEnvironmentManagedActionHistoryCommandInput, DescribeEnvironmentManagedActionHistoryCommandOutput } from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import { DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput } from "./commands/DescribeEnvironmentManagedActionsCommand";
import { DescribeEnvironmentResourcesCommandInput, DescribeEnvironmentResourcesCommandOutput } from "./commands/DescribeEnvironmentResourcesCommand";
import { DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput } from "./commands/DescribeEnvironmentsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeInstancesHealthCommandInput, DescribeInstancesHealthCommandOutput } from "./commands/DescribeInstancesHealthCommand";
import { DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput } from "./commands/DescribePlatformVersionCommand";
import { ListAvailableSolutionStacksCommandInput, ListAvailableSolutionStacksCommandOutput } from "./commands/ListAvailableSolutionStacksCommand";
import { ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput } from "./commands/ListPlatformVersionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput } from "./commands/RebuildEnvironmentCommand";
import { RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput } from "./commands/RequestEnvironmentInfoCommand";
import { RestartAppServerCommandInput, RestartAppServerCommandOutput } from "./commands/RestartAppServerCommand";
import { RetrieveEnvironmentInfoCommandInput, RetrieveEnvironmentInfoCommandOutput } from "./commands/RetrieveEnvironmentInfoCommand";
import { SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput } from "./commands/SwapEnvironmentCNAMEsCommand";
import { TerminateEnvironmentCommandInput, TerminateEnvironmentCommandOutput } from "./commands/TerminateEnvironmentCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput } from "./commands/UpdateApplicationResourceLifecycleCommand";
import { UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput } from "./commands/UpdateApplicationVersionCommand";
import { UpdateConfigurationTemplateCommandInput, UpdateConfigurationTemplateCommandOutput } from "./commands/UpdateConfigurationTemplateCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import { UpdateTagsForResourceCommandInput, UpdateTagsForResourceCommandOutput } from "./commands/UpdateTagsForResourceCommand";
import { ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput } from "./commands/ValidateConfigurationSettingsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *
 *
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
export declare class ElasticBeanstalk extends ElasticBeanstalkClient {
    /**
     * <p>Cancels in-progress environment configuration update or application version
     *       deployment.</p>
     */
    abortEnvironmentUpdate(args: AbortEnvironmentUpdateCommandInput, options?: __HttpHandlerOptions): Promise<AbortEnvironmentUpdateCommandOutput>;
    abortEnvironmentUpdate(args: AbortEnvironmentUpdateCommandInput, cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void): void;
    abortEnvironmentUpdate(args: AbortEnvironmentUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void): void;
    /**
     * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
     *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
     *         <a>DescribeEnvironmentManagedActions</a>.</p>
     */
    applyEnvironmentManagedAction(args: ApplyEnvironmentManagedActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyEnvironmentManagedActionCommandOutput>;
    applyEnvironmentManagedAction(args: ApplyEnvironmentManagedActionCommandInput, cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void): void;
    applyEnvironmentManagedAction(args: ApplyEnvironmentManagedActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void): void;
    /**
     * <p>Checks if the specified CNAME is available.</p>
     */
    checkDNSAvailability(args: CheckDNSAvailabilityCommandInput, options?: __HttpHandlerOptions): Promise<CheckDNSAvailabilityCommandOutput>;
    checkDNSAvailability(args: CheckDNSAvailabilityCommandInput, cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void): void;
    checkDNSAvailability(args: CheckDNSAvailabilityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void): void;
    /**
     * <p>Create or update a group of environments that each run a separate component of a single
     *       application. Takes a list of version labels that specify application source bundles for each
     *       of the environments to create or update. The name of each environment and other required
     *       information must be included in the source bundles in an environment manifest named
     *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
     *       for details.</p>
     */
    composeEnvironments(args: ComposeEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<ComposeEnvironmentsCommandOutput>;
    composeEnvironments(args: ComposeEnvironmentsCommandInput, cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void): void;
    composeEnvironments(args: ComposeEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void): void;
    /**
     * <p> Creates an application that has one configuration template named <code>default</code>
     *       and no application versions. </p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates an application version for the specified application. You can create an
     *       application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the
     *       output of an AWS CodeBuild build as follows:</p>
     *          <p>Specify a commit in an AWS CodeCommit repository with
     *         <code>SourceBuildInformation</code>.</p>
     *          <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and
     *         <code>BuildConfiguration</code>.</p>
     *          <p>Specify a source bundle in S3 with <code>SourceBundle</code>
     *          </p>
     *          <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the
     *       default sample application.</p>
     *          <note>
     *             <p>Once you create an application version with a specified Amazon S3 bucket and key
     *         location, you cannot change that Amazon S3 location. If you change the Amazon S3 location,
     *         you receive an exception when you attempt to launch an environment from the application
     *         version.</p>
     *          </note>
     */
    createApplicationVersion(args: CreateApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationVersionCommandOutput>;
    createApplicationVersion(args: CreateApplicationVersionCommandInput, cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void): void;
    createApplicationVersion(args: CreateApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Creates a configuration template. Templates are associated with a specific application
     *       and are used to deploy different versions of the application with the same configuration
     *       settings.</p>
     *          <p>Templates aren't associated with any environment. The <code>EnvironmentName</code>
     *       response element is always <code>null</code>.</p>
     *          <p>Related Topics</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>DescribeConfigurationOptions</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a>DescribeConfigurationSettings</a>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <a>ListAvailableSolutionStacks</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    createConfigurationTemplate(args: CreateConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationTemplateCommandOutput>;
    createConfigurationTemplate(args: CreateConfigurationTemplateCommandInput, cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void): void;
    createConfigurationTemplate(args: CreateConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void): void;
    /**
     * <p>Launches an environment for the specified application using the specified
     *       configuration.</p>
     */
    createEnvironment(args: CreateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateEnvironmentCommandOutput>;
    createEnvironment(args: CreateEnvironmentCommandInput, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    createEnvironment(args: CreateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Create a new version of your custom platform.</p>
     */
    createPlatformVersion(args: CreatePlatformVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreatePlatformVersionCommandOutput>;
    createPlatformVersion(args: CreatePlatformVersionCommandInput, cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void): void;
    createPlatformVersion(args: CreatePlatformVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void): void;
    /**
     * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
     *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
     *       first time you create an environment in a region. If the storage location already exists,
     *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
     *       bucket.</p>
     */
    createStorageLocation(args: CreateStorageLocationCommandInput, options?: __HttpHandlerOptions): Promise<CreateStorageLocationCommandOutput>;
    createStorageLocation(args: CreateStorageLocationCommandInput, cb: (err: any, data?: CreateStorageLocationCommandOutput) => void): void;
    createStorageLocation(args: CreateStorageLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateStorageLocationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified application along with all associated versions and
     *       configurations. The application versions will not be deleted from your Amazon S3
     *       bucket.</p>
     *          <note>
     *             <p>You cannot delete an application that has a running environment.</p>
     *          </note>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified version from the specified application.</p>
     *          <note>
     *             <p>You cannot delete an application version that is associated with a running
     *         environment.</p>
     *          </note>
     */
    deleteApplicationVersion(args: DeleteApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationVersionCommandOutput>;
    deleteApplicationVersion(args: DeleteApplicationVersionCommandInput, cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void): void;
    deleteApplicationVersion(args: DeleteApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified configuration template.</p>
     *          <note>
     *             <p>When you launch an environment using a configuration template, the environment gets a
     *         copy of the template. You can delete or modify the environment's copy of the template
     *         without affecting the running environment.</p>
     *          </note>
     */
    deleteConfigurationTemplate(args: DeleteConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationTemplateCommandOutput>;
    deleteConfigurationTemplate(args: DeleteConfigurationTemplateCommandInput, cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void): void;
    deleteConfigurationTemplate(args: DeleteConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the draft configuration associated with the running environment.</p>
     *          <p>Updating a running environment with any configuration changes creates a draft
     *       configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update
     *       fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the
     *       deployment is in process or has failed. The draft configuration remains in existence until it
     *       is deleted with this action.</p>
     */
    deleteEnvironmentConfiguration(args: DeleteEnvironmentConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEnvironmentConfigurationCommandOutput>;
    deleteEnvironmentConfiguration(args: DeleteEnvironmentConfigurationCommandInput, cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void): void;
    deleteEnvironmentConfiguration(args: DeleteEnvironmentConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified version of a custom platform.</p>
     */
    deletePlatformVersion(args: DeletePlatformVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeletePlatformVersionCommandOutput>;
    deletePlatformVersion(args: DeletePlatformVersionCommandInput, cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void): void;
    deletePlatformVersion(args: DeletePlatformVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void): void;
    /**
     * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS
     *       account.</p>
     *          <p>The result currently has one set of attributes—resource quotas.</p>
     */
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAttributesCommandOutput>;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    /**
     * <p>Retrieve a list of application versions.</p>
     */
    describeApplicationVersions(args: DescribeApplicationVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationVersionsCommandOutput>;
    describeApplicationVersions(args: DescribeApplicationVersionsCommandInput, cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void): void;
    describeApplicationVersions(args: DescribeApplicationVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void): void;
    /**
     * <p>Returns the descriptions of existing applications.</p>
     */
    describeApplications(args: DescribeApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationsCommandOutput>;
    describeApplications(args: DescribeApplicationsCommandInput, cb: (err: any, data?: DescribeApplicationsCommandOutput) => void): void;
    describeApplications(args: DescribeApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationsCommandOutput) => void): void;
    /**
     * <p>Describes the configuration options that are used in a particular configuration
     *       template or environment, or that a specified solution stack defines. The description includes
     *       the values the options, their default values, and an indication of the required action on a
     *       running environment if an option value is changed.</p>
     */
    describeConfigurationOptions(args: DescribeConfigurationOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationOptionsCommandOutput>;
    describeConfigurationOptions(args: DescribeConfigurationOptionsCommandInput, cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void): void;
    describeConfigurationOptions(args: DescribeConfigurationOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a description of the settings for the specified configuration set, that is,
     *       either a configuration template or the configuration set associated with a running
     *       environment.</p>
     *          <p>When describing the settings for the configuration set associated with a running
     *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
     *       configuration set, and the other is a draft configuration of an environment that is either in
     *       the process of deployment or that failed to deploy.</p>
     *          <p>Related Topics</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>DeleteEnvironmentConfiguration</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeConfigurationSettings(args: DescribeConfigurationSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationSettingsCommandOutput>;
    describeConfigurationSettings(args: DescribeConfigurationSettingsCommandInput, cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void): void;
    describeConfigurationSettings(args: DescribeConfigurationSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void): void;
    /**
     * <p>Returns information about the overall health of the specified environment. The
     *         <b>DescribeEnvironmentHealth</b> operation is only available with
     *       AWS Elastic Beanstalk Enhanced Health.</p>
     */
    describeEnvironmentHealth(args: DescribeEnvironmentHealthCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentHealthCommandOutput>;
    describeEnvironmentHealth(args: DescribeEnvironmentHealthCommandInput, cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void): void;
    describeEnvironmentHealth(args: DescribeEnvironmentHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void): void;
    /**
     * <p>Lists an environment's completed and failed managed actions.</p>
     */
    describeEnvironmentManagedActionHistory(args: DescribeEnvironmentManagedActionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput>;
    describeEnvironmentManagedActionHistory(args: DescribeEnvironmentManagedActionHistoryCommandInput, cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void): void;
    describeEnvironmentManagedActionHistory(args: DescribeEnvironmentManagedActionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void): void;
    /**
     * <p>Lists an environment's upcoming and in-progress managed actions.</p>
     */
    describeEnvironmentManagedActions(args: DescribeEnvironmentManagedActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentManagedActionsCommandOutput>;
    describeEnvironmentManagedActions(args: DescribeEnvironmentManagedActionsCommandInput, cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void): void;
    describeEnvironmentManagedActions(args: DescribeEnvironmentManagedActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void): void;
    /**
     * <p>Returns AWS resources for this environment.</p>
     */
    describeEnvironmentResources(args: DescribeEnvironmentResourcesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentResourcesCommandOutput>;
    describeEnvironmentResources(args: DescribeEnvironmentResourcesCommandInput, cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void): void;
    describeEnvironmentResources(args: DescribeEnvironmentResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void): void;
    /**
     * <p>Returns descriptions for existing environments.</p>
     */
    describeEnvironments(args: DescribeEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentsCommandOutput>;
    describeEnvironments(args: DescribeEnvironmentsCommandInput, cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void): void;
    describeEnvironments(args: DescribeEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void): void;
    /**
     * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p>
     *          <note>
     *             <p>This action returns the most recent 1,000 events from the specified
     *           <code>NextToken</code>.</p>
     *          </note>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Retrieves detailed information about the health of instances in your AWS Elastic
     *       Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health
     *       reporting</a>.</p>
     */
    describeInstancesHealth(args: DescribeInstancesHealthCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstancesHealthCommandOutput>;
    describeInstancesHealth(args: DescribeInstancesHealthCommandInput, cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void): void;
    describeInstancesHealth(args: DescribeInstancesHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void): void;
    /**
     * <p>Describes the version of the platform.</p>
     */
    describePlatformVersion(args: DescribePlatformVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribePlatformVersionCommandOutput>;
    describePlatformVersion(args: DescribePlatformVersionCommandInput, cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void): void;
    describePlatformVersion(args: DescribePlatformVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available solution stack names, with the public version first and
     *       then in reverse chronological order.</p>
     */
    listAvailableSolutionStacks(args: ListAvailableSolutionStacksCommandInput, options?: __HttpHandlerOptions): Promise<ListAvailableSolutionStacksCommandOutput>;
    listAvailableSolutionStacks(args: ListAvailableSolutionStacksCommandInput, cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void): void;
    listAvailableSolutionStacks(args: ListAvailableSolutionStacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void): void;
    /**
     * <p>Lists the available platforms.</p>
     */
    listPlatformVersions(args: ListPlatformVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPlatformVersionsCommandOutput>;
    listPlatformVersions(args: ListPlatformVersionsCommandInput, cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void): void;
    listPlatformVersions(args: ListPlatformVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void): void;
    /**
     * <p>Returns the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p>
     *          <p>Currently, Elastic Beanstalk only supports tagging of Elastic Beanstalk environments. For details about environment tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.tagging.html">Tagging Resources in Your Elastic Beanstalk Environment</a>.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
     *       load balancer, etc.) for a specified environment and forces a restart.</p>
     */
    rebuildEnvironment(args: RebuildEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<RebuildEnvironmentCommandOutput>;
    rebuildEnvironment(args: RebuildEnvironmentCommandInput, cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void): void;
    rebuildEnvironment(args: RebuildEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void): void;
    /**
     * <p>Initiates a request to compile the specified type of information of the deployed
     *       environment.</p>
     *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
     *       the application server log files of every Amazon EC2 instance in your environment. </p>
     *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
     *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
     *       containers do not support bundle logs. </p>
     *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
     *          <p>Related Topics</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>RetrieveEnvironmentInfo</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    requestEnvironmentInfo(args: RequestEnvironmentInfoCommandInput, options?: __HttpHandlerOptions): Promise<RequestEnvironmentInfoCommandOutput>;
    requestEnvironmentInfo(args: RequestEnvironmentInfoCommandInput, cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void): void;
    requestEnvironmentInfo(args: RequestEnvironmentInfoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void): void;
    /**
     * <p>Causes the environment to restart the application container server running on each
     *       Amazon EC2 instance.</p>
     */
    restartAppServer(args: RestartAppServerCommandInput, options?: __HttpHandlerOptions): Promise<RestartAppServerCommandOutput>;
    restartAppServer(args: RestartAppServerCommandInput, cb: (err: any, data?: RestartAppServerCommandOutput) => void): void;
    restartAppServer(args: RestartAppServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestartAppServerCommandOutput) => void): void;
    /**
     * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
     *       request.</p>
     *          <p>Related Topics</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>RequestEnvironmentInfo</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    retrieveEnvironmentInfo(args: RetrieveEnvironmentInfoCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveEnvironmentInfoCommandOutput>;
    retrieveEnvironmentInfo(args: RetrieveEnvironmentInfoCommandInput, cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void): void;
    retrieveEnvironmentInfo(args: RetrieveEnvironmentInfoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void): void;
    /**
     * <p>Swaps the CNAMEs of two environments.</p>
     */
    swapEnvironmentCNAMEs(args: SwapEnvironmentCNAMEsCommandInput, options?: __HttpHandlerOptions): Promise<SwapEnvironmentCNAMEsCommandOutput>;
    swapEnvironmentCNAMEs(args: SwapEnvironmentCNAMEsCommandInput, cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void): void;
    swapEnvironmentCNAMEs(args: SwapEnvironmentCNAMEsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void): void;
    /**
     * <p>Terminates the specified environment.</p>
     */
    terminateEnvironment(args: TerminateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<TerminateEnvironmentCommandOutput>;
    terminateEnvironment(args: TerminateEnvironmentCommandInput, cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void): void;
    terminateEnvironment(args: TerminateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Updates the specified application to have the specified properties.</p>
     *          <note>
     *             <p>If a property (for example, <code>description</code>) is not provided, the value
     *         remains unchanged. To clear these properties, specify an empty string.</p>
     *          </note>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    /**
     * <p>Modifies lifecycle settings for an application.</p>
     */
    updateApplicationResourceLifecycle(args: UpdateApplicationResourceLifecycleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationResourceLifecycleCommandOutput>;
    updateApplicationResourceLifecycle(args: UpdateApplicationResourceLifecycleCommandInput, cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void): void;
    updateApplicationResourceLifecycle(args: UpdateApplicationResourceLifecycleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void): void;
    /**
     * <p>Updates the specified application version to have the specified properties.</p>
     *          <note>
     *             <p>If a property (for example, <code>description</code>) is not provided, the value
     *         remains unchanged. To clear properties, specify an empty string.</p>
     *          </note>
     */
    updateApplicationVersion(args: UpdateApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationVersionCommandOutput>;
    updateApplicationVersion(args: UpdateApplicationVersionCommandInput, cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void): void;
    updateApplicationVersion(args: UpdateApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Updates the specified configuration template to have the specified properties or
     *       configuration option values.</p>
     *          <note>
     *             <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value
     *         remains unchanged. To clear such properties, specify an empty string.</p>
     *          </note>
     *          <p>Related Topics</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <a>DescribeConfigurationOptions</a>
     *                </p>
     *             </li>
     *          </ul>
     */
    updateConfigurationTemplate(args: UpdateConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationTemplateCommandOutput>;
    updateConfigurationTemplate(args: UpdateConfigurationTemplateCommandInput, cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void): void;
    updateConfigurationTemplate(args: UpdateConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void): void;
    /**
     * <p>Updates the environment description, deploys a new application version, updates the
     *       configuration settings to an entirely new configuration template, or updates select
     *       configuration option values in the running environment.</p>
     *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
     *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
     *          <p> When updating the configuration settings to a new template or individual settings, a
     *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
     *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
     *       values. </p>
     */
    updateEnvironment(args: UpdateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnvironmentCommandOutput>;
    updateEnvironment(args: UpdateEnvironmentCommandInput, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    updateEnvironment(args: UpdateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
     *       for tags to add or update, and <code>TagsToRemove</code>.</p>
     *          <p>Currently, Elastic Beanstalk only supports tagging of Elastic Beanstalk environments. For details about environment tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.tagging.html">Tagging Resources in Your Elastic Beanstalk Environment</a>.</p>
     *          <p>If you create a custom IAM user policy to control permission to this operation, specify
     *       one of the following two virtual actions (or both) instead of the API operation name:</p>
     *          <dl>
     *             <dt>elasticbeanstalk:AddTags</dt>
     *             <dd>
     *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
     *           parameter.</p>
     *             </dd>
     *             <dt>elasticbeanstalk:RemoveTags</dt>
     *             <dd>
     *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
     *           parameter.</p>
     *             </dd>
     *          </dl>
     *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
     */
    updateTagsForResource(args: UpdateTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTagsForResourceCommandOutput>;
    updateTagsForResource(args: UpdateTagsForResourceCommandInput, cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void): void;
    updateTagsForResource(args: UpdateTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Takes a set of configuration settings and either a configuration template or
     *       environment, and determines whether those values are valid.</p>
     *          <p>This action returns a list of messages indicating any errors or warnings associated
     *       with the selection of option values.</p>
     */
    validateConfigurationSettings(args: ValidateConfigurationSettingsCommandInput, options?: __HttpHandlerOptions): Promise<ValidateConfigurationSettingsCommandOutput>;
    validateConfigurationSettings(args: ValidateConfigurationSettingsCommandInput, cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void): void;
    validateConfigurationSettings(args: ValidateConfigurationSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void): void;
}
