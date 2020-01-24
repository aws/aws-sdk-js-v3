import { ConnectClient } from "./ConnectClient";
import {
  CreateUserCommand,
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "./commands/CreateUserCommand";
import {
  DeleteUserCommand,
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "./commands/DeleteUserCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "./commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommand,
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput
} from "./commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommand,
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput
} from "./commands/DescribeUserHierarchyStructureCommand";
import {
  GetContactAttributesCommand,
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput
} from "./commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput
} from "./commands/GetCurrentMetricDataCommand";
import {
  GetFederationTokenCommand,
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput
} from "./commands/GetFederationTokenCommand";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
} from "./commands/GetMetricDataCommand";
import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput
} from "./commands/ListContactFlowsCommand";
import {
  ListHoursOfOperationsCommand,
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput
} from "./commands/ListHoursOfOperationsCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
} from "./commands/ListPhoneNumbersCommand";
import {
  ListQueuesCommand,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
} from "./commands/ListQueuesCommand";
import {
  ListRoutingProfilesCommand,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput
} from "./commands/ListRoutingProfilesCommand";
import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput
} from "./commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput
} from "./commands/ListUserHierarchyGroupsCommand";
import {
  ListUsersCommand,
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand";
import {
  StartChatContactCommand,
  StartChatContactCommandInput,
  StartChatContactCommandOutput
} from "./commands/StartChatContactCommand";
import {
  StartOutboundVoiceContactCommand,
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput
} from "./commands/StartOutboundVoiceContactCommand";
import {
  StopContactCommand,
  StopContactCommandInput,
  StopContactCommandOutput
} from "./commands/StopContactCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateContactAttributesCommand,
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput
} from "./commands/UpdateContactAttributesCommand";
import {
  UpdateUserHierarchyCommand,
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput
} from "./commands/UpdateUserHierarchyCommand";
import {
  UpdateUserIdentityInfoCommand,
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput
} from "./commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommand,
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput
} from "./commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommand,
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput
} from "./commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommand,
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput
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
 *     Service Limits</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class Connect extends ConnectClient {
  /**
   * <p>Creates a user account for the specified Amazon Connect instance.</p>
   */
  public createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  public createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Deletes a user account from the specified Amazon Connect instance.</p>
   */
  public deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  public deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
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
   * <p>Describes the specified user account. You can find the instance ID in the console (it’s the
   *    final part of the ARN). The console does not display the user IDs. Instead, list the users and
   *    note the IDs provided in the output.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(
    args: DescribeUserCommandInput,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserHierarchyGroupCommandOutput) => void
  ): Promise<DescribeUserHierarchyGroupCommandOutput> | void {
    const command = new DescribeUserHierarchyGroupCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeUserHierarchyStructureCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribeUserHierarchyStructureCommandOutput) => void
  ): Promise<DescribeUserHierarchyStructureCommandOutput> | void {
    const command = new DescribeUserHierarchyStructureCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetContactAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetContactAttributesCommandOutput) => void
  ): Promise<GetContactAttributesCommandOutput> | void {
    const command = new GetContactAttributesCommand(args);
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
   * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-reports.html">Real-time Metrics Reports</a>
   *    in the <i>Amazon Connect Administrator Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCurrentMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetCurrentMetricDataCommandOutput) => void
  ): Promise<GetCurrentMetricDataCommandOutput> | void {
    const command = new GetCurrentMetricDataCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetFederationTokenCommandOutput) => void),
    cb?: (err: any, data?: GetFederationTokenCommandOutput) => void
  ): Promise<GetFederationTokenCommandOutput> | void {
    const command = new GetFederationTokenCommand(args);
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
   * <p>Gets historical metric data from the specified Amazon Connect instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics.html">Historical Metrics Reports</a> in
   *    the <i>Amazon Connect Administrator Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetMetricDataCommandOutput) => void
  ): Promise<GetMetricDataCommandOutput> | void {
    const command = new GetMetricDataCommand(args);
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
   * <p>Provides information about the contact flows for the specified Amazon Connect instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListContactFlowsCommandOutput) => void),
    cb?: (err: any, data?: ListContactFlowsCommandOutput) => void
  ): Promise<ListContactFlowsCommandOutput> | void {
    const command = new ListContactFlowsCommand(args);
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
   * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListHoursOfOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListHoursOfOperationsCommandOutput) => void
  ): Promise<ListHoursOfOperationsCommandOutput> | void {
    const command = new ListHoursOfOperationsCommand(args);
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
   * <p>Provides information about the phone numbers for the specified Amazon Connect instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): Promise<ListPhoneNumbersCommandOutput> | void {
    const command = new ListPhoneNumbersCommand(args);
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
   * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
   */
  public listQueues(
    args: ListQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueuesCommandOutput>;
  public listQueues(
    args: ListQueuesCommandInput,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  public listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;
  public listQueues(
    args: ListQueuesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListQueuesCommandOutput) => void),
    cb?: (err: any, data?: ListQueuesCommandOutput) => void
  ): Promise<ListQueuesCommandOutput> | void {
    const command = new ListQueuesCommand(args);
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
   * <p>Provides summary information about the routing profiles for the specified Amazon Connect
   *    instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRoutingProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListRoutingProfilesCommandOutput) => void
  ): Promise<ListRoutingProfilesCommandOutput> | void {
    const command = new ListRoutingProfilesCommand(args);
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
   * <p>Provides summary information about the security profiles for the specified Amazon Connect
   *    instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSecurityProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityProfilesCommandOutput) => void
  ): Promise<ListSecurityProfilesCommandOutput> | void {
    const command = new ListSecurityProfilesCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
   *    instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUserHierarchyGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListUserHierarchyGroupsCommandOutput) => void
  ): Promise<ListUserHierarchyGroupsCommandOutput> | void {
    const command = new ListUserHierarchyGroupsCommand(args);
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
   * <p>Provides summary information about the users for the specified Amazon Connect instance.</p>
   */
  public listUsers(
    args: ListUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsersCommandOutput>;
  public listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides
   *    a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
   *
   *          <p>When a new chat contact is successfully created, clients need to subscribe to the
   *    participant’s connection for the created chat within 5 minutes. This is achieved by invoking
   *     <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartChatContactCommandOutput) => void),
    cb?: (err: any, data?: StartChatContactCommandOutput) => void
  ): Promise<StartChatContactCommandOutput> | void {
    const command = new StartChatContactCommand(args);
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
   * <p>Initiates a contact flow to place an outbound call to a customer.</p>
   *
   *          <p>There is a 60 second dialing timeout for this operation. If the call is not connected after
   *    60 seconds, it fails.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartOutboundVoiceContactCommandOutput) => void),
    cb?: (err: any, data?: StartOutboundVoiceContactCommandOutput) => void
  ): Promise<StartOutboundVoiceContactCommandOutput> | void {
    const command = new StartOutboundVoiceContactCommand(args);
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
   * <p>Ends the specified contact.</p>
   */
  public stopContact(
    args: StopContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopContactCommandOutput>;
  public stopContact(
    args: StopContactCommandInput,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;
  public stopContact(
    args: StopContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopContactCommandOutput) => void
  ): void;
  public stopContact(
    args: StopContactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopContactCommandOutput) => void),
    cb?: (err: any, data?: StopContactCommandOutput) => void
  ): Promise<StopContactCommandOutput> | void {
    const command = new StopContactCommand(args);
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
   * <p>Adds the specified tags to the specified resource.</p>
   *          <p>The supported resource type is users.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateContactAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactAttributesCommandOutput) => void
  ): Promise<UpdateContactAttributesCommandOutput> | void {
    const command = new UpdateContactAttributesCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserHierarchyCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserHierarchyCommandOutput) => void
  ): Promise<UpdateUserHierarchyCommandOutput> | void {
    const command = new UpdateUserHierarchyCommand(args);
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
   * <p>Updates the identity information for the specified user.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserIdentityInfoCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserIdentityInfoCommandOutput) => void
  ): Promise<UpdateUserIdentityInfoCommandOutput> | void {
    const command = new UpdateUserIdentityInfoCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserPhoneConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserPhoneConfigCommandOutput) => void
  ): Promise<UpdateUserPhoneConfigCommandOutput> | void {
    const command = new UpdateUserPhoneConfigCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserRoutingProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserRoutingProfileCommandOutput) => void
  ): Promise<UpdateUserRoutingProfileCommandOutput> | void {
    const command = new UpdateUserRoutingProfileCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserSecurityProfilesCommandOutput) => void
  ): Promise<UpdateUserSecurityProfilesCommandOutput> | void {
    const command = new UpdateUserSecurityProfilesCommand(args);
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
