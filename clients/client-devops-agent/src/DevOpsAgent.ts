// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

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
  type DeleteAgentSpaceCommandInput,
  type DeleteAgentSpaceCommandOutput,
  DeleteAgentSpaceCommand,
} from "./commands/DeleteAgentSpaceCommand";
import {
  type DeletePrivateConnectionCommandInput,
  type DeletePrivateConnectionCommandOutput,
  DeletePrivateConnectionCommand,
} from "./commands/DeletePrivateConnectionCommand";
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
  type ListAgentSpacesCommandInput,
  type ListAgentSpacesCommandOutput,
  ListAgentSpacesCommand,
} from "./commands/ListAgentSpacesCommand";
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
  type ValidateAwsAssociationsCommandInput,
  type ValidateAwsAssociationsCommandOutput,
  ValidateAwsAssociationsCommand,
} from "./commands/ValidateAwsAssociationsCommand";
import { DevOpsAgentClient } from "./DevOpsAgentClient";
import { paginateListAgentSpaces } from "./pagination/ListAgentSpacesPaginator";
import { paginateListAssociations } from "./pagination/ListAssociationsPaginator";
import { paginateListBacklogTasks } from "./pagination/ListBacklogTasksPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListGoals } from "./pagination/ListGoalsPaginator";
import { paginateListJournalRecords } from "./pagination/ListJournalRecordsPaginator";
import { paginateListServices } from "./pagination/ListServicesPaginator";

const commands = {
  AssociateServiceCommand,
  CreateAgentSpaceCommand,
  CreateBacklogTaskCommand,
  CreateChatCommand,
  CreatePrivateConnectionCommand,
  DeleteAgentSpaceCommand,
  DeletePrivateConnectionCommand,
  DeregisterServiceCommand,
  DescribePrivateConnectionCommand,
  DisableOperatorAppCommand,
  DisassociateServiceCommand,
  EnableOperatorAppCommand,
  GetAccountUsageCommand,
  GetAgentSpaceCommand,
  GetAssociationCommand,
  GetBacklogTaskCommand,
  GetOperatorAppCommand,
  GetRecommendationCommand,
  GetServiceCommand,
  ListAgentSpacesCommand,
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
  ListWebhooksCommand,
  RegisterServiceCommand,
  SendMessageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentSpaceCommand,
  UpdateAssociationCommand,
  UpdateBacklogTaskCommand,
  UpdateGoalCommand,
  UpdateOperatorAppIdpConfigCommand,
  UpdatePrivateConnectionCertificateCommand,
  UpdateRecommendationCommand,
  ValidateAwsAssociationsCommand,
};
const paginators = {
  paginateListAgentSpaces,
  paginateListAssociations,
  paginateListBacklogTasks,
  paginateListExecutions,
  paginateListGoals,
  paginateListJournalRecords,
  paginateListServices,
};

export interface DevOpsAgent {
  /**
   * @see {@link AssociateServiceCommand}
   */
  associateService(
    args: AssociateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceCommandOutput>;
  associateService(
    args: AssociateServiceCommandInput,
    cb: (err: any, data?: AssociateServiceCommandOutput) => void
  ): void;
  associateService(
    args: AssociateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentSpaceCommand}
   */
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentSpaceCommandOutput>;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;
  createAgentSpace(
    args: CreateAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBacklogTaskCommand}
   */
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBacklogTaskCommandOutput>;
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    cb: (err: any, data?: CreateBacklogTaskCommandOutput) => void
  ): void;
  createBacklogTask(
    args: CreateBacklogTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChatCommand}
   */
  createChat(
    args: CreateChatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChatCommandOutput>;
  createChat(
    args: CreateChatCommandInput,
    cb: (err: any, data?: CreateChatCommandOutput) => void
  ): void;
  createChat(
    args: CreateChatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChatCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivateConnectionCommand}
   */
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivateConnectionCommandOutput>;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;
  createPrivateConnection(
    args: CreatePrivateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentSpaceCommand}
   */
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentSpaceCommandOutput>;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;
  deleteAgentSpace(
    args: DeleteAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrivateConnectionCommand}
   */
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrivateConnectionCommandOutput>;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;
  deletePrivateConnection(
    args: DeletePrivateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterServiceCommand}
   */
  deregisterService(
    args: DeregisterServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterServiceCommandOutput>;
  deregisterService(
    args: DeregisterServiceCommandInput,
    cb: (err: any, data?: DeregisterServiceCommandOutput) => void
  ): void;
  deregisterService(
    args: DeregisterServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePrivateConnectionCommand}
   */
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrivateConnectionCommandOutput>;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;
  describePrivateConnection(
    args: DescribePrivateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrivateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOperatorAppCommand}
   */
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOperatorAppCommandOutput>;
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    cb: (err: any, data?: DisableOperatorAppCommandOutput) => void
  ): void;
  disableOperatorApp(
    args: DisableOperatorAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceCommand}
   */
  disassociateService(
    args: DisassociateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceCommandOutput>;
  disassociateService(
    args: DisassociateServiceCommandInput,
    cb: (err: any, data?: DisassociateServiceCommandOutput) => void
  ): void;
  disassociateService(
    args: DisassociateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOperatorAppCommand}
   */
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOperatorAppCommandOutput>;
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    cb: (err: any, data?: EnableOperatorAppCommandOutput) => void
  ): void;
  enableOperatorApp(
    args: EnableOperatorAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountUsageCommand}
   */
  getAccountUsage(): Promise<GetAccountUsageCommandOutput>;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountUsageCommandOutput>;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    cb: (err: any, data?: GetAccountUsageCommandOutput) => void
  ): void;
  getAccountUsage(
    args: GetAccountUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentSpaceCommand}
   */
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentSpaceCommandOutput>;
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    cb: (err: any, data?: GetAgentSpaceCommandOutput) => void
  ): void;
  getAgentSpace(
    args: GetAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociationCommand}
   */
  getAssociation(
    args: GetAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociationCommandOutput>;
  getAssociation(
    args: GetAssociationCommandInput,
    cb: (err: any, data?: GetAssociationCommandOutput) => void
  ): void;
  getAssociation(
    args: GetAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBacklogTaskCommand}
   */
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBacklogTaskCommandOutput>;
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    cb: (err: any, data?: GetBacklogTaskCommandOutput) => void
  ): void;
  getBacklogTask(
    args: GetBacklogTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOperatorAppCommand}
   */
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperatorAppCommandOutput>;
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    cb: (err: any, data?: GetOperatorAppCommandOutput) => void
  ): void;
  getOperatorApp(
    args: GetOperatorAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperatorAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationCommandOutput>;
  getRecommendation(
    args: GetRecommendationCommandInput,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;
  getRecommendation(
    args: GetRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceCommand}
   */
  getService(
    args: GetServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceCommandOutput>;
  getService(
    args: GetServiceCommandInput,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentSpacesCommand}
   */
  listAgentSpaces(): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentSpacesCommandOutput>;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;
  listAgentSpaces(
    args: ListAgentSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBacklogTasksCommand}
   */
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBacklogTasksCommandOutput>;
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    cb: (err: any, data?: ListBacklogTasksCommandOutput) => void
  ): void;
  listBacklogTasks(
    args: ListBacklogTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBacklogTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChatsCommand}
   */
  listChats(
    args: ListChatsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChatsCommandOutput>;
  listChats(
    args: ListChatsCommandInput,
    cb: (err: any, data?: ListChatsCommandOutput) => void
  ): void;
  listChats(
    args: ListChatsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChatsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGoalsCommand}
   */
  listGoals(
    args: ListGoalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGoalsCommandOutput>;
  listGoals(
    args: ListGoalsCommandInput,
    cb: (err: any, data?: ListGoalsCommandOutput) => void
  ): void;
  listGoals(
    args: ListGoalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGoalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJournalRecordsCommand}
   */
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalRecordsCommandOutput>;
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    cb: (err: any, data?: ListJournalRecordsCommandOutput) => void
  ): void;
  listJournalRecords(
    args: ListJournalRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPendingMessagesCommand}
   */
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPendingMessagesCommandOutput>;
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    cb: (err: any, data?: ListPendingMessagesCommandOutput) => void
  ): void;
  listPendingMessages(
    args: ListPendingMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPendingMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivateConnectionsCommand}
   */
  listPrivateConnections(): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrivateConnectionsCommandOutput>;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;
  listPrivateConnections(
    args: ListPrivateConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrivateConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
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
   * @see {@link ListWebhooksCommand}
   */
  listWebhooks(
    args: ListWebhooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebhooksCommandOutput>;
  listWebhooks(
    args: ListWebhooksCommandInput,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterServiceCommand}
   */
  registerService(
    args: RegisterServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterServiceCommandOutput>;
  registerService(
    args: RegisterServiceCommandInput,
    cb: (err: any, data?: RegisterServiceCommandOutput) => void
  ): void;
  registerService(
    args: RegisterServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendMessageCommandOutput>;
  sendMessage(
    args: SendMessageCommandInput,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;
  sendMessage(
    args: SendMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
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
   * @see {@link UpdateAgentSpaceCommand}
   */
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentSpaceCommandOutput>;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;
  updateAgentSpace(
    args: UpdateAgentSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssociationCommand}
   */
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssociationCommandOutput>;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;
  updateAssociation(
    args: UpdateAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBacklogTaskCommand}
   */
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBacklogTaskCommandOutput>;
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    cb: (err: any, data?: UpdateBacklogTaskCommandOutput) => void
  ): void;
  updateBacklogTask(
    args: UpdateBacklogTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBacklogTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGoalCommand}
   */
  updateGoal(
    args: UpdateGoalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGoalCommandOutput>;
  updateGoal(
    args: UpdateGoalCommandInput,
    cb: (err: any, data?: UpdateGoalCommandOutput) => void
  ): void;
  updateGoal(
    args: UpdateGoalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGoalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOperatorAppIdpConfigCommand}
   */
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOperatorAppIdpConfigCommandOutput>;
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    cb: (err: any, data?: UpdateOperatorAppIdpConfigCommandOutput) => void
  ): void;
  updateOperatorAppIdpConfig(
    args: UpdateOperatorAppIdpConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOperatorAppIdpConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrivateConnectionCertificateCommand}
   */
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrivateConnectionCertificateCommandOutput>;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;
  updatePrivateConnectionCertificate(
    args: UpdatePrivateConnectionCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrivateConnectionCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommendationCommand}
   */
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecommendationCommandOutput>;
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    cb: (err: any, data?: UpdateRecommendationCommandOutput) => void
  ): void;
  updateRecommendation(
    args: UpdateRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateAwsAssociationsCommand}
   */
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateAwsAssociationsCommandOutput>;
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    cb: (err: any, data?: ValidateAwsAssociationsCommandOutput) => void
  ): void;
  validateAwsAssociations(
    args: ValidateAwsAssociationsCommandInput,
    options: __HttpHandlerOptions,
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
}

/**
 * AWS DevOps Agent is a frontier agent that resolves and proactively prevents incidents, continuously improving
 * reliability and performance. AWS DevOps Agent investigates incidents and identifies operational improvements as an
 * experienced DevOps engineer.
 *
 * The agent works by:
 *
 * * Learning your resources and their relationships.
 * * Working with your observability tools, runbooks, code repositories, and CI/CD pipelines.
 * * Correlating telemetry, code, and deployment data to understand relationships between your application resources.
 * * Supporting applications in multicloud and hybrid environments.
 *
 * @public
 */
export class DevOpsAgent extends DevOpsAgentClient implements DevOpsAgent {}
createAggregatedClient(commands, DevOpsAgent, { paginators });
