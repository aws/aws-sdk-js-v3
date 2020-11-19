import { ConnectClient } from "./ConnectClient";
import {
  AssociateRoutingProfileQueuesCommand,
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import {
  CreateContactFlowCommand,
  CreateContactFlowCommandInput,
  CreateContactFlowCommandOutput,
} from "./commands/CreateContactFlowCommand";
import {
  CreateRoutingProfileCommand,
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "./commands/CreateRoutingProfileCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateUserHierarchyGroupCommand,
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "./commands/CreateUserHierarchyGroupCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserHierarchyGroupCommand,
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "./commands/DeleteUserHierarchyGroupCommand";
import {
  DescribeContactFlowCommand,
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import {
  DescribeRoutingProfileCommand,
  DescribeRoutingProfileCommandInput,
  DescribeRoutingProfileCommandOutput,
} from "./commands/DescribeRoutingProfileCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommand,
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
} from "./commands/DescribeUserHierarchyStructureCommand";
import {
  DisassociateRoutingProfileQueuesCommand,
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import {
  GetContactAttributesCommand,
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput,
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "./commands/GetCurrentMetricDataCommand";
import {
  GetFederationTokenCommand,
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
} from "./commands/GetFederationTokenCommand";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "./commands/GetMetricDataCommand";
import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
} from "./commands/ListContactFlowsCommand";
import {
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput,
} from "./commands/ListHoursOfOperationsCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "./commands/ListPhoneNumbersCommand";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListRoutingProfileQueuesCommand,
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "./commands/ListRoutingProfileQueuesCommand";
import {
  ListRoutingProfilesCommand,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "./commands/ListRoutingProfilesCommand";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "./commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ResumeContactRecordingCommand,
  ResumeContactRecordingCommandInput,
  ResumeContactRecordingCommandOutput,
} from "./commands/ResumeContactRecordingCommand";
import {
  StartChatContactCommand,
  StartChatContactCommandInput,
  StartChatContactCommandOutput,
} from "./commands/StartChatContactCommand";
import {
  StartContactRecordingCommand,
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
} from "./commands/StartContactRecordingCommand";
import {
  StartOutboundVoiceContactCommand,
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput,
} from "./commands/StartOutboundVoiceContactCommand";
import { StopContactCommand, StopContactCommandInput, StopContactCommandOutput } from "./commands/StopContactCommand";
import {
  StopContactRecordingCommand,
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
} from "./commands/StopContactRecordingCommand";
import {
  SuspendContactRecordingCommand,
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
} from "./commands/SuspendContactRecordingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContactAttributesCommand,
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
} from "./commands/UpdateContactAttributesCommand";
import {
  UpdateContactFlowContentCommand,
  UpdateContactFlowContentCommandInput,
  UpdateContactFlowContentCommandOutput,
} from "./commands/UpdateContactFlowContentCommand";
import {
  UpdateContactFlowNameCommand,
  UpdateContactFlowNameCommandInput,
  UpdateContactFlowNameCommandOutput,
} from "./commands/UpdateContactFlowNameCommand";
import {
  UpdateRoutingProfileConcurrencyCommand,
  UpdateRoutingProfileConcurrencyCommandInput,
  UpdateRoutingProfileConcurrencyCommandOutput,
} from "./commands/UpdateRoutingProfileConcurrencyCommand";
import {
  UpdateRoutingProfileDefaultOutboundQueueCommand,
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
} from "./commands/UpdateRoutingProfileDefaultOutboundQueueCommand";
import {
  UpdateRoutingProfileNameCommand,
  UpdateRoutingProfileNameCommandInput,
  UpdateRoutingProfileNameCommandOutput,
} from "./commands/UpdateRoutingProfileNameCommand";
import {
  UpdateRoutingProfileQueuesCommand,
  UpdateRoutingProfileQueuesCommandInput,
  UpdateRoutingProfileQueuesCommandOutput,
} from "./commands/UpdateRoutingProfileQueuesCommand";
import {
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput,
} from "./commands/UpdateUserHierarchyCommand";
import {
  UpdateUserHierarchyGroupNameCommand,
  UpdateUserHierarchyGroupNameCommandInput,
  UpdateUserHierarchyGroupNameCommandOutput,
} from "./commands/UpdateUserHierarchyGroupNameCommand";
import {
  UpdateUserHierarchyStructureCommand,
  UpdateUserHierarchyStructureCommandInput,
  UpdateUserHierarchyStructureCommandOutput,
} from "./commands/UpdateUserHierarchyStructureCommand";
import {
  UpdateUserIdentityInfoCommand,
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommand,
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput,
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommand,
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput,
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommand,
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput,
} from "./commands/UpdateUserSecurityProfilesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a
 *    customer contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides rich metrics and real-time reporting that allow you to optimize contact
 *    routing. You can also resolve customer issues more efficiently by putting customers in touch with
 *    the right agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create and limits to the
 *    number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect
 *     Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>To connect programmatically to an AWS service, you use an endpoint. For a list of Amazon Connect
 *    endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect
 *     Endpoints</a>.</p>
 *          <note>
 *             <p>Working with contact flows? Check out the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 *          </note>
 */
export class Connect extends ConnectClient {
  /**
   * <p>Associates a set of queues with a routing profile.</p>
   */
  public associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRoutingProfileQueuesCommandOutput>;
  public associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public associateRoutingProfileQueues(
    args: AssociateRoutingProfileQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void),
    cb?: (err: any, data?: AssociateRoutingProfileQueuesCommandOutput) => void
  ): Promise<AssociateRoutingProfileQueuesCommandOutput> | void {
    const command = new AssociateRoutingProfileQueuesCommand(args);
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
   * <p>Creates a contact flow for the specified Amazon Connect instance.</p>
   *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
   *    Flow language</a>.</p>
   */
  public createContactFlow(
    args: CreateContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactFlowCommandOutput>;
  public createContactFlow(
    args: CreateContactFlowCommandInput,
    cb: (err: any, data?: CreateContactFlowCommandOutput) => void
  ): void;
  public createContactFlow(
    args: CreateContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactFlowCommandOutput) => void
  ): void;
  public createContactFlow(
    args: CreateContactFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactFlowCommandOutput) => void),
    cb?: (err: any, data?: CreateContactFlowCommandOutput) => void
  ): Promise<CreateContactFlowCommandOutput> | void {
    const command = new CreateContactFlowCommand(args);
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
   * <p>Creates a new routing profile.</p>
   */
  public createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoutingProfileCommandOutput>;
  public createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void
  ): void;
  public createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoutingProfileCommandOutput) => void
  ): void;
  public createRoutingProfile(
    args: CreateRoutingProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoutingProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateRoutingProfileCommandOutput) => void
  ): Promise<CreateRoutingProfileCommandOutput> | void {
    const command = new CreateRoutingProfileCommand(args);
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
   * <p>Creates a user account for the specified Amazon Connect instance.</p>
   *          <p>For information about how to create user accounts using the Amazon Connect console, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html">Add Users</a> in
   *    the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Creates a new user hierarchy group.</p>
   */
  public createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserHierarchyGroupCommandOutput>;
  public createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void
  ): void;
  public createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void
  ): void;
  public createUserHierarchyGroup(
    args: CreateUserHierarchyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserHierarchyGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateUserHierarchyGroupCommandOutput) => void
  ): Promise<CreateUserHierarchyGroupCommandOutput> | void {
    const command = new CreateUserHierarchyGroupCommand(args);
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
   * <p>Deletes a user account from the specified Amazon Connect instance.</p>
   *          <p>For information about what happens to a user's data when their account is deleted, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-users.html">Delete Users from
   *     Your Amazon Connect Instance</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
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
   * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.</p>
   */
  public deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserHierarchyGroupCommandOutput>;
  public deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void
  ): void;
  public deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void
  ): void;
  public deleteUserHierarchyGroup(
    args: DeleteUserHierarchyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserHierarchyGroupCommandOutput) => void
  ): Promise<DeleteUserHierarchyGroupCommandOutput> | void {
    const command = new DeleteUserHierarchyGroupCommand(args);
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
   * <p>Describes the specified contact flow.</p>
   *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
   *    Flow language</a>.</p>
   */
  public describeContactFlow(
    args: DescribeContactFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactFlowCommandOutput>;
  public describeContactFlow(
    args: DescribeContactFlowCommandInput,
    cb: (err: any, data?: DescribeContactFlowCommandOutput) => void
  ): void;
  public describeContactFlow(
    args: DescribeContactFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactFlowCommandOutput) => void
  ): void;
  public describeContactFlow(
    args: DescribeContactFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContactFlowCommandOutput) => void),
    cb?: (err: any, data?: DescribeContactFlowCommandOutput) => void
  ): Promise<DescribeContactFlowCommandOutput> | void {
    const command = new DescribeContactFlowCommand(args);
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
   * <p>Describes the specified routing profile.</p>
   */
  public describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoutingProfileCommandOutput>;
  public describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void
  ): void;
  public describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoutingProfileCommandOutput) => void
  ): void;
  public describeRoutingProfile(
    args: DescribeRoutingProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRoutingProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeRoutingProfileCommandOutput) => void
  ): Promise<DescribeRoutingProfileCommandOutput> | void {
    const command = new DescribeRoutingProfileCommand(args);
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
   * <p>Describes the specified user account. You can find the instance ID in the console (it’s the
   *    final part of the ARN). The console does not display the user IDs. Instead, list the users and
   *    note the IDs provided in the output.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
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
   * <p>Describes the specified hierarchy group.</p>
   */
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserHierarchyGroupCommandOutput>;
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): void;
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): void;
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): Promise<DescribeUserHierarchyGroupCommandOutput> | void {
    const command = new DescribeUserHierarchyGroupCommand(args);
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
   * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
   */
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserHierarchyStructureCommandOutput>;
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): void;
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): void;
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): Promise<DescribeUserHierarchyStructureCommandOutput> | void {
    const command = new DescribeUserHierarchyStructureCommand(args);
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
   * <p>Disassociates a set of queues from a routing profile.</p>
   */
  public disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRoutingProfileQueuesCommandOutput>;
  public disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public disassociateRoutingProfileQueues(
    args: DisassociateRoutingProfileQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRoutingProfileQueuesCommandOutput) => void
  ): Promise<DisassociateRoutingProfileQueuesCommandOutput> | void {
    const command = new DisassociateRoutingProfileQueuesCommand(args);
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
   * <p>Retrieves the contact attributes for the specified contact.</p>
   */
  public getContactAttributes(
    args: GetContactAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactAttributesCommandOutput>;
  public getContactAttributes(
    args: GetContactAttributesCommandInput,
    cb: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): void;
  public getContactAttributes(
    args: GetContactAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): void;
  public getContactAttributes(
    args: GetContactAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): Promise<GetContactAttributesCommandOutput> | void {
    const command = new GetContactAttributesCommand(args);
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
   * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
   *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
   *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCurrentMetricDataCommandOutput>;
  public getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): void;
  public getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): void;
  public getCurrentMetricData(
    args: GetCurrentMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCurrentMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): Promise<GetCurrentMetricDataCommandOutput> | void {
    const command = new GetCurrentMetricDataCommand(args);
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
   * <p>Retrieves a token for federation.</p>
   */
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFederationTokenCommandOutput>;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): void;
  public getFederationToken(
    args: GetFederationTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFederationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): Promise<GetFederationTokenCommandOutput> | void {
    const command = new GetFederationTokenCommand(args);
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
   * <p>Gets historical metric data from the specified Amazon Connect instance.</p>
   *          <p>For a description of each historical metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics
   *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public getMetricData(
    args: GetMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricDataCommandOutput>;
  public getMetricData(
    args: GetMetricDataCommandInput,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricDataCommandOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetMetricDataCommandOutput) => void
  ): Promise<GetMetricDataCommandOutput> | void {
    const command = new GetMetricDataCommand(args);
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
   * <p>Provides information about the contact flows for the specified Amazon Connect instance.</p>
   *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
   *    Flow language</a>.</p>
   *          <p>For more information about contact flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Contact Flows</a> in the
   *     <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listContactFlows(
    args: ListContactFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactFlowsCommandOutput>;
  public listContactFlows(
    args: ListContactFlowsCommandInput,
    cb: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): void;
  public listContactFlows(
    args: ListContactFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): void;
  public listContactFlows(
    args: ListContactFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactFlowsCommandOutput) => void),
    cb?: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): Promise<ListContactFlowsCommandOutput> | void {
    const command = new ListContactFlowsCommand(args);
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
   * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
   *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
   *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHoursOfOperationsCommandOutput>;
  public listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): void;
  public listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): void;
  public listHoursOfOperations(
    args: ListHoursOfOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHoursOfOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): Promise<ListHoursOfOperationsCommandOutput> | void {
    const command = new ListHoursOfOperationsCommand(args);
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
   * <p>Provides information about the phone numbers for the specified Amazon Connect instance. </p>
   *          <p>For more information about phone numbers, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html">Set Up Phone Numbers for Your
   *     Contact Center</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): Promise<ListPhoneNumbersCommandOutput> | void {
    const command = new ListPhoneNumbersCommand(args);
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
   * <p>Provides information about the prompts for the specified Amazon Connect
   *    instance.</p>
   */
  public listPrompts(args: ListPromptsCommandInput, options?: __HttpHandlerOptions): Promise<ListPromptsCommandOutput>;
  public listPrompts(args: ListPromptsCommandInput, cb: (err: any, data?: ListPromptsCommandOutput) => void): void;
  public listPrompts(
    args: ListPromptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPromptsCommandOutput) => void
  ): void;
  public listPrompts(
    args: ListPromptsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPromptsCommandOutput) => void),
    cb?: (err: any, data?: ListPromptsCommandOutput) => void
  ): Promise<ListPromptsCommandOutput> | void {
    const command = new ListPromptsCommand(args);
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
   * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
   *          <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and
   *     Agent</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  public listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  public listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  public listQueues(
    args: ListQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueuesCommandOutput) => void),
    cb?: (err: any, data?: ListQueuesCommandOutput) => void
  ): Promise<ListQueuesCommandOutput> | void {
    const command = new ListQueuesCommand(args);
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
   * <p>List the queues associated with a routing profile.</p>
   */
  public listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingProfileQueuesCommandOutput>;
  public listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void
  ): void;
  public listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void
  ): void;
  public listRoutingProfileQueues(
    args: ListRoutingProfileQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoutingProfileQueuesCommandOutput) => void),
    cb?: (err: any, data?: ListRoutingProfileQueuesCommandOutput) => void
  ): Promise<ListRoutingProfileQueuesCommandOutput> | void {
    const command = new ListRoutingProfileQueuesCommand(args);
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
   * <p>Provides summary information about the routing profiles for the specified Amazon Connect
   *    instance.</p>
   *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing
   *     Profile</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingProfilesCommandOutput>;
  public listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): void;
  public listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): void;
  public listRoutingProfiles(
    args: ListRoutingProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoutingProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): Promise<ListRoutingProfilesCommandOutput> | void {
    const command = new ListRoutingProfilesCommand(args);
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
   * <p>Provides summary information about the security profiles for the specified Amazon Connect
   *    instance.</p>
   *          <p>For more information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
   *     <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityProfilesCommandOutput>;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): Promise<ListSecurityProfilesCommandOutput> | void {
    const command = new ListSecurityProfilesCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
   *          <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based
   *     Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
   * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
   *    instance.</p>
   *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
   *     <i>Amazon Connect Administrator Guide</i>.</p>
   */
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserHierarchyGroupsCommandOutput>;
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): void;
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): void;
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserHierarchyGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): Promise<ListUserHierarchyGroupsCommandOutput> | void {
    const command = new ListUserHierarchyGroupsCommand(args);
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
   * <p>Provides summary information about the users for the specified Amazon Connect instance.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>When a contact is being recorded, and the recording has been suspended using
   *    SuspendContactRecording, this API resumes recording the call.</p>
   *
   *          <p>Only voice recordings are supported at this time.</p>
   */
  public resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeContactRecordingCommandOutput>;
  public resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void
  ): void;
  public resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeContactRecordingCommandOutput) => void
  ): void;
  public resumeContactRecording(
    args: ResumeContactRecordingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeContactRecordingCommandOutput) => void),
    cb?: (err: any, data?: ResumeContactRecordingCommandOutput) => void
  ): Promise<ResumeContactRecordingCommandOutput> | void {
    const command = new ResumeContactRecordingCommand(args);
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
   * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides
   *    a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
   *
   *          <p>When a new chat contact is successfully created, clients need to subscribe to the
   *    participant’s connection for the created chat within 5 minutes. This is achieved by invoking
   *     <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
   *
   *          <p>A 429 error occurs in two situations:</p>
   *          <ul>
   *             <li>
   *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
   *      exception from the API Gateway.</p>
   *             </li>
   *             <li>
   *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
   *       chats</a> is exceeded. Active chat throttling returns a
   *       <code>LimitExceededException</code>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information about how chat works, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   */
  public startChatContact(
    args: StartChatContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartChatContactCommandOutput>;
  public startChatContact(
    args: StartChatContactCommandInput,
    cb: (err: any, data?: StartChatContactCommandOutput) => void
  ): void;
  public startChatContact(
    args: StartChatContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChatContactCommandOutput) => void
  ): void;
  public startChatContact(
    args: StartChatContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartChatContactCommandOutput) => void),
    cb?: (err: any, data?: StartChatContactCommandOutput) => void
  ): Promise<StartChatContactCommandOutput> | void {
    const command = new StartChatContactCommand(args);
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
   * <p>This API starts recording the contact when the agent joins the call. StartContactRecording
   *    is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing
   *    call, you can't use StartContactRecording to restart it. For scenarios where the recording has
   *    started and you want to suspend and resume it, such as when collecting sensitive information (for
   *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
   *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
   *    behavior</a> block.</p>
   *          <p>Only voice recordings are supported at this time.</p>
   */
  public startContactRecording(
    args: StartContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContactRecordingCommandOutput>;
  public startContactRecording(
    args: StartContactRecordingCommandInput,
    cb: (err: any, data?: StartContactRecordingCommandOutput) => void
  ): void;
  public startContactRecording(
    args: StartContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContactRecordingCommandOutput) => void
  ): void;
  public startContactRecording(
    args: StartContactRecordingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartContactRecordingCommandOutput) => void),
    cb?: (err: any, data?: StartContactRecordingCommandOutput) => void
  ): Promise<StartContactRecordingCommandOutput> | void {
    const command = new StartContactRecordingCommand(args);
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
   * <p>This API places an outbound call to a contact, and then initiates the contact flow. It
   *    performs the actions in the contact flow that's specified (in <code>ContactFlowId</code>).</p>
   *
   *          <p>Agents are not involved in initiating the outbound API (that is, dialing the contact). If
   *    the contact flow places an outbound call to a contact, and then puts the contact in queue, that's
   *    when the call is routed to the agent, like any other inbound case.</p>
   *
   *          <p>There is a 60 second dialing timeout for this operation. If the call is not connected after
   *    60 seconds, it fails.</p>
   *          <note>
   *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
   *     mobile numbers, you must submit a service quota increase request. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   *          </note>
   */
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOutboundVoiceContactCommandOutput>;
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): void;
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): void;
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartOutboundVoiceContactCommandOutput) => void),
    cb?: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): Promise<StartOutboundVoiceContactCommandOutput> | void {
    const command = new StartOutboundVoiceContactCommand(args);
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
   * <p>Ends the specified contact.</p>
   */
  public stopContact(args: StopContactCommandInput, options?: __HttpHandlerOptions): Promise<StopContactCommandOutput>;
  public stopContact(args: StopContactCommandInput, cb: (err: any, data?: StopContactCommandOutput) => void): void;
  public stopContact(
    args: StopContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;
  public stopContact(
    args: StopContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopContactCommandOutput) => void),
    cb?: (err: any, data?: StopContactCommandOutput) => void
  ): Promise<StopContactCommandOutput> | void {
    const command = new StopContactCommand(args);
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
   * <p>When a contact is being recorded, this API stops recording the call. StopContactRecording is
   *    a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't
   *    use StartContactRecording to restart it. For scenarios where the recording has started and you
   *    want to suspend it for sensitive information (for example, to collect a credit card number), and
   *    then restart it, use SuspendContactRecording and ResumeContactRecording.</p>
   *
   *          <p>Only voice recordings are supported at this time.</p>
   */
  public stopContactRecording(
    args: StopContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactRecordingCommandOutput>;
  public stopContactRecording(
    args: StopContactRecordingCommandInput,
    cb: (err: any, data?: StopContactRecordingCommandOutput) => void
  ): void;
  public stopContactRecording(
    args: StopContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactRecordingCommandOutput) => void
  ): void;
  public stopContactRecording(
    args: StopContactRecordingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopContactRecordingCommandOutput) => void),
    cb?: (err: any, data?: StopContactRecordingCommandOutput) => void
  ): Promise<StopContactRecordingCommandOutput> | void {
    const command = new StopContactRecordingCommand(args);
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
   * <p>When a contact is being recorded, this API suspends recording the call. For example, you
   *    might suspend the call recording while collecting sensitive information, such as a credit card
   *    number. Then use ResumeContactRecording to restart recording. </p>
   *          <p>The period of time that the recording is suspended is filled with silence in the final
   *    recording. </p>
   *          <p>Only voice recordings are supported at this time.</p>
   */
  public suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendContactRecordingCommandOutput>;
  public suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void
  ): void;
  public suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendContactRecordingCommandOutput) => void
  ): void;
  public suspendContactRecording(
    args: SuspendContactRecordingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SuspendContactRecordingCommandOutput) => void),
    cb?: (err: any, data?: SuspendContactRecordingCommandOutput) => void
  ): Promise<SuspendContactRecordingCommandOutput> | void {
    const command = new SuspendContactRecordingCommand(args);
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
   * <p>Adds the specified tags to the specified resource.</p>
   *          <p>The supported resource types are users, routing profiles, and contact flows.</p>
   *          <p>For sample policies that use tags, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_id-based-policy-examples.html">Amazon Connect Identity-Based
   *     Policy Examples</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
   * <p>Creates or updates the contact attributes associated with the specified contact.</p>
   *          <p>You can add or update attributes for both ongoing and completed contacts. For example, you
   *    can update the customer's name or the reason the customer called while the call is active, or add
   *    notes about steps that the agent took during the call that are displayed to the next agent that
   *    takes the call. You can also update attributes for a contact using data from your CRM application
   *    and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis,
   *    such as legal review or identifying abusive callers.</p>
   *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.</p>
   *
   *          <p>
   *             <b>Important:</b> You cannot use the operation to update
   *    attributes for contacts that occurred prior to the release of the API, September 12, 2018. You
   *    can update attributes only for contacts that started after the release of the API. If you attempt
   *    to update attributes for a contact that occurred prior to the release of the API, a 400 error is
   *    returned. This applies also to queued callbacks that were initiated prior to the release of the
   *    API but are still active in your instance.</p>
   */
  public updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactAttributesCommandOutput>;
  public updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): void;
  public updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): void;
  public updateContactAttributes(
    args: UpdateContactAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): Promise<UpdateContactAttributesCommandOutput> | void {
    const command = new UpdateContactAttributesCommand(args);
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
   * <p>Updates the specified contact flow.</p>
   *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
   *    Flow language</a>.</p>
   */
  public updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowContentCommandOutput>;
  public updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void
  ): void;
  public updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowContentCommandOutput) => void
  ): void;
  public updateContactFlowContent(
    args: UpdateContactFlowContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactFlowContentCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactFlowContentCommandOutput) => void
  ): Promise<UpdateContactFlowContentCommandOutput> | void {
    const command = new UpdateContactFlowContentCommand(args);
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
   * <p>The name of the contact flow.</p>
   *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
   *    Flow language</a>.</p>
   */
  public updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactFlowNameCommandOutput>;
  public updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void
  ): void;
  public updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactFlowNameCommandOutput) => void
  ): void;
  public updateContactFlowName(
    args: UpdateContactFlowNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactFlowNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactFlowNameCommandOutput) => void
  ): Promise<UpdateContactFlowNameCommandOutput> | void {
    const command = new UpdateContactFlowNameCommand(args);
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
   * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.</p>
   */
  public updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileConcurrencyCommandOutput>;
  public updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void
  ): void;
  public updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void
  ): void;
  public updateRoutingProfileConcurrency(
    args: UpdateRoutingProfileConcurrencyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingProfileConcurrencyCommandOutput) => void
  ): Promise<UpdateRoutingProfileConcurrencyCommandOutput> | void {
    const command = new UpdateRoutingProfileConcurrencyCommand(args);
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
   * <p>Updates the default outbound queue of a routing profile.</p>
   */
  public updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput>;
  public updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void
  ): void;
  public updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void
  ): void;
  public updateRoutingProfileDefaultOutboundQueue(
    args: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingProfileDefaultOutboundQueueCommandOutput) => void
  ): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> | void {
    const command = new UpdateRoutingProfileDefaultOutboundQueueCommand(args);
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
   * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
   */
  public updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileNameCommandOutput>;
  public updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void
  ): void;
  public updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void
  ): void;
  public updateRoutingProfileName(
    args: UpdateRoutingProfileNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingProfileNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingProfileNameCommandOutput) => void
  ): Promise<UpdateRoutingProfileNameCommandOutput> | void {
    const command = new UpdateRoutingProfileNameCommand(args);
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
   * <p>Updates the properties associated with a set of queues for a routing profile.</p>
   */
  public updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingProfileQueuesCommandOutput>;
  public updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void
  ): void;
  public updateRoutingProfileQueues(
    args: UpdateRoutingProfileQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingProfileQueuesCommandOutput) => void
  ): Promise<UpdateRoutingProfileQueuesCommandOutput> | void {
    const command = new UpdateRoutingProfileQueuesCommand(args);
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
   * <p>Assigns the specified hierarchy group to the specified user.</p>
   */
  public updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyCommandOutput>;
  public updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): void;
  public updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): void;
  public updateUserHierarchy(
    args: UpdateUserHierarchyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserHierarchyCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): Promise<UpdateUserHierarchyCommandOutput> | void {
    const command = new UpdateUserHierarchyCommand(args);
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
   * <p>Updates the name of the user hierarchy group. </p>
   */
  public updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyGroupNameCommandOutput>;
  public updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void
  ): void;
  public updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void
  ): void;
  public updateUserHierarchyGroupName(
    args: UpdateUserHierarchyGroupNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserHierarchyGroupNameCommandOutput) => void
  ): Promise<UpdateUserHierarchyGroupNameCommandOutput> | void {
    const command = new UpdateUserHierarchyGroupNameCommand(args);
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
   * <p>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</p>
   */
  public updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserHierarchyStructureCommandOutput>;
  public updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void
  ): void;
  public updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void
  ): void;
  public updateUserHierarchyStructure(
    args: UpdateUserHierarchyStructureCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserHierarchyStructureCommandOutput) => void
  ): Promise<UpdateUserHierarchyStructureCommandOutput> | void {
    const command = new UpdateUserHierarchyStructureCommand(args);
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
   * <p>Updates the identity information for the specified user.</p>
   *          <important>
   *             <p>Someone with the ability to invoke <code>UpdateUserIndentityInfo</code> can change the
   *     login credentials of other users by changing their email address. This poses a security risk to
   *     your organization. They can change the email address of a user to the attacker's email address,
   *     and then reset the password through email. We strongly recommend limiting who has the ability to
   *     invoke <code>UpdateUserIndentityInfo</code>. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best
   *      Practices for Security Profiles</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   *          </important>
   */
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserIdentityInfoCommandOutput>;
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): void;
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): void;
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserIdentityInfoCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): Promise<UpdateUserIdentityInfoCommandOutput> | void {
    const command = new UpdateUserIdentityInfoCommand(args);
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
   * <p>Updates the phone configuration settings for the specified user.</p>
   */
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserPhoneConfigCommandOutput>;
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): void;
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): void;
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserPhoneConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): Promise<UpdateUserPhoneConfigCommandOutput> | void {
    const command = new UpdateUserPhoneConfigCommand(args);
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
   * <p>Assigns the specified routing profile to the specified user.</p>
   */
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserRoutingProfileCommandOutput>;
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): void;
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): void;
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserRoutingProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): Promise<UpdateUserRoutingProfileCommandOutput> | void {
    const command = new UpdateUserRoutingProfileCommand(args);
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
   * <p>Assigns the specified security profiles to the specified user.</p>
   */
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSecurityProfilesCommandOutput>;
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): void;
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): void;
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): Promise<UpdateUserSecurityProfilesCommandOutput> | void {
    const command = new UpdateUserSecurityProfilesCommand(args);
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
