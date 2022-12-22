// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateCapacityProviderCommand,
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
} from "./commands/CreateCapacityProviderCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateTaskSetCommand,
  CreateTaskSetCommandInput,
  CreateTaskSetCommandOutput,
} from "./commands/CreateTaskSetCommand";
import {
  DeleteAccountSettingCommand,
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput,
} from "./commands/DeleteAccountSettingCommand";
import {
  DeleteAttributesCommand,
  DeleteAttributesCommandInput,
  DeleteAttributesCommandOutput,
} from "./commands/DeleteAttributesCommand";
import {
  DeleteCapacityProviderCommand,
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
} from "./commands/DeleteCapacityProviderCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteTaskSetCommand,
  DeleteTaskSetCommandInput,
  DeleteTaskSetCommandOutput,
} from "./commands/DeleteTaskSetCommand";
import {
  DeregisterContainerInstanceCommand,
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
} from "./commands/DeregisterContainerInstanceCommand";
import {
  DeregisterTaskDefinitionCommand,
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
} from "./commands/DeregisterTaskDefinitionCommand";
import {
  DescribeCapacityProvidersCommand,
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
} from "./commands/DescribeCapacityProvidersCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeContainerInstancesCommand,
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
} from "./commands/DescribeContainerInstancesCommand";
import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "./commands/DescribeServicesCommand";
import {
  DescribeTaskDefinitionCommand,
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
} from "./commands/DescribeTaskDefinitionCommand";
import {
  DescribeTasksCommand,
  DescribeTasksCommandInput,
  DescribeTasksCommandOutput,
} from "./commands/DescribeTasksCommand";
import {
  DescribeTaskSetsCommand,
  DescribeTaskSetsCommandInput,
  DescribeTaskSetsCommandOutput,
} from "./commands/DescribeTaskSetsCommand";
import {
  DiscoverPollEndpointCommand,
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "./commands/DiscoverPollEndpointCommand";
import {
  ExecuteCommandCommand,
  ExecuteCommandCommandInput,
  ExecuteCommandCommandOutput,
} from "./commands/ExecuteCommandCommand";
import {
  GetTaskProtectionCommand,
  GetTaskProtectionCommandInput,
  GetTaskProtectionCommandOutput,
} from "./commands/GetTaskProtectionCommand";
import {
  ListAccountSettingsCommand,
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "./commands/ListAccountSettingsCommand";
import {
  ListAttributesCommand,
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
} from "./commands/ListAttributesCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListContainerInstancesCommand,
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "./commands/ListContainerInstancesCommand";
import {
  ListServicesByNamespaceCommand,
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
} from "./commands/ListServicesByNamespaceCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "./commands/ListTaskDefinitionFamiliesCommand";
import {
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "./commands/ListTaskDefinitionsCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import {
  PutAccountSettingCommand,
  PutAccountSettingCommandInput,
  PutAccountSettingCommandOutput,
} from "./commands/PutAccountSettingCommand";
import {
  PutAccountSettingDefaultCommand,
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
} from "./commands/PutAccountSettingDefaultCommand";
import {
  PutAttributesCommand,
  PutAttributesCommandInput,
  PutAttributesCommandOutput,
} from "./commands/PutAttributesCommand";
import {
  PutClusterCapacityProvidersCommand,
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
} from "./commands/PutClusterCapacityProvidersCommand";
import {
  RegisterContainerInstanceCommand,
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput,
} from "./commands/RegisterContainerInstanceCommand";
import {
  RegisterTaskDefinitionCommand,
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
} from "./commands/RegisterTaskDefinitionCommand";
import { RunTaskCommand, RunTaskCommandInput, RunTaskCommandOutput } from "./commands/RunTaskCommand";
import { StartTaskCommand, StartTaskCommandInput, StartTaskCommandOutput } from "./commands/StartTaskCommand";
import { StopTaskCommand, StopTaskCommandInput, StopTaskCommandOutput } from "./commands/StopTaskCommand";
import {
  SubmitAttachmentStateChangesCommand,
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
} from "./commands/SubmitAttachmentStateChangesCommand";
import {
  SubmitContainerStateChangeCommand,
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
} from "./commands/SubmitContainerStateChangeCommand";
import {
  SubmitTaskStateChangeCommand,
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
} from "./commands/SubmitTaskStateChangeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCapacityProviderCommand,
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
} from "./commands/UpdateCapacityProviderCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import {
  UpdateClusterSettingsCommand,
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput,
} from "./commands/UpdateClusterSettingsCommand";
import {
  UpdateContainerAgentCommand,
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
} from "./commands/UpdateContainerAgentCommand";
import {
  UpdateContainerInstancesStateCommand,
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
} from "./commands/UpdateContainerInstancesStateCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateServicePrimaryTaskSetCommand,
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
} from "./commands/UpdateServicePrimaryTaskSetCommand";
import {
  UpdateTaskProtectionCommand,
  UpdateTaskProtectionCommandInput,
  UpdateTaskProtectionCommandOutput,
} from "./commands/UpdateTaskProtectionCommand";
import {
  UpdateTaskSetCommand,
  UpdateTaskSetCommandInput,
  UpdateTaskSetCommandOutput,
} from "./commands/UpdateTaskSetCommand";
import { ECSClient } from "./ECSClient";

/**
 * <fullname>Amazon Elastic Container Service</fullname>
 *          <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes
 * 			it easy to run, stop, and manage Docker containers. You can host your cluster on a
 * 			serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on
 * 			Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2)
 * 			or External (on-premises) instances that you manage.</p>
 *          <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls. This makes it easy to get the state of your cluster from a centralized service,
 * 			and gives you access to many familiar Amazon EC2 features.</p>
 *          <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. With Amazon ECS, you
 * 			don't need to operate your own cluster management and configuration management systems.
 * 			You also don't need to worry about scaling your management infrastructure.</p>
 */
export class ECS extends ECSClient {
  /**
   * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
   * 			cluster and are used in capacity provider strategies to facilitate cluster auto
   * 			scaling.</p>
   *          <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on
   * 			Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers.
   * 			These providers are available to all accounts in the Amazon Web Services Regions that Fargate
   * 			supports.</p>
   */
  public createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityProviderCommandOutput>;
  public createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void
  ): void;
  public createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void
  ): void;
  public createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCapacityProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateCapacityProviderCommandOutput) => void
  ): Promise<CreateCapacityProviderCommandOutput> | void {
    const command = new CreateCapacityProviderCommand(args);
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
   * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
   * 			cluster when you launch your first container instance. However, you can create your own
   * 			cluster with a unique name with the <code>CreateCluster</code> action.</p>
   *          <note>
   *             <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
   * 				create the Amazon ECS service-linked role for your account. This is so that it can manage
   * 				required resources in other Amazon Web Services services on your behalf. However, if the IAM user
   * 				that makes the call doesn't have permissions to create the service-linked role, it
   * 				isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
   * 					service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
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
   * <p>Runs and maintains your desired number of tasks from a specified task definition. If
   * 			the number of tasks running in a service drops below the <code>desiredCount</code>,
   * 			Amazon ECS runs another copy of the task in the specified cluster. To update an existing
   * 			service, see the <a>UpdateService</a> action.</p>
   *          <p>In addition to maintaining the desired count of tasks in your service, you can
   * 			optionally run your service behind one or more load balancers. The load balancers
   * 			distribute traffic across the tasks that are associated with the service. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>Tasks for services that don't use a load balancer are considered healthy if they're in
   * 			the <code>RUNNING</code> state. Tasks for services that use a load balancer are
   * 			considered healthy if they're in the <code>RUNNING</code> state and are reported as
   * 			healthy by the load balancer.</p>
   *          <p>There are two service scheduler strategies available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLICA</code> - The replica scheduling strategy places and
   * 					maintains your desired number of tasks across your cluster. By default, the
   * 					service scheduler spreads tasks across Availability Zones. You can use task
   * 					placement strategies and constraints to customize task placement decisions. For
   * 					more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one
   * 					task on each active container instance that meets all of the task placement
   * 					constraints that you specify in your cluster. The service scheduler also
   * 					evaluates the task placement constraints for running tasks. It also stops tasks
   * 					that don't meet the placement constraints. When using this strategy, you don't
   * 					need to specify a desired number of tasks, a task placement strategy, or use
   * 					Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>You can optionally specify a deployment configuration for your service. The deployment
   * 			is initiated by changing properties. For example, the deployment might be initiated by
   * 			the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for
   * 				<code>minimumHealthyPercent</code> is 100%. The default value for a daemon service
   * 			for <code>minimumHealthyPercent</code> is 0%.</p>
   *          <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy
   * 			percent represents a lower limit on the number of tasks in a service that must remain in
   * 			the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a
   * 			percentage of your desired number of tasks (rounded up to the nearest integer). This
   * 			happens when any of your container instances are in the <code>DRAINING</code> state if
   * 			the service contains tasks using the EC2 launch type. Using this
   * 			parameter, you can deploy without using additional cluster capacity. For example, if you
   * 			set your service to have desired number of four tasks and a minimum healthy percent of
   * 			50%, the scheduler might stop two existing tasks to free up cluster capacity before
   * 			starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services
   * 			that don't use a load balancer are considered healthy . If they're in the
   * 				<code>RUNNING</code> state and reported as healthy by the load balancer, tasks for
   * 			services that <i>do</i> use a load balancer are considered healthy . The
   * 			default value for minimum healthy percent is 100%.</p>
   *          <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the
   * 			number of tasks in a service that are allowed in the <code>RUNNING</code> or
   * 				<code>PENDING</code> state during a deployment. Specifically, it represents it as a
   * 			percentage of the desired number of tasks (rounded down to the nearest integer). This
   * 			happens when any of your container instances are in the <code>DRAINING</code> state if
   * 			the service contains tasks using the EC2 launch type. Using this
   * 			parameter, you can define the deployment batch size. For example, if your service has a
   * 			desired number of four tasks and a maximum percent value of 200%, the scheduler may
   * 			start four new tasks before stopping the four older tasks (provided that the cluster
   * 			resources required to do this are available). The default value for maximum percent is
   * 			200%.</p>
   *          <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code>
   * 			deployment controller types and tasks that use the EC2 launch type, the
   * 				<b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit
   * 			on the number of the tasks in the service that remain in the <code>RUNNING</code> state.
   * 			This is while the container instances are in the <code>DRAINING</code> state. If the
   * 			tasks in the service use the Fargate launch type, the minimum healthy
   * 			percent and maximum percent values aren't used. This is the case even if they're
   * 			currently visible when describing your service.</p>
   *          <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you
   * 			can specify only parameters that aren't controlled at the task set level. The only
   * 			required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>When the service scheduler launches new tasks, it determines task placement. For
   * 			information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS
   * 				task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public createService(
    args: CreateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceCommandOutput>;
  public createService(
    args: CreateServiceCommandInput,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceCommandOutput) => void
  ): Promise<CreateServiceCommandOutput> | void {
    const command = new CreateServiceCommand(args);
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
   * <p>Create a task set in the specified cluster and service. This is used when a service
   * 			uses the <code>EXTERNAL</code> deployment controller type. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment
   * 				types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public createTaskSet(
    args: CreateTaskSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTaskSetCommandOutput>;
  public createTaskSet(
    args: CreateTaskSetCommandInput,
    cb: (err: any, data?: CreateTaskSetCommandOutput) => void
  ): void;
  public createTaskSet(
    args: CreateTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskSetCommandOutput) => void
  ): void;
  public createTaskSet(
    args: CreateTaskSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTaskSetCommandOutput) => void),
    cb?: (err: any, data?: CreateTaskSetCommandOutput) => void
  ): Promise<CreateTaskSetCommandOutput> | void {
    const command = new CreateTaskSetCommand(args);
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
   * <p>Disables an account setting for a specified IAM user, IAM role, or the root user for
   * 			an account.</p>
   */
  public deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountSettingCommandOutput>;
  public deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void
  ): void;
  public deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void
  ): void;
  public deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountSettingCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountSettingCommandOutput) => void
  ): Promise<DeleteAccountSettingCommandOutput> | void {
    const command = new DeleteAccountSettingCommand(args);
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
   * <p>Deletes one or more custom attributes from an Amazon ECS resource.</p>
   */
  public deleteAttributes(
    args: DeleteAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttributesCommandOutput>;
  public deleteAttributes(
    args: DeleteAttributesCommandInput,
    cb: (err: any, data?: DeleteAttributesCommandOutput) => void
  ): void;
  public deleteAttributes(
    args: DeleteAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttributesCommandOutput) => void
  ): void;
  public deleteAttributes(
    args: DeleteAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAttributesCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttributesCommandOutput) => void
  ): Promise<DeleteAttributesCommandOutput> | void {
    const command = new DeleteAttributesCommand(args);
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
   * <p>Deletes the specified capacity provider.</p>
   *          <note>
   *             <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
   * 				reserved and can't be deleted. You can disassociate them from a cluster using either
   * 				the <a>PutClusterCapacityProviders</a> API or by deleting the
   * 				cluster.</p>
   *          </note>
   *          <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
   * 			the capacity provider strategy from all services. The <a>UpdateService</a>
   * 			API can be used to remove a capacity provider from a service's capacity provider
   * 			strategy. When updating a service, the <code>forceNewDeployment</code> option can be
   * 			used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
   * 			provider are transitioned to use the capacity from the remaining capacity providers.
   * 			Only capacity providers that aren't associated with a cluster can be deleted. To remove
   * 			a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
   */
  public deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCapacityProviderCommandOutput>;
  public deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    cb: (err: any, data?: DeleteCapacityProviderCommandOutput) => void
  ): void;
  public deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCapacityProviderCommandOutput) => void
  ): void;
  public deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCapacityProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteCapacityProviderCommandOutput) => void
  ): Promise<DeleteCapacityProviderCommandOutput> | void {
    const command = new DeleteCapacityProviderCommand(args);
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
   * <p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code>
   * 			state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your
   * 			account for a period of time. However, this behavior is subject to change in the future.
   * 			We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p>
   *          <p>You must deregister all container instances from this cluster before you may delete
   * 			it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
   */
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
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
   * <p>Deletes a specified service within a cluster. You can delete a service if you have no
   * 			running tasks in it and the desired task count is zero. If the service is actively
   * 			maintaining tasks, you can't delete it, and you must update the service to a desired
   * 			task count of zero. For more information, see <a>UpdateService</a>.</p>
   *          <note>
   *             <p>When you delete a service, if there are still running tasks that require cleanup,
   * 				the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the
   * 				service is no longer visible in the console or in the <a>ListServices</a>
   * 				API operation. After all tasks have transitioned to either <code>STOPPING</code> or
   * 					<code>STOPPED</code> status, the service status moves from <code>DRAINING</code>
   * 				to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or
   * 					<code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future,
   * 					<code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record
   * 				keeping, and <a>DescribeServices</a> calls on those services return a
   * 					<code>ServiceNotFoundException</code> error.</p>
   *          </note>
   *          <important>
   *             <p>If you attempt to create a new service with the same name as an existing service
   * 				in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an
   * 				error.</p>
   *          </important>
   */
  public deleteService(
    args: DeleteServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceCommandOutput>;
  public deleteService(
    args: DeleteServiceCommandInput,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceCommandOutput) => void
  ): Promise<DeleteServiceCommandOutput> | void {
    const command = new DeleteServiceCommand(args);
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
   * <p>Deletes a specified task set within a service. This is used when a service uses the
   * 				<code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaskSetCommandOutput>;
  public deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    cb: (err: any, data?: DeleteTaskSetCommandOutput) => void
  ): void;
  public deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskSetCommandOutput) => void
  ): void;
  public deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTaskSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteTaskSetCommandOutput) => void
  ): Promise<DeleteTaskSetCommandOutput> | void {
    const command = new DeleteTaskSetCommand(args);
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
   * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
   * 			no longer available to run tasks.</p>
   *          <p>If you intend to use the container instance for some other purpose after
   * 			deregistration, we recommend that you stop all of the tasks running on the container
   * 			instance before deregistration. That prevents any orphaned tasks from consuming
   * 			resources.</p>
   *          <p>Deregistering a container instance removes the instance from a cluster, but it doesn't
   * 			terminate the EC2 instance. If you are finished using the instance, be sure to terminate
   * 			it in the Amazon EC2 console to stop billing.</p>
   *          <note>
   *             <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
   * 				instance from your cluster (stopped container instances or instances with
   * 				disconnected agents aren't automatically deregistered when terminated).</p>
   *          </note>
   */
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterContainerInstanceCommandOutput>;
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void
  ): void;
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void
  ): void;
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterContainerInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void
  ): Promise<DeregisterContainerInstanceCommandOutput> | void {
    const command = new DeregisterContainerInstanceCommand(args);
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
   * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
   * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
   * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
   * 			Existing services that reference an <code>INACTIVE</code> task definition can still
   * 			scale up or down by modifying the service's desired count.</p>
   *          <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new
   * 			services, and you can't update an existing service to reference an <code>INACTIVE</code>
   * 			task definition. However, there may be up to a 10-minute window following deregistration
   * 			where these restrictions have not yet taken effect.</p>
   *          <note>
   *             <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
   * 				account indefinitely. However, this behavior is subject to change in the future. We
   * 				don't recommend that you rely on <code>INACTIVE</code> task definitions persisting
   * 				beyond the lifecycle of any associated tasks and services.</p>
   *          </note>
   */
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTaskDefinitionCommandOutput>;
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void
  ): void;
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void
  ): void;
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void
  ): Promise<DeregisterTaskDefinitionCommandOutput> | void {
    const command = new DeregisterTaskDefinitionCommand(args);
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
   * <p>Describes one or more of your capacity providers.</p>
   */
  public describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityProvidersCommandOutput>;
  public describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void
  ): void;
  public describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void
  ): void;
  public describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCapacityProvidersCommandOutput) => void),
    cb?: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void
  ): Promise<DescribeCapacityProvidersCommandOutput> | void {
    const command = new DescribeCapacityProvidersCommand(args);
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
   * <p>Describes one or more of your clusters.</p>
   */
  public describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  public describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeClustersCommandOutput) => void
  ): Promise<DescribeClustersCommandOutput> | void {
    const command = new DescribeClustersCommand(args);
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
   * <p>Describes one or more container instances. Returns metadata about each container
   * 			instance requested.</p>
   */
  public describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContainerInstancesCommandOutput>;
  public describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void
  ): void;
  public describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void
  ): void;
  public describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContainerInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeContainerInstancesCommandOutput) => void
  ): Promise<DescribeContainerInstancesCommandOutput> | void {
    const command = new DescribeContainerInstancesCommand(args);
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
   * <p>Describes the specified services running in your cluster.</p>
   */
  public describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  public describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServicesCommandOutput) => void
  ): Promise<DescribeServicesCommandOutput> | void {
    const command = new DescribeServicesCommand(args);
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
   * <p>Describes a task definition. You can specify a <code>family</code> and
   * 				<code>revision</code> to find information about a specific task definition, or you
   * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
   * 			family.</p>
   *          <note>
   *             <p>You can only describe <code>INACTIVE</code> task definitions while an active task
   * 				or service references them.</p>
   *          </note>
   */
  public describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskDefinitionCommandOutput>;
  public describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void
  ): void;
  public describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void
  ): void;
  public describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void
  ): Promise<DescribeTaskDefinitionCommandOutput> | void {
    const command = new DescribeTaskDefinitionCommand(args);
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
   * <p>Describes a specified task or tasks.</p>
   *          <p>Currently, stopped tasks appear in the returned results for at least one hour.</p>
   */
  public describeTasks(
    args: DescribeTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTasksCommandOutput>;
  public describeTasks(
    args: DescribeTasksCommandInput,
    cb: (err: any, data?: DescribeTasksCommandOutput) => void
  ): void;
  public describeTasks(
    args: DescribeTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTasksCommandOutput) => void
  ): void;
  public describeTasks(
    args: DescribeTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeTasksCommandOutput) => void
  ): Promise<DescribeTasksCommandOutput> | void {
    const command = new DescribeTasksCommand(args);
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
   * <p>Describes the task sets in the specified cluster and service. This is used when a
   * 			service uses the <code>EXTERNAL</code> deployment controller type. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
   * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskSetsCommandOutput>;
  public describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void
  ): void;
  public describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void
  ): void;
  public describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTaskSetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTaskSetsCommandOutput) => void
  ): Promise<DescribeTaskSetsCommandOutput> | void {
    const command = new DescribeTaskSetsCommand(args);
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
   * <note>
   *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
   *          </note>
   *          <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
   */
  public discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverPollEndpointCommandOutput>;
  public discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void
  ): void;
  public discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void
  ): void;
  public discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DiscoverPollEndpointCommandOutput) => void),
    cb?: (err: any, data?: DiscoverPollEndpointCommandOutput) => void
  ): Promise<DiscoverPollEndpointCommandOutput> | void {
    const command = new DiscoverPollEndpointCommand(args);
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
   * <p>Runs a command remotely on a container within a task.</p>
   *          <p>If you use a condition key in your IAM policy to refine the conditions for the policy
   * 			statement, for example limit the actions to a specific cluster, you receive an
   * 				<code>AccessDeniedException</code> when there is a mismatch between the condition
   * 			key value and the corresponding parameter value.</p>
   *          <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.htm">Using Amazon ECS Exec for
   * 			debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
   */
  public executeCommand(
    args: ExecuteCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteCommandCommandOutput>;
  public executeCommand(
    args: ExecuteCommandCommandInput,
    cb: (err: any, data?: ExecuteCommandCommandOutput) => void
  ): void;
  public executeCommand(
    args: ExecuteCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteCommandCommandOutput) => void
  ): void;
  public executeCommand(
    args: ExecuteCommandCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteCommandCommandOutput) => void),
    cb?: (err: any, data?: ExecuteCommandCommandOutput) => void
  ): Promise<ExecuteCommandCommandOutput> | void {
    const command = new ExecuteCommandCommand(args);
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
   * <p>Retrieves the protection status of tasks in an Amazon ECS service.</p>
   */
  public getTaskProtection(
    args: GetTaskProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaskProtectionCommandOutput>;
  public getTaskProtection(
    args: GetTaskProtectionCommandInput,
    cb: (err: any, data?: GetTaskProtectionCommandOutput) => void
  ): void;
  public getTaskProtection(
    args: GetTaskProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskProtectionCommandOutput) => void
  ): void;
  public getTaskProtection(
    args: GetTaskProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTaskProtectionCommandOutput) => void),
    cb?: (err: any, data?: GetTaskProtectionCommandOutput) => void
  ): Promise<GetTaskProtectionCommandOutput> | void {
    const command = new GetTaskProtectionCommand(args);
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
   * <p>Lists the account settings for a specified principal.</p>
   */
  public listAccountSettings(
    args: ListAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountSettingsCommandOutput>;
  public listAccountSettings(
    args: ListAccountSettingsCommandInput,
    cb: (err: any, data?: ListAccountSettingsCommandOutput) => void
  ): void;
  public listAccountSettings(
    args: ListAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountSettingsCommandOutput) => void
  ): void;
  public listAccountSettings(
    args: ListAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountSettingsCommandOutput) => void
  ): Promise<ListAccountSettingsCommandOutput> | void {
    const command = new ListAccountSettingsCommand(args);
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
   * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
   * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
   * 			of attribute objects, one for each attribute on each resource. You can filter the list
   * 			of results to a single attribute name to only return results that have that name. You
   * 			can also filter the results by attribute name and value. You can do this, for example,
   * 			to see which container instances in a cluster are running a Linux AMI
   * 				(<code>ecs.os-type=linux</code>). </p>
   */
  public listAttributes(
    args: ListAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributesCommandOutput>;
  public listAttributes(
    args: ListAttributesCommandInput,
    cb: (err: any, data?: ListAttributesCommandOutput) => void
  ): void;
  public listAttributes(
    args: ListAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributesCommandOutput) => void
  ): void;
  public listAttributes(
    args: ListAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttributesCommandOutput) => void),
    cb?: (err: any, data?: ListAttributesCommandOutput) => void
  ): Promise<ListAttributesCommandOutput> | void {
    const command = new ListAttributesCommand(args);
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
   * <p>Returns a list of existing clusters.</p>
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
   * <p>Returns a list of container instances in a specified cluster. You can filter the
   * 			results of a <code>ListContainerInstances</code> operation with cluster query language
   * 			statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainerInstancesCommandOutput>;
  public listContainerInstances(
    args: ListContainerInstancesCommandInput,
    cb: (err: any, data?: ListContainerInstancesCommandOutput) => void
  ): void;
  public listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContainerInstancesCommandOutput) => void
  ): void;
  public listContainerInstances(
    args: ListContainerInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContainerInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListContainerInstancesCommandOutput) => void
  ): Promise<ListContainerInstancesCommandOutput> | void {
    const command = new ListContainerInstancesCommand(args);
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
   * <p>Returns a list of services. You can filter the results by cluster, launch type, and
   * 			scheduling strategy.</p>
   */
  public listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  public listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  public listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicesCommandOutput) => void),
    cb?: (err: any, data?: ListServicesCommandOutput) => void
  ): Promise<ListServicesCommandOutput> | void {
    const command = new ListServicesCommand(args);
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
   * <p>This operation lists all of the services that are associated with a Cloud Map
   * 			namespace. This list might include services in different clusters. In contrast,
   * 				<code>ListServices</code> can only list services in one cluster at a time. If you
   * 			need to filter the list of services in a single cluster by various parameters, use
   * 				<code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesByNamespaceCommandOutput>;
  public listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    cb: (err: any, data?: ListServicesByNamespaceCommandOutput) => void
  ): void;
  public listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesByNamespaceCommandOutput) => void
  ): void;
  public listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicesByNamespaceCommandOutput) => void),
    cb?: (err: any, data?: ListServicesByNamespaceCommandOutput) => void
  ): Promise<ListServicesByNamespaceCommandOutput> | void {
    const command = new ListServicesByNamespaceCommand(args);
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
   * <p>List the tags for an Amazon ECS resource.</p>
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
   * <p>Returns a list of task definition families that are registered to your account. This
   * 			list includes task definition families that no longer have any <code>ACTIVE</code> task
   * 			definition revisions.</p>
   *          <p>You can filter out task definition families that don't contain any <code>ACTIVE</code>
   * 			task definition revisions by setting the <code>status</code> parameter to
   * 				<code>ACTIVE</code>. You can also filter the results with the
   * 				<code>familyPrefix</code> parameter.</p>
   */
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskDefinitionFamiliesCommandOutput>;
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void
  ): void;
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void
  ): void;
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void),
    cb?: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void
  ): Promise<ListTaskDefinitionFamiliesCommandOutput> | void {
    const command = new ListTaskDefinitionFamiliesCommand(args);
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
   * <p>Returns a list of task definitions that are registered to your account. You can filter
   * 			the results by family name with the <code>familyPrefix</code> parameter or by status
   * 			with the <code>status</code> parameter.</p>
   */
  public listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskDefinitionsCommandOutput>;
  public listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void
  ): void;
  public listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void
  ): void;
  public listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTaskDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListTaskDefinitionsCommandOutput) => void
  ): Promise<ListTaskDefinitionsCommandOutput> | void {
    const command = new ListTaskDefinitionsCommand(args);
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
   * <p>Returns a list of tasks. You can filter the results by cluster, task definition
   * 			family, container instance, launch type, what IAM principal started the task, or by the
   * 			desired status of the task.</p>
   *          <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks
   * 			appear in the returned results for at least one hour.</p>
   */
  public listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
  public listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
  public listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  public listTasks(
    args: ListTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTasksCommandOutput) => void),
    cb?: (err: any, data?: ListTasksCommandOutput) => void
  ): Promise<ListTasksCommandOutput> | void {
    const command = new ListTasksCommand(args);
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
   * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p>
   *          <p>If you change the account setting for the root user, the default settings for all of
   * 			the IAM users and roles that no individual account setting was specified are reset for.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account
   * 				Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or
   * 				<code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name
   * 			(ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or
   * 			the root user for an account is affected. The opt-in and opt-out account setting must be
   * 			set for each Amazon ECS resource separately. The ARN and resource ID format of a resource
   * 			is defined by the opt-in status of the IAM user or role that created the resource. You
   * 			must turn on this setting to use Amazon ECS features such as resource tagging.</p>
   *          <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI)
   * 			limit for any new container instances that support the feature is changed. If
   * 				<code>awsvpcTrunking</code> is enabled, any new container instances that support the
   * 			feature are launched have the increased ENI limits available to them. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network
   * 				Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>When <code>containerInsights</code> is specified, the default setting indicating
   * 			whether CloudWatch Container Insights is enabled for your clusters is changed. If
   * 				<code>containerInsights</code> is enabled, any new clusters that are created will
   * 			have Container Insights enabled unless you disable it during cluster creation. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch
   * 				Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public putAccountSetting(
    args: PutAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingCommandOutput>;
  public putAccountSetting(
    args: PutAccountSettingCommandInput,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;
  public putAccountSetting(
    args: PutAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;
  public putAccountSetting(
    args: PutAccountSettingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountSettingCommandOutput) => void),
    cb?: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): Promise<PutAccountSettingCommandOutput> | void {
    const command = new PutAccountSettingCommand(args);
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
   * <p>Modifies an account setting for all IAM users on an account for whom no individual
   * 			account setting has been specified. Account settings are set on a per-Region
   * 			basis.</p>
   */
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingDefaultCommandOutput>;
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void
  ): void;
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void
  ): void;
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountSettingDefaultCommandOutput) => void),
    cb?: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void
  ): Promise<PutAccountSettingDefaultCommandOutput> | void {
    const command = new PutAccountSettingDefaultCommand(args);
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
   * <p>Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist,
   * 			it's created. If the attribute exists, its value is replaced with the specified value.
   * 			To delete an attribute, use <a>DeleteAttributes</a>. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public putAttributes(
    args: PutAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAttributesCommandOutput>;
  public putAttributes(
    args: PutAttributesCommandInput,
    cb: (err: any, data?: PutAttributesCommandOutput) => void
  ): void;
  public putAttributes(
    args: PutAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAttributesCommandOutput) => void
  ): void;
  public putAttributes(
    args: PutAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutAttributesCommandOutput) => void
  ): Promise<PutAttributesCommandOutput> | void {
    const command = new PutAttributesCommand(args);
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
   * <p>Modifies the available capacity providers and the default capacity provider strategy
   * 			for a cluster.</p>
   *          <p>You must specify both the available capacity providers and a default capacity provider
   * 			strategy for the cluster. If the specified cluster has existing capacity providers
   * 			associated with it, you must specify all existing capacity providers in addition to any
   * 			new ones you want to add. Any existing capacity providers that are associated with a
   * 			cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call
   * 			will be disassociated with the cluster. You can only disassociate an existing capacity
   * 			provider from a cluster if it's not being used by any existing tasks.</p>
   *          <p>When creating a service or running a task on a cluster, if no capacity provider or
   * 			launch type is specified, then the cluster's default capacity provider strategy is used.
   * 			We recommend that you define a default capacity provider strategy for your cluster.
   * 			However, you must specify an empty array (<code>[]</code>) to bypass defining a default
   * 			strategy.</p>
   */
  public putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClusterCapacityProvidersCommandOutput>;
  public putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void
  ): void;
  public putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void
  ): void;
  public putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutClusterCapacityProvidersCommandOutput) => void),
    cb?: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void
  ): Promise<PutClusterCapacityProvidersCommandOutput> | void {
    const command = new PutClusterCapacityProvidersCommand(args);
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
   * <note>
   *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
   *          </note>
   *          <p>Registers an EC2 instance into the specified cluster. This instance becomes available
   * 			to place containers on.</p>
   */
  public registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterContainerInstanceCommandOutput>;
  public registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void
  ): void;
  public registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void
  ): void;
  public registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterContainerInstanceCommandOutput) => void),
    cb?: (err: any, data?: RegisterContainerInstanceCommandOutput) => void
  ): Promise<RegisterContainerInstanceCommandOutput> | void {
    const command = new RegisterContainerInstanceCommand(args);
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
   * <p>Registers a new task definition from the supplied <code>family</code> and
   * 				<code>containerDefinitions</code>. Optionally, you can add data volumes to your
   * 			containers with the <code>volumes</code> parameter. For more information about task
   * 			definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
   * 				Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter.
   * 			When you specify an IAM role for a task, its containers can then use the latest versions
   * 			of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in
   * 			the IAM policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
   * 				Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>You can specify a Docker networking mode for the containers in your task definition
   * 			with the <code>networkMode</code> parameter. The available network modes correspond to
   * 			those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
   * 				settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
   * 			network mode, the task is allocated an elastic network interface, and you must specify a
   * 				<a>NetworkConfiguration</a> when you create a service or run a task with
   * 			the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
   * 			in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTaskDefinitionCommandOutput>;
  public registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void
  ): void;
  public registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void
  ): void;
  public registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void
  ): Promise<RegisterTaskDefinitionCommandOutput> | void {
    const command = new RegisterTaskDefinitionCommand(args);
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
   * <p>Starts a new task using the specified task definition.</p>
   *          <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places
   * 			tasks using placement constraints and placement strategies. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or
   * 			place tasks manually on specific container instances.</p>
   *          <p>The Amazon ECS API follows an eventual consistency model. This is because of the
   * 			distributed nature of the system supporting the API. This means that the result of an
   * 			API command you run that affects your Amazon ECS resources might not be immediately visible
   * 			to all subsequent commands you run. Keep this in mind when you carry out an API command
   * 			that immediately follows a previous API command.</p>
   *          <p>To manage eventual consistency, you can do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Confirm the state of the resource before you run a command to modify it. Run
   * 					the DescribeTasks command using an exponential backoff algorithm to ensure that
   * 					you allow enough time for the previous command to propagate through the system.
   * 					To do this, run the DescribeTasks command repeatedly, starting with a couple of
   * 					seconds of wait time and increasing gradually up to five minutes of wait
   * 					time.</p>
   *             </li>
   *             <li>
   *                <p>Add wait time between subsequent commands, even if the DescribeTasks command
   * 					returns an accurate response. Apply an exponential backoff algorithm starting
   * 					with a couple of seconds of wait time, and increase gradually up to about five
   * 					minutes of wait time.</p>
   *             </li>
   *          </ul>
   */
  public runTask(args: RunTaskCommandInput, options?: __HttpHandlerOptions): Promise<RunTaskCommandOutput>;
  public runTask(args: RunTaskCommandInput, cb: (err: any, data?: RunTaskCommandOutput) => void): void;
  public runTask(
    args: RunTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunTaskCommandOutput) => void
  ): void;
  public runTask(
    args: RunTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RunTaskCommandOutput) => void),
    cb?: (err: any, data?: RunTaskCommandOutput) => void
  ): Promise<RunTaskCommandOutput> | void {
    const command = new RunTaskCommand(args);
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
   * <p>Starts a new task from the specified task definition on the specified container
   * 			instance or instances.</p>
   *          <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public startTask(args: StartTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartTaskCommandOutput>;
  public startTask(args: StartTaskCommandInput, cb: (err: any, data?: StartTaskCommandOutput) => void): void;
  public startTask(
    args: StartTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskCommandOutput) => void
  ): void;
  public startTask(
    args: StartTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTaskCommandOutput) => void),
    cb?: (err: any, data?: StartTaskCommandOutput) => void
  ): Promise<StartTaskCommandOutput> | void {
    const command = new StartTaskCommand(args);
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
   * <p>Stops a running task. Any tags associated with the task will be deleted.</p>
   *          <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker
   * 				stop</code> is issued to the containers running in the task. This results in a
   * 				<code>SIGTERM</code> value and a default 30-second timeout, after which the
   * 				<code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the
   * 			container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds
   * 			from receiving it, no <code>SIGKILL</code> value is sent.</p>
   *          <note>
   *             <p>The default 30-second timeout can be configured on the Amazon ECS container agent with
   * 				the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see
   * 					<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
   * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   */
  public stopTask(args: StopTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopTaskCommandOutput>;
  public stopTask(args: StopTaskCommandInput, cb: (err: any, data?: StopTaskCommandOutput) => void): void;
  public stopTask(
    args: StopTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTaskCommandOutput) => void
  ): void;
  public stopTask(
    args: StopTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopTaskCommandOutput) => void),
    cb?: (err: any, data?: StopTaskCommandOutput) => void
  ): Promise<StopTaskCommandOutput> | void {
    const command = new StopTaskCommand(args);
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
   * <note>
   *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
   *          </note>
   *          <p>Sent to acknowledge that an attachment changed states.</p>
   */
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitAttachmentStateChangesCommandOutput>;
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void
  ): void;
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void
  ): void;
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void),
    cb?: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void
  ): Promise<SubmitAttachmentStateChangesCommandOutput> | void {
    const command = new SubmitAttachmentStateChangesCommand(args);
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
   * <note>
   *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
   *          </note>
   *          <p>Sent to acknowledge that a container changed states.</p>
   */
  public submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitContainerStateChangeCommandOutput>;
  public submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void
  ): void;
  public submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void
  ): void;
  public submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitContainerStateChangeCommandOutput) => void),
    cb?: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void
  ): Promise<SubmitContainerStateChangeCommandOutput> | void {
    const command = new SubmitContainerStateChangeCommand(args);
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
   * <note>
   *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
   *          </note>
   *          <p>Sent to acknowledge that a task changed states.</p>
   */
  public submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitTaskStateChangeCommandOutput>;
  public submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void
  ): void;
  public submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void
  ): void;
  public submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitTaskStateChangeCommandOutput) => void),
    cb?: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void
  ): Promise<SubmitTaskStateChangeCommandOutput> | void {
    const command = new SubmitTaskStateChangeCommand(args);
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
   * <p>Associates the specified tags to a resource with the specified
   * 				<code>resourceArn</code>. If existing tags on a resource aren't specified in the
   * 			request parameters, they aren't changed. When a resource is deleted, the tags that are
   * 			associated with that resource are deleted as well.</p>
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
   * <p>Deletes specified tags from a resource.</p>
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
   * <p>Modifies the parameters for a capacity provider.</p>
   */
  public updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCapacityProviderCommandOutput>;
  public updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    cb: (err: any, data?: UpdateCapacityProviderCommandOutput) => void
  ): void;
  public updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCapacityProviderCommandOutput) => void
  ): void;
  public updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCapacityProviderCommandOutput) => void),
    cb?: (err: any, data?: UpdateCapacityProviderCommandOutput) => void
  ): Promise<UpdateCapacityProviderCommandOutput> | void {
    const command = new UpdateCapacityProviderCommand(args);
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
   * <p>Updates the cluster.</p>
   */
  public updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  public updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterCommandOutput) => void
  ): Promise<UpdateClusterCommandOutput> | void {
    const command = new UpdateClusterCommand(args);
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
   * <p>Modifies the settings to use for a cluster.</p>
   */
  public updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterSettingsCommandOutput>;
  public updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void
  ): void;
  public updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void
  ): void;
  public updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterSettingsCommandOutput) => void
  ): Promise<UpdateClusterSettingsCommandOutput> | void {
    const command = new UpdateClusterSettingsCommand(args);
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
   * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
   * 			Amazon ECS container agent doesn't interrupt running tasks or services on the container
   * 			instance. The process for updating the agent differs depending on whether your container
   * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
   *          <note>
   *             <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances
   * 				using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent,
   * 				you can update the <code>ecs-init</code> package. This updates the agent. For more
   * 				information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the
   * 					Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          </note>
   *          <note>
   *             <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not
   * 				apply to Windows container instances. We recommend that you launch new container
   * 				instances to update the agent version in your Windows clusters.</p>
   *          </note>
   *          <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon
   * 			Linux AMI with the <code>ecs-init</code> service installed and running. For help
   * 			updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContainerAgentCommandOutput>;
  public updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void
  ): void;
  public updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void
  ): void;
  public updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContainerAgentCommandOutput) => void),
    cb?: (err: any, data?: UpdateContainerAgentCommandOutput) => void
  ): Promise<UpdateContainerAgentCommandOutput> | void {
    const command = new UpdateContainerAgentCommand(args);
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
   * <p>Modifies the status of an Amazon ECS container instance.</p>
   *          <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the
   * 			status of a container instance to <code>DRAINING</code> to manually remove an instance
   * 			from a cluster, for example to perform system updates, update the Docker daemon, or
   * 			scale down the cluster size.</p>
   *          <important>
   *             <p>A container instance can't be changed to <code>DRAINING</code> until it has
   * 				reached an <code>ACTIVE</code> status. If the instance is in any other status, an
   * 				error will be received.</p>
   *          </important>
   *          <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks
   * 			from being scheduled for placement on the container instance and replacement service
   * 			tasks are started on other container instances in the cluster if the resources are
   * 			available. Service tasks on the container instance that are in the <code>PENDING</code>
   * 			state are stopped immediately.</p>
   *          <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are
   * 			stopped and replaced according to the service's deployment configuration parameters,
   * 				<code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change
   * 			the deployment configuration of your service using <a>UpdateService</a>.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
   * 						<code>desiredCount</code> temporarily during task replacement. For example,
   * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
   * 					scheduler to stop two existing tasks before starting two new tasks. If the
   * 					minimum is 100%, the service scheduler can't remove existing tasks until the
   * 					replacement tasks are considered healthy. Tasks for services that do not use a
   * 					load balancer are considered healthy if they're in the <code>RUNNING</code>
   * 					state. Tasks for services that use a load balancer are considered healthy if
   * 					they're in the <code>RUNNING</code> state and are reported as healthy by the
   * 					load balancer.</p>
   *             </li>
   *             <li>
   *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
   * 					number of running tasks during task replacement. You can use this to define the
   * 					replacement batch size. For example, if <code>desiredCount</code> is four tasks,
   * 					a maximum of 200% starts four new tasks before stopping the four tasks to be
   * 					drained, provided that the cluster resources required to do this are available.
   * 					If the maximum is 100%, then replacement tasks can't start until the draining
   * 					tasks have stopped.</p>
   *             </li>
   *          </ul>
   *          <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service
   * 			aren't affected. You must wait for them to finish or stop them manually.</p>
   *          <p>A container instance has completed draining when it has no more <code>RUNNING</code>
   * 			tasks. You can verify this using <a>ListTasks</a>.</p>
   *          <p>When a container instance has been drained, you can set a container instance to
   * 				<code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler
   * 			can begin scheduling tasks on the instance again.</p>
   */
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContainerInstancesStateCommandOutput>;
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void
  ): void;
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void
  ): void;
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContainerInstancesStateCommandOutput) => void),
    cb?: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void
  ): Promise<UpdateContainerInstancesStateCommandOutput> | void {
    const command = new UpdateContainerInstancesStateCommand(args);
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
   * <p>Modifies the parameters of a service.</p>
   *          <p>For services using the rolling update (<code>ECS</code>) you can update the desired
   * 			count, deployment configuration, network configuration, load balancers, service
   * 			registries, enable ECS managed tags option, propagate tags option, task placement
   * 			constraints and strategies, and task definition. When you update any of these
   * 			parameters, Amazon ECS starts new tasks with the new configuration. </p>
   *          <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller,
   * 			only the desired count, deployment configuration, health check grace period, task
   * 			placement constraints and strategies, enable ECS managed tags option, and propagate tags
   * 			can be updated using this API. If the network configuration, platform version, task
   * 			definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more
   * 			information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p>
   *          <p>For services using an external deployment controller, you can update only the desired
   * 			count, task placement constraints and strategies, health check grace period, enable ECS
   * 			managed tags option, and propagate tags option, using this API. If the launch type, load
   * 			balancer, network configuration, platform version, or task definition need to be
   * 			updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p>
   *          <p>You can add to or subtract from the number of instantiations of a task definition in a
   * 			service by specifying the cluster that the service is running in and a new
   * 				<code>desiredCount</code> parameter.</p>
   *          <p>If you have updated the Docker image of your application, you can create a new task
   * 			definition with that image and deploy it to your service. The service scheduler uses the
   * 			minimum healthy percent and maximum percent parameters (in the service's deployment
   * 			configuration) to determine the deployment strategy.</p>
   *          <note>
   *             <p>If your updated Docker image uses the same tag as what is in the existing task
   * 				definition for your service (for example, <code>my_image:latest</code>), you don't
   * 				need to create a new revision of your task definition. You can update the service
   * 				using the <code>forceNewDeployment</code> option. The new tasks launched by the
   * 				deployment pull the current image/tag combination from your repository when they
   * 				start.</p>
   *          </note>
   *          <p>You can also update the deployment configuration of a service. When a deployment is
   * 			triggered by updating the task definition of a service, the service scheduler uses the
   * 			deployment configuration parameters, <code>minimumHealthyPercent</code> and
   * 				<code>maximumPercent</code>, to determine the deployment strategy.</p>
   *          <ul>
   *             <li>
   *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
   * 						<code>desiredCount</code> temporarily during a deployment. For example, if
   * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
   * 					scheduler to stop two existing tasks before starting two new tasks. Tasks for
   * 					services that don't use a load balancer are considered healthy if they're in the
   * 						<code>RUNNING</code> state. Tasks for services that use a load balancer are
   * 					considered healthy if they're in the <code>RUNNING</code> state and are reported
   * 					as healthy by the load balancer.</p>
   *             </li>
   *             <li>
   *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
   * 					number of running tasks during a deployment. You can use it to define the
   * 					deployment batch size. For example, if <code>desiredCount</code> is four tasks,
   * 					a maximum of 200% starts four new tasks before stopping the four older tasks
   * 					(provided that the cluster resources required to do this are available).</p>
   *             </li>
   *          </ul>
   *          <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent
   * 			of <code>docker stop</code> is issued to the containers running in the task. This
   * 			results in a <code>SIGTERM</code> and a 30-second timeout. After this,
   * 				<code>SIGKILL</code> is sent and the containers are forcibly stopped. If the
   * 			container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from
   * 			receiving it, no <code>SIGKILL</code> is sent.</p>
   *          <p>When the service scheduler launches new tasks, it determines task placement in your
   * 			cluster with the following logic.</p>
   *          <ul>
   *             <li>
   *                <p>Determine which of the container instances in your cluster can support your
   * 					service's task definition. For example, they have the required CPU, memory,
   * 					ports, and container instance attributes.</p>
   *             </li>
   *             <li>
   *                <p>By default, the service scheduler attempts to balance tasks across
   * 					Availability Zones in this manner even though you can choose a different
   * 					placement strategy.</p>
   *                <ul>
   *                   <li>
   *                      <p>Sort the valid container instances by the fewest number of running
   * 							tasks for this service in the same Availability Zone as the instance.
   * 							For example, if zone A has one running service task and zones B and C
   * 							each have zero, valid container instances in either zone B or C are
   * 							considered optimal for placement.</p>
   *                   </li>
   *                   <li>
   *                      <p>Place the new service task on a valid container instance in an optimal
   * 							Availability Zone (based on the previous steps), favoring container
   * 							instances with the fewest number of running tasks for this
   * 							service.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>When the service scheduler stops running tasks, it attempts to maintain balance across
   * 			the Availability Zones in your cluster using the following logic: </p>
   *          <ul>
   *             <li>
   *                <p>Sort the container instances by the largest number of running tasks for this
   * 					service in the same Availability Zone as the instance. For example, if zone A
   * 					has one running service task and zones B and C each have two, container
   * 					instances in either zone B or C are considered optimal for termination.</p>
   *             </li>
   *             <li>
   *                <p>Stop the task on a container instance in an optimal Availability Zone (based
   * 					on the previous steps), favoring container instances with the largest number of
   * 					running tasks for this service.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You must have a service-linked role when you update any of the following service
   * 				properties. If you specified a custom IAM role when you created the service, Amazon ECS
   * 				automatically replaces the <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Service.html#ECS-Type-Service-roleArn">roleARN</a> associated with the service with the ARN of your
   * 				service-linked role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>loadBalancers,</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>serviceRegistries</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public updateService(
    args: UpdateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceCommandOutput>;
  public updateService(
    args: UpdateServiceCommandInput,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceCommandOutput) => void
  ): Promise<UpdateServiceCommandOutput> | void {
    const command = new UpdateServiceCommand(args);
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
   * <p>Modifies which task set in a service is the primary task set. Any parameters that are
   * 			updated on the primary task set in a service will transition to the service. This is
   * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
   * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput>;
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void
  ): void;
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void
  ): void;
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput> | void {
    const command = new UpdateServicePrimaryTaskSetCommand(args);
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
   * <p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to
   * 				<code>true</code> to protect your task from termination during scale-in events from
   * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service
   * 				Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p>
   *          <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS unsets the
   * 				<code>protectionEnabled</code> property making the task eligible for termination by
   * 			a subsequent scale-in event.</p>
   *          <p>You can specify a custom expiration period for task protection from 1 minute to up to
   * 			2,880 minutes (48 hours). To specify the custom expiration period, set the
   * 				<code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property
   * 			is always reset when you invoke this operation for a task that already has
   * 				<code>protectionEnabled</code> set to <code>true</code>. You can keep extending the
   * 			protection expiration period of a task by invoking this operation repeatedly.</p>
   *          <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in
   * 				protection</a> in the <i>
   *                <i>Amazon Elastic Container Service Developer Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking
   * 				this operation for a standalone task will result in an <code>TASK_NOT_VALID</code>
   * 				failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
   * 					reasons</a>.</p>
   *          </note>
   *          <important>
   *             <p>If you prefer to set task protection from within the container, we recommend using
   * 				the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p>
   *          </important>
   */
  public updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskProtectionCommandOutput>;
  public updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    cb: (err: any, data?: UpdateTaskProtectionCommandOutput) => void
  ): void;
  public updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskProtectionCommandOutput) => void
  ): void;
  public updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTaskProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateTaskProtectionCommandOutput) => void
  ): Promise<UpdateTaskProtectionCommandOutput> | void {
    const command = new UpdateTaskProtectionCommand(args);
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
   * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code>
   * 			deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
   * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  public updateTaskSet(
    args: UpdateTaskSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskSetCommandOutput>;
  public updateTaskSet(
    args: UpdateTaskSetCommandInput,
    cb: (err: any, data?: UpdateTaskSetCommandOutput) => void
  ): void;
  public updateTaskSet(
    args: UpdateTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskSetCommandOutput) => void
  ): void;
  public updateTaskSet(
    args: UpdateTaskSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTaskSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateTaskSetCommandOutput) => void
  ): Promise<UpdateTaskSetCommandOutput> | void {
    const command = new UpdateTaskSetCommand(args);
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
