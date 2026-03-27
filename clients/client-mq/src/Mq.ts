// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateBrokerCommandInput,
  type CreateBrokerCommandOutput,
  CreateBrokerCommand,
} from "./commands/CreateBrokerCommand";
import {
  type CreateConfigurationCommandInput,
  type CreateConfigurationCommandOutput,
  CreateConfigurationCommand,
} from "./commands/CreateConfigurationCommand";
import {
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTagsCommand,
} from "./commands/CreateTagsCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteBrokerCommandInput,
  type DeleteBrokerCommandOutput,
  DeleteBrokerCommand,
} from "./commands/DeleteBrokerCommand";
import {
  type DeleteConfigurationCommandInput,
  type DeleteConfigurationCommandOutput,
  DeleteConfigurationCommand,
} from "./commands/DeleteConfigurationCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeBrokerCommandInput,
  type DescribeBrokerCommandOutput,
  DescribeBrokerCommand,
} from "./commands/DescribeBrokerCommand";
import {
  type DescribeBrokerEngineTypesCommandInput,
  type DescribeBrokerEngineTypesCommandOutput,
  DescribeBrokerEngineTypesCommand,
} from "./commands/DescribeBrokerEngineTypesCommand";
import {
  type DescribeBrokerInstanceOptionsCommandInput,
  type DescribeBrokerInstanceOptionsCommandOutput,
  DescribeBrokerInstanceOptionsCommand,
} from "./commands/DescribeBrokerInstanceOptionsCommand";
import {
  type DescribeConfigurationCommandInput,
  type DescribeConfigurationCommandOutput,
  DescribeConfigurationCommand,
} from "./commands/DescribeConfigurationCommand";
import {
  type DescribeConfigurationRevisionCommandInput,
  type DescribeConfigurationRevisionCommandOutput,
  DescribeConfigurationRevisionCommand,
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  type DescribeUserCommandInput,
  type DescribeUserCommandOutput,
  DescribeUserCommand,
} from "./commands/DescribeUserCommand";
import {
  type ListBrokersCommandInput,
  type ListBrokersCommandOutput,
  ListBrokersCommand,
} from "./commands/ListBrokersCommand";
import {
  type ListConfigurationRevisionsCommandInput,
  type ListConfigurationRevisionsCommandOutput,
  ListConfigurationRevisionsCommand,
} from "./commands/ListConfigurationRevisionsCommand";
import {
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListConfigurationsCommand,
} from "./commands/ListConfigurationsCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import { type PromoteCommandInput, type PromoteCommandOutput, PromoteCommand } from "./commands/PromoteCommand";
import {
  type RebootBrokerCommandInput,
  type RebootBrokerCommandOutput,
  RebootBrokerCommand,
} from "./commands/RebootBrokerCommand";
import {
  type UpdateBrokerCommandInput,
  type UpdateBrokerCommandOutput,
  UpdateBrokerCommand,
} from "./commands/UpdateBrokerCommand";
import {
  type UpdateConfigurationCommandInput,
  type UpdateConfigurationCommandOutput,
  UpdateConfigurationCommand,
} from "./commands/UpdateConfigurationCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { MqClient } from "./MqClient";
import { paginateListBrokers } from "./pagination/ListBrokersPaginator";

const commands = {
  CreateBrokerCommand,
  CreateConfigurationCommand,
  CreateTagsCommand,
  CreateUserCommand,
  DeleteBrokerCommand,
  DeleteConfigurationCommand,
  DeleteTagsCommand,
  DeleteUserCommand,
  DescribeBrokerCommand,
  DescribeBrokerEngineTypesCommand,
  DescribeBrokerInstanceOptionsCommand,
  DescribeConfigurationCommand,
  DescribeConfigurationRevisionCommand,
  DescribeUserCommand,
  ListBrokersCommand,
  ListConfigurationRevisionsCommand,
  ListConfigurationsCommand,
  ListTagsCommand,
  ListUsersCommand,
  PromoteCommand,
  RebootBrokerCommand,
  UpdateBrokerCommand,
  UpdateConfigurationCommand,
  UpdateUserCommand,
};
const paginators = {
  paginateListBrokers,
};

export interface Mq {
  /**
   * @see {@link CreateBrokerCommand}
   */
  createBroker(
    args: CreateBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrokerCommandOutput>;
  createBroker(
    args: CreateBrokerCommandInput,
    cb: (err: any, data?: CreateBrokerCommandOutput) => void
  ): void;
  createBroker(
    args: CreateBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationCommand}
   */
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationCommandOutput>;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;
  createConfiguration(
    args: CreateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrokerCommand}
   */
  deleteBroker(
    args: DeleteBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrokerCommandOutput>;
  deleteBroker(
    args: DeleteBrokerCommandInput,
    cb: (err: any, data?: DeleteBrokerCommandOutput) => void
  ): void;
  deleteBroker(
    args: DeleteBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationCommand}
   */
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationCommandOutput>;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;
  deleteConfiguration(
    args: DeleteConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrokerCommand}
   */
  describeBroker(
    args: DescribeBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerCommandOutput>;
  describeBroker(
    args: DescribeBrokerCommandInput,
    cb: (err: any, data?: DescribeBrokerCommandOutput) => void
  ): void;
  describeBroker(
    args: DescribeBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrokerEngineTypesCommand}
   */
  describeBrokerEngineTypes(): Promise<DescribeBrokerEngineTypesCommandOutput>;
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerEngineTypesCommandOutput>;
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void
  ): void;
  describeBrokerEngineTypes(
    args: DescribeBrokerEngineTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBrokerInstanceOptionsCommand}
   */
  describeBrokerInstanceOptions(): Promise<DescribeBrokerInstanceOptionsCommandOutput>;
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput>;
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void
  ): void;
  describeBrokerInstanceOptions(
    args: DescribeBrokerInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationCommand}
   */
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationCommandOutput>;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;
  describeConfiguration(
    args: DescribeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationRevisionCommand}
   */
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationRevisionCommandOutput>;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;
  describeConfigurationRevision(
    args: DescribeConfigurationRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrokersCommand}
   */
  listBrokers(): Promise<ListBrokersCommandOutput>;
  listBrokers(
    args: ListBrokersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrokersCommandOutput>;
  listBrokers(
    args: ListBrokersCommandInput,
    cb: (err: any, data?: ListBrokersCommandOutput) => void
  ): void;
  listBrokers(
    args: ListBrokersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrokersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationRevisionsCommand}
   */
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationRevisionsCommandOutput>;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;
  listConfigurationRevisions(
    args: ListConfigurationRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteCommand}
   */
  promote(
    args: PromoteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteCommandOutput>;
  promote(
    args: PromoteCommandInput,
    cb: (err: any, data?: PromoteCommandOutput) => void
  ): void;
  promote(
    args: PromoteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootBrokerCommand}
   */
  rebootBroker(
    args: RebootBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootBrokerCommandOutput>;
  rebootBroker(
    args: RebootBrokerCommandInput,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;
  rebootBroker(
    args: RebootBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrokerCommand}
   */
  updateBroker(
    args: UpdateBrokerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrokerCommandOutput>;
  updateBroker(
    args: UpdateBrokerCommandInput,
    cb: (err: any, data?: UpdateBrokerCommandOutput) => void
  ): void;
  updateBroker(
    args: UpdateBrokerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrokerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrokersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrokersCommandOutput}.
   */
  paginateListBrokers(
    args?: ListBrokersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrokersCommandOutput>;
}

/**
 * <p>Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.</p>
 * @public
 */
export class Mq extends MqClient implements Mq {}
createAggregatedClient(commands, Mq, { paginators });
