import { ECSClient } from "./ECSClient";
import { CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput } from "./commands/CreateCapacityProviderCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import { CreateTaskSetCommandInput, CreateTaskSetCommandOutput } from "./commands/CreateTaskSetCommand";
import { DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput } from "./commands/DeleteAccountSettingCommand";
import { DeleteAttributesCommandInput, DeleteAttributesCommandOutput } from "./commands/DeleteAttributesCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import { DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput } from "./commands/DeleteTaskSetCommand";
import { DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput } from "./commands/DeregisterContainerInstanceCommand";
import { DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput } from "./commands/DeregisterTaskDefinitionCommand";
import { DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput } from "./commands/DescribeCapacityProvidersCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import { DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput } from "./commands/DescribeContainerInstancesCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand";
import { DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput } from "./commands/DescribeTaskDefinitionCommand";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "./commands/DescribeTaskSetsCommand";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "./commands/DescribeTasksCommand";
import { DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput } from "./commands/DiscoverPollEndpointCommand";
import { ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput } from "./commands/ListAccountSettingsCommand";
import { ListAttributesCommandInput, ListAttributesCommandOutput } from "./commands/ListAttributesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput } from "./commands/ListContainerInstancesCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput } from "./commands/ListTaskDefinitionFamiliesCommand";
import { ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput } from "./commands/ListTaskDefinitionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { PutAccountSettingCommandInput, PutAccountSettingCommandOutput } from "./commands/PutAccountSettingCommand";
import { PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput } from "./commands/PutAccountSettingDefaultCommand";
import { PutAttributesCommandInput, PutAttributesCommandOutput } from "./commands/PutAttributesCommand";
import { PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput } from "./commands/PutClusterCapacityProvidersCommand";
import { RegisterContainerInstanceCommandInput, RegisterContainerInstanceCommandOutput } from "./commands/RegisterContainerInstanceCommand";
import { RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput } from "./commands/RegisterTaskDefinitionCommand";
import { RunTaskCommandInput, RunTaskCommandOutput } from "./commands/RunTaskCommand";
import { StartTaskCommandInput, StartTaskCommandOutput } from "./commands/StartTaskCommand";
import { StopTaskCommandInput, StopTaskCommandOutput } from "./commands/StopTaskCommand";
import { SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput } from "./commands/SubmitAttachmentStateChangesCommand";
import { SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput } from "./commands/SubmitContainerStateChangeCommand";
import { SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput } from "./commands/SubmitTaskStateChangeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateClusterSettingsCommandInput, UpdateClusterSettingsCommandOutput } from "./commands/UpdateClusterSettingsCommand";
import { UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput } from "./commands/UpdateContainerAgentCommand";
import { UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput } from "./commands/UpdateContainerInstancesStateCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import { UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput } from "./commands/UpdateServicePrimaryTaskSetCommand";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "./commands/UpdateTaskSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Elastic Container Service</fullname>
 *         <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 *             it easy to run, stop, and manage Docker containers on a cluster. You can host your
 *             cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 *             services or tasks using the Fargate launch type. For more control, you can host your
 *             tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2
 *             launch type. For more information about launch types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch
 *             Types</a>.</p>
 *         <p>Amazon ECS lets you launch and stop container-based applications with simple API calls,
 *             allows you to get the state of your cluster from a centralized service, and gives you
 *             access to many familiar Amazon EC2 features.</p>
 *         <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 *             your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 *             the need for you to operate your own cluster management and configuration management
 *             systems or worry about scaling your management infrastructure.</p>
 */
export declare class ECS extends ECSClient {
    /**
     * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
     *             cluster and are used in capacity provider strategies to facilitate cluster auto
     *             scaling.</p>
     *         <p>Only capacity providers using an Auto Scaling group can be created. Amazon ECS tasks on
     *             AWS Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers
     *             which are already created and available to all accounts in Regions supported by
     *             AWS Fargate.</p>
     */
    createCapacityProvider(args: CreateCapacityProviderCommandInput, options?: __HttpHandlerOptions): Promise<CreateCapacityProviderCommandOutput>;
    createCapacityProvider(args: CreateCapacityProviderCommandInput, cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void): void;
    createCapacityProvider(args: CreateCapacityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
     *             cluster when you launch your first container instance. However, you can create your own
     *             cluster with a unique name with the <code>CreateCluster</code> action.</p>
     *         <note>
     *             <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
     *                 create the Amazon ECS service-linked role for your account so that required resources in
     *                 other AWS services can be managed on your behalf. However, if the IAM user that
     *                 makes the call does not have permissions to create the service-linked role, it is
     *                 not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
     *                     Service-Linked Roles for Amazon ECS</a> in the
     *                     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         </note>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Runs and maintains a desired number of tasks from a specified task definition. If the
     *             number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS
     *             runs another copy of the task in the specified cluster. To update an existing service,
     *             see <a>UpdateService</a>.</p>
     *         <p>In addition to maintaining the desired count of tasks in your service, you can
     *             optionally run your service behind one or more load balancers. The load balancers
     *             distribute traffic across the tasks that are associated with the service. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service Load Balancing</a> in the
     *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>Tasks for services that <i>do not</i> use a load balancer are considered
     *             healthy if they're in the <code>RUNNING</code> state. Tasks for services that
     *                 <i>do</i> use a load balancer are considered healthy if they're in the
     *                 <code>RUNNING</code> state and the container instance that they're hosted on is
     *             reported as healthy by the load balancer.</p>
     *         <p>There are two service scheduler strategies available:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>REPLICA</code> - The replica scheduling strategy places and
     *                     maintains the desired number of tasks across your cluster. By default, the
     *                     service scheduler spreads tasks across Availability Zones. You can use task
     *                     placement strategies and constraints to customize task placement decisions. For
     *                     more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the
     *                         <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one
     *                     task on each active container instance that meets all of the task placement
     *                     constraints that you specify in your cluster. When using this strategy, you
     *                     don't need to specify a desired number of tasks, a task placement strategy, or
     *                     use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the
     *                         <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *             </li>
     *          </ul>
     *         <p>You can optionally specify a deployment configuration for your service. The deployment
     *             is triggered by changing properties, such as the task definition or the desired count of
     *             a service, with an <a>UpdateService</a> operation. The default value for a
     *             replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a
     *             daemon service for <code>minimumHealthyPercent</code> is 0%.</p>
     *         <p>If a service is using the <code>ECS</code> deployment controller, the minimum healthy
     *             percent represents a lower limit on the number of tasks in a service that must remain in
     *             the <code>RUNNING</code> state during a deployment, as a percentage of the desired
     *             number of tasks (rounded up to the nearest integer), and while any container instances
     *             are in the <code>DRAINING</code> state if the service contains tasks using the
     *             EC2 launch type. This parameter enables you to deploy without using
     *             additional cluster capacity. For example, if your service has a desired number of four
     *             tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks
     *             to free up cluster capacity before starting two new tasks. Tasks for services that
     *                 <i>do not</i> use a load balancer are considered healthy if they're in
     *             the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a
     *             load balancer are considered healthy if they're in the <code>RUNNING</code> state and
     *             they're reported as healthy by the load balancer. The default value for minimum healthy
     *             percent is 100%.</p>
     *         <p>If a service is using the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the
     *             number of tasks in a service that are allowed in the <code>RUNNING</code> or
     *                 <code>PENDING</code> state during a deployment, as a percentage of the desired
     *             number of tasks (rounded down to the nearest integer), and while any container instances
     *             are in the <code>DRAINING</code> state if the service contains tasks using the
     *             EC2 launch type. This parameter enables you to define the deployment batch
     *             size. For example, if your service has a desired number of four tasks and a maximum
     *             percent value of 200%, the scheduler may start four new tasks before stopping the four
     *             older tasks (provided that the cluster resources required to do this are available). The
     *             default value for maximum percent is 200%.</p>
     *         <p>If a service is using either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code>
     *             deployment controller types and tasks that use the EC2 launch type, the
     *                 <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit
     *             on the number of the tasks in the service that remain in the <code>RUNNING</code> state
     *             while the container instances are in the <code>DRAINING</code> state. If the tasks in
     *             the service use the Fargate launch type, the minimum healthy percent and
     *             maximum percent values aren't used, although they're currently visible when describing
     *             your service.</p>
     *         <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you
     *             can specify only parameters that aren't controlled at the task set level. The only
     *             required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>When the service scheduler launches new tasks, it determines task placement in your
     *             cluster using the following logic:</p>
     *         <ul>
     *             <li>
     *                 <p>Determine which of the container instances in your cluster can support your
     *                     service's task definition (for example, they have the required CPU, memory,
     *                     ports, and container instance attributes).</p>
     *             </li>
     *             <li>
     *                 <p>By default, the service scheduler attempts to balance tasks across
     *                     Availability Zones in this manner (although you can choose a different placement
     *                     strategy) with the <code>placementStrategy</code> parameter):</p>
     *                 <ul>
     *                   <li>
     *                         <p>Sort the valid container instances, giving priority to instances that
     *                             have the fewest number of running tasks for this service in their
     *                             respective Availability Zone. For example, if zone A has one running
     *                             service task and zones B and C each have zero, valid container instances
     *                             in either zone B or C are considered optimal for placement.</p>
     *                     </li>
     *                   <li>
     *                         <p>Place the new service task on a valid container instance in an optimal
     *                             Availability Zone (based on the previous steps), favoring container
     *                             instances with the fewest number of running tasks for this
     *                             service.</p>
     *                     </li>
     *                </ul>
     *             </li>
     *          </ul>
     */
    createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
    createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
    createService(args: CreateServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
    /**
     * <p>Create a task set in the specified cluster and service. This is used when a service
     *             uses the <code>EXTERNAL</code> deployment controller type. For more information, see
     *                 <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
     *                 Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    createTaskSet(args: CreateTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskSetCommandOutput>;
    createTaskSet(args: CreateTaskSetCommandInput, cb: (err: any, data?: CreateTaskSetCommandOutput) => void): void;
    createTaskSet(args: CreateTaskSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTaskSetCommandOutput) => void): void;
    /**
     * <p>Disables an account setting for a specified IAM user, IAM role, or the root user for
     *             an account.</p>
     */
    deleteAccountSetting(args: DeleteAccountSettingCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccountSettingCommandOutput>;
    deleteAccountSetting(args: DeleteAccountSettingCommandInput, cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void): void;
    deleteAccountSetting(args: DeleteAccountSettingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void): void;
    /**
     * <p>Deletes one or more custom attributes from an Amazon ECS resource.</p>
     */
    deleteAttributes(args: DeleteAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAttributesCommandOutput>;
    deleteAttributes(args: DeleteAttributesCommandInput, cb: (err: any, data?: DeleteAttributesCommandOutput) => void): void;
    deleteAttributes(args: DeleteAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAttributesCommandOutput) => void): void;
    /**
     * <p>Deletes the specified cluster. The cluster will transition to the
     *                 <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status may
     *             remain discoverable in your account for a period of time. However, this behavior is
     *             subject to change in the future, so you should not rely on <code>INACTIVE</code>
     *             clusters persisting.</p>
     *         <p>You must deregister all container instances from this cluster before you may delete
     *             it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a specified service within a cluster. You can delete a service if you have no
     *             running tasks in it and the desired task count is zero. If the service is actively
     *             maintaining tasks, you cannot delete it, and you must update the service to a desired
     *             task count of zero. For more information, see <a>UpdateService</a>.</p>
     *         <note>
     *             <p>When you delete a service, if there are still running tasks that require cleanup,
     *                 the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the
     *                 service is no longer visible in the console or in the <a>ListServices</a>
     *                 API operation. After all tasks have transitioned to either <code>STOPPING</code> or
     *                     <code>STOPPED</code> status, the service status moves from <code>DRAINING</code>
     *                 to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or
     *                     <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future,
     *                     <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record
     *                 keeping, and <a>DescribeServices</a> calls on those services return a
     *                     <code>ServiceNotFoundException</code> error.</p>
     *         </note>
     *         <important>
     *             <p>If you attempt to create a new service with the same name as an existing service
     *                 in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an
     *                 error.</p>
     *         </important>
     */
    deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
    deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
    deleteService(args: DeleteServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
    /**
     * <p>Deletes a specified task set within a service. This is used when a service uses the
     *                 <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    deleteTaskSet(args: DeleteTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTaskSetCommandOutput>;
    deleteTaskSet(args: DeleteTaskSetCommandInput, cb: (err: any, data?: DeleteTaskSetCommandOutput) => void): void;
    deleteTaskSet(args: DeleteTaskSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTaskSetCommandOutput) => void): void;
    /**
     * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
     *             no longer available to run tasks.</p>
     *         <p>If you intend to use the container instance for some other purpose after
     *             deregistration, you should stop all of the tasks running on the container instance
     *             before deregistration. That prevents any orphaned tasks from consuming resources.</p>
     *         <p>Deregistering a container instance removes the instance from a cluster, but it does
     *             not terminate the EC2 instance. If you are finished using the instance, be sure to
     *             terminate it in the Amazon EC2 console to stop billing.</p>
     *         <note>
     *             <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
     *                 instance from your cluster (stopped container instances or instances with
     *                 disconnected agents are not automatically deregistered when terminated).</p>
     *         </note>
     */
    deregisterContainerInstance(args: DeregisterContainerInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterContainerInstanceCommandOutput>;
    deregisterContainerInstance(args: DeregisterContainerInstanceCommandInput, cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void): void;
    deregisterContainerInstance(args: DeregisterContainerInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void): void;
    /**
     * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
     *             the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
     *             reference an <code>INACTIVE</code> task definition continue to run without disruption.
     *             Existing services that reference an <code>INACTIVE</code> task definition can still
     *             scale up or down by modifying the service's desired count.</p>
     *         <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new
     *             services, and you cannot update an existing service to reference an
     *                 <code>INACTIVE</code> task definition. However, there may be up to a 10-minute
     *             window following deregistration where these restrictions have not yet taken
     *             effect.</p>
     *         <note>
     *             <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
     *                 account indefinitely. However, this behavior is subject to change in the future, so
     *                 you should not rely on <code>INACTIVE</code> task definitions persisting beyond the
     *                 lifecycle of any associated tasks and services.</p>
     *         </note>
     */
    deregisterTaskDefinition(args: DeregisterTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterTaskDefinitionCommandOutput>;
    deregisterTaskDefinition(args: DeregisterTaskDefinitionCommandInput, cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void): void;
    deregisterTaskDefinition(args: DeregisterTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Describes one or more of your capacity providers.</p>
     */
    describeCapacityProviders(args: DescribeCapacityProvidersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCapacityProvidersCommandOutput>;
    describeCapacityProviders(args: DescribeCapacityProvidersCommandInput, cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void): void;
    describeCapacityProviders(args: DescribeCapacityProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void): void;
    /**
     * <p>Describes one or more of your clusters.</p>
     */
    describeClusters(args: DescribeClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClustersCommandOutput>;
    describeClusters(args: DescribeClustersCommandInput, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    describeClusters(args: DescribeClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    /**
     * <p>Describes Amazon Elastic Container Service container instances. Returns metadata about registered and
     *             remaining resources on each container instance requested.</p>
     */
    describeContainerInstances(args: DescribeContainerInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContainerInstancesCommandOutput>;
    describeContainerInstances(args: DescribeContainerInstancesCommandInput, cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void): void;
    describeContainerInstances(args: DescribeContainerInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void): void;
    /**
     * <p>Describes the specified services running in your cluster.</p>
     */
    describeServices(args: DescribeServicesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServicesCommandOutput>;
    describeServices(args: DescribeServicesCommandInput, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    describeServices(args: DescribeServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    /**
     * <p>Describes a task definition. You can specify a <code>family</code> and
     *                 <code>revision</code> to find information about a specific task definition, or you
     *             can simply specify the family to find the latest <code>ACTIVE</code> revision in that
     *             family.</p>
     *         <note>
     *             <p>You can only describe <code>INACTIVE</code> task definitions while an active task
     *                 or service references them.</p>
     *         </note>
     */
    describeTaskDefinition(args: DescribeTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskDefinitionCommandOutput>;
    describeTaskDefinition(args: DescribeTaskDefinitionCommandInput, cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void): void;
    describeTaskDefinition(args: DescribeTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Describes the task sets in the specified cluster and service. This is used when a
     *             service uses the <code>EXTERNAL</code> deployment controller type. For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
     *                 Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    describeTaskSets(args: DescribeTaskSetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskSetsCommandOutput>;
    describeTaskSets(args: DescribeTaskSetsCommandInput, cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void): void;
    describeTaskSets(args: DescribeTaskSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void): void;
    /**
     * <p>Describes a specified task or tasks.</p>
     */
    describeTasks(args: DescribeTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTasksCommandOutput>;
    describeTasks(args: DescribeTasksCommandInput, cb: (err: any, data?: DescribeTasksCommandOutput) => void): void;
    describeTasks(args: DescribeTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTasksCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
     *          </note>
     *          <p>Returns an endpoint for
     *             the Amazon ECS agent to poll for updates.</p>
     */
    discoverPollEndpoint(args: DiscoverPollEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DiscoverPollEndpointCommandOutput>;
    discoverPollEndpoint(args: DiscoverPollEndpointCommandInput, cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void): void;
    discoverPollEndpoint(args: DiscoverPollEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void): void;
    /**
     * <p>Lists the account settings for a specified principal.</p>
     */
    listAccountSettings(args: ListAccountSettingsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountSettingsCommandOutput>;
    listAccountSettings(args: ListAccountSettingsCommandInput, cb: (err: any, data?: ListAccountSettingsCommandOutput) => void): void;
    listAccountSettings(args: ListAccountSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccountSettingsCommandOutput) => void): void;
    /**
     * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
     *             When you specify a target type and cluster, <code>ListAttributes</code> returns a list
     *             of attribute objects, one for each attribute on each resource. You can filter the list
     *             of results to a single attribute name to only return results that have that name. You
     *             can also filter the results by attribute name and value, for example, to see which
     *             container instances in a cluster are running a Linux AMI
     *             (<code>ecs.os-type=linux</code>). </p>
     */
    listAttributes(args: ListAttributesCommandInput, options?: __HttpHandlerOptions): Promise<ListAttributesCommandOutput>;
    listAttributes(args: ListAttributesCommandInput, cb: (err: any, data?: ListAttributesCommandOutput) => void): void;
    listAttributes(args: ListAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttributesCommandOutput) => void): void;
    /**
     * <p>Returns a list of existing clusters.</p>
     */
    listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
    listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    listClusters(args: ListClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of container instances in a specified cluster. You can filter the
     *             results of a <code>ListContainerInstances</code> operation with cluster query language
     *             statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the
     *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    listContainerInstances(args: ListContainerInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListContainerInstancesCommandOutput>;
    listContainerInstances(args: ListContainerInstancesCommandInput, cb: (err: any, data?: ListContainerInstancesCommandOutput) => void): void;
    listContainerInstances(args: ListContainerInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContainerInstancesCommandOutput) => void): void;
    /**
     * <p>Lists the services that are running in a specified cluster.</p>
     */
    listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
    listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    listServices(args: ListServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    /**
     * <p>List the tags for an Amazon ECS resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of task definition families that are registered to your account (which
     *             may include task definition families that no longer have any <code>ACTIVE</code> task
     *             definition revisions).</p>
     *         <p>You can filter out task definition families that do not contain any
     *                 <code>ACTIVE</code> task definition revisions by setting the <code>status</code>
     *             parameter to <code>ACTIVE</code>. You can also filter the results with the
     *                 <code>familyPrefix</code> parameter.</p>
     */
    listTaskDefinitionFamilies(args: ListTaskDefinitionFamiliesCommandInput, options?: __HttpHandlerOptions): Promise<ListTaskDefinitionFamiliesCommandOutput>;
    listTaskDefinitionFamilies(args: ListTaskDefinitionFamiliesCommandInput, cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void): void;
    listTaskDefinitionFamilies(args: ListTaskDefinitionFamiliesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void): void;
    /**
     * <p>Returns a list of task definitions that are registered to your account. You can filter
     *             the results by family name with the <code>familyPrefix</code> parameter or by status
     *             with the <code>status</code> parameter.</p>
     */
    listTaskDefinitions(args: ListTaskDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTaskDefinitionsCommandOutput>;
    listTaskDefinitions(args: ListTaskDefinitionsCommandInput, cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void): void;
    listTaskDefinitions(args: ListTaskDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of tasks for a specified cluster. You can filter the results by family
     *             name, by a particular container instance, or by the desired status of the task with the
     *                 <code>family</code>, <code>containerInstance</code>, and <code>desiredStatus</code>
     *             parameters.</p>
     *         <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks
     *             appear in the returned results for at least one hour. </p>
     */
    listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
    listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
    listTasks(args: ListTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
    /**
     * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p>
     *         <p>If you change the account setting for the root user, the default settings for all of
     *             the IAM users and roles for which no individual account setting has been specified are
     *             reset. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account
     *                 Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or
     *                 <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name
     *             (ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or
     *             the root user for an account is affected. The opt-in and opt-out account setting must be
     *             set for each Amazon ECS resource separately. The ARN and resource ID format of a resource
     *             will be defined by the opt-in status of the IAM user or role that created the resource.
     *             You must enable this setting to use Amazon ECS features such as resource tagging.</p>
     *         <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI)
     *             limit for any new container instances that support the feature is changed. If
     *                 <code>awsvpcTrunking</code> is enabled, any new container instances that support the
     *             feature are launched have the increased ENI limits available to them. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network
     *                 Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>When <code>containerInsights</code> is specified, the default setting indicating
     *             whether CloudWatch Container Insights is enabled for your clusters is changed. If
     *                 <code>containerInsights</code> is enabled, any new clusters that are created will
     *             have Container Insights enabled unless you disable it during cluster creation. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch
     *                 Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    putAccountSetting(args: PutAccountSettingCommandInput, options?: __HttpHandlerOptions): Promise<PutAccountSettingCommandOutput>;
    putAccountSetting(args: PutAccountSettingCommandInput, cb: (err: any, data?: PutAccountSettingCommandOutput) => void): void;
    putAccountSetting(args: PutAccountSettingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccountSettingCommandOutput) => void): void;
    /**
     * <p>Modifies an account setting for all IAM users on an account for whom no individual
     *             account setting has been specified. Account settings are set on a per-Region
     *             basis.</p>
     */
    putAccountSettingDefault(args: PutAccountSettingDefaultCommandInput, options?: __HttpHandlerOptions): Promise<PutAccountSettingDefaultCommandOutput>;
    putAccountSettingDefault(args: PutAccountSettingDefaultCommandInput, cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void): void;
    putAccountSettingDefault(args: PutAccountSettingDefaultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void): void;
    /**
     * <p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist,
     *             it is created. If the attribute exists, its value is replaced with the specified value.
     *             To delete an attribute, use <a>DeleteAttributes</a>. For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the
     *             <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    putAttributes(args: PutAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutAttributesCommandOutput>;
    putAttributes(args: PutAttributesCommandInput, cb: (err: any, data?: PutAttributesCommandOutput) => void): void;
    putAttributes(args: PutAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAttributesCommandOutput) => void): void;
    /**
     * <p>Modifies the available capacity providers and the default capacity provider strategy
     *             for a cluster.</p>
     *         <p>You must specify both the available capacity providers and a default capacity provider
     *             strategy for the cluster. If the specified cluster has existing capacity providers
     *             associated with it, you must specify all existing capacity providers in addition to any
     *             new ones you want to add. Any existing capacity providers associated with a cluster that
     *             are omitted from a <a>PutClusterCapacityProviders</a> API call will be
     *             disassociated with the cluster. You can only disassociate an existing capacity provider
     *             from a cluster if it's not being used by any existing tasks.</p>
     *         <p>When creating a service or running a task on a cluster, if no capacity provider or
     *             launch type is specified, then the cluster's default capacity provider strategy is used.
     *             It is recommended to define a default capacity provider strategy for your cluster,
     *             however you may specify an empty array (<code>[]</code>) to bypass defining a default
     *             strategy.</p>
     */
    putClusterCapacityProviders(args: PutClusterCapacityProvidersCommandInput, options?: __HttpHandlerOptions): Promise<PutClusterCapacityProvidersCommandOutput>;
    putClusterCapacityProviders(args: PutClusterCapacityProvidersCommandInput, cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void): void;
    putClusterCapacityProviders(args: PutClusterCapacityProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
     *          </note>
     *          <p>Registers an EC2
     *             instance into the specified cluster. This instance becomes available to place containers
     *             on.</p>
     */
    registerContainerInstance(args: RegisterContainerInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterContainerInstanceCommandOutput>;
    registerContainerInstance(args: RegisterContainerInstanceCommandInput, cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void): void;
    registerContainerInstance(args: RegisterContainerInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void): void;
    /**
     * <p>Registers a new task definition from the supplied <code>family</code> and
     *                 <code>containerDefinitions</code>. Optionally, you can add data volumes to your
     *             containers with the <code>volumes</code> parameter. For more information about task
     *             definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task
     *                 Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter.
     *             When you specify an IAM role for a task, its containers can then use the latest versions
     *             of the AWS CLI or SDKs to make API requests to the AWS services that are specified in
     *             the IAM policy associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM
     *                 Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>You can specify a Docker networking mode for the containers in your task definition
     *             with the <code>networkMode</code> parameter. The available network modes correspond to
     *             those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network
     *                 settings</a> in the Docker run reference. If you specify the <code>awsvpc</code>
     *             network mode, the task is allocated an elastic network interface, and you must specify a
     *                 <a>NetworkConfiguration</a> when you create a service or run a task with
     *             the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a>
     *             in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    registerTaskDefinition(args: RegisterTaskDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTaskDefinitionCommandOutput>;
    registerTaskDefinition(args: RegisterTaskDefinitionCommandInput, cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void): void;
    registerTaskDefinition(args: RegisterTaskDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void): void;
    /**
     * <p>Starts a new task using the specified task definition.</p>
     *         <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places
     *             tasks using placement constraints and placement strategies. For more information, see
     *                 <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the
     *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or
     *             place tasks manually on specific container instances.</p>
     *         <p>The Amazon ECS API follows an eventual consistency model, due to the distributed nature of
     *             the system supporting the API. This means that the result of an API command you run that
     *             affects your Amazon ECS resources might not be immediately visible to all subsequent commands
     *             you run. Keep this in mind when you carry out an API command that immediately follows a
     *             previous API command.</p>
     *         <p>To manage eventual consistency, you can do the following:</p>
     *         <ul>
     *             <li>
     *                 <p>Confirm the state of the resource before you run a command to modify it. Run
     *                     the DescribeTasks command using an exponential backoff algorithm to ensure that
     *                     you allow enough time for the previous command to propagate through the system.
     *                     To do this, run the DescribeTasks command repeatedly, starting with a couple of
     *                     seconds of wait time and increasing gradually up to five minutes of wait
     *                     time.</p>
     *             </li>
     *             <li>
     *                 <p>Add wait time between subsequent commands, even if the DescribeTasks command
     *                     returns an accurate response. Apply an exponential backoff algorithm starting
     *                     with a couple of seconds of wait time, and increase gradually up to about five
     *                     minutes of wait time.</p>
     *             </li>
     *          </ul>
     */
    runTask(args: RunTaskCommandInput, options?: __HttpHandlerOptions): Promise<RunTaskCommandOutput>;
    runTask(args: RunTaskCommandInput, cb: (err: any, data?: RunTaskCommandOutput) => void): void;
    runTask(args: RunTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RunTaskCommandOutput) => void): void;
    /**
     * <p>Starts a new task from the specified task definition on the specified container
     *             instance or instances.</p>
     *         <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the
     *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    startTask(args: StartTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartTaskCommandOutput>;
    startTask(args: StartTaskCommandInput, cb: (err: any, data?: StartTaskCommandOutput) => void): void;
    startTask(args: StartTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTaskCommandOutput) => void): void;
    /**
     * <p>Stops a running task. Any tags associated with the task will be deleted.</p>
     *         <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker
     *                 stop</code> is issued to the containers running in the task. This results in a
     *                 <code>SIGTERM</code> value and a default 30-second timeout, after which the
     *                 <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the
     *             container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds
     *             from receiving it, no <code>SIGKILL</code> value is sent.</p>
     *         <note>
     *             <p>The default 30-second timeout can be configured on the Amazon ECS container agent with
     *                 the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see
     *                     <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
     *                     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     *         </note>
     */
    stopTask(args: StopTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopTaskCommandOutput>;
    stopTask(args: StopTaskCommandInput, cb: (err: any, data?: StopTaskCommandOutput) => void): void;
    stopTask(args: StopTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTaskCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
     *          </note>
     *          <p>Sent to
     *             acknowledge that an attachment changed states.</p>
     */
    submitAttachmentStateChanges(args: SubmitAttachmentStateChangesCommandInput, options?: __HttpHandlerOptions): Promise<SubmitAttachmentStateChangesCommandOutput>;
    submitAttachmentStateChanges(args: SubmitAttachmentStateChangesCommandInput, cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void): void;
    submitAttachmentStateChanges(args: SubmitAttachmentStateChangesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
     *          </note>
     *          <p>Sent to
     *             acknowledge that a container changed states.</p>
     */
    submitContainerStateChange(args: SubmitContainerStateChangeCommandInput, options?: __HttpHandlerOptions): Promise<SubmitContainerStateChangeCommandOutput>;
    submitContainerStateChange(args: SubmitContainerStateChangeCommandInput, cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void): void;
    submitContainerStateChange(args: SubmitContainerStateChangeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void): void;
    /**
     * <note>
     *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
     *          </note>
     *          <p>Sent to acknowledge
     *             that a task changed states.</p>
     */
    submitTaskStateChange(args: SubmitTaskStateChangeCommandInput, options?: __HttpHandlerOptions): Promise<SubmitTaskStateChangeCommandOutput>;
    submitTaskStateChange(args: SubmitTaskStateChangeCommandInput, cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void): void;
    submitTaskStateChange(args: SubmitTaskStateChangeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified
     *                 <code>resourceArn</code>. If existing tags on a resource are not specified in the
     *             request parameters, they are not changed. When a resource is deleted, the tags
     *             associated with that resource are deleted as well.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the settings to use for a cluster.</p>
     */
    updateClusterSettings(args: UpdateClusterSettingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterSettingsCommandOutput>;
    updateClusterSettings(args: UpdateClusterSettingsCommandInput, cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void): void;
    updateClusterSettings(args: UpdateClusterSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void): void;
    /**
     * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
     *             Amazon ECS container agent does not interrupt running tasks or services on the container
     *             instance. The process for updating the agent differs depending on whether your container
     *             instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
     *         <p>
     *             <code>UpdateContainerAgent</code> requires the Amazon ECS-optimized AMI or Amazon Linux with
     *             the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS
     *             container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually Updating the Amazon ECS Container Agent</a> in the
     *                 <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    updateContainerAgent(args: UpdateContainerAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContainerAgentCommandOutput>;
    updateContainerAgent(args: UpdateContainerAgentCommandInput, cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void): void;
    updateContainerAgent(args: UpdateContainerAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void): void;
    /**
     * <p>Modifies the status of an Amazon ECS container instance.</p>
     *         <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the
     *             status of a container instance to <code>DRAINING</code> to manually remove an instance
     *             from a cluster, for example to perform system updates, update the Docker daemon, or
     *             scale down the cluster size.</p>
     *         <important>
     *             <p>A container instance cannot be changed to <code>DRAINING</code> until it has
     *                 reached an <code>ACTIVE</code> status. If the instance is in any other status, an
     *                 error will be received.</p>
     *         </important>
     *         <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks
     *             from being scheduled for placement on the container instance and replacement service
     *             tasks are started on other container instances in the cluster if the resources are
     *             available. Service tasks on the container instance that are in the <code>PENDING</code>
     *             state are stopped immediately.</p>
     *         <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are
     *             stopped and replaced according to the service's deployment configuration parameters,
     *                 <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change
     *             the deployment configuration of your service using <a>UpdateService</a>.</p>
     *         <ul>
     *             <li>
     *                 <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
     *                         <code>desiredCount</code> temporarily during task replacement. For example,
     *                         <code>desiredCount</code> is four tasks, a minimum of 50% allows the
     *                     scheduler to stop two existing tasks before starting two new tasks. If the
     *                     minimum is 100%, the service scheduler can't remove existing tasks until the
     *                     replacement tasks are considered healthy. Tasks for services that do not use a
     *                     load balancer are considered healthy if they are in the <code>RUNNING</code>
     *                     state. Tasks for services that use a load balancer are considered healthy if
     *                     they are in the <code>RUNNING</code> state and the container instance they are
     *                     hosted on is reported as healthy by the load balancer.</p>
     *             </li>
     *             <li>
     *                 <p>The <code>maximumPercent</code> parameter represents an upper limit on the
     *                     number of running tasks during task replacement, which enables you to define the
     *                     replacement batch size. For example, if <code>desiredCount</code> is four tasks,
     *                     a maximum of 200% starts four new tasks before stopping the four tasks to be
     *                     drained, provided that the cluster resources required to do this are available.
     *                     If the maximum is 100%, then replacement tasks can't start until the draining
     *                     tasks have stopped.</p>
     *             </li>
     *          </ul>
     *         <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service
     *             are not affected. You must wait for them to finish or stop them manually.</p>
     *         <p>A container instance has completed draining when it has no more <code>RUNNING</code>
     *             tasks. You can verify this using <a>ListTasks</a>.</p>
     *         <p>When a container instance has been drained, you can set a container instance to
     *                 <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler
     *             can begin scheduling tasks on the instance again.</p>
     */
    updateContainerInstancesState(args: UpdateContainerInstancesStateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContainerInstancesStateCommandOutput>;
    updateContainerInstancesState(args: UpdateContainerInstancesStateCommandInput, cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void): void;
    updateContainerInstancesState(args: UpdateContainerInstancesStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a service.</p>
     *         <p>For services using the rolling update (<code>ECS</code>) deployment controller, the
     *             desired count, deployment configuration, network configuration, or task definition used
     *             can be updated.</p>
     *         <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller,
     *             only the desired count, deployment configuration, and health check grace period can be
     *             updated using this API. If the network configuration, platform version, or task
     *             definition need to be updated, a new AWS CodeDeploy deployment should be created. For more
     *             information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>AWS CodeDeploy API Reference</i>.</p>
     *         <p>For services using an external deployment controller, you can update only the desired
     *             count and health check grace period using this API. If the launch type, load balancer,
     *             network configuration, platform version, or task definition need to be updated, you
     *             should create a new task set. For more information, see <a>CreateTaskSet</a>.</p>
     *         <p>You can add to or subtract from the number of instantiations of a task definition in a
     *             service by specifying the cluster that the service is running in and a new
     *                 <code>desiredCount</code> parameter.</p>
     *         <p>If you have updated the Docker image of your application, you can create a new task
     *             definition with that image and deploy it to your service. The service scheduler uses the
     *             minimum healthy percent and maximum percent parameters (in the service's deployment
     *             configuration) to determine the deployment strategy.</p>
     *         <note>
     *             <p>If your updated Docker image uses the same tag as what is in the existing task
     *                 definition for your service (for example, <code>my_image:latest</code>), you do not
     *                 need to create a new revision of your task definition. You can update the service
     *                 using the <code>forceNewDeployment</code> option. The new tasks launched by the
     *                 deployment pull the current image/tag combination from your repository when they
     *                 start.</p>
     *         </note>
     *         <p>You can also update the deployment configuration of a service. When a deployment is
     *             triggered by updating the task definition of a service, the service scheduler uses the
     *             deployment configuration parameters, <code>minimumHealthyPercent</code> and
     *                 <code>maximumPercent</code>, to determine the deployment strategy.</p>
     *         <ul>
     *             <li>
     *                 <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
     *                         <code>desiredCount</code> temporarily during a deployment. For example, if
     *                         <code>desiredCount</code> is four tasks, a minimum of 50% allows the
     *                     scheduler to stop two existing tasks before starting two new tasks. Tasks for
     *                     services that do not use a load balancer are considered healthy if they are in
     *                     the <code>RUNNING</code> state. Tasks for services that use a load balancer are
     *                     considered healthy if they are in the <code>RUNNING</code> state and the
     *                     container instance they are hosted on is reported as healthy by the load
     *                     balancer.</p>
     *             </li>
     *             <li>
     *                 <p>The <code>maximumPercent</code> parameter represents an upper limit on the
     *                     number of running tasks during a deployment, which enables you to define the
     *                     deployment batch size. For example, if <code>desiredCount</code> is four tasks,
     *                     a maximum of 200% starts four new tasks before stopping the four older tasks
     *                     (provided that the cluster resources required to do this are available).</p>
     *             </li>
     *          </ul>
     *         <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent
     *             of <code>docker stop</code> is issued to the containers running in the task. This
     *             results in a <code>SIGTERM</code> and a 30-second timeout, after which
     *                 <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the
     *             container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from
     *             receiving it, no <code>SIGKILL</code> is sent.</p>
     *         <p>When the service scheduler launches new tasks, it determines task placement in your
     *             cluster with the following logic:</p>
     *         <ul>
     *             <li>
     *                 <p>Determine which of the container instances in your cluster can support your
     *                     service's task definition (for example, they have the required CPU, memory,
     *                     ports, and container instance attributes).</p>
     *             </li>
     *             <li>
     *                 <p>By default, the service scheduler attempts to balance tasks across
     *                     Availability Zones in this manner (although you can choose a different placement
     *                     strategy):</p>
     *                 <ul>
     *                   <li>
     *                         <p>Sort the valid container instances by the fewest number of running
     *                             tasks for this service in the same Availability Zone as the instance.
     *                             For example, if zone A has one running service task and zones B and C
     *                             each have zero, valid container instances in either zone B or C are
     *                             considered optimal for placement.</p>
     *                     </li>
     *                   <li>
     *                         <p>Place the new service task on a valid container instance in an optimal
     *                             Availability Zone (based on the previous steps), favoring container
     *                             instances with the fewest number of running tasks for this
     *                             service.</p>
     *                     </li>
     *                </ul>
     *             </li>
     *          </ul>
     *         <p>When the service scheduler stops running tasks, it attempts to maintain balance across
     *             the Availability Zones in your cluster using the following logic: </p>
     *         <ul>
     *             <li>
     *                 <p>Sort the container instances by the largest number of running tasks for this
     *                     service in the same Availability Zone as the instance. For example, if zone A
     *                     has one running service task and zones B and C each have two, container
     *                     instances in either zone B or C are considered optimal for termination.</p>
     *             </li>
     *             <li>
     *                 <p>Stop the task on a container instance in an optimal Availability Zone (based
     *                     on the previous steps), favoring container instances with the largest number of
     *                     running tasks for this service.</p>
     *             </li>
     *          </ul>
     */
    updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
    updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
    updateService(args: UpdateServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
    /**
     * <p>Modifies which task set in a service is the primary task set. Any parameters that are
     *             updated on the primary task set in a service will transition to the service. This is
     *             used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
     *             information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
     *                 Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    updateServicePrimaryTaskSet(args: UpdateServicePrimaryTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServicePrimaryTaskSetCommandOutput>;
    updateServicePrimaryTaskSet(args: UpdateServicePrimaryTaskSetCommandInput, cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void): void;
    updateServicePrimaryTaskSet(args: UpdateServicePrimaryTaskSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void): void;
    /**
     * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code>
     *             deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
     *                 Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
     */
    updateTaskSet(args: UpdateTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskSetCommandOutput>;
    updateTaskSet(args: UpdateTaskSetCommandInput, cb: (err: any, data?: UpdateTaskSetCommandOutput) => void): void;
    updateTaskSet(args: UpdateTaskSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTaskSetCommandOutput) => void): void;
}
