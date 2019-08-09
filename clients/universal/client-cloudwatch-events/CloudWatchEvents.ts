import { CloudWatchEventsClient } from "./CloudWatchEventsClient";
import { ActivateEventSourceInput } from "./types/ActivateEventSourceInput";
import { ActivateEventSourceOutput } from "./types/ActivateEventSourceOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateEventBusInput } from "./types/CreateEventBusInput";
import { CreateEventBusOutput } from "./types/CreateEventBusOutput";
import { CreatePartnerEventSourceInput } from "./types/CreatePartnerEventSourceInput";
import { CreatePartnerEventSourceOutput } from "./types/CreatePartnerEventSourceOutput";
import { DeactivateEventSourceInput } from "./types/DeactivateEventSourceInput";
import { DeactivateEventSourceOutput } from "./types/DeactivateEventSourceOutput";
import { DeleteEventBusInput } from "./types/DeleteEventBusInput";
import { DeleteEventBusOutput } from "./types/DeleteEventBusOutput";
import { DeletePartnerEventSourceInput } from "./types/DeletePartnerEventSourceInput";
import { DeletePartnerEventSourceOutput } from "./types/DeletePartnerEventSourceOutput";
import { DeleteRuleInput } from "./types/DeleteRuleInput";
import { DeleteRuleOutput } from "./types/DeleteRuleOutput";
import { DescribeEventBusInput } from "./types/DescribeEventBusInput";
import { DescribeEventBusOutput } from "./types/DescribeEventBusOutput";
import { DescribeEventSourceInput } from "./types/DescribeEventSourceInput";
import { DescribeEventSourceOutput } from "./types/DescribeEventSourceOutput";
import { DescribePartnerEventSourceInput } from "./types/DescribePartnerEventSourceInput";
import { DescribePartnerEventSourceOutput } from "./types/DescribePartnerEventSourceOutput";
import { DescribeRuleInput } from "./types/DescribeRuleInput";
import { DescribeRuleOutput } from "./types/DescribeRuleOutput";
import { DisableRuleInput } from "./types/DisableRuleInput";
import { DisableRuleOutput } from "./types/DisableRuleOutput";
import { EnableRuleInput } from "./types/EnableRuleInput";
import { EnableRuleOutput } from "./types/EnableRuleOutput";
import { InternalException } from "./types/InternalException";
import { InvalidEventPatternException } from "./types/InvalidEventPatternException";
import { InvalidStateException } from "./types/InvalidStateException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListEventBusesInput } from "./types/ListEventBusesInput";
import { ListEventBusesOutput } from "./types/ListEventBusesOutput";
import { ListEventSourcesInput } from "./types/ListEventSourcesInput";
import { ListEventSourcesOutput } from "./types/ListEventSourcesOutput";
import { ListPartnerEventSourceAccountsInput } from "./types/ListPartnerEventSourceAccountsInput";
import { ListPartnerEventSourceAccountsOutput } from "./types/ListPartnerEventSourceAccountsOutput";
import { ListPartnerEventSourcesInput } from "./types/ListPartnerEventSourcesInput";
import { ListPartnerEventSourcesOutput } from "./types/ListPartnerEventSourcesOutput";
import { ListRuleNamesByTargetInput } from "./types/ListRuleNamesByTargetInput";
import { ListRuleNamesByTargetOutput } from "./types/ListRuleNamesByTargetOutput";
import { ListRulesInput } from "./types/ListRulesInput";
import { ListRulesOutput } from "./types/ListRulesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTargetsByRuleInput } from "./types/ListTargetsByRuleInput";
import { ListTargetsByRuleOutput } from "./types/ListTargetsByRuleOutput";
import { ManagedRuleException } from "./types/ManagedRuleException";
import { PolicyLengthExceededException } from "./types/PolicyLengthExceededException";
import { PutEventsInput } from "./types/PutEventsInput";
import { PutEventsOutput } from "./types/PutEventsOutput";
import { PutPartnerEventsInput } from "./types/PutPartnerEventsInput";
import { PutPartnerEventsOutput } from "./types/PutPartnerEventsOutput";
import { PutPermissionInput } from "./types/PutPermissionInput";
import { PutPermissionOutput } from "./types/PutPermissionOutput";
import { PutRuleInput } from "./types/PutRuleInput";
import { PutRuleOutput } from "./types/PutRuleOutput";
import { PutTargetsInput } from "./types/PutTargetsInput";
import { PutTargetsOutput } from "./types/PutTargetsOutput";
import { RemovePermissionInput } from "./types/RemovePermissionInput";
import { RemovePermissionOutput } from "./types/RemovePermissionOutput";
import { RemoveTargetsInput } from "./types/RemoveTargetsInput";
import { RemoveTargetsOutput } from "./types/RemoveTargetsOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TestEventPatternInput } from "./types/TestEventPatternInput";
import { TestEventPatternOutput } from "./types/TestEventPatternOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { ActivateEventSourceCommand } from "./commands/ActivateEventSourceCommand";
import { CreateEventBusCommand } from "./commands/CreateEventBusCommand";
import { CreatePartnerEventSourceCommand } from "./commands/CreatePartnerEventSourceCommand";
import { DeactivateEventSourceCommand } from "./commands/DeactivateEventSourceCommand";
import { DeleteEventBusCommand } from "./commands/DeleteEventBusCommand";
import { DeletePartnerEventSourceCommand } from "./commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommand } from "./commands/DeleteRuleCommand";
import { DescribeEventBusCommand } from "./commands/DescribeEventBusCommand";
import { DescribeEventSourceCommand } from "./commands/DescribeEventSourceCommand";
import { DescribePartnerEventSourceCommand } from "./commands/DescribePartnerEventSourceCommand";
import { DescribeRuleCommand } from "./commands/DescribeRuleCommand";
import { DisableRuleCommand } from "./commands/DisableRuleCommand";
import { EnableRuleCommand } from "./commands/EnableRuleCommand";
import { ListEventBusesCommand } from "./commands/ListEventBusesCommand";
import { ListEventSourcesCommand } from "./commands/ListEventSourcesCommand";
import { ListPartnerEventSourceAccountsCommand } from "./commands/ListPartnerEventSourceAccountsCommand";
import { ListPartnerEventSourcesCommand } from "./commands/ListPartnerEventSourcesCommand";
import { ListRuleNamesByTargetCommand } from "./commands/ListRuleNamesByTargetCommand";
import { ListRulesCommand } from "./commands/ListRulesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTargetsByRuleCommand } from "./commands/ListTargetsByRuleCommand";
import { PutEventsCommand } from "./commands/PutEventsCommand";
import { PutPartnerEventsCommand } from "./commands/PutPartnerEventsCommand";
import { PutPermissionCommand } from "./commands/PutPermissionCommand";
import { PutRuleCommand } from "./commands/PutRuleCommand";
import { PutTargetsCommand } from "./commands/PutTargetsCommand";
import { RemovePermissionCommand } from "./commands/RemovePermissionCommand";
import { RemoveTargetsCommand } from "./commands/RemoveTargetsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestEventPatternCommand } from "./commands/TestEventPatternCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class CloudWatchEvents extends CloudWatchEventsClient {
  /**
   * <p>Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.</p> <note> <p>This operation is performed by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InvalidStateException} <p>The specified state isn't a valid state for an event source.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public activateEventSource(
    args: ActivateEventSourceInput
  ): Promise<ActivateEventSourceOutput>;
  public activateEventSource(
    args: ActivateEventSourceInput,
    cb: (err: any, data?: ActivateEventSourceOutput) => void
  ): void;
  public activateEventSource(
    args: ActivateEventSourceInput,
    cb?: (err: any, data?: ActivateEventSourceOutput) => void
  ): Promise<ActivateEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ActivateEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your own custom applications and services, or it can be a partner event bus which can be matched to a partner event source.</p> <note> <p>This operation is used by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource that you're trying to create already exists.</p>
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InvalidStateException} <p>The specified state isn't a valid state for an event source.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {LimitExceededException} <p>You tried to create more resources than is allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEventBus(
    args: CreateEventBusInput
  ): Promise<CreateEventBusOutput>;
  public createEventBus(
    args: CreateEventBusInput,
    cb: (err: any, data?: CreateEventBusOutput) => void
  ): void;
  public createEventBus(
    args: CreateEventBusInput,
    cb?: (err: any, data?: CreateEventBusOutput) => void
  ): Promise<CreateEventBusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEventBusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Called by an SaaS partner to create a partner event source.</p> <note> <p>This operation is not used by AWS customers.</p> </note> <p>Each partner event source can be used by one AWS account to create a matching partner event bus in that AWS account. A SaaS partner must create one partner event source for each AWS account that wants to receive those event types. </p> <p>A partner event source creates events based on resources in the SaaS partner's service or application.</p> <p>An AWS account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using AWS Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code>aws.partner/<i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <ul> <li> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to AWS customers.</p> </li> <li> <p>For <i>event_namespace</i>, we recommend that partners use a string that identifies the AWS customer within the partner's system. This should not be the customer's AWS account ID.</p> </li> <li> <p> <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. This should help AWS customers decide whether to create an event bus to receive these events.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsException} <p>The resource that you're trying to create already exists.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {LimitExceededException} <p>You tried to create more resources than is allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPartnerEventSource(
    args: CreatePartnerEventSourceInput
  ): Promise<CreatePartnerEventSourceOutput>;
  public createPartnerEventSource(
    args: CreatePartnerEventSourceInput,
    cb: (err: any, data?: CreatePartnerEventSourceOutput) => void
  ): void;
  public createPartnerEventSource(
    args: CreatePartnerEventSourceInput,
    cb?: (err: any, data?: CreatePartnerEventSourceOutput) => void
  ): Promise<CreatePartnerEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePartnerEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An AWS customer uses this operation to temporarily stop receiving events from the specified partner event source. The matching event bus isn't deleted. </p> <p>When you deactivate a partner event source, the source goes into <code>PENDING</code> state. If it remains in <code>PENDING</code> state for more than two weeks, it's deleted.</p> <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InvalidStateException} <p>The specified state isn't a valid state for an event source.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deactivateEventSource(
    args: DeactivateEventSourceInput
  ): Promise<DeactivateEventSourceOutput>;
  public deactivateEventSource(
    args: DeactivateEventSourceInput,
    cb: (err: any, data?: DeactivateEventSourceOutput) => void
  ): void;
  public deactivateEventSource(
    args: DeactivateEventSourceInput,
    cb?: (err: any, data?: DeactivateEventSourceOutput) => void
  ): Promise<DeactivateEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeactivateEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified custom event bus or partner event bus. All rules associated with this event bus are also deleted. You can't delete your account's default event bus.</p> <note> <p>This operation is performed by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventBus(
    args: DeleteEventBusInput
  ): Promise<DeleteEventBusOutput>;
  public deleteEventBus(
    args: DeleteEventBusInput,
    cb: (err: any, data?: DeleteEventBusOutput) => void
  ): void;
  public deleteEventBus(
    args: DeleteEventBusInput,
    cb?: (err: any, data?: DeleteEventBusOutput) => void
  ): Promise<DeleteEventBusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventBusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation is used by SaaS partners to delete a partner event source. AWS customers don't use this operation.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the AWS customer account becomes <code>DELETED</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceInput
  ): Promise<DeletePartnerEventSourceOutput>;
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceInput,
    cb: (err: any, data?: DeletePartnerEventSourceOutput) => void
  ): void;
  public deletePartnerEventSource(
    args: DeletePartnerEventSourceInput,
    cb?: (err: any, data?: DeletePartnerEventSourceOutput) => void
  ): Promise<DeletePartnerEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePartnerEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>Managed rules are rules created and managed by another AWS service on your behalf. These rules are created by those other AWS services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you're sure that the other service isn't still using that rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRule(args: DeleteRuleInput): Promise<DeleteRuleOutput>;
  public deleteRule(
    args: DeleteRuleInput,
    cb: (err: any, data?: DeleteRuleOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleInput,
    cb?: (err: any, data?: DeleteRuleOutput) => void
  ): Promise<DeleteRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays details about an event bus in your account. This can include the external AWS accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a>PutPermission</a>.</p> <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventBus(
    args: DescribeEventBusInput
  ): Promise<DescribeEventBusOutput>;
  public describeEventBus(
    args: DescribeEventBusInput,
    cb: (err: any, data?: DescribeEventBusOutput) => void
  ): void;
  public describeEventBus(
    args: DescribeEventBusInput,
    cb?: (err: any, data?: DescribeEventBusOutput) => void
  ): Promise<DescribeEventBusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventBusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation lists details about a partner event source that is shared with your account.</p> <note> <p>This operation is run by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventSource(
    args: DescribeEventSourceInput
  ): Promise<DescribeEventSourceOutput>;
  public describeEventSource(
    args: DescribeEventSourceInput,
    cb: (err: any, data?: DescribeEventSourceOutput) => void
  ): void;
  public describeEventSource(
    args: DescribeEventSourceInput,
    cb?: (err: any, data?: DescribeEventSourceOutput) => void
  ): Promise<DescribeEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to list details about a partner event source that they have created.</p> <note> <p>AWS customers do not use this operation. Instead, AWS customers can use <a>DescribeEventSource</a> to see details about a partner event source that is shared with them.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePartnerEventSource(
    args: DescribePartnerEventSourceInput
  ): Promise<DescribePartnerEventSourceOutput>;
  public describePartnerEventSource(
    args: DescribePartnerEventSourceInput,
    cb: (err: any, data?: DescribePartnerEventSourceOutput) => void
  ): void;
  public describePartnerEventSource(
    args: DescribePartnerEventSourceInput,
    cb?: (err: any, data?: DescribePartnerEventSourceOutput) => void
  ): Promise<DescribePartnerEventSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePartnerEventSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified rule.</p> <p> <code>DescribeRule</code> doesn't list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRule(args: DescribeRuleInput): Promise<DescribeRuleOutput>;
  public describeRule(
    args: DescribeRuleInput,
    cb: (err: any, data?: DescribeRuleOutput) => void
  ): void;
  public describeRule(
    args: DescribeRuleInput,
    cb?: (err: any, data?: DescribeRuleOutput) => void
  ): Promise<DescribeRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the specified rule. A disabled rule won't match any events and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableRule(args: DisableRuleInput): Promise<DisableRuleOutput>;
  public disableRule(
    args: DisableRuleInput,
    cb: (err: any, data?: DisableRuleOutput) => void
  ): void;
  public disableRule(
    args: DisableRuleInput,
    cb?: (err: any, data?: DisableRuleOutput) => void
  ): Promise<DisableRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the specified rule. If the rule doesn't exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableRule(args: EnableRuleInput): Promise<EnableRuleOutput>;
  public enableRule(
    args: EnableRuleInput,
    cb: (err: any, data?: EnableRuleOutput) => void
  ): void;
  public enableRule(
    args: EnableRuleInput,
    cb?: (err: any, data?: EnableRuleOutput) => void
  ): Promise<EnableRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.</p> <note> <p>This operation is run by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEventBuses(
    args: ListEventBusesInput
  ): Promise<ListEventBusesOutput>;
  public listEventBuses(
    args: ListEventBusesInput,
    cb: (err: any, data?: ListEventBusesOutput) => void
  ): void;
  public listEventBuses(
    args: ListEventBusesInput,
    cb?: (err: any, data?: ListEventBusesOutput) => void
  ): Promise<ListEventBusesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEventBusesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You can use this to see all the partner event sources that have been shared with your AWS account. For more information about partner event sources, see <a>CreateEventBus</a>.</p> <note> <p>This operation is run by AWS customers, not by SaaS partners.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEventSources(
    args: ListEventSourcesInput
  ): Promise<ListEventSourcesOutput>;
  public listEventSources(
    args: ListEventSourcesInput,
    cb: (err: any, data?: ListEventSourcesOutput) => void
  ): void;
  public listEventSources(
    args: ListEventSourcesInput,
    cb?: (err: any, data?: ListEventSourcesOutput) => void
  ): Promise<ListEventSourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEventSourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to display the AWS account ID that a particular partner event source name is associated with.</p> <note> <p>This operation is used by SaaS partners, not by AWS customers.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsInput
  ): Promise<ListPartnerEventSourceAccountsOutput>;
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsInput,
    cb: (err: any, data?: ListPartnerEventSourceAccountsOutput) => void
  ): void;
  public listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsInput,
    cb?: (err: any, data?: ListPartnerEventSourceAccountsOutput) => void
  ): Promise<ListPartnerEventSourceAccountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPartnerEventSourceAccountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>An SaaS partner can use this operation to list all the partner event source names that they have created.</p> <note> <p>This operation is not used by AWS customers.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPartnerEventSources(
    args: ListPartnerEventSourcesInput
  ): Promise<ListPartnerEventSourcesOutput>;
  public listPartnerEventSources(
    args: ListPartnerEventSourcesInput,
    cb: (err: any, data?: ListPartnerEventSourcesOutput) => void
  ): void;
  public listPartnerEventSources(
    args: ListPartnerEventSourcesInput,
    cb?: (err: any, data?: ListPartnerEventSourcesOutput) => void
  ): Promise<ListPartnerEventSourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPartnerEventSourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the rules for the specified target. You can see which rules can invoke a specific target in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetInput
  ): Promise<ListRuleNamesByTargetOutput>;
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetInput,
    cb: (err: any, data?: ListRuleNamesByTargetOutput) => void
  ): void;
  public listRuleNamesByTarget(
    args: ListRuleNamesByTargetInput,
    cb?: (err: any, data?: ListRuleNamesByTargetOutput) => void
  ): Promise<ListRuleNamesByTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRuleNamesByTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists your EventBridge rules. You can either list all the rules or provide a prefix to match to the rule names.</p> <p> <code>ListRules</code> doesn't list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRules(args: ListRulesInput): Promise<ListRulesOutput>;
  public listRules(
    args: ListRulesInput,
    cb: (err: any, data?: ListRulesOutput) => void
  ): void;
  public listRules(
    args: ListRulesInput,
    cb?: (err: any, data?: ListRulesOutput) => void
  ): Promise<ListRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays the tags associated with an EventBridge resource. In EventBridge, rules can be tagged.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the targets assigned to the specified rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTargetsByRule(
    args: ListTargetsByRuleInput
  ): Promise<ListTargetsByRuleOutput>;
  public listTargetsByRule(
    args: ListTargetsByRuleInput,
    cb: (err: any, data?: ListTargetsByRuleOutput) => void
  ): void;
  public listTargetsByRule(
    args: ListTargetsByRuleInput,
    cb?: (err: any, data?: ListTargetsByRuleOutput) => void
  ): Promise<ListTargetsByRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTargetsByRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends custom events to EventBridge so that they can be matched to rules. These events can be from your custom applications and services.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEvents(args: PutEventsInput): Promise<PutEventsOutput>;
  public putEvents(
    args: PutEventsInput,
    cb: (err: any, data?: PutEventsOutput) => void
  ): void;
  public putEvents(
    args: PutEventsInput,
    cb?: (err: any, data?: PutEventsOutput) => void
  ): Promise<PutEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This is used by SaaS partners to write events to a customer's partner event bus.</p> <note> <p>AWS customers do not use this operation. Instead, AWS customers can use <a>PutEvents</a> to write custom events from their own applications to an event bus.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPartnerEvents(
    args: PutPartnerEventsInput
  ): Promise<PutPartnerEventsOutput>;
  public putPartnerEvents(
    args: PutPartnerEventsInput,
    cb: (err: any, data?: PutPartnerEventsOutput) => void
  ): void;
  public putPartnerEvents(
    args: PutPartnerEventsInput,
    cb?: (err: any, data?: PutPartnerEventsOutput) => void
  ): Promise<PutPartnerEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPartnerEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization to put events to the specified <i>event bus</i>. Rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have a rule with your account's event bus as a target.</p> <p>To enable multiple AWS accounts to put events to an event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the AWS organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on an event bus can't exceed 10 KB in size.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {PolicyLengthExceededException} <p>The event bus policy is too long. For more information, see the limits.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPermission(args: PutPermissionInput): Promise<PutPermissionOutput>;
  public putPermission(
    args: PutPermissionInput,
    cb: (err: any, data?: PutPermissionOutput) => void
  ): void;
  public putPermission(
    args: PutPermissionInput,
    cb?: (err: any, data?: PutPermissionOutput) => void
  ): Promise<PutPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates the specified rule. Rules are enabled by default or based on value of the state. You can disable a rule using <a>DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a>CreateEventBus</a>.</p> <p>If you're updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments aren't kept. Instead, they're replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an <code>EventPattern</code> or <code>ScheduleExpression</code>. Rules with <code>EventPatterns</code> are triggered when a matching event is observed. Rules with <code>ScheduleExpressions</code> self-trigger based on the given schedule. A rule can have both an <code>EventPattern</code> and a <code>ScheduleExpression</code>, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a>TagResource</a> and <a>UntagResource</a>.</p> <p>Most services in AWS treat <code>:</code> or <code>/</code> as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event that you want to match.</p> <p>In EventBridge, you could create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If you don't write the rule carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions don't refire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidEventPatternException} <p>The event pattern isn't valid.</p>
   *   - {LimitExceededException} <p>You tried to create more resources than is allowed.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRule(args: PutRuleInput): Promise<PutRuleOutput>;
  public putRule(
    args: PutRuleInput,
    cb: (err: any, data?: PutRuleOutput) => void
  ): void;
  public putRule(
    args: PutRuleInput,
    cb?: (err: any, data?: PutRuleOutput) => void
  ): Promise<PutRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified targets to the specified rule, or updates the targets if they're already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets in EventBridge:</p> <ul> <li> <p>EC2 instances</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>AWS Lambda functions</p> </li> <li> <p>Data streams in Amazon Kinesis Data Streams</p> </li> <li> <p>Data delivery streams in Amazon Kinesis Data Firehose</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>AWS Step Functions state machines</p> </li> <li> <p>AWS Batch jobs</p> </li> <li> <p>AWS CodeBuild projects</p> </li> <li> <p>Pipelines in AWS CodePipeline</p> </li> <li> <p>Amazon Inspector assessment templates</p> </li> <li> <p>Amazon SNS topics</p> </li> <li> <p>Amazon SQS queues, including FIFO queues</p> </li> <li> <p>The default event bus of another AWS account</p> </li> </ul> <p>Creating rules with built-in targets is supported only on the AWS Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis data streams, and AWS Step Functions state machines, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another AWS account is in the same Region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event isn't charged. For more information, see <a href="https://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <p>If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a>PutPermission</a>.</p> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <code>Input</code> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <code>InputPath</code> is specified in the form of JSONPath (for example, <code>$.detail</code>), only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <code>InputTransformer</code> is specified, one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is nonzero in the response, and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {LimitExceededException} <p>You tried to create more resources than is allowed.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putTargets(args: PutTargetsInput): Promise<PutTargetsOutput>;
  public putTargets(
    args: PutTargetsInput,
    cb: (err: any, data?: PutTargetsOutput) => void
  ): void;
  public putTargets(
    args: PutTargetsInput,
    cb?: (err: any, data?: PutTargetsOutput) => void
  ): Promise<PutTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes the permission of another AWS account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removePermission(
    args: RemovePermissionInput
  ): Promise<RemovePermissionOutput>;
  public removePermission(
    args: RemovePermissionInput,
    cb: (err: any, data?: RemovePermissionOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionInput,
    cb?: (err: any, data?: RemovePermissionOutput) => void
  ): Promise<RemovePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemovePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTargets(args: RemoveTargetsInput): Promise<RemoveTargetsOutput>;
  public removeTargets(
    args: RemoveTargetsInput,
    cb: (err: any, data?: RemoveTargetsOutput) => void
  ): void;
  public removeTargets(
    args: RemoveTargetsInput,
    cb?: (err: any, data?: RemoveTargetsOutput) => void
  ): Promise<RemoveTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a rule that already has tags. If you specify a new tag key for the rule, this tag is appended to the list of tags associated with the rule. If you specify a tag key that is already associated with the rule, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in AWS treat <code>:</code> or <code>/</code> as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event that you want to match.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidEventPatternException} <p>The event pattern isn't valid.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testEventPattern(
    args: TestEventPatternInput
  ): Promise<TestEventPatternOutput>;
  public testEventPattern(
    args: TestEventPatternInput,
    cb: (err: any, data?: TestEventPatternOutput) => void
  ): void;
  public testEventPattern(
    args: TestEventPatternInput,
    cb?: (err: any, data?: TestEventPatternOutput) => void
  ): Promise<TestEventPatternOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestEventPatternCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the specified EventBridge resource. In EventBridge, rules can be tagged.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An entity that you specified doesn't exist.</p>
   *   - {InternalException} <p>This exception occurs due to unexpected causes.</p>
   *   - {ConcurrentModificationException} <p>There is concurrent modification on a resource.</p>
   *   - {ManagedRuleException} <p>An AWS service created this rule on behalf of your account. That service manages it. If you see this error in response to <code>DeleteRule</code> or <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to delete the rule or remove targets from the rule. You can't modify these managed rules by using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>, <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
