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
  type CreateEventBusCommandInput,
  type CreateEventBusCommandOutput,
  CreateEventBusCommand,
} from "./commands/CreateEventBusCommand";
import {
  type CreateEventSourceCommandInput,
  type CreateEventSourceCommandOutput,
  CreateEventSourceCommand,
} from "./commands/CreateEventSourceCommand";
import {
  type CreateSubscriberCommandInput,
  type CreateSubscriberCommandOutput,
  CreateSubscriberCommand,
} from "./commands/CreateSubscriberCommand";
import {
  type DeleteEventBusCommandInput,
  type DeleteEventBusCommandOutput,
  DeleteEventBusCommand,
} from "./commands/DeleteEventBusCommand";
import {
  type DeleteEventSourceCommandInput,
  type DeleteEventSourceCommandOutput,
  DeleteEventSourceCommand,
} from "./commands/DeleteEventSourceCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSubscriberCommandInput,
  type DeleteSubscriberCommandOutput,
  DeleteSubscriberCommand,
} from "./commands/DeleteSubscriberCommand";
import {
  type DescribeEventBusCommandInput,
  type DescribeEventBusCommandOutput,
  DescribeEventBusCommand,
} from "./commands/DescribeEventBusCommand";
import {
  type DescribeEventSourceCommandInput,
  type DescribeEventSourceCommandOutput,
  DescribeEventSourceCommand,
} from "./commands/DescribeEventSourceCommand";
import {
  type DescribeSubscriberCommandInput,
  type DescribeSubscriberCommandOutput,
  DescribeSubscriberCommand,
} from "./commands/DescribeSubscriberCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListEventBusesCommandInput,
  type ListEventBusesCommandOutput,
  ListEventBusesCommand,
} from "./commands/ListEventBusesCommand";
import {
  type ListEventSourcesCommandInput,
  type ListEventSourcesCommandOutput,
  ListEventSourcesCommand,
} from "./commands/ListEventSourcesCommand";
import {
  type ListResourcePoliciesCommandInput,
  type ListResourcePoliciesCommandOutput,
  ListResourcePoliciesCommand,
} from "./commands/ListResourcePoliciesCommand";
import {
  type ListSubscribersCommandInput,
  type ListSubscribersCommandOutput,
  ListSubscribersCommand,
} from "./commands/ListSubscribersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type PutEventsCommandInput, type PutEventsCommandOutput, PutEventsCommand } from "./commands/PutEventsCommand";
import {
  type PutRawEventsCommandInput,
  type PutRawEventsCommandOutput,
  PutRawEventsCommand,
} from "./commands/PutRawEventsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RevokeResourceCommandInput,
  type RevokeResourceCommandOutput,
  RevokeResourceCommand,
} from "./commands/RevokeResourceCommand";
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
  type UpdateEventBusCommandInput,
  type UpdateEventBusCommandOutput,
  UpdateEventBusCommand,
} from "./commands/UpdateEventBusCommand";
import {
  type UpdateEventSourceCommandInput,
  type UpdateEventSourceCommandOutput,
  UpdateEventSourceCommand,
} from "./commands/UpdateEventSourceCommand";
import {
  type UpdateSubscriberCommandInput,
  type UpdateSubscriberCommandOutput,
  UpdateSubscriberCommand,
} from "./commands/UpdateSubscriberCommand";
import { EventBridgeV2Client } from "./EventBridgeV2Client";
import type { ResourceNotFoundException } from "./models/errors";
import type { EventBridgeV2ServiceException } from "./models/EventBridgeV2ServiceException";
import { paginateListEventBuses } from "./pagination/ListEventBusesPaginator";
import { paginateListEventSources } from "./pagination/ListEventSourcesPaginator";
import { paginateListResourcePolicies } from "./pagination/ListResourcePoliciesPaginator";
import { paginateListSubscribers } from "./pagination/ListSubscribersPaginator";
import { waitUntilEventBusActive } from "./waiters/waitForEventBusActive";
import { waitUntilEventBusDeleted } from "./waiters/waitForEventBusDeleted";

const commands = {
  CreateEventBusCommand,
  CreateEventSourceCommand,
  CreateSubscriberCommand,
  DeleteEventBusCommand,
  DeleteEventSourceCommand,
  DeleteResourcePolicyCommand,
  DeleteSubscriberCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribeSubscriberCommand,
  GetResourcePolicyCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListResourcePoliciesCommand,
  ListSubscribersCommand,
  ListTagsForResourceCommand,
  PutEventsCommand,
  PutRawEventsCommand,
  PutResourcePolicyCommand,
  RevokeResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEventBusCommand,
  UpdateEventSourceCommand,
  UpdateSubscriberCommand,
};
const paginators = {
  paginateListEventBuses,
  paginateListEventSources,
  paginateListResourcePolicies,
  paginateListSubscribers,
};
const waiters = {
  waitUntilEventBusActive,
  waitUntilEventBusDeleted,
};

/**
 * @public
 */
export interface EventBridgeV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EventBridgeV2 {
  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<CreateEventBusCommandOutput>;
  createEventBus(
    args: CreateEventBusCommandInput,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  createEventBus(
    args: CreateEventBusCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSourceCommand}
   */
  createEventSource(
    args: CreateEventSourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<CreateEventSourceCommandOutput>;
  createEventSource(
    args: CreateEventSourceCommandInput,
    cb: (err: any, data?: CreateEventSourceCommandOutput) => void
  ): void;
  createEventSource(
    args: CreateEventSourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: CreateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriberCommand}
   */
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<CreateSubscriberCommandOutput>;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DeleteEventBusCommandOutput>;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSourceCommand}
   */
  deleteEventSource(
    args: DeleteEventSourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DeleteEventSourceCommandOutput>;
  deleteEventSource(
    args: DeleteEventSourceCommandInput,
    cb: (err: any, data?: DeleteEventSourceCommandOutput) => void
  ): void;
  deleteEventSource(
    args: DeleteEventSourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DeleteEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriberCommand}
   */
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DeleteSubscriberCommandOutput>;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DescribeEventBusCommandOutput>;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DescribeEventSourceCommandOutput>;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscriberCommand}
   */
  describeSubscriber(
    args: DescribeSubscriberCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<DescribeSubscriberCommandOutput>;
  describeSubscriber(
    args: DescribeSubscriberCommandInput,
    cb: (err: any, data?: DescribeSubscriberCommandOutput) => void
  ): void;
  describeSubscriber(
    args: DescribeSubscriberCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: DescribeSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(): Promise<ListEventBusesCommandOutput>;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<ListEventBusesCommandOutput>;
  listEventBuses(
    args: ListEventBusesCommandInput,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePoliciesCommand}
   */
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscribersCommand}
   */
  listSubscribers(): Promise<ListSubscribersCommandOutput>;
  listSubscribers(
    args: ListSubscribersCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<ListSubscribersCommandOutput>;
  listSubscribers(
    args: ListSubscribersCommandInput,
    cb: (err: any, data?: ListSubscribersCommandOutput) => void
  ): void;
  listSubscribers(
    args: ListSubscribersCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: ListSubscribersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRawEventsCommand}
   */
  putRawEvents(
    args: PutRawEventsCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<PutRawEventsCommandOutput>;
  putRawEvents(
    args: PutRawEventsCommandInput,
    cb: (err: any, data?: PutRawEventsCommandOutput) => void
  ): void;
  putRawEvents(
    args: PutRawEventsCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: PutRawEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeResourceCommand}
   */
  revokeResource(
    args: RevokeResourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<RevokeResourceCommandOutput>;
  revokeResource(
    args: RevokeResourceCommandInput,
    cb: (err: any, data?: RevokeResourceCommandOutput) => void
  ): void;
  revokeResource(
    args: RevokeResourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: RevokeResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventBusCommand}
   */
  updateEventBus(
    args: UpdateEventBusCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<UpdateEventBusCommandOutput>;
  updateEventBus(
    args: UpdateEventBusCommandInput,
    cb: (err: any, data?: UpdateEventBusCommandOutput) => void
  ): void;
  updateEventBus(
    args: UpdateEventBusCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: UpdateEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventSourceCommand}
   */
  updateEventSource(
    args: UpdateEventSourceCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<UpdateEventSourceCommandOutput>;
  updateEventSource(
    args: UpdateEventSourceCommandInput,
    cb: (err: any, data?: UpdateEventSourceCommandOutput) => void
  ): void;
  updateEventSource(
    args: UpdateEventSourceCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: UpdateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriberCommand}
   */
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options?: EventBridgeV2RequestOptions
  ): Promise<UpdateSubscriberCommandOutput>;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options: EventBridgeV2RequestOptions,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventBusesCommandOutput}.
   */
  paginateListEventBuses(
    args?: ListEventBusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventBusesCommandOutput>;

  /**
   * @see {@link ListEventSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventSourcesCommandOutput}.
   */
  paginateListEventSources(
    args?: ListEventSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventSourcesCommandOutput>;

  /**
   * @see {@link ListResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcePoliciesCommandOutput}.
   */
  paginateListResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcePoliciesCommandOutput>;

  /**
   * @see {@link ListSubscribersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscribersCommandOutput}.
   */
  paginateListSubscribers(
    args?: ListSubscribersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscribersCommandOutput>;

  /**
   * @see {@link DescribeEventBusCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEventBusActive(
    args: DescribeEventBusCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EventBridgeV2>, "client">
  ): Promise<WaiterResult<DescribeEventBusCommandOutput>>;

  /**
   * @see {@link DescribeEventBusCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilEventBusDeleted(
    args: DescribeEventBusCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EventBridgeV2>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;
}

/**
 * Amazon EventBridge event bus API. An event bus receives events published by
 * your applications and AWS services, stores them for a configurable retention
 * period, and delivers them to subscribers. A subscriber filters events,
 * optionally transforms them, and invokes a target such as Lambda, SQS, SNS,
 * Kinesis, Step Functions, or an HTTP endpoint. The API manages event buses,
 * subscribers, event sources, resource policies, and tags, and publishes
 * events through PutEvents and PutRawEvents.
 * @public
 */
export class EventBridgeV2 extends EventBridgeV2Client implements EventBridgeV2 {}
createAggregatedClient(commands, EventBridgeV2, { paginators, waiters });
