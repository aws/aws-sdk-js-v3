import { EventBridgeClient } from "./EventBridgeClient";
import {
  ActivateEventSourceCommand,
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "./commands/ActivateEventSourceCommand";
import {
  CancelReplayCommand,
  CancelReplayCommandInput,
  CancelReplayCommandOutput,
} from "./commands/CancelReplayCommand";
import {
  CreateApiDestinationCommand,
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "./commands/CreateApiDestinationCommand";
import {
  CreateArchiveCommand,
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
} from "./commands/CreateArchiveCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateEventBusCommand,
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
} from "./commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommand,
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "./commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommand,
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "./commands/DeactivateEventSourceCommand";
import {
  DeauthorizeConnectionCommand,
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "./commands/DeauthorizeConnectionCommand";
import {
  DeleteApiDestinationCommand,
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "./commands/DeleteApiDestinationCommand";
import {
  DeleteArchiveCommand,
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
} from "./commands/DeleteArchiveCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEventBusCommand,
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput,
} from "./commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommand,
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "./commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DescribeApiDestinationCommand,
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "./commands/DescribeApiDestinationCommand";
import {
  DescribeArchiveCommand,
  DescribeArchiveCommandInput,
  DescribeArchiveCommandOutput,
} from "./commands/DescribeArchiveCommand";
import {
  DescribeConnectionCommand,
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
} from "./commands/DescribeConnectionCommand";
import {
  DescribeEventBusCommand,
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
} from "./commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommand,
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommand,
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "./commands/DescribePartnerEventSourceCommand";
import {
  DescribeReplayCommand,
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
} from "./commands/DescribeReplayCommand";
import {
  DescribeRuleCommand,
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput,
} from "./commands/DescribeRuleCommand";
import { DisableRuleCommand, DisableRuleCommandInput, DisableRuleCommandOutput } from "./commands/DisableRuleCommand";
import { EnableRuleCommand, EnableRuleCommandInput, EnableRuleCommandOutput } from "./commands/EnableRuleCommand";
import {
  ListApiDestinationsCommand,
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "./commands/ListApiDestinationsCommand";
import {
  ListArchivesCommand,
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
} from "./commands/ListArchivesCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListEventBusesCommand,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
} from "./commands/ListEventBusesCommand";
import {
  ListEventSourcesCommand,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
} from "./commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommand,
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "./commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommand, ListReplaysCommandInput, ListReplaysCommandOutput } from "./commands/ListReplaysCommand";
import {
  ListRuleNamesByTargetCommand,
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "./commands/ListRuleNamesByTargetCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommand,
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
} from "./commands/ListTargetsByRuleCommand";
import { PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import {
  PutPartnerEventsCommand,
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
} from "./commands/PutPartnerEventsCommand";
import {
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
} from "./commands/PutPermissionCommand";
import { PutRuleCommand, PutRuleCommandInput, PutRuleCommandOutput } from "./commands/PutRuleCommand";
import { PutTargetsCommand, PutTargetsCommandInput, PutTargetsCommandOutput } from "./commands/PutTargetsCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  RemoveTargetsCommand,
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
} from "./commands/RemoveTargetsCommand";
import { StartReplayCommand, StartReplayCommandInput, StartReplayCommandOutput } from "./commands/StartReplayCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestEventPatternCommand,
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
} from "./commands/TestEventPatternCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApiDestinationCommand,
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "./commands/UpdateApiDestinationCommand";
import {
  UpdateArchiveCommand,
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
} from "./commands/UpdateArchiveCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your
 *       resources change state, they automatically send events to an event stream. You can create
 *       rules that match selected events in the stream and route them to targets to take action. You
 *       can also use rules to take action on a predetermined schedule. For example, you can configure
 *       rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an Lambda function to update DNS entries when an event
 *           notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for
 *           detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 */
export class EventBridge extends EventBridgeClient {
  /**
   * <p>Activates a partner event source that has been deactivated. Once activated, your matching
   *       event bus will start receiving events from the event source.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateEventSourceCommandOutput) => void),
    cb?: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): Promise<ActivateEventSourceCommandOutput> | void {
    const command = new ActivateEventSourceCommand(args);
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
   * <p>Cancels the specified replay.</p>
   */
  public cancelReplay(
    args: CancelReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReplayCommandOutput>;
  public cancelReplay(args: CancelReplayCommandInput, cb: (err: any, data?: CancelReplayCommandOutput) => void): void;
  public cancelReplay(
    args: CancelReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;
  public cancelReplay(
    args: CancelReplayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelReplayCommandOutput) => void),
    cb?: (err: any, data?: CancelReplayCommandOutput) => void
  ): Promise<CancelReplayCommandOutput> | void {
    const command = new CancelReplayCommand(args);
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
   * <p>Creates an API destination, which is an HTTP invocation endpoint configured as a target
   *       for events.</p>
   */
  public createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiDestinationCommandOutput>;
  public createApiDestination(
    args: CreateApiDestinationCommandInput,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  public createApiDestination(
    args: CreateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  public createApiDestination(
    args: CreateApiDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApiDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): Promise<CreateApiDestinationCommandOutput> | void {
    const command = new CreateApiDestinationCommand(args);
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
   * <p>Creates an archive of events with the specified settings. When you create an archive,
   *       incoming events might not immediately start being sent to the archive. Allow a short period of
   *       time for changes to take effect. If you do not specify a pattern to filter events sent to the
   *       archive, all events are sent to the archive except replayed events. Replayed events are not
   *       sent to an archive.</p>
   */
  public createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveCommandOutput>;
  public createArchive(
    args: CreateArchiveCommandInput,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  public createArchive(
    args: CreateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  public createArchive(
    args: CreateArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateArchiveCommandOutput) => void),
    cb?: (err: any, data?: CreateArchiveCommandOutput) => void
  ): Promise<CreateArchiveCommandOutput> | void {
    const command = new CreateArchiveCommand(args);
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
   * <p>Creates a connection. A connection defines the authorization type and credentials to use
   *       for authorization with an API destination HTTP endpoint.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
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
   * <p>Creates a new event bus within your account. This can be a custom event bus which you can
   *       use to receive events from your custom applications and services, or it can be a partner event
   *       bus which can be matched to a partner event source.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventBusCommandOutput) => void),
    cb?: (err: any, data?: CreateEventBusCommandOutput) => void
  ): Promise<CreateEventBusCommandOutput> | void {
    const command = new CreateEventBusCommand(args);
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
   * <p>Called by an SaaS partner to create a partner event source. This operation is not used by
   *       Amazon Web Services customers.</p>
   *          <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner
   *       event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each
   *       Amazon Web Services account that wants to receive those event types. </p>
   *          <p>A partner event source creates events based on resources within the SaaS partner's service
   *       or application.</p>
   *          <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can
   *       use that event bus to receive events from the partner, and then process them using Amazon Web Services Events
   *       rules and targets.</p>
   *          <p>Partner event source names follow this format:</p>
   *          <p>
   *             <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>
   *          </p>
   *          <p>
   *             <i>partner_name</i> is determined during partner registration and identifies
   *       the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the
   *       partner and is a way for the partner to categorize their events.
   *         <i>event_name</i> is determined by the partner, and should uniquely identify
   *       an event-generating resource within the partner system. The combination of
   *         <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services
   *       customers decide whether to create an event bus to receive these events.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): Promise<CreatePartnerEventSourceCommandOutput> | void {
    const command = new CreatePartnerEventSourceCommand(args);
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
   * <p>You can use this operation to temporarily stop receiving events from the specified partner
   *       event source. The matching event bus is not deleted. </p>
   *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
   *       remains in PENDING state for more than two weeks, it is deleted.</p>
   *          <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): Promise<DeactivateEventSourceCommandOutput> | void {
    const command = new DeactivateEventSourceCommand(args);
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
   * <p>Removes all authorization parameters from the connection. This lets you remove the secret
   *       from the connection so you can reuse it without having to create a new connection.</p>
   */
  public deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeauthorizeConnectionCommandOutput>;
  public deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  public deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  public deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeauthorizeConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): Promise<DeauthorizeConnectionCommandOutput> | void {
    const command = new DeauthorizeConnectionCommand(args);
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
   * <p>Deletes the specified API destination.</p>
   */
  public deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiDestinationCommandOutput>;
  public deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  public deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  public deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApiDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): Promise<DeleteApiDestinationCommandOutput> | void {
    const command = new DeleteApiDestinationCommand(args);
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
   * <p>Deletes the specified archive.</p>
   */
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveCommandOutput>;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteArchiveCommandOutput) => void),
    cb?: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): Promise<DeleteArchiveCommandOutput> | void {
    const command = new DeleteArchiveCommand(args);
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
   * <p>Deletes a connection.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>Deletes the specified custom event bus or partner event bus. All rules associated with
   *       this event bus need to be deleted. You can't delete your account's default event bus.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventBusCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): Promise<DeleteEventBusCommandOutput> | void {
    const command = new DeleteEventBusCommand(args);
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
   * <p>This operation is used by SaaS partners to delete a partner event source. This operation
   *       is not used by Amazon Web Services customers.</p>
   *          <p>When you delete an event source, the status of the corresponding partner event bus in the
   *       Amazon Web Services customer account becomes DELETED.</p>
   *          <p></p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): Promise<DeletePartnerEventSourceCommandOutput> | void {
    const command = new DeletePartnerEventSourceCommand(args);
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
   * <p>Deletes the specified rule.</p>
   *          <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p>
   *
   *          <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow
   *       a short period of time for changes to take effect.</p>
   *
   *          <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you
   *       call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is
   *       returned.</p>
   *
   *          <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These
   *       rules are created by those other Amazon Web Services services to support functionality in those services. You
   *       can delete these rules using the <code>Force</code> option, but you should do so only if you
   *       are sure the other service is not still using that rule.</p>
   */
  public deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  public deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
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
   * <p>Retrieves details about an API destination.</p>
   */
  public describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApiDestinationCommandOutput>;
  public describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  public describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  public describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApiDestinationCommandOutput) => void),
    cb?: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): Promise<DescribeApiDestinationCommandOutput> | void {
    const command = new DescribeApiDestinationCommand(args);
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
   * <p>Retrieves details about an archive.</p>
   */
  public describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeArchiveCommandOutput>;
  public describeArchive(
    args: DescribeArchiveCommandInput,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;
  public describeArchive(
    args: DescribeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;
  public describeArchive(
    args: DescribeArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeArchiveCommandOutput) => void),
    cb?: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): Promise<DescribeArchiveCommandOutput> | void {
    const command = new DescribeArchiveCommand(args);
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
   * <p>Retrieves details about a connection.</p>
   */
  public describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionCommandOutput>;
  public describeConnection(
    args: DescribeConnectionCommandInput,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  public describeConnection(
    args: DescribeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  public describeConnection(
    args: DescribeConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectionCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): Promise<DescribeConnectionCommandOutput> | void {
    const command = new DescribeConnectionCommand(args);
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
   * <p>Displays details about an event bus in your account. This can include the external Amazon Web Services
   *       accounts that are permitted to write events to your default event bus, and the associated
   *       policy. For custom event buses and partner event buses, it displays the name, ARN, policy,
   *       state, and creation time.</p>
   *          <p> To enable your account to receive events from other accounts on its default event bus,
   *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
   *          <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventBusCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): Promise<DescribeEventBusCommandOutput> | void {
    const command = new DescribeEventBusCommand(args);
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
   * <p>This operation lists details about a partner event source that is shared with your
   *       account.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): Promise<DescribeEventSourceCommandOutput> | void {
    const command = new DescribeEventSourceCommand(args);
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
   * <p>An SaaS partner can use this operation to list details about a partner event source that
   *       they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a>
   *       to see details about a partner event source that is
   *       shared with them.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePartnerEventSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): Promise<DescribePartnerEventSourceCommandOutput> | void {
    const command = new DescribePartnerEventSourceCommand(args);
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
   * <p>Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the
   *       progress of a running replay. A replay processes events to replay based on the time in the
   *       event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and
   *       specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20
   *       minute time range, the events are replayed from the first minute of that 20 minute range
   *       first. Then the events from the second minute are replayed. You can use
   *         <code>DescribeReplay</code> to determine the progress of a replay. The value returned for
   *         <code>EventLastReplayedTime</code> indicates the time within the specified time range
   *       associated with the last event replayed.</p>
   */
  public describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplayCommandOutput>;
  public describeReplay(
    args: DescribeReplayCommandInput,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;
  public describeReplay(
    args: DescribeReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;
  public describeReplay(
    args: DescribeReplayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReplayCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplayCommandOutput) => void
  ): Promise<DescribeReplayCommandOutput> | void {
    const command = new DescribeReplayCommand(args);
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
   * <p>Describes the specified rule.</p>
   *          <p>DescribeRule does not list the targets of a rule. To see the targets associated with a
   *       rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
   */
  public describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleCommandOutput>;
  public describeRule(args: DescribeRuleCommandInput, cb: (err: any, data?: DescribeRuleCommandOutput) => void): void;
  public describeRule(
    args: DescribeRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  public describeRule(
    args: DescribeRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuleCommandOutput) => void
  ): Promise<DescribeRuleCommandOutput> | void {
    const command = new DescribeRuleCommand(args);
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
   * <p>Disables the specified rule. A disabled rule won't match any events, and won't
   *       self-trigger if it has a schedule expression.</p>
   *
   *          <p>When you disable a rule, incoming events might continue to match to the disabled rule.
   *       Allow a short period of time for changes to take effect.</p>
   */
  public disableRule(args: DisableRuleCommandInput, options?: __HttpHandlerOptions): Promise<DisableRuleCommandOutput>;
  public disableRule(args: DisableRuleCommandInput, cb: (err: any, data?: DisableRuleCommandOutput) => void): void;
  public disableRule(
    args: DisableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  public disableRule(
    args: DisableRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableRuleCommandOutput) => void),
    cb?: (err: any, data?: DisableRuleCommandOutput) => void
  ): Promise<DisableRuleCommandOutput> | void {
    const command = new DisableRuleCommand(args);
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
   * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p>
   *
   *          <p>When you enable a rule, incoming events might not immediately start matching to a newly
   *       enabled rule. Allow a short period of time for changes to take effect.</p>
   */
  public enableRule(args: EnableRuleCommandInput, options?: __HttpHandlerOptions): Promise<EnableRuleCommandOutput>;
  public enableRule(args: EnableRuleCommandInput, cb: (err: any, data?: EnableRuleCommandOutput) => void): void;
  public enableRule(
    args: EnableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  public enableRule(
    args: EnableRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableRuleCommandOutput) => void),
    cb?: (err: any, data?: EnableRuleCommandOutput) => void
  ): Promise<EnableRuleCommandOutput> | void {
    const command = new EnableRuleCommand(args);
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
   * <p>Retrieves a list of API destination in the account in the current Region.</p>
   */
  public listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApiDestinationsCommandOutput>;
  public listApiDestinations(
    args: ListApiDestinationsCommandInput,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  public listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  public listApiDestinations(
    args: ListApiDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApiDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): Promise<ListApiDestinationsCommandOutput> | void {
    const command = new ListApiDestinationsCommand(args);
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
   * <p>Lists your archives. You can either list all the archives or you can provide a prefix to
   *       match to the archive names. Filter parameters are exclusive.</p>
   */
  public listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchivesCommandOutput>;
  public listArchives(args: ListArchivesCommandInput, cb: (err: any, data?: ListArchivesCommandOutput) => void): void;
  public listArchives(
    args: ListArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;
  public listArchives(
    args: ListArchivesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListArchivesCommandOutput) => void),
    cb?: (err: any, data?: ListArchivesCommandOutput) => void
  ): Promise<ListArchivesCommandOutput> | void {
    const command = new ListArchivesCommand(args);
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
   * <p>Retrieves a list of connections from the account.</p>
   */
  public listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  public listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectionsCommandOutput) => void
  ): Promise<ListConnectionsCommandOutput> | void {
    const command = new ListConnectionsCommand(args);
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
   * <p>Lists all the event buses in your account, including the default event bus, custom event
   *       buses, and partner event buses.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventBusesCommandOutput) => void),
    cb?: (err: any, data?: ListEventBusesCommandOutput) => void
  ): Promise<ListEventBusesCommandOutput> | void {
    const command = new ListEventBusesCommand(args);
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
   * <p>You can use this to see all the partner event sources that have been shared with your Amazon Web Services
   *       account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): Promise<ListEventSourcesCommandOutput> | void {
    const command = new ListEventSourcesCommand(args);
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
   * <p>An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular
   *       partner event source name is associated with. This operation is not used by Amazon Web Services
   *       customers.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): Promise<ListPartnerEventSourceAccountsCommandOutput> | void {
    const command = new ListPartnerEventSourceAccountsCommand(args);
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
   * <p>An SaaS partner can use this operation to list all the partner event source names that
   *       they have created. This operation is not used by Amazon Web Services customers.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPartnerEventSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): Promise<ListPartnerEventSourcesCommandOutput> | void {
    const command = new ListPartnerEventSourcesCommand(args);
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
   * <p>Lists your replays. You can either list all the replays or you can provide a prefix to
   *       match to the replay names. Filter parameters are exclusive.</p>
   */
  public listReplays(args: ListReplaysCommandInput, options?: __HttpHandlerOptions): Promise<ListReplaysCommandOutput>;
  public listReplays(args: ListReplaysCommandInput, cb: (err: any, data?: ListReplaysCommandOutput) => void): void;
  public listReplays(
    args: ListReplaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;
  public listReplays(
    args: ListReplaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReplaysCommandOutput) => void),
    cb?: (err: any, data?: ListReplaysCommandOutput) => void
  ): Promise<ListReplaysCommandOutput> | void {
    const command = new ListReplaysCommand(args);
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
   * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
   *       EventBridge can invoke a specific target in your account.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRuleNamesByTargetCommandOutput) => void),
    cb?: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): Promise<ListRuleNamesByTargetCommandOutput> | void {
    const command = new ListRuleNamesByTargetCommand(args);
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
   * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide
   *       a prefix to match to the rule names.</p>
   *
   *          <p>ListRules does not list the targets of a rule. To see the targets associated with a rule,
   *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
   */
  public listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  public listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
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
   * <p>Displays the tags associated with an EventBridge resource. In EventBridge, rules and event
   *       buses can be tagged.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsByRuleCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): Promise<ListTargetsByRuleCommandOutput> | void {
    const command = new ListTargetsByRuleCommand(args);
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
   * <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p>
   */
  public putEvents(args: PutEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventsCommandOutput>;
  public putEvents(args: PutEventsCommandInput, cb: (err: any, data?: PutEventsCommandOutput) => void): void;
  public putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  public putEvents(
    args: PutEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEventsCommandOutput) => void),
    cb?: (err: any, data?: PutEventsCommandOutput) => void
  ): Promise<PutEventsCommandOutput> | void {
    const command = new PutEventsCommand(args);
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
   * <p>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services
   *       customers do not use this operation.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPartnerEventsCommandOutput) => void),
    cb?: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): Promise<PutPartnerEventsCommandOutput> | void {
    const command = new PutPartnerEventsCommand(args);
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
   * <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization
   *       to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch
   *       Events) rules in your account are triggered by these events arriving to an event bus in your
   *       account. </p>
   *          <p>For another account to send events to your account, that external account must have an
   *       EventBridge rule with your account's event bus as a target.</p>
   *
   *          <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run
   *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
   *       members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying
   *         <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in
   *         <code>Condition</code>, to grant permissions to all accounts in that organization.</p>
   *
   *          <p>If you grant permissions using an organization, then accounts in that organization must
   *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
   *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
   *         Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
   *         Guide</i>.</p>
   *
   *          <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPermissionCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionCommandOutput) => void
  ): Promise<PutPermissionCommandOutput> | void {
    const command = new PutPermissionCommand(args);
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
   * <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of
   *       the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p>
   *
   *          <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services
   *       go to your account's default event bus. Events generated by SaaS partner services or
   *       applications go to the matching partner event bus. If you have custom applications or
   *       services, you can specify whether their events go to your default event bus or a custom event
   *       bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
   *
   *          <p>If you are updating an existing rule, the rule is replaced with what you specify in this
   *         <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values
   *       for those arguments are not kept. Instead, they are replaced with null values.</p>
   *
   *          <p>When you create or update a rule, incoming events might not immediately start matching to
   *       new or updated rules. Allow a short period of time for changes to take effect.</p>
   *
   *          <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with
   *       EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions
   *       self-trigger based on the given schedule. A rule can have both an EventPattern and a
   *       ScheduleExpression, in which case the rule triggers on matching events as well as on a
   *       schedule.</p>
   *
   *          <p>When you initially create a rule, you can optionally assign one or more tags to the rule.
   *       Tags can help you organize and categorize your resources. You can also use them to scope user
   *       permissions, by granting a user permission to access or change only rules with certain tag
   *       values. To use the <code>PutRule</code> operation and assign tags, you must have both the
   *         <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p>
   *          <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code>
   *       operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
   *
   *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs).
   *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
   *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
   *       event you want to match.</p>
   *
   *          <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule
   *       is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket,
   *       and trigger software to change them to the desired state. If the rule is not written
   *       carefully, the subsequent change to the ACLs fires the rule again, creating an infinite
   *       loop.</p>
   *          <p>To prevent this, write the rules so that the triggered actions do not re-fire the same
   *       rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead
   *       of after any change. </p>
   *          <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use
   *       budgeting, which alerts you when charges exceed your specified limit. For more information,
   *       see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with
   *         Budgets</a>.</p>
   */
  public putRule(args: PutRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutRuleCommandOutput>;
  public putRule(args: PutRuleCommandInput, cb: (err: any, data?: PutRuleCommandOutput) => void): void;
  public putRule(
    args: PutRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  public putRule(
    args: PutRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRuleCommandOutput) => void),
    cb?: (err: any, data?: PutRuleCommandOutput) => void
  ): Promise<PutRuleCommandOutput> | void {
    const command = new PutRuleCommand(args);
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
   * <p>Adds the specified targets to the specified rule, or updates the targets if they are
   *       already associated with the rule.</p>
   *          <p>Targets are the resources that are invoked when a rule is triggered.</p>
   *          <p>You can configure the following as targets for Events:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API
   *           destination</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon API Gateway REST API endpoints</p>
   *             </li>
   *             <li>
   *                <p>API Gateway</p>
   *             </li>
   *             <li>
   *                <p>Batch job queue</p>
   *             </li>
   *             <li>
   *                <p>CloudWatch Logs group</p>
   *             </li>
   *             <li>
   *                <p>CodeBuild project</p>
   *             </li>
   *             <li>
   *                <p>CodePipeline</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 <code>CreateSnapshot</code> API call</p>
   *             </li>
   *             <li>
   *                <p>EC2 Image Builder</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 <code>RebootInstances</code> API call</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 <code>StopInstances</code> API call</p>
   *             </li>
   *             <li>
   *                <p>Amazon EC2 <code>TerminateInstances</code> API call</p>
   *             </li>
   *             <li>
   *                <p>Amazon ECS tasks</p>
   *             </li>
   *             <li>
   *                <p>Event bus in a different Amazon Web Services account or Region.</p>
   *                <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon)
   *           us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p>
   *             </li>
   *             <li>
   *                <p>Firehose delivery stream (Kinesis Data Firehose)</p>
   *             </li>
   *             <li>
   *                <p>Inspector assessment template (Amazon Inspector)</p>
   *             </li>
   *             <li>
   *                <p>Kinesis stream (Kinesis Data Stream)</p>
   *             </li>
   *             <li>
   *                <p>Lambda function</p>
   *             </li>
   *             <li>
   *                <p>Redshift clusters (Data API statement execution)</p>
   *             </li>
   *             <li>
   *                <p>Amazon SNS topic</p>
   *             </li>
   *             <li>
   *                <p>Amazon SQS queues (includes FIFO queues</p>
   *             </li>
   *             <li>
   *                <p>SSM Automation</p>
   *             </li>
   *             <li>
   *                <p>SSM OpsItem</p>
   *             </li>
   *             <li>
   *                <p>SSM Run Command</p>
   *             </li>
   *             <li>
   *                <p>Step Functions state machines</p>
   *             </li>
   *          </ul>
   *
   *          <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The
   *       built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API
   *         call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API
   *         call</code>. </p>
   *
   *          <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the
   *       target is a Kinesis data stream, you can optionally specify which shard the event goes to by
   *       using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2
   *       instances with one rule, you can use the <code>RunCommandParameters</code> field.</p>
   *
   *          <p>To be able to make API calls against the resources that you own, Amazon EventBridge
   *       needs the appropriate permissions. For Lambda and Amazon SNS
   *       resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams,
   *       Step Functions state machines and API Gateway REST APIs, EventBridge relies on
   *       IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>.
   *       For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication
   *         and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *
   *          <p>If another Amazon Web Services account is in the same region and has granted you permission (using
   *         <code>PutPermission</code>), you can send events to that account. Set that account's event
   *       bus as a target of the rules in your account. To send the matched events to the other account,
   *       specify that account's event bus as the <code>Arn</code> value when you run
   *         <code>PutTargets</code>. If your account sends events to another account, your account is
   *       charged for each sent event. Each event sent to another account is charged as a custom event.
   *       The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge
   *         Pricing</a>.</p>
   *
   *          <note>
   *             <p>
   *                <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not
   *         available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services
   *         account.</p>
   *          </note>
   *
   *          <p>If you are setting the event bus of another account as the target, and that account
   *       granted permission to your account through an organization instead of directly by the account
   *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
   *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
   *           Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
   *         Guide</i>.</p>
   *
   *          <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
   *
   *          <p>
   *             <b>Input</b>, <b>InputPath</b>, and
   *         <b>InputTransformer</b> are mutually exclusive and optional
   *       parameters of a target. When a rule is triggered due to a matched event:</p>
   *
   *          <ul>
   *             <li>
   *                <p>If none of the following arguments are specified for a target, then the entire event
   *           is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or
   *           Amazon ECS task, in which case nothing from the event is passed to the target).</p>
   *             </li>
   *             <li>
   *                <p>If <b>Input</b> is specified in the form of valid JSON, then
   *           the matched event is overridden with this constant.</p>
   *             </li>
   *             <li>
   *                <p>If <b>InputPath</b> is specified in the form of JSONPath
   *           (for example, <code>$.detail</code>), then only the part of the event specified in the
   *           path is passed to the target (for example, only the detail part of the event is
   *           passed).</p>
   *             </li>
   *             <li>
   *                <p>If <b>InputTransformer</b> is specified, then one or more
   *           specified JSONPaths are extracted from the event and used as values in a template that you
   *           specify as the input to the target.</p>
   *             </li>
   *          </ul>
   *
   *          <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use
   *       JSON dot notation, not bracket notation.</p>
   *
   *          <p>When you add targets to a rule and the associated rule triggers soon after, new or updated
   *       targets might not be immediately invoked. Allow a short period of time for changes to take
   *       effect.</p>
   *
   *          <p>This action can partially fail if too many requests are made at the same time. If that
   *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
   *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
   */
  public putTargets(args: PutTargetsCommandInput, options?: __HttpHandlerOptions): Promise<PutTargetsCommandOutput>;
  public putTargets(args: PutTargetsCommandInput, cb: (err: any, data?: PutTargetsCommandOutput) => void): void;
  public putTargets(
    args: PutTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  public putTargets(
    args: PutTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutTargetsCommandOutput) => void),
    cb?: (err: any, data?: PutTargetsCommandOutput) => void
  ): Promise<PutTargetsCommandOutput> | void {
    const command = new PutTargetsCommand(args);
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
   * <p>Revokes the permission of another Amazon Web Services account to be able to put events to the specified
   *       event bus. Specify the account to revoke by the <code>StatementId</code> value that you
   *       associated with the account when you granted it permission with <code>PutPermission</code>.
   *       You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemovePermissionCommandOutput) => void),
    cb?: (err: any, data?: RemovePermissionCommandOutput) => void
  ): Promise<RemovePermissionCommandOutput> | void {
    const command = new RemovePermissionCommand(args);
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
   * <p>Removes the specified targets from the specified rule. When the rule is triggered, those
   *       targets are no longer be invoked.</p>
   *
   *          <p>When you remove a target, when the associated rule triggers, removed targets might
   *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
   *
   *          <p>This action can partially fail if too many requests are made at the same time. If that
   *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
   *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTargetsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): Promise<RemoveTargetsCommandOutput> | void {
    const command = new RemoveTargetsCommand(args);
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
   * <p>Starts the specified replay. Events are not necessarily replayed in the exact same order
   *       that they were added to the archive. A replay processes events to replay based on the time in
   *       the event, and replays them using 1 minute intervals. If you specify an
   *         <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time
   *       range, the events are replayed from the first minute of that 20 minute range first. Then the
   *       events from the second minute are replayed. You can use <code>DescribeReplay</code> to
   *       determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code>
   *       indicates the time within the specified time range associated with the last event
   *       replayed.</p>
   */
  public startReplay(args: StartReplayCommandInput, options?: __HttpHandlerOptions): Promise<StartReplayCommandOutput>;
  public startReplay(args: StartReplayCommandInput, cb: (err: any, data?: StartReplayCommandOutput) => void): void;
  public startReplay(
    args: StartReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplayCommandOutput) => void
  ): void;
  public startReplay(
    args: StartReplayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReplayCommandOutput) => void),
    cb?: (err: any, data?: StartReplayCommandOutput) => void
  ): Promise<StartReplayCommandOutput> | void {
    const command = new StartReplayCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can
   *       help you organize and categorize your resources. You can also use them to scope user
   *       permissions by granting a user permission to access or change only resources with certain tag
   *       values. In EventBridge, rules and event buses can be tagged.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of
   *       characters.</p>
   *          <p>You can use the <code>TagResource</code> action with a resource that already has tags. If
   *       you specify a new tag key, this tag is appended to the list of tags associated with the
   *       resource. If you specify a tag key that is already associated with the resource, the new tag
   *       value that you specify replaces the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a resource.</p>
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
   * <p>Tests whether the specified event pattern matches the provided event.</p>
   *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs).
   *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
   *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
   *       event you want to match.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestEventPatternCommandOutput) => void),
    cb?: (err: any, data?: TestEventPatternCommandOutput) => void
  ): Promise<TestEventPatternCommandOutput> | void {
    const command = new TestEventPatternCommand(args);
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
   * <p>Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge
   *       (CloudWatch Events), rules and event buses can be tagged.</p>
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
   * <p>Updates an API destination.</p>
   */
  public updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiDestinationCommandOutput>;
  public updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  public updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  public updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApiDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): Promise<UpdateApiDestinationCommandOutput> | void {
    const command = new UpdateApiDestinationCommand(args);
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
   * <p>Updates the specified archive.</p>
   */
  public updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveCommandOutput>;
  public updateArchive(
    args: UpdateArchiveCommandInput,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  public updateArchive(
    args: UpdateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  public updateArchive(
    args: UpdateArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateArchiveCommandOutput) => void),
    cb?: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): Promise<UpdateArchiveCommandOutput> | void {
    const command = new UpdateArchiveCommand(args);
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
   * <p>Updates settings for a connection.</p>
   */
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): Promise<UpdateConnectionCommandOutput> | void {
    const command = new UpdateConnectionCommand(args);
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
