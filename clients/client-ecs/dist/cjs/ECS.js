"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ECSClient_1 = require("./ECSClient");
const CreateCapacityProviderCommand_1 = require("./commands/CreateCapacityProviderCommand");
const CreateClusterCommand_1 = require("./commands/CreateClusterCommand");
const CreateServiceCommand_1 = require("./commands/CreateServiceCommand");
const CreateTaskSetCommand_1 = require("./commands/CreateTaskSetCommand");
const DeleteAccountSettingCommand_1 = require("./commands/DeleteAccountSettingCommand");
const DeleteAttributesCommand_1 = require("./commands/DeleteAttributesCommand");
const DeleteClusterCommand_1 = require("./commands/DeleteClusterCommand");
const DeleteServiceCommand_1 = require("./commands/DeleteServiceCommand");
const DeleteTaskSetCommand_1 = require("./commands/DeleteTaskSetCommand");
const DeregisterContainerInstanceCommand_1 = require("./commands/DeregisterContainerInstanceCommand");
const DeregisterTaskDefinitionCommand_1 = require("./commands/DeregisterTaskDefinitionCommand");
const DescribeCapacityProvidersCommand_1 = require("./commands/DescribeCapacityProvidersCommand");
const DescribeClustersCommand_1 = require("./commands/DescribeClustersCommand");
const DescribeContainerInstancesCommand_1 = require("./commands/DescribeContainerInstancesCommand");
const DescribeServicesCommand_1 = require("./commands/DescribeServicesCommand");
const DescribeTaskDefinitionCommand_1 = require("./commands/DescribeTaskDefinitionCommand");
const DescribeTaskSetsCommand_1 = require("./commands/DescribeTaskSetsCommand");
const DescribeTasksCommand_1 = require("./commands/DescribeTasksCommand");
const DiscoverPollEndpointCommand_1 = require("./commands/DiscoverPollEndpointCommand");
const ListAccountSettingsCommand_1 = require("./commands/ListAccountSettingsCommand");
const ListAttributesCommand_1 = require("./commands/ListAttributesCommand");
const ListClustersCommand_1 = require("./commands/ListClustersCommand");
const ListContainerInstancesCommand_1 = require("./commands/ListContainerInstancesCommand");
const ListServicesCommand_1 = require("./commands/ListServicesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTaskDefinitionFamiliesCommand_1 = require("./commands/ListTaskDefinitionFamiliesCommand");
const ListTaskDefinitionsCommand_1 = require("./commands/ListTaskDefinitionsCommand");
const ListTasksCommand_1 = require("./commands/ListTasksCommand");
const PutAccountSettingCommand_1 = require("./commands/PutAccountSettingCommand");
const PutAccountSettingDefaultCommand_1 = require("./commands/PutAccountSettingDefaultCommand");
const PutAttributesCommand_1 = require("./commands/PutAttributesCommand");
const PutClusterCapacityProvidersCommand_1 = require("./commands/PutClusterCapacityProvidersCommand");
const RegisterContainerInstanceCommand_1 = require("./commands/RegisterContainerInstanceCommand");
const RegisterTaskDefinitionCommand_1 = require("./commands/RegisterTaskDefinitionCommand");
const RunTaskCommand_1 = require("./commands/RunTaskCommand");
const StartTaskCommand_1 = require("./commands/StartTaskCommand");
const StopTaskCommand_1 = require("./commands/StopTaskCommand");
const SubmitAttachmentStateChangesCommand_1 = require("./commands/SubmitAttachmentStateChangesCommand");
const SubmitContainerStateChangeCommand_1 = require("./commands/SubmitContainerStateChangeCommand");
const SubmitTaskStateChangeCommand_1 = require("./commands/SubmitTaskStateChangeCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateClusterSettingsCommand_1 = require("./commands/UpdateClusterSettingsCommand");
const UpdateContainerAgentCommand_1 = require("./commands/UpdateContainerAgentCommand");
const UpdateContainerInstancesStateCommand_1 = require("./commands/UpdateContainerInstancesStateCommand");
const UpdateServiceCommand_1 = require("./commands/UpdateServiceCommand");
const UpdateServicePrimaryTaskSetCommand_1 = require("./commands/UpdateServicePrimaryTaskSetCommand");
const UpdateTaskSetCommand_1 = require("./commands/UpdateTaskSetCommand");
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
class ECS extends ECSClient_1.ECSClient {
    createCapacityProvider(args, optionsOrCb, cb) {
        const command = new CreateCapacityProviderCommand_1.CreateCapacityProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCluster(args, optionsOrCb, cb) {
        const command = new CreateClusterCommand_1.CreateClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createService(args, optionsOrCb, cb) {
        const command = new CreateServiceCommand_1.CreateServiceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTaskSet(args, optionsOrCb, cb) {
        const command = new CreateTaskSetCommand_1.CreateTaskSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAccountSetting(args, optionsOrCb, cb) {
        const command = new DeleteAccountSettingCommand_1.DeleteAccountSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAttributes(args, optionsOrCb, cb) {
        const command = new DeleteAttributesCommand_1.DeleteAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCluster(args, optionsOrCb, cb) {
        const command = new DeleteClusterCommand_1.DeleteClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteService(args, optionsOrCb, cb) {
        const command = new DeleteServiceCommand_1.DeleteServiceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTaskSet(args, optionsOrCb, cb) {
        const command = new DeleteTaskSetCommand_1.DeleteTaskSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterContainerInstance(args, optionsOrCb, cb) {
        const command = new DeregisterContainerInstanceCommand_1.DeregisterContainerInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterTaskDefinition(args, optionsOrCb, cb) {
        const command = new DeregisterTaskDefinitionCommand_1.DeregisterTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCapacityProviders(args, optionsOrCb, cb) {
        const command = new DescribeCapacityProvidersCommand_1.DescribeCapacityProvidersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeClusters(args, optionsOrCb, cb) {
        const command = new DescribeClustersCommand_1.DescribeClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContainerInstances(args, optionsOrCb, cb) {
        const command = new DescribeContainerInstancesCommand_1.DescribeContainerInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServices(args, optionsOrCb, cb) {
        const command = new DescribeServicesCommand_1.DescribeServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTaskDefinition(args, optionsOrCb, cb) {
        const command = new DescribeTaskDefinitionCommand_1.DescribeTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTaskSets(args, optionsOrCb, cb) {
        const command = new DescribeTaskSetsCommand_1.DescribeTaskSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTasks(args, optionsOrCb, cb) {
        const command = new DescribeTasksCommand_1.DescribeTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    discoverPollEndpoint(args, optionsOrCb, cb) {
        const command = new DiscoverPollEndpointCommand_1.DiscoverPollEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAccountSettings(args, optionsOrCb, cb) {
        const command = new ListAccountSettingsCommand_1.ListAccountSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAttributes(args, optionsOrCb, cb) {
        const command = new ListAttributesCommand_1.ListAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listClusters(args, optionsOrCb, cb) {
        const command = new ListClustersCommand_1.ListClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listContainerInstances(args, optionsOrCb, cb) {
        const command = new ListContainerInstancesCommand_1.ListContainerInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listServices(args, optionsOrCb, cb) {
        const command = new ListServicesCommand_1.ListServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTaskDefinitionFamilies(args, optionsOrCb, cb) {
        const command = new ListTaskDefinitionFamiliesCommand_1.ListTaskDefinitionFamiliesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTaskDefinitions(args, optionsOrCb, cb) {
        const command = new ListTaskDefinitionsCommand_1.ListTaskDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTasks(args, optionsOrCb, cb) {
        const command = new ListTasksCommand_1.ListTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAccountSetting(args, optionsOrCb, cb) {
        const command = new PutAccountSettingCommand_1.PutAccountSettingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAccountSettingDefault(args, optionsOrCb, cb) {
        const command = new PutAccountSettingDefaultCommand_1.PutAccountSettingDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAttributes(args, optionsOrCb, cb) {
        const command = new PutAttributesCommand_1.PutAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putClusterCapacityProviders(args, optionsOrCb, cb) {
        const command = new PutClusterCapacityProvidersCommand_1.PutClusterCapacityProvidersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerContainerInstance(args, optionsOrCb, cb) {
        const command = new RegisterContainerInstanceCommand_1.RegisterContainerInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerTaskDefinition(args, optionsOrCb, cb) {
        const command = new RegisterTaskDefinitionCommand_1.RegisterTaskDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    runTask(args, optionsOrCb, cb) {
        const command = new RunTaskCommand_1.RunTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startTask(args, optionsOrCb, cb) {
        const command = new StartTaskCommand_1.StartTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopTask(args, optionsOrCb, cb) {
        const command = new StopTaskCommand_1.StopTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    submitAttachmentStateChanges(args, optionsOrCb, cb) {
        const command = new SubmitAttachmentStateChangesCommand_1.SubmitAttachmentStateChangesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    submitContainerStateChange(args, optionsOrCb, cb) {
        const command = new SubmitContainerStateChangeCommand_1.SubmitContainerStateChangeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    submitTaskStateChange(args, optionsOrCb, cb) {
        const command = new SubmitTaskStateChangeCommand_1.SubmitTaskStateChangeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateClusterSettings(args, optionsOrCb, cb) {
        const command = new UpdateClusterSettingsCommand_1.UpdateClusterSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContainerAgent(args, optionsOrCb, cb) {
        const command = new UpdateContainerAgentCommand_1.UpdateContainerAgentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContainerInstancesState(args, optionsOrCb, cb) {
        const command = new UpdateContainerInstancesStateCommand_1.UpdateContainerInstancesStateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateService(args, optionsOrCb, cb) {
        const command = new UpdateServiceCommand_1.UpdateServiceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateServicePrimaryTaskSet(args, optionsOrCb, cb) {
        const command = new UpdateServicePrimaryTaskSetCommand_1.UpdateServicePrimaryTaskSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTaskSet(args, optionsOrCb, cb) {
        const command = new UpdateTaskSetCommand_1.UpdateTaskSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.ECS = ECS;
//# sourceMappingURL=ECS.js.map