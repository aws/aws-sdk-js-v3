import { CodeDeployClient } from "./CodeDeployClient";
import { AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput } from "./commands/AddTagsToOnPremisesInstancesCommand";
import { BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput } from "./commands/BatchGetApplicationRevisionsCommand";
import { BatchGetApplicationsCommandInput, BatchGetApplicationsCommandOutput } from "./commands/BatchGetApplicationsCommand";
import { BatchGetDeploymentGroupsCommandInput, BatchGetDeploymentGroupsCommandOutput } from "./commands/BatchGetDeploymentGroupsCommand";
import { BatchGetDeploymentInstancesCommandInput, BatchGetDeploymentInstancesCommandOutput } from "./commands/BatchGetDeploymentInstancesCommand";
import { BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput } from "./commands/BatchGetDeploymentTargetsCommand";
import { BatchGetDeploymentsCommandInput, BatchGetDeploymentsCommandOutput } from "./commands/BatchGetDeploymentsCommand";
import { BatchGetOnPremisesInstancesCommandInput, BatchGetOnPremisesInstancesCommandOutput } from "./commands/BatchGetOnPremisesInstancesCommand";
import { ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput } from "./commands/ContinueDeploymentCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput } from "./commands/CreateDeploymentConfigCommand";
import { CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput } from "./commands/CreateDeploymentGroupCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput } from "./commands/DeleteDeploymentConfigCommand";
import { DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput } from "./commands/DeleteDeploymentGroupCommand";
import { DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput } from "./commands/DeleteGitHubAccountTokenCommand";
import { DeregisterOnPremisesInstanceCommandInput, DeregisterOnPremisesInstanceCommandOutput } from "./commands/DeregisterOnPremisesInstanceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetApplicationRevisionCommandInput, GetApplicationRevisionCommandOutput } from "./commands/GetApplicationRevisionCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentConfigCommandInput, GetDeploymentConfigCommandOutput } from "./commands/GetDeploymentConfigCommand";
import { GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput } from "./commands/GetDeploymentGroupCommand";
import { GetDeploymentInstanceCommandInput, GetDeploymentInstanceCommandOutput } from "./commands/GetDeploymentInstanceCommand";
import { GetDeploymentTargetCommandInput, GetDeploymentTargetCommandOutput } from "./commands/GetDeploymentTargetCommand";
import { GetOnPremisesInstanceCommandInput, GetOnPremisesInstanceCommandOutput } from "./commands/GetOnPremisesInstanceCommand";
import { ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput } from "./commands/ListApplicationRevisionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput } from "./commands/ListDeploymentConfigsCommand";
import { ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput } from "./commands/ListDeploymentGroupsCommand";
import { ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput } from "./commands/ListDeploymentInstancesCommand";
import { ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput } from "./commands/ListDeploymentTargetsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import { ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput } from "./commands/ListGitHubAccountTokenNamesCommand";
import { ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput } from "./commands/ListOnPremisesInstancesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput } from "./commands/PutLifecycleEventHookExecutionStatusCommand";
import { RegisterApplicationRevisionCommandInput, RegisterApplicationRevisionCommandOutput } from "./commands/RegisterApplicationRevisionCommand";
import { RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput } from "./commands/RegisterOnPremisesInstanceCommand";
import { RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput } from "./commands/RemoveTagsFromOnPremisesInstancesCommand";
import { SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput } from "./commands/SkipWaitTimeForInstanceTerminationCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput } from "./commands/UpdateDeploymentGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS CodeDeploy</fullname>
 *         <p>AWS CodeDeploy is a deployment service that automates application deployments to
 *             Amazon EC2 instances, on-premises instances running in your own facility, serverless
 *             AWS Lambda functions, or applications in an Amazon ECS service.</p>
 *         <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *             Lambda function, updated applications in an Amazon ECS service, code, web and configuration
 *             files, executables, packages, scripts,
 *             multimedia files, and so on. AWS CodeDeploy can deploy application content stored in
 *             Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to
 *             make changes to your existing code before you can use AWS CodeDeploy.</p>
 *         <p>AWS CodeDeploy makes it easier for you to rapidly release new features, helps you
 *             avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Components</b>
 *         </p>
 *         <p>Use the information in this guide to help you work with the following AWS CodeDeploy
 *             components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. AWS CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how to route
 *                     traffic to a new version of a Lambda function. An Amazon ECS deployment group
 *                     specifies the service created in Amazon ECS to deploy, a load balancer, and a
 *                     listener to reroute production traffic to an updated containerized application.
 *                     An EC2/On-premises deployment group contains individually tagged instances,
 *                     Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment
 *                     groups can specify optional trigger, alarm, and rollback settings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by AWS CodeDeploy
 *                     during a deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an Amazon ECS
 *                     service, or of installing content on one or more instances. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Application revisions</b>: For an AWS Lambda
 *                     deployment, this is an AppSpec file that specifies the Lambda function to be
 *                     updated and one or more functions to validate deployment lifecycle events. For
 *                     an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS
 *                     task definition, container, and port where production traffic is rerouted. For
 *                     an EC2/On-premises deployment, this is an archive file that contains source
 *                     content—source code, webpages, executable files, and deployment scripts—along
 *                     with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub
 *                     repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3
 *                     object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *         <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for AWS CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get details about
 *             Amazon ECS service deployments.</p>
 *         <p>
 *             <b>AWS CodeDeploy Information Resources</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">AWS CodeDeploy
 *                         User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">AWS
 *                         CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">AWS
 *                         CLI Reference for AWS CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">AWS CodeDeploy
 *                         Developer Forum</a>
 *                 </p>
 *             </li>
 *          </ul>
 */
export declare class CodeDeploy extends CodeDeployClient {
    /**
     * <p>Adds tags to on-premises instances.</p>
     */
    addTagsToOnPremisesInstances(args: AddTagsToOnPremisesInstancesCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToOnPremisesInstancesCommandOutput>;
    addTagsToOnPremisesInstances(args: AddTagsToOnPremisesInstancesCommandInput, cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void): void;
    addTagsToOnPremisesInstances(args: AddTagsToOnPremisesInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.</p>
     */
    batchGetApplicationRevisions(args: BatchGetApplicationRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetApplicationRevisionsCommandOutput>;
    batchGetApplicationRevisions(args: BatchGetApplicationRevisionsCommandInput, cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void): void;
    batchGetApplicationRevisions(args: BatchGetApplicationRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more applications. The maximum number of applications that can be returned is 25.</p>
     */
    batchGetApplications(args: BatchGetApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetApplicationsCommandOutput>;
    batchGetApplications(args: BatchGetApplicationsCommandInput, cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void): void;
    batchGetApplications(args: BatchGetApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more deployment groups.</p>
     */
    batchGetDeploymentGroups(args: BatchGetDeploymentGroupsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDeploymentGroupsCommandOutput>;
    batchGetDeploymentGroups(args: BatchGetDeploymentGroupsCommandInput, cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void): void;
    batchGetDeploymentGroups(args: BatchGetDeploymentGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void): void;
    /**
     * <note>
     *             <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code>
     *                 instead. </p>
     *         </note>
     *         <p> Returns an array of one or more instances associated with a deployment. This method works with
     *             EC2/On-premises and AWS Lambda compute platforms. The newer
     *                 <code>BatchGetDeploymentTargets</code> works with all compute platforms.
     *             The maximum number of instances that can be returned is 25.</p>
     */
    batchGetDeploymentInstances(args: BatchGetDeploymentInstancesCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDeploymentInstancesCommandOutput>;
    batchGetDeploymentInstances(args: BatchGetDeploymentInstancesCommandInput, cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void): void;
    batchGetDeploymentInstances(args: BatchGetDeploymentInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void): void;
    /**
     * <p> Returns an array of one or more targets associated with a deployment. This method works with all
     *             compute types and should be used instead of the deprecated
     *             <code>BatchGetDeploymentInstances</code>.
     *             The maximum number of targets that can be returned is 25.</p>
     *         <p> The type of targets returned depends on the deployment's compute platform: </p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <b>EC2/On-premises</b>: Information about EC2 instance
     *                     targets. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <b>AWS Lambda</b>: Information about Lambda functions
     *                     targets. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <b>Amazon ECS</b>: Information about Amazon ECS
     *                     service targets. </p>
     *             </li>
     *          </ul>
     */
    batchGetDeploymentTargets(args: BatchGetDeploymentTargetsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDeploymentTargetsCommandOutput>;
    batchGetDeploymentTargets(args: BatchGetDeploymentTargetsCommandInput, cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void): void;
    batchGetDeploymentTargets(args: BatchGetDeploymentTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.</p>
     */
    batchGetDeployments(args: BatchGetDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetDeploymentsCommandOutput>;
    batchGetDeployments(args: BatchGetDeploymentsCommandInput, cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void): void;
    batchGetDeployments(args: BatchGetDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.</p>
     */
    batchGetOnPremisesInstances(args: BatchGetOnPremisesInstancesCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetOnPremisesInstancesCommandOutput>;
    batchGetOnPremisesInstances(args: BatchGetOnPremisesInstancesCommandInput, cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void): void;
    batchGetOnPremisesInstances(args: BatchGetOnPremisesInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void): void;
    /**
     * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
     *             the original environment to instances in the replacement environment without waiting for
     *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
     *             instances in the replacement environment with the load balancer, can start as soon as
     *             all instances have a status of Ready.) </p>
     */
    continueDeployment(args: ContinueDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<ContinueDeploymentCommandOutput>;
    continueDeployment(args: ContinueDeploymentCommandInput, cb: (err: any, data?: ContinueDeploymentCommandOutput) => void): void;
    continueDeployment(args: ContinueDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ContinueDeploymentCommandOutput) => void): void;
    /**
     * <p>Creates an application.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Deploys an application revision through the specified deployment group.</p>
     */
    createDeployment(args: CreateDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentCommandOutput>;
    createDeployment(args: CreateDeploymentCommandInput, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    createDeployment(args: CreateDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentCommandOutput) => void): void;
    /**
     * <p> Creates a deployment configuration. </p>
     */
    createDeploymentConfig(args: CreateDeploymentConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentConfigCommandOutput>;
    createDeploymentConfig(args: CreateDeploymentConfigCommandInput, cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void): void;
    createDeploymentConfig(args: CreateDeploymentConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void): void;
    /**
     * <p>Creates a deployment group to which application revisions are deployed.</p>
     */
    createDeploymentGroup(args: CreateDeploymentGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentGroupCommandOutput>;
    createDeploymentGroup(args: CreateDeploymentGroupCommandInput, cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void): void;
    createDeploymentGroup(args: CreateDeploymentGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an application.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes a deployment configuration.</p>
     *         <note>
     *             <p>A deployment configuration cannot be deleted if it is currently in use. Predefined
     *                 configurations cannot be deleted.</p>
     *         </note>
     */
    deleteDeploymentConfig(args: DeleteDeploymentConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeploymentConfigCommandOutput>;
    deleteDeploymentConfig(args: DeleteDeploymentConfigCommandInput, cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void): void;
    deleteDeploymentConfig(args: DeleteDeploymentConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void): void;
    /**
     * <p>Deletes a deployment group.</p>
     */
    deleteDeploymentGroup(args: DeleteDeploymentGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeploymentGroupCommandOutput>;
    deleteDeploymentGroup(args: DeleteDeploymentGroupCommandInput, cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void): void;
    deleteDeploymentGroup(args: DeleteDeploymentGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a GitHub account connection.</p>
     */
    deleteGitHubAccountToken(args: DeleteGitHubAccountTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGitHubAccountTokenCommandOutput>;
    deleteGitHubAccountToken(args: DeleteGitHubAccountTokenCommandInput, cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void): void;
    deleteGitHubAccountToken(args: DeleteGitHubAccountTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void): void;
    /**
     * <p>Deregisters an on-premises instance.</p>
     */
    deregisterOnPremisesInstance(args: DeregisterOnPremisesInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterOnPremisesInstanceCommandOutput>;
    deregisterOnPremisesInstance(args: DeregisterOnPremisesInstanceCommandInput, cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void): void;
    deregisterOnPremisesInstance(args: DeregisterOnPremisesInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void): void;
    /**
     * <p>Gets information about an application.</p>
     */
    getApplication(args: GetApplicationCommandInput, options?: __HttpHandlerOptions): Promise<GetApplicationCommandOutput>;
    getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    getApplication(args: GetApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
    /**
     * <p>Gets information about an application revision.</p>
     */
    getApplicationRevision(args: GetApplicationRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetApplicationRevisionCommandOutput>;
    getApplicationRevision(args: GetApplicationRevisionCommandInput, cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void): void;
    getApplicationRevision(args: GetApplicationRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void): void;
    /**
     * <p>Gets information about a deployment.</p>
     *         <note>
     *             <p>
     *                 The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null.
     *                 Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code>
     *                 object to get the content of the deployment’s AppSpec file.
     *             </p>
     *         </note>
     */
    getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
    getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
    getDeployment(args: GetDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
    /**
     * <p>Gets information about a deployment configuration.</p>
     */
    getDeploymentConfig(args: GetDeploymentConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentConfigCommandOutput>;
    getDeploymentConfig(args: GetDeploymentConfigCommandInput, cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void): void;
    getDeploymentConfig(args: GetDeploymentConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void): void;
    /**
     * <p>Gets information about a deployment group.</p>
     */
    getDeploymentGroup(args: GetDeploymentGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentGroupCommandOutput>;
    getDeploymentGroup(args: GetDeploymentGroupCommandInput, cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void): void;
    getDeploymentGroup(args: GetDeploymentGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void): void;
    /**
     * <p>Gets information about an instance as part of a deployment.</p>
     */
    getDeploymentInstance(args: GetDeploymentInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentInstanceCommandOutput>;
    getDeploymentInstance(args: GetDeploymentInstanceCommandInput, cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void): void;
    getDeploymentInstance(args: GetDeploymentInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void): void;
    /**
     * <p> Returns information about a deployment target. </p>
     */
    getDeploymentTarget(args: GetDeploymentTargetCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentTargetCommandOutput>;
    getDeploymentTarget(args: GetDeploymentTargetCommandInput, cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void): void;
    getDeploymentTarget(args: GetDeploymentTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void): void;
    /**
     * <p> Gets information about an on-premises instance. </p>
     */
    getOnPremisesInstance(args: GetOnPremisesInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetOnPremisesInstanceCommandOutput>;
    getOnPremisesInstance(args: GetOnPremisesInstanceCommandInput, cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void): void;
    getOnPremisesInstance(args: GetOnPremisesInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void): void;
    /**
     * <p>Lists information about revisions for an application.</p>
     */
    listApplicationRevisions(args: ListApplicationRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationRevisionsCommandOutput>;
    listApplicationRevisions(args: ListApplicationRevisionsCommandInput, cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void): void;
    listApplicationRevisions(args: ListApplicationRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void): void;
    /**
     * <p>Lists the applications registered with the IAM user or AWS account.</p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists the deployment configurations with the IAM user or AWS account.</p>
     */
    listDeploymentConfigs(args: ListDeploymentConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentConfigsCommandOutput>;
    listDeploymentConfigs(args: ListDeploymentConfigsCommandInput, cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void): void;
    listDeploymentConfigs(args: ListDeploymentConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void): void;
    /**
     * <p>Lists the deployment groups for an application registered with the IAM user or AWS
     *             account.</p>
     */
    listDeploymentGroups(args: ListDeploymentGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentGroupsCommandOutput>;
    listDeploymentGroups(args: ListDeploymentGroupsCommandInput, cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void): void;
    listDeploymentGroups(args: ListDeploymentGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void): void;
    /**
     * <note>
     *             <p> The newer BatchGetDeploymentTargets should be used instead because it works with
     *                 all compute types. <code>ListDeploymentInstances</code> throws an exception if it is
     *                 used with a compute platform other than EC2/On-premises or AWS Lambda. </p>
     *         </note>
     *         <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
     */
    listDeploymentInstances(args: ListDeploymentInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentInstancesCommandOutput>;
    listDeploymentInstances(args: ListDeploymentInstancesCommandInput, cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void): void;
    listDeploymentInstances(args: ListDeploymentInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void): void;
    /**
     * <p> Returns an array of target IDs that are associated a deployment. </p>
     */
    listDeploymentTargets(args: ListDeploymentTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentTargetsCommandOutput>;
    listDeploymentTargets(args: ListDeploymentTargetsCommandInput, cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void): void;
    listDeploymentTargets(args: ListDeploymentTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void): void;
    /**
     * <p>Lists the deployments in a deployment group for an application registered with the IAM
     *             user or AWS account.</p>
     */
    listDeployments(args: ListDeploymentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentsCommandOutput>;
    listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    listDeployments(args: ListDeploymentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
    /**
     * <p>Lists the names of stored connections to GitHub accounts.</p>
     */
    listGitHubAccountTokenNames(args: ListGitHubAccountTokenNamesCommandInput, options?: __HttpHandlerOptions): Promise<ListGitHubAccountTokenNamesCommandOutput>;
    listGitHubAccountTokenNames(args: ListGitHubAccountTokenNamesCommandInput, cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void): void;
    listGitHubAccountTokenNames(args: ListGitHubAccountTokenNamesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void): void;
    /**
     * <p>Gets a list of names for one or more on-premises instances.</p>
     *         <p>Unless otherwise specified, both registered and deregistered on-premises instance
     *             names are listed. To list only registered or deregistered on-premises instance names,
     *             use the registration status parameter.</p>
     */
    listOnPremisesInstances(args: ListOnPremisesInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListOnPremisesInstancesCommandOutput>;
    listOnPremisesInstances(args: ListOnPremisesInstancesCommandInput, cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void): void;
    listOnPremisesInstances(args: ListOnPremisesInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void): void;
    /**
     * <p>
     *             Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize
     *             your CodeDeploy resources.
     *         </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p> Sets the result of a Lambda validation function. The function validates one or both
     *             lifecycle events (<code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>)
     *             and returns <code>Succeeded</code> or <code>Failed</code>. </p>
     */
    putLifecycleEventHookExecutionStatus(args: PutLifecycleEventHookExecutionStatusCommandInput, options?: __HttpHandlerOptions): Promise<PutLifecycleEventHookExecutionStatusCommandOutput>;
    putLifecycleEventHookExecutionStatus(args: PutLifecycleEventHookExecutionStatusCommandInput, cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void): void;
    putLifecycleEventHookExecutionStatus(args: PutLifecycleEventHookExecutionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void): void;
    /**
     * <p>Registers with AWS CodeDeploy a revision for the specified application.</p>
     */
    registerApplicationRevision(args: RegisterApplicationRevisionCommandInput, options?: __HttpHandlerOptions): Promise<RegisterApplicationRevisionCommandOutput>;
    registerApplicationRevision(args: RegisterApplicationRevisionCommandInput, cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void): void;
    registerApplicationRevision(args: RegisterApplicationRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void): void;
    /**
     * <p>Registers an on-premises instance.</p>
     *         <note>
     *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request.
     *                 You cannot use both.</p>
     *         </note>
     */
    registerOnPremisesInstance(args: RegisterOnPremisesInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterOnPremisesInstanceCommandOutput>;
    registerOnPremisesInstance(args: RegisterOnPremisesInstanceCommandInput, cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void): void;
    registerOnPremisesInstance(args: RegisterOnPremisesInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from one or more on-premises instances.</p>
     */
    removeTagsFromOnPremisesInstances(args: RemoveTagsFromOnPremisesInstancesCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput>;
    removeTagsFromOnPremisesInstances(args: RemoveTagsFromOnPremisesInstancesCommandInput, cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void): void;
    removeTagsFromOnPremisesInstances(args: RemoveTagsFromOnPremisesInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void): void;
    /**
     * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
     *             instances immediately after the traffic routing is complete.</p>
     */
    skipWaitTimeForInstanceTermination(args: SkipWaitTimeForInstanceTerminationCommandInput, options?: __HttpHandlerOptions): Promise<SkipWaitTimeForInstanceTerminationCommandOutput>;
    skipWaitTimeForInstanceTermination(args: SkipWaitTimeForInstanceTerminationCommandInput, cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void): void;
    skipWaitTimeForInstanceTermination(args: SkipWaitTimeForInstanceTerminationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void): void;
    /**
     * <p>Attempts to stop an ongoing deployment.</p>
     */
    stopDeployment(args: StopDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<StopDeploymentCommandOutput>;
    stopDeployment(args: StopDeploymentCommandInput, cb: (err: any, data?: StopDeploymentCommandOutput) => void): void;
    stopDeployment(args: StopDeploymentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDeploymentCommandOutput) => void): void;
    /**
     * <p>
     *             Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter.
     *         </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>
     *             Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code>
     *             input parameter. The tags are identfied by the list of keys in the <code>TagKeys</code> input parameter.
     *         </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Changes the name of an application.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    /**
     * <p>Changes information about a deployment group.</p>
     */
    updateDeploymentGroup(args: UpdateDeploymentGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeploymentGroupCommandOutput>;
    updateDeploymentGroup(args: UpdateDeploymentGroupCommandInput, cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void): void;
    updateDeploymentGroup(args: UpdateDeploymentGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void): void;
}
