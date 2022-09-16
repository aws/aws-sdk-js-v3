// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodestarNotificationsClient } from "./CodestarNotificationsClient";
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

/**
 * <p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the
 *       operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API
 *       to work with the following objects:</p>
 *
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
 *
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
 *
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
 *
 *
 *
 *         <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>.
 *     </p>
 */
export class CodestarNotifications extends CodestarNotificationsClient {
  /**
   * <p>Creates a notification rule for a resource. The rule specifies the events you want
   *             notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive
   *             them.</p>
   */
  public createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationRuleCommandOutput>;
  public createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;
  public createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): void;
  public createNotificationRule(
    args: CreateNotificationRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNotificationRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateNotificationRuleCommandOutput) => void
  ): Promise<CreateNotificationRuleCommandOutput> | void {
    const command = new CreateNotificationRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a notification rule for a resource.</p>
   */
  public deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationRuleCommandOutput>;
  public deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;
  public deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): void;
  public deleteNotificationRule(
    args: DeleteNotificationRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNotificationRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationRuleCommandOutput) => void
  ): Promise<DeleteNotificationRuleCommandOutput> | void {
    const command = new DeleteNotificationRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified target for notifications.</p>
   */
  public deleteTarget(
    args: DeleteTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTargetCommandOutput>;
  public deleteTarget(args: DeleteTargetCommandInput, cb: (err: any, data?: DeleteTargetCommandOutput) => void): void;
  public deleteTarget(
    args: DeleteTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetCommandOutput) => void
  ): void;
  public deleteTarget(
    args: DeleteTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTargetCommandOutput) => void),
    cb?: (err: any, data?: DeleteTargetCommandOutput) => void
  ): Promise<DeleteTargetCommandOutput> | void {
    const command = new DeleteTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a specified notification rule.</p>
   */
  public describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationRuleCommandOutput>;
  public describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;
  public describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): void;
  public describeNotificationRule(
    args: DescribeNotificationRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotificationRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotificationRuleCommandOutput) => void
  ): Promise<DescribeNotificationRuleCommandOutput> | void {
    const command = new DescribeNotificationRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the event types available for configuring notifications.</p>
   */
  public listEventTypes(
    args: ListEventTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTypesCommandOutput>;
  public listEventTypes(
    args: ListEventTypesCommandInput,
    cb: (err: any, data?: ListEventTypesCommandOutput) => void
  ): void;
  public listEventTypes(
    args: ListEventTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTypesCommandOutput) => void
  ): void;
  public listEventTypes(
    args: ListEventTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventTypesCommandOutput) => void),
    cb?: (err: any, data?: ListEventTypesCommandOutput) => void
  ): Promise<ListEventTypesCommandOutput> | void {
    const command = new ListEventTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the notification rules for an Amazon Web Services account.</p>
   */
  public listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationRulesCommandOutput>;
  public listNotificationRules(
    args: ListNotificationRulesCommandInput,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): void;
  public listNotificationRules(
    args: ListNotificationRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): void;
  public listNotificationRules(
    args: ListNotificationRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNotificationRulesCommandOutput) => void),
    cb?: (err: any, data?: ListNotificationRulesCommandOutput) => void
  ): Promise<ListNotificationRulesCommandOutput> | void {
    const command = new ListNotificationRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the tags associated with a notification rule.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the notification rule targets for an Amazon Web Services account.</p>
   */
  public listTargets(args: ListTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsCommandOutput>;
  public listTargets(args: ListTargetsCommandInput, cb: (err: any, data?: ListTargetsCommandOutput) => void): void;
  public listTargets(
    args: ListTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;
  public listTargets(
    args: ListTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsCommandOutput) => void
  ): Promise<ListTargetsCommandOutput> | void {
    const command = new ListTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the
   *             associated target can receive notifications when the events described in the rule are
   *             triggered.</p>
   */
  public subscribe(args: SubscribeCommandInput, options?: __HttpHandlerOptions): Promise<SubscribeCommandOutput>;
  public subscribe(args: SubscribeCommandInput, cb: (err: any, data?: SubscribeCommandOutput) => void): void;
  public subscribe(
    args: SubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;
  public subscribe(
    args: SubscribeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubscribeCommandOutput) => void),
    cb?: (err: any, data?: SubscribeCommandOutput) => void
  ): Promise<SubscribeCommandOutput> | void {
    const command = new SubscribeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a set of provided tags with a notification rule.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an association between a notification rule and an Chatbot topic so that
   *             subscribers to that topic stop receiving notifications when the events described in the
   *             rule are triggered.</p>
   */
  public unsubscribe(args: UnsubscribeCommandInput, options?: __HttpHandlerOptions): Promise<UnsubscribeCommandOutput>;
  public unsubscribe(args: UnsubscribeCommandInput, cb: (err: any, data?: UnsubscribeCommandOutput) => void): void;
  public unsubscribe(
    args: UnsubscribeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;
  public unsubscribe(
    args: UnsubscribeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnsubscribeCommandOutput) => void),
    cb?: (err: any, data?: UnsubscribeCommandOutput) => void
  ): Promise<UnsubscribeCommandOutput> | void {
    const command = new UnsubscribeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the association between one or more provided tags and a notification
   *             rule.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a notification rule for a resource. You can change the events that trigger the
   *             notification rule, the status of the rule, and the targets that receive the
   *             notifications.</p>
   *          <note>
   *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
   *          </note>
   */
  public updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationRuleCommandOutput>;
  public updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;
  public updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): void;
  public updateNotificationRule(
    args: UpdateNotificationRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNotificationRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateNotificationRuleCommandOutput) => void
  ): Promise<UpdateNotificationRuleCommandOutput> | void {
    const command = new UpdateNotificationRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
