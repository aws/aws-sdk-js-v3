// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  DeleteTaskDefinitionsCommand,
  DeleteTaskDefinitionsCommandInput,
  DeleteTaskDefinitionsCommandOutput,
} from "./commands/DeleteTaskDefinitionsCommand";
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
import { ECSClient, ECSClientConfig } from "./ECSClient";

const commands = {
  CreateCapacityProviderCommand,
  CreateClusterCommand,
  CreateServiceCommand,
  CreateTaskSetCommand,
  DeleteAccountSettingCommand,
  DeleteAttributesCommand,
  DeleteCapacityProviderCommand,
  DeleteClusterCommand,
  DeleteServiceCommand,
  DeleteTaskDefinitionsCommand,
  DeleteTaskSetCommand,
  DeregisterContainerInstanceCommand,
  DeregisterTaskDefinitionCommand,
  DescribeCapacityProvidersCommand,
  DescribeClustersCommand,
  DescribeContainerInstancesCommand,
  DescribeServicesCommand,
  DescribeTaskDefinitionCommand,
  DescribeTasksCommand,
  DescribeTaskSetsCommand,
  DiscoverPollEndpointCommand,
  ExecuteCommandCommand,
  GetTaskProtectionCommand,
  ListAccountSettingsCommand,
  ListAttributesCommand,
  ListClustersCommand,
  ListContainerInstancesCommand,
  ListServicesCommand,
  ListServicesByNamespaceCommand,
  ListTagsForResourceCommand,
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionsCommand,
  ListTasksCommand,
  PutAccountSettingCommand,
  PutAccountSettingDefaultCommand,
  PutAttributesCommand,
  PutClusterCapacityProvidersCommand,
  RegisterContainerInstanceCommand,
  RegisterTaskDefinitionCommand,
  RunTaskCommand,
  StartTaskCommand,
  StopTaskCommand,
  SubmitAttachmentStateChangesCommand,
  SubmitContainerStateChangeCommand,
  SubmitTaskStateChangeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCapacityProviderCommand,
  UpdateClusterCommand,
  UpdateClusterSettingsCommand,
  UpdateContainerAgentCommand,
  UpdateContainerInstancesStateCommand,
  UpdateServiceCommand,
  UpdateServicePrimaryTaskSetCommand,
  UpdateTaskProtectionCommand,
  UpdateTaskSetCommand,
};

export interface ECS {
  /**
   * @see {@link CreateCapacityProviderCommand}
   */
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCapacityProviderCommandOutput>;
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void
  ): void;
  createCapacityProvider(
    args: CreateCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCapacityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceCommand}
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTaskSetCommand}
   */
  createTaskSet(args: CreateTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskSetCommandOutput>;
  createTaskSet(args: CreateTaskSetCommandInput, cb: (err: any, data?: CreateTaskSetCommandOutput) => void): void;
  createTaskSet(
    args: CreateTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountSettingCommand}
   */
  deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountSettingCommandOutput>;
  deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void
  ): void;
  deleteAccountSetting(
    args: DeleteAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttributesCommand}
   */
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttributesCommandOutput>;
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    cb: (err: any, data?: DeleteAttributesCommandOutput) => void
  ): void;
  deleteAttributes(
    args: DeleteAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCapacityProviderCommand}
   */
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCapacityProviderCommandOutput>;
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    cb: (err: any, data?: DeleteCapacityProviderCommandOutput) => void
  ): void;
  deleteCapacityProvider(
    args: DeleteCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCapacityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceCommand}
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaskDefinitionsCommand}
   */
  deleteTaskDefinitions(
    args: DeleteTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaskDefinitionsCommandOutput>;
  deleteTaskDefinitions(
    args: DeleteTaskDefinitionsCommandInput,
    cb: (err: any, data?: DeleteTaskDefinitionsCommandOutput) => void
  ): void;
  deleteTaskDefinitions(
    args: DeleteTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaskSetCommand}
   */
  deleteTaskSet(args: DeleteTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTaskSetCommandOutput>;
  deleteTaskSet(args: DeleteTaskSetCommandInput, cb: (err: any, data?: DeleteTaskSetCommandOutput) => void): void;
  deleteTaskSet(
    args: DeleteTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterContainerInstanceCommand}
   */
  deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterContainerInstanceCommandOutput>;
  deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void
  ): void;
  deregisterContainerInstance(
    args: DeregisterContainerInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterContainerInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTaskDefinitionCommand}
   */
  deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTaskDefinitionCommandOutput>;
  deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void
  ): void;
  deregisterTaskDefinition(
    args: DeregisterTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCapacityProvidersCommand}
   */
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCapacityProvidersCommandOutput>;
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void
  ): void;
  describeCapacityProviders(
    args: DescribeCapacityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCapacityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContainerInstancesCommand}
   */
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContainerInstancesCommandOutput>;
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void
  ): void;
  describeContainerInstances(
    args: DescribeContainerInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContainerInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTaskDefinitionCommand}
   */
  describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskDefinitionCommandOutput>;
  describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void
  ): void;
  describeTaskDefinition(
    args: DescribeTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTasksCommand}
   */
  describeTasks(args: DescribeTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTasksCommandOutput>;
  describeTasks(args: DescribeTasksCommandInput, cb: (err: any, data?: DescribeTasksCommandOutput) => void): void;
  describeTasks(
    args: DescribeTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTaskSetsCommand}
   */
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskSetsCommandOutput>;
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void
  ): void;
  describeTaskSets(
    args: DescribeTaskSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DiscoverPollEndpointCommand}
   */
  discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DiscoverPollEndpointCommandOutput>;
  discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void
  ): void;
  discoverPollEndpoint(
    args: DiscoverPollEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DiscoverPollEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteCommandCommand}
   */
  executeCommand(
    args: ExecuteCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteCommandCommandOutput>;
  executeCommand(args: ExecuteCommandCommandInput, cb: (err: any, data?: ExecuteCommandCommandOutput) => void): void;
  executeCommand(
    args: ExecuteCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaskProtectionCommand}
   */
  getTaskProtection(
    args: GetTaskProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaskProtectionCommandOutput>;
  getTaskProtection(
    args: GetTaskProtectionCommandInput,
    cb: (err: any, data?: GetTaskProtectionCommandOutput) => void
  ): void;
  getTaskProtection(
    args: GetTaskProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaskProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountSettingsCommand}
   */
  listAccountSettings(
    args: ListAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountSettingsCommandOutput>;
  listAccountSettings(
    args: ListAccountSettingsCommandInput,
    cb: (err: any, data?: ListAccountSettingsCommandOutput) => void
  ): void;
  listAccountSettings(
    args: ListAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttributesCommand}
   */
  listAttributes(
    args: ListAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributesCommandOutput>;
  listAttributes(args: ListAttributesCommandInput, cb: (err: any, data?: ListAttributesCommandOutput) => void): void;
  listAttributes(
    args: ListAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainerInstancesCommand}
   */
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainerInstancesCommandOutput>;
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    cb: (err: any, data?: ListContainerInstancesCommandOutput) => void
  ): void;
  listContainerInstances(
    args: ListContainerInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContainerInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesByNamespaceCommand}
   */
  listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesByNamespaceCommandOutput>;
  listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    cb: (err: any, data?: ListServicesByNamespaceCommandOutput) => void
  ): void;
  listServicesByNamespace(
    args: ListServicesByNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesByNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaskDefinitionFamiliesCommand}
   */
  listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskDefinitionFamiliesCommandOutput>;
  listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void
  ): void;
  listTaskDefinitionFamilies(
    args: ListTaskDefinitionFamiliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskDefinitionFamiliesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaskDefinitionsCommand}
   */
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskDefinitionsCommandOutput>;
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void
  ): void;
  listTaskDefinitions(
    args: ListTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
  listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSettingCommand}
   */
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingCommandOutput>;
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;
  putAccountSetting(
    args: PutAccountSettingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountSettingDefaultCommand}
   */
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountSettingDefaultCommandOutput>;
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void
  ): void;
  putAccountSettingDefault(
    args: PutAccountSettingDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountSettingDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAttributesCommand}
   */
  putAttributes(args: PutAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutAttributesCommandOutput>;
  putAttributes(args: PutAttributesCommandInput, cb: (err: any, data?: PutAttributesCommandOutput) => void): void;
  putAttributes(
    args: PutAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutClusterCapacityProvidersCommand}
   */
  putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClusterCapacityProvidersCommandOutput>;
  putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void
  ): void;
  putClusterCapacityProviders(
    args: PutClusterCapacityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClusterCapacityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterContainerInstanceCommand}
   */
  registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterContainerInstanceCommandOutput>;
  registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void
  ): void;
  registerContainerInstance(
    args: RegisterContainerInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterContainerInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTaskDefinitionCommand}
   */
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTaskDefinitionCommandOutput>;
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void
  ): void;
  registerTaskDefinition(
    args: RegisterTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTaskDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link RunTaskCommand}
   */
  runTask(args: RunTaskCommandInput, options?: __HttpHandlerOptions): Promise<RunTaskCommandOutput>;
  runTask(args: RunTaskCommandInput, cb: (err: any, data?: RunTaskCommandOutput) => void): void;
  runTask(
    args: RunTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTaskCommand}
   */
  startTask(args: StartTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartTaskCommandOutput>;
  startTask(args: StartTaskCommandInput, cb: (err: any, data?: StartTaskCommandOutput) => void): void;
  startTask(
    args: StartTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTaskCommand}
   */
  stopTask(args: StopTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopTaskCommandOutput>;
  stopTask(args: StopTaskCommandInput, cb: (err: any, data?: StopTaskCommandOutput) => void): void;
  stopTask(
    args: StopTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitAttachmentStateChangesCommand}
   */
  submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitAttachmentStateChangesCommandOutput>;
  submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void
  ): void;
  submitAttachmentStateChanges(
    args: SubmitAttachmentStateChangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitAttachmentStateChangesCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitContainerStateChangeCommand}
   */
  submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitContainerStateChangeCommandOutput>;
  submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void
  ): void;
  submitContainerStateChange(
    args: SubmitContainerStateChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitContainerStateChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitTaskStateChangeCommand}
   */
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitTaskStateChangeCommandOutput>;
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void
  ): void;
  submitTaskStateChange(
    args: SubmitTaskStateChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitTaskStateChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCapacityProviderCommand}
   */
  updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCapacityProviderCommandOutput>;
  updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    cb: (err: any, data?: UpdateCapacityProviderCommandOutput) => void
  ): void;
  updateCapacityProvider(
    args: UpdateCapacityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCapacityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterSettingsCommand}
   */
  updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterSettingsCommandOutput>;
  updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void
  ): void;
  updateClusterSettings(
    args: UpdateClusterSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContainerAgentCommand}
   */
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContainerAgentCommandOutput>;
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void
  ): void;
  updateContainerAgent(
    args: UpdateContainerAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContainerAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContainerInstancesStateCommand}
   */
  updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContainerInstancesStateCommandOutput>;
  updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void
  ): void;
  updateContainerInstancesState(
    args: UpdateContainerInstancesStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContainerInstancesStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceCommand}
   */
  updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
  updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServicePrimaryTaskSetCommand}
   */
  updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput>;
  updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void
  ): void;
  updateServicePrimaryTaskSet(
    args: UpdateServicePrimaryTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServicePrimaryTaskSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskProtectionCommand}
   */
  updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskProtectionCommandOutput>;
  updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    cb: (err: any, data?: UpdateTaskProtectionCommandOutput) => void
  ): void;
  updateTaskProtection(
    args: UpdateTaskProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskSetCommand}
   */
  updateTaskSet(args: UpdateTaskSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskSetCommandOutput>;
  updateTaskSet(args: UpdateTaskSetCommandInput, cb: (err: any, data?: UpdateTaskSetCommandOutput) => void): void;
  updateTaskSet(
    args: UpdateTaskSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskSetCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class ECS extends ECSClient implements ECS {}
createAggregatedClient(commands, ECS);
