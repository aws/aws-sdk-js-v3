// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentClient, BedrockAgentClientConfig } from "./BedrockAgentClient";
import {
  AssociateAgentCollaboratorCommand,
  AssociateAgentCollaboratorCommandInput,
  AssociateAgentCollaboratorCommandOutput,
} from "./commands/AssociateAgentCollaboratorCommand";
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
  CreateFlowAliasCommand,
  CreateFlowAliasCommandInput,
  CreateFlowAliasCommandOutput,
} from "./commands/CreateFlowAliasCommand";
import { CreateFlowCommand, CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  CreateFlowVersionCommand,
  CreateFlowVersionCommandInput,
  CreateFlowVersionCommandOutput,
} from "./commands/CreateFlowVersionCommand";
import {
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  CreatePromptCommand,
  CreatePromptCommandInput,
  CreatePromptCommandOutput,
} from "./commands/CreatePromptCommand";
import {
  CreatePromptVersionCommand,
  CreatePromptVersionCommandInput,
  CreatePromptVersionCommandOutput,
} from "./commands/CreatePromptVersionCommand";
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
  DeleteFlowAliasCommand,
  DeleteFlowAliasCommandInput,
  DeleteFlowAliasCommandOutput,
} from "./commands/DeleteFlowAliasCommand";
import { DeleteFlowCommand, DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import {
  DeleteFlowVersionCommand,
  DeleteFlowVersionCommandInput,
  DeleteFlowVersionCommandOutput,
} from "./commands/DeleteFlowVersionCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DeleteKnowledgeBaseDocumentsCommand,
  DeleteKnowledgeBaseDocumentsCommandInput,
  DeleteKnowledgeBaseDocumentsCommandOutput,
} from "./commands/DeleteKnowledgeBaseDocumentsCommand";
import {
  DeletePromptCommand,
  DeletePromptCommandInput,
  DeletePromptCommandOutput,
} from "./commands/DeletePromptCommand";
import {
  DisassociateAgentCollaboratorCommand,
  DisassociateAgentCollaboratorCommandInput,
  DisassociateAgentCollaboratorCommandOutput,
} from "./commands/DisassociateAgentCollaboratorCommand";
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
import {
  GetAgentCollaboratorCommand,
  GetAgentCollaboratorCommandInput,
  GetAgentCollaboratorCommandOutput,
} from "./commands/GetAgentCollaboratorCommand";
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
  GetFlowAliasCommand,
  GetFlowAliasCommandInput,
  GetFlowAliasCommandOutput,
} from "./commands/GetFlowAliasCommand";
import { GetFlowCommand, GetFlowCommandInput, GetFlowCommandOutput } from "./commands/GetFlowCommand";
import {
  GetFlowVersionCommand,
  GetFlowVersionCommandInput,
  GetFlowVersionCommandOutput,
} from "./commands/GetFlowVersionCommand";
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
  GetKnowledgeBaseDocumentsCommand,
  GetKnowledgeBaseDocumentsCommandInput,
  GetKnowledgeBaseDocumentsCommandOutput,
} from "./commands/GetKnowledgeBaseDocumentsCommand";
import { GetPromptCommand, GetPromptCommandInput, GetPromptCommandOutput } from "./commands/GetPromptCommand";
import {
  IngestKnowledgeBaseDocumentsCommand,
  IngestKnowledgeBaseDocumentsCommandInput,
  IngestKnowledgeBaseDocumentsCommandOutput,
} from "./commands/IngestKnowledgeBaseDocumentsCommand";
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
  ListAgentCollaboratorsCommand,
  ListAgentCollaboratorsCommandInput,
  ListAgentCollaboratorsCommandOutput,
} from "./commands/ListAgentCollaboratorsCommand";
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
  ListFlowAliasesCommand,
  ListFlowAliasesCommandInput,
  ListFlowAliasesCommandOutput,
} from "./commands/ListFlowAliasesCommand";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListFlowVersionsCommand,
  ListFlowVersionsCommandInput,
  ListFlowVersionsCommandOutput,
} from "./commands/ListFlowVersionsCommand";
import {
  ListIngestionJobsCommand,
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
} from "./commands/ListIngestionJobsCommand";
import {
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBaseDocumentsCommandInput,
  ListKnowledgeBaseDocumentsCommandOutput,
} from "./commands/ListKnowledgeBaseDocumentsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
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
import { PrepareFlowCommand, PrepareFlowCommandInput, PrepareFlowCommandOutput } from "./commands/PrepareFlowCommand";
import {
  StartIngestionJobCommand,
  StartIngestionJobCommandInput,
  StartIngestionJobCommandOutput,
} from "./commands/StartIngestionJobCommand";
import {
  StopIngestionJobCommand,
  StopIngestionJobCommandInput,
  StopIngestionJobCommandOutput,
} from "./commands/StopIngestionJobCommand";
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
import {
  UpdateAgentCollaboratorCommand,
  UpdateAgentCollaboratorCommandInput,
  UpdateAgentCollaboratorCommandOutput,
} from "./commands/UpdateAgentCollaboratorCommand";
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
  UpdateFlowAliasCommand,
  UpdateFlowAliasCommandInput,
  UpdateFlowAliasCommandOutput,
} from "./commands/UpdateFlowAliasCommand";
import { UpdateFlowCommand, UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import {
  UpdateKnowledgeBaseCommand,
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "./commands/UpdateKnowledgeBaseCommand";
import {
  UpdatePromptCommand,
  UpdatePromptCommandInput,
  UpdatePromptCommandOutput,
} from "./commands/UpdatePromptCommand";
import {
  ValidateFlowDefinitionCommand,
  ValidateFlowDefinitionCommandInput,
  ValidateFlowDefinitionCommandOutput,
} from "./commands/ValidateFlowDefinitionCommand";

const commands = {
  AssociateAgentCollaboratorCommand,
  AssociateAgentKnowledgeBaseCommand,
  CreateAgentCommand,
  CreateAgentActionGroupCommand,
  CreateAgentAliasCommand,
  CreateDataSourceCommand,
  CreateFlowCommand,
  CreateFlowAliasCommand,
  CreateFlowVersionCommand,
  CreateKnowledgeBaseCommand,
  CreatePromptCommand,
  CreatePromptVersionCommand,
  DeleteAgentCommand,
  DeleteAgentActionGroupCommand,
  DeleteAgentAliasCommand,
  DeleteAgentVersionCommand,
  DeleteDataSourceCommand,
  DeleteFlowCommand,
  DeleteFlowAliasCommand,
  DeleteFlowVersionCommand,
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseDocumentsCommand,
  DeletePromptCommand,
  DisassociateAgentCollaboratorCommand,
  DisassociateAgentKnowledgeBaseCommand,
  GetAgentCommand,
  GetAgentActionGroupCommand,
  GetAgentAliasCommand,
  GetAgentCollaboratorCommand,
  GetAgentKnowledgeBaseCommand,
  GetAgentVersionCommand,
  GetDataSourceCommand,
  GetFlowCommand,
  GetFlowAliasCommand,
  GetFlowVersionCommand,
  GetIngestionJobCommand,
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseDocumentsCommand,
  GetPromptCommand,
  IngestKnowledgeBaseDocumentsCommand,
  ListAgentActionGroupsCommand,
  ListAgentAliasesCommand,
  ListAgentCollaboratorsCommand,
  ListAgentKnowledgeBasesCommand,
  ListAgentsCommand,
  ListAgentVersionsCommand,
  ListDataSourcesCommand,
  ListFlowAliasesCommand,
  ListFlowsCommand,
  ListFlowVersionsCommand,
  ListIngestionJobsCommand,
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBasesCommand,
  ListPromptsCommand,
  ListTagsForResourceCommand,
  PrepareAgentCommand,
  PrepareFlowCommand,
  StartIngestionJobCommand,
  StopIngestionJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateAgentActionGroupCommand,
  UpdateAgentAliasCommand,
  UpdateAgentCollaboratorCommand,
  UpdateAgentKnowledgeBaseCommand,
  UpdateDataSourceCommand,
  UpdateFlowCommand,
  UpdateFlowAliasCommand,
  UpdateKnowledgeBaseCommand,
  UpdatePromptCommand,
  ValidateFlowDefinitionCommand,
};

export interface BedrockAgent {
  /**
   * @see {@link AssociateAgentCollaboratorCommand}
   */
  associateAgentCollaborator(
    args: AssociateAgentCollaboratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAgentCollaboratorCommandOutput>;
  associateAgentCollaborator(
    args: AssociateAgentCollaboratorCommandInput,
    cb: (err: any, data?: AssociateAgentCollaboratorCommandOutput) => void
  ): void;
  associateAgentCollaborator(
    args: AssociateAgentCollaboratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAgentCollaboratorCommandOutput) => void
  ): void;

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
   * @see {@link CreateFlowCommand}
   */
  createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowAliasCommand}
   */
  createFlowAlias(
    args: CreateFlowAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowAliasCommandOutput>;
  createFlowAlias(args: CreateFlowAliasCommandInput, cb: (err: any, data?: CreateFlowAliasCommandOutput) => void): void;
  createFlowAlias(
    args: CreateFlowAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowVersionCommand}
   */
  createFlowVersion(
    args: CreateFlowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowVersionCommandOutput>;
  createFlowVersion(
    args: CreateFlowVersionCommandInput,
    cb: (err: any, data?: CreateFlowVersionCommandOutput) => void
  ): void;
  createFlowVersion(
    args: CreateFlowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowVersionCommandOutput) => void
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
   * @see {@link CreatePromptCommand}
   */
  createPrompt(args: CreatePromptCommandInput, options?: __HttpHandlerOptions): Promise<CreatePromptCommandOutput>;
  createPrompt(args: CreatePromptCommandInput, cb: (err: any, data?: CreatePromptCommandOutput) => void): void;
  createPrompt(
    args: CreatePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePromptVersionCommand}
   */
  createPromptVersion(
    args: CreatePromptVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePromptVersionCommandOutput>;
  createPromptVersion(
    args: CreatePromptVersionCommandInput,
    cb: (err: any, data?: CreatePromptVersionCommandOutput) => void
  ): void;
  createPromptVersion(
    args: CreatePromptVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePromptVersionCommandOutput) => void
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
   * @see {@link DeleteFlowCommand}
   */
  deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowAliasCommand}
   */
  deleteFlowAlias(
    args: DeleteFlowAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowAliasCommandOutput>;
  deleteFlowAlias(args: DeleteFlowAliasCommandInput, cb: (err: any, data?: DeleteFlowAliasCommandOutput) => void): void;
  deleteFlowAlias(
    args: DeleteFlowAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowVersionCommand}
   */
  deleteFlowVersion(
    args: DeleteFlowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowVersionCommandOutput>;
  deleteFlowVersion(
    args: DeleteFlowVersionCommandInput,
    cb: (err: any, data?: DeleteFlowVersionCommandOutput) => void
  ): void;
  deleteFlowVersion(
    args: DeleteFlowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowVersionCommandOutput) => void
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
   * @see {@link DeleteKnowledgeBaseDocumentsCommand}
   */
  deleteKnowledgeBaseDocuments(
    args: DeleteKnowledgeBaseDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnowledgeBaseDocumentsCommandOutput>;
  deleteKnowledgeBaseDocuments(
    args: DeleteKnowledgeBaseDocumentsCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseDocumentsCommandOutput) => void
  ): void;
  deleteKnowledgeBaseDocuments(
    args: DeleteKnowledgeBaseDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePromptCommand}
   */
  deletePrompt(args: DeletePromptCommandInput, options?: __HttpHandlerOptions): Promise<DeletePromptCommandOutput>;
  deletePrompt(args: DeletePromptCommandInput, cb: (err: any, data?: DeletePromptCommandOutput) => void): void;
  deletePrompt(
    args: DeletePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAgentCollaboratorCommand}
   */
  disassociateAgentCollaborator(
    args: DisassociateAgentCollaboratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAgentCollaboratorCommandOutput>;
  disassociateAgentCollaborator(
    args: DisassociateAgentCollaboratorCommandInput,
    cb: (err: any, data?: DisassociateAgentCollaboratorCommandOutput) => void
  ): void;
  disassociateAgentCollaborator(
    args: DisassociateAgentCollaboratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAgentCollaboratorCommandOutput) => void
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
   * @see {@link GetAgentCollaboratorCommand}
   */
  getAgentCollaborator(
    args: GetAgentCollaboratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentCollaboratorCommandOutput>;
  getAgentCollaborator(
    args: GetAgentCollaboratorCommandInput,
    cb: (err: any, data?: GetAgentCollaboratorCommandOutput) => void
  ): void;
  getAgentCollaborator(
    args: GetAgentCollaboratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentCollaboratorCommandOutput) => void
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
   * @see {@link GetFlowCommand}
   */
  getFlow(args: GetFlowCommandInput, options?: __HttpHandlerOptions): Promise<GetFlowCommandOutput>;
  getFlow(args: GetFlowCommandInput, cb: (err: any, data?: GetFlowCommandOutput) => void): void;
  getFlow(
    args: GetFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowAliasCommand}
   */
  getFlowAlias(args: GetFlowAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetFlowAliasCommandOutput>;
  getFlowAlias(args: GetFlowAliasCommandInput, cb: (err: any, data?: GetFlowAliasCommandOutput) => void): void;
  getFlowAlias(
    args: GetFlowAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowVersionCommand}
   */
  getFlowVersion(
    args: GetFlowVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowVersionCommandOutput>;
  getFlowVersion(args: GetFlowVersionCommandInput, cb: (err: any, data?: GetFlowVersionCommandOutput) => void): void;
  getFlowVersion(
    args: GetFlowVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowVersionCommandOutput) => void
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
   * @see {@link GetKnowledgeBaseDocumentsCommand}
   */
  getKnowledgeBaseDocuments(
    args: GetKnowledgeBaseDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKnowledgeBaseDocumentsCommandOutput>;
  getKnowledgeBaseDocuments(
    args: GetKnowledgeBaseDocumentsCommandInput,
    cb: (err: any, data?: GetKnowledgeBaseDocumentsCommandOutput) => void
  ): void;
  getKnowledgeBaseDocuments(
    args: GetKnowledgeBaseDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKnowledgeBaseDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPromptCommand}
   */
  getPrompt(args: GetPromptCommandInput, options?: __HttpHandlerOptions): Promise<GetPromptCommandOutput>;
  getPrompt(args: GetPromptCommandInput, cb: (err: any, data?: GetPromptCommandOutput) => void): void;
  getPrompt(
    args: GetPromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPromptCommandOutput) => void
  ): void;

  /**
   * @see {@link IngestKnowledgeBaseDocumentsCommand}
   */
  ingestKnowledgeBaseDocuments(
    args: IngestKnowledgeBaseDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IngestKnowledgeBaseDocumentsCommandOutput>;
  ingestKnowledgeBaseDocuments(
    args: IngestKnowledgeBaseDocumentsCommandInput,
    cb: (err: any, data?: IngestKnowledgeBaseDocumentsCommandOutput) => void
  ): void;
  ingestKnowledgeBaseDocuments(
    args: IngestKnowledgeBaseDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IngestKnowledgeBaseDocumentsCommandOutput) => void
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
   * @see {@link ListAgentCollaboratorsCommand}
   */
  listAgentCollaborators(
    args: ListAgentCollaboratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentCollaboratorsCommandOutput>;
  listAgentCollaborators(
    args: ListAgentCollaboratorsCommandInput,
    cb: (err: any, data?: ListAgentCollaboratorsCommandOutput) => void
  ): void;
  listAgentCollaborators(
    args: ListAgentCollaboratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentCollaboratorsCommandOutput) => void
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
   * @see {@link ListFlowAliasesCommand}
   */
  listFlowAliases(
    args: ListFlowAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowAliasesCommandOutput>;
  listFlowAliases(args: ListFlowAliasesCommandInput, cb: (err: any, data?: ListFlowAliasesCommandOutput) => void): void;
  listFlowAliases(
    args: ListFlowAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowVersionsCommand}
   */
  listFlowVersions(
    args: ListFlowVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowVersionsCommandOutput>;
  listFlowVersions(
    args: ListFlowVersionsCommandInput,
    cb: (err: any, data?: ListFlowVersionsCommandOutput) => void
  ): void;
  listFlowVersions(
    args: ListFlowVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowVersionsCommandOutput) => void
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
   * @see {@link ListKnowledgeBaseDocumentsCommand}
   */
  listKnowledgeBaseDocuments(
    args: ListKnowledgeBaseDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKnowledgeBaseDocumentsCommandOutput>;
  listKnowledgeBaseDocuments(
    args: ListKnowledgeBaseDocumentsCommandInput,
    cb: (err: any, data?: ListKnowledgeBaseDocumentsCommandOutput) => void
  ): void;
  listKnowledgeBaseDocuments(
    args: ListKnowledgeBaseDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKnowledgeBaseDocumentsCommandOutput) => void
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
   * @see {@link ListPromptsCommand}
   */
  listPrompts(): Promise<ListPromptsCommandOutput>;
  listPrompts(args: ListPromptsCommandInput, options?: __HttpHandlerOptions): Promise<ListPromptsCommandOutput>;
  listPrompts(args: ListPromptsCommandInput, cb: (err: any, data?: ListPromptsCommandOutput) => void): void;
  listPrompts(
    args: ListPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
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
   * @see {@link PrepareFlowCommand}
   */
  prepareFlow(args: PrepareFlowCommandInput, options?: __HttpHandlerOptions): Promise<PrepareFlowCommandOutput>;
  prepareFlow(args: PrepareFlowCommandInput, cb: (err: any, data?: PrepareFlowCommandOutput) => void): void;
  prepareFlow(
    args: PrepareFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareFlowCommandOutput) => void
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
   * @see {@link StopIngestionJobCommand}
   */
  stopIngestionJob(
    args: StopIngestionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopIngestionJobCommandOutput>;
  stopIngestionJob(
    args: StopIngestionJobCommandInput,
    cb: (err: any, data?: StopIngestionJobCommandOutput) => void
  ): void;
  stopIngestionJob(
    args: StopIngestionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopIngestionJobCommandOutput) => void
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
   * @see {@link UpdateAgentCollaboratorCommand}
   */
  updateAgentCollaborator(
    args: UpdateAgentCollaboratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentCollaboratorCommandOutput>;
  updateAgentCollaborator(
    args: UpdateAgentCollaboratorCommandInput,
    cb: (err: any, data?: UpdateAgentCollaboratorCommandOutput) => void
  ): void;
  updateAgentCollaborator(
    args: UpdateAgentCollaboratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCollaboratorCommandOutput) => void
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
   * @see {@link UpdateFlowCommand}
   */
  updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowAliasCommand}
   */
  updateFlowAlias(
    args: UpdateFlowAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowAliasCommandOutput>;
  updateFlowAlias(args: UpdateFlowAliasCommandInput, cb: (err: any, data?: UpdateFlowAliasCommandOutput) => void): void;
  updateFlowAlias(
    args: UpdateFlowAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowAliasCommandOutput) => void
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

  /**
   * @see {@link UpdatePromptCommand}
   */
  updatePrompt(args: UpdatePromptCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePromptCommandOutput>;
  updatePrompt(args: UpdatePromptCommandInput, cb: (err: any, data?: UpdatePromptCommandOutput) => void): void;
  updatePrompt(
    args: UpdatePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateFlowDefinitionCommand}
   */
  validateFlowDefinition(
    args: ValidateFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateFlowDefinitionCommandOutput>;
  validateFlowDefinition(
    args: ValidateFlowDefinitionCommandInput,
    cb: (err: any, data?: ValidateFlowDefinitionCommandOutput) => void
  ): void;
  validateFlowDefinition(
    args: ValidateFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateFlowDefinitionCommandOutput) => void
  ): void;
}

/**
 * <p>Describes the API operations for creating and managing Amazon Bedrock agents.</p>
 * @public
 */
export class BedrockAgent extends BedrockAgentClient implements BedrockAgent {}
createAggregatedClient(commands, BedrockAgent);
