// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodestarNotificationsClient, CodestarNotificationsClientConfig } from "./CodestarNotificationsClient";
import {
  CreateNotificationRuleCommand,
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
} from "./commands/CreateNotificationRuleCommand";
import {
  DeleteNotificationRuleCommand,
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
} from "./commands/DeleteNotificationRuleCommand";
import {
  DeleteTargetCommand,
  DeleteTargetCommandInput,
  DeleteTargetCommandOutput,
} from "./commands/DeleteTargetCommand";
import {
  DescribeNotificationRuleCommand,
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
} from "./commands/DescribeNotificationRuleCommand";
import {
  ListEventTypesCommand,
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
} from "./commands/ListEventTypesCommand";
import {
  ListNotificationRulesCommand,
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "./commands/ListNotificationRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "./commands/ListTargetsCommand";
import { SubscribeCommand, SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommand, UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateNotificationRuleCommand,
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
} from "./commands/UpdateNotificationRuleCommand";

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

export interface CodestarNotifications {
  /**
   * @see {@link CreateNotificationRuleCommand}
   */
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationRuleCommandOutput>;
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;
  createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationRuleCommand}
   */
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationRuleCommandOutput>;
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;
  deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTargetCommand}
   */
  deleteTarget(args: DeleteTargetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTargetCommandOutput>;
  deleteTarget(args: DeleteTargetCommandInput, cb: (err: any, data?: DeleteTargetCommandOutput) => void): void;
  deleteTarget(
    args: DeleteTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationRuleCommand}
   */
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationRuleCommandOutput>;
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;
  describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTypesCommand}
   */
  listEventTypes(
    args: ListEventTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTypesCommandOutput>;
  listEventTypes(args: ListEventTypesCommandInput, cb: (err: any, data?: ListEventTypesCommandOutput) => void): void;
  listEventTypes(
    args: ListEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationRulesCommand}
   */
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationRulesCommandOutput>;
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): void;
  listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
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
   * @see {@link ListTargetsCommand}
   */
  listTargets(args: ListTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsCommandOutput>;
  listTargets(args: ListTargetsCommandInput, cb: (err: any, data?: ListTargetsCommandOutput) => void): void;
  listTargets(
    args: ListTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(args: SubscribeCommandInput, options?: __HttpHandlerOptions): Promise<SubscribeCommandOutput>;
  subscribe(args: SubscribeCommandInput, cb: (err: any, data?: SubscribeCommandOutput) => void): void;
  subscribe(
    args: SubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeCommandOutput) => void
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
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(args: UnsubscribeCommandInput, options?: __HttpHandlerOptions): Promise<UnsubscribeCommandOutput>;
  unsubscribe(args: UnsubscribeCommandInput, cb: (err: any, data?: UnsubscribeCommandOutput) => void): void;
  unsubscribe(
    args: UnsubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
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
   * @see {@link UpdateNotificationRuleCommand}
   */
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationRuleCommandOutput>;
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;
  updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the
 *       operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API
 *       to work with the following objects:</p>
 *          <p>Notification rules, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateNotificationRule</a>, which creates a notification rule for a
 *                     resource in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteNotificationRule</a>, which deletes a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListNotificationRules</a>, which lists the notification rules associated with
 *           your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Subscribe</a>, which subscribes a target to a notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Unsubscribe</a>, which removes a target from a notification rule. </p>
 *             </li>
 *          </ul>
 *          <p>Targets, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteTarget</a>, which removes a notification rule target from a
 *           notification rule. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTargets</a>, which lists the targets associated with a
 *                     notification rule. </p>
 *             </li>
 *          </ul>
 *          <p>Events, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListEventTypes</a>, which lists the event types you can include in
 *                     a notification rule. </p>
 *             </li>
 *          </ul>
 *          <p>Tags, by calling the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which lists the tags already associated
 *                     with a notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which associates a tag you provide with a
 *                     notification rule in your account. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes a tag from a notification rule in
 *                     your account. </p>
 *             </li>
 *          </ul>
 *          <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>.
 *     </p>
 */
export class CodestarNotifications extends CodestarNotificationsClient implements CodestarNotifications {}
createAggregatedClient(commands, CodestarNotifications);
