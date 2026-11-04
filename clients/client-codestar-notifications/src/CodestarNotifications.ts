// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CodestarNotificationsClient } from "./CodestarNotificationsClient";
import {
  type CreateNotificationRuleCommandInput,
  type CreateNotificationRuleCommandOutput,
  CreateNotificationRuleCommand,
} from "./commands/CreateNotificationRuleCommand";
import {
  type DeleteNotificationRuleCommandInput,
  type DeleteNotificationRuleCommandOutput,
  DeleteNotificationRuleCommand,
} from "./commands/DeleteNotificationRuleCommand";
import {
  type DeleteTargetCommandInput,
  type DeleteTargetCommandOutput,
  DeleteTargetCommand,
} from "./commands/DeleteTargetCommand";
import {
  type DescribeNotificationRuleCommandInput,
  type DescribeNotificationRuleCommandOutput,
  DescribeNotificationRuleCommand,
} from "./commands/DescribeNotificationRuleCommand";
import {
  type ListEventTypesCommandInput,
  type ListEventTypesCommandOutput,
  ListEventTypesCommand,
} from "./commands/ListEventTypesCommand";
import {
  type ListNotificationRulesCommandInput,
  type ListNotificationRulesCommandOutput,
  ListNotificationRulesCommand,
} from "./commands/ListNotificationRulesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTargetsCommandInput,
  type ListTargetsCommandOutput,
  ListTargetsCommand,
} from "./commands/ListTargetsCommand";
import { type SubscribeCommandInput, type SubscribeCommandOutput, SubscribeCommand } from "./commands/SubscribeCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UnsubscribeCommandInput,
  type UnsubscribeCommandOutput,
  UnsubscribeCommand,
} from "./commands/UnsubscribeCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateNotificationRuleCommandInput,
  type UpdateNotificationRuleCommandOutput,
  UpdateNotificationRuleCommand,
} from "./commands/UpdateNotificationRuleCommand";
import { paginateListEventTypes } from "./pagination/ListEventTypesPaginator";
import { paginateListNotificationRules } from "./pagination/ListNotificationRulesPaginator";
import { paginateListTargets } from "./pagination/ListTargetsPaginator";

const commands = {
  CreateNotificationRuleCommand,
  DeleteNotificationRuleCommand,
  DeleteTargetCommand,
  DescribeNotificationRuleCommand,
  ListEventTypesCommand,
  ListNotificationRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsCommand,
  SubscribeCommand,
  TagResourceCommand,
  UnsubscribeCommand,
  UntagResourceCommand,
  UpdateNotificationRuleCommand,
};
const paginators = {
  paginateListEventTypes,
  paginateListNotificationRules,
  paginateListTargets,
};

/**
 * @public
 */
export interface CodestarNotificationsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CodestarNotifications {
  /**
   * @see {@link CreateNotificationRuleCommand}
   */
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<CreateNotificationRuleCommandOutput>;
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationRuleCommand}
   */
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<DeleteNotificationRuleCommandOutput>;
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetCommand}
   */
  deleteTarget(
    args: DeleteTargetCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<DeleteTargetCommandOutput>;
  deleteTarget(
    args: DeleteTargetCommandInput,
    cb: (err: any, data?: DeleteTargetCommandOutput) => void
  ): void;
  deleteTarget(
    args: DeleteTargetCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: DeleteTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationRuleCommand}
   */
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<DescribeNotificationRuleCommandOutput>;
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTypesCommand}
   */
  listEventTypes(): Promise<ListEventTypesCommandOutput>;
  listEventTypes(
    args: ListEventTypesCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<ListEventTypesCommandOutput>;
  listEventTypes(
    args: ListEventTypesCommandInput,
    cb: (err: any, data?: ListEventTypesCommandOutput) => void
  ): void;
  listEventTypes(
    args: ListEventTypesCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: ListEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationRulesCommand}
   */
  listNotificationRules(): Promise<ListNotificationRulesCommandOutput>;
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<ListNotificationRulesCommandOutput>;
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): void;
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetsCommand}
   */
  listTargets(): Promise<ListTargetsCommandOutput>;
  listTargets(
    args: ListTargetsCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<ListTargetsCommandOutput>;
  listTargets(
    args: ListTargetsCommandInput,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;
  listTargets(
    args: ListTargetsCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<SubscribeCommandOutput>;
  subscribe(
    args: SubscribeCommandInput,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;
  subscribe(
    args: SubscribeCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<UnsubscribeCommandOutput>;
  unsubscribe(
    args: UnsubscribeCommandInput,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;
  unsubscribe(
    args: UnsubscribeCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationRuleCommand}
   */
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options?: CodestarNotificationsRequestOptions
  ): Promise<UpdateNotificationRuleCommandOutput>;
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options: CodestarNotificationsRequestOptions,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventTypesCommandOutput}.
   */
  paginateListEventTypes(
    args?: ListEventTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventTypesCommandOutput>;

  /**
   * @see {@link ListNotificationRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationRulesCommandOutput}.
   */
  paginateListNotificationRules(
    args?: ListNotificationRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationRulesCommandOutput>;

  /**
   * @see {@link ListTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTargetsCommandOutput}.
   */
  paginateListTargets(
    args?: ListTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTargetsCommandOutput>;
}

/**
 * This CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the CodeStar Notifications API. You can use the CodeStar Notifications API to work with the following objects:
 *
 * Notification rules, by calling the following:
 *
 * - CreateNotificationRule, which creates a notification rule for a resource in your account.
 * - DeleteNotificationRule, which deletes a notification rule.
 * - DescribeNotificationRule, which provides information about a notification rule.
 * - ListNotificationRules, which lists the notification rules associated with your account.
 * - UpdateNotificationRule, which changes the name, events, or targets associated with a notification rule.
 * - Subscribe, which subscribes a target to a notification rule.
 * - Unsubscribe, which removes a target from a notification rule.
 *
 * Targets, by calling the following:
 *
 * - DeleteTarget, which removes a notification rule target from a notification rule.
 * - ListTargets, which lists the targets associated with a notification rule.
 *
 * Events, by calling the following:
 *
 * - ListEventTypes, which lists the event types you can include in a notification rule.
 *
 * Tags, by calling the following:
 *
 * - ListTagsForResource, which lists the tags already associated with a notification rule in your account.
 * - TagResource, which associates a tag you provide with a notification rule in your account.
 * - UntagResource, which removes a tag from a notification rule in your account.
 *
 * For information about how to use CodeStar Notifications, see the [Amazon Web Services Developer Tools Console User Guide](https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html).
 *
 * @public
 */
export class CodestarNotifications extends CodestarNotificationsClient implements CodestarNotifications {}
createAggregatedClient(commands, CodestarNotifications, { paginators });
