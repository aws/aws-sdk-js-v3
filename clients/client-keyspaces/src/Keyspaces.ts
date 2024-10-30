// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateKeyspaceCommand,
  CreateKeyspaceCommandInput,
  CreateKeyspaceCommandOutput,
} from "./commands/CreateKeyspaceCommand";
import { CreateTableCommand, CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { CreateTypeCommand, CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import {
  DeleteKeyspaceCommand,
  DeleteKeyspaceCommandInput,
  DeleteKeyspaceCommandOutput,
} from "./commands/DeleteKeyspaceCommand";
import { DeleteTableCommand, DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DeleteTypeCommand, DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import { GetKeyspaceCommand, GetKeyspaceCommandInput, GetKeyspaceCommandOutput } from "./commands/GetKeyspaceCommand";
import {
  GetTableAutoScalingSettingsCommand,
  GetTableAutoScalingSettingsCommandInput,
  GetTableAutoScalingSettingsCommandOutput,
} from "./commands/GetTableAutoScalingSettingsCommand";
import { GetTableCommand, GetTableCommandInput, GetTableCommandOutput } from "./commands/GetTableCommand";
import { GetTypeCommand, GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import {
  ListKeyspacesCommand,
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput,
} from "./commands/ListKeyspacesCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  RestoreTableCommand,
  RestoreTableCommandInput,
  RestoreTableCommandOutput,
} from "./commands/RestoreTableCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateTableCommand, UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import { KeyspacesClient, KeyspacesClientConfig } from "./KeyspacesClient";

const commands = {
  CreateKeyspaceCommand,
  CreateTableCommand,
  CreateTypeCommand,
  DeleteKeyspaceCommand,
  DeleteTableCommand,
  DeleteTypeCommand,
  GetKeyspaceCommand,
  GetTableCommand,
  GetTableAutoScalingSettingsCommand,
  GetTypeCommand,
  ListKeyspacesCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  ListTypesCommand,
  RestoreTableCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateTableCommand,
};

export interface Keyspaces {
  /**
   * @see {@link CreateKeyspaceCommand}
   */
  createKeyspace(
    args: CreateKeyspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyspaceCommandOutput>;
  createKeyspace(args: CreateKeyspaceCommandInput, cb: (err: any, data?: CreateKeyspaceCommandOutput) => void): void;
  createKeyspace(
    args: CreateKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(args: CreateTableCommandInput, options?: __HttpHandlerOptions): Promise<CreateTableCommandOutput>;
  createTable(args: CreateTableCommandInput, cb: (err: any, data?: CreateTableCommandOutput) => void): void;
  createTable(
    args: CreateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTypeCommand}
   */
  createType(args: CreateTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateTypeCommandOutput>;
  createType(args: CreateTypeCommandInput, cb: (err: any, data?: CreateTypeCommandOutput) => void): void;
  createType(
    args: CreateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyspaceCommand}
   */
  deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyspaceCommandOutput>;
  deleteKeyspace(args: DeleteKeyspaceCommandInput, cb: (err: any, data?: DeleteKeyspaceCommandOutput) => void): void;
  deleteKeyspace(
    args: DeleteKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(args: DeleteTableCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTableCommandOutput>;
  deleteTable(args: DeleteTableCommandInput, cb: (err: any, data?: DeleteTableCommandOutput) => void): void;
  deleteTable(
    args: DeleteTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTypeCommand}
   */
  deleteType(args: DeleteTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTypeCommandOutput>;
  deleteType(args: DeleteTypeCommandInput, cb: (err: any, data?: DeleteTypeCommandOutput) => void): void;
  deleteType(
    args: DeleteTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyspaceCommand}
   */
  getKeyspace(args: GetKeyspaceCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyspaceCommandOutput>;
  getKeyspace(args: GetKeyspaceCommandInput, cb: (err: any, data?: GetKeyspaceCommandOutput) => void): void;
  getKeyspace(
    args: GetKeyspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(args: GetTableCommandInput, options?: __HttpHandlerOptions): Promise<GetTableCommandOutput>;
  getTable(args: GetTableCommandInput, cb: (err: any, data?: GetTableCommandOutput) => void): void;
  getTable(
    args: GetTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableAutoScalingSettingsCommand}
   */
  getTableAutoScalingSettings(
    args: GetTableAutoScalingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableAutoScalingSettingsCommandOutput>;
  getTableAutoScalingSettings(
    args: GetTableAutoScalingSettingsCommandInput,
    cb: (err: any, data?: GetTableAutoScalingSettingsCommandOutput) => void
  ): void;
  getTableAutoScalingSettings(
    args: GetTableAutoScalingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableAutoScalingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTypeCommand}
   */
  getType(args: GetTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetTypeCommandOutput>;
  getType(args: GetTypeCommandInput, cb: (err: any, data?: GetTypeCommandOutput) => void): void;
  getType(
    args: GetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyspacesCommand}
   */
  listKeyspaces(): Promise<ListKeyspacesCommandOutput>;
  listKeyspaces(args: ListKeyspacesCommandInput, options?: __HttpHandlerOptions): Promise<ListKeyspacesCommandOutput>;
  listKeyspaces(args: ListKeyspacesCommandInput, cb: (err: any, data?: ListKeyspacesCommandOutput) => void): void;
  listKeyspaces(
    args: ListKeyspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTablesCommand}
   */
  listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
  listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
  listTables(
    args: ListTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
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
   * @see {@link ListTypesCommand}
   */
  listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreTableCommand}
   */
  restoreTable(args: RestoreTableCommandInput, options?: __HttpHandlerOptions): Promise<RestoreTableCommandOutput>;
  restoreTable(args: RestoreTableCommandInput, cb: (err: any, data?: RestoreTableCommandOutput) => void): void;
  restoreTable(
    args: RestoreTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableCommandOutput) => void
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
   * @see {@link UpdateTableCommand}
   */
  updateTable(args: UpdateTableCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTableCommandOutput>;
  updateTable(args: UpdateTableCommandInput, cb: (err: any, data?: UpdateTableCommandOutput) => void): void;
  updateTable(
    args: UpdateTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Keyspaces (for Apache Cassandra) is a scalable,
 *         highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate,
 *         run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code,
 *         you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p>
 *          <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers,
 *            Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as
 *            infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes
 *         the supported DDL operations in detail.</p>
 *          <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types
 *         in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer
 *               Guide</i>.</p>
 *          <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *          <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>
 * @public
 */
export class Keyspaces extends KeyspacesClient implements Keyspaces {}
createAggregatedClient(commands, Keyspaces);
