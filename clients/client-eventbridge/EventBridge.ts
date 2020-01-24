import { EventBridgeClient } from "./EventBridgeClient";
import {
  ActivateEventSourceCommand,
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput
} from "./commands/ActivateEventSourceCommand";
import {
  CreateEventBusCommand,
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput
} from "./commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommand,
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput
} from "./commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommand,
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput
} from "./commands/DeactivateEventSourceCommand";
import {
  DeleteEventBusCommand,
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput
} from "./commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommand,
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput
} from "./commands/DeletePartnerEventSourceCommand";
import {
  DeleteRuleCommand,
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput
} from "./commands/DeleteRuleCommand";
import {
  DescribeEventBusCommand,
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput
} from "./commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommand,
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput
} from "./commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommand,
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput
} from "./commands/DescribePartnerEventSourceCommand";
import {
  DescribeRuleCommand,
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput
} from "./commands/DescribeRuleCommand";
import {
  DisableRuleCommand,
  DisableRuleCommandInput,
  DisableRuleCommandOutput
} from "./commands/DisableRuleCommand";
import {
  EnableRuleCommand,
  EnableRuleCommandInput,
  EnableRuleCommandOutput
} from "./commands/EnableRuleCommand";
import {
  ListEventBusesCommand,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput
} from "./commands/ListEventBusesCommand";
import {
  ListEventSourcesCommand,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput
} from "./commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommand,
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput
} from "./commands/ListPartnerEventSourcesCommand";
import {
  ListRuleNamesByTargetCommand,
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput
} from "./commands/ListRuleNamesByTargetCommand";
import {
  ListRulesCommand,
  ListRulesCommandInput,
  ListRulesCommandOutput
} from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommand,
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput
} from "./commands/ListTargetsByRuleCommand";
import {
  PutEventsCommand,
  PutEventsCommandInput,
  PutEventsCommandOutput
} from "./commands/PutEventsCommand";
import {
  PutPartnerEventsCommand,
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput
} from "./commands/PutPartnerEventsCommand";
import {
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput
} from "./commands/PutPermissionCommand";
import {
  PutRuleCommand,
  PutRuleCommandInput,
  PutRuleCommandOutput
} from "./commands/PutRuleCommand";
import {
  PutTargetsCommand,
  PutTargetsCommandInput,
  PutTargetsCommandOutput
} from "./commands/PutTargetsCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "./commands/RemovePermissionCommand";
import {
  RemoveTargetsCommand,
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput
} from "./commands/RemoveTargetsCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  TestEventPatternCommand,
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput
} from "./commands/TestEventPatternCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your AWS
 *             resources. When your resources change state, they automatically send events into an
 *             event stream. You can create rules that match selected events in the stream and route
 *             them to targets to take action. You can also use rules to take action on a predetermined
 *             schedule. For example, you can configure rules to:</p>
 *         <ul>
 *             <li>
 *                <p>Automatically invoke an AWS Lambda function to update DNS entries when an event notifies
 *                     you that Amazon EC2 instance enters the running state</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from AWS CloudTrail to an Amazon Kinesis data stream for
 *                     detailed analysis of potential security or availability risks</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *                     volume</p>
 *             </li>
 *          </ul>
 *         <p>For more information about the features of Amazon EventBridge, see the
 *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/">Amazon EventBridge User Guide</a>.</p>
 */
export class EventBridge extends EventBridgeClient {
  /**
   * <p>Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events
   *         from the event source.</p>
   *         <note>
   *             <p>This operation is performed by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateEventSourceCommandOutput>;
  public activateEventSource(
    args: ActivateEventSourceCommandInput,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  public activateEventSource(
    args: ActivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  public activateEventSource(
    args: ActivateEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ActivateEventSourceCommandOutput) => void),
    cb?: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): Promise<ActivateEventSourceCommandOutput> | void {
    const command = new ActivateEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your
   *         own custom applications and services, or it can be a partner event bus which can be matched to a partner event source.</p>
   *         <note>
   *             <p>This operation is used by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventBusCommandOutput>;
  public createEventBus(
    args: CreateEventBusCommandInput,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  public createEventBus(
    args: CreateEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  public createEventBus(
    args: CreateEventBusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEventBusCommandOutput) => void),
    cb?: (err: any, data?: CreateEventBusCommandOutput) => void
  ): Promise<CreateEventBusCommandOutput> | void {
    const command = new CreateEventBusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Called by an SaaS partner to create a partner event source.</p>
   *         <note>
   *             <p>This operation is not used by AWS customers.</p>
   *          </note>
   *
   *         <p>Each partner event source can be used by one AWS account to create a matching
   *             partner event bus in that AWS account. A SaaS partner must create one partner event source for each AWS account that wants to receive those event types. </p>
   *         <p>A partner event source creates events based on resources in the SaaS partner's service
   *             or application.</p>
   *         <p>An AWS account that creates a partner event bus that matches the partner event source
   *             can use that event bus to receive events from the partner, and then process them using
   *             AWS
   *             Events rules and targets.</p>
   *         <p>Partner event source names follow this format:</p>
   *
   *         <p>
   *             <code>aws.partner/<i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <i>partner_name</i> is determined during partner registration and identifies the partner to AWS customers.</p>
   *             </li>
   *             <li>
   *                <p>For <i>event_namespace</i>, we recommend that partners use a string that identifies the AWS customer within the partner's system. This should not
   *                 be the customer's AWS account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner
   *                 system. This should help AWS customers
   *                 decide whether to create an event bus to receive these events.</p>
   *             </li>
   *          </ul>
   */
  public createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartnerEventSourceCommandOutput>;
  public createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  public createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  public createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreatePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): Promise<CreatePartnerEventSourceCommandOutput> | void {
    const command = new CreatePartnerEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An AWS customer uses this operation to temporarily stop receiving events from the
   *             specified partner event source. The matching event bus isn't deleted. </p>
   *         <p>When you deactivate a partner event source, the source goes into <code>PENDING</code>
   *             state. If it remains in <code>PENDING</code> state for more than two weeks, it's
   *             deleted.</p>
   *         <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
   */
  public deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateEventSourceCommandOutput>;
  public deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  public deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  public deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeactivateEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): Promise<DeactivateEventSourceCommandOutput> | void {
    const command = new DeactivateEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified custom event bus or partner event bus. All rules associated with this event bus are also deleted. You can't delete your
   *         account's default event bus.</p>
   *         <note>
   *             <p>This operation is performed by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventBusCommandOutput>;
  public deleteEventBus(
    args: DeleteEventBusCommandInput,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  public deleteEventBus(
    args: DeleteEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  public deleteEventBus(
    args: DeleteEventBusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEventBusCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): Promise<DeleteEventBusCommandOutput> | void {
    const command = new DeleteEventBusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This operation is used by SaaS partners to delete a partner event source. AWS
   *             customers don't use this operation.</p>
   *         <p>When you delete an event source, the status of the corresponding partner event bus in
   *             the AWS customer account becomes <code>DELETED</code>.</p>
   */
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnerEventSourceCommandOutput>;
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): Promise<DeletePartnerEventSourceCommandOutput> | void {
    const command = new DeletePartnerEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified rule.</p>
   *         <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p>
   *
   *         <p>When you delete a rule, incoming events might continue to match to the deleted
   *             rule. Allow a short period of time for changes to take effect.</p>
   *
   *         <p>Managed rules are rules created and managed by another AWS service on your behalf.
   *             These rules are created by those other AWS services to support functionality in those
   *             services. You can delete these rules using the <code>Force</code> option, but you should
   *             do so only if you're sure that the other service isn't still using that rule.</p>
   */
  public deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  public deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays details about an event bus in your account. This can include the external AWS accounts that are permitted to write events to your
   *             default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p>
   *         <p>
   *             To enable your account to
   *             receive events from other accounts on its default event bus, use <a>PutPermission</a>.</p>
   *         <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
   */
  public describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventBusCommandOutput>;
  public describeEventBus(
    args: DescribeEventBusCommandInput,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  public describeEventBus(
    args: DescribeEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  public describeEventBus(
    args: DescribeEventBusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventBusCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): Promise<DescribeEventBusCommandOutput> | void {
    const command = new DescribeEventBusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This operation lists details about a partner event source that is shared
   *             with your account.</p>
   *         <note>
   *             <p>This operation is run by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSourceCommandOutput>;
  public describeEventSource(
    args: DescribeEventSourceCommandInput,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  public describeEventSource(
    args: DescribeEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  public describeEventSource(
    args: DescribeEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): Promise<DescribeEventSourceCommandOutput> | void {
    const command = new DescribeEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to list details about a partner event source that they have created.</p>
   *         <note>
   *             <p>AWS customers do not use this operation.
   *             Instead, AWS customers can use <a>DescribeEventSource</a> to see details about a partner event source that is shared with them.</p>
   *          </note>
   */
  public describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePartnerEventSourceCommandOutput>;
  public describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  public describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  public describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): Promise<DescribePartnerEventSourceCommandOutput> | void {
    const command = new DescribePartnerEventSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified rule.</p>
   *         <p>
   *             <code>DescribeRule</code> doesn't list the targets of a rule. To see the targets
   *             associated with a rule, use <a>ListTargetsByRule</a>.</p>
   */
  public describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleCommandOutput>;
  public describeRule(
    args: DescribeRuleCommandInput,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  public describeRule(
    args: DescribeRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  public describeRule(
    args: DescribeRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuleCommandOutput) => void
  ): Promise<DescribeRuleCommandOutput> | void {
    const command = new DescribeRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the specified rule. A disabled rule won't match any events and won't
   *             self-trigger if it has a schedule expression.</p>
   *
   *         <p>When you disable a rule, incoming events might continue to match to the disabled
   *             rule. Allow a short period of time for changes to take effect.</p>
   */
  public disableRule(
    args: DisableRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableRuleCommandOutput>;
  public disableRule(
    args: DisableRuleCommandInput,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  public disableRule(
    args: DisableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  public disableRule(
    args: DisableRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisableRuleCommandOutput) => void),
    cb?: (err: any, data?: DisableRuleCommandOutput) => void
  ): Promise<DisableRuleCommandOutput> | void {
    const command = new DisableRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the specified rule. If the rule doesn't exist, the operation
   *             fails.</p>
   *
   *         <p>When you enable a rule, incoming events might not immediately start matching to a
   *             newly enabled rule. Allow a short period of time for changes to take effect.</p>
   */
  public enableRule(
    args: EnableRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableRuleCommandOutput>;
  public enableRule(
    args: EnableRuleCommandInput,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  public enableRule(
    args: EnableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  public enableRule(
    args: EnableRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: EnableRuleCommandOutput) => void),
    cb?: (err: any, data?: EnableRuleCommandOutput) => void
  ): Promise<EnableRuleCommandOutput> | void {
    const command = new EnableRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.</p>
   *             <note>
   *             <p>This operation is run by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventBusesCommandOutput>;
  public listEventBuses(
    args: ListEventBusesCommandInput,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  public listEventBuses(
    args: ListEventBusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  public listEventBuses(
    args: ListEventBusesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEventBusesCommandOutput) => void),
    cb?: (err: any, data?: ListEventBusesCommandOutput) => void
  ): Promise<ListEventBusesCommandOutput> | void {
    const command = new ListEventBusesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You can use this to see all the partner event sources that have been shared with your AWS account.
   *                 For more information about partner event sources, see <a>CreateEventBus</a>.</p>
   *             <note>
   *             <p>This operation is run by AWS customers, not by SaaS partners.</p>
   *          </note>
   */
  public listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSourcesCommandOutput>;
  public listEventSources(
    args: ListEventSourcesCommandInput,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  public listEventSources(
    args: ListEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  public listEventSources(
    args: ListEventSourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEventSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): Promise<ListEventSourcesCommandOutput> | void {
    const command = new ListEventSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to display the AWS account ID that a particular partner event source name
   *                 is associated with.</p>
   *             <note>
   *             <p>This operation is used by SaaS partners, not by AWS customers.</p>
   *          </note>
   */
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourceAccountsCommandOutput>;
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListPartnerEventSourceAccountsCommandOutput
        ) => void),
    cb?: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): Promise<ListPartnerEventSourceAccountsCommandOutput> | void {
    const command = new ListPartnerEventSourceAccountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to list all the partner event source names that they have created.</p>
   *                 <note>
   *             <p>This operation is
   *                 not used by AWS customers.</p>
   *          </note>
   */
  public listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourcesCommandOutput>;
  public listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  public listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  public listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPartnerEventSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): Promise<ListPartnerEventSourcesCommandOutput> | void {
    const command = new ListPartnerEventSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the rules for the specified target.
   *             You can see which rules can invoke a specific target in your account.</p>
   */
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleNamesByTargetCommandOutput>;
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRuleNamesByTargetCommandOutput) => void),
    cb?: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): Promise<ListRuleNamesByTargetCommandOutput> | void {
    const command = new ListRuleNamesByTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your EventBridge rules. You can either list all the rules or
   *             provide a prefix to match to the rule names.</p>
   *
   *         <p>
   *             <code>ListRules</code> doesn't list the targets of a rule. To see the targets
   *             associated with a rule, use <a>ListTargetsByRule</a>.</p>
   */
  public listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  public listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays the tags associated with an EventBridge resource. In EventBridge, rules can be tagged.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the targets assigned to the specified rule.</p>
   */
  public listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsByRuleCommandOutput>;
  public listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  public listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  public listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTargetsByRuleCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): Promise<ListTargetsByRuleCommandOutput> | void {
    const command = new ListTargetsByRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends custom events to EventBridge so that they can be matched to rules. These events can be from your custom applications
   *         and services.</p>
   */
  public putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsCommandOutput>;
  public putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  public putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  public putEvents(
    args: PutEventsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutEventsCommandOutput) => void),
    cb?: (err: any, data?: PutEventsCommandOutput) => void
  ): Promise<PutEventsCommandOutput> | void {
    const command = new PutEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This is used by SaaS partners to write events to a customer's partner event bus.</p>
   *             <note>
   *             <p>AWS customers do not use this operation. Instead, AWS customers can use
   *                 <a>PutEvents</a> to write custom events from their own applications to an event bus.</p>
   *          </note>
   */
  public putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPartnerEventsCommandOutput>;
  public putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  public putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  public putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPartnerEventsCommandOutput) => void),
    cb?: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): Promise<PutPartnerEventsCommandOutput> | void {
    const command = new PutPartnerEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization to put events to the specified <i>event bus</i>.
   *             Rules in your account are triggered by these events arriving to an event bus in your account.  </p>
   *         <p>For another account to send events to your account, that external account must have a rule with your account's
   *         event bus as a target.</p>
   *
   *         <p>To enable multiple AWS accounts to put events to an event bus, run <code>PutPermission</code> once for each of these accounts. Or,
   *         if all the accounts are members of the same AWS organization, you can run <code>PutPermission</code> once specifying <code>Principal</code>
   *         as "*" and specifying the AWS organization ID in <code>Condition</code>, to grant permissions to all accounts
   *         in that organization.</p>
   *
   *         <p>If you grant permissions using an organization, then accounts in that
   *             organization must specify a <code>RoleArn</code> with proper permissions
   *             when they use <code>PutTarget</code> to add your account's event bus as a
   *             target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *
   *         <p>The permission policy on an event bus can't exceed 10 KB in size.</p>
   */
  public putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionCommandOutput>;
  public putPermission(
    args: PutPermissionCommandInput,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  public putPermission(
    args: PutPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  public putPermission(
    args: PutPermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPermissionCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionCommandOutput) => void
  ): Promise<PutPermissionCommandOutput> | void {
    const command = new PutPermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates the specified rule. Rules are enabled by default or based on
   *             value of the state. You can disable a rule using <a>DisableRule</a>.</p>
   *
   *         <p>A single rule watches for events from a single event bus. Events generated by AWS services go to your
   *         account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have
   *         custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you
   *         have created.  For more information, see <a>CreateEventBus</a>.</p>
   *
   *         <p>If you're updating an existing rule, the rule is replaced with what you specify in
   *             this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the
   *             old values for those arguments aren't kept. Instead, they're replaced with null
   *             values.</p>
   *
   *         <p>When you create or update a rule, incoming events might not immediately start
   *             matching to new or updated rules. Allow a short period of time for changes to take
   *             effect.</p>
   *
   *         <p>A rule must contain at least an <code>EventPattern</code> or
   *                 <code>ScheduleExpression</code>. Rules with <code>EventPatterns</code> are triggered
   *             when a matching event is observed. Rules with <code>ScheduleExpressions</code>
   *             self-trigger based on the given schedule. A rule can have both an
   *                 <code>EventPattern</code> and a <code>ScheduleExpression</code>, in which case the
   *             rule triggers on matching events as well as on a schedule.</p>
   *
   *         <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your
   *             resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with
   *             certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code>
   *         and <code>events:TagResource</code> permissions.</p>
   *         <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update
   *             the tags of an existing rule, use <a>TagResource</a> and <a>UntagResource</a>.</p>
   *
   *         <p>Most services in AWS treat <code>:</code> or <code>/</code> as the same character
   *             in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event
   *             patterns and rules. Be sure to use the correct ARN characters when creating event
   *             patterns so that they match the ARN syntax in the event that you want to
   *             match.</p>
   *
   *         <p>In EventBridge, you could create rules that lead to infinite loops, where a rule
   *             is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3
   *             bucket, and trigger software to change them to the desired state. If you don't write the
   *             rule carefully, the subsequent change to the ACLs fires the rule again, creating an
   *             infinite loop.</p>
   *         <p>To prevent this, write the rules so that the triggered actions don't refire the same
   *             rule. For example, your rule could fire only if ACLs are found to be in a bad state,
   *             instead of after any change. </p>
   *         <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting,
   *             which alerts you when charges exceed your specified limit. For more information, see
   *             <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
   */
  public putRule(
    args: PutRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuleCommandOutput>;
  public putRule(
    args: PutRuleCommandInput,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  public putRule(
    args: PutRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  public putRule(
    args: PutRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutRuleCommandOutput) => void),
    cb?: (err: any, data?: PutRuleCommandOutput) => void
  ): Promise<PutRuleCommandOutput> | void {
    const command = new PutRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified targets to the specified rule, or updates the targets if they're
   *             already associated with the rule.</p>
   *         <p>Targets are the resources that are invoked when a rule is triggered.</p>
   *         <p>You can configure the following as targets in EventBridge:</p>
   *
   *            <ul>
   *             <li>
   *                <p>EC2 instances</p>
   *             </li>
   *             <li>
   *                <p>SSM Run Command</p>
   *             </li>
   *             <li>
   *                <p>SSM Automation</p>
   *             </li>
   *             <li>
   *                <p>AWS Lambda functions</p>
   *             </li>
   *             <li>
   *                <p>Data streams in Amazon Kinesis Data Streams</p>
   *             </li>
   *             <li>
   *                <p>Data delivery streams in Amazon Kinesis Data Firehose</p>
   *             </li>
   *             <li>
   *                <p>Amazon ECS tasks</p>
   *             </li>
   *             <li>
   *                <p>AWS Step Functions state machines</p>
   *             </li>
   *             <li>
   *                <p>AWS Batch jobs</p>
   *             </li>
   *             <li>
   *                <p>AWS CodeBuild projects</p>
   *             </li>
   *             <li>
   *                <p>Pipelines in AWS CodePipeline</p>
   *             </li>
   *             <li>
   *                <p>Amazon Inspector assessment templates</p>
   *             </li>
   *             <li>
   *                <p>Amazon SNS topics</p>
   *             </li>
   *             <li>
   *                <p>Amazon SQS queues, including FIFO queues</p>
   *             </li>
   *             <li>
   *                <p>The default event bus of another AWS account</p>
   *             </li>
   *          </ul>
   *
   *
   *
   *         <p>Creating rules with built-in targets is supported only on the AWS Management
   *             Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2
   *                 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and
   *                 <code>EC2 TerminateInstances API call</code>. </p>
   *
   *         <p>For some target types, <code>PutTargets</code> provides target-specific parameters.
   *             If the target is a Kinesis data stream, you can optionally specify which shard the event
   *             goes to by using the <code>KinesisParameters</code> argument. To invoke a command on
   *             multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code>
   *             field.</p>
   *         <p>To be able to make API calls against the resources that you own, Amazon EventBridge
   *             needs the appropriate permissions. For AWS Lambda and Amazon SNS resources,
   *             EventBridge relies on resource-based policies. For EC2 instances, Kinesis data
   *             streams, and AWS Step Functions state machines, EventBridge relies on IAM roles
   *             that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For
   *             more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication
   *                 and Access Control</a> in the <i>Amazon EventBridge User
   *                 Guide</i>.</p>
   *         <p>If another AWS account is in the same Region and has granted you permission (using
   *                 <code>PutPermission</code>), you can send events to that account. Set that account's
   *             event bus as a target of the rules in your account. To send the matched events to the
   *             other account, specify that account's event bus as the <code>Arn</code> value when you
   *             run <code>PutTargets</code>. If your account sends events to another account, your
   *             account is charged for each sent event. Each event sent to another account is charged as
   *             a custom event. The account receiving the event isn't charged. For more information, see
   *                 <a href="https://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge
   *                 Pricing</a>.</p>
   *
   *         <p>If you're setting an event bus in another account as the target and that account
   *             granted permission to your account through an organization instead of directly by the
   *             account ID, you must specify a <code>RoleArn</code> with proper permissions in the
   *                 <code>Target</code> structure. For more information, see
   *             <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon
   *                 EventBridge User Guide</i>.</p>
   *
   *         <p>For more information about enabling cross-account
   *             events, see <a>PutPermission</a>.</p>
   *
   *         <p>
   *             <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are
   *             mutually exclusive and optional parameters of a target. When a rule is triggered due to
   *             a matched event:</p>
   *
   *         <ul>
   *             <li>
   *                <p>If none of the following arguments are specified for a target, the entire event is passed
   *                     to the target in JSON format (unless the target is Amazon EC2 Run Command or
   *                     Amazon ECS task, in which case nothing from the event is passed to the
   *                     target).</p>
   *             </li>
   *             <li>
   *                 <p>If <code>Input</code> is specified in the form of valid JSON, then the
   *                     matched event is overridden with this constant.</p>
   *             </li>
   *             <li>
   *                <p>If <code>InputPath</code> is specified in the form of JSONPath (for example,
   *                         <code>$.detail</code>), only the part of the event specified in the path is
   *                     passed to the target (for example, only the detail part of the event is
   *                     passed).</p>
   *             </li>
   *             <li>
   *                <p>If <code>InputTransformer</code> is specified, one or more specified JSONPaths are
   *                     extracted from the event and used as values in a template that you specify as
   *                     the input to the target.</p>
   *             </li>
   *          </ul>
   *
   *         <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p>
   *
   *         <p>When you add targets to a rule and the associated rule triggers soon after, new or
   *             updated targets might not be immediately invoked. Allow a short period of time for
   *             changes to take effect.</p>
   *
   *         <p>This action can partially fail if too many requests are made at the same time. If
   *             that happens, <code>FailedEntryCount</code> is nonzero in the response, and each entry
   *             in <code>FailedEntries</code> provides the ID of the failed target and the error
   *             code.</p>
   */
  public putTargets(
    args: PutTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTargetsCommandOutput>;
  public putTargets(
    args: PutTargetsCommandInput,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  public putTargets(
    args: PutTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  public putTargets(
    args: PutTargetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutTargetsCommandOutput) => void),
    cb?: (err: any, data?: PutTargetsCommandOutput) => void
  ): Promise<PutTargetsCommandOutput> | void {
    const command = new PutTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes the permission of another AWS account to be able to put events to the specified event bus. Specify the account to
   *             revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>.
   *             You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.</p>
   */
  public removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  public removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p>
   *
   *         <p>When you remove a target, when the associated rule triggers, removed targets might
   *             continue to be invoked. Allow a short period of time for changes to take
   *             effect.</p>
   *
   *         <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and
   *             each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
   */
  public removeTargets(
    args: RemoveTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTargetsCommandOutput>;
  public removeTargets(
    args: RemoveTargetsCommandInput,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;
  public removeTargets(
    args: RemoveTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;
  public removeTargets(
    args: RemoveTargetsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveTargetsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): Promise<RemoveTargetsCommandOutput> | void {
    const command = new RemoveTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge
   *             resource. Tags can help you organize and categorize your resources. You can also use
   *             them to scope user permissions by granting a user permission to access or change only
   *             resources with certain tag values. In EventBridge, rules can be tagged.</p>
   *             <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as
   *             strings of characters.</p>
   *             <p>You can use the <code>TagResource</code> action with a rule that already has tags.
   *             If you specify a new tag key for the rule, this tag is appended to the list of tags
   *             associated with the rule. If you specify a tag key that is already associated with the
   *             rule, the new tag value that you specify replaces the previous value for that
   *             tag.</p>
   *             <p>You can associate as many as 50 tags with a resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tests whether the specified event pattern matches the provided event.</p>
   *         <p>Most services in AWS treat <code>:</code> or <code>/</code> as the same character
   *             in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event
   *             patterns and rules. Be sure to use the correct ARN characters when creating event
   *             patterns so that they match the ARN syntax in the event that you want to
   *             match.</p>
   */
  public testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestEventPatternCommandOutput>;
  public testEventPattern(
    args: TestEventPatternCommandInput,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  public testEventPattern(
    args: TestEventPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  public testEventPattern(
    args: TestEventPatternCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TestEventPatternCommandOutput) => void),
    cb?: (err: any, data?: TestEventPatternCommandOutput) => void
  ): Promise<TestEventPatternCommandOutput> | void {
    const command = new TestEventPatternCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from the specified EventBridge resource. In EventBridge, rules can be tagged.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
