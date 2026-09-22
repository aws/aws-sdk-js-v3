// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AbortEnvironmentUpdateCommandInput,
  type AbortEnvironmentUpdateCommandOutput,
  AbortEnvironmentUpdateCommand,
} from "./commands/AbortEnvironmentUpdateCommand";
import {
  type ApplyEnvironmentManagedActionCommandInput,
  type ApplyEnvironmentManagedActionCommandOutput,
  ApplyEnvironmentManagedActionCommand,
} from "./commands/ApplyEnvironmentManagedActionCommand";
import {
  type AssociateEnvironmentOperationsRoleCommandInput,
  type AssociateEnvironmentOperationsRoleCommandOutput,
  AssociateEnvironmentOperationsRoleCommand,
} from "./commands/AssociateEnvironmentOperationsRoleCommand";
import {
  type CheckDNSAvailabilityCommandInput,
  type CheckDNSAvailabilityCommandOutput,
  CheckDNSAvailabilityCommand,
} from "./commands/CheckDNSAvailabilityCommand";
import {
  type ComposeEnvironmentsCommandInput,
  type ComposeEnvironmentsCommandOutput,
  ComposeEnvironmentsCommand,
} from "./commands/ComposeEnvironmentsCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateApplicationVersionCommandInput,
  type CreateApplicationVersionCommandOutput,
  CreateApplicationVersionCommand,
} from "./commands/CreateApplicationVersionCommand";
import {
  type CreateConfigurationTemplateCommandInput,
  type CreateConfigurationTemplateCommandOutput,
  CreateConfigurationTemplateCommand,
} from "./commands/CreateConfigurationTemplateCommand";
import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreatePlatformVersionCommandInput,
  type CreatePlatformVersionCommandOutput,
  CreatePlatformVersionCommand,
} from "./commands/CreatePlatformVersionCommand";
import {
  type CreateStorageLocationCommandInput,
  type CreateStorageLocationCommandOutput,
  CreateStorageLocationCommand,
} from "./commands/CreateStorageLocationCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteApplicationVersionCommandInput,
  type DeleteApplicationVersionCommandOutput,
  DeleteApplicationVersionCommand,
} from "./commands/DeleteApplicationVersionCommand";
import {
  type DeleteConfigurationTemplateCommandInput,
  type DeleteConfigurationTemplateCommandOutput,
  DeleteConfigurationTemplateCommand,
} from "./commands/DeleteConfigurationTemplateCommand";
import {
  type DeleteEnvironmentConfigurationCommandInput,
  type DeleteEnvironmentConfigurationCommandOutput,
  DeleteEnvironmentConfigurationCommand,
} from "./commands/DeleteEnvironmentConfigurationCommand";
import {
  type DeletePlatformVersionCommandInput,
  type DeletePlatformVersionCommandOutput,
  DeletePlatformVersionCommand,
} from "./commands/DeletePlatformVersionCommand";
import {
  type DescribeAccountAttributesCommandInput,
  type DescribeAccountAttributesCommandOutput,
  DescribeAccountAttributesCommand,
} from "./commands/DescribeAccountAttributesCommand";
import {
  type DescribeApplicationsCommandInput,
  type DescribeApplicationsCommandOutput,
  DescribeApplicationsCommand,
} from "./commands/DescribeApplicationsCommand";
import {
  type DescribeApplicationVersionsCommandInput,
  type DescribeApplicationVersionsCommandOutput,
  DescribeApplicationVersionsCommand,
} from "./commands/DescribeApplicationVersionsCommand";
import {
  type DescribeConfigurationOptionsCommandInput,
  type DescribeConfigurationOptionsCommandOutput,
  DescribeConfigurationOptionsCommand,
} from "./commands/DescribeConfigurationOptionsCommand";
import {
  type DescribeConfigurationSettingsCommandInput,
  type DescribeConfigurationSettingsCommandOutput,
  DescribeConfigurationSettingsCommand,
} from "./commands/DescribeConfigurationSettingsCommand";
import {
  type DescribeEnvironmentHealthCommandInput,
  type DescribeEnvironmentHealthCommandOutput,
  DescribeEnvironmentHealthCommand,
} from "./commands/DescribeEnvironmentHealthCommand";
import {
  type DescribeEnvironmentManagedActionHistoryCommandInput,
  type DescribeEnvironmentManagedActionHistoryCommandOutput,
  DescribeEnvironmentManagedActionHistoryCommand,
} from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  type DescribeEnvironmentManagedActionsCommandInput,
  type DescribeEnvironmentManagedActionsCommandOutput,
  DescribeEnvironmentManagedActionsCommand,
} from "./commands/DescribeEnvironmentManagedActionsCommand";
import {
  type DescribeEnvironmentResourcesCommandInput,
  type DescribeEnvironmentResourcesCommandOutput,
  DescribeEnvironmentResourcesCommand,
} from "./commands/DescribeEnvironmentResourcesCommand";
import {
  type DescribeEnvironmentsCommandInput,
  type DescribeEnvironmentsCommandOutput,
  DescribeEnvironmentsCommand,
} from "./commands/DescribeEnvironmentsCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeInstancesHealthCommandInput,
  type DescribeInstancesHealthCommandOutput,
  DescribeInstancesHealthCommand,
} from "./commands/DescribeInstancesHealthCommand";
import {
  type DescribePlatformVersionCommandInput,
  type DescribePlatformVersionCommandOutput,
  DescribePlatformVersionCommand,
} from "./commands/DescribePlatformVersionCommand";
import {
  type DisassociateEnvironmentOperationsRoleCommandInput,
  type DisassociateEnvironmentOperationsRoleCommandOutput,
  DisassociateEnvironmentOperationsRoleCommand,
} from "./commands/DisassociateEnvironmentOperationsRoleCommand";
import {
  type ListAvailableSolutionStacksCommandInput,
  type ListAvailableSolutionStacksCommandOutput,
  ListAvailableSolutionStacksCommand,
} from "./commands/ListAvailableSolutionStacksCommand";
import {
  type ListPlatformBranchesCommandInput,
  type ListPlatformBranchesCommandOutput,
  ListPlatformBranchesCommand,
} from "./commands/ListPlatformBranchesCommand";
import {
  type ListPlatformVersionsCommandInput,
  type ListPlatformVersionsCommandOutput,
  ListPlatformVersionsCommand,
} from "./commands/ListPlatformVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RebuildEnvironmentCommandInput,
  type RebuildEnvironmentCommandOutput,
  RebuildEnvironmentCommand,
} from "./commands/RebuildEnvironmentCommand";
import {
  type RequestEnvironmentInfoCommandInput,
  type RequestEnvironmentInfoCommandOutput,
  RequestEnvironmentInfoCommand,
} from "./commands/RequestEnvironmentInfoCommand";
import {
  type RestartAppServerCommandInput,
  type RestartAppServerCommandOutput,
  RestartAppServerCommand,
} from "./commands/RestartAppServerCommand";
import {
  type RetrieveEnvironmentInfoCommandInput,
  type RetrieveEnvironmentInfoCommandOutput,
  RetrieveEnvironmentInfoCommand,
} from "./commands/RetrieveEnvironmentInfoCommand";
import {
  type SwapEnvironmentCNAMEsCommandInput,
  type SwapEnvironmentCNAMEsCommandOutput,
  SwapEnvironmentCNAMEsCommand,
} from "./commands/SwapEnvironmentCNAMEsCommand";
import {
  type TerminateEnvironmentCommandInput,
  type TerminateEnvironmentCommandOutput,
  TerminateEnvironmentCommand,
} from "./commands/TerminateEnvironmentCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateApplicationResourceLifecycleCommandInput,
  type UpdateApplicationResourceLifecycleCommandOutput,
  UpdateApplicationResourceLifecycleCommand,
} from "./commands/UpdateApplicationResourceLifecycleCommand";
import {
  type UpdateApplicationVersionCommandInput,
  type UpdateApplicationVersionCommandOutput,
  UpdateApplicationVersionCommand,
} from "./commands/UpdateApplicationVersionCommand";
import {
  type UpdateConfigurationTemplateCommandInput,
  type UpdateConfigurationTemplateCommandOutput,
  UpdateConfigurationTemplateCommand,
} from "./commands/UpdateConfigurationTemplateCommand";
import {
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateTagsForResourceCommandInput,
  type UpdateTagsForResourceCommandOutput,
  UpdateTagsForResourceCommand,
} from "./commands/UpdateTagsForResourceCommand";
import {
  type ValidateConfigurationSettingsCommandInput,
  type ValidateConfigurationSettingsCommandOutput,
  ValidateConfigurationSettingsCommand,
} from "./commands/ValidateConfigurationSettingsCommand";
import { ElasticBeanstalkClient } from "./ElasticBeanstalkClient";
import type { ElasticBeanstalkSyntheticServiceException } from "./models/ElasticBeanstalkSyntheticServiceException";
import {
  paginateDescribeEnvironmentManagedActionHistory,
} from "./pagination/DescribeEnvironmentManagedActionHistoryPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateListPlatformBranches } from "./pagination/ListPlatformBranchesPaginator";
import { paginateListPlatformVersions } from "./pagination/ListPlatformVersionsPaginator";
import { waitUntilEnvironmentExists } from "./waiters/waitForEnvironmentExists";
import { waitUntilEnvironmentTerminated } from "./waiters/waitForEnvironmentTerminated";
import { waitUntilEnvironmentUpdated } from "./waiters/waitForEnvironmentUpdated";

const commands = {
  AbortEnvironmentUpdateCommand,
  ApplyEnvironmentManagedActionCommand,
  AssociateEnvironmentOperationsRoleCommand,
  CheckDNSAvailabilityCommand,
  ComposeEnvironmentsCommand,
  CreateApplicationCommand,
  CreateApplicationVersionCommand,
  CreateConfigurationTemplateCommand,
  CreateEnvironmentCommand,
  CreatePlatformVersionCommand,
  CreateStorageLocationCommand,
  DeleteApplicationCommand,
  DeleteApplicationVersionCommand,
  DeleteConfigurationTemplateCommand,
  DeleteEnvironmentConfigurationCommand,
  DeletePlatformVersionCommand,
  DescribeAccountAttributesCommand,
  DescribeApplicationsCommand,
  DescribeApplicationVersionsCommand,
  DescribeConfigurationOptionsCommand,
  DescribeConfigurationSettingsCommand,
  DescribeEnvironmentHealthCommand,
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionsCommand,
  DescribeEnvironmentResourcesCommand,
  DescribeEnvironmentsCommand,
  DescribeEventsCommand,
  DescribeInstancesHealthCommand,
  DescribePlatformVersionCommand,
  DisassociateEnvironmentOperationsRoleCommand,
  ListAvailableSolutionStacksCommand,
  ListPlatformBranchesCommand,
  ListPlatformVersionsCommand,
  ListTagsForResourceCommand,
  RebuildEnvironmentCommand,
  RequestEnvironmentInfoCommand,
  RestartAppServerCommand,
  RetrieveEnvironmentInfoCommand,
  SwapEnvironmentCNAMEsCommand,
  TerminateEnvironmentCommand,
  UpdateApplicationCommand,
  UpdateApplicationResourceLifecycleCommand,
  UpdateApplicationVersionCommand,
  UpdateConfigurationTemplateCommand,
  UpdateEnvironmentCommand,
  UpdateTagsForResourceCommand,
  ValidateConfigurationSettingsCommand,
};
const paginators = {
  paginateDescribeEnvironmentManagedActionHistory,
  paginateDescribeEvents,
  paginateListPlatformBranches,
  paginateListPlatformVersions,
};
const waiters = {
  waitUntilEnvironmentExists,
  waitUntilEnvironmentTerminated,
  waitUntilEnvironmentUpdated,
};

/**
 * @public
 */
export interface ElasticBeanstalkRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ElasticBeanstalk {
  /**
   * @see {@link AbortEnvironmentUpdateCommand}
   */
  abortEnvironmentUpdate(): Promise<AbortEnvironmentUpdateCommandOutput>;
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<AbortEnvironmentUpdateCommandOutput>;
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyEnvironmentManagedActionCommand}
   */
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ApplyEnvironmentManagedActionCommandOutput>;
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateEnvironmentOperationsRoleCommand}
   */
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<AssociateEnvironmentOperationsRoleCommandOutput>;
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckDNSAvailabilityCommand}
   */
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CheckDNSAvailabilityCommandOutput>;
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link ComposeEnvironmentsCommand}
   */
  composeEnvironments(): Promise<ComposeEnvironmentsCommandOutput>;
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ComposeEnvironmentsCommandOutput>;
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationVersionCommand}
   */
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreateApplicationVersionCommandOutput>;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationTemplateCommand}
   */
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreateConfigurationTemplateCommandOutput>;
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformVersionCommand}
   */
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreatePlatformVersionCommandOutput>;
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageLocationCommand}
   */
  createStorageLocation(): Promise<CreateStorageLocationCommandOutput>;
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<CreateStorageLocationCommandOutput>;
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationVersionCommand}
   */
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DeleteApplicationVersionCommandOutput>;
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationTemplateCommand}
   */
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DeleteConfigurationTemplateCommandOutput>;
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentConfigurationCommand}
   */
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DeleteEnvironmentConfigurationCommandOutput>;
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlatformVersionCommand}
   */
  deletePlatformVersion(): Promise<DeletePlatformVersionCommandOutput>;
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DeletePlatformVersionCommandOutput>;
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationsCommand}
   */
  describeApplications(): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationVersionsCommand}
   */
  describeApplicationVersions(): Promise<DescribeApplicationVersionsCommandOutput>;
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeApplicationVersionsCommandOutput>;
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationOptionsCommand}
   */
  describeConfigurationOptions(): Promise<DescribeConfigurationOptionsCommandOutput>;
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeConfigurationOptionsCommandOutput>;
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationSettingsCommand}
   */
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeConfigurationSettingsCommandOutput>;
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentHealthCommand}
   */
  describeEnvironmentHealth(): Promise<DescribeEnvironmentHealthCommandOutput>;
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEnvironmentHealthCommandOutput>;
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentManagedActionHistoryCommand}
   */
  describeEnvironmentManagedActionHistory(): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput>;
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput>;
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentManagedActionsCommand}
   */
  describeEnvironmentManagedActions(): Promise<DescribeEnvironmentManagedActionsCommandOutput>;
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput>;
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentResourcesCommand}
   */
  describeEnvironmentResources(): Promise<DescribeEnvironmentResourcesCommandOutput>;
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEnvironmentResourcesCommandOutput>;
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   */
  describeEnvironments(): Promise<DescribeEnvironmentsCommandOutput>;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEnvironmentsCommandOutput>;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancesHealthCommand}
   */
  describeInstancesHealth(): Promise<DescribeInstancesHealthCommandOutput>;
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribeInstancesHealthCommandOutput>;
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlatformVersionCommand}
   */
  describePlatformVersion(): Promise<DescribePlatformVersionCommandOutput>;
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DescribePlatformVersionCommandOutput>;
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEnvironmentOperationsRoleCommand}
   */
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<DisassociateEnvironmentOperationsRoleCommandOutput>;
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableSolutionStacksCommand}
   */
  listAvailableSolutionStacks(): Promise<ListAvailableSolutionStacksCommandOutput>;
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ListAvailableSolutionStacksCommandOutput>;
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformBranchesCommand}
   */
  listPlatformBranches(): Promise<ListPlatformBranchesCommandOutput>;
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ListPlatformBranchesCommandOutput>;
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformVersionsCommand}
   */
  listPlatformVersions(): Promise<ListPlatformVersionsCommandOutput>;
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ListPlatformVersionsCommandOutput>;
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): void;
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RebuildEnvironmentCommand}
   */
  rebuildEnvironment(): Promise<RebuildEnvironmentCommandOutput>;
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<RebuildEnvironmentCommandOutput>;
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestEnvironmentInfoCommand}
   */
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<RequestEnvironmentInfoCommandOutput>;
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartAppServerCommand}
   */
  restartAppServer(): Promise<RestartAppServerCommandOutput>;
  restartAppServer(
    args: RestartAppServerCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<RestartAppServerCommandOutput>;
  restartAppServer(
    args: RestartAppServerCommandInput,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;
  restartAppServer(
    args: RestartAppServerCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveEnvironmentInfoCommand}
   */
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<RetrieveEnvironmentInfoCommandOutput>;
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link SwapEnvironmentCNAMEsCommand}
   */
  swapEnvironmentCNAMEs(): Promise<SwapEnvironmentCNAMEsCommandOutput>;
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<SwapEnvironmentCNAMEsCommandOutput>;
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateEnvironmentCommand}
   */
  terminateEnvironment(): Promise<TerminateEnvironmentCommandOutput>;
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<TerminateEnvironmentCommandOutput>;
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationResourceLifecycleCommand}
   */
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput>;
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationVersionCommand}
   */
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateApplicationVersionCommandOutput>;
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationTemplateCommand}
   */
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateConfigurationTemplateCommandOutput>;
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTagsForResourceCommand}
   */
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<UpdateTagsForResourceCommandOutput>;
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateConfigurationSettingsCommand}
   */
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options?: ElasticBeanstalkRequestOptions
  ): Promise<ValidateConfigurationSettingsCommandOutput>;
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options: ElasticBeanstalkRequestOptions,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentManagedActionHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEnvironmentManagedActionHistoryCommandOutput}.
   */
  paginateDescribeEnvironmentManagedActionHistory(
    args?: DescribeEnvironmentManagedActionHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput>;

  /**
   * @see {@link DescribeEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventsCommandOutput}.
   */
  paginateDescribeEvents(
    args?: DescribeEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventsCommandOutput>;

  /**
   * @see {@link ListPlatformBranchesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPlatformBranchesCommandOutput}.
   */
  paginateListPlatformBranches(
    args?: ListPlatformBranchesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPlatformBranchesCommandOutput>;

  /**
   * @see {@link ListPlatformVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPlatformVersionsCommandOutput}.
   */
  paginateListPlatformVersions(
    args?: ListPlatformVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPlatformVersionsCommandOutput>;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEnvironmentExists(
    args: DescribeEnvironmentsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticBeanstalk>, "client">
  ): Promise<WaiterResult<DescribeEnvironmentsCommandOutput>>;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEnvironmentTerminated(
    args: DescribeEnvironmentsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticBeanstalk>, "client">
  ): Promise<WaiterResult<DescribeEnvironmentsCommandOutput>>;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEnvironmentUpdated(
    args: DescribeEnvironmentsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElasticBeanstalk>, "client">
  ): Promise<WaiterResult<DescribeEnvironmentsCommandOutput>>;
}

/**
 * <fullname>Elastic Beanstalk</fullname>
 *          <p>Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on
 *    the Amazon Web Services Cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">Elastic Beanstalk</a> details page. The location of the
 *       latest Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 * @public
 */
export class ElasticBeanstalk extends ElasticBeanstalkClient implements ElasticBeanstalk {}
createAggregatedClient(commands, ElasticBeanstalk, { paginators, waiters });
