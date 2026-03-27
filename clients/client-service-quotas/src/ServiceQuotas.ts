// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateServiceQuotaTemplateCommandInput,
  type AssociateServiceQuotaTemplateCommandOutput,
  AssociateServiceQuotaTemplateCommand,
} from "./commands/AssociateServiceQuotaTemplateCommand";
import {
  type CreateSupportCaseCommandInput,
  type CreateSupportCaseCommandOutput,
  CreateSupportCaseCommand,
} from "./commands/CreateSupportCaseCommand";
import {
  type DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  type DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  type DisassociateServiceQuotaTemplateCommandInput,
  type DisassociateServiceQuotaTemplateCommandOutput,
  DisassociateServiceQuotaTemplateCommand,
} from "./commands/DisassociateServiceQuotaTemplateCommand";
import {
  type GetAssociationForServiceQuotaTemplateCommandInput,
  type GetAssociationForServiceQuotaTemplateCommandOutput,
  GetAssociationForServiceQuotaTemplateCommand,
} from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  type GetAutoManagementConfigurationCommandInput,
  type GetAutoManagementConfigurationCommandOutput,
  GetAutoManagementConfigurationCommand,
} from "./commands/GetAutoManagementConfigurationCommand";
import {
  type GetAWSDefaultServiceQuotaCommandInput,
  type GetAWSDefaultServiceQuotaCommandOutput,
  GetAWSDefaultServiceQuotaCommand,
} from "./commands/GetAWSDefaultServiceQuotaCommand";
import {
  type GetQuotaUtilizationReportCommandInput,
  type GetQuotaUtilizationReportCommandOutput,
  GetQuotaUtilizationReportCommand,
} from "./commands/GetQuotaUtilizationReportCommand";
import {
  type GetRequestedServiceQuotaChangeCommandInput,
  type GetRequestedServiceQuotaChangeCommandOutput,
  GetRequestedServiceQuotaChangeCommand,
} from "./commands/GetRequestedServiceQuotaChangeCommand";
import {
  type GetServiceQuotaCommandInput,
  type GetServiceQuotaCommandOutput,
  GetServiceQuotaCommand,
} from "./commands/GetServiceQuotaCommand";
import {
  type GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  type GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  type ListAWSDefaultServiceQuotasCommandInput,
  type ListAWSDefaultServiceQuotasCommandOutput,
  ListAWSDefaultServiceQuotasCommand,
} from "./commands/ListAWSDefaultServiceQuotasCommand";
import {
  type ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  type ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  type ListRequestedServiceQuotaChangeHistoryCommandInput,
  type ListRequestedServiceQuotaChangeHistoryCommandOutput,
  ListRequestedServiceQuotaChangeHistoryCommand,
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  type ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  type ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import {
  type ListServiceQuotasCommandInput,
  type ListServiceQuotasCommandOutput,
  ListServiceQuotasCommand,
} from "./commands/ListServiceQuotasCommand";
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
  type PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  type PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  type RequestServiceQuotaIncreaseCommandInput,
  type RequestServiceQuotaIncreaseCommandOutput,
  RequestServiceQuotaIncreaseCommand,
} from "./commands/RequestServiceQuotaIncreaseCommand";
import {
  type StartAutoManagementCommandInput,
  type StartAutoManagementCommandOutput,
  StartAutoManagementCommand,
} from "./commands/StartAutoManagementCommand";
import {
  type StartQuotaUtilizationReportCommandInput,
  type StartQuotaUtilizationReportCommandOutput,
  StartQuotaUtilizationReportCommand,
} from "./commands/StartQuotaUtilizationReportCommand";
import {
  type StopAutoManagementCommandInput,
  type StopAutoManagementCommandOutput,
  StopAutoManagementCommand,
} from "./commands/StopAutoManagementCommand";
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
  type UpdateAutoManagementCommandInput,
  type UpdateAutoManagementCommandOutput,
  UpdateAutoManagementCommand,
} from "./commands/UpdateAutoManagementCommand";
import { paginateListAWSDefaultServiceQuotas } from "./pagination/ListAWSDefaultServiceQuotasPaginator";
import {
  paginateListRequestedServiceQuotaChangeHistoryByQuota,
} from "./pagination/ListRequestedServiceQuotaChangeHistoryByQuotaPaginator";
import {
  paginateListRequestedServiceQuotaChangeHistory,
} from "./pagination/ListRequestedServiceQuotaChangeHistoryPaginator";
import {
  paginateListServiceQuotaIncreaseRequestsInTemplate,
} from "./pagination/ListServiceQuotaIncreaseRequestsInTemplatePaginator";
import { paginateListServiceQuotas } from "./pagination/ListServiceQuotasPaginator";
import { paginateListServices } from "./pagination/ListServicesPaginator";
import { ServiceQuotasClient } from "./ServiceQuotasClient";

const commands = {
  AssociateServiceQuotaTemplateCommand,
  CreateSupportCaseCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DisassociateServiceQuotaTemplateCommand,
  GetAssociationForServiceQuotaTemplateCommand,
  GetAutoManagementConfigurationCommand,
  GetAWSDefaultServiceQuotaCommand,
  GetQuotaUtilizationReportCommand,
  GetRequestedServiceQuotaChangeCommand,
  GetServiceQuotaCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  ListAWSDefaultServiceQuotasCommand,
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotasCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  RequestServiceQuotaIncreaseCommand,
  StartAutoManagementCommand,
  StartQuotaUtilizationReportCommand,
  StopAutoManagementCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAutoManagementCommand,
};
const paginators = {
  paginateListAWSDefaultServiceQuotas,
  paginateListRequestedServiceQuotaChangeHistory,
  paginateListRequestedServiceQuotaChangeHistoryByQuota,
  paginateListServiceQuotaIncreaseRequestsInTemplate,
  paginateListServiceQuotas,
  paginateListServices,
};

export interface ServiceQuotas {
  /**
   * @see {@link AssociateServiceQuotaTemplateCommand}
   */
  associateServiceQuotaTemplate(): Promise<AssociateServiceQuotaTemplateCommandOutput>;
  associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceQuotaTemplateCommandOutput>;
  associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSupportCaseCommand}
   */
  createSupportCase(
    args: CreateSupportCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSupportCaseCommandOutput>;
  createSupportCase(
    args: CreateSupportCaseCommandInput,
    cb: (err: any, data?: CreateSupportCaseCommandOutput) => void
  ): void;
  createSupportCase(
    args: CreateSupportCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSupportCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommand}
   */
  deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceQuotaTemplateCommand}
   */
  disassociateServiceQuotaTemplate(): Promise<DisassociateServiceQuotaTemplateCommandOutput>;
  disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceQuotaTemplateCommandOutput>;
  disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociationForServiceQuotaTemplateCommand}
   */
  getAssociationForServiceQuotaTemplate(): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
  getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
  getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void
  ): void;
  getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoManagementConfigurationCommand}
   */
  getAutoManagementConfiguration(): Promise<GetAutoManagementConfigurationCommandOutput>;
  getAutoManagementConfiguration(
    args: GetAutoManagementConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoManagementConfigurationCommandOutput>;
  getAutoManagementConfiguration(
    args: GetAutoManagementConfigurationCommandInput,
    cb: (err: any, data?: GetAutoManagementConfigurationCommandOutput) => void
  ): void;
  getAutoManagementConfiguration(
    args: GetAutoManagementConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoManagementConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAWSDefaultServiceQuotaCommand}
   */
  getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput>;
  getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): void;
  getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQuotaUtilizationReportCommand}
   */
  getQuotaUtilizationReport(
    args: GetQuotaUtilizationReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuotaUtilizationReportCommandOutput>;
  getQuotaUtilizationReport(
    args: GetQuotaUtilizationReportCommandInput,
    cb: (err: any, data?: GetQuotaUtilizationReportCommandOutput) => void
  ): void;
  getQuotaUtilizationReport(
    args: GetQuotaUtilizationReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuotaUtilizationReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRequestedServiceQuotaChangeCommand}
   */
  getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestedServiceQuotaChangeCommandOutput>;
  getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): void;
  getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceQuotaCommand}
   */
  getServiceQuota(
    args: GetServiceQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceQuotaCommandOutput>;
  getServiceQuota(
    args: GetServiceQuotaCommandInput,
    cb: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): void;
  getServiceQuota(
    args: GetServiceQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommand}
   */
  getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAWSDefaultServiceQuotasCommand}
   */
  listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput>;
  listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): void;
  listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRequestedServiceQuotaChangeHistoryCommand}
   */
  listRequestedServiceQuotaChangeHistory(): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
  listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
  listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void
  ): void;
  listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommand}
   */
  listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
  listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void
  ): void;
  listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}
   */
  listServiceQuotaIncreaseRequestsInTemplate(): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
  listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
  listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void
  ): void;
  listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceQuotasCommand}
   */
  listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceQuotasCommandOutput>;
  listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    cb: (err: any, data?: ListServiceQuotasCommandOutput) => void
  ): void;
  listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceQuotasCommandOutput) => void
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
   * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommand}
   */
  putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
  putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void
  ): void;
  putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestServiceQuotaIncreaseCommand}
   */
  requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestServiceQuotaIncreaseCommandOutput>;
  requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): void;
  requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAutoManagementCommand}
   */
  startAutoManagement(
    args: StartAutoManagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAutoManagementCommandOutput>;
  startAutoManagement(
    args: StartAutoManagementCommandInput,
    cb: (err: any, data?: StartAutoManagementCommandOutput) => void
  ): void;
  startAutoManagement(
    args: StartAutoManagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAutoManagementCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQuotaUtilizationReportCommand}
   */
  startQuotaUtilizationReport(): Promise<StartQuotaUtilizationReportCommandOutput>;
  startQuotaUtilizationReport(
    args: StartQuotaUtilizationReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQuotaUtilizationReportCommandOutput>;
  startQuotaUtilizationReport(
    args: StartQuotaUtilizationReportCommandInput,
    cb: (err: any, data?: StartQuotaUtilizationReportCommandOutput) => void
  ): void;
  startQuotaUtilizationReport(
    args: StartQuotaUtilizationReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQuotaUtilizationReportCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAutoManagementCommand}
   */
  stopAutoManagement(): Promise<StopAutoManagementCommandOutput>;
  stopAutoManagement(
    args: StopAutoManagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAutoManagementCommandOutput>;
  stopAutoManagement(
    args: StopAutoManagementCommandInput,
    cb: (err: any, data?: StopAutoManagementCommandOutput) => void
  ): void;
  stopAutoManagement(
    args: StopAutoManagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutoManagementCommandOutput) => void
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
   * @see {@link UpdateAutoManagementCommand}
   */
  updateAutoManagement(): Promise<UpdateAutoManagementCommandOutput>;
  updateAutoManagement(
    args: UpdateAutoManagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutoManagementCommandOutput>;
  updateAutoManagement(
    args: UpdateAutoManagementCommandInput,
    cb: (err: any, data?: UpdateAutoManagementCommandOutput) => void
  ): void;
  updateAutoManagement(
    args: UpdateAutoManagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutoManagementCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAWSDefaultServiceQuotasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAWSDefaultServiceQuotasCommandOutput}.
   */
  paginateListAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAWSDefaultServiceQuotasCommandOutput>;

  /**
   * @see {@link ListRequestedServiceQuotaChangeHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRequestedServiceQuotaChangeHistoryCommandOutput}.
   */
  paginateListRequestedServiceQuotaChangeHistory(
    args?: ListRequestedServiceQuotaChangeHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRequestedServiceQuotaChangeHistoryCommandOutput>;

  /**
   * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput}.
   */
  paginateListRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;

  /**
   * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput}.
   */
  paginateListServiceQuotaIncreaseRequestsInTemplate(
    args?: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;

  /**
   * @see {@link ListServiceQuotasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceQuotasCommandOutput}.
   */
  paginateListServiceQuotas(
    args: ListServiceQuotasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceQuotasCommandOutput>;

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
 * <p>With Service Quotas, you can view and manage your quotas easily as your Amazon Web Services workloads grow.
 *             Quotas, also referred to as limits, are the maximum number of resources that you can
 *             create in your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 *          <p>You need Amazon Web Services CLI version 2.13.20 or higher to view and manage resource-level quotas such as <code>Instances
 *         per domain</code> for Amazon OpenSearch Service.</p>
 * @public
 */
export class ServiceQuotas extends ServiceQuotasClient implements ServiceQuotas {}
createAggregatedClient(commands, ServiceQuotas, { paginators });
