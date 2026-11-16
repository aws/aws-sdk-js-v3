// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ConfigureTagsCommandInput,
  type ConfigureTagsCommandOutput,
  ConfigureTagsCommand,
} from "./commands/ConfigureTagsCommand";
import {
  type ConfigureTagsForOrganizationCommandInput,
  type ConfigureTagsForOrganizationCommandOutput,
  ConfigureTagsForOrganizationCommand,
} from "./commands/ConfigureTagsForOrganizationCommand";
import {
  type DescribeAffectedAccountsForOrganizationCommandInput,
  type DescribeAffectedAccountsForOrganizationCommandOutput,
  DescribeAffectedAccountsForOrganizationCommand,
} from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import {
  type DescribeAffectedEntitiesCommandInput,
  type DescribeAffectedEntitiesCommandOutput,
  DescribeAffectedEntitiesCommand,
} from "./commands/DescribeAffectedEntitiesCommand";
import {
  type DescribeAffectedEntitiesForOrganizationCommandInput,
  type DescribeAffectedEntitiesForOrganizationCommandOutput,
  DescribeAffectedEntitiesForOrganizationCommand,
} from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import {
  type DescribeEntityAggregatesCommandInput,
  type DescribeEntityAggregatesCommandOutput,
  DescribeEntityAggregatesCommand,
} from "./commands/DescribeEntityAggregatesCommand";
import {
  type DescribeEntityAggregatesForOrganizationCommandInput,
  type DescribeEntityAggregatesForOrganizationCommandOutput,
  DescribeEntityAggregatesForOrganizationCommand,
} from "./commands/DescribeEntityAggregatesForOrganizationCommand";
import {
  type DescribeEventAggregatesCommandInput,
  type DescribeEventAggregatesCommandOutput,
  DescribeEventAggregatesCommand,
} from "./commands/DescribeEventAggregatesCommand";
import {
  type DescribeEventDetailsCommandInput,
  type DescribeEventDetailsCommandOutput,
  DescribeEventDetailsCommand,
} from "./commands/DescribeEventDetailsCommand";
import {
  type DescribeEventDetailsForOrganizationCommandInput,
  type DescribeEventDetailsForOrganizationCommandOutput,
  DescribeEventDetailsForOrganizationCommand,
} from "./commands/DescribeEventDetailsForOrganizationCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeEventsForOrganizationCommandInput,
  type DescribeEventsForOrganizationCommandOutput,
  DescribeEventsForOrganizationCommand,
} from "./commands/DescribeEventsForOrganizationCommand";
import {
  type DescribeEventTypesCommandInput,
  type DescribeEventTypesCommandOutput,
  DescribeEventTypesCommand,
} from "./commands/DescribeEventTypesCommand";
import {
  type DescribeHealthServiceStatusForOrganizationCommandInput,
  type DescribeHealthServiceStatusForOrganizationCommandOutput,
  DescribeHealthServiceStatusForOrganizationCommand,
} from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import {
  type DescribeServiceLifecycleCommandInput,
  type DescribeServiceLifecycleCommandOutput,
  DescribeServiceLifecycleCommand,
} from "./commands/DescribeServiceLifecycleCommand";
import {
  type DescribeTagKeysCommandInput,
  type DescribeTagKeysCommandOutput,
  DescribeTagKeysCommand,
} from "./commands/DescribeTagKeysCommand";
import {
  type DescribeTagKeysForOrganizationCommandInput,
  type DescribeTagKeysForOrganizationCommandOutput,
  DescribeTagKeysForOrganizationCommand,
} from "./commands/DescribeTagKeysForOrganizationCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DescribeTagsForOrganizationCommandInput,
  type DescribeTagsForOrganizationCommandOutput,
  DescribeTagsForOrganizationCommand,
} from "./commands/DescribeTagsForOrganizationCommand";
import {
  type DescribeTagsOnboardingStatusCommandInput,
  type DescribeTagsOnboardingStatusCommandOutput,
  DescribeTagsOnboardingStatusCommand,
} from "./commands/DescribeTagsOnboardingStatusCommand";
import {
  type DescribeTagsOnboardingStatusForOrganizationCommandInput,
  type DescribeTagsOnboardingStatusForOrganizationCommandOutput,
  DescribeTagsOnboardingStatusForOrganizationCommand,
} from "./commands/DescribeTagsOnboardingStatusForOrganizationCommand";
import {
  type DisableHealthServiceAccessForOrganizationCommandInput,
  type DisableHealthServiceAccessForOrganizationCommandOutput,
  DisableHealthServiceAccessForOrganizationCommand,
} from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import {
  type DisableTagsCommandInput,
  type DisableTagsCommandOutput,
  DisableTagsCommand,
} from "./commands/DisableTagsCommand";
import {
  type DisableTagsForOrganizationCommandInput,
  type DisableTagsForOrganizationCommandOutput,
  DisableTagsForOrganizationCommand,
} from "./commands/DisableTagsForOrganizationCommand";
import {
  type EnableHealthServiceAccessForOrganizationCommandInput,
  type EnableHealthServiceAccessForOrganizationCommandOutput,
  EnableHealthServiceAccessForOrganizationCommand,
} from "./commands/EnableHealthServiceAccessForOrganizationCommand";
import {
  type EnableTagsCommandInput,
  type EnableTagsCommandOutput,
  EnableTagsCommand,
} from "./commands/EnableTagsCommand";
import {
  type EnableTagsForOrganizationCommandInput,
  type EnableTagsForOrganizationCommandOutput,
  EnableTagsForOrganizationCommand,
} from "./commands/EnableTagsForOrganizationCommand";
import { HealthClient } from "./HealthClient";
import {
  paginateDescribeAffectedAccountsForOrganization,
} from "./pagination/DescribeAffectedAccountsForOrganizationPaginator";
import {
  paginateDescribeAffectedEntitiesForOrganization,
} from "./pagination/DescribeAffectedEntitiesForOrganizationPaginator";
import { paginateDescribeAffectedEntities } from "./pagination/DescribeAffectedEntitiesPaginator";
import { paginateDescribeEventAggregates } from "./pagination/DescribeEventAggregatesPaginator";
import { paginateDescribeEventsForOrganization } from "./pagination/DescribeEventsForOrganizationPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeEventTypes } from "./pagination/DescribeEventTypesPaginator";
import { paginateDescribeServiceLifecycle } from "./pagination/DescribeServiceLifecyclePaginator";
import { paginateDescribeTagsForOrganization } from "./pagination/DescribeTagsForOrganizationPaginator";
import { paginateDescribeTags } from "./pagination/DescribeTagsPaginator";

const commands = {
  ConfigureTagsCommand,
  ConfigureTagsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeEntityAggregatesCommand,
  DescribeEntityAggregatesForOrganizationCommand,
  DescribeEventAggregatesCommand,
  DescribeEventDetailsCommand,
  DescribeEventDetailsForOrganizationCommand,
  DescribeEventsCommand,
  DescribeEventsForOrganizationCommand,
  DescribeEventTypesCommand,
  DescribeHealthServiceStatusForOrganizationCommand,
  DescribeServiceLifecycleCommand,
  DescribeTagKeysCommand,
  DescribeTagKeysForOrganizationCommand,
  DescribeTagsCommand,
  DescribeTagsForOrganizationCommand,
  DescribeTagsOnboardingStatusCommand,
  DescribeTagsOnboardingStatusForOrganizationCommand,
  DisableHealthServiceAccessForOrganizationCommand,
  DisableTagsCommand,
  DisableTagsForOrganizationCommand,
  EnableHealthServiceAccessForOrganizationCommand,
  EnableTagsCommand,
  EnableTagsForOrganizationCommand,
};
const paginators = {
  paginateDescribeAffectedAccountsForOrganization,
  paginateDescribeAffectedEntities,
  paginateDescribeAffectedEntitiesForOrganization,
  paginateDescribeEventAggregates,
  paginateDescribeEvents,
  paginateDescribeEventsForOrganization,
  paginateDescribeEventTypes,
  paginateDescribeServiceLifecycle,
  paginateDescribeTags,
  paginateDescribeTagsForOrganization,
};

/**
 * @public
 */
export interface HealthRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Health {
  /**
   * @see {@link ConfigureTagsCommand}
   */
  configureTags(
    args: ConfigureTagsCommandInput,
    options?: HealthRequestOptions
  ): Promise<ConfigureTagsCommandOutput>;
  configureTags(
    args: ConfigureTagsCommandInput,
    cb: (err: any, data?: ConfigureTagsCommandOutput) => void
  ): void;
  configureTags(
    args: ConfigureTagsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: ConfigureTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureTagsForOrganizationCommand}
   */
  configureTagsForOrganization(
    args: ConfigureTagsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<ConfigureTagsForOrganizationCommandOutput>;
  configureTagsForOrganization(
    args: ConfigureTagsForOrganizationCommandInput,
    cb: (err: any, data?: ConfigureTagsForOrganizationCommandOutput) => void
  ): void;
  configureTagsForOrganization(
    args: ConfigureTagsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: ConfigureTagsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedAccountsForOrganizationCommand}
   */
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput>;
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;
  describeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeAffectedAccountsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedEntitiesCommand}
   */
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeAffectedEntitiesCommandOutput>;
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;
  describeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedEntitiesForOrganizationCommand}
   */
  describeAffectedEntitiesForOrganization(): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput>;
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;
  describeAffectedEntitiesForOrganization(
    args: DescribeAffectedEntitiesForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeAffectedEntitiesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityAggregatesCommand}
   */
  describeEntityAggregates(): Promise<DescribeEntityAggregatesCommandOutput>;
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEntityAggregatesCommandOutput>;
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;
  describeEntityAggregates(
    args: DescribeEntityAggregatesCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEntityAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityAggregatesForOrganizationCommand}
   */
  describeEntityAggregatesForOrganization(
    args: DescribeEntityAggregatesForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEntityAggregatesForOrganizationCommandOutput>;
  describeEntityAggregatesForOrganization(
    args: DescribeEntityAggregatesForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEntityAggregatesForOrganizationCommandOutput) => void
  ): void;
  describeEntityAggregatesForOrganization(
    args: DescribeEntityAggregatesForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEntityAggregatesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventAggregatesCommand}
   */
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventAggregatesCommandOutput>;
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;
  describeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventDetailsCommand}
   */
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventDetailsCommandOutput>;
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;
  describeEventDetails(
    args: DescribeEventDetailsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventDetailsForOrganizationCommand}
   */
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput>;
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;
  describeEventDetailsForOrganization(
    args: DescribeEventDetailsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventDetailsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsForOrganizationCommand}
   */
  describeEventsForOrganization(): Promise<DescribeEventsForOrganizationCommandOutput>;
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventsForOrganizationCommandOutput>;
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;
  describeEventsForOrganization(
    args: DescribeEventsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventTypesCommand}
   */
  describeEventTypes(): Promise<DescribeEventTypesCommandOutput>;
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeEventTypesCommandOutput>;
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;
  describeEventTypes(
    args: DescribeEventTypesCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHealthServiceStatusForOrganizationCommand}
   */
  describeHealthServiceStatusForOrganization(): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput>;
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;
  describeHealthServiceStatusForOrganization(
    args: DescribeHealthServiceStatusForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeHealthServiceStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceLifecycleCommand}
   */
  describeServiceLifecycle(): Promise<DescribeServiceLifecycleCommandOutput>;
  describeServiceLifecycle(
    args: DescribeServiceLifecycleCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeServiceLifecycleCommandOutput>;
  describeServiceLifecycle(
    args: DescribeServiceLifecycleCommandInput,
    cb: (err: any, data?: DescribeServiceLifecycleCommandOutput) => void
  ): void;
  describeServiceLifecycle(
    args: DescribeServiceLifecycleCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeServiceLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagKeysCommand}
   */
  describeTagKeys(): Promise<DescribeTagKeysCommandOutput>;
  describeTagKeys(
    args: DescribeTagKeysCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagKeysCommandOutput>;
  describeTagKeys(
    args: DescribeTagKeysCommandInput,
    cb: (err: any, data?: DescribeTagKeysCommandOutput) => void
  ): void;
  describeTagKeys(
    args: DescribeTagKeysCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagKeysForOrganizationCommand}
   */
  describeTagKeysForOrganization(): Promise<DescribeTagKeysForOrganizationCommandOutput>;
  describeTagKeysForOrganization(
    args: DescribeTagKeysForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagKeysForOrganizationCommandOutput>;
  describeTagKeysForOrganization(
    args: DescribeTagKeysForOrganizationCommandInput,
    cb: (err: any, data?: DescribeTagKeysForOrganizationCommandOutput) => void
  ): void;
  describeTagKeysForOrganization(
    args: DescribeTagKeysForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagKeysForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsForOrganizationCommand}
   */
  describeTagsForOrganization(): Promise<DescribeTagsForOrganizationCommandOutput>;
  describeTagsForOrganization(
    args: DescribeTagsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagsForOrganizationCommandOutput>;
  describeTagsForOrganization(
    args: DescribeTagsForOrganizationCommandInput,
    cb: (err: any, data?: DescribeTagsForOrganizationCommandOutput) => void
  ): void;
  describeTagsForOrganization(
    args: DescribeTagsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsOnboardingStatusCommand}
   */
  describeTagsOnboardingStatus(): Promise<DescribeTagsOnboardingStatusCommandOutput>;
  describeTagsOnboardingStatus(
    args: DescribeTagsOnboardingStatusCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagsOnboardingStatusCommandOutput>;
  describeTagsOnboardingStatus(
    args: DescribeTagsOnboardingStatusCommandInput,
    cb: (err: any, data?: DescribeTagsOnboardingStatusCommandOutput) => void
  ): void;
  describeTagsOnboardingStatus(
    args: DescribeTagsOnboardingStatusCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagsOnboardingStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsOnboardingStatusForOrganizationCommand}
   */
  describeTagsOnboardingStatusForOrganization(): Promise<DescribeTagsOnboardingStatusForOrganizationCommandOutput>;
  describeTagsOnboardingStatusForOrganization(
    args: DescribeTagsOnboardingStatusForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DescribeTagsOnboardingStatusForOrganizationCommandOutput>;
  describeTagsOnboardingStatusForOrganization(
    args: DescribeTagsOnboardingStatusForOrganizationCommandInput,
    cb: (err: any, data?: DescribeTagsOnboardingStatusForOrganizationCommandOutput) => void
  ): void;
  describeTagsOnboardingStatusForOrganization(
    args: DescribeTagsOnboardingStatusForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DescribeTagsOnboardingStatusForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableHealthServiceAccessForOrganizationCommand}
   */
  disableHealthServiceAccessForOrganization(): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DisableHealthServiceAccessForOrganizationCommandOutput>;
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  disableHealthServiceAccessForOrganization(
    args: DisableHealthServiceAccessForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DisableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTagsCommand}
   */
  disableTags(): Promise<DisableTagsCommandOutput>;
  disableTags(
    args: DisableTagsCommandInput,
    options?: HealthRequestOptions
  ): Promise<DisableTagsCommandOutput>;
  disableTags(
    args: DisableTagsCommandInput,
    cb: (err: any, data?: DisableTagsCommandOutput) => void
  ): void;
  disableTags(
    args: DisableTagsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DisableTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableTagsForOrganizationCommand}
   */
  disableTagsForOrganization(): Promise<DisableTagsForOrganizationCommandOutput>;
  disableTagsForOrganization(
    args: DisableTagsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<DisableTagsForOrganizationCommandOutput>;
  disableTagsForOrganization(
    args: DisableTagsForOrganizationCommandInput,
    cb: (err: any, data?: DisableTagsForOrganizationCommandOutput) => void
  ): void;
  disableTagsForOrganization(
    args: DisableTagsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: DisableTagsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableHealthServiceAccessForOrganizationCommand}
   */
  enableHealthServiceAccessForOrganization(): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<EnableHealthServiceAccessForOrganizationCommandOutput>;
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;
  enableHealthServiceAccessForOrganization(
    args: EnableHealthServiceAccessForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: EnableHealthServiceAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTagsCommand}
   */
  enableTags(): Promise<EnableTagsCommandOutput>;
  enableTags(
    args: EnableTagsCommandInput,
    options?: HealthRequestOptions
  ): Promise<EnableTagsCommandOutput>;
  enableTags(
    args: EnableTagsCommandInput,
    cb: (err: any, data?: EnableTagsCommandOutput) => void
  ): void;
  enableTags(
    args: EnableTagsCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: EnableTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableTagsForOrganizationCommand}
   */
  enableTagsForOrganization(): Promise<EnableTagsForOrganizationCommandOutput>;
  enableTagsForOrganization(
    args: EnableTagsForOrganizationCommandInput,
    options?: HealthRequestOptions
  ): Promise<EnableTagsForOrganizationCommandOutput>;
  enableTagsForOrganization(
    args: EnableTagsForOrganizationCommandInput,
    cb: (err: any, data?: EnableTagsForOrganizationCommandOutput) => void
  ): void;
  enableTagsForOrganization(
    args: EnableTagsForOrganizationCommandInput,
    options: HealthRequestOptions,
    cb: (err: any, data?: EnableTagsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAffectedAccountsForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAffectedAccountsForOrganizationCommandOutput}.
   */
  paginateDescribeAffectedAccountsForOrganization(
    args: DescribeAffectedAccountsForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAffectedAccountsForOrganizationCommandOutput>;

  /**
   * @see {@link DescribeAffectedEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAffectedEntitiesCommandOutput}.
   */
  paginateDescribeAffectedEntities(
    args: DescribeAffectedEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAffectedEntitiesCommandOutput>;

  /**
   * @see {@link DescribeAffectedEntitiesForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAffectedEntitiesForOrganizationCommandOutput}.
   */
  paginateDescribeAffectedEntitiesForOrganization(
    args?: DescribeAffectedEntitiesForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAffectedEntitiesForOrganizationCommandOutput>;

  /**
   * @see {@link DescribeEventAggregatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventAggregatesCommandOutput}.
   */
  paginateDescribeEventAggregates(
    args: DescribeEventAggregatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventAggregatesCommandOutput>;

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
   * @see {@link DescribeEventsForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventsForOrganizationCommandOutput}.
   */
  paginateDescribeEventsForOrganization(
    args?: DescribeEventsForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventsForOrganizationCommandOutput>;

  /**
   * @see {@link DescribeEventTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventTypesCommandOutput}.
   */
  paginateDescribeEventTypes(
    args?: DescribeEventTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventTypesCommandOutput>;

  /**
   * @see {@link DescribeServiceLifecycleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeServiceLifecycleCommandOutput}.
   */
  paginateDescribeServiceLifecycle(
    args?: DescribeServiceLifecycleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeServiceLifecycleCommandOutput>;

  /**
   * @see {@link DescribeTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTagsCommandOutput}.
   */
  paginateDescribeTags(
    args?: DescribeTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTagsCommandOutput>;

  /**
   * @see {@link DescribeTagsForOrganizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTagsForOrganizationCommandOutput}.
   */
  paginateDescribeTagsForOrganization(
    args?: DescribeTagsForOrganizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTagsForOrganizationCommandOutput>;
}

/**
 * <fullname>Health</fullname>
 *          <p>The Health API provides access to the Health information that appears in the
 *             <a href="https://health.aws.amazon.com/health/home">Health Dashboard</a>. You can use
 *          the API operations to get information about events that might affect your Amazon Web Services services and resources.</p>
 *          <p>You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Health API with a Business, Enterprise On-Ramp, or Enterprise Support plan. If you call the Health API from an
 *          Amazon Web Services account that isn't enrolled in one of these plans, then you receive a
 *          <code>SubscriptionRequiredException</code> error.</p>
 *          <p>For API access, you need an access key ID and a secret access key. Use temporary
 *          credentials instead of long-term access keys when possible. Temporary credentials include
 *          an access key ID, a secret access key, and a security token that indicates when the
 *          credentials expire. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best practices for managing
 *             Amazon Web Services access keys</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to call the
 *          Health API operations. Health supports a multi-Region application architecture
 *          and has two regional endpoints in an active-passive configuration. You can use the high
 *          availability endpoint example to determine which Amazon Web Services Region is active, so that you can
 *          get the latest information from the API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health
 *             API</a> in the <i>Health User Guide</i>.</p>
 *          <p>For authentication of requests, Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>If your Amazon Web Services account is part of Organizations, you can use the Health organizational
 *          view feature. This feature provides a centralized view of Health events across all
 *          accounts in your organization. You can aggregate Health events in real time to
 *          identify accounts in your organization that are affected by an operational event or get
 *          notified of security vulnerabilities. Use the organizational view API operations to enable
 *          this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             Health events</a> in the <i>Health User Guide</i>.</p>
 *          <note>
 *             <p>When you use the Health API operations to return Health events, see the
 *             following recommendations:</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return Health
 *                   events that are public or account-specific.</p>
 *                </li>
 *                <li>
 *                   <p>Use pagination to view all events from the response. For example, if you call
 *                   the <code>DescribeEventsForOrganization</code> operation to get all events in your
 *                   organization, you might receive several page results. Specify the
 *                      <code>nextToken</code> in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @public
 */
export class Health extends HealthClient implements Health {}
createAggregatedClient(commands, Health, { paginators });
