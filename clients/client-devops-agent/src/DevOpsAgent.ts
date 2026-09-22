// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateServiceCommandInput,
  type AssociateServiceCommandOutput,
  AssociateServiceCommand,
} from "./commands/AssociateServiceCommand";
import {
  type CreateAgentSpaceCommandInput,
  type CreateAgentSpaceCommandOutput,
  CreateAgentSpaceCommand,
} from "./commands/CreateAgentSpaceCommand";
import {
  type CreateAssetCommandInput,
  type CreateAssetCommandOutput,
  CreateAssetCommand,
} from "./commands/CreateAssetCommand";
import {
  type CreateAssetFileCommandInput,
  type CreateAssetFileCommandOutput,
  CreateAssetFileCommand,
} from "./commands/CreateAssetFileCommand";
import {
  type CreateBacklogTaskCommandInput,
  type CreateBacklogTaskCommandOutput,
  CreateBacklogTaskCommand,
} from "./commands/CreateBacklogTaskCommand";
import {
  type CreateChatCommandInput,
  type CreateChatCommandOutput,
  CreateChatCommand,
} from "./commands/CreateChatCommand";
import {
  type CreatePrivateConnectionCommandInput,
  type CreatePrivateConnectionCommandOutput,
  CreatePrivateConnectionCommand,
} from "./commands/CreatePrivateConnectionCommand";
import {
  type CreateTriggerCommandInput,
  type CreateTriggerCommandOutput,
  CreateTriggerCommand,
} from "./commands/CreateTriggerCommand";
import {
  type DeleteAgentSpaceCommandInput,
  type DeleteAgentSpaceCommandOutput,
  DeleteAgentSpaceCommand,
} from "./commands/DeleteAgentSpaceCommand";
import {
  type DeleteAssetCommandInput,
  type DeleteAssetCommandOutput,
  DeleteAssetCommand,
} from "./commands/DeleteAssetCommand";
import {
  type DeleteAssetFileCommandInput,
  type DeleteAssetFileCommandOutput,
  DeleteAssetFileCommand,
} from "./commands/DeleteAssetFileCommand";
import {
  type DeletePrivateConnectionCommandInput,
  type DeletePrivateConnectionCommandOutput,
  DeletePrivateConnectionCommand,
} from "./commands/DeletePrivateConnectionCommand";
import {
  type DeleteTriggerCommandInput,
  type DeleteTriggerCommandOutput,
  DeleteTriggerCommand,
} from "./commands/DeleteTriggerCommand";
import {
  type DeregisterServiceCommandInput,
  type DeregisterServiceCommandOutput,
  DeregisterServiceCommand,
} from "./commands/DeregisterServiceCommand";
import {
  type DescribePrivateConnectionCommandInput,
  type DescribePrivateConnectionCommandOutput,
  DescribePrivateConnectionCommand,
} from "./commands/DescribePrivateConnectionCommand";
import {
  type DisableOperatorAppCommandInput,
  type DisableOperatorAppCommandOutput,
  DisableOperatorAppCommand,
} from "./commands/DisableOperatorAppCommand";
import {
  type DisassociateServiceCommandInput,
  type DisassociateServiceCommandOutput,
  DisassociateServiceCommand,
} from "./commands/DisassociateServiceCommand";
import {
  type EnableOperatorAppCommandInput,
  type EnableOperatorAppCommandOutput,
  EnableOperatorAppCommand,
} from "./commands/EnableOperatorAppCommand";
import {
  type GetAccountUsageCommandInput,
  type GetAccountUsageCommandOutput,
  GetAccountUsageCommand,
} from "./commands/GetAccountUsageCommand";
import {
  type GetAgentSpaceCommandInput,
  type GetAgentSpaceCommandOutput,
  GetAgentSpaceCommand,
} from "./commands/GetAgentSpaceCommand";
import { type GetAssetCommandInput, type GetAssetCommandOutput, GetAssetCommand } from "./commands/GetAssetCommand";
import {
  type GetAssetContentCommandInput,
  type GetAssetContentCommandOutput,
  GetAssetContentCommand,
} from "./commands/GetAssetContentCommand";
import {
  type GetAssetFileCommandInput,
  type GetAssetFileCommandOutput,
  GetAssetFileCommand,
} from "./commands/GetAssetFileCommand";
import {
  type GetAssociationCommandInput,
  type GetAssociationCommandOutput,
  GetAssociationCommand,
} from "./commands/GetAssociationCommand";
import {
  type GetBacklogTaskCommandInput,
  type GetBacklogTaskCommandOutput,
  GetBacklogTaskCommand,
} from "./commands/GetBacklogTaskCommand";
import {
  type GetOperatorAppCommandInput,
  type GetOperatorAppCommandOutput,
  GetOperatorAppCommand,
} from "./commands/GetOperatorAppCommand";
import {
  type GetRecommendationCommandInput,
  type GetRecommendationCommandOutput,
  GetRecommendationCommand,
} from "./commands/GetRecommendationCommand";
import {
  type GetServiceCommandInput,
  type GetServiceCommandOutput,
  GetServiceCommand,
} from "./commands/GetServiceCommand";
import {
  type GetTriggerCommandInput,
  type GetTriggerCommandOutput,
  GetTriggerCommand,
} from "./commands/GetTriggerCommand";
import {
  type ListAgentSpacesCommandInput,
  type ListAgentSpacesCommandOutput,
  ListAgentSpacesCommand,
} from "./commands/ListAgentSpacesCommand";
import {
  type ListAssetFilesCommandInput,
  type ListAssetFilesCommandOutput,
  ListAssetFilesCommand,
} from "./commands/ListAssetFilesCommand";
import {
  type ListAssetsCommandInput,
  type ListAssetsCommandOutput,
  ListAssetsCommand,
} from "./commands/ListAssetsCommand";
import {
  type ListAssetTypesCommandInput,
  type ListAssetTypesCommandOutput,
  ListAssetTypesCommand,
} from "./commands/ListAssetTypesCommand";
import {
  type ListAssetVersionsCommandInput,
  type ListAssetVersionsCommandOutput,
  ListAssetVersionsCommand,
} from "./commands/ListAssetVersionsCommand";
import {
  type ListAssociationsCommandInput,
  type ListAssociationsCommandOutput,
  ListAssociationsCommand,
} from "./commands/ListAssociationsCommand";
import {
  type ListBacklogTasksCommandInput,
  type ListBacklogTasksCommandOutput,
  ListBacklogTasksCommand,
} from "./commands/ListBacklogTasksCommand";
import { type ListChatsCommandInput, type ListChatsCommandOutput, ListChatsCommand } from "./commands/ListChatsCommand";
import {
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListExecutionsCommand,
} from "./commands/ListExecutionsCommand";
import { type ListGoalsCommandInput, type ListGoalsCommandOutput, ListGoalsCommand } from "./commands/ListGoalsCommand";
import {
  type ListJournalRecordsCommandInput,
  type ListJournalRecordsCommandOutput,
  ListJournalRecordsCommand,
} from "./commands/ListJournalRecordsCommand";
import {
  type ListPendingMessagesCommandInput,
  type ListPendingMessagesCommandOutput,
  ListPendingMessagesCommand,
} from "./commands/ListPendingMessagesCommand";
import {
  type ListPrivateConnectionsCommandInput,
  type ListPrivateConnectionsCommandOutput,
  ListPrivateConnectionsCommand,
} from "./commands/ListPrivateConnectionsCommand";
import {
  type ListRecommendationsCommandInput,
  type ListRecommendationsCommandOutput,
  ListRecommendationsCommand,
} from "./commands/ListRecommendationsCommand";
import {
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListServicesCommand,
} from "./commands/ListServicesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTriggersCommandInput,
  type ListTriggersCommandOutput,
  ListTriggersCommand,
} from "./commands/ListTriggersCommand";
import {
  type ListWebhooksCommandInput,
  type ListWebhooksCommandOutput,
  ListWebhooksCommand,
} from "./commands/ListWebhooksCommand";
import {
  type RegisterServiceCommandInput,
  type RegisterServiceCommandOutput,
  RegisterServiceCommand,
} from "./commands/RegisterServiceCommand";
import {
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
  SendMessageCommand,
} from "./commands/SendMessageCommand";
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
  type UpdateAgentSpaceCommandInput,
  type UpdateAgentSpaceCommandOutput,
  UpdateAgentSpaceCommand,
} from "./commands/UpdateAgentSpaceCommand";
import {
  type UpdateApprovalActionCommandInput,
  type UpdateApprovalActionCommandOutput,
  UpdateApprovalActionCommand,
} from "./commands/UpdateApprovalActionCommand";
import {
  type UpdateAssetCommandInput,
  type UpdateAssetCommandOutput,
  UpdateAssetCommand,
} from "./commands/UpdateAssetCommand";
import {
  type UpdateAssetFileCommandInput,
  type UpdateAssetFileCommandOutput,
  UpdateAssetFileCommand,
} from "./commands/UpdateAssetFileCommand";
import {
  type UpdateAssociationCommandInput,
  type UpdateAssociationCommandOutput,
  UpdateAssociationCommand,
} from "./commands/UpdateAssociationCommand";
import {
  type UpdateBacklogTaskCommandInput,
  type UpdateBacklogTaskCommandOutput,
  UpdateBacklogTaskCommand,
} from "./commands/UpdateBacklogTaskCommand";
import {
  type UpdateGoalCommandInput,
  type UpdateGoalCommandOutput,
  UpdateGoalCommand,
} from "./commands/UpdateGoalCommand";
import {
  type UpdateOperatorAppIdpConfigCommandInput,
  type UpdateOperatorAppIdpConfigCommandOutput,
  UpdateOperatorAppIdpConfigCommand,
} from "./commands/UpdateOperatorAppIdpConfigCommand";
import {
  type UpdatePrivateConnectionCertificateCommandInput,
  type UpdatePrivateConnectionCertificateCommandOutput,
  UpdatePrivateConnectionCertificateCommand,
} from "./commands/UpdatePrivateConnectionCertificateCommand";
import {
  type UpdateRecommendationCommandInput,
  type UpdateRecommendationCommandOutput,
  UpdateRecommendationCommand,
} from "./commands/UpdateRecommendationCommand";
import {
  type UpdateTriggerCommandInput,
  type UpdateTriggerCommandOutput,
  UpdateTriggerCommand,
} from "./commands/UpdateTriggerCommand";
import {
  type ValidateAwsAssociationsCommandInput,
  type ValidateAwsAssociationsCommandOutput,
  ValidateAwsAssociationsCommand,
} from "./commands/ValidateAwsAssociationsCommand";
import { DevOpsAgentClient } from "./DevOpsAgentClient";
import { paginateListAgentSpaces } from "./pagination/ListAgentSpacesPaginator";
import { paginateListAssetFiles } from "./pagination/ListAssetFilesPaginator";
import { paginateListAssets } from "./pagination/ListAssetsPaginator";
import { paginateListAssetTypes } from "./pagination/ListAssetTypesPaginator";
import { paginateListAssetVersions } from "./pagination/ListAssetVersionsPaginator";
import { paginateListAssociations } from "./pagination/ListAssociationsPaginator";
import { paginateListBacklogTasks } from "./pagination/ListBacklogTasksPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListGoals } from "./pagination/ListGoalsPaginator";
import { paginateListJournalRecords } from "./pagination/ListJournalRecordsPaginator";
import { paginateListServices } from "./pagination/ListServicesPaginator";
import { paginateListTriggers } from "./pagination/ListTriggersPaginator";

const commands = {
  AssociateServiceCommand,
  CreateAgentSpaceCommand,
  CreateAssetCommand,
  CreateAssetFileCommand,
  CreateBacklogTaskCommand,
  CreateChatCommand,
  CreatePrivateConnectionCommand,
  CreateTriggerCommand,
  DeleteAgentSpaceCommand,
  DeleteAssetCommand,
  DeleteAssetFileCommand,
  DeletePrivateConnectionCommand,
  DeleteTriggerCommand,
  DeregisterServiceCommand,
  DescribePrivateConnectionCommand,
  DisableOperatorAppCommand,
  DisassociateServiceCommand,
  EnableOperatorAppCommand,
  GetAccountUsageCommand,
  GetAgentSpaceCommand,
  GetAssetCommand,
  GetAssetContentCommand,
  GetAssetFileCommand,
  GetAssociationCommand,
  GetBacklogTaskCommand,
  GetOperatorAppCommand,
  GetRecommendationCommand,
  GetServiceCommand,
  GetTriggerCommand,
  ListAgentSpacesCommand,
  ListAssetFilesCommand,
  ListAssetsCommand,
  ListAssetTypesCommand,
  ListAssetVersionsCommand,
  ListAssociationsCommand,
  ListBacklogTasksCommand,
  ListChatsCommand,
  ListExecutionsCommand,
  ListGoalsCommand,
  ListJournalRecordsCommand,
  ListPendingMessagesCommand,
  ListPrivateConnectionsCommand,
  ListRecommendationsCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  ListTriggersCommand,
  ListWebhooksCommand,
  RegisterServiceCommand,
  SendMessageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentSpaceCommand,
  UpdateApprovalActionCommand,
  UpdateAssetCommand,
  UpdateAssetFileCommand,
  UpdateAssociationCommand,
  UpdateBacklogTaskCommand,
  UpdateGoalCommand,
  UpdateOperatorAppIdpConfigCommand,
  UpdatePrivateConnectionCertificateCommand,
  UpdateRecommendationCommand,
  UpdateTriggerCommand,
  ValidateAwsAssociationsCommand,
};
const paginators = {
  paginateListAgentSpaces,
  paginateListAssetFiles,
  paginateListAssets,
  paginateListAssetTypes,
  paginateListAssetVersions,
  paginateListAssociations,
  paginateListBacklogTasks,
  paginateListExecutions,
  paginateListGoals,
  paginateListJournalRecords,
  paginateListServices,
  paginateListTriggers,
};

/**
 * @public
 */
export interface DevOpsAgentRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface DevOpsAgent {
  /**
   * @see {@link AssociateServiceCommand}
   */
  associateService(
    args: AssociateServiceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<AssociateServiceCommandOutput>;
  associateService(
    args: AssociateServiceCommandInput,
    cb: (err: any, data?: AssociateServiceCommandOutput) => void
  ): void;
  associateService(
    args: AssociateServiceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: AssociateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentSpaceCommand}
   */
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateAgentSpaceCommandOutput>;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetCommand}
   */
  createAsset(
    args: CreateAssetCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateAssetCommandOutput>;
  createAsset(
    args: CreateAssetCommandInput,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
  createAsset(
    args: CreateAssetCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetFileCommand}
   */
  createAssetFile(
    args: CreateAssetFileCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateAssetFileCommandOutput>;
  createAssetFile(
    args: CreateAssetFileCommandInput,
    cb: (err: any, data?: CreateAssetFileCommandOutput) => void
  ): void;
  createAssetFile(
    args: CreateAssetFileCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateAssetFileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBacklogTaskCommand}
   */
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateBacklogTaskCommandOutput>;
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    cb: (err: any, data?: CreateBacklogTaskCommandOutput) => void
  ): void;
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChatCommand}
   */
  createChat(
    args: CreateChatCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateChatCommandOutput>;
  createChat(
    args: CreateChatCommandInput,
    cb: (err: any, data?: CreateChatCommandOutput) => void
  ): void;
  createChat(
    args: CreateChatCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateChatCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateConnectionCommand}
   */
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreatePrivateConnectionCommandOutput>;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTriggerCommand}
   */
  createTrigger(
    args: CreateTriggerCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<CreateTriggerCommandOutput>;
  createTrigger(
    args: CreateTriggerCommandInput,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;
  createTrigger(
    args: CreateTriggerCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: CreateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentSpaceCommand}
   */
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeleteAgentSpaceCommandOutput>;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetFileCommand}
   */
  deleteAssetFile(
    args: DeleteAssetFileCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeleteAssetFileCommandOutput>;
  deleteAssetFile(
    args: DeleteAssetFileCommandInput,
    cb: (err: any, data?: DeleteAssetFileCommandOutput) => void
  ): void;
  deleteAssetFile(
    args: DeleteAssetFileCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeleteAssetFileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrivateConnectionCommand}
   */
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeletePrivateConnectionCommandOutput>;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTriggerCommand}
   */
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeleteTriggerCommandOutput>;
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeleteTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterServiceCommand}
   */
  deregisterService(
    args: DeregisterServiceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DeregisterServiceCommandOutput>;
  deregisterService(
    args: DeregisterServiceCommandInput,
    cb: (err: any, data?: DeregisterServiceCommandOutput) => void
  ): void;
  deregisterService(
    args: DeregisterServiceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DeregisterServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrivateConnectionCommand}
   */
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DescribePrivateConnectionCommandOutput>;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOperatorAppCommand}
   */
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DisableOperatorAppCommandOutput>;
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    cb: (err: any, data?: DisableOperatorAppCommandOutput) => void
  ): void;
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DisableOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceCommand}
   */
  disassociateService(
    args: DisassociateServiceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<DisassociateServiceCommandOutput>;
  disassociateService(
    args: DisassociateServiceCommandInput,
    cb: (err: any, data?: DisassociateServiceCommandOutput) => void
  ): void;
  disassociateService(
    args: DisassociateServiceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: DisassociateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOperatorAppCommand}
   */
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<EnableOperatorAppCommandOutput>;
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    cb: (err: any, data?: EnableOperatorAppCommandOutput) => void
  ): void;
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: EnableOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountUsageCommand}
   */
  getAccountUsage(): Promise<GetAccountUsageCommandOutput>;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAccountUsageCommandOutput>;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    cb: (err: any, data?: GetAccountUsageCommandOutput) => void
  ): void;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAccountUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentSpaceCommand}
   */
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAgentSpaceCommandOutput>;
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    cb: (err: any, data?: GetAgentSpaceCommandOutput) => void
  ): void;
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetCommand}
   */
  getAsset(
    args: GetAssetCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAssetCommandOutput>;
  getAsset(
    args: GetAssetCommandInput,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;
  getAsset(
    args: GetAssetCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetContentCommand}
   */
  getAssetContent(
    args: GetAssetContentCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAssetContentCommandOutput>;
  getAssetContent(
    args: GetAssetContentCommandInput,
    cb: (err: any, data?: GetAssetContentCommandOutput) => void
  ): void;
  getAssetContent(
    args: GetAssetContentCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAssetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetFileCommand}
   */
  getAssetFile(
    args: GetAssetFileCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAssetFileCommandOutput>;
  getAssetFile(
    args: GetAssetFileCommandInput,
    cb: (err: any, data?: GetAssetFileCommandOutput) => void
  ): void;
  getAssetFile(
    args: GetAssetFileCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAssetFileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociationCommand}
   */
  getAssociation(
    args: GetAssociationCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetAssociationCommandOutput>;
  getAssociation(
    args: GetAssociationCommandInput,
    cb: (err: any, data?: GetAssociationCommandOutput) => void
  ): void;
  getAssociation(
    args: GetAssociationCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBacklogTaskCommand}
   */
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetBacklogTaskCommandOutput>;
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    cb: (err: any, data?: GetBacklogTaskCommandOutput) => void
  ): void;
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperatorAppCommand}
   */
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetOperatorAppCommandOutput>;
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    cb: (err: any, data?: GetOperatorAppCommandOutput) => void
  ): void;
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetRecommendationCommandOutput>;
  getRecommendation(
    args: GetRecommendationCommandInput,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;
  getRecommendation(
    args: GetRecommendationCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(
    args: GetServiceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetServiceCommandOutput>;
  getService(
    args: GetServiceCommandInput,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  getService(
    args: GetServiceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTriggerCommand}
   */
  getTrigger(
    args: GetTriggerCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<GetTriggerCommandOutput>;
  getTrigger(
    args: GetTriggerCommandInput,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;
  getTrigger(
    args: GetTriggerCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: GetTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   */
  listAgentSpaces(): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetFilesCommand}
   */
  listAssetFiles(
    args: ListAssetFilesCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAssetFilesCommandOutput>;
  listAssetFiles(
    args: ListAssetFilesCommandInput,
    cb: (err: any, data?: ListAssetFilesCommandOutput) => void
  ): void;
  listAssetFiles(
    args: ListAssetFilesCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAssetFilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetsCommand}
   */
  listAssets(
    args: ListAssetsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAssetsCommandOutput>;
  listAssets(
    args: ListAssetsCommandInput,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  listAssets(
    args: ListAssetsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetTypesCommand}
   */
  listAssetTypes(): Promise<ListAssetTypesCommandOutput>;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAssetTypesCommandOutput>;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    cb: (err: any, data?: ListAssetTypesCommandOutput) => void
  ): void;
  listAssetTypes(
    args: ListAssetTypesCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAssetTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetVersionsCommand}
   */
  listAssetVersions(
    args: ListAssetVersionsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAssetVersionsCommandOutput>;
  listAssetVersions(
    args: ListAssetVersionsCommandInput,
    cb: (err: any, data?: ListAssetVersionsCommandOutput) => void
  ): void;
  listAssetVersions(
    args: ListAssetVersionsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAssetVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBacklogTasksCommand}
   */
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListBacklogTasksCommandOutput>;
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    cb: (err: any, data?: ListBacklogTasksCommandOutput) => void
  ): void;
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListBacklogTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChatsCommand}
   */
  listChats(
    args: ListChatsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListChatsCommandOutput>;
  listChats(
    args: ListChatsCommandInput,
    cb: (err: any, data?: ListChatsCommandOutput) => void
  ): void;
  listChats(
    args: ListChatsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListChatsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGoalsCommand}
   */
  listGoals(
    args: ListGoalsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListGoalsCommandOutput>;
  listGoals(
    args: ListGoalsCommandInput,
    cb: (err: any, data?: ListGoalsCommandOutput) => void
  ): void;
  listGoals(
    args: ListGoalsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListGoalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJournalRecordsCommand}
   */
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListJournalRecordsCommandOutput>;
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    cb: (err: any, data?: ListJournalRecordsCommandOutput) => void
  ): void;
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListJournalRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPendingMessagesCommand}
   */
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListPendingMessagesCommandOutput>;
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    cb: (err: any, data?: ListPendingMessagesCommandOutput) => void
  ): void;
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListPendingMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivateConnectionsCommand}
   */
  listPrivateConnections(): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTriggersCommand}
   */
  listTriggers(
    args: ListTriggersCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListTriggersCommandOutput>;
  listTriggers(
    args: ListTriggersCommandInput,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;
  listTriggers(
    args: ListTriggersCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebhooksCommand}
   */
  listWebhooks(
    args: ListWebhooksCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ListWebhooksCommandOutput>;
  listWebhooks(
    args: ListWebhooksCommandInput,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterServiceCommand}
   */
  registerService(
    args: RegisterServiceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<RegisterServiceCommandOutput>;
  registerService(
    args: RegisterServiceCommandInput,
    cb: (err: any, data?: RegisterServiceCommandOutput) => void
  ): void;
  registerService(
    args: RegisterServiceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: RegisterServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<SendMessageCommandOutput>;
  sendMessage(
    args: SendMessageCommandInput,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentSpaceCommand}
   */
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateAgentSpaceCommandOutput>;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApprovalActionCommand}
   */
  updateApprovalAction(
    args: UpdateApprovalActionCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateApprovalActionCommandOutput>;
  updateApprovalAction(
    args: UpdateApprovalActionCommandInput,
    cb: (err: any, data?: UpdateApprovalActionCommandOutput) => void
  ): void;
  updateApprovalAction(
    args: UpdateApprovalActionCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateApprovalActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetCommand}
   */
  updateAsset(
    args: UpdateAssetCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateAssetCommandOutput>;
  updateAsset(
    args: UpdateAssetCommandInput,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
  updateAsset(
    args: UpdateAssetCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetFileCommand}
   */
  updateAssetFile(
    args: UpdateAssetFileCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateAssetFileCommandOutput>;
  updateAssetFile(
    args: UpdateAssetFileCommandInput,
    cb: (err: any, data?: UpdateAssetFileCommandOutput) => void
  ): void;
  updateAssetFile(
    args: UpdateAssetFileCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateAssetFileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssociationCommand}
   */
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateAssociationCommandOutput>;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBacklogTaskCommand}
   */
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateBacklogTaskCommandOutput>;
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    cb: (err: any, data?: UpdateBacklogTaskCommandOutput) => void
  ): void;
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGoalCommand}
   */
  updateGoal(
    args: UpdateGoalCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateGoalCommandOutput>;
  updateGoal(
    args: UpdateGoalCommandInput,
    cb: (err: any, data?: UpdateGoalCommandOutput) => void
  ): void;
  updateGoal(
    args: UpdateGoalCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOperatorAppIdpConfigCommand}
   */
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateOperatorAppIdpConfigCommandOutput>;
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    cb: (err: any, data?: UpdateOperatorAppIdpConfigCommandOutput) => void
  ): void;
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateOperatorAppIdpConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrivateConnectionCertificateCommand}
   */
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdatePrivateConnectionCertificateCommandOutput>;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommendationCommand}
   */
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateRecommendationCommandOutput>;
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    cb: (err: any, data?: UpdateRecommendationCommandOutput) => void
  ): void;
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTriggerCommand}
   */
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<UpdateTriggerCommandOutput>;
  updateTrigger(
    args: UpdateTriggerCommandInput,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: UpdateTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateAwsAssociationsCommand}
   */
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    options?: DevOpsAgentRequestOptions
  ): Promise<ValidateAwsAssociationsCommandOutput>;
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    cb: (err: any, data?: ValidateAwsAssociationsCommandOutput) => void
  ): void;
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    options: DevOpsAgentRequestOptions,
    cb: (err: any, data?: ValidateAwsAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentSpacesCommandOutput}.
   */
  paginateListAgentSpaces(
    args?: ListAgentSpacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentSpacesCommandOutput>;

  /**
   * @see {@link ListAssetFilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetFilesCommandOutput}.
   */
  paginateListAssetFiles(
    args: ListAssetFilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetFilesCommandOutput>;

  /**
   * @see {@link ListAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetsCommandOutput}.
   */
  paginateListAssets(
    args: ListAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetsCommandOutput>;

  /**
   * @see {@link ListAssetTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetTypesCommandOutput}.
   */
  paginateListAssetTypes(
    args?: ListAssetTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetTypesCommandOutput>;

  /**
   * @see {@link ListAssetVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetVersionsCommandOutput}.
   */
  paginateListAssetVersions(
    args: ListAssetVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetVersionsCommandOutput>;

  /**
   * @see {@link ListAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociationsCommandOutput}.
   */
  paginateListAssociations(
    args: ListAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociationsCommandOutput>;

  /**
   * @see {@link ListBacklogTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBacklogTasksCommandOutput}.
   */
  paginateListBacklogTasks(
    args: ListBacklogTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBacklogTasksCommandOutput>;

  /**
   * @see {@link ListExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutionsCommandOutput}.
   */
  paginateListExecutions(
    args: ListExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutionsCommandOutput>;

  /**
   * @see {@link ListGoalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGoalsCommandOutput}.
   */
  paginateListGoals(
    args: ListGoalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGoalsCommandOutput>;

  /**
   * @see {@link ListJournalRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJournalRecordsCommandOutput}.
   */
  paginateListJournalRecords(
    args: ListJournalRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJournalRecordsCommandOutput>;

  /**
   * @see {@link ListServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServicesCommandOutput}.
   */
  paginateListServices(
    args?: ListServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServicesCommandOutput>;

  /**
   * @see {@link ListTriggersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTriggersCommandOutput}.
   */
  paginateListTriggers(
    args: ListTriggersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTriggersCommandOutput>;
}

/**
 * <p>AWS DevOps Agent is your always-available operations teammate. It resolves and proactively prevents incidents, optimizes application reliability and performance, and handles on-demand SRE tasks across AWS, multicloud, and on-premises environments. AWS DevOps Agent investigates incidents as an experienced DevOps engineer would. It learns your applications and their relationships. It works with your observability tools, runbooks, code repositories, and CI/CD pipelines. The agent correlates telemetry, code, and deployment data across all of them.</p>
 * @public
 */
export class DevOpsAgent extends DevOpsAgentClient implements DevOpsAgent {}
createAggregatedClient(commands, DevOpsAgent, { paginators });
