// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ApplicationSignalsClient } from "./ApplicationSignalsClient";
import {
  BatchGetServiceLevelObjectiveBudgetReportCommand,
  BatchGetServiceLevelObjectiveBudgetReportCommandInput,
  BatchGetServiceLevelObjectiveBudgetReportCommandOutput,
} from "./commands/BatchGetServiceLevelObjectiveBudgetReportCommand";
import {
  BatchUpdateExclusionWindowsCommand,
  BatchUpdateExclusionWindowsCommandInput,
  BatchUpdateExclusionWindowsCommandOutput,
} from "./commands/BatchUpdateExclusionWindowsCommand";
import {
  CreateServiceLevelObjectiveCommand,
  CreateServiceLevelObjectiveCommandInput,
  CreateServiceLevelObjectiveCommandOutput,
} from "./commands/CreateServiceLevelObjectiveCommand";
import {
  DeleteGroupingConfigurationCommand,
  DeleteGroupingConfigurationCommandInput,
  DeleteGroupingConfigurationCommandOutput,
} from "./commands/DeleteGroupingConfigurationCommand";
import {
  DeleteServiceLevelObjectiveCommand,
  DeleteServiceLevelObjectiveCommandInput,
  DeleteServiceLevelObjectiveCommandOutput,
} from "./commands/DeleteServiceLevelObjectiveCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  GetServiceLevelObjectiveCommand,
  GetServiceLevelObjectiveCommandInput,
  GetServiceLevelObjectiveCommandOutput,
} from "./commands/GetServiceLevelObjectiveCommand";
import {
  ListAuditFindingsCommand,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "./commands/ListAuditFindingsCommand";
import {
  ListEntityEventsCommand,
  ListEntityEventsCommandInput,
  ListEntityEventsCommandOutput,
} from "./commands/ListEntityEventsCommand";
import {
  ListGroupingAttributeDefinitionsCommand,
  ListGroupingAttributeDefinitionsCommandInput,
  ListGroupingAttributeDefinitionsCommandOutput,
} from "./commands/ListGroupingAttributeDefinitionsCommand";
import {
  ListServiceDependenciesCommand,
  ListServiceDependenciesCommandInput,
  ListServiceDependenciesCommandOutput,
} from "./commands/ListServiceDependenciesCommand";
import {
  ListServiceDependentsCommand,
  ListServiceDependentsCommandInput,
  ListServiceDependentsCommandOutput,
} from "./commands/ListServiceDependentsCommand";
import {
  ListServiceLevelObjectiveExclusionWindowsCommand,
  ListServiceLevelObjectiveExclusionWindowsCommandInput,
  ListServiceLevelObjectiveExclusionWindowsCommandOutput,
} from "./commands/ListServiceLevelObjectiveExclusionWindowsCommand";
import {
  ListServiceLevelObjectivesCommand,
  ListServiceLevelObjectivesCommandInput,
  ListServiceLevelObjectivesCommandOutput,
} from "./commands/ListServiceLevelObjectivesCommand";
import {
  ListServiceOperationsCommand,
  ListServiceOperationsCommandInput,
  ListServiceOperationsCommandOutput,
} from "./commands/ListServiceOperationsCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListServiceStatesCommand,
  ListServiceStatesCommandInput,
  ListServiceStatesCommandOutput,
} from "./commands/ListServiceStatesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutGroupingConfigurationCommand,
  PutGroupingConfigurationCommandInput,
  PutGroupingConfigurationCommandOutput,
} from "./commands/PutGroupingConfigurationCommand";
import {
  StartDiscoveryCommand,
  StartDiscoveryCommandInput,
  StartDiscoveryCommandOutput,
} from "./commands/StartDiscoveryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServiceLevelObjectiveCommand,
  UpdateServiceLevelObjectiveCommandInput,
  UpdateServiceLevelObjectiveCommandOutput,
} from "./commands/UpdateServiceLevelObjectiveCommand";

const commands = {
  BatchGetServiceLevelObjectiveBudgetReportCommand,
  BatchUpdateExclusionWindowsCommand,
  CreateServiceLevelObjectiveCommand,
  DeleteGroupingConfigurationCommand,
  DeleteServiceLevelObjectiveCommand,
  GetServiceCommand,
  GetServiceLevelObjectiveCommand,
  ListAuditFindingsCommand,
  ListEntityEventsCommand,
  ListGroupingAttributeDefinitionsCommand,
  ListServiceDependenciesCommand,
  ListServiceDependentsCommand,
  ListServiceLevelObjectiveExclusionWindowsCommand,
  ListServiceLevelObjectivesCommand,
  ListServiceOperationsCommand,
  ListServicesCommand,
  ListServiceStatesCommand,
  ListTagsForResourceCommand,
  PutGroupingConfigurationCommand,
  StartDiscoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServiceLevelObjectiveCommand,
};

export interface ApplicationSignals {
  /**
   * @see {@link BatchGetServiceLevelObjectiveBudgetReportCommand}
   */
  batchGetServiceLevelObjectiveBudgetReport(
    args: BatchGetServiceLevelObjectiveBudgetReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetServiceLevelObjectiveBudgetReportCommandOutput>;
  batchGetServiceLevelObjectiveBudgetReport(
    args: BatchGetServiceLevelObjectiveBudgetReportCommandInput,
    cb: (err: any, data?: BatchGetServiceLevelObjectiveBudgetReportCommandOutput) => void
  ): void;
  batchGetServiceLevelObjectiveBudgetReport(
    args: BatchGetServiceLevelObjectiveBudgetReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetServiceLevelObjectiveBudgetReportCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateExclusionWindowsCommand}
   */
  batchUpdateExclusionWindows(
    args: BatchUpdateExclusionWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateExclusionWindowsCommandOutput>;
  batchUpdateExclusionWindows(
    args: BatchUpdateExclusionWindowsCommandInput,
    cb: (err: any, data?: BatchUpdateExclusionWindowsCommandOutput) => void
  ): void;
  batchUpdateExclusionWindows(
    args: BatchUpdateExclusionWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateExclusionWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceLevelObjectiveCommand}
   */
  createServiceLevelObjective(
    args: CreateServiceLevelObjectiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceLevelObjectiveCommandOutput>;
  createServiceLevelObjective(
    args: CreateServiceLevelObjectiveCommandInput,
    cb: (err: any, data?: CreateServiceLevelObjectiveCommandOutput) => void
  ): void;
  createServiceLevelObjective(
    args: CreateServiceLevelObjectiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceLevelObjectiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupingConfigurationCommand}
   */
  deleteGroupingConfiguration(): Promise<DeleteGroupingConfigurationCommandOutput>;
  deleteGroupingConfiguration(
    args: DeleteGroupingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupingConfigurationCommandOutput>;
  deleteGroupingConfiguration(
    args: DeleteGroupingConfigurationCommandInput,
    cb: (err: any, data?: DeleteGroupingConfigurationCommandOutput) => void
  ): void;
  deleteGroupingConfiguration(
    args: DeleteGroupingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceLevelObjectiveCommand}
   */
  deleteServiceLevelObjective(
    args: DeleteServiceLevelObjectiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceLevelObjectiveCommandOutput>;
  deleteServiceLevelObjective(
    args: DeleteServiceLevelObjectiveCommandInput,
    cb: (err: any, data?: DeleteServiceLevelObjectiveCommandOutput) => void
  ): void;
  deleteServiceLevelObjective(
    args: DeleteServiceLevelObjectiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceLevelObjectiveCommandOutput) => void
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
   * @see {@link GetServiceLevelObjectiveCommand}
   */
  getServiceLevelObjective(
    args: GetServiceLevelObjectiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLevelObjectiveCommandOutput>;
  getServiceLevelObjective(
    args: GetServiceLevelObjectiveCommandInput,
    cb: (err: any, data?: GetServiceLevelObjectiveCommandOutput) => void
  ): void;
  getServiceLevelObjective(
    args: GetServiceLevelObjectiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLevelObjectiveCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAuditFindingsCommand}
   */
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAuditFindingsCommandOutput>;
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAuditFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityEventsCommand}
   */
  listEntityEvents(
    args: ListEntityEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntityEventsCommandOutput>;
  listEntityEvents(
    args: ListEntityEventsCommandInput,
    cb: (err: any, data?: ListEntityEventsCommandOutput) => void
  ): void;
  listEntityEvents(
    args: ListEntityEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntityEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupingAttributeDefinitionsCommand}
   */
  listGroupingAttributeDefinitions(): Promise<ListGroupingAttributeDefinitionsCommandOutput>;
  listGroupingAttributeDefinitions(
    args: ListGroupingAttributeDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupingAttributeDefinitionsCommandOutput>;
  listGroupingAttributeDefinitions(
    args: ListGroupingAttributeDefinitionsCommandInput,
    cb: (err: any, data?: ListGroupingAttributeDefinitionsCommandOutput) => void
  ): void;
  listGroupingAttributeDefinitions(
    args: ListGroupingAttributeDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupingAttributeDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceDependenciesCommand}
   */
  listServiceDependencies(
    args: ListServiceDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceDependenciesCommandOutput>;
  listServiceDependencies(
    args: ListServiceDependenciesCommandInput,
    cb: (err: any, data?: ListServiceDependenciesCommandOutput) => void
  ): void;
  listServiceDependencies(
    args: ListServiceDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceDependentsCommand}
   */
  listServiceDependents(
    args: ListServiceDependentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceDependentsCommandOutput>;
  listServiceDependents(
    args: ListServiceDependentsCommandInput,
    cb: (err: any, data?: ListServiceDependentsCommandOutput) => void
  ): void;
  listServiceDependents(
    args: ListServiceDependentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceDependentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceLevelObjectiveExclusionWindowsCommand}
   */
  listServiceLevelObjectiveExclusionWindows(
    args: ListServiceLevelObjectiveExclusionWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceLevelObjectiveExclusionWindowsCommandOutput>;
  listServiceLevelObjectiveExclusionWindows(
    args: ListServiceLevelObjectiveExclusionWindowsCommandInput,
    cb: (err: any, data?: ListServiceLevelObjectiveExclusionWindowsCommandOutput) => void
  ): void;
  listServiceLevelObjectiveExclusionWindows(
    args: ListServiceLevelObjectiveExclusionWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceLevelObjectiveExclusionWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceLevelObjectivesCommand}
   */
  listServiceLevelObjectives(): Promise<ListServiceLevelObjectivesCommandOutput>;
  listServiceLevelObjectives(
    args: ListServiceLevelObjectivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceLevelObjectivesCommandOutput>;
  listServiceLevelObjectives(
    args: ListServiceLevelObjectivesCommandInput,
    cb: (err: any, data?: ListServiceLevelObjectivesCommandOutput) => void
  ): void;
  listServiceLevelObjectives(
    args: ListServiceLevelObjectivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceLevelObjectivesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceOperationsCommand}
   */
  listServiceOperations(
    args: ListServiceOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceOperationsCommandOutput>;
  listServiceOperations(
    args: ListServiceOperationsCommandInput,
    cb: (err: any, data?: ListServiceOperationsCommandOutput) => void
  ): void;
  listServiceOperations(
    args: ListServiceOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
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
   * @see {@link ListServiceStatesCommand}
   */
  listServiceStates(
    args: ListServiceStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceStatesCommandOutput>;
  listServiceStates(
    args: ListServiceStatesCommandInput,
    cb: (err: any, data?: ListServiceStatesCommandOutput) => void
  ): void;
  listServiceStates(
    args: ListServiceStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceStatesCommandOutput) => void
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
   * @see {@link PutGroupingConfigurationCommand}
   */
  putGroupingConfiguration(
    args: PutGroupingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupingConfigurationCommandOutput>;
  putGroupingConfiguration(
    args: PutGroupingConfigurationCommandInput,
    cb: (err: any, data?: PutGroupingConfigurationCommandOutput) => void
  ): void;
  putGroupingConfiguration(
    args: PutGroupingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDiscoveryCommand}
   */
  startDiscovery(): Promise<StartDiscoveryCommandOutput>;
  startDiscovery(
    args: StartDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDiscoveryCommandOutput>;
  startDiscovery(
    args: StartDiscoveryCommandInput,
    cb: (err: any, data?: StartDiscoveryCommandOutput) => void
  ): void;
  startDiscovery(
    args: StartDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDiscoveryCommandOutput) => void
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
   * @see {@link UpdateServiceLevelObjectiveCommand}
   */
  updateServiceLevelObjective(
    args: UpdateServiceLevelObjectiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceLevelObjectiveCommandOutput>;
  updateServiceLevelObjective(
    args: UpdateServiceLevelObjectiveCommandInput,
    cb: (err: any, data?: UpdateServiceLevelObjectiveCommandOutput) => void
  ): void;
  updateServiceLevelObjective(
    args: UpdateServiceLevelObjectiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceLevelObjectiveCommandOutput) => void
  ): void;
}

/**
 * <p>Use CloudWatch Application Signals for comprehensive observability of your cloud-based applications. It enables real-time service health dashboards and helps you track long-term performance trends against your business goals. The application-centric view provides you with unified visibility across your applications, services, and dependencies, so you can proactively monitor and efficiently triage any issues that may arise, ensuring optimal customer experience.</p> <p>Application Signals provides the following benefits:</p> <ul> <li> <p>Automatically collect metrics and traces from your applications, and display key metrics such as call volume, availability, latency, faults, and errors. </p> </li> <li> <p>Create and monitor service level objectives (SLOs). </p> </li> <li> <p>See a map of your application topology that Application Signals automatically discovers, that gives you a visual representation of your applications, dependencies, and their connectivity.</p> </li> </ul> <p>Application Signals works with CloudWatch RUM, CloudWatch Synthetics canaries, and Amazon Web Services Service Catalog AppRegistry, to display your client pages, Synthetics canaries, and application names within dashboards and maps.</p>
 * @public
 */
export class ApplicationSignals extends ApplicationSignalsClient implements ApplicationSignals {}
createAggregatedClient(commands, ApplicationSignals);
