import { EMRClient } from "./EMRClient";
import {
  AddInstanceFleetCommand,
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput,
} from "./commands/AddInstanceFleetCommand";
import {
  AddInstanceGroupsCommand,
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
} from "./commands/AddInstanceGroupsCommand";
import {
  AddJobFlowStepsCommand,
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput,
} from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelStepsCommand, CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import {
  CreateStudioCommand,
  CreateStudioCommandInput,
  CreateStudioCommandOutput,
} from "./commands/CreateStudioCommand";
import {
  CreateStudioSessionMappingCommand,
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "./commands/CreateStudioSessionMappingCommand";
import {
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  DeleteStudioCommand,
  DeleteStudioCommandInput,
  DeleteStudioCommandOutput,
} from "./commands/DeleteStudioCommand";
import {
  DeleteStudioSessionMappingCommand,
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "./commands/DeleteStudioSessionMappingCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeJobFlowsCommand,
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput,
} from "./commands/DescribeJobFlowsCommand";
import {
  DescribeNotebookExecutionCommand,
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "./commands/DescribeNotebookExecutionCommand";
import {
  DescribeReleaseLabelCommand,
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
} from "./commands/DescribeReleaseLabelCommand";
import {
  DescribeSecurityConfigurationCommand,
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand";
import {
  DescribeStepCommand,
  DescribeStepCommandInput,
  DescribeStepCommandOutput,
} from "./commands/DescribeStepCommand";
import {
  DescribeStudioCommand,
  DescribeStudioCommandInput,
  DescribeStudioCommandOutput,
} from "./commands/DescribeStudioCommand";
import {
  GetAutoTerminationPolicyCommand,
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
} from "./commands/GetAutoTerminationPolicyCommand";
import {
  GetBlockPublicAccessConfigurationCommand,
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import {
  GetManagedScalingPolicyCommand,
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "./commands/GetManagedScalingPolicyCommand";
import {
  GetStudioSessionMappingCommand,
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "./commands/GetStudioSessionMappingCommand";
import {
  ListBootstrapActionsCommand,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "./commands/ListBootstrapActionsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListInstanceFleetsCommand,
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "./commands/ListInstanceFleetsCommand";
import {
  ListInstanceGroupsCommand,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "./commands/ListInstanceGroupsCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "./commands/ListNotebookExecutionsCommand";
import {
  ListReleaseLabelsCommand,
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
} from "./commands/ListReleaseLabelsCommand";
import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import {
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "./commands/ListStudioSessionMappingsCommand";
import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommand,
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "./commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommand,
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "./commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommand,
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "./commands/PutAutoScalingPolicyCommand";
import {
  PutAutoTerminationPolicyCommand,
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
} from "./commands/PutAutoTerminationPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommand,
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import {
  PutManagedScalingPolicyCommand,
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "./commands/PutManagedScalingPolicyCommand";
import {
  RemoveAutoScalingPolicyCommand,
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "./commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveAutoTerminationPolicyCommand,
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
} from "./commands/RemoveAutoTerminationPolicyCommand";
import {
  RemoveManagedScalingPolicyCommand,
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "./commands/RemoveManagedScalingPolicyCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommand, RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommand,
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "./commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommand,
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "./commands/SetVisibleToAllUsersCommand";
import {
  StartNotebookExecutionCommand,
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "./commands/StartNotebookExecutionCommand";
import {
  StopNotebookExecutionCommand,
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "./commands/StopNotebookExecutionCommand";
import {
  TerminateJobFlowsCommand,
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput,
} from "./commands/TerminateJobFlowsCommand";
import {
  UpdateStudioCommand,
  UpdateStudioCommandInput,
  UpdateStudioCommandOutput,
} from "./commands/UpdateStudioCommand";
import {
  UpdateStudioSessionMappingCommand,
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "./commands/UpdateStudioSessionMappingCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of data
 *          efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do
 *          tasks such as web indexing, data mining, log file analysis, machine learning, scientific
 *          simulation, and data warehouse management.</p>
 */
export class EMR extends EMRClient {
  /**
   * <p>Adds an instance fleet to a running cluster.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x.</p>
   *          </note>
   */
  public addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddInstanceFleetCommandOutput>;
  public addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    cb: (err: any, data?: AddInstanceFleetCommandOutput) => void
  ): void;
  public addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddInstanceFleetCommandOutput) => void
  ): void;
  public addInstanceFleet(
    args: AddInstanceFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddInstanceFleetCommandOutput) => void),
    cb?: (err: any, data?: AddInstanceFleetCommandOutput) => void
  ): Promise<AddInstanceFleetCommandOutput> | void {
    const command = new AddInstanceFleetCommand(args);
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
   * <p>Adds one or more instance groups to a running cluster.</p>
   */
  public addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddInstanceGroupsCommandOutput>;
  public addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void
  ): void;
  public addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void
  ): void;
  public addInstanceGroups(
    args: AddInstanceGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddInstanceGroupsCommandOutput) => void),
    cb?: (err: any, data?: AddInstanceGroupsCommandOutput) => void
  ): Promise<AddInstanceGroupsCommandOutput> | void {
    const command = new AddInstanceGroupsCommand(args);
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
   * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed
   *          in each job flow.</p>
   *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
   *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
   *          various ways, including using SSH to connect to the master node and submitting queries
   *          directly to the software running on the master node, such as Hive and Hadoop. For more
   *          information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
   *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
   *          <p>A step specifies the location of a JAR file stored either on the master node of the
   *          cluster or in Amazon S3. Each step is performed by the main function of the main class of
   *          the JAR file. The main class can be specified either in the manifest of the JAR or by using
   *          the MainFunction parameter of the step.</p>
   *          <p>Amazon EMR executes each step in the order listed. For a step to be considered complete,
   *          the main function must exit with a zero exit code and all Hadoop jobs started while the
   *          step was running must have completed and run successfully.</p>
   *          <p>You can only add steps to a cluster that is in one of the following states: STARTING,
   *          BOOTSTRAPPING, RUNNING, or WAITING.</p>
   */
  public addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddJobFlowStepsCommandOutput>;
  public addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): void;
  public addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): void;
  public addJobFlowSteps(
    args: AddJobFlowStepsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddJobFlowStepsCommandOutput) => void),
    cb?: (err: any, data?: AddJobFlowStepsCommandOutput) => void
  ): Promise<AddJobFlowStepsCommandOutput> | void {
    const command = new AddJobFlowStepsCommand(args);
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
   * <p>Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in
   *          various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
   *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR
   *          versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
   *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
   *          that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. </p>
   */
  public cancelSteps(args: CancelStepsCommandInput, options?: __HttpHandlerOptions): Promise<CancelStepsCommandOutput>;
  public cancelSteps(args: CancelStepsCommandInput, cb: (err: any, data?: CancelStepsCommandOutput) => void): void;
  public cancelSteps(
    args: CancelStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStepsCommandOutput) => void
  ): void;
  public cancelSteps(
    args: CancelStepsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelStepsCommandOutput) => void),
    cb?: (err: any, data?: CancelStepsCommandOutput) => void
  ): Promise<CancelStepsCommandOutput> | void {
    const command = new CancelStepsCommand(args);
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
   * <p>Creates a security configuration, which is stored in the service and can be specified
   *          when a cluster is created.</p>
   */
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecurityConfigurationCommandOutput>;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void
  ): Promise<CreateSecurityConfigurationCommandOutput> | void {
    const command = new CreateSecurityConfigurationCommand(args);
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
   * <p>Creates a new Amazon EMR Studio.</p>
   */
  public createStudio(
    args: CreateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioCommandOutput>;
  public createStudio(args: CreateStudioCommandInput, cb: (err: any, data?: CreateStudioCommandOutput) => void): void;
  public createStudio(
    args: CreateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioCommandOutput) => void
  ): void;
  public createStudio(
    args: CreateStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStudioCommandOutput) => void),
    cb?: (err: any, data?: CreateStudioCommandOutput) => void
  ): Promise<CreateStudioCommandOutput> | void {
    const command = new CreateStudioCommand(args);
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
   * <p>Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and
   *          applies a session policy to refine Studio permissions for that user or group.</p>
   */
  public createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioSessionMappingCommandOutput>;
  public createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    cb: (err: any, data?: CreateStudioSessionMappingCommandOutput) => void
  ): void;
  public createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioSessionMappingCommandOutput) => void
  ): void;
  public createStudioSessionMapping(
    args: CreateStudioSessionMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStudioSessionMappingCommandOutput) => void),
    cb?: (err: any, data?: CreateStudioSessionMappingCommandOutput) => void
  ): Promise<CreateStudioSessionMappingCommandOutput> | void {
    const command = new CreateStudioSessionMappingCommand(args);
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
   * <p>Deletes a security configuration.</p>
   */
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecurityConfigurationCommandOutput>;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void
  ): Promise<DeleteSecurityConfigurationCommandOutput> | void {
    const command = new DeleteSecurityConfigurationCommand(args);
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
   * <p>Removes an Amazon EMR Studio from the Studio metadata store.</p>
   */
  public deleteStudio(
    args: DeleteStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioCommandOutput>;
  public deleteStudio(args: DeleteStudioCommandInput, cb: (err: any, data?: DeleteStudioCommandOutput) => void): void;
  public deleteStudio(
    args: DeleteStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioCommandOutput) => void
  ): void;
  public deleteStudio(
    args: DeleteStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStudioCommandOutput) => void),
    cb?: (err: any, data?: DeleteStudioCommandOutput) => void
  ): Promise<DeleteStudioCommandOutput> | void {
    const command = new DeleteStudioCommand(args);
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
   * <p>Removes a user or group from an Amazon EMR Studio.</p>
   */
  public deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioSessionMappingCommandOutput>;
  public deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    cb: (err: any, data?: DeleteStudioSessionMappingCommandOutput) => void
  ): void;
  public deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioSessionMappingCommandOutput) => void
  ): void;
  public deleteStudioSessionMapping(
    args: DeleteStudioSessionMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStudioSessionMappingCommandOutput) => void),
    cb?: (err: any, data?: DeleteStudioSessionMappingCommandOutput) => void
  ): Promise<DeleteStudioSessionMappingCommandOutput> | void {
    const command = new DeleteStudioSessionMappingCommand(args);
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
   * <p>Provides cluster-level details including status, hardware and software configuration,
   *          VPC settings, and so on.</p>
   */
  public describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  public describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterCommandOutput) => void
  ): Promise<DescribeClusterCommandOutput> | void {
    const command = new DescribeClusterCommand(args);
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
   * <p>This API is no longer supported and will eventually be removed. We recommend you use
   *             <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p>
   *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters.
   *          The parameters can include a list of job flow IDs, job flow states, and restrictions on job
   *          flow creation date and time.</p>
   *          <p>Regardless of supplied parameters, only job flows created within the last two months are
   *          returned.</p>
   *          <p>If no parameters are supplied, then job flows matching either of the following criteria
   *          are returned:</p>
   *          <ul>
   *             <li>
   *                <p>Job flows created and completed in the last two weeks</p>
   *             </li>
   *             <li>
   *                <p> Job flows created within the last two months that are in one of the following
   *                states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
   *                   <code>STARTING</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
   */
  public describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobFlowsCommandOutput>;
  public describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void
  ): void;
  public describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void
  ): void;
  public describeJobFlows(
    args: DescribeJobFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobFlowsCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobFlowsCommandOutput) => void
  ): Promise<DescribeJobFlowsCommandOutput> | void {
    const command = new DescribeJobFlowsCommand(args);
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
   * <p>Provides details of a notebook execution.</p>
   */
  public describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookExecutionCommandOutput>;
  public describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    cb: (err: any, data?: DescribeNotebookExecutionCommandOutput) => void
  ): void;
  public describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotebookExecutionCommandOutput) => void
  ): void;
  public describeNotebookExecution(
    args: DescribeNotebookExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotebookExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotebookExecutionCommandOutput) => void
  ): Promise<DescribeNotebookExecutionCommandOutput> | void {
    const command = new DescribeNotebookExecutionCommand(args);
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
   * <p>Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.</p>
   */
  public describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReleaseLabelCommandOutput>;
  public describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    cb: (err: any, data?: DescribeReleaseLabelCommandOutput) => void
  ): void;
  public describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReleaseLabelCommandOutput) => void
  ): void;
  public describeReleaseLabel(
    args: DescribeReleaseLabelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReleaseLabelCommandOutput) => void),
    cb?: (err: any, data?: DescribeReleaseLabelCommandOutput) => void
  ): Promise<DescribeReleaseLabelCommandOutput> | void {
    const command = new DescribeReleaseLabelCommand(args);
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
   * <p>Provides the details of a security configuration by returning the configuration
   *          JSON.</p>
   */
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityConfigurationCommandOutput>;
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void
  ): void;
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void
  ): void;
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void
  ): Promise<DescribeSecurityConfigurationCommandOutput> | void {
    const command = new DescribeSecurityConfigurationCommand(args);
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
   * <p>Provides more detail about the cluster step.</p>
   */
  public describeStep(
    args: DescribeStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStepCommandOutput>;
  public describeStep(args: DescribeStepCommandInput, cb: (err: any, data?: DescribeStepCommandOutput) => void): void;
  public describeStep(
    args: DescribeStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStepCommandOutput) => void
  ): void;
  public describeStep(
    args: DescribeStepCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStepCommandOutput) => void),
    cb?: (err: any, data?: DescribeStepCommandOutput) => void
  ): Promise<DescribeStepCommandOutput> | void {
    const command = new DescribeStepCommand(args);
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
   * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio
   *          access URL, and so on.</p>
   */
  public describeStudio(
    args: DescribeStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStudioCommandOutput>;
  public describeStudio(
    args: DescribeStudioCommandInput,
    cb: (err: any, data?: DescribeStudioCommandOutput) => void
  ): void;
  public describeStudio(
    args: DescribeStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStudioCommandOutput) => void
  ): void;
  public describeStudio(
    args: DescribeStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStudioCommandOutput) => void),
    cb?: (err: any, data?: DescribeStudioCommandOutput) => void
  ): Promise<DescribeStudioCommandOutput> | void {
    const command = new DescribeStudioCommand(args);
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
   * <p>Returns the auto-termination policy for an Amazon EMR cluster.</p>
   */
  public getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoTerminationPolicyCommandOutput>;
  public getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: GetAutoTerminationPolicyCommandOutput) => void
  ): void;
  public getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoTerminationPolicyCommandOutput) => void
  ): void;
  public getAutoTerminationPolicy(
    args: GetAutoTerminationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAutoTerminationPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAutoTerminationPolicyCommandOutput) => void
  ): Promise<GetAutoTerminationPolicyCommandOutput> | void {
    const command = new GetAutoTerminationPolicyCommand(args);
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
   * <p>Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the
   *          current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
   *             Public Access for Amazon EMR</a> in the <i>Amazon EMR Management
   *             Guide</i>.</p>
   */
  public getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlockPublicAccessConfigurationCommandOutput>;
  public getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  public getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  public getBlockPublicAccessConfiguration(
    args: GetBlockPublicAccessConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void
  ): Promise<GetBlockPublicAccessConfigurationCommandOutput> | void {
    const command = new GetBlockPublicAccessConfigurationCommand(args);
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
   * <p>Fetches the attached managed scaling policy for an Amazon EMR cluster. </p>
   */
  public getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedScalingPolicyCommandOutput>;
  public getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    cb: (err: any, data?: GetManagedScalingPolicyCommandOutput) => void
  ): void;
  public getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedScalingPolicyCommandOutput) => void
  ): void;
  public getManagedScalingPolicy(
    args: GetManagedScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetManagedScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetManagedScalingPolicyCommandOutput) => void
  ): Promise<GetManagedScalingPolicyCommandOutput> | void {
    const command = new GetManagedScalingPolicyCommand(args);
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
   * <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user or
   *          group).</p>
   */
  public getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStudioSessionMappingCommandOutput>;
  public getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    cb: (err: any, data?: GetStudioSessionMappingCommandOutput) => void
  ): void;
  public getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStudioSessionMappingCommandOutput) => void
  ): void;
  public getStudioSessionMapping(
    args: GetStudioSessionMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStudioSessionMappingCommandOutput) => void),
    cb?: (err: any, data?: GetStudioSessionMappingCommandOutput) => void
  ): Promise<GetStudioSessionMappingCommandOutput> | void {
    const command = new GetStudioSessionMappingCommand(args);
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
   * <p>Provides information about the bootstrap actions associated with a cluster.</p>
   */
  public listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBootstrapActionsCommandOutput>;
  public listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void
  ): void;
  public listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void
  ): void;
  public listBootstrapActions(
    args: ListBootstrapActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBootstrapActionsCommandOutput) => void),
    cb?: (err: any, data?: ListBootstrapActionsCommandOutput) => void
  ): Promise<ListBootstrapActionsCommandOutput> | void {
    const command = new ListBootstrapActionsCommand(args);
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
   * <p>Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter
   *          the list of clusters based on certain criteria; for example, filtering by cluster creation
   *          date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but
   *          returns a marker to track the paging of the cluster list across multiple ListClusters
   *          calls.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
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
   * <p>Lists all available details about the instance fleets in a cluster.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   */
  public listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceFleetsCommandOutput>;
  public listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void
  ): void;
  public listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void
  ): void;
  public listInstanceFleets(
    args: ListInstanceFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceFleetsCommandOutput) => void
  ): Promise<ListInstanceFleetsCommandOutput> | void {
    const command = new ListInstanceFleetsCommand(args);
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
   * <p>Provides all available details about the instance groups in a cluster.</p>
   */
  public listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceGroupsCommandOutput>;
  public listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void
  ): void;
  public listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void
  ): void;
  public listInstanceGroups(
    args: ListInstanceGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceGroupsCommandOutput) => void
  ): Promise<ListInstanceGroupsCommandOutput> | void {
    const command = new ListInstanceGroupsCommand(args);
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
   * <p>Provides information for all active EC2 instances and EC2 instances terminated in the
   *          last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are
   *          considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
   */
  public listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  public listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListInstancesCommandOutput) => void
  ): Promise<ListInstancesCommandOutput> | void {
    const command = new ListInstancesCommand(args);
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
   * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
   *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
   *          executions and a marker to track the paging of a longer notebook execution list across
   *          multiple <code>ListNotebookExecution</code> calls.</p>
   */
  public listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookExecutionsCommandOutput>;
  public listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    cb: (err: any, data?: ListNotebookExecutionsCommandOutput) => void
  ): void;
  public listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookExecutionsCommandOutput) => void
  ): void;
  public listNotebookExecutions(
    args: ListNotebookExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNotebookExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListNotebookExecutionsCommandOutput) => void
  ): Promise<ListNotebookExecutionsCommandOutput> | void {
    const command = new ListNotebookExecutionsCommand(args);
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
   * <p>Retrieves release labels of EMR services in the region where the API is called.</p>
   */
  public listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReleaseLabelsCommandOutput>;
  public listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    cb: (err: any, data?: ListReleaseLabelsCommandOutput) => void
  ): void;
  public listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReleaseLabelsCommandOutput) => void
  ): void;
  public listReleaseLabels(
    args: ListReleaseLabelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReleaseLabelsCommandOutput) => void),
    cb?: (err: any, data?: ListReleaseLabelsCommandOutput) => void
  ): Promise<ListReleaseLabelsCommandOutput> | void {
    const command = new ListReleaseLabelsCommand(args);
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
   * <p>Lists all the security configurations visible to this account, providing their creation
   *          dates and times, and their names. This call returns a maximum of 50 clusters per call, but
   *          returns a marker to track the paging of the cluster list across multiple
   *          ListSecurityConfigurations calls.</p>
   */
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityConfigurationsCommandOutput>;
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void
  ): void;
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void
  ): void;
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void
  ): Promise<ListSecurityConfigurationsCommandOutput> | void {
    const command = new ListSecurityConfigurationsCommand(args);
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
   * <p>Provides a list of steps for the cluster in reverse order unless you specify
   *             <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can
   *          specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.</p>
   */
  public listSteps(args: ListStepsCommandInput, options?: __HttpHandlerOptions): Promise<ListStepsCommandOutput>;
  public listSteps(args: ListStepsCommandInput, cb: (err: any, data?: ListStepsCommandOutput) => void): void;
  public listSteps(
    args: ListStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStepsCommandOutput) => void
  ): void;
  public listSteps(
    args: ListStepsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStepsCommandOutput) => void),
    cb?: (err: any, data?: ListStepsCommandOutput) => void
  ): Promise<ListStepsCommandOutput> | void {
    const command = new ListStepsCommand(args);
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
   * <p>Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list
   *          includes details such as ID, Studio Access URL, and creation time for each Studio.</p>
   */
  public listStudios(args: ListStudiosCommandInput, options?: __HttpHandlerOptions): Promise<ListStudiosCommandOutput>;
  public listStudios(args: ListStudiosCommandInput, cb: (err: any, data?: ListStudiosCommandOutput) => void): void;
  public listStudios(
    args: ListStudiosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudiosCommandOutput) => void
  ): void;
  public listStudios(
    args: ListStudiosCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStudiosCommandOutput) => void),
    cb?: (err: any, data?: ListStudiosCommandOutput) => void
  ): Promise<ListStudiosCommandOutput> | void {
    const command = new ListStudiosCommand(args);
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
   * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio specified by
   *             <code>StudioId</code>.</p>
   */
  public listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioSessionMappingsCommandOutput>;
  public listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    cb: (err: any, data?: ListStudioSessionMappingsCommandOutput) => void
  ): void;
  public listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioSessionMappingsCommandOutput) => void
  ): void;
  public listStudioSessionMappings(
    args: ListStudioSessionMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStudioSessionMappingsCommandOutput) => void),
    cb?: (err: any, data?: ListStudioSessionMappingsCommandOutput) => void
  ): Promise<ListStudioSessionMappingsCommandOutput> | void {
    const command = new ListStudioSessionMappingsCommand(args);
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
   * <p>Modifies the number of steps that can be executed concurrently for the cluster specified
   *          using ClusterID.</p>
   */
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterCommandOutput) => void
  ): Promise<ModifyClusterCommandOutput> | void {
    const command = new ModifyClusterCommand(args);
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
   * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
   *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
   *          succeeds or fails atomically.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   */
  public modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceFleetCommandOutput>;
  public modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void
  ): void;
  public modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void
  ): void;
  public modifyInstanceFleet(
    args: ModifyInstanceFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceFleetCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceFleetCommandOutput) => void
  ): Promise<ModifyInstanceFleetCommandOutput> | void {
    const command = new ModifyInstanceFleetCommand(args);
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
   * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an
   *          instance group. The input parameters include the new target instance count for the group
   *          and the instance group ID. The call will either succeed or fail atomically.</p>
   */
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyInstanceGroupsCommandOutput>;
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void
  ): void;
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void
  ): void;
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyInstanceGroupsCommandOutput) => void),
    cb?: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void
  ): Promise<ModifyInstanceGroupsCommandOutput> | void {
    const command = new ModifyInstanceGroupsCommand(args);
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
   * <p>Creates or updates an automatic scaling policy for a core instance group or task
   *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how an
   *          instance group dynamically adds and terminates EC2 instances in response to the value of a
   *          CloudWatch metric.</p>
   */
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAutoScalingPolicyCommandOutput>;
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void
  ): void;
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void
  ): void;
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAutoScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void
  ): Promise<PutAutoScalingPolicyCommandOutput> | void {
    const command = new PutAutoScalingPolicyCommand(args);
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
   * <p>Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.</p>
   */
  public putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAutoTerminationPolicyCommandOutput>;
  public putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: PutAutoTerminationPolicyCommandOutput) => void
  ): void;
  public putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAutoTerminationPolicyCommandOutput) => void
  ): void;
  public putAutoTerminationPolicy(
    args: PutAutoTerminationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAutoTerminationPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutAutoTerminationPolicyCommandOutput) => void
  ): Promise<PutAutoTerminationPolicyCommandOutput> | void {
    const command = new PutAutoTerminationPolicyCommand(args);
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
   * <p>Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account
   *          in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
   *             Public Access for Amazon EMR</a> in the <i>Amazon EMR Management
   *             Guide</i>.</p>
   */
  public putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBlockPublicAccessConfigurationCommandOutput>;
  public putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  public putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void
  ): void;
  public putBlockPublicAccessConfiguration(
    args: PutBlockPublicAccessConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void
  ): Promise<PutBlockPublicAccessConfigurationCommandOutput> | void {
    const command = new PutBlockPublicAccessConfigurationCommand(args);
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
   * <p>Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed
   *          scaling policy defines the limits for resources, such as EC2 instances that can be added or
   *          terminated from a cluster. The policy only applies to the core and task nodes. The master
   *          node cannot be scaled after initial configuration. </p>
   */
  public putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutManagedScalingPolicyCommandOutput>;
  public putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    cb: (err: any, data?: PutManagedScalingPolicyCommandOutput) => void
  ): void;
  public putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutManagedScalingPolicyCommandOutput) => void
  ): void;
  public putManagedScalingPolicy(
    args: PutManagedScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutManagedScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutManagedScalingPolicyCommandOutput) => void
  ): Promise<PutManagedScalingPolicyCommandOutput> | void {
    const command = new PutManagedScalingPolicyCommand(args);
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
   * <p>Removes an automatic scaling policy from a specified instance group within an EMR
   *          cluster.</p>
   */
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAutoScalingPolicyCommandOutput>;
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void
  ): void;
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void
  ): void;
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void
  ): Promise<RemoveAutoScalingPolicyCommandOutput> | void {
    const command = new RemoveAutoScalingPolicyCommand(args);
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
   * <p>Removes an auto-termination policy from an Amazon EMR cluster.</p>
   */
  public removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAutoTerminationPolicyCommandOutput>;
  public removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    cb: (err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void
  ): void;
  public removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void
  ): void;
  public removeAutoTerminationPolicy(
    args: RemoveAutoTerminationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void),
    cb?: (err: any, data?: RemoveAutoTerminationPolicyCommandOutput) => void
  ): Promise<RemoveAutoTerminationPolicyCommandOutput> | void {
    const command = new RemoveAutoTerminationPolicyCommand(args);
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
   * <p> Removes a managed scaling policy from a specified EMR cluster. </p>
   */
  public removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveManagedScalingPolicyCommandOutput>;
  public removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    cb: (err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void
  ): void;
  public removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void
  ): void;
  public removeManagedScalingPolicy(
    args: RemoveManagedScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: RemoveManagedScalingPolicyCommandOutput) => void
  ): Promise<RemoveManagedScalingPolicyCommandOutput> | void {
    const command = new RemoveManagedScalingPolicyCommand(args);
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
   * <p>Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in
   *          various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
   *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
   *          <p>The following example removes the stack tag with value Prod from a cluster:</p>
   */
  public removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  public removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsCommandOutput) => void
  ): Promise<RemoveTagsCommandOutput> | void {
    const command = new RemoveTagsCommand(args);
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
   * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the
   *          steps specified. After the steps complete, the cluster stops and the HDFS partition is
   *          lost. To prevent loss of data, configure the last step of the job flow to store results in
   *          Amazon S3. If the <a>JobFlowInstancesConfig</a>
   *             <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster
   *          transitions to the WAITING state rather than shutting down after the steps have completed. </p>
   *          <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a>
   *             <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and
   *          prevent it from being terminated by API call, user intervention, or in the event of a job
   *          flow error.</p>
   *          <p>A maximum of 256 steps are allowed in each job flow.</p>
   *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
   *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
   *          various ways, including using the SSH shell to connect to the master node and submitting
   *          queries directly to the software running on the master node, such as Hive and Hadoop. For
   *          more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
   *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
   *          <p>For long running clusters, we recommend that you periodically store your results.</p>
   *          <note>
   *             <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets
   *             parameters or InstanceGroups parameters, but not both.</p>
   *          </note>
   */
  public runJobFlow(args: RunJobFlowCommandInput, options?: __HttpHandlerOptions): Promise<RunJobFlowCommandOutput>;
  public runJobFlow(args: RunJobFlowCommandInput, cb: (err: any, data?: RunJobFlowCommandOutput) => void): void;
  public runJobFlow(
    args: RunJobFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunJobFlowCommandOutput) => void
  ): void;
  public runJobFlow(
    args: RunJobFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunJobFlowCommandOutput) => void),
    cb?: (err: any, data?: RunJobFlowCommandOutput) => void
  ): Promise<RunJobFlowCommandOutput> | void {
    const command = new RunJobFlowCommand(args);
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
   * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster
   *          cannot be terminated by user intervention, an API call, or in the event of a job-flow
   *          error. The cluster still terminates upon successful completion of the job flow. Calling
   *          <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2
   *             <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p>
   *          <p>
   *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a
   *          cluster and to ensure that in the event of an error, the instances persist so that you can
   *          recover any data stored in their ephemeral instance storage.</p>
   *          <p> To terminate a cluster that has been locked by setting
   *             <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the
   *          job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the
   *          value to <code>false</code>. </p>
   *          <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster
   *             Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
   */
  public setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTerminationProtectionCommandOutput>;
  public setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void
  ): void;
  public setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void
  ): void;
  public setTerminationProtection(
    args: SetTerminationProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTerminationProtectionCommandOutput) => void),
    cb?: (err: any, data?: SetTerminationProtectionCommandOutput) => void
  ): Promise<SetTerminationProtectionCommandOutput> | void {
    const command = new SetTerminationProtectionCommand(args);
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
   * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the
   *          Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p>
   *          <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>
   */
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVisibleToAllUsersCommandOutput>;
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void
  ): void;
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void
  ): void;
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetVisibleToAllUsersCommandOutput) => void),
    cb?: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void
  ): Promise<SetVisibleToAllUsersCommandOutput> | void {
    const command = new SetVisibleToAllUsersCommand(args);
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
   * <p>Starts a notebook execution.</p>
   */
  public startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNotebookExecutionCommandOutput>;
  public startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    cb: (err: any, data?: StartNotebookExecutionCommandOutput) => void
  ): void;
  public startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNotebookExecutionCommandOutput) => void
  ): void;
  public startNotebookExecution(
    args: StartNotebookExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartNotebookExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartNotebookExecutionCommandOutput) => void
  ): Promise<StartNotebookExecutionCommandOutput> | void {
    const command = new StartNotebookExecutionCommand(args);
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
   * <p>Stops a notebook execution.</p>
   */
  public stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopNotebookExecutionCommandOutput>;
  public stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    cb: (err: any, data?: StopNotebookExecutionCommandOutput) => void
  ): void;
  public stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopNotebookExecutionCommandOutput) => void
  ): void;
  public stopNotebookExecution(
    args: StopNotebookExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopNotebookExecutionCommandOutput) => void),
    cb?: (err: any, data?: StopNotebookExecutionCommandOutput) => void
  ): Promise<StopNotebookExecutionCommandOutput> | void {
    const command = new StopNotebookExecutionCommand(args);
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
   * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
   *          down, any step not yet completed is canceled and the EC2 instances on which the cluster is
   *          running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri
   *          was specified when the cluster was created.</p>
   *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
   *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
   *          minutes for the cluster to completely terminate and release allocated resources, such as
   *          Amazon EC2 instances.</p>
   */
  public terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateJobFlowsCommandOutput>;
  public terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void
  ): void;
  public terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void
  ): void;
  public terminateJobFlows(
    args: TerminateJobFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateJobFlowsCommandOutput) => void),
    cb?: (err: any, data?: TerminateJobFlowsCommandOutput) => void
  ): Promise<TerminateJobFlowsCommandOutput> | void {
    const command = new TerminateJobFlowsCommand(args);
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
   * <p>Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.</p>
   */
  public updateStudio(
    args: UpdateStudioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioCommandOutput>;
  public updateStudio(args: UpdateStudioCommandInput, cb: (err: any, data?: UpdateStudioCommandOutput) => void): void;
  public updateStudio(
    args: UpdateStudioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioCommandOutput) => void
  ): void;
  public updateStudio(
    args: UpdateStudioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStudioCommandOutput) => void),
    cb?: (err: any, data?: UpdateStudioCommandOutput) => void
  ): Promise<UpdateStudioCommandOutput> | void {
    const command = new UpdateStudioCommand(args);
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
   * <p>Updates the session policy attached to the user or group for the specified Amazon EMR
   *          Studio.</p>
   */
  public updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStudioSessionMappingCommandOutput>;
  public updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    cb: (err: any, data?: UpdateStudioSessionMappingCommandOutput) => void
  ): void;
  public updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStudioSessionMappingCommandOutput) => void
  ): void;
  public updateStudioSessionMapping(
    args: UpdateStudioSessionMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStudioSessionMappingCommandOutput) => void),
    cb?: (err: any, data?: UpdateStudioSessionMappingCommandOutput) => void
  ): Promise<UpdateStudioSessionMappingCommandOutput> | void {
    const command = new UpdateStudioSessionMappingCommand(args);
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
