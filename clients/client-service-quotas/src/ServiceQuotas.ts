// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateServiceQuotaTemplateCommand,
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
} from "./commands/AssociateServiceQuotaTemplateCommand";
import {
  CreateSupportCaseCommand,
  CreateSupportCaseCommandInput,
  CreateSupportCaseCommandOutput,
} from "./commands/CreateSupportCaseCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommand,
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
} from "./commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAssociationForServiceQuotaTemplateCommand,
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
} from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetAutoManagementConfigurationCommand,
  GetAutoManagementConfigurationCommandInput,
  GetAutoManagementConfigurationCommandOutput,
} from "./commands/GetAutoManagementConfigurationCommand";
import {
  GetAWSDefaultServiceQuotaCommand,
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
} from "./commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetQuotaUtilizationReportCommand,
  GetQuotaUtilizationReportCommandInput,
  GetQuotaUtilizationReportCommandOutput,
} from "./commands/GetQuotaUtilizationReportCommand";
import {
  GetRequestedServiceQuotaChangeCommand,
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
} from "./commands/GetRequestedServiceQuotaChangeCommand";
import {
  GetServiceQuotaCommand,
  GetServiceQuotaCommandInput,
  GetServiceQuotaCommandOutput,
} from "./commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "./commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import {
  ListServiceQuotasCommand,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
} from "./commands/ListServiceQuotasCommand";
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
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommand,
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
} from "./commands/RequestServiceQuotaIncreaseCommand";
import {
  StartAutoManagementCommand,
  StartAutoManagementCommandInput,
  StartAutoManagementCommandOutput,
} from "./commands/StartAutoManagementCommand";
import {
  StartQuotaUtilizationReportCommand,
  StartQuotaUtilizationReportCommandInput,
  StartQuotaUtilizationReportCommandOutput,
} from "./commands/StartQuotaUtilizationReportCommand";
import {
  StopAutoManagementCommand,
  StopAutoManagementCommandInput,
  StopAutoManagementCommandOutput,
} from "./commands/StopAutoManagementCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAutoManagementCommand,
  UpdateAutoManagementCommandInput,
  UpdateAutoManagementCommandOutput,
} from "./commands/UpdateAutoManagementCommand";
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
createAggregatedClient(commands, ServiceQuotas);
