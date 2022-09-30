// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeDeployClient } from "./CodeDeployClient";
import {
  AddTagsToOnPremisesInstancesCommand,
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput,
} from "./commands/AddTagsToOnPremisesInstancesCommand";
import {
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput,
} from "./commands/BatchGetApplicationRevisionsCommand";
import {
  BatchGetApplicationsCommand,
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput,
} from "./commands/BatchGetApplicationsCommand";
import {
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput,
} from "./commands/BatchGetDeploymentGroupsCommand";
import {
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput,
} from "./commands/BatchGetDeploymentInstancesCommand";
import {
  BatchGetDeploymentsCommand,
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
} from "./commands/BatchGetDeploymentsCommand";
import {
  BatchGetDeploymentTargetsCommand,
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
} from "./commands/BatchGetDeploymentTargetsCommand";
import {
  BatchGetOnPremisesInstancesCommand,
  BatchGetOnPremisesInstancesCommandInput,
  BatchGetOnPremisesInstancesCommandOutput,
} from "./commands/BatchGetOnPremisesInstancesCommand";
import {
  ContinueDeploymentCommand,
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput,
} from "./commands/ContinueDeploymentCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDeploymentConfigCommand,
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
} from "./commands/CreateDeploymentConfigCommand";
import {
  CreateDeploymentGroupCommand,
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput,
} from "./commands/CreateDeploymentGroupCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteDeploymentConfigCommand,
  DeleteDeploymentConfigCommandInput,
  DeleteDeploymentConfigCommandOutput,
} from "./commands/DeleteDeploymentConfigCommand";
import {
  DeleteDeploymentGroupCommand,
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput,
} from "./commands/DeleteDeploymentGroupCommand";
import {
  DeleteGitHubAccountTokenCommand,
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
} from "./commands/DeleteGitHubAccountTokenCommand";
import {
  DeleteResourcesByExternalIdCommand,
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
} from "./commands/DeleteResourcesByExternalIdCommand";
import {
  DeregisterOnPremisesInstanceCommand,
  DeregisterOnPremisesInstanceCommandInput,
  DeregisterOnPremisesInstanceCommandOutput,
} from "./commands/DeregisterOnPremisesInstanceCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetApplicationRevisionCommand,
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput,
} from "./commands/GetApplicationRevisionCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentConfigCommand,
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput,
} from "./commands/GetDeploymentConfigCommand";
import {
  GetDeploymentGroupCommand,
  GetDeploymentGroupCommandInput,
  GetDeploymentGroupCommandOutput,
} from "./commands/GetDeploymentGroupCommand";
import {
  GetDeploymentInstanceCommand,
  GetDeploymentInstanceCommandInput,
  GetDeploymentInstanceCommandOutput,
} from "./commands/GetDeploymentInstanceCommand";
import {
  GetDeploymentTargetCommand,
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput,
} from "./commands/GetDeploymentTargetCommand";
import {
  GetOnPremisesInstanceCommand,
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput,
} from "./commands/GetOnPremisesInstanceCommand";
import {
  ListApplicationRevisionsCommand,
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "./commands/ListApplicationRevisionsCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "./commands/ListDeploymentConfigsCommand";
import {
  ListDeploymentGroupsCommand,
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "./commands/ListDeploymentGroupsCommand";
import {
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "./commands/ListDeploymentInstancesCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListDeploymentTargetsCommand,
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
} from "./commands/ListDeploymentTargetsCommand";
import {
  ListGitHubAccountTokenNamesCommand,
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
} from "./commands/ListGitHubAccountTokenNamesCommand";
import {
  ListOnPremisesInstancesCommand,
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
} from "./commands/ListOnPremisesInstancesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLifecycleEventHookExecutionStatusCommand,
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput,
} from "./commands/PutLifecycleEventHookExecutionStatusCommand";
import {
  RegisterApplicationRevisionCommand,
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput,
} from "./commands/RegisterApplicationRevisionCommand";
import {
  RegisterOnPremisesInstanceCommand,
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
} from "./commands/RegisterOnPremisesInstanceCommand";
import {
  RemoveTagsFromOnPremisesInstancesCommand,
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
} from "./commands/RemoveTagsFromOnPremisesInstancesCommand";
import {
  SkipWaitTimeForInstanceTerminationCommand,
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
} from "./commands/SkipWaitTimeForInstanceTerminationCommand";
import {
  StopDeploymentCommand,
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput,
} from "./commands/StopDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateDeploymentGroupCommand,
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
} from "./commands/UpdateDeploymentGroupCommand";

/**
 * <p>CodeDeploy is a deployment service that automates application deployments
 *             to Amazon EC2 instances, on-premises instances running in your own facility,
 *             serverless Lambda functions, or applications in an Amazon ECS
 *             service.</p>
 *         <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *                 Lambda function, updated applications in an Amazon ECS service,
 *             code, web and configuration files, executables, packages, scripts, multimedia files, and
 *             so on. CodeDeploy can deploy application content stored in Amazon S3
 *             buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes
 *             to your existing code before you can use CodeDeploy.</p>
 *         <p>CodeDeploy makes it easier for you to rapidly release new features, helps
 *             you avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *         <p>
 *             <b>CodeDeploy Components</b>
 *         </p>
 *         <p>Use the information in this guide to help you work with the following CodeDeploy components:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy
 *                     Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how
 *                     to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production
 *                     traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All
 *                     deployment groups can specify optional trigger, alarm, and rollback
 *                     settings.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an
 *                         Amazon ECS service, or of installing content on one or more
 *                     instances. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the
 *                         Lambda function to be updated and one or more functions to
 *                     validate deployment lifecycle events. For an Amazon ECS deployment, this
 *                     is an AppSpec file that specifies the Amazon ECS task definition,
 *                     container, and port where production traffic is rerouted. For an EC2/On-premises
 *                     deployment, this is an archive file that contains source content—source code,
 *                     webpages, executable files, and deployment scripts—along with an AppSpec file.
 *                     Revisions are stored in Amazon S3 buckets or GitHub repositories. For
 *                         Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *         <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get
 *             details about Amazon ECS service deployments.</p>
 *         <p>
 *             <b>CodeDeploy Information Resources</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a>
 *                 </p>
 *             </li>
 *          </ul>
 */
export class CodeDeploy extends CodeDeployClient {
  /**
   * <p>Adds tags to on-premises instances.</p>
   */
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToOnPremisesInstancesCommandOutput>;
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void
  ): void;
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void
  ): void;
  public addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToOnPremisesInstancesCommandOutput) => void
  ): Promise<AddTagsToOnPremisesInstancesCommandOutput> | void {
    const command = new AddTagsToOnPremisesInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more application revisions. The maximum number of
   *             application revisions that can be returned is 25.</p>
   */
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetApplicationRevisionsCommandOutput>;
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void
  ): void;
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void
  ): void;
  public batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetApplicationRevisionsCommandOutput) => void
  ): Promise<BatchGetApplicationRevisionsCommandOutput> | void {
    const command = new BatchGetApplicationRevisionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more applications. The maximum number of applications
   *             that can be returned is 100.</p>
   */
  public batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetApplicationsCommandOutput>;
  public batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void
  ): void;
  public batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetApplicationsCommandOutput) => void
  ): void;
  public batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetApplicationsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetApplicationsCommandOutput) => void
  ): Promise<BatchGetApplicationsCommandOutput> | void {
    const command = new BatchGetApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more deployment groups.</p>
   */
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentGroupsCommandOutput>;
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void
  ): void;
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void
  ): void;
  public batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDeploymentGroupsCommandOutput) => void
  ): Promise<BatchGetDeploymentGroupsCommandOutput> | void {
    const command = new BatchGetDeploymentGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <note>
   *             <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code>
   *                 instead. </p>
   *         </note>
   *         <p> Returns an array of one or more instances associated with a deployment. This method
   *             works with EC2/On-premises and Lambda compute platforms. The newer
   *                 <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum
   *             number of instances that can be returned is 25.</p>
   */
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentInstancesCommandOutput>;
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void
  ): void;
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void
  ): void;
  public batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDeploymentInstancesCommandOutput) => void
  ): Promise<BatchGetDeploymentInstancesCommandOutput> | void {
    const command = new BatchGetDeploymentInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more deployments. The maximum number of deployments that
   *             can be returned is 25.</p>
   */
  public batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentsCommandOutput>;
  public batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void
  ): void;
  public batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentsCommandOutput) => void
  ): void;
  public batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDeploymentsCommandOutput) => void
  ): Promise<BatchGetDeploymentsCommandOutput> | void {
    const command = new BatchGetDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns an array of one or more targets associated with a deployment. This method
   *             works with all compute types and should be used instead of the deprecated
   *                 <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be
   *             returned is 25.</p>
   *         <p> The type of targets returned depends on the deployment's compute platform or
   *             deployment method: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Lambda</b>: Information about
   *                         Lambda functions targets. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>CloudFormation</b>: Information about
   *                     targets of blue/green deployments initiated by a CloudFormation stack
   *                     update.</p>
   *             </li>
   *          </ul>
   */
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDeploymentTargetsCommandOutput>;
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void
  ): void;
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void
  ): void;
  public batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDeploymentTargetsCommandOutput) => void
  ): Promise<BatchGetDeploymentTargetsCommandOutput> | void {
    const command = new BatchGetDeploymentTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more on-premises instances. The maximum number of
   *             on-premises instances that can be returned is 25.</p>
   */
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetOnPremisesInstancesCommandOutput>;
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void
  ): void;
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void
  ): void;
  public batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetOnPremisesInstancesCommandOutput) => void
  ): Promise<BatchGetOnPremisesInstancesCommandOutput> | void {
    const command = new BatchGetOnPremisesInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
   *             the original environment to instances in the replacement environment without waiting for
   *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
   *             instances in the replacement environment with the load balancer, can start as soon as
   *             all instances have a status of Ready.) </p>
   */
  public continueDeployment(
    args: ContinueDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContinueDeploymentCommandOutput>;
  public continueDeployment(
    args: ContinueDeploymentCommandInput,
    cb: (err: any, data?: ContinueDeploymentCommandOutput) => void
  ): void;
  public continueDeployment(
    args: ContinueDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContinueDeploymentCommandOutput) => void
  ): void;
  public continueDeployment(
    args: ContinueDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ContinueDeploymentCommandOutput) => void),
    cb?: (err: any, data?: ContinueDeploymentCommandOutput) => void
  ): Promise<ContinueDeploymentCommandOutput> | void {
    const command = new ContinueDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an application.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deploys an application revision through the specified deployment group.</p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a deployment configuration. </p>
   */
  public createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentConfigCommandOutput>;
  public createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void
  ): void;
  public createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentConfigCommandOutput) => void
  ): void;
  public createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentConfigCommandOutput) => void
  ): Promise<CreateDeploymentConfigCommandOutput> | void {
    const command = new CreateDeploymentConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a deployment group to which application revisions are deployed.</p>
   */
  public createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentGroupCommandOutput>;
  public createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void
  ): void;
  public createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentGroupCommandOutput) => void
  ): void;
  public createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentGroupCommandOutput) => void
  ): Promise<CreateDeploymentGroupCommandOutput> | void {
    const command = new CreateDeploymentGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a deployment configuration.</p>
   *         <note>
   *             <p>A deployment configuration cannot be deleted if it is currently in use. Predefined
   *                 configurations cannot be deleted.</p>
   *         </note>
   */
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentConfigCommandOutput>;
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void
  ): void;
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void
  ): void;
  public deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeploymentConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeploymentConfigCommandOutput) => void
  ): Promise<DeleteDeploymentConfigCommandOutput> | void {
    const command = new DeleteDeploymentConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a deployment group.</p>
   */
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentGroupCommandOutput>;
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void
  ): void;
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void
  ): void;
  public deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeploymentGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeploymentGroupCommandOutput) => void
  ): Promise<DeleteDeploymentGroupCommandOutput> | void {
    const command = new DeleteDeploymentGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a GitHub account connection.</p>
   */
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGitHubAccountTokenCommandOutput>;
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void
  ): void;
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void
  ): void;
  public deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void),
    cb?: (err: any, data?: DeleteGitHubAccountTokenCommandOutput) => void
  ): Promise<DeleteGitHubAccountTokenCommandOutput> | void {
    const command = new DeleteGitHubAccountTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes resources linked to an external ID.</p>
   */
  public deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcesByExternalIdCommandOutput>;
  public deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    cb: (err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void
  ): void;
  public deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void
  ): void;
  public deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcesByExternalIdCommandOutput) => void
  ): Promise<DeleteResourcesByExternalIdCommandOutput> | void {
    const command = new DeleteResourcesByExternalIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters an on-premises instance.</p>
   */
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOnPremisesInstanceCommandOutput>;
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void
  ): void;
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void
  ): void;
  public deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterOnPremisesInstanceCommandOutput) => void
  ): Promise<DeregisterOnPremisesInstanceCommandOutput> | void {
    const command = new DeregisterOnPremisesInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an application.</p>
   */
  public getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  public getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationCommandOutput) => void
  ): Promise<GetApplicationCommandOutput> | void {
    const command = new GetApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an application revision.</p>
   */
  public getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationRevisionCommandOutput>;
  public getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void
  ): void;
  public getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationRevisionCommandOutput) => void
  ): void;
  public getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationRevisionCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationRevisionCommandOutput) => void
  ): Promise<GetApplicationRevisionCommandOutput> | void {
    const command = new GetApplicationRevisionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a deployment.</p>
   *         <note>
   *             <p> The <code>content</code> property of the <code>appSpecContent</code> object in
   *                 the returned revision is always null. Use <code>GetApplicationRevision</code> and
   *                 the <code>sha256</code> property of the returned <code>appSpecContent</code> object
   *                 to get the content of the deployment’s AppSpec file. </p>
   *         </note>
   */
  public getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  public getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentCommandOutput) => void
  ): Promise<GetDeploymentCommandOutput> | void {
    const command = new GetDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a deployment configuration.</p>
   */
  public getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentConfigCommandOutput>;
  public getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void
  ): void;
  public getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentConfigCommandOutput) => void
  ): void;
  public getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentConfigCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentConfigCommandOutput) => void
  ): Promise<GetDeploymentConfigCommandOutput> | void {
    const command = new GetDeploymentConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a deployment group.</p>
   */
  public getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentGroupCommandOutput>;
  public getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void
  ): void;
  public getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentGroupCommandOutput) => void
  ): void;
  public getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentGroupCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentGroupCommandOutput) => void
  ): Promise<GetDeploymentGroupCommandOutput> | void {
    const command = new GetDeploymentGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>Gets information about an instance as part of a deployment.</p>
   */
  public getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentInstanceCommandOutput>;
  public getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void
  ): void;
  public getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentInstanceCommandOutput) => void
  ): void;
  public getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentInstanceCommandOutput) => void
  ): Promise<GetDeploymentInstanceCommandOutput> | void {
    const command = new GetDeploymentInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns information about a deployment target. </p>
   */
  public getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentTargetCommandOutput>;
  public getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void
  ): void;
  public getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentTargetCommandOutput) => void
  ): void;
  public getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentTargetCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentTargetCommandOutput) => void
  ): Promise<GetDeploymentTargetCommandOutput> | void {
    const command = new GetDeploymentTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Gets information about an on-premises instance. </p>
   */
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOnPremisesInstanceCommandOutput>;
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void
  ): void;
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void
  ): void;
  public getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOnPremisesInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetOnPremisesInstanceCommandOutput) => void
  ): Promise<GetOnPremisesInstanceCommandOutput> | void {
    const command = new GetOnPremisesInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists information about revisions for an application.</p>
   */
  public listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationRevisionsCommandOutput>;
  public listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void
  ): void;
  public listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationRevisionsCommandOutput) => void
  ): void;
  public listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationRevisionsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationRevisionsCommandOutput) => void
  ): Promise<ListApplicationRevisionsCommandOutput> | void {
    const command = new ListApplicationRevisionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the applications registered with the IAM user or Amazon Web Services account.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the deployment configurations with the IAM user or Amazon Web Services account.</p>
   */
  public listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentConfigsCommandOutput>;
  public listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void
  ): void;
  public listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentConfigsCommandOutput) => void
  ): void;
  public listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentConfigsCommandOutput) => void
  ): Promise<ListDeploymentConfigsCommandOutput> | void {
    const command = new ListDeploymentConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the deployment groups for an application registered with the IAM
   *             user or Amazon Web Services account.</p>
   */
  public listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentGroupsCommandOutput>;
  public listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void
  ): void;
  public listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentGroupsCommandOutput) => void
  ): void;
  public listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentGroupsCommandOutput) => void
  ): Promise<ListDeploymentGroupsCommandOutput> | void {
    const command = new ListDeploymentGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <note>
   *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
   *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
   *                 exception if it is used with a compute platform other than EC2/On-premises or
   *                     Lambda. </p>
   *         </note>
   *         <p> Lists the instance for a deployment associated with the IAM user or
   *                 Amazon Web Services account. </p>
   */
  public listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentInstancesCommandOutput>;
  public listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void
  ): void;
  public listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentInstancesCommandOutput) => void
  ): void;
  public listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentInstancesCommandOutput) => void
  ): Promise<ListDeploymentInstancesCommandOutput> | void {
    const command = new ListDeploymentInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the deployments in a deployment group for an application registered with the
   *                 IAM user or Amazon Web Services account.</p>
   */
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): Promise<ListDeploymentsCommandOutput> | void {
    const command = new ListDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns an array of target IDs that are associated a deployment. </p>
   */
  public listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentTargetsCommandOutput>;
  public listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void
  ): void;
  public listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentTargetsCommandOutput) => void
  ): void;
  public listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentTargetsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentTargetsCommandOutput) => void
  ): Promise<ListDeploymentTargetsCommandOutput> | void {
    const command = new ListDeploymentTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the names of stored connections to GitHub accounts.</p>
   */
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGitHubAccountTokenNamesCommandOutput>;
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void
  ): void;
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void
  ): void;
  public listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void),
    cb?: (err: any, data?: ListGitHubAccountTokenNamesCommandOutput) => void
  ): Promise<ListGitHubAccountTokenNamesCommandOutput> | void {
    const command = new ListGitHubAccountTokenNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of names for one or more on-premises instances.</p>
   *         <p>Unless otherwise specified, both registered and deregistered on-premises instance
   *             names are listed. To list only registered or deregistered on-premises instance names,
   *             use the registration status parameter.</p>
   */
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOnPremisesInstancesCommandOutput>;
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void
  ): void;
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void
  ): void;
  public listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOnPremisesInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListOnPremisesInstancesCommandOutput) => void
  ): Promise<ListOnPremisesInstancesCommandOutput> | void {
    const command = new ListOnPremisesInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of tags for the resource identified by a specified Amazon Resource
   *             Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Sets the result of a Lambda validation function. The function validates
   *             lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available
   *             lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>.
   *             For Amazon ECS deployments, the available lifecycle hooks are
   *                 <code>BeforeInstall</code>, <code>AfterInstall</code>,
   *                 <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and
   *                 <code>AfterAllowTraffic</code>. Lambda validation functions return
   *                 <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and
   *                 <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.</p>
   */
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleEventHookExecutionStatusCommandOutput>;
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void
  ): void;
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void
  ): void;
  public putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void),
    cb?: (err: any, data?: PutLifecycleEventHookExecutionStatusCommandOutput) => void
  ): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> | void {
    const command = new PutLifecycleEventHookExecutionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers with CodeDeploy a revision for the specified application.</p>
   */
  public registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterApplicationRevisionCommandOutput>;
  public registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void
  ): void;
  public registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void
  ): void;
  public registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterApplicationRevisionCommandOutput) => void),
    cb?: (err: any, data?: RegisterApplicationRevisionCommandOutput) => void
  ): Promise<RegisterApplicationRevisionCommandOutput> | void {
    const command = new RegisterApplicationRevisionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an on-premises instance.</p>
   *         <note>
   *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p>
   *         </note>
   */
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOnPremisesInstanceCommandOutput>;
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void
  ): void;
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void
  ): void;
  public registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void),
    cb?: (err: any, data?: RegisterOnPremisesInstanceCommandOutput) => void
  ): Promise<RegisterOnPremisesInstanceCommandOutput> | void {
    const command = new RegisterOnPremisesInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from one or more on-premises instances.</p>
   */
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput>;
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void
  ): void;
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void
  ): void;
  public removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromOnPremisesInstancesCommandOutput) => void
  ): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> | void {
    const command = new RemoveTagsFromOnPremisesInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @deprecated
   *
   * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
   *             instances immediately after the traffic routing is complete.</p>
   */
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SkipWaitTimeForInstanceTerminationCommandOutput>;
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void
  ): void;
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void
  ): void;
  public skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void),
    cb?: (err: any, data?: SkipWaitTimeForInstanceTerminationCommandOutput) => void
  ): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> | void {
    const command = new SkipWaitTimeForInstanceTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to stop an ongoing deployment.</p>
   */
  public stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StopDeploymentCommandOutput) => void
  ): Promise<StopDeploymentCommandOutput> | void {
    const command = new StopDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Associates the list of tags in the input <code>Tags</code> parameter with the
   *             resource identified by the <code>ResourceArn</code> input parameter. </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Disassociates a resource from a list of tags. The resource is identified by the
   *                 <code>ResourceArn</code> input parameter. The tags are identified by the list of
   *             keys in the <code>TagKeys</code> input parameter. </p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the name of an application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes information about a deployment group.</p>
   */
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentGroupCommandOutput>;
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void
  ): void;
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void
  ): void;
  public updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeploymentGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeploymentGroupCommandOutput) => void
  ): Promise<UpdateDeploymentGroupCommandOutput> | void {
    const command = new UpdateDeploymentGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
