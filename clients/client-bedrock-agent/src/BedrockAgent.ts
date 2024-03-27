// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentClient, BedrockAgentClientConfig } from "./BedrockAgentClient";
import {
  AssociateAgentKnowledgeBaseCommand,
  AssociateAgentKnowledgeBaseCommandInput,
  AssociateAgentKnowledgeBaseCommandOutput,
} from "./commands/AssociateAgentKnowledgeBaseCommand";
import {
  CreateAgentActionGroupCommand,
  CreateAgentActionGroupCommandInput,
  CreateAgentActionGroupCommandOutput,
} from "./commands/CreateAgentActionGroupCommand";
import {
  CreateAgentAliasCommand,
  CreateAgentAliasCommandInput,
  CreateAgentAliasCommandOutput,
} from "./commands/CreateAgentAliasCommand";
import { CreateAgentCommand, CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  DeleteAgentActionGroupCommand,
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "./commands/DeleteAgentActionGroupCommand";
import {
  DeleteAgentAliasCommand,
  DeleteAgentAliasCommandInput,
  DeleteAgentAliasCommandOutput,
} from "./commands/DeleteAgentAliasCommand";
import { DeleteAgentCommand, DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import {
  DeleteAgentVersionCommand,
  DeleteAgentVersionCommandInput,
  DeleteAgentVersionCommandOutput,
} from "./commands/DeleteAgentVersionCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DisassociateAgentKnowledgeBaseCommand,
  DisassociateAgentKnowledgeBaseCommandInput,
  DisassociateAgentKnowledgeBaseCommandOutput,
} from "./commands/DisassociateAgentKnowledgeBaseCommand";
import {
  GetAgentActionGroupCommand,
  GetAgentActionGroupCommandInput,
  GetAgentActionGroupCommandOutput,
} from "./commands/GetAgentActionGroupCommand";
import {
  GetAgentAliasCommand,
  GetAgentAliasCommandInput,
  GetAgentAliasCommandOutput,
} from "./commands/GetAgentAliasCommand";
import { GetAgentCommand, GetAgentCommandInput, GetAgentCommandOutput } from "./commands/GetAgentCommand";
import {
  GetAgentKnowledgeBaseCommand,
  GetAgentKnowledgeBaseCommandInput,
  GetAgentKnowledgeBaseCommandOutput,
} from "./commands/GetAgentKnowledgeBaseCommand";
import {
  GetAgentVersionCommand,
  GetAgentVersionCommandInput,
  GetAgentVersionCommandOutput,
} from "./commands/GetAgentVersionCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetIngestionJobCommand,
  GetIngestionJobCommandInput,
  GetIngestionJobCommandOutput,
} from "./commands/GetIngestionJobCommand";
import {
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
} from "./commands/GetKnowledgeBaseCommand";
import {
  ListAgentActionGroupsCommand,
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "./commands/ListAgentActionGroupsCommand";
import {
  ListAgentAliasesCommand,
  ListAgentAliasesCommandInput,
  ListAgentAliasesCommandOutput,
} from "./commands/ListAgentAliasesCommand";
import {
  ListAgentKnowledgeBasesCommand,
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "./commands/ListAgentKnowledgeBasesCommand";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import {
  ListAgentVersionsCommand,
  ListAgentVersionsCommandInput,
  ListAgentVersionsCommandOutput,
} from "./commands/ListAgentVersionsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListIngestionJobsCommand,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
} from "./commands/ListIngestionJobsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PrepareAgentCommand,
  PrepareAgentCommandInput,
  PrepareAgentCommandOutput,
} from "./commands/PrepareAgentCommand";
import {
  StartIngestionJobCommand,
  StartIngestionJobCommandInput,
  StartIngestionJobCommandOutput,
} from "./commands/StartIngestionJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentActionGroupCommand,
  UpdateAgentActionGroupCommandInput,
  UpdateAgentActionGroupCommandOutput,
} from "./commands/UpdateAgentActionGroupCommand";
import {
  UpdateAgentAliasCommand,
  UpdateAgentAliasCommandInput,
  UpdateAgentAliasCommandOutput,
} from "./commands/UpdateAgentAliasCommand";
import { UpdateAgentCommand, UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import {
  UpdateAgentKnowledgeBaseCommand,
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
} from "./commands/UpdateAgentKnowledgeBaseCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateKnowledgeBaseCommand,
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "./commands/UpdateKnowledgeBaseCommand";

const commands = {
  AssociateAgentKnowledgeBaseCommand,
  CreateAgentCommand,
  CreateAgentActionGroupCommand,
  CreateAgentAliasCommand,
  CreateDataSourceCommand,
  CreateKnowledgeBaseCommand,
  DeleteAgentCommand,
  DeleteAgentActionGroupCommand,
  DeleteAgentAliasCommand,
  DeleteAgentVersionCommand,
  DeleteDataSourceCommand,
  DeleteKnowledgeBaseCommand,
  DisassociateAgentKnowledgeBaseCommand,
  GetAgentCommand,
  GetAgentActionGroupCommand,
  GetAgentAliasCommand,
  GetAgentKnowledgeBaseCommand,
  GetAgentVersionCommand,
  GetDataSourceCommand,
  GetIngestionJobCommand,
  GetKnowledgeBaseCommand,
  ListAgentActionGroupsCommand,
  ListAgentAliasesCommand,
  ListAgentKnowledgeBasesCommand,
  ListAgentsCommand,
  ListAgentVersionsCommand,
  ListDataSourcesCommand,
  ListIngestionJobsCommand,
  ListKnowledgeBasesCommand,
  ListTagsForResourceCommand,
  PrepareAgentCommand,
  StartIngestionJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateAgentActionGroupCommand,
  UpdateAgentAliasCommand,
  UpdateAgentKnowledgeBaseCommand,
  UpdateDataSourceCommand,
  UpdateKnowledgeBaseCommand,
};

export interface BedrockAgent {
  /**
   * @see {@link AssociateAgentKnowledgeBaseCommand}
   */
  associateAgentKnowledgeBase(
    args: AssociateAgentKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAgentKnowledgeBaseCommandOutput>;
  associateAgentKnowledgeBase(
    args: AssociateAgentKnowledgeBaseCommandInput,
    cb: (err: any, data?: AssociateAgentKnowledgeBaseCommandOutput) => void
  ): void;
  associateAgentKnowledgeBase(
    args: AssociateAgentKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAgentKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentCommand}
   */
  createAgent(args: CreateAgentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAgentCommandOutput>;
  createAgent(args: CreateAgentCommandInput, cb: (err: any, data?: CreateAgentCommandOutput) => void): void;
  createAgent(
    args: CreateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentActionGroupCommand}
   */
  createAgentActionGroup(
    args: CreateAgentActionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentActionGroupCommandOutput>;
  createAgentActionGroup(
    args: CreateAgentActionGroupCommandInput,
    cb: (err: any, data?: CreateAgentActionGroupCommandOutput) => void
  ): void;
  createAgentActionGroup(
    args: CreateAgentActionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentActionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentAliasCommand}
   */
  createAgentAlias(
    args: CreateAgentAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentAliasCommandOutput>;
  createAgentAlias(
    args: CreateAgentAliasCommandInput,
    cb: (err: any, data?: CreateAgentAliasCommandOutput) => void
  ): void;
  createAgentAlias(
    args: CreateAgentAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKnowledgeBaseCommand}
   */
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKnowledgeBaseCommandOutput>;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentCommand}
   */
  deleteAgent(args: DeleteAgentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAgentCommandOutput>;
  deleteAgent(args: DeleteAgentCommandInput, cb: (err: any, data?: DeleteAgentCommandOutput) => void): void;
  deleteAgent(
    args: DeleteAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentActionGroupCommand}
   */
  deleteAgentActionGroup(
    args: DeleteAgentActionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentActionGroupCommandOutput>;
  deleteAgentActionGroup(
    args: DeleteAgentActionGroupCommandInput,
    cb: (err: any, data?: DeleteAgentActionGroupCommandOutput) => void
  ): void;
  deleteAgentActionGroup(
    args: DeleteAgentActionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentActionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentAliasCommand}
   */
  deleteAgentAlias(
    args: DeleteAgentAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentAliasCommandOutput>;
  deleteAgentAlias(
    args: DeleteAgentAliasCommandInput,
    cb: (err: any, data?: DeleteAgentAliasCommandOutput) => void
  ): void;
  deleteAgentAlias(
    args: DeleteAgentAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentVersionCommand}
   */
  deleteAgentVersion(
    args: DeleteAgentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentVersionCommandOutput>;
  deleteAgentVersion(
    args: DeleteAgentVersionCommandInput,
    cb: (err: any, data?: DeleteAgentVersionCommandOutput) => void
  ): void;
  deleteAgentVersion(
    args: DeleteAgentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKnowledgeBaseCommand}
   */
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnowledgeBaseCommandOutput>;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAgentKnowledgeBaseCommand}
   */
  disassociateAgentKnowledgeBase(
    args: DisassociateAgentKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAgentKnowledgeBaseCommandOutput>;
  disassociateAgentKnowledgeBase(
    args: DisassociateAgentKnowledgeBaseCommandInput,
    cb: (err: any, data?: DisassociateAgentKnowledgeBaseCommandOutput) => void
  ): void;
  disassociateAgentKnowledgeBase(
    args: DisassociateAgentKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAgentKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentCommand}
   */
  getAgent(args: GetAgentCommandInput, options?: __HttpHandlerOptions): Promise<GetAgentCommandOutput>;
  getAgent(args: GetAgentCommandInput, cb: (err: any, data?: GetAgentCommandOutput) => void): void;
  getAgent(
    args: GetAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentActionGroupCommand}
   */
  getAgentActionGroup(
    args: GetAgentActionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentActionGroupCommandOutput>;
  getAgentActionGroup(
    args: GetAgentActionGroupCommandInput,
    cb: (err: any, data?: GetAgentActionGroupCommandOutput) => void
  ): void;
  getAgentActionGroup(
    args: GetAgentActionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentActionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentAliasCommand}
   */
  getAgentAlias(args: GetAgentAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetAgentAliasCommandOutput>;
  getAgentAlias(args: GetAgentAliasCommandInput, cb: (err: any, data?: GetAgentAliasCommandOutput) => void): void;
  getAgentAlias(
    args: GetAgentAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentKnowledgeBaseCommand}
   */
  getAgentKnowledgeBase(
    args: GetAgentKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentKnowledgeBaseCommandOutput>;
  getAgentKnowledgeBase(
    args: GetAgentKnowledgeBaseCommandInput,
    cb: (err: any, data?: GetAgentKnowledgeBaseCommandOutput) => void
  ): void;
  getAgentKnowledgeBase(
    args: GetAgentKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentVersionCommand}
   */
  getAgentVersion(
    args: GetAgentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentVersionCommandOutput>;
  getAgentVersion(args: GetAgentVersionCommandInput, cb: (err: any, data?: GetAgentVersionCommandOutput) => void): void;
  getAgentVersion(
    args: GetAgentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngestionJobCommand}
   */
  getIngestionJob(
    args: GetIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIngestionJobCommandOutput>;
  getIngestionJob(args: GetIngestionJobCommandInput, cb: (err: any, data?: GetIngestionJobCommandOutput) => void): void;
  getIngestionJob(
    args: GetIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngestionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKnowledgeBaseCommand}
   */
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKnowledgeBaseCommandOutput>;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentActionGroupsCommand}
   */
  listAgentActionGroups(
    args: ListAgentActionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentActionGroupsCommandOutput>;
  listAgentActionGroups(
    args: ListAgentActionGroupsCommandInput,
    cb: (err: any, data?: ListAgentActionGroupsCommandOutput) => void
  ): void;
  listAgentActionGroups(
    args: ListAgentActionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentActionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentAliasesCommand}
   */
  listAgentAliases(
    args: ListAgentAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentAliasesCommandOutput>;
  listAgentAliases(
    args: ListAgentAliasesCommandInput,
    cb: (err: any, data?: ListAgentAliasesCommandOutput) => void
  ): void;
  listAgentAliases(
    args: ListAgentAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentKnowledgeBasesCommand}
   */
  listAgentKnowledgeBases(
    args: ListAgentKnowledgeBasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentKnowledgeBasesCommandOutput>;
  listAgentKnowledgeBases(
    args: ListAgentKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListAgentKnowledgeBasesCommandOutput) => void
  ): void;
  listAgentKnowledgeBases(
    args: ListAgentKnowledgeBasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentKnowledgeBasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentsCommand}
   */
  listAgents(): Promise<ListAgentsCommandOutput>;
  listAgents(args: ListAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAgentsCommandOutput>;
  listAgents(args: ListAgentsCommandInput, cb: (err: any, data?: ListAgentsCommandOutput) => void): void;
  listAgents(
    args: ListAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentVersionsCommand}
   */
  listAgentVersions(
    args: ListAgentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentVersionsCommandOutput>;
  listAgentVersions(
    args: ListAgentVersionsCommandInput,
    cb: (err: any, data?: ListAgentVersionsCommandOutput) => void
  ): void;
  listAgentVersions(
    args: ListAgentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestionJobsCommand}
   */
  listIngestionJobs(
    args: ListIngestionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestionJobsCommandOutput>;
  listIngestionJobs(
    args: ListIngestionJobsCommandInput,
    cb: (err: any, data?: ListIngestionJobsCommandOutput) => void
  ): void;
  listIngestionJobs(
    args: ListIngestionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
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
   * @see {@link PrepareAgentCommand}
   */
  prepareAgent(args: PrepareAgentCommandInput, options?: __HttpHandlerOptions): Promise<PrepareAgentCommandOutput>;
  prepareAgent(args: PrepareAgentCommandInput, cb: (err: any, data?: PrepareAgentCommandOutput) => void): void;
  prepareAgent(
    args: PrepareAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartIngestionJobCommand}
   */
  startIngestionJob(
    args: StartIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartIngestionJobCommandOutput>;
  startIngestionJob(
    args: StartIngestionJobCommandInput,
    cb: (err: any, data?: StartIngestionJobCommandOutput) => void
  ): void;
  startIngestionJob(
    args: StartIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartIngestionJobCommandOutput) => void
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
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(args: UpdateAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAgentCommandOutput>;
  updateAgent(args: UpdateAgentCommandInput, cb: (err: any, data?: UpdateAgentCommandOutput) => void): void;
  updateAgent(
    args: UpdateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentActionGroupCommand}
   */
  updateAgentActionGroup(
    args: UpdateAgentActionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentActionGroupCommandOutput>;
  updateAgentActionGroup(
    args: UpdateAgentActionGroupCommandInput,
    cb: (err: any, data?: UpdateAgentActionGroupCommandOutput) => void
  ): void;
  updateAgentActionGroup(
    args: UpdateAgentActionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentActionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentAliasCommand}
   */
  updateAgentAlias(
    args: UpdateAgentAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentAliasCommandOutput>;
  updateAgentAlias(
    args: UpdateAgentAliasCommandInput,
    cb: (err: any, data?: UpdateAgentAliasCommandOutput) => void
  ): void;
  updateAgentAlias(
    args: UpdateAgentAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentKnowledgeBaseCommand}
   */
  updateAgentKnowledgeBase(
    args: UpdateAgentKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentKnowledgeBaseCommandOutput>;
  updateAgentKnowledgeBase(
    args: UpdateAgentKnowledgeBaseCommandInput,
    cb: (err: any, data?: UpdateAgentKnowledgeBaseCommandOutput) => void
  ): void;
  updateAgentKnowledgeBase(
    args: UpdateAgentKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKnowledgeBaseCommand}
   */
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKnowledgeBaseCommandOutput>;
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBaseCommandOutput) => void
  ): void;
  updateKnowledgeBase(
    args: UpdateKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKnowledgeBaseCommandOutput) => void
  ): void;
}

/**
 * <p>Describes the API operations for creating and managing Amazon Bedrock agents.</p>
 * @public
 */
export class BedrockAgent extends BedrockAgentClient implements BedrockAgent {}
createAggregatedClient(commands, BedrockAgent);
