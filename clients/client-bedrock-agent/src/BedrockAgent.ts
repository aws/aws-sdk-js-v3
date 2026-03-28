// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BedrockAgentClient } from "./BedrockAgentClient";
import {
  type AssociateAgentCollaboratorCommandInput,
  type AssociateAgentCollaboratorCommandOutput,
  AssociateAgentCollaboratorCommand,
} from "./commands/AssociateAgentCollaboratorCommand";
import {
  type AssociateAgentKnowledgeBaseCommandInput,
  type AssociateAgentKnowledgeBaseCommandOutput,
  AssociateAgentKnowledgeBaseCommand,
} from "./commands/AssociateAgentKnowledgeBaseCommand";
import {
  type CreateAgentActionGroupCommandInput,
  type CreateAgentActionGroupCommandOutput,
  CreateAgentActionGroupCommand,
} from "./commands/CreateAgentActionGroupCommand";
import {
  type CreateAgentAliasCommandInput,
  type CreateAgentAliasCommandOutput,
  CreateAgentAliasCommand,
} from "./commands/CreateAgentAliasCommand";
import {
  type CreateAgentCommandInput,
  type CreateAgentCommandOutput,
  CreateAgentCommand,
} from "./commands/CreateAgentCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateFlowAliasCommandInput,
  type CreateFlowAliasCommandOutput,
  CreateFlowAliasCommand,
} from "./commands/CreateFlowAliasCommand";
import {
  type CreateFlowCommandInput,
  type CreateFlowCommandOutput,
  CreateFlowCommand,
} from "./commands/CreateFlowCommand";
import {
  type CreateFlowVersionCommandInput,
  type CreateFlowVersionCommandOutput,
  CreateFlowVersionCommand,
} from "./commands/CreateFlowVersionCommand";
import {
  type CreateKnowledgeBaseCommandInput,
  type CreateKnowledgeBaseCommandOutput,
  CreateKnowledgeBaseCommand,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  type CreatePromptCommandInput,
  type CreatePromptCommandOutput,
  CreatePromptCommand,
} from "./commands/CreatePromptCommand";
import {
  type CreatePromptVersionCommandInput,
  type CreatePromptVersionCommandOutput,
  CreatePromptVersionCommand,
} from "./commands/CreatePromptVersionCommand";
import {
  type DeleteAgentActionGroupCommandInput,
  type DeleteAgentActionGroupCommandOutput,
  DeleteAgentActionGroupCommand,
} from "./commands/DeleteAgentActionGroupCommand";
import {
  type DeleteAgentAliasCommandInput,
  type DeleteAgentAliasCommandOutput,
  DeleteAgentAliasCommand,
} from "./commands/DeleteAgentAliasCommand";
import {
  type DeleteAgentCommandInput,
  type DeleteAgentCommandOutput,
  DeleteAgentCommand,
} from "./commands/DeleteAgentCommand";
import {
  type DeleteAgentVersionCommandInput,
  type DeleteAgentVersionCommandOutput,
  DeleteAgentVersionCommand,
} from "./commands/DeleteAgentVersionCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteFlowAliasCommandInput,
  type DeleteFlowAliasCommandOutput,
  DeleteFlowAliasCommand,
} from "./commands/DeleteFlowAliasCommand";
import {
  type DeleteFlowCommandInput,
  type DeleteFlowCommandOutput,
  DeleteFlowCommand,
} from "./commands/DeleteFlowCommand";
import {
  type DeleteFlowVersionCommandInput,
  type DeleteFlowVersionCommandOutput,
  DeleteFlowVersionCommand,
} from "./commands/DeleteFlowVersionCommand";
import {
  type DeleteKnowledgeBaseCommandInput,
  type DeleteKnowledgeBaseCommandOutput,
  DeleteKnowledgeBaseCommand,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  type DeleteKnowledgeBaseDocumentsCommandInput,
  type DeleteKnowledgeBaseDocumentsCommandOutput,
  DeleteKnowledgeBaseDocumentsCommand,
} from "./commands/DeleteKnowledgeBaseDocumentsCommand";
import {
  type DeletePromptCommandInput,
  type DeletePromptCommandOutput,
  DeletePromptCommand,
} from "./commands/DeletePromptCommand";
import {
  type DisassociateAgentCollaboratorCommandInput,
  type DisassociateAgentCollaboratorCommandOutput,
  DisassociateAgentCollaboratorCommand,
} from "./commands/DisassociateAgentCollaboratorCommand";
import {
  type DisassociateAgentKnowledgeBaseCommandInput,
  type DisassociateAgentKnowledgeBaseCommandOutput,
  DisassociateAgentKnowledgeBaseCommand,
} from "./commands/DisassociateAgentKnowledgeBaseCommand";
import {
  type GetAgentActionGroupCommandInput,
  type GetAgentActionGroupCommandOutput,
  GetAgentActionGroupCommand,
} from "./commands/GetAgentActionGroupCommand";
import {
  type GetAgentAliasCommandInput,
  type GetAgentAliasCommandOutput,
  GetAgentAliasCommand,
} from "./commands/GetAgentAliasCommand";
import {
  type GetAgentCollaboratorCommandInput,
  type GetAgentCollaboratorCommandOutput,
  GetAgentCollaboratorCommand,
} from "./commands/GetAgentCollaboratorCommand";
import { type GetAgentCommandInput, type GetAgentCommandOutput, GetAgentCommand } from "./commands/GetAgentCommand";
import {
  type GetAgentKnowledgeBaseCommandInput,
  type GetAgentKnowledgeBaseCommandOutput,
  GetAgentKnowledgeBaseCommand,
} from "./commands/GetAgentKnowledgeBaseCommand";
import {
  type GetAgentVersionCommandInput,
  type GetAgentVersionCommandOutput,
  GetAgentVersionCommand,
} from "./commands/GetAgentVersionCommand";
import {
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDataSourceCommand,
} from "./commands/GetDataSourceCommand";
import {
  type GetFlowAliasCommandInput,
  type GetFlowAliasCommandOutput,
  GetFlowAliasCommand,
} from "./commands/GetFlowAliasCommand";
import { type GetFlowCommandInput, type GetFlowCommandOutput, GetFlowCommand } from "./commands/GetFlowCommand";
import {
  type GetFlowVersionCommandInput,
  type GetFlowVersionCommandOutput,
  GetFlowVersionCommand,
} from "./commands/GetFlowVersionCommand";
import {
  type GetIngestionJobCommandInput,
  type GetIngestionJobCommandOutput,
  GetIngestionJobCommand,
} from "./commands/GetIngestionJobCommand";
import {
  type GetKnowledgeBaseCommandInput,
  type GetKnowledgeBaseCommandOutput,
  GetKnowledgeBaseCommand,
} from "./commands/GetKnowledgeBaseCommand";
import {
  type GetKnowledgeBaseDocumentsCommandInput,
  type GetKnowledgeBaseDocumentsCommandOutput,
  GetKnowledgeBaseDocumentsCommand,
} from "./commands/GetKnowledgeBaseDocumentsCommand";
import { type GetPromptCommandInput, type GetPromptCommandOutput, GetPromptCommand } from "./commands/GetPromptCommand";
import {
  type IngestKnowledgeBaseDocumentsCommandInput,
  type IngestKnowledgeBaseDocumentsCommandOutput,
  IngestKnowledgeBaseDocumentsCommand,
} from "./commands/IngestKnowledgeBaseDocumentsCommand";
import {
  type ListAgentActionGroupsCommandInput,
  type ListAgentActionGroupsCommandOutput,
  ListAgentActionGroupsCommand,
} from "./commands/ListAgentActionGroupsCommand";
import {
  type ListAgentAliasesCommandInput,
  type ListAgentAliasesCommandOutput,
  ListAgentAliasesCommand,
} from "./commands/ListAgentAliasesCommand";
import {
  type ListAgentCollaboratorsCommandInput,
  type ListAgentCollaboratorsCommandOutput,
  ListAgentCollaboratorsCommand,
} from "./commands/ListAgentCollaboratorsCommand";
import {
  type ListAgentKnowledgeBasesCommandInput,
  type ListAgentKnowledgeBasesCommandOutput,
  ListAgentKnowledgeBasesCommand,
} from "./commands/ListAgentKnowledgeBasesCommand";
import {
  type ListAgentsCommandInput,
  type ListAgentsCommandOutput,
  ListAgentsCommand,
} from "./commands/ListAgentsCommand";
import {
  type ListAgentVersionsCommandInput,
  type ListAgentVersionsCommandOutput,
  ListAgentVersionsCommand,
} from "./commands/ListAgentVersionsCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListFlowAliasesCommandInput,
  type ListFlowAliasesCommandOutput,
  ListFlowAliasesCommand,
} from "./commands/ListFlowAliasesCommand";
import { type ListFlowsCommandInput, type ListFlowsCommandOutput, ListFlowsCommand } from "./commands/ListFlowsCommand";
import {
  type ListFlowVersionsCommandInput,
  type ListFlowVersionsCommandOutput,
  ListFlowVersionsCommand,
} from "./commands/ListFlowVersionsCommand";
import {
  type ListIngestionJobsCommandInput,
  type ListIngestionJobsCommandOutput,
  ListIngestionJobsCommand,
} from "./commands/ListIngestionJobsCommand";
import {
  type ListKnowledgeBaseDocumentsCommandInput,
  type ListKnowledgeBaseDocumentsCommandOutput,
  ListKnowledgeBaseDocumentsCommand,
} from "./commands/ListKnowledgeBaseDocumentsCommand";
import {
  type ListKnowledgeBasesCommandInput,
  type ListKnowledgeBasesCommandOutput,
  ListKnowledgeBasesCommand,
} from "./commands/ListKnowledgeBasesCommand";
import {
  type ListPromptsCommandInput,
  type ListPromptsCommandOutput,
  ListPromptsCommand,
} from "./commands/ListPromptsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PrepareAgentCommandInput,
  type PrepareAgentCommandOutput,
  PrepareAgentCommand,
} from "./commands/PrepareAgentCommand";
import {
  type PrepareFlowCommandInput,
  type PrepareFlowCommandOutput,
  PrepareFlowCommand,
} from "./commands/PrepareFlowCommand";
import {
  type StartIngestionJobCommandInput,
  type StartIngestionJobCommandOutput,
  StartIngestionJobCommand,
} from "./commands/StartIngestionJobCommand";
import {
  type StopIngestionJobCommandInput,
  type StopIngestionJobCommandOutput,
  StopIngestionJobCommand,
} from "./commands/StopIngestionJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAgentActionGroupCommandInput,
  type UpdateAgentActionGroupCommandOutput,
  UpdateAgentActionGroupCommand,
} from "./commands/UpdateAgentActionGroupCommand";
import {
  type UpdateAgentAliasCommandInput,
  type UpdateAgentAliasCommandOutput,
  UpdateAgentAliasCommand,
} from "./commands/UpdateAgentAliasCommand";
import {
  type UpdateAgentCollaboratorCommandInput,
  type UpdateAgentCollaboratorCommandOutput,
  UpdateAgentCollaboratorCommand,
} from "./commands/UpdateAgentCollaboratorCommand";
import {
  type UpdateAgentCommandInput,
  type UpdateAgentCommandOutput,
  UpdateAgentCommand,
} from "./commands/UpdateAgentCommand";
import {
  type UpdateAgentKnowledgeBaseCommandInput,
  type UpdateAgentKnowledgeBaseCommandOutput,
  UpdateAgentKnowledgeBaseCommand,
} from "./commands/UpdateAgentKnowledgeBaseCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateFlowAliasCommandInput,
  type UpdateFlowAliasCommandOutput,
  UpdateFlowAliasCommand,
} from "./commands/UpdateFlowAliasCommand";
import {
  type UpdateFlowCommandInput,
  type UpdateFlowCommandOutput,
  UpdateFlowCommand,
} from "./commands/UpdateFlowCommand";
import {
  type UpdateKnowledgeBaseCommandInput,
  type UpdateKnowledgeBaseCommandOutput,
  UpdateKnowledgeBaseCommand,
} from "./commands/UpdateKnowledgeBaseCommand";
import {
  type UpdatePromptCommandInput,
  type UpdatePromptCommandOutput,
  UpdatePromptCommand,
} from "./commands/UpdatePromptCommand";
import {
  type ValidateFlowDefinitionCommandInput,
  type ValidateFlowDefinitionCommandOutput,
  ValidateFlowDefinitionCommand,
} from "./commands/ValidateFlowDefinitionCommand";
import { paginateListAgentActionGroups } from "./pagination/ListAgentActionGroupsPaginator";
import { paginateListAgentAliases } from "./pagination/ListAgentAliasesPaginator";
import { paginateListAgentCollaborators } from "./pagination/ListAgentCollaboratorsPaginator";
import { paginateListAgentKnowledgeBases } from "./pagination/ListAgentKnowledgeBasesPaginator";
import { paginateListAgents } from "./pagination/ListAgentsPaginator";
import { paginateListAgentVersions } from "./pagination/ListAgentVersionsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListFlowAliases } from "./pagination/ListFlowAliasesPaginator";
import { paginateListFlows } from "./pagination/ListFlowsPaginator";
import { paginateListFlowVersions } from "./pagination/ListFlowVersionsPaginator";
import { paginateListIngestionJobs } from "./pagination/ListIngestionJobsPaginator";
import { paginateListKnowledgeBaseDocuments } from "./pagination/ListKnowledgeBaseDocumentsPaginator";
import { paginateListKnowledgeBases } from "./pagination/ListKnowledgeBasesPaginator";
import { paginateListPrompts } from "./pagination/ListPromptsPaginator";

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
const paginators = {
  paginateListAgentActionGroups,
  paginateListAgentAliases,
  paginateListAgentCollaborators,
  paginateListAgentKnowledgeBases,
  paginateListAgents,
  paginateListAgentVersions,
  paginateListDataSources,
  paginateListFlowAliases,
  paginateListFlows,
  paginateListFlowVersions,
  paginateListIngestionJobs,
  paginateListKnowledgeBaseDocuments,
  paginateListKnowledgeBases,
  paginateListPrompts,
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
  createAgent(
    args: CreateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentCommandOutput>;
  createAgent(
    args: CreateAgentCommandInput,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
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
  createFlow(
    args: CreateFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowCommandOutput>;
  createFlow(
    args: CreateFlowCommandInput,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
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
  createFlowAlias(
    args: CreateFlowAliasCommandInput,
    cb: (err: any, data?: CreateFlowAliasCommandOutput) => void
  ): void;
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
  createPrompt(
    args: CreatePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePromptCommandOutput>;
  createPrompt(
    args: CreatePromptCommandInput,
    cb: (err: any, data?: CreatePromptCommandOutput) => void
  ): void;
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
  deleteAgent(
    args: DeleteAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentCommandOutput>;
  deleteAgent(
    args: DeleteAgentCommandInput,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
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
  deleteFlow(
    args: DeleteFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowCommandOutput>;
  deleteFlow(
    args: DeleteFlowCommandInput,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
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
  deleteFlowAlias(
    args: DeleteFlowAliasCommandInput,
    cb: (err: any, data?: DeleteFlowAliasCommandOutput) => void
  ): void;
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
  deletePrompt(
    args: DeletePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePromptCommandOutput>;
  deletePrompt(
    args: DeletePromptCommandInput,
    cb: (err: any, data?: DeletePromptCommandOutput) => void
  ): void;
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
  getAgent(
    args: GetAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentCommandOutput>;
  getAgent(
    args: GetAgentCommandInput,
    cb: (err: any, data?: GetAgentCommandOutput) => void
  ): void;
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
  getAgentAlias(
    args: GetAgentAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentAliasCommandOutput>;
  getAgentAlias(
    args: GetAgentAliasCommandInput,
    cb: (err: any, data?: GetAgentAliasCommandOutput) => void
  ): void;
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
  getAgentVersion(
    args: GetAgentVersionCommandInput,
    cb: (err: any, data?: GetAgentVersionCommandOutput) => void
  ): void;
  getAgentVersion(
    args: GetAgentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceCommandOutput>;
  getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowCommand}
   */
  getFlow(
    args: GetFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowCommandOutput>;
  getFlow(
    args: GetFlowCommandInput,
    cb: (err: any, data?: GetFlowCommandOutput) => void
  ): void;
  getFlow(
    args: GetFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowAliasCommand}
   */
  getFlowAlias(
    args: GetFlowAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowAliasCommandOutput>;
  getFlowAlias(
    args: GetFlowAliasCommandInput,
    cb: (err: any, data?: GetFlowAliasCommandOutput) => void
  ): void;
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
  getFlowVersion(
    args: GetFlowVersionCommandInput,
    cb: (err: any, data?: GetFlowVersionCommandOutput) => void
  ): void;
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
  getIngestionJob(
    args: GetIngestionJobCommandInput,
    cb: (err: any, data?: GetIngestionJobCommandOutput) => void
  ): void;
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
  getPrompt(
    args: GetPromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPromptCommandOutput>;
  getPrompt(
    args: GetPromptCommandInput,
    cb: (err: any, data?: GetPromptCommandOutput) => void
  ): void;
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
  listAgents(
    args: ListAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentsCommandOutput>;
  listAgents(
    args: ListAgentsCommandInput,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
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
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
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
  listFlowAliases(
    args: ListFlowAliasesCommandInput,
    cb: (err: any, data?: ListFlowAliasesCommandOutput) => void
  ): void;
  listFlowAliases(
    args: ListFlowAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowsCommand}
   */
  listFlows(): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowsCommandOutput>;
  listFlows(
    args: ListFlowsCommandInput,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
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
  listPrompts(
    args: ListPromptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPromptsCommandOutput>;
  listPrompts(
    args: ListPromptsCommandInput,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
  ): void;
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
  prepareAgent(
    args: PrepareAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PrepareAgentCommandOutput>;
  prepareAgent(
    args: PrepareAgentCommandInput,
    cb: (err: any, data?: PrepareAgentCommandOutput) => void
  ): void;
  prepareAgent(
    args: PrepareAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link PrepareFlowCommand}
   */
  prepareFlow(
    args: PrepareFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PrepareFlowCommandOutput>;
  prepareFlow(
    args: PrepareFlowCommandInput,
    cb: (err: any, data?: PrepareFlowCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(
    args: UpdateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentCommandOutput>;
  updateAgent(
    args: UpdateAgentCommandInput,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
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
  updateFlow(
    args: UpdateFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowCommandOutput>;
  updateFlow(
    args: UpdateFlowCommandInput,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
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
  updateFlowAlias(
    args: UpdateFlowAliasCommandInput,
    cb: (err: any, data?: UpdateFlowAliasCommandOutput) => void
  ): void;
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
  updatePrompt(
    args: UpdatePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePromptCommandOutput>;
  updatePrompt(
    args: UpdatePromptCommandInput,
    cb: (err: any, data?: UpdatePromptCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListAgentActionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentActionGroupsCommandOutput}.
   */
  paginateListAgentActionGroups(
    args: ListAgentActionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentActionGroupsCommandOutput>;

  /**
   * @see {@link ListAgentAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentAliasesCommandOutput}.
   */
  paginateListAgentAliases(
    args: ListAgentAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentAliasesCommandOutput>;

  /**
   * @see {@link ListAgentCollaboratorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentCollaboratorsCommandOutput}.
   */
  paginateListAgentCollaborators(
    args: ListAgentCollaboratorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentCollaboratorsCommandOutput>;

  /**
   * @see {@link ListAgentKnowledgeBasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentKnowledgeBasesCommandOutput}.
   */
  paginateListAgentKnowledgeBases(
    args: ListAgentKnowledgeBasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentKnowledgeBasesCommandOutput>;

  /**
   * @see {@link ListAgentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentsCommandOutput}.
   */
  paginateListAgents(
    args?: ListAgentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentsCommandOutput>;

  /**
   * @see {@link ListAgentVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentVersionsCommandOutput}.
   */
  paginateListAgentVersions(
    args: ListAgentVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentVersionsCommandOutput>;

  /**
   * @see {@link ListDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourcesCommandOutput}.
   */
  paginateListDataSources(
    args: ListDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourcesCommandOutput>;

  /**
   * @see {@link ListFlowAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowAliasesCommandOutput}.
   */
  paginateListFlowAliases(
    args: ListFlowAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowAliasesCommandOutput>;

  /**
   * @see {@link ListFlowsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowsCommandOutput}.
   */
  paginateListFlows(
    args?: ListFlowsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowsCommandOutput>;

  /**
   * @see {@link ListFlowVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowVersionsCommandOutput}.
   */
  paginateListFlowVersions(
    args: ListFlowVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowVersionsCommandOutput>;

  /**
   * @see {@link ListIngestionJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIngestionJobsCommandOutput}.
   */
  paginateListIngestionJobs(
    args: ListIngestionJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIngestionJobsCommandOutput>;

  /**
   * @see {@link ListKnowledgeBaseDocumentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKnowledgeBaseDocumentsCommandOutput}.
   */
  paginateListKnowledgeBaseDocuments(
    args: ListKnowledgeBaseDocumentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKnowledgeBaseDocumentsCommandOutput>;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKnowledgeBasesCommandOutput}.
   */
  paginateListKnowledgeBases(
    args?: ListKnowledgeBasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKnowledgeBasesCommandOutput>;

  /**
   * @see {@link ListPromptsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPromptsCommandOutput}.
   */
  paginateListPrompts(
    args?: ListPromptsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPromptsCommandOutput>;
}

/**
 * <p>Describes the API operations for creating and managing Amazon Bedrock agents.</p>
 * @public
 */
export class BedrockAgent extends BedrockAgentClient implements BedrockAgent {}
createAggregatedClient(commands, BedrockAgent, { paginators });
