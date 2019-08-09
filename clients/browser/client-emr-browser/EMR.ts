import { EMRClient } from "./EMRClient";
import { AddInstanceFleetInput } from "./types/AddInstanceFleetInput";
import { AddInstanceFleetOutput } from "./types/AddInstanceFleetOutput";
import { AddInstanceGroupsInput } from "./types/AddInstanceGroupsInput";
import { AddInstanceGroupsOutput } from "./types/AddInstanceGroupsOutput";
import { AddJobFlowStepsInput } from "./types/AddJobFlowStepsInput";
import { AddJobFlowStepsOutput } from "./types/AddJobFlowStepsOutput";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { CancelStepsInput } from "./types/CancelStepsInput";
import { CancelStepsOutput } from "./types/CancelStepsOutput";
import { CreateSecurityConfigurationInput } from "./types/CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "./types/CreateSecurityConfigurationOutput";
import { DeleteSecurityConfigurationInput } from "./types/DeleteSecurityConfigurationInput";
import { DeleteSecurityConfigurationOutput } from "./types/DeleteSecurityConfigurationOutput";
import { DescribeClusterInput } from "./types/DescribeClusterInput";
import { DescribeClusterOutput } from "./types/DescribeClusterOutput";
import { DescribeJobFlowsInput } from "./types/DescribeJobFlowsInput";
import { DescribeJobFlowsOutput } from "./types/DescribeJobFlowsOutput";
import { DescribeSecurityConfigurationInput } from "./types/DescribeSecurityConfigurationInput";
import { DescribeSecurityConfigurationOutput } from "./types/DescribeSecurityConfigurationOutput";
import { DescribeStepInput } from "./types/DescribeStepInput";
import { DescribeStepOutput } from "./types/DescribeStepOutput";
import { InternalServerError } from "./types/InternalServerError";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListBootstrapActionsInput } from "./types/ListBootstrapActionsInput";
import { ListBootstrapActionsOutput } from "./types/ListBootstrapActionsOutput";
import { ListClustersInput } from "./types/ListClustersInput";
import { ListClustersOutput } from "./types/ListClustersOutput";
import { ListInstanceFleetsInput } from "./types/ListInstanceFleetsInput";
import { ListInstanceFleetsOutput } from "./types/ListInstanceFleetsOutput";
import { ListInstanceGroupsInput } from "./types/ListInstanceGroupsInput";
import { ListInstanceGroupsOutput } from "./types/ListInstanceGroupsOutput";
import { ListInstancesInput } from "./types/ListInstancesInput";
import { ListInstancesOutput } from "./types/ListInstancesOutput";
import { ListSecurityConfigurationsInput } from "./types/ListSecurityConfigurationsInput";
import { ListSecurityConfigurationsOutput } from "./types/ListSecurityConfigurationsOutput";
import { ListStepsInput } from "./types/ListStepsInput";
import { ListStepsOutput } from "./types/ListStepsOutput";
import { ModifyInstanceFleetInput } from "./types/ModifyInstanceFleetInput";
import { ModifyInstanceFleetOutput } from "./types/ModifyInstanceFleetOutput";
import { ModifyInstanceGroupsInput } from "./types/ModifyInstanceGroupsInput";
import { ModifyInstanceGroupsOutput } from "./types/ModifyInstanceGroupsOutput";
import { PutAutoScalingPolicyInput } from "./types/PutAutoScalingPolicyInput";
import { PutAutoScalingPolicyOutput } from "./types/PutAutoScalingPolicyOutput";
import { RemoveAutoScalingPolicyInput } from "./types/RemoveAutoScalingPolicyInput";
import { RemoveAutoScalingPolicyOutput } from "./types/RemoveAutoScalingPolicyOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { RunJobFlowInput } from "./types/RunJobFlowInput";
import { RunJobFlowOutput } from "./types/RunJobFlowOutput";
import { SetTerminationProtectionInput } from "./types/SetTerminationProtectionInput";
import { SetTerminationProtectionOutput } from "./types/SetTerminationProtectionOutput";
import { SetVisibleToAllUsersInput } from "./types/SetVisibleToAllUsersInput";
import { SetVisibleToAllUsersOutput } from "./types/SetVisibleToAllUsersOutput";
import { TerminateJobFlowsInput } from "./types/TerminateJobFlowsInput";
import { TerminateJobFlowsOutput } from "./types/TerminateJobFlowsOutput";
import { AddInstanceFleetCommand } from "./commands/AddInstanceFleetCommand";
import { AddInstanceGroupsCommand } from "./commands/AddInstanceGroupsCommand";
import { AddJobFlowStepsCommand } from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CancelStepsCommand } from "./commands/CancelStepsCommand";
import { CreateSecurityConfigurationCommand } from "./commands/CreateSecurityConfigurationCommand";
import { DeleteSecurityConfigurationCommand } from "./commands/DeleteSecurityConfigurationCommand";
import { DescribeClusterCommand } from "./commands/DescribeClusterCommand";
import { DescribeJobFlowsCommand } from "./commands/DescribeJobFlowsCommand";
import { DescribeSecurityConfigurationCommand } from "./commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommand } from "./commands/DescribeStepCommand";
import { ListBootstrapActionsCommand } from "./commands/ListBootstrapActionsCommand";
import { ListClustersCommand } from "./commands/ListClustersCommand";
import { ListInstanceFleetsCommand } from "./commands/ListInstanceFleetsCommand";
import { ListInstanceGroupsCommand } from "./commands/ListInstanceGroupsCommand";
import { ListInstancesCommand } from "./commands/ListInstancesCommand";
import { ListSecurityConfigurationsCommand } from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommand } from "./commands/ListStepsCommand";
import { ModifyInstanceFleetCommand } from "./commands/ModifyInstanceFleetCommand";
import { ModifyInstanceGroupsCommand } from "./commands/ModifyInstanceGroupsCommand";
import { PutAutoScalingPolicyCommand } from "./commands/PutAutoScalingPolicyCommand";
import { RemoveAutoScalingPolicyCommand } from "./commands/RemoveAutoScalingPolicyCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommand } from "./commands/RunJobFlowCommand";
import { SetTerminationProtectionCommand } from "./commands/SetTerminationProtectionCommand";
import { SetVisibleToAllUsersCommand } from "./commands/SetVisibleToAllUsersCommand";
import { TerminateJobFlowsCommand } from "./commands/TerminateJobFlowsCommand";

export class EMR extends EMRClient {
  /**
   * <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addInstanceFleet(
    args: AddInstanceFleetInput
  ): Promise<AddInstanceFleetOutput>;
  public addInstanceFleet(
    args: AddInstanceFleetInput,
    cb: (err: any, data?: AddInstanceFleetOutput) => void
  ): void;
  public addInstanceFleet(
    args: AddInstanceFleetInput,
    cb?: (err: any, data?: AddInstanceFleetOutput) => void
  ): Promise<AddInstanceFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddInstanceFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more instance groups to a running cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addInstanceGroups(
    args: AddInstanceGroupsInput
  ): Promise<AddInstanceGroupsOutput>;
  public addInstanceGroups(
    args: AddInstanceGroupsInput,
    cb: (err: any, data?: AddInstanceGroupsOutput) => void
  ): void;
  public addInstanceGroups(
    args: AddInstanceGroupsInput,
    cb?: (err: any, data?: AddInstanceGroupsOutput) => void
  ): Promise<AddInstanceGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddInstanceGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addJobFlowSteps(
    args: AddJobFlowStepsInput
  ): Promise<AddJobFlowStepsOutput>;
  public addJobFlowSteps(
    args: AddJobFlowStepsInput,
    cb: (err: any, data?: AddJobFlowStepsOutput) => void
  ): void;
  public addJobFlowSteps(
    args: AddJobFlowStepsInput,
    cb?: (err: any, data?: AddJobFlowStepsOutput) => void
  ): Promise<AddJobFlowStepsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddJobFlowStepsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a <code>PENDING</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSteps(args: CancelStepsInput): Promise<CancelStepsOutput>;
  public cancelSteps(
    args: CancelStepsInput,
    cb: (err: any, data?: CancelStepsOutput) => void
  ): void;
  public cancelSteps(
    args: CancelStepsInput,
    cb?: (err: any, data?: CancelStepsOutput) => void
  ): Promise<CancelStepsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelStepsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a security configuration, which is stored in the service and can be specified when a cluster is created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput
  ): Promise<CreateSecurityConfigurationOutput>;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput,
    cb: (err: any, data?: CreateSecurityConfigurationOutput) => void
  ): void;
  public createSecurityConfiguration(
    args: CreateSecurityConfigurationInput,
    cb?: (err: any, data?: CreateSecurityConfigurationOutput) => void
  ): Promise<CreateSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a security configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput
  ): Promise<DeleteSecurityConfigurationOutput>;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput,
    cb: (err: any, data?: DeleteSecurityConfigurationOutput) => void
  ): void;
  public deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationInput,
    cb?: (err: any, data?: DeleteSecurityConfigurationOutput) => void
  ): Promise<DeleteSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCluster(
    args: DescribeClusterInput
  ): Promise<DescribeClusterOutput>;
  public describeCluster(
    args: DescribeClusterInput,
    cb: (err: any, data?: DescribeClusterOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterInput,
    cb?: (err: any, data?: DescribeClusterOutput) => void
  ): Promise<DescribeClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This API is deprecated and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJobFlows(
    args: DescribeJobFlowsInput
  ): Promise<DescribeJobFlowsOutput>;
  public describeJobFlows(
    args: DescribeJobFlowsInput,
    cb: (err: any, data?: DescribeJobFlowsOutput) => void
  ): void;
  public describeJobFlows(
    args: DescribeJobFlowsInput,
    cb?: (err: any, data?: DescribeJobFlowsOutput) => void
  ): Promise<DescribeJobFlowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobFlowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the details of a security configuration by returning the configuration JSON.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationInput
  ): Promise<DescribeSecurityConfigurationOutput>;
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationInput,
    cb: (err: any, data?: DescribeSecurityConfigurationOutput) => void
  ): void;
  public describeSecurityConfiguration(
    args: DescribeSecurityConfigurationInput,
    cb?: (err: any, data?: DescribeSecurityConfigurationOutput) => void
  ): Promise<DescribeSecurityConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSecurityConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides more detail about the cluster step.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStep(args: DescribeStepInput): Promise<DescribeStepOutput>;
  public describeStep(
    args: DescribeStepInput,
    cb: (err: any, data?: DescribeStepOutput) => void
  ): void;
  public describeStep(
    args: DescribeStepInput,
    cb?: (err: any, data?: DescribeStepOutput) => void
  ): Promise<DescribeStepOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStepCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about the bootstrap actions associated with a cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBootstrapActions(
    args: ListBootstrapActionsInput
  ): Promise<ListBootstrapActionsOutput>;
  public listBootstrapActions(
    args: ListBootstrapActionsInput,
    cb: (err: any, data?: ListBootstrapActionsOutput) => void
  ): void;
  public listBootstrapActions(
    args: ListBootstrapActionsInput,
    cb?: (err: any, data?: ListBootstrapActionsOutput) => void
  ): Promise<ListBootstrapActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBootstrapActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClusters(args: ListClustersInput): Promise<ListClustersOutput>;
  public listClusters(
    args: ListClustersInput,
    cb: (err: any, data?: ListClustersOutput) => void
  ): void;
  public listClusters(
    args: ListClustersInput,
    cb?: (err: any, data?: ListClustersOutput) => void
  ): Promise<ListClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstanceFleets(
    args: ListInstanceFleetsInput
  ): Promise<ListInstanceFleetsOutput>;
  public listInstanceFleets(
    args: ListInstanceFleetsInput,
    cb: (err: any, data?: ListInstanceFleetsOutput) => void
  ): void;
  public listInstanceFleets(
    args: ListInstanceFleetsInput,
    cb?: (err: any, data?: ListInstanceFleetsOutput) => void
  ): Promise<ListInstanceFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstanceFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides all available details about the instance groups in a cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstanceGroups(
    args: ListInstanceGroupsInput
  ): Promise<ListInstanceGroupsOutput>;
  public listInstanceGroups(
    args: ListInstanceGroupsInput,
    cb: (err: any, data?: ListInstanceGroupsOutput) => void
  ): void;
  public listInstanceGroups(
    args: ListInstanceGroupsInput,
    cb?: (err: any, data?: ListInstanceGroupsOutput) => void
  ): Promise<ListInstanceGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstanceGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstances(args: ListInstancesInput): Promise<ListInstancesOutput>;
  public listInstances(
    args: ListInstancesInput,
    cb: (err: any, data?: ListInstancesOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesInput,
    cb?: (err: any, data?: ListInstancesOutput) => void
  ): Promise<ListInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsInput
  ): Promise<ListSecurityConfigurationsOutput>;
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsInput,
    cb: (err: any, data?: ListSecurityConfigurationsOutput) => void
  ): void;
  public listSecurityConfigurations(
    args: ListSecurityConfigurationsInput,
    cb?: (err: any, data?: ListSecurityConfigurationsOutput) => void
  ): Promise<ListSecurityConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSecurityConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSteps(args: ListStepsInput): Promise<ListStepsOutput>;
  public listSteps(
    args: ListStepsInput,
    cb: (err: any, data?: ListStepsOutput) => void
  ): void;
  public listSteps(
    args: ListStepsInput,
    cb?: (err: any, data?: ListStepsOutput) => void
  ): Promise<ListStepsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStepsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceFleet(
    args: ModifyInstanceFleetInput
  ): Promise<ModifyInstanceFleetOutput>;
  public modifyInstanceFleet(
    args: ModifyInstanceFleetInput,
    cb: (err: any, data?: ModifyInstanceFleetOutput) => void
  ): void;
  public modifyInstanceFleet(
    args: ModifyInstanceFleetInput,
    cb?: (err: any, data?: ModifyInstanceFleetOutput) => void
  ): Promise<ModifyInstanceFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsInput
  ): Promise<ModifyInstanceGroupsOutput>;
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsInput,
    cb: (err: any, data?: ModifyInstanceGroupsOutput) => void
  ): void;
  public modifyInstanceGroups(
    args: ModifyInstanceGroupsInput,
    cb?: (err: any, data?: ModifyInstanceGroupsOutput) => void
  ): Promise<ModifyInstanceGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyInstanceGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyInput
  ): Promise<PutAutoScalingPolicyOutput>;
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyInput,
    cb: (err: any, data?: PutAutoScalingPolicyOutput) => void
  ): void;
  public putAutoScalingPolicy(
    args: PutAutoScalingPolicyInput,
    cb?: (err: any, data?: PutAutoScalingPolicyOutput) => void
  ): Promise<PutAutoScalingPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAutoScalingPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes an automatic scaling policy from a specified instance group within an EMR cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyInput
  ): Promise<RemoveAutoScalingPolicyOutput>;
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyInput,
    cb: (err: any, data?: RemoveAutoScalingPolicyOutput) => void
  ): void;
  public removeAutoScalingPolicy(
    args: RemoveAutoScalingPolicyInput,
    cb?: (err: any, data?: RemoveAutoScalingPolicyOutput) => void
  ): Promise<RemoveAutoScalingPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveAutoScalingPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>This exception occurs when there is an internal failure in the EMR service.</p>
   *   - {InvalidRequestException} <p>This exception occurs when there is something wrong with user input.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTags(args: RemoveTagsInput): Promise<RemoveTagsOutput>;
  public removeTags(
    args: RemoveTagsInput,
    cb: (err: any, data?: RemoveTagsOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsInput,
    cb?: (err: any, data?: RemoveTagsOutput) => void
  ): Promise<RemoveTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>For long running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public runJobFlow(args: RunJobFlowInput): Promise<RunJobFlowOutput>;
  public runJobFlow(
    args: RunJobFlowInput,
    cb: (err: any, data?: RunJobFlowOutput) => void
  ): void;
  public runJobFlow(
    args: RunJobFlowInput,
    cb?: (err: any, data?: RunJobFlowOutput) => void
  ): Promise<RunJobFlowOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RunJobFlowCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setTerminationProtection(
    args: SetTerminationProtectionInput
  ): Promise<SetTerminationProtectionOutput>;
  public setTerminationProtection(
    args: SetTerminationProtectionInput,
    cb: (err: any, data?: SetTerminationProtectionOutput) => void
  ): void;
  public setTerminationProtection(
    args: SetTerminationProtectionInput,
    cb?: (err: any, data?: SetTerminationProtectionOutput) => void
  ): Promise<SetTerminationProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetTerminationProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets whether all AWS Identity and Access Management (IAM) users under your account can access the specified clusters (job flows). This action works on running clusters. You can also set the visibility of a cluster when you launch it using the <code>VisibleToAllUsers</code> parameter of <a>RunJobFlow</a>. The SetVisibleToAllUsers action can be called only by an IAM user who created the cluster or the AWS account that owns the cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersInput
  ): Promise<SetVisibleToAllUsersOutput>;
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersInput,
    cb: (err: any, data?: SetVisibleToAllUsersOutput) => void
  ): void;
  public setVisibleToAllUsers(
    args: SetVisibleToAllUsersInput,
    cb?: (err: any, data?: SetVisibleToAllUsersOutput) => void
  ): Promise<SetVisibleToAllUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetVisibleToAllUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerError} <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateJobFlows(
    args: TerminateJobFlowsInput
  ): Promise<TerminateJobFlowsOutput>;
  public terminateJobFlows(
    args: TerminateJobFlowsInput,
    cb: (err: any, data?: TerminateJobFlowsOutput) => void
  ): void;
  public terminateJobFlows(
    args: TerminateJobFlowsInput,
    cb?: (err: any, data?: TerminateJobFlowsOutput) => void
  ): Promise<TerminateJobFlowsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateJobFlowsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
