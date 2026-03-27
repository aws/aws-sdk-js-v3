// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateChannelCommandInput,
  type AssociateChannelCommandOutput,
  AssociateChannelCommand,
} from "./commands/AssociateChannelCommand";
import {
  type AssociateManagedNotificationAccountContactCommandInput,
  type AssociateManagedNotificationAccountContactCommandOutput,
  AssociateManagedNotificationAccountContactCommand,
} from "./commands/AssociateManagedNotificationAccountContactCommand";
import {
  type AssociateManagedNotificationAdditionalChannelCommandInput,
  type AssociateManagedNotificationAdditionalChannelCommandOutput,
  AssociateManagedNotificationAdditionalChannelCommand,
} from "./commands/AssociateManagedNotificationAdditionalChannelCommand";
import {
  type AssociateOrganizationalUnitCommandInput,
  type AssociateOrganizationalUnitCommandOutput,
  AssociateOrganizationalUnitCommand,
} from "./commands/AssociateOrganizationalUnitCommand";
import {
  type CreateEventRuleCommandInput,
  type CreateEventRuleCommandOutput,
  CreateEventRuleCommand,
} from "./commands/CreateEventRuleCommand";
import {
  type CreateNotificationConfigurationCommandInput,
  type CreateNotificationConfigurationCommandOutput,
  CreateNotificationConfigurationCommand,
} from "./commands/CreateNotificationConfigurationCommand";
import {
  type DeleteEventRuleCommandInput,
  type DeleteEventRuleCommandOutput,
  DeleteEventRuleCommand,
} from "./commands/DeleteEventRuleCommand";
import {
  type DeleteNotificationConfigurationCommandInput,
  type DeleteNotificationConfigurationCommandOutput,
  DeleteNotificationConfigurationCommand,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  type DeregisterNotificationHubCommandInput,
  type DeregisterNotificationHubCommandOutput,
  DeregisterNotificationHubCommand,
} from "./commands/DeregisterNotificationHubCommand";
import {
  type DisableNotificationsAccessForOrganizationCommandInput,
  type DisableNotificationsAccessForOrganizationCommandOutput,
  DisableNotificationsAccessForOrganizationCommand,
} from "./commands/DisableNotificationsAccessForOrganizationCommand";
import {
  type DisassociateChannelCommandInput,
  type DisassociateChannelCommandOutput,
  DisassociateChannelCommand,
} from "./commands/DisassociateChannelCommand";
import {
  type DisassociateManagedNotificationAccountContactCommandInput,
  type DisassociateManagedNotificationAccountContactCommandOutput,
  DisassociateManagedNotificationAccountContactCommand,
} from "./commands/DisassociateManagedNotificationAccountContactCommand";
import {
  type DisassociateManagedNotificationAdditionalChannelCommandInput,
  type DisassociateManagedNotificationAdditionalChannelCommandOutput,
  DisassociateManagedNotificationAdditionalChannelCommand,
} from "./commands/DisassociateManagedNotificationAdditionalChannelCommand";
import {
  type DisassociateOrganizationalUnitCommandInput,
  type DisassociateOrganizationalUnitCommandOutput,
  DisassociateOrganizationalUnitCommand,
} from "./commands/DisassociateOrganizationalUnitCommand";
import {
  type EnableNotificationsAccessForOrganizationCommandInput,
  type EnableNotificationsAccessForOrganizationCommandOutput,
  EnableNotificationsAccessForOrganizationCommand,
} from "./commands/EnableNotificationsAccessForOrganizationCommand";
import {
  type GetEventRuleCommandInput,
  type GetEventRuleCommandOutput,
  GetEventRuleCommand,
} from "./commands/GetEventRuleCommand";
import {
  type GetManagedNotificationChildEventCommandInput,
  type GetManagedNotificationChildEventCommandOutput,
  GetManagedNotificationChildEventCommand,
} from "./commands/GetManagedNotificationChildEventCommand";
import {
  type GetManagedNotificationConfigurationCommandInput,
  type GetManagedNotificationConfigurationCommandOutput,
  GetManagedNotificationConfigurationCommand,
} from "./commands/GetManagedNotificationConfigurationCommand";
import {
  type GetManagedNotificationEventCommandInput,
  type GetManagedNotificationEventCommandOutput,
  GetManagedNotificationEventCommand,
} from "./commands/GetManagedNotificationEventCommand";
import {
  type GetNotificationConfigurationCommandInput,
  type GetNotificationConfigurationCommandOutput,
  GetNotificationConfigurationCommand,
} from "./commands/GetNotificationConfigurationCommand";
import {
  type GetNotificationEventCommandInput,
  type GetNotificationEventCommandOutput,
  GetNotificationEventCommand,
} from "./commands/GetNotificationEventCommand";
import {
  type GetNotificationsAccessForOrganizationCommandInput,
  type GetNotificationsAccessForOrganizationCommandOutput,
  GetNotificationsAccessForOrganizationCommand,
} from "./commands/GetNotificationsAccessForOrganizationCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListEventRulesCommandInput,
  type ListEventRulesCommandOutput,
  ListEventRulesCommand,
} from "./commands/ListEventRulesCommand";
import {
  type ListManagedNotificationChannelAssociationsCommandInput,
  type ListManagedNotificationChannelAssociationsCommandOutput,
  ListManagedNotificationChannelAssociationsCommand,
} from "./commands/ListManagedNotificationChannelAssociationsCommand";
import {
  type ListManagedNotificationChildEventsCommandInput,
  type ListManagedNotificationChildEventsCommandOutput,
  ListManagedNotificationChildEventsCommand,
} from "./commands/ListManagedNotificationChildEventsCommand";
import {
  type ListManagedNotificationConfigurationsCommandInput,
  type ListManagedNotificationConfigurationsCommandOutput,
  ListManagedNotificationConfigurationsCommand,
} from "./commands/ListManagedNotificationConfigurationsCommand";
import {
  type ListManagedNotificationEventsCommandInput,
  type ListManagedNotificationEventsCommandOutput,
  ListManagedNotificationEventsCommand,
} from "./commands/ListManagedNotificationEventsCommand";
import {
  type ListMemberAccountsCommandInput,
  type ListMemberAccountsCommandOutput,
  ListMemberAccountsCommand,
} from "./commands/ListMemberAccountsCommand";
import {
  type ListNotificationConfigurationsCommandInput,
  type ListNotificationConfigurationsCommandOutput,
  ListNotificationConfigurationsCommand,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  type ListNotificationEventsCommandInput,
  type ListNotificationEventsCommandOutput,
  ListNotificationEventsCommand,
} from "./commands/ListNotificationEventsCommand";
import {
  type ListNotificationHubsCommandInput,
  type ListNotificationHubsCommandOutput,
  ListNotificationHubsCommand,
} from "./commands/ListNotificationHubsCommand";
import {
  type ListOrganizationalUnitsCommandInput,
  type ListOrganizationalUnitsCommandOutput,
  ListOrganizationalUnitsCommand,
} from "./commands/ListOrganizationalUnitsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RegisterNotificationHubCommandInput,
  type RegisterNotificationHubCommandOutput,
  RegisterNotificationHubCommand,
} from "./commands/RegisterNotificationHubCommand";
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
  type UpdateEventRuleCommandInput,
  type UpdateEventRuleCommandOutput,
  UpdateEventRuleCommand,
} from "./commands/UpdateEventRuleCommand";
import {
  type UpdateNotificationConfigurationCommandInput,
  type UpdateNotificationConfigurationCommandOutput,
  UpdateNotificationConfigurationCommand,
} from "./commands/UpdateNotificationConfigurationCommand";
import { NotificationsClient } from "./NotificationsClient";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListEventRules } from "./pagination/ListEventRulesPaginator";
import {
  paginateListManagedNotificationChannelAssociations,
} from "./pagination/ListManagedNotificationChannelAssociationsPaginator";
import { paginateListManagedNotificationChildEvents } from "./pagination/ListManagedNotificationChildEventsPaginator";
import {
  paginateListManagedNotificationConfigurations,
} from "./pagination/ListManagedNotificationConfigurationsPaginator";
import { paginateListManagedNotificationEvents } from "./pagination/ListManagedNotificationEventsPaginator";
import { paginateListMemberAccounts } from "./pagination/ListMemberAccountsPaginator";
import { paginateListNotificationConfigurations } from "./pagination/ListNotificationConfigurationsPaginator";
import { paginateListNotificationEvents } from "./pagination/ListNotificationEventsPaginator";
import { paginateListNotificationHubs } from "./pagination/ListNotificationHubsPaginator";
import { paginateListOrganizationalUnits } from "./pagination/ListOrganizationalUnitsPaginator";

const commands = {
  AssociateChannelCommand,
  AssociateManagedNotificationAccountContactCommand,
  AssociateManagedNotificationAdditionalChannelCommand,
  AssociateOrganizationalUnitCommand,
  CreateEventRuleCommand,
  CreateNotificationConfigurationCommand,
  DeleteEventRuleCommand,
  DeleteNotificationConfigurationCommand,
  DeregisterNotificationHubCommand,
  DisableNotificationsAccessForOrganizationCommand,
  DisassociateChannelCommand,
  DisassociateManagedNotificationAccountContactCommand,
  DisassociateManagedNotificationAdditionalChannelCommand,
  DisassociateOrganizationalUnitCommand,
  EnableNotificationsAccessForOrganizationCommand,
  GetEventRuleCommand,
  GetManagedNotificationChildEventCommand,
  GetManagedNotificationConfigurationCommand,
  GetManagedNotificationEventCommand,
  GetNotificationConfigurationCommand,
  GetNotificationEventCommand,
  GetNotificationsAccessForOrganizationCommand,
  ListChannelsCommand,
  ListEventRulesCommand,
  ListManagedNotificationChannelAssociationsCommand,
  ListManagedNotificationChildEventsCommand,
  ListManagedNotificationConfigurationsCommand,
  ListManagedNotificationEventsCommand,
  ListMemberAccountsCommand,
  ListNotificationConfigurationsCommand,
  ListNotificationEventsCommand,
  ListNotificationHubsCommand,
  ListOrganizationalUnitsCommand,
  ListTagsForResourceCommand,
  RegisterNotificationHubCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventRuleCommand,
  UpdateNotificationConfigurationCommand,
};
const paginators = {
  paginateListChannels,
  paginateListEventRules,
  paginateListManagedNotificationChannelAssociations,
  paginateListManagedNotificationChildEvents,
  paginateListManagedNotificationConfigurations,
  paginateListManagedNotificationEvents,
  paginateListMemberAccounts,
  paginateListNotificationConfigurations,
  paginateListNotificationEvents,
  paginateListNotificationHubs,
  paginateListOrganizationalUnits,
};

export interface Notifications {
  /**
   * @see {@link AssociateChannelCommand}
   */
  associateChannel(
    args: AssociateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateChannelCommandOutput>;
  associateChannel(
    args: AssociateChannelCommandInput,
    cb: (err: any, data?: AssociateChannelCommandOutput) => void
  ): void;
  associateChannel(
    args: AssociateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateManagedNotificationAccountContactCommand}
   */
  associateManagedNotificationAccountContact(
    args: AssociateManagedNotificationAccountContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateManagedNotificationAccountContactCommandOutput>;
  associateManagedNotificationAccountContact(
    args: AssociateManagedNotificationAccountContactCommandInput,
    cb: (err: any, data?: AssociateManagedNotificationAccountContactCommandOutput) => void
  ): void;
  associateManagedNotificationAccountContact(
    args: AssociateManagedNotificationAccountContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateManagedNotificationAccountContactCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateManagedNotificationAdditionalChannelCommand}
   */
  associateManagedNotificationAdditionalChannel(
    args: AssociateManagedNotificationAdditionalChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateManagedNotificationAdditionalChannelCommandOutput>;
  associateManagedNotificationAdditionalChannel(
    args: AssociateManagedNotificationAdditionalChannelCommandInput,
    cb: (err: any, data?: AssociateManagedNotificationAdditionalChannelCommandOutput) => void
  ): void;
  associateManagedNotificationAdditionalChannel(
    args: AssociateManagedNotificationAdditionalChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateManagedNotificationAdditionalChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateOrganizationalUnitCommand}
   */
  associateOrganizationalUnit(
    args: AssociateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOrganizationalUnitCommandOutput>;
  associateOrganizationalUnit(
    args: AssociateOrganizationalUnitCommandInput,
    cb: (err: any, data?: AssociateOrganizationalUnitCommandOutput) => void
  ): void;
  associateOrganizationalUnit(
    args: AssociateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventRuleCommand}
   */
  createEventRule(
    args: CreateEventRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventRuleCommandOutput>;
  createEventRule(
    args: CreateEventRuleCommandInput,
    cb: (err: any, data?: CreateEventRuleCommandOutput) => void
  ): void;
  createEventRule(
    args: CreateEventRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotificationConfigurationCommand}
   */
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationConfigurationCommandOutput>;
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    cb: (err: any, data?: CreateNotificationConfigurationCommandOutput) => void
  ): void;
  createNotificationConfiguration(
    args: CreateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventRuleCommand}
   */
  deleteEventRule(
    args: DeleteEventRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventRuleCommandOutput>;
  deleteEventRule(
    args: DeleteEventRuleCommandInput,
    cb: (err: any, data?: DeleteEventRuleCommandOutput) => void
  ): void;
  deleteEventRule(
    args: DeleteEventRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationConfigurationCommand}
   */
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationConfigurationCommandOutput>;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterNotificationHubCommand}
   */
  deregisterNotificationHub(
    args: DeregisterNotificationHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterNotificationHubCommandOutput>;
  deregisterNotificationHub(
    args: DeregisterNotificationHubCommandInput,
    cb: (err: any, data?: DeregisterNotificationHubCommandOutput) => void
  ): void;
  deregisterNotificationHub(
    args: DeregisterNotificationHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterNotificationHubCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableNotificationsAccessForOrganizationCommand}
   */
  disableNotificationsAccessForOrganization(): Promise<DisableNotificationsAccessForOrganizationCommandOutput>;
  disableNotificationsAccessForOrganization(
    args: DisableNotificationsAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableNotificationsAccessForOrganizationCommandOutput>;
  disableNotificationsAccessForOrganization(
    args: DisableNotificationsAccessForOrganizationCommandInput,
    cb: (err: any, data?: DisableNotificationsAccessForOrganizationCommandOutput) => void
  ): void;
  disableNotificationsAccessForOrganization(
    args: DisableNotificationsAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableNotificationsAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateChannelCommand}
   */
  disassociateChannel(
    args: DisassociateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateChannelCommandOutput>;
  disassociateChannel(
    args: DisassociateChannelCommandInput,
    cb: (err: any, data?: DisassociateChannelCommandOutput) => void
  ): void;
  disassociateChannel(
    args: DisassociateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateManagedNotificationAccountContactCommand}
   */
  disassociateManagedNotificationAccountContact(
    args: DisassociateManagedNotificationAccountContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateManagedNotificationAccountContactCommandOutput>;
  disassociateManagedNotificationAccountContact(
    args: DisassociateManagedNotificationAccountContactCommandInput,
    cb: (err: any, data?: DisassociateManagedNotificationAccountContactCommandOutput) => void
  ): void;
  disassociateManagedNotificationAccountContact(
    args: DisassociateManagedNotificationAccountContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateManagedNotificationAccountContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateManagedNotificationAdditionalChannelCommand}
   */
  disassociateManagedNotificationAdditionalChannel(
    args: DisassociateManagedNotificationAdditionalChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateManagedNotificationAdditionalChannelCommandOutput>;
  disassociateManagedNotificationAdditionalChannel(
    args: DisassociateManagedNotificationAdditionalChannelCommandInput,
    cb: (err: any, data?: DisassociateManagedNotificationAdditionalChannelCommandOutput) => void
  ): void;
  disassociateManagedNotificationAdditionalChannel(
    args: DisassociateManagedNotificationAdditionalChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateManagedNotificationAdditionalChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOrganizationalUnitCommand}
   */
  disassociateOrganizationalUnit(
    args: DisassociateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOrganizationalUnitCommandOutput>;
  disassociateOrganizationalUnit(
    args: DisassociateOrganizationalUnitCommandInput,
    cb: (err: any, data?: DisassociateOrganizationalUnitCommandOutput) => void
  ): void;
  disassociateOrganizationalUnit(
    args: DisassociateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableNotificationsAccessForOrganizationCommand}
   */
  enableNotificationsAccessForOrganization(): Promise<EnableNotificationsAccessForOrganizationCommandOutput>;
  enableNotificationsAccessForOrganization(
    args: EnableNotificationsAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableNotificationsAccessForOrganizationCommandOutput>;
  enableNotificationsAccessForOrganization(
    args: EnableNotificationsAccessForOrganizationCommandInput,
    cb: (err: any, data?: EnableNotificationsAccessForOrganizationCommandOutput) => void
  ): void;
  enableNotificationsAccessForOrganization(
    args: EnableNotificationsAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableNotificationsAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventRuleCommand}
   */
  getEventRule(
    args: GetEventRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventRuleCommandOutput>;
  getEventRule(
    args: GetEventRuleCommandInput,
    cb: (err: any, data?: GetEventRuleCommandOutput) => void
  ): void;
  getEventRule(
    args: GetEventRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedNotificationChildEventCommand}
   */
  getManagedNotificationChildEvent(
    args: GetManagedNotificationChildEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedNotificationChildEventCommandOutput>;
  getManagedNotificationChildEvent(
    args: GetManagedNotificationChildEventCommandInput,
    cb: (err: any, data?: GetManagedNotificationChildEventCommandOutput) => void
  ): void;
  getManagedNotificationChildEvent(
    args: GetManagedNotificationChildEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedNotificationChildEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedNotificationConfigurationCommand}
   */
  getManagedNotificationConfiguration(
    args: GetManagedNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedNotificationConfigurationCommandOutput>;
  getManagedNotificationConfiguration(
    args: GetManagedNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetManagedNotificationConfigurationCommandOutput) => void
  ): void;
  getManagedNotificationConfiguration(
    args: GetManagedNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedNotificationEventCommand}
   */
  getManagedNotificationEvent(
    args: GetManagedNotificationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedNotificationEventCommandOutput>;
  getManagedNotificationEvent(
    args: GetManagedNotificationEventCommandInput,
    cb: (err: any, data?: GetManagedNotificationEventCommandOutput) => void
  ): void;
  getManagedNotificationEvent(
    args: GetManagedNotificationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedNotificationEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationConfigurationCommand}
   */
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationConfigurationCommandOutput>;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;
  getNotificationConfiguration(
    args: GetNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationEventCommand}
   */
  getNotificationEvent(
    args: GetNotificationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationEventCommandOutput>;
  getNotificationEvent(
    args: GetNotificationEventCommandInput,
    cb: (err: any, data?: GetNotificationEventCommandOutput) => void
  ): void;
  getNotificationEvent(
    args: GetNotificationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationsAccessForOrganizationCommand}
   */
  getNotificationsAccessForOrganization(): Promise<GetNotificationsAccessForOrganizationCommandOutput>;
  getNotificationsAccessForOrganization(
    args: GetNotificationsAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationsAccessForOrganizationCommandOutput>;
  getNotificationsAccessForOrganization(
    args: GetNotificationsAccessForOrganizationCommandInput,
    cb: (err: any, data?: GetNotificationsAccessForOrganizationCommandOutput) => void
  ): void;
  getNotificationsAccessForOrganization(
    args: GetNotificationsAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationsAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventRulesCommand}
   */
  listEventRules(
    args: ListEventRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventRulesCommandOutput>;
  listEventRules(
    args: ListEventRulesCommandInput,
    cb: (err: any, data?: ListEventRulesCommandOutput) => void
  ): void;
  listEventRules(
    args: ListEventRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedNotificationChannelAssociationsCommand}
   */
  listManagedNotificationChannelAssociations(
    args: ListManagedNotificationChannelAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedNotificationChannelAssociationsCommandOutput>;
  listManagedNotificationChannelAssociations(
    args: ListManagedNotificationChannelAssociationsCommandInput,
    cb: (err: any, data?: ListManagedNotificationChannelAssociationsCommandOutput) => void
  ): void;
  listManagedNotificationChannelAssociations(
    args: ListManagedNotificationChannelAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedNotificationChannelAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedNotificationChildEventsCommand}
   */
  listManagedNotificationChildEvents(
    args: ListManagedNotificationChildEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedNotificationChildEventsCommandOutput>;
  listManagedNotificationChildEvents(
    args: ListManagedNotificationChildEventsCommandInput,
    cb: (err: any, data?: ListManagedNotificationChildEventsCommandOutput) => void
  ): void;
  listManagedNotificationChildEvents(
    args: ListManagedNotificationChildEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedNotificationChildEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedNotificationConfigurationsCommand}
   */
  listManagedNotificationConfigurations(): Promise<ListManagedNotificationConfigurationsCommandOutput>;
  listManagedNotificationConfigurations(
    args: ListManagedNotificationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedNotificationConfigurationsCommandOutput>;
  listManagedNotificationConfigurations(
    args: ListManagedNotificationConfigurationsCommandInput,
    cb: (err: any, data?: ListManagedNotificationConfigurationsCommandOutput) => void
  ): void;
  listManagedNotificationConfigurations(
    args: ListManagedNotificationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedNotificationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedNotificationEventsCommand}
   */
  listManagedNotificationEvents(): Promise<ListManagedNotificationEventsCommandOutput>;
  listManagedNotificationEvents(
    args: ListManagedNotificationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedNotificationEventsCommandOutput>;
  listManagedNotificationEvents(
    args: ListManagedNotificationEventsCommandInput,
    cb: (err: any, data?: ListManagedNotificationEventsCommandOutput) => void
  ): void;
  listManagedNotificationEvents(
    args: ListManagedNotificationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedNotificationEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemberAccountsCommand}
   */
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemberAccountsCommandOutput>;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationConfigurationsCommand}
   */
  listNotificationConfigurations(): Promise<ListNotificationConfigurationsCommandOutput>;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationConfigurationsCommandOutput>;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    cb: (err: any, data?: ListNotificationConfigurationsCommandOutput) => void
  ): void;
  listNotificationConfigurations(
    args: ListNotificationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationEventsCommand}
   */
  listNotificationEvents(): Promise<ListNotificationEventsCommandOutput>;
  listNotificationEvents(
    args: ListNotificationEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationEventsCommandOutput>;
  listNotificationEvents(
    args: ListNotificationEventsCommandInput,
    cb: (err: any, data?: ListNotificationEventsCommandOutput) => void
  ): void;
  listNotificationEvents(
    args: ListNotificationEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationHubsCommand}
   */
  listNotificationHubs(): Promise<ListNotificationHubsCommandOutput>;
  listNotificationHubs(
    args: ListNotificationHubsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationHubsCommandOutput>;
  listNotificationHubs(
    args: ListNotificationHubsCommandInput,
    cb: (err: any, data?: ListNotificationHubsCommandOutput) => void
  ): void;
  listNotificationHubs(
    args: ListNotificationHubsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationHubsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationalUnitsCommand}
   */
  listOrganizationalUnits(
    args: ListOrganizationalUnitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationalUnitsCommandOutput>;
  listOrganizationalUnits(
    args: ListOrganizationalUnitsCommandInput,
    cb: (err: any, data?: ListOrganizationalUnitsCommandOutput) => void
  ): void;
  listOrganizationalUnits(
    args: ListOrganizationalUnitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationalUnitsCommandOutput) => void
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
   * @see {@link RegisterNotificationHubCommand}
   */
  registerNotificationHub(
    args: RegisterNotificationHubCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterNotificationHubCommandOutput>;
  registerNotificationHub(
    args: RegisterNotificationHubCommandInput,
    cb: (err: any, data?: RegisterNotificationHubCommandOutput) => void
  ): void;
  registerNotificationHub(
    args: RegisterNotificationHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterNotificationHubCommandOutput) => void
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
   * @see {@link UpdateEventRuleCommand}
   */
  updateEventRule(
    args: UpdateEventRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventRuleCommandOutput>;
  updateEventRule(
    args: UpdateEventRuleCommandInput,
    cb: (err: any, data?: UpdateEventRuleCommandOutput) => void
  ): void;
  updateEventRule(
    args: UpdateEventRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationConfigurationCommand}
   */
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationConfigurationCommandOutput>;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;
  updateNotificationConfiguration(
    args: UpdateNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListEventRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventRulesCommandOutput}.
   */
  paginateListEventRules(
    args: ListEventRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventRulesCommandOutput>;

  /**
   * @see {@link ListManagedNotificationChannelAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedNotificationChannelAssociationsCommandOutput}.
   */
  paginateListManagedNotificationChannelAssociations(
    args: ListManagedNotificationChannelAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedNotificationChannelAssociationsCommandOutput>;

  /**
   * @see {@link ListManagedNotificationChildEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedNotificationChildEventsCommandOutput}.
   */
  paginateListManagedNotificationChildEvents(
    args: ListManagedNotificationChildEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedNotificationChildEventsCommandOutput>;

  /**
   * @see {@link ListManagedNotificationConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedNotificationConfigurationsCommandOutput}.
   */
  paginateListManagedNotificationConfigurations(
    args?: ListManagedNotificationConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedNotificationConfigurationsCommandOutput>;

  /**
   * @see {@link ListManagedNotificationEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedNotificationEventsCommandOutput}.
   */
  paginateListManagedNotificationEvents(
    args?: ListManagedNotificationEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedNotificationEventsCommandOutput>;

  /**
   * @see {@link ListMemberAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMemberAccountsCommandOutput}.
   */
  paginateListMemberAccounts(
    args: ListMemberAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMemberAccountsCommandOutput>;

  /**
   * @see {@link ListNotificationConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationConfigurationsCommandOutput}.
   */
  paginateListNotificationConfigurations(
    args?: ListNotificationConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationConfigurationsCommandOutput>;

  /**
   * @see {@link ListNotificationEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationEventsCommandOutput}.
   */
  paginateListNotificationEvents(
    args?: ListNotificationEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationEventsCommandOutput>;

  /**
   * @see {@link ListNotificationHubsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationHubsCommandOutput}.
   */
  paginateListNotificationHubs(
    args?: ListNotificationHubsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationHubsCommandOutput>;

  /**
   * @see {@link ListOrganizationalUnitsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationalUnitsCommandOutput}.
   */
  paginateListOrganizationalUnits(
    args: ListOrganizationalUnitsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationalUnitsCommandOutput>;
}

/**
 * <p>The <i>User Notifications API Reference</i> provides descriptions, API request parameters, and the JSON response for each of the User Notifications API actions.</p> <p>User Notification control plane APIs are currently available in US East (Virginia) - <code>us-east-1</code>.</p> <p> <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html">GetNotificationEvent</a> and <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html">ListNotificationEvents</a> APIs are currently available in <a href="https://docs.aws.amazon.com/notifications/latest/userguide/supported-regions.html">commercial partition Regions</a> and only return notifications stored in the same Region in which they're called.</p> <p>The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html">notification hub</a> in addition to US East (Virginia).</p> <note> <p>For information about descriptions, API request parameters, and the JSON response for email contact related API actions, see the <a href="https://docs.aws.amazon.com/notificationscontacts/latest/APIReference/Welcome.html">User Notifications Contacts API Reference Guide</a>.</p> </note>
 * @public
 */
export class Notifications extends NotificationsClient implements Notifications {}
createAggregatedClient(commands, Notifications, { paginators });
