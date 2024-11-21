// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateChannelCommand,
  AssociateChannelCommandInput,
  AssociateChannelCommandOutput,
} from "./commands/AssociateChannelCommand";
import {
  CreateEventRuleCommand,
  CreateEventRuleCommandInput,
  CreateEventRuleCommandOutput,
} from "./commands/CreateEventRuleCommand";
import {
  CreateNotificationConfigurationCommand,
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "./commands/CreateNotificationConfigurationCommand";
import {
  DeleteEventRuleCommand,
  DeleteEventRuleCommandInput,
  DeleteEventRuleCommandOutput,
} from "./commands/DeleteEventRuleCommand";
import {
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  DeregisterNotificationHubCommand,
  DeregisterNotificationHubCommandInput,
  DeregisterNotificationHubCommandOutput,
} from "./commands/DeregisterNotificationHubCommand";
import {
  DisassociateChannelCommand,
  DisassociateChannelCommandInput,
  DisassociateChannelCommandOutput,
} from "./commands/DisassociateChannelCommand";
import {
  GetEventRuleCommand,
  GetEventRuleCommandInput,
  GetEventRuleCommandOutput,
} from "./commands/GetEventRuleCommand";
import {
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import {
  GetNotificationEventCommand,
  GetNotificationEventCommandInput,
  GetNotificationEventCommandOutput,
} from "./commands/GetNotificationEventCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListEventRulesCommand,
  ListEventRulesCommandInput,
  ListEventRulesCommandOutput,
} from "./commands/ListEventRulesCommand";
import {
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  ListNotificationEventsCommand,
  ListNotificationEventsCommandInput,
  ListNotificationEventsCommandOutput,
} from "./commands/ListNotificationEventsCommand";
import {
  ListNotificationHubsCommand,
  ListNotificationHubsCommandInput,
  ListNotificationHubsCommandOutput,
} from "./commands/ListNotificationHubsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterNotificationHubCommand,
  RegisterNotificationHubCommandInput,
  RegisterNotificationHubCommandOutput,
} from "./commands/RegisterNotificationHubCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEventRuleCommand,
  UpdateEventRuleCommandInput,
  UpdateEventRuleCommandOutput,
} from "./commands/UpdateEventRuleCommand";
import {
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import { NotificationsClient, NotificationsClientConfig } from "./NotificationsClient";

const commands = {
  AssociateChannelCommand,
  CreateEventRuleCommand,
  CreateNotificationConfigurationCommand,
  DeleteEventRuleCommand,
  DeleteNotificationConfigurationCommand,
  DeregisterNotificationHubCommand,
  DisassociateChannelCommand,
  GetEventRuleCommand,
  GetNotificationConfigurationCommand,
  GetNotificationEventCommand,
  ListChannelsCommand,
  ListEventRulesCommand,
  ListNotificationConfigurationsCommand,
  ListNotificationEventsCommand,
  ListNotificationHubsCommand,
  ListTagsForResourceCommand,
  RegisterNotificationHubCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventRuleCommand,
  UpdateNotificationConfigurationCommand,
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
   * @see {@link CreateEventRuleCommand}
   */
  createEventRule(
    args: CreateEventRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventRuleCommandOutput>;
  createEventRule(args: CreateEventRuleCommandInput, cb: (err: any, data?: CreateEventRuleCommandOutput) => void): void;
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
  deleteEventRule(args: DeleteEventRuleCommandInput, cb: (err: any, data?: DeleteEventRuleCommandOutput) => void): void;
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
   * @see {@link GetEventRuleCommand}
   */
  getEventRule(args: GetEventRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetEventRuleCommandOutput>;
  getEventRule(args: GetEventRuleCommandInput, cb: (err: any, data?: GetEventRuleCommandOutput) => void): void;
  getEventRule(
    args: GetEventRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventRuleCommandOutput) => void
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
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
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
  listEventRules(args: ListEventRulesCommandInput, cb: (err: any, data?: ListEventRulesCommandOutput) => void): void;
  listEventRules(
    args: ListEventRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventRulesCommandOutput) => void
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateEventRule(args: UpdateEventRuleCommandInput, cb: (err: any, data?: UpdateEventRuleCommandOutput) => void): void;
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
}

/**
 * <p>The <i>AWS User Notifications API Reference</i> provides descriptions, API request parameters, and the JSON response for each of the User Notification API actions.</p>
 *          <p>User Notification control APIs are currently available in US East (Virginia) - <code>us-east-1</code>.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html">GetNotificationEvent</a>
 * 	 and <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html">ListNotificationEvents</a> APIs are currently available in
 * 	 <a href="https://docs.aws.amazon.com/notifications/latest/userguide/supported-regions.html">commercial partition Regions</a> and only return notifications stored in the same Region in which they're called.</p>
 *          <p>The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a
 * 	 <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html&gt;">notification hub</a> in addition to US East (Virginia).</p>
 * @public
 */
export class Notifications extends NotificationsClient implements Notifications {}
createAggregatedClient(commands, Notifications);
