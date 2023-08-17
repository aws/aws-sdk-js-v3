// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AbortEnvironmentUpdateCommand,
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
} from "./commands/AbortEnvironmentUpdateCommand";
import {
  ApplyEnvironmentManagedActionCommand,
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
} from "./commands/ApplyEnvironmentManagedActionCommand";
import {
  AssociateEnvironmentOperationsRoleCommand,
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/AssociateEnvironmentOperationsRoleCommand";
import {
  CheckDNSAvailabilityCommand,
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
} from "./commands/CheckDNSAvailabilityCommand";
import {
  ComposeEnvironmentsCommand,
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
} from "./commands/ComposeEnvironmentsCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommand,
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "./commands/CreateApplicationVersionCommand";
import {
  CreateConfigurationTemplateCommand,
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
} from "./commands/CreateConfigurationTemplateCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreatePlatformVersionCommand,
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
} from "./commands/CreatePlatformVersionCommand";
import {
  CreateStorageLocationCommand,
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
} from "./commands/CreateStorageLocationCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationVersionCommand,
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
} from "./commands/DeleteApplicationVersionCommand";
import {
  DeleteConfigurationTemplateCommand,
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
} from "./commands/DeleteConfigurationTemplateCommand";
import {
  DeleteEnvironmentConfigurationCommand,
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentConfigurationCommand";
import {
  DeletePlatformVersionCommand,
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
} from "./commands/DeletePlatformVersionCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeApplicationVersionsCommand,
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
} from "./commands/DescribeApplicationVersionsCommand";
import {
  DescribeConfigurationOptionsCommand,
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
} from "./commands/DescribeConfigurationOptionsCommand";
import {
  DescribeConfigurationSettingsCommand,
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
} from "./commands/DescribeConfigurationSettingsCommand";
import {
  DescribeEnvironmentHealthCommand,
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
} from "./commands/DescribeEnvironmentHealthCommand";
import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  DescribeEnvironmentManagedActionsCommand,
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionsCommand";
import {
  DescribeEnvironmentResourcesCommand,
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
} from "./commands/DescribeEnvironmentResourcesCommand";
import {
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeInstancesHealthCommand,
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
} from "./commands/DescribeInstancesHealthCommand";
import {
  DescribePlatformVersionCommand,
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
} from "./commands/DescribePlatformVersionCommand";
import {
  DisassociateEnvironmentOperationsRoleCommand,
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/DisassociateEnvironmentOperationsRoleCommand";
import {
  ListAvailableSolutionStacksCommand,
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
} from "./commands/ListAvailableSolutionStacksCommand";
import {
  ListPlatformBranchesCommand,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "./commands/ListPlatformBranchesCommand";
import {
  ListPlatformVersionsCommand,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "./commands/ListPlatformVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RebuildEnvironmentCommand,
  RebuildEnvironmentCommandInput,
  RebuildEnvironmentCommandOutput,
} from "./commands/RebuildEnvironmentCommand";
import {
  RequestEnvironmentInfoCommand,
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
} from "./commands/RequestEnvironmentInfoCommand";
import {
  RestartAppServerCommand,
  RestartAppServerCommandInput,
  RestartAppServerCommandOutput,
} from "./commands/RestartAppServerCommand";
import {
  RetrieveEnvironmentInfoCommand,
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
} from "./commands/RetrieveEnvironmentInfoCommand";
import {
  SwapEnvironmentCNAMEsCommand,
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
} from "./commands/SwapEnvironmentCNAMEsCommand";
import {
  TerminateEnvironmentCommand,
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
} from "./commands/TerminateEnvironmentCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateApplicationResourceLifecycleCommand,
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
} from "./commands/UpdateApplicationResourceLifecycleCommand";
import {
  UpdateApplicationVersionCommand,
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
} from "./commands/UpdateApplicationVersionCommand";
import {
  UpdateConfigurationTemplateCommand,
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
} from "./commands/UpdateConfigurationTemplateCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateTagsForResourceCommand,
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
} from "./commands/UpdateTagsForResourceCommand";
import {
  ValidateConfigurationSettingsCommand,
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
} from "./commands/ValidateConfigurationSettingsCommand";
import { ElasticBeanstalkClient, ElasticBeanstalkClientConfig } from "./ElasticBeanstalkClient";

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

export interface ElasticBeanstalk {
  /**
   * @see {@link AbortEnvironmentUpdateCommand}
   */
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortEnvironmentUpdateCommandOutput>;
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;
  abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyEnvironmentManagedActionCommand}
   */
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyEnvironmentManagedActionCommandOutput>;
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;
  applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateEnvironmentOperationsRoleCommand}
   */
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEnvironmentOperationsRoleCommandOutput>;
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckDNSAvailabilityCommand}
   */
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckDNSAvailabilityCommandOutput>;
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;
  checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link ComposeEnvironmentsCommand}
   */
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ComposeEnvironmentsCommandOutput>;
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;
  composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationVersionCommand}
   */
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationVersionCommandOutput>;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationTemplateCommand}
   */
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationTemplateCommandOutput>;
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;
  createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformVersionCommand}
   */
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformVersionCommandOutput>;
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;
  createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageLocationCommand}
   */
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageLocationCommandOutput>;
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;
  createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationVersionCommand}
   */
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationVersionCommandOutput>;
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;
  deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationTemplateCommand}
   */
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationTemplateCommandOutput>;
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;
  deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentConfigurationCommand}
   */
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentConfigurationCommandOutput>;
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;
  deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlatformVersionCommand}
   */
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlatformVersionCommandOutput>;
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;
  deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAttributesCommand}
   */
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationsCommand}
   */
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationVersionsCommand}
   */
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationVersionsCommandOutput>;
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;
  describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationOptionsCommand}
   */
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationOptionsCommandOutput>;
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;
  describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConfigurationSettingsCommand}
   */
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSettingsCommandOutput>;
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;
  describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentHealthCommand}
   */
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentHealthCommandOutput>;
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;
  describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentManagedActionHistoryCommand}
   */
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput>;
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;
  describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentManagedActionsCommand}
   */
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput>;
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;
  describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentResourcesCommand}
   */
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentResourcesCommandOutput>;
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;
  describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   */
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentsCommandOutput>;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstancesHealthCommand}
   */
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesHealthCommandOutput>;
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;
  describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlatformVersionCommand}
   */
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlatformVersionCommandOutput>;
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;
  describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEnvironmentOperationsRoleCommand}
   */
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEnvironmentOperationsRoleCommandOutput>;
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableSolutionStacksCommand}
   */
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableSolutionStacksCommandOutput>;
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;
  listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformBranchesCommand}
   */
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformBranchesCommandOutput>;
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;
  listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformVersionsCommand}
   */
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformVersionsCommandOutput>;
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): void;
  listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
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
   * @see {@link RebuildEnvironmentCommand}
   */
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebuildEnvironmentCommandOutput>;
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;
  rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestEnvironmentInfoCommand}
   */
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestEnvironmentInfoCommandOutput>;
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;
  requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link RestartAppServerCommand}
   */
  restartAppServer(
    args: RestartAppServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartAppServerCommandOutput>;
  restartAppServer(
    args: RestartAppServerCommandInput,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;
  restartAppServer(
    args: RestartAppServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveEnvironmentInfoCommand}
   */
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveEnvironmentInfoCommandOutput>;
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;
  retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link SwapEnvironmentCNAMEsCommand}
   */
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwapEnvironmentCNAMEsCommandOutput>;
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;
  swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateEnvironmentCommand}
   */
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateEnvironmentCommandOutput>;
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;
  terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationResourceLifecycleCommand}
   */
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput>;
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;
  updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationVersionCommand}
   */
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationVersionCommandOutput>;
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;
  updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationTemplateCommand}
   */
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationTemplateCommandOutput>;
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;
  updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTagsForResourceCommand}
   */
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTagsForResourceCommandOutput>;
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;
  updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateConfigurationSettingsCommand}
   */
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateConfigurationSettingsCommandOutput>;
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;
  validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS Elastic Beanstalk</fullname>
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
export class ElasticBeanstalk extends ElasticBeanstalkClient implements ElasticBeanstalk {}
createAggregatedClient(commands, ElasticBeanstalk);
