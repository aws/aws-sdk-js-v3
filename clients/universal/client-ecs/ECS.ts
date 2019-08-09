import { ECSClient } from "./ECSClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AttributeLimitExceededException } from "./types/AttributeLimitExceededException";
import { BlockedException } from "./types/BlockedException";
import { ClientException } from "./types/ClientException";
import { ClusterContainsContainerInstancesException } from "./types/ClusterContainsContainerInstancesException";
import { ClusterContainsServicesException } from "./types/ClusterContainsServicesException";
import { ClusterContainsTasksException } from "./types/ClusterContainsTasksException";
import { ClusterNotFoundException } from "./types/ClusterNotFoundException";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateServiceInput } from "./types/CreateServiceInput";
import { CreateServiceOutput } from "./types/CreateServiceOutput";
import { CreateTaskSetInput } from "./types/CreateTaskSetInput";
import { CreateTaskSetOutput } from "./types/CreateTaskSetOutput";
import { DeleteAccountSettingInput } from "./types/DeleteAccountSettingInput";
import { DeleteAccountSettingOutput } from "./types/DeleteAccountSettingOutput";
import { DeleteAttributesInput } from "./types/DeleteAttributesInput";
import { DeleteAttributesOutput } from "./types/DeleteAttributesOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DeleteServiceInput } from "./types/DeleteServiceInput";
import { DeleteServiceOutput } from "./types/DeleteServiceOutput";
import { DeleteTaskSetInput } from "./types/DeleteTaskSetInput";
import { DeleteTaskSetOutput } from "./types/DeleteTaskSetOutput";
import { DeregisterContainerInstanceInput } from "./types/DeregisterContainerInstanceInput";
import { DeregisterContainerInstanceOutput } from "./types/DeregisterContainerInstanceOutput";
import { DeregisterTaskDefinitionInput } from "./types/DeregisterTaskDefinitionInput";
import { DeregisterTaskDefinitionOutput } from "./types/DeregisterTaskDefinitionOutput";
import { DescribeClustersInput } from "./types/DescribeClustersInput";
import { DescribeClustersOutput } from "./types/DescribeClustersOutput";
import { DescribeContainerInstancesInput } from "./types/DescribeContainerInstancesInput";
import { DescribeContainerInstancesOutput } from "./types/DescribeContainerInstancesOutput";
import { DescribeServicesInput } from "./types/DescribeServicesInput";
import { DescribeServicesOutput } from "./types/DescribeServicesOutput";
import { DescribeTaskDefinitionInput } from "./types/DescribeTaskDefinitionInput";
import { DescribeTaskDefinitionOutput } from "./types/DescribeTaskDefinitionOutput";
import { DescribeTaskSetsInput } from "./types/DescribeTaskSetsInput";
import { DescribeTaskSetsOutput } from "./types/DescribeTaskSetsOutput";
import { DescribeTasksInput } from "./types/DescribeTasksInput";
import { DescribeTasksOutput } from "./types/DescribeTasksOutput";
import { DiscoverPollEndpointInput } from "./types/DiscoverPollEndpointInput";
import { DiscoverPollEndpointOutput } from "./types/DiscoverPollEndpointOutput";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { ListAccountSettingsInput } from "./types/ListAccountSettingsInput";
import { ListAccountSettingsOutput } from "./types/ListAccountSettingsOutput";
import { ListAttributesInput } from "./types/ListAttributesInput";
import { ListAttributesOutput } from "./types/ListAttributesOutput";
import { ListClustersInput } from "./types/ListClustersInput";
import { ListClustersOutput } from "./types/ListClustersOutput";
import { ListContainerInstancesInput } from "./types/ListContainerInstancesInput";
import { ListContainerInstancesOutput } from "./types/ListContainerInstancesOutput";
import { ListServicesInput } from "./types/ListServicesInput";
import { ListServicesOutput } from "./types/ListServicesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTaskDefinitionFamiliesInput } from "./types/ListTaskDefinitionFamiliesInput";
import { ListTaskDefinitionFamiliesOutput } from "./types/ListTaskDefinitionFamiliesOutput";
import { ListTaskDefinitionsInput } from "./types/ListTaskDefinitionsInput";
import { ListTaskDefinitionsOutput } from "./types/ListTaskDefinitionsOutput";
import { ListTasksInput } from "./types/ListTasksInput";
import { ListTasksOutput } from "./types/ListTasksOutput";
import { MissingVersionException } from "./types/MissingVersionException";
import { NoUpdateAvailableException } from "./types/NoUpdateAvailableException";
import { PlatformTaskDefinitionIncompatibilityException } from "./types/PlatformTaskDefinitionIncompatibilityException";
import { PlatformUnknownException } from "./types/PlatformUnknownException";
import { PutAccountSettingDefaultInput } from "./types/PutAccountSettingDefaultInput";
import { PutAccountSettingDefaultOutput } from "./types/PutAccountSettingDefaultOutput";
import { PutAccountSettingInput } from "./types/PutAccountSettingInput";
import { PutAccountSettingOutput } from "./types/PutAccountSettingOutput";
import { PutAttributesInput } from "./types/PutAttributesInput";
import { PutAttributesOutput } from "./types/PutAttributesOutput";
import { RegisterContainerInstanceInput } from "./types/RegisterContainerInstanceInput";
import { RegisterContainerInstanceOutput } from "./types/RegisterContainerInstanceOutput";
import { RegisterTaskDefinitionInput } from "./types/RegisterTaskDefinitionInput";
import { RegisterTaskDefinitionOutput } from "./types/RegisterTaskDefinitionOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RunTaskInput } from "./types/RunTaskInput";
import { RunTaskOutput } from "./types/RunTaskOutput";
import { ServerException } from "./types/ServerException";
import { ServiceNotActiveException } from "./types/ServiceNotActiveException";
import { ServiceNotFoundException } from "./types/ServiceNotFoundException";
import { StartTaskInput } from "./types/StartTaskInput";
import { StartTaskOutput } from "./types/StartTaskOutput";
import { StopTaskInput } from "./types/StopTaskInput";
import { StopTaskOutput } from "./types/StopTaskOutput";
import { SubmitAttachmentStateChangesInput } from "./types/SubmitAttachmentStateChangesInput";
import { SubmitAttachmentStateChangesOutput } from "./types/SubmitAttachmentStateChangesOutput";
import { SubmitContainerStateChangeInput } from "./types/SubmitContainerStateChangeInput";
import { SubmitContainerStateChangeOutput } from "./types/SubmitContainerStateChangeOutput";
import { SubmitTaskStateChangeInput } from "./types/SubmitTaskStateChangeInput";
import { SubmitTaskStateChangeOutput } from "./types/SubmitTaskStateChangeOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TargetNotFoundException } from "./types/TargetNotFoundException";
import { TaskSetNotFoundException } from "./types/TaskSetNotFoundException";
import { UnsupportedFeatureException } from "./types/UnsupportedFeatureException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateContainerAgentInput } from "./types/UpdateContainerAgentInput";
import { UpdateContainerAgentOutput } from "./types/UpdateContainerAgentOutput";
import { UpdateContainerInstancesStateInput } from "./types/UpdateContainerInstancesStateInput";
import { UpdateContainerInstancesStateOutput } from "./types/UpdateContainerInstancesStateOutput";
import { UpdateInProgressException } from "./types/UpdateInProgressException";
import { UpdateServiceInput } from "./types/UpdateServiceInput";
import { UpdateServiceOutput } from "./types/UpdateServiceOutput";
import { UpdateServicePrimaryTaskSetInput } from "./types/UpdateServicePrimaryTaskSetInput";
import { UpdateServicePrimaryTaskSetOutput } from "./types/UpdateServicePrimaryTaskSetOutput";
import { UpdateTaskSetInput } from "./types/UpdateTaskSetInput";
import { UpdateTaskSetOutput } from "./types/UpdateTaskSetOutput";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateServiceCommand } from "./commands/CreateServiceCommand";
import { CreateTaskSetCommand } from "./commands/CreateTaskSetCommand";
import { DeleteAccountSettingCommand } from "./commands/DeleteAccountSettingCommand";
import { DeleteAttributesCommand } from "./commands/DeleteAttributesCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DeleteServiceCommand } from "./commands/DeleteServiceCommand";
import { DeleteTaskSetCommand } from "./commands/DeleteTaskSetCommand";
import { DeregisterContainerInstanceCommand } from "./commands/DeregisterContainerInstanceCommand";
import { DeregisterTaskDefinitionCommand } from "./commands/DeregisterTaskDefinitionCommand";
import { DescribeClustersCommand } from "./commands/DescribeClustersCommand";
import { DescribeContainerInstancesCommand } from "./commands/DescribeContainerInstancesCommand";
import { DescribeServicesCommand } from "./commands/DescribeServicesCommand";
import { DescribeTaskDefinitionCommand } from "./commands/DescribeTaskDefinitionCommand";
import { DescribeTaskSetsCommand } from "./commands/DescribeTaskSetsCommand";
import { DescribeTasksCommand } from "./commands/DescribeTasksCommand";
import { DiscoverPollEndpointCommand } from "./commands/DiscoverPollEndpointCommand";
import { ListAccountSettingsCommand } from "./commands/ListAccountSettingsCommand";
import { ListAttributesCommand } from "./commands/ListAttributesCommand";
import { ListClustersCommand } from "./commands/ListClustersCommand";
import { ListContainerInstancesCommand } from "./commands/ListContainerInstancesCommand";
import { ListServicesCommand } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTaskDefinitionFamiliesCommand } from "./commands/ListTaskDefinitionFamiliesCommand";
import { ListTaskDefinitionsCommand } from "./commands/ListTaskDefinitionsCommand";
import { ListTasksCommand } from "./commands/ListTasksCommand";
import { PutAccountSettingCommand } from "./commands/PutAccountSettingCommand";
import { PutAccountSettingDefaultCommand } from "./commands/PutAccountSettingDefaultCommand";
import { PutAttributesCommand } from "./commands/PutAttributesCommand";
import { RegisterContainerInstanceCommand } from "./commands/RegisterContainerInstanceCommand";
import { RegisterTaskDefinitionCommand } from "./commands/RegisterTaskDefinitionCommand";
import { RunTaskCommand } from "./commands/RunTaskCommand";
import { StartTaskCommand } from "./commands/StartTaskCommand";
import { StopTaskCommand } from "./commands/StopTaskCommand";
import { SubmitAttachmentStateChangesCommand } from "./commands/SubmitAttachmentStateChangesCommand";
import { SubmitContainerStateChangeCommand } from "./commands/SubmitContainerStateChangeCommand";
import { SubmitTaskStateChangeCommand } from "./commands/SubmitTaskStateChangeCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateContainerAgentCommand } from "./commands/UpdateContainerAgentCommand";
import { UpdateContainerInstancesStateCommand } from "./commands/UpdateContainerInstancesStateCommand";
import { UpdateServiceCommand } from "./commands/UpdateServiceCommand";
import { UpdateServicePrimaryTaskSetCommand } from "./commands/UpdateServicePrimaryTaskSetCommand";
import { UpdateTaskSetCommand } from "./commands/UpdateTaskSetCommand";

export class ECS extends ECSClient {
  /**
   * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the service-linked role for your account so that required resources in other AWS services can be managed on your behalf. However, if the IAM user that makes the call does not have permissions to create the service-linked role, it is not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS spawns another copy of the task in the specified cluster. To update an existing service, see <a>UpdateService</a>.</p> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind a load balancer. The load balancer distributes traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service Load Balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that <i>do not</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and the container instance that they're hosted on is reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is triggered by changing properties, such as the task definition or the desired count of a service, with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service is using the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that <i>do not</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and they're reported as healthy by the load balancer. The default value for minimum healthy percent is 100%.</p> <p>If a service is using the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service is using either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used, although they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the <code>placementStrategy</code> parameter):</p> <ul> <li> <p>Sort the valid container instances, giving priority to instances that have the fewest number of running tasks for this service in their respective Availability Zone. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {PlatformUnknownException} <p>The specified platform version does not exist.</p>
   *   - {PlatformTaskDefinitionIncompatibilityException} <p>The specified platform version does not satisfy the task definition's required capabilities.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createService(args: CreateServiceInput): Promise<CreateServiceOutput>;
  public createService(
    args: CreateServiceInput,
    cb: (err: any, data?: CreateServiceOutput) => void
  ): void;
  public createService(
    args: CreateServiceInput,
    cb?: (err: any, data?: CreateServiceOutput) => void
  ): Promise<CreateServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {PlatformUnknownException} <p>The specified platform version does not exist.</p>
   *   - {PlatformTaskDefinitionIncompatibilityException} <p>The specified platform version does not satisfy the task definition's required capabilities.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTaskSet(args: CreateTaskSetInput): Promise<CreateTaskSetOutput>;
  public createTaskSet(
    args: CreateTaskSetInput,
    cb: (err: any, data?: CreateTaskSetOutput) => void
  ): void;
  public createTaskSet(
    args: CreateTaskSetInput,
    cb?: (err: any, data?: CreateTaskSetOutput) => void
  ): Promise<CreateTaskSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTaskSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables an account setting for a specified IAM user, IAM role, or the root user for an account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccountSetting(
    args: DeleteAccountSettingInput
  ): Promise<DeleteAccountSettingOutput>;
  public deleteAccountSetting(
    args: DeleteAccountSettingInput,
    cb: (err: any, data?: DeleteAccountSettingOutput) => void
  ): void;
  public deleteAccountSetting(
    args: DeleteAccountSettingInput,
    cb?: (err: any, data?: DeleteAccountSettingOutput) => void
  ): Promise<DeleteAccountSettingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccountSettingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more custom attributes from an Amazon ECS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {TargetNotFoundException} <p>The specified target could not be found. You can view your available container instances with <a>ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and Region-specific.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAttributes(
    args: DeleteAttributesInput
  ): Promise<DeleteAttributesOutput>;
  public deleteAttributes(
    args: DeleteAttributesInput,
    cb: (err: any, data?: DeleteAttributesOutput) => void
  ): void;
  public deleteAttributes(
    args: DeleteAttributesInput,
    cb?: (err: any, data?: DeleteAttributesOutput) => void
  ): Promise<DeleteAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified cluster. You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ClusterContainsContainerInstancesException} <p>You cannot delete a cluster that has registered container instances. First, deregister the container instances before you can delete the cluster. For more information, see <a>DeregisterContainerInstance</a>.</p>
   *   - {ClusterContainsServicesException} <p>You cannot delete a cluster that contains services. First, update the service to reduce its desired task count to 0 and then delete the service. For more information, see <a>UpdateService</a> and <a>DeleteService</a>.</p>
   *   - {ClusterContainsTasksException} <p>You cannot delete a cluster that has active tasks.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCluster(args: DeleteClusterInput): Promise<DeleteClusterOutput>;
  public deleteCluster(
    args: DeleteClusterInput,
    cb: (err: any, data?: DeleteClusterOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterInput,
    cb?: (err: any, data?: DeleteClusterOutput) => void
  ): Promise<DeleteClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After the tasks have stopped, then the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteService(args: DeleteServiceInput): Promise<DeleteServiceOutput>;
  public deleteService(
    args: DeleteServiceInput,
    cb: (err: any, data?: DeleteServiceOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceInput,
    cb?: (err: any, data?: DeleteServiceOutput) => void
  ): Promise<DeleteServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {TaskSetNotFoundException} <p>The specified task set could not be found. You can view your available container instances with <a>DescribeTaskSets</a>. Task sets are specific to each cluster, service and Region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTaskSet(args: DeleteTaskSetInput): Promise<DeleteTaskSetOutput>;
  public deleteTaskSet(
    args: DeleteTaskSetInput,
    cb: (err: any, data?: DeleteTaskSetOutput) => void
  ): void;
  public deleteTaskSet(
    args: DeleteTaskSetInput,
    cb?: (err: any, data?: DeleteTaskSetOutput) => void
  ): Promise<DeleteTaskSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTaskSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated).</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceInput
  ): Promise<DeregisterContainerInstanceOutput>;
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceInput,
    cb: (err: any, data?: DeregisterContainerInstanceOutput) => void
  ): void;
  public deregisterContainerInstance(
    args: DeregisterContainerInstanceInput,
    cb?: (err: any, data?: DeregisterContainerInstanceOutput) => void
  ): Promise<DeregisterContainerInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterContainerInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count.</p> <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you cannot update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future, so you should not rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionInput
  ): Promise<DeregisterTaskDefinitionOutput>;
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionInput,
    cb: (err: any, data?: DeregisterTaskDefinitionOutput) => void
  ): void;
  public deregisterTaskDefinition(
    args: DeregisterTaskDefinitionInput,
    cb?: (err: any, data?: DeregisterTaskDefinitionOutput) => void
  ): Promise<DeregisterTaskDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterTaskDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes one or more of your clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusters(
    args: DescribeClustersInput
  ): Promise<DescribeClustersOutput>;
  public describeClusters(
    args: DescribeClustersInput,
    cb: (err: any, data?: DescribeClustersOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersInput,
    cb?: (err: any, data?: DescribeClustersOutput) => void
  ): Promise<DescribeClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes Amazon Elastic Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeContainerInstances(
    args: DescribeContainerInstancesInput
  ): Promise<DescribeContainerInstancesOutput>;
  public describeContainerInstances(
    args: DescribeContainerInstancesInput,
    cb: (err: any, data?: DescribeContainerInstancesOutput) => void
  ): void;
  public describeContainerInstances(
    args: DescribeContainerInstancesInput,
    cb?: (err: any, data?: DescribeContainerInstancesOutput) => void
  ): Promise<DescribeContainerInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeContainerInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified services running in your cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServices(
    args: DescribeServicesInput
  ): Promise<DescribeServicesOutput>;
  public describeServices(
    args: DescribeServicesInput,
    cb: (err: any, data?: DescribeServicesOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesInput,
    cb?: (err: any, data?: DescribeServicesOutput) => void
  ): Promise<DescribeServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTaskDefinition(
    args: DescribeTaskDefinitionInput
  ): Promise<DescribeTaskDefinitionOutput>;
  public describeTaskDefinition(
    args: DescribeTaskDefinitionInput,
    cb: (err: any, data?: DescribeTaskDefinitionOutput) => void
  ): void;
  public describeTaskDefinition(
    args: DescribeTaskDefinitionInput,
    cb?: (err: any, data?: DescribeTaskDefinitionOutput) => void
  ): Promise<DescribeTaskDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTaskDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTaskSets(
    args: DescribeTaskSetsInput
  ): Promise<DescribeTaskSetsOutput>;
  public describeTaskSets(
    args: DescribeTaskSetsInput,
    cb: (err: any, data?: DescribeTaskSetsOutput) => void
  ): void;
  public describeTaskSets(
    args: DescribeTaskSetsInput,
    cb?: (err: any, data?: DescribeTaskSetsOutput) => void
  ): Promise<DescribeTaskSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTaskSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a specified task or tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTasks(args: DescribeTasksInput): Promise<DescribeTasksOutput>;
  public describeTasks(
    args: DescribeTasksInput,
    cb: (err: any, data?: DescribeTasksOutput) => void
  ): void;
  public describeTasks(
    args: DescribeTasksInput,
    cb?: (err: any, data?: DescribeTasksOutput) => void
  ): Promise<DescribeTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public discoverPollEndpoint(
    args: DiscoverPollEndpointInput
  ): Promise<DiscoverPollEndpointOutput>;
  public discoverPollEndpoint(
    args: DiscoverPollEndpointInput,
    cb: (err: any, data?: DiscoverPollEndpointOutput) => void
  ): void;
  public discoverPollEndpoint(
    args: DiscoverPollEndpointInput,
    cb?: (err: any, data?: DiscoverPollEndpointOutput) => void
  ): Promise<DiscoverPollEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DiscoverPollEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the account settings for a specified principal.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAccountSettings(
    args: ListAccountSettingsInput
  ): Promise<ListAccountSettingsOutput>;
  public listAccountSettings(
    args: ListAccountSettingsInput,
    cb: (err: any, data?: ListAccountSettingsOutput) => void
  ): void;
  public listAccountSettings(
    args: ListAccountSettingsInput,
    cb?: (err: any, data?: ListAccountSettingsOutput) => void
  ): Promise<ListAccountSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAccountSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttributes(
    args: ListAttributesInput
  ): Promise<ListAttributesOutput>;
  public listAttributes(
    args: ListAttributesInput,
    cb: (err: any, data?: ListAttributesOutput) => void
  ): void;
  public listAttributes(
    args: ListAttributesInput,
    cb?: (err: any, data?: ListAttributesOutput) => void
  ): Promise<ListAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
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
   * <p>Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listContainerInstances(
    args: ListContainerInstancesInput
  ): Promise<ListContainerInstancesOutput>;
  public listContainerInstances(
    args: ListContainerInstancesInput,
    cb: (err: any, data?: ListContainerInstancesOutput) => void
  ): void;
  public listContainerInstances(
    args: ListContainerInstancesInput,
    cb?: (err: any, data?: ListContainerInstancesOutput) => void
  ): Promise<ListContainerInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListContainerInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the services that are running in a specified cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServices(args: ListServicesInput): Promise<ListServicesOutput>;
  public listServices(
    args: ListServicesInput,
    cb: (err: any, data?: ListServicesOutput) => void
  ): void;
  public listServices(
    args: ListServicesInput,
    cb?: (err: any, data?: ListServicesOutput) => void
  ): Promise<ListServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the tags for an Amazon ECS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any <code>ACTIVE</code> task definition revisions).</p> <p>You can filter out task definition families that do not contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesInput
  ): Promise<ListTaskDefinitionFamiliesOutput>;
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesInput,
    cb: (err: any, data?: ListTaskDefinitionFamiliesOutput) => void
  ): void;
  public listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesInput,
    cb?: (err: any, data?: ListTaskDefinitionFamiliesOutput) => void
  ): Promise<ListTaskDefinitionFamiliesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTaskDefinitionFamiliesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTaskDefinitions(
    args: ListTaskDefinitionsInput
  ): Promise<ListTaskDefinitionsOutput>;
  public listTaskDefinitions(
    args: ListTaskDefinitionsInput,
    cb: (err: any, data?: ListTaskDefinitionsOutput) => void
  ): void;
  public listTaskDefinitions(
    args: ListTaskDefinitionsInput,
    cb?: (err: any, data?: ListTaskDefinitionsOutput) => void
  ): Promise<ListTaskDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTaskDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the <code>family</code>, <code>containerInstance</code>, and <code>desiredStatus</code> parameters.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTasks(args: ListTasksInput): Promise<ListTasksOutput>;
  public listTasks(
    args: ListTasksInput,
    cb: (err: any, data?: ListTasksOutput) => void
  ): void;
  public listTasks(
    args: ListTasksInput,
    cb?: (err: any, data?: ListTasksOutput) => void
  ): Promise<ListTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an account setting. If you change the account setting for the root user, the default settings for all of the IAM users and roles for which no individual account setting has been specified are reset. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource will be defined by the opt-in status of the IAM user or role that created the resource. You must enable this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is enabled, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether CloudWatch Container Insights is enabled for your clusters is changed. If <code>containerInsights</code> is enabled, any new clusters that are created will have Container Insights enabled unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAccountSetting(
    args: PutAccountSettingInput
  ): Promise<PutAccountSettingOutput>;
  public putAccountSetting(
    args: PutAccountSettingInput,
    cb: (err: any, data?: PutAccountSettingOutput) => void
  ): void;
  public putAccountSetting(
    args: PutAccountSettingInput,
    cb?: (err: any, data?: PutAccountSettingOutput) => void
  ): Promise<PutAccountSettingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAccountSettingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an account setting for all IAM users on an account for whom no individual account setting has been specified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultInput
  ): Promise<PutAccountSettingDefaultOutput>;
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultInput,
    cb: (err: any, data?: PutAccountSettingDefaultOutput) => void
  ): void;
  public putAccountSettingDefault(
    args: PutAccountSettingDefaultInput,
    cb?: (err: any, data?: PutAccountSettingDefaultOutput) => void
  ): Promise<PutAccountSettingDefaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAccountSettingDefaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {TargetNotFoundException} <p>The specified target could not be found. You can view your available container instances with <a>ListContainerInstances</a>. Amazon ECS container instances are cluster-specific and Region-specific.</p>
   *   - {AttributeLimitExceededException} <p>You can apply up to 10 custom attributes per resource. You can view the attributes of a resource with <a>ListAttributes</a>. You can remove existing attributes on a resource with <a>DeleteAttributes</a>.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAttributes(args: PutAttributesInput): Promise<PutAttributesOutput>;
  public putAttributes(
    args: PutAttributesInput,
    cb: (err: any, data?: PutAttributesOutput) => void
  ): void;
  public putAttributes(
    args: PutAttributesInput,
    cb?: (err: any, data?: PutAttributesOutput) => void
  ): Promise<PutAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerContainerInstance(
    args: RegisterContainerInstanceInput
  ): Promise<RegisterContainerInstanceOutput>;
  public registerContainerInstance(
    args: RegisterContainerInstanceInput,
    cb: (err: any, data?: RegisterContainerInstanceOutput) => void
  ): void;
  public registerContainerInstance(
    args: RegisterContainerInstanceInput,
    cb?: (err: any, data?: RegisterContainerInstanceOutput) => void
  ): Promise<RegisterContainerInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterContainerInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerTaskDefinition(
    args: RegisterTaskDefinitionInput
  ): Promise<RegisterTaskDefinitionOutput>;
  public registerTaskDefinition(
    args: RegisterTaskDefinitionInput,
    cb: (err: any, data?: RegisterTaskDefinitionOutput) => void
  ): void;
  public registerTaskDefinition(
    args: RegisterTaskDefinitionInput,
    cb?: (err: any, data?: RegisterTaskDefinitionOutput) => void
  ): Promise<RegisterTaskDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterTaskDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <p>The Amazon ECS API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {PlatformUnknownException} <p>The specified platform version does not exist.</p>
   *   - {PlatformTaskDefinitionIncompatibilityException} <p>The specified platform version does not satisfy the task definition's required capabilities.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {BlockedException} <p>Your AWS account has been blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">AWS Support</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public runTask(args: RunTaskInput): Promise<RunTaskOutput>;
  public runTask(
    args: RunTaskInput,
    cb: (err: any, data?: RunTaskOutput) => void
  ): void;
  public runTask(
    args: RunTaskInput,
    cb?: (err: any, data?: RunTaskOutput) => void
  ): Promise<RunTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RunTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startTask(args: StartTaskInput): Promise<StartTaskOutput>;
  public startTask(
    args: StartTaskInput,
    cb: (err: any, data?: StartTaskOutput) => void
  ): void;
  public startTask(
    args: StartTaskInput,
    cb?: (err: any, data?: StartTaskOutput) => void
  ): Promise<StartTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTask(args: StopTaskInput): Promise<StopTaskOutput>;
  public stopTask(
    args: StopTaskInput,
    cb: (err: any, data?: StopTaskOutput) => void
  ): void;
  public stopTask(
    args: StopTaskInput,
    cb?: (err: any, data?: StopTaskOutput) => void
  ): Promise<StopTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesInput
  ): Promise<SubmitAttachmentStateChangesOutput>;
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesInput,
    cb: (err: any, data?: SubmitAttachmentStateChangesOutput) => void
  ): void;
  public submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesInput,
    cb?: (err: any, data?: SubmitAttachmentStateChangesOutput) => void
  ): Promise<SubmitAttachmentStateChangesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubmitAttachmentStateChangesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public submitContainerStateChange(
    args: SubmitContainerStateChangeInput
  ): Promise<SubmitContainerStateChangeOutput>;
  public submitContainerStateChange(
    args: SubmitContainerStateChangeInput,
    cb: (err: any, data?: SubmitContainerStateChangeOutput) => void
  ): void;
  public submitContainerStateChange(
    args: SubmitContainerStateChangeInput,
    cb?: (err: any, data?: SubmitContainerStateChangeOutput) => void
  ): Promise<SubmitContainerStateChangeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubmitContainerStateChangeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public submitTaskStateChange(
    args: SubmitTaskStateChangeInput
  ): Promise<SubmitTaskStateChangeOutput>;
  public submitTaskStateChange(
    args: SubmitTaskStateChangeInput,
    cb: (err: any, data?: SubmitTaskStateChangeOutput) => void
  ): void;
  public submitTaskStateChange(
    args: SubmitTaskStateChangeInput,
    cb?: (err: any, data?: SubmitTaskStateChangeOutput) => void
  ): Promise<SubmitTaskStateChangeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubmitTaskStateChangeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes specified tags from a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ResourceNotFoundException} <p>The specified resource could not be found.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <p> <code>UpdateContainerAgent</code> requires the Amazon ECS-optimized AMI or Amazon Linux with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UpdateInProgressException} <p>There is already a current Amazon ECS container agent update in progress on the specified container instance. If the container agent becomes disconnected while it is in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.</p>
   *   - {NoUpdateAvailableException} <p>There is no update available for this Amazon ECS container agent. This could be because the agent is already running the latest version, or it is so old that there is no update path to the current version.</p>
   *   - {MissingVersionException} <p>Amazon ECS is unable to determine the current version of the Amazon ECS container agent on the container instance and does not have enough information to proceed with an update. This could be because the agent running on the container instance is an older or custom version that does not use our version information.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateContainerAgent(
    args: UpdateContainerAgentInput
  ): Promise<UpdateContainerAgentOutput>;
  public updateContainerAgent(
    args: UpdateContainerAgentInput,
    cb: (err: any, data?: UpdateContainerAgentOutput) => void
  ): void;
  public updateContainerAgent(
    args: UpdateContainerAgentInput,
    cb?: (err: any, data?: UpdateContainerAgentOutput) => void
  ): Promise<UpdateContainerAgentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateContainerAgentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance cannot be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service are not affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateInput
  ): Promise<UpdateContainerInstancesStateOutput>;
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateInput,
    cb: (err: any, data?: UpdateContainerInstancesStateOutput) => void
  ): void;
  public updateContainerInstancesState(
    args: UpdateContainerInstancesStateInput,
    cb?: (err: any, data?: UpdateContainerInstancesStateOutput) => void
  ): Promise<UpdateContainerInstancesStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateContainerInstancesStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) deployment controller, the desired count, deployment configuration, network configuration, or task definition used can be updated.</p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, and health check grace period can be updated using this API. If the network configuration, platform version, or task definition need to be updated, a new AWS CodeDeploy deployment should be created. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>AWS CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count and health check grace period using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, you should create a new task set. For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you do not need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout, after which <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {PlatformUnknownException} <p>The specified platform version does not exist.</p>
   *   - {PlatformTaskDefinitionIncompatibilityException} <p>The specified platform version does not satisfy the task definition's required capabilities.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateService(args: UpdateServiceInput): Promise<UpdateServiceOutput>;
  public updateService(
    args: UpdateServiceInput,
    cb: (err: any, data?: UpdateServiceOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceInput,
    cb?: (err: any, data?: UpdateServiceOutput) => void
  ): Promise<UpdateServiceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {TaskSetNotFoundException} <p>The specified task set could not be found. You can view your available container instances with <a>DescribeTaskSets</a>. Task sets are specific to each cluster, service and Region.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetInput
  ): Promise<UpdateServicePrimaryTaskSetOutput>;
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetInput,
    cb: (err: any, data?: UpdateServicePrimaryTaskSetOutput) => void
  ): void;
  public updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetInput,
    cb?: (err: any, data?: UpdateServicePrimaryTaskSetOutput) => void
  ): Promise<UpdateServicePrimaryTaskSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServicePrimaryTaskSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServerException} <p>These errors are usually caused by a server issue.</p>
   *   - {ClientException} <p>These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.</p>
   *   - {InvalidParameterException} <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
   *   - {ClusterNotFoundException} <p>The specified cluster could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region-specific.</p>
   *   - {UnsupportedFeatureException} <p>The specified task is not supported in this Region.</p>
   *   - {AccessDeniedException} <p>You do not have authorization to perform the requested action.</p>
   *   - {ServiceNotFoundException} <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
   *   - {ServiceNotActiveException} <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
   *   - {TaskSetNotFoundException} <p>The specified task set could not be found. You can view your available container instances with <a>DescribeTaskSets</a>. Task sets are specific to each cluster, service and Region.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTaskSet(args: UpdateTaskSetInput): Promise<UpdateTaskSetOutput>;
  public updateTaskSet(
    args: UpdateTaskSetInput,
    cb: (err: any, data?: UpdateTaskSetOutput) => void
  ): void;
  public updateTaskSet(
    args: UpdateTaskSetInput,
    cb?: (err: any, data?: UpdateTaskSetOutput) => void
  ): Promise<UpdateTaskSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTaskSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
