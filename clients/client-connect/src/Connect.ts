import { ConnectClient } from "./ConnectClient";
import {
  AssociateApprovedOriginCommand,
  AssociateApprovedOriginCommandInput,
  AssociateApprovedOriginCommandOutput,
} from "./commands/AssociateApprovedOriginCommand";
import {
  AssociateBotCommand,
  AssociateBotCommandInput,
  AssociateBotCommandOutput,
} from "./commands/AssociateBotCommand";
import {
  AssociateInstanceStorageConfigCommand,
  AssociateInstanceStorageConfigCommandInput,
  AssociateInstanceStorageConfigCommandOutput,
} from "./commands/AssociateInstanceStorageConfigCommand";
import {
  AssociateLambdaFunctionCommand,
  AssociateLambdaFunctionCommandInput,
  AssociateLambdaFunctionCommandOutput,
} from "./commands/AssociateLambdaFunctionCommand";
import {
  AssociateLexBotCommand,
  AssociateLexBotCommandInput,
  AssociateLexBotCommandOutput,
} from "./commands/AssociateLexBotCommand";
import {
  AssociateQueueQuickConnectsCommand,
  AssociateQueueQuickConnectsCommandInput,
  AssociateQueueQuickConnectsCommandOutput,
} from "./commands/AssociateQueueQuickConnectsCommand";
import {
  AssociateRoutingProfileQueuesCommand,
  AssociateRoutingProfileQueuesCommandInput,
  AssociateRoutingProfileQueuesCommandOutput,
} from "./commands/AssociateRoutingProfileQueuesCommand";
import {
  AssociateSecurityKeyCommand,
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
} from "./commands/AssociateSecurityKeyCommand";
import {
  CreateAgentStatusCommand,
  CreateAgentStatusCommandInput,
  CreateAgentStatusCommandOutput,
} from "./commands/CreateAgentStatusCommand";
import {
  CreateContactFlowCommand,
  CreateContactFlowCommandInput,
  CreateContactFlowCommandOutput,
} from "./commands/CreateContactFlowCommand";
import {
  CreateHoursOfOperationCommand,
  CreateHoursOfOperationCommandInput,
  CreateHoursOfOperationCommandOutput,
} from "./commands/CreateHoursOfOperationCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import {
  CreateIntegrationAssociationCommand,
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
} from "./commands/CreateIntegrationAssociationCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  CreateQuickConnectCommand,
  CreateQuickConnectCommandInput,
  CreateQuickConnectCommandOutput,
} from "./commands/CreateQuickConnectCommand";
import {
  CreateRoutingProfileCommand,
  CreateRoutingProfileCommandInput,
  CreateRoutingProfileCommandOutput,
} from "./commands/CreateRoutingProfileCommand";
import {
  CreateUseCaseCommand,
  CreateUseCaseCommandInput,
  CreateUseCaseCommandOutput,
} from "./commands/CreateUseCaseCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateUserHierarchyGroupCommand,
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
} from "./commands/CreateUserHierarchyGroupCommand";
import {
  DeleteHoursOfOperationCommand,
  DeleteHoursOfOperationCommandInput,
  DeleteHoursOfOperationCommandOutput,
} from "./commands/DeleteHoursOfOperationCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import {
  DeleteIntegrationAssociationCommand,
  DeleteIntegrationAssociationCommandInput,
  DeleteIntegrationAssociationCommandOutput,
} from "./commands/DeleteIntegrationAssociationCommand";
import {
  DeleteQuickConnectCommand,
  DeleteQuickConnectCommandInput,
  DeleteQuickConnectCommandOutput,
} from "./commands/DeleteQuickConnectCommand";
import {
  DeleteUseCaseCommand,
  DeleteUseCaseCommandInput,
  DeleteUseCaseCommandOutput,
} from "./commands/DeleteUseCaseCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserHierarchyGroupCommand,
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
} from "./commands/DeleteUserHierarchyGroupCommand";
import {
  DescribeAgentStatusCommand,
  DescribeAgentStatusCommandInput,
  DescribeAgentStatusCommandOutput,
} from "./commands/DescribeAgentStatusCommand";
import {
  DescribeContactFlowCommand,
  DescribeContactFlowCommandInput,
  DescribeContactFlowCommandOutput,
} from "./commands/DescribeContactFlowCommand";
import {
  DescribeHoursOfOperationCommand,
  DescribeHoursOfOperationCommandInput,
  DescribeHoursOfOperationCommandOutput,
} from "./commands/DescribeHoursOfOperationCommand";
import {
  DescribeInstanceAttributeCommand,
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
} from "./commands/DescribeInstanceAttributeCommand";
import {
  DescribeInstanceCommand,
  DescribeInstanceCommandInput,
  DescribeInstanceCommandOutput,
} from "./commands/DescribeInstanceCommand";
import {
  DescribeInstanceStorageConfigCommand,
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
} from "./commands/DescribeInstanceStorageConfigCommand";
import {
  DescribeQueueCommand,
  DescribeQueueCommandInput,
  DescribeQueueCommandOutput,
} from "./commands/DescribeQueueCommand";
import {
  DescribeQuickConnectCommand,
  DescribeQuickConnectCommandInput,
  DescribeQuickConnectCommandOutput,
} from "./commands/DescribeQuickConnectCommand";
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
  DisassociateApprovedOriginCommand,
  DisassociateApprovedOriginCommandInput,
  DisassociateApprovedOriginCommandOutput,
} from "./commands/DisassociateApprovedOriginCommand";
import {
  DisassociateBotCommand,
  DisassociateBotCommandInput,
  DisassociateBotCommandOutput,
} from "./commands/DisassociateBotCommand";
import {
  DisassociateInstanceStorageConfigCommand,
  DisassociateInstanceStorageConfigCommandInput,
  DisassociateInstanceStorageConfigCommandOutput,
} from "./commands/DisassociateInstanceStorageConfigCommand";
import {
  DisassociateLambdaFunctionCommand,
  DisassociateLambdaFunctionCommandInput,
  DisassociateLambdaFunctionCommandOutput,
} from "./commands/DisassociateLambdaFunctionCommand";
import {
  DisassociateLexBotCommand,
  DisassociateLexBotCommandInput,
  DisassociateLexBotCommandOutput,
} from "./commands/DisassociateLexBotCommand";
import {
  DisassociateQueueQuickConnectsCommand,
  DisassociateQueueQuickConnectsCommandInput,
  DisassociateQueueQuickConnectsCommandOutput,
} from "./commands/DisassociateQueueQuickConnectsCommand";
import {
  DisassociateRoutingProfileQueuesCommand,
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
} from "./commands/DisassociateRoutingProfileQueuesCommand";
import {
  DisassociateSecurityKeyCommand,
  DisassociateSecurityKeyCommandInput,
  DisassociateSecurityKeyCommandOutput,
} from "./commands/DisassociateSecurityKeyCommand";
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
  ListAgentStatusesCommand,
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput,
} from "./commands/ListAgentStatusesCommand";
import {
  ListApprovedOriginsCommand,
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "./commands/ListApprovedOriginsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
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
  ListInstanceAttributesCommand,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "./commands/ListInstanceAttributesCommand";
import {
  ListInstanceStorageConfigsCommand,
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "./commands/ListInstanceStorageConfigsCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "./commands/ListIntegrationAssociationsCommand";
import {
  ListLambdaFunctionsCommand,
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "./commands/ListLambdaFunctionsCommand";
import { ListLexBotsCommand, ListLexBotsCommandInput, ListLexBotsCommandOutput } from "./commands/ListLexBotsCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "./commands/ListPhoneNumbersCommand";
import { ListPromptsCommand, ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import {
  ListQueueQuickConnectsCommand,
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "./commands/ListQueueQuickConnectsCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListQuickConnectsCommand,
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
} from "./commands/ListQuickConnectsCommand";
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
  ListSecurityKeysCommand,
  ListSecurityKeysCommandInput,
  ListSecurityKeysCommandOutput,
} from "./commands/ListSecurityKeysCommand";
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
  ListUseCasesCommand,
  ListUseCasesCommandInput,
  ListUseCasesCommandOutput,
} from "./commands/ListUseCasesCommand";
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
import {
  StartTaskContactCommand,
  StartTaskContactCommandInput,
  StartTaskContactCommandOutput,
} from "./commands/StartTaskContactCommand";
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
  UpdateAgentStatusCommand,
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
} from "./commands/UpdateAgentStatusCommand";
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
  UpdateHoursOfOperationCommand,
  UpdateHoursOfOperationCommandInput,
  UpdateHoursOfOperationCommandOutput,
} from "./commands/UpdateHoursOfOperationCommand";
import {
  UpdateInstanceAttributeCommand,
  UpdateInstanceAttributeCommandInput,
  UpdateInstanceAttributeCommandOutput,
} from "./commands/UpdateInstanceAttributeCommand";
import {
  UpdateInstanceStorageConfigCommand,
  UpdateInstanceStorageConfigCommandInput,
  UpdateInstanceStorageConfigCommandOutput,
} from "./commands/UpdateInstanceStorageConfigCommand";
import {
  UpdateQueueHoursOfOperationCommand,
  UpdateQueueHoursOfOperationCommandInput,
  UpdateQueueHoursOfOperationCommandOutput,
} from "./commands/UpdateQueueHoursOfOperationCommand";
import {
  UpdateQueueMaxContactsCommand,
  UpdateQueueMaxContactsCommandInput,
  UpdateQueueMaxContactsCommandOutput,
} from "./commands/UpdateQueueMaxContactsCommand";
import {
  UpdateQueueNameCommand,
  UpdateQueueNameCommandInput,
  UpdateQueueNameCommandOutput,
} from "./commands/UpdateQueueNameCommand";
import {
  UpdateQueueOutboundCallerConfigCommand,
  UpdateQueueOutboundCallerConfigCommandInput,
  UpdateQueueOutboundCallerConfigCommandOutput,
} from "./commands/UpdateQueueOutboundCallerConfigCommand";
import {
  UpdateQueueStatusCommand,
  UpdateQueueStatusCommandInput,
  UpdateQueueStatusCommandOutput,
} from "./commands/UpdateQueueStatusCommand";
import {
  UpdateQuickConnectConfigCommand,
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
} from "./commands/UpdateQuickConnectConfigCommand";
import {
  UpdateQuickConnectNameCommand,
  UpdateQuickConnectNameCommandInput,
  UpdateQuickConnectNameCommandOutput,
} from "./commands/UpdateQuickConnectNameCommand";
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
 * <p>Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer
 *    contact center and provide reliable customer engagement at any scale.</p>
 *          <p>Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing.
 *    You can also resolve customer issues more efficiently by getting customers in touch with the
 *    appropriate agents.</p>
 *          <p>There are limits to the number of Amazon Connect resources that you can create. There are also limits
 *    to the number of requests that you can make per second. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect
 *     Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          <p>You can
 *    connect
 *    programmatically to an AWS service by using an endpoint. For a list of Amazon Connect endpoints, see
 *     <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect
 *    Endpoints</a>.</p>
 *          <note>
 *             <p>Working with contact flows? Check out the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect Flow language</a>.</p>
 *          </note>
 */
export class Connect extends ConnectClient {
  /**
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Associates an approved origin to an Amazon Connect instance.</p>
   */
  public associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApprovedOriginCommandOutput>;
  public associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void
  ): void;
  public associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApprovedOriginCommandOutput) => void
  ): void;
  public associateApprovedOrigin(
    args: AssociateApprovedOriginCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateApprovedOriginCommandOutput) => void),
    cb?: (err: any, data?: AssociateApprovedOriginCommandOutput) => void
  ): Promise<AssociateApprovedOriginCommandOutput> | void {
    const command = new AssociateApprovedOriginCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot.</p>
   */
  public associateBot(
    args: AssociateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBotCommandOutput>;
  public associateBot(args: AssociateBotCommandInput, cb: (err: any, data?: AssociateBotCommandOutput) => void): void;
  public associateBot(
    args: AssociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBotCommandOutput) => void
  ): void;
  public associateBot(
    args: AssociateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateBotCommandOutput) => void),
    cb?: (err: any, data?: AssociateBotCommandOutput) => void
  ): Promise<AssociateBotCommandOutput> | void {
    const command = new AssociateBotCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Associates a storage resource type for the first time. You can only associate one type of
   *    storage configuration in a single call. This means, for example, that you can't define an
   *    instance with multiple S3 buckets for storing chat transcripts.</p>
   *          <p>This API does not create a resource that doesn't exist. It only associates it to the
   *    instance. Ensure that the resource being specified in the storage configuration, like an S3
   *    bucket, exists when being used for association.</p>
   */
  public associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateInstanceStorageConfigCommandOutput>;
  public associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void
  ): void;
  public associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void
  ): void;
  public associateInstanceStorageConfig(
    args: AssociateInstanceStorageConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void),
    cb?: (err: any, data?: AssociateInstanceStorageConfigCommandOutput) => void
  ): Promise<AssociateInstanceStorageConfigCommandOutput> | void {
    const command = new AssociateInstanceStorageConfigCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Allows the specified Amazon Connect instance to access the specified Lambda function.</p>
   */
  public associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLambdaFunctionCommandOutput>;
  public associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void
  ): void;
  public associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void
  ): void;
  public associateLambdaFunction(
    args: AssociateLambdaFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLambdaFunctionCommandOutput) => void),
    cb?: (err: any, data?: AssociateLambdaFunctionCommandOutput) => void
  ): Promise<AssociateLambdaFunctionCommandOutput> | void {
    const command = new AssociateLambdaFunctionCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.</p>
   */
  public associateLexBot(
    args: AssociateLexBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLexBotCommandOutput>;
  public associateLexBot(
    args: AssociateLexBotCommandInput,
    cb: (err: any, data?: AssociateLexBotCommandOutput) => void
  ): void;
  public associateLexBot(
    args: AssociateLexBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLexBotCommandOutput) => void
  ): void;
  public associateLexBot(
    args: AssociateLexBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLexBotCommandOutput) => void),
    cb?: (err: any, data?: AssociateLexBotCommandOutput) => void
  ): Promise<AssociateLexBotCommandOutput> | void {
    const command = new AssociateLexBotCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Associates a set of quick connects with a queue.</p>
   */
  public associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateQueueQuickConnectsCommandOutput>;
  public associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void
  ): void;
  public associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void
  ): void;
  public associateQueueQuickConnects(
    args: AssociateQueueQuickConnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void),
    cb?: (err: any, data?: AssociateQueueQuickConnectsCommandOutput) => void
  ): Promise<AssociateQueueQuickConnectsCommandOutput> | void {
    const command = new AssociateQueueQuickConnectsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Associates a security key to the instance.</p>
   */
  public associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSecurityKeyCommandOutput>;
  public associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void
  ): void;
  public associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSecurityKeyCommandOutput) => void
  ): void;
  public associateSecurityKey(
    args: AssociateSecurityKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSecurityKeyCommandOutput) => void),
    cb?: (err: any, data?: AssociateSecurityKeyCommandOutput) => void
  ): Promise<AssociateSecurityKeyCommandOutput> | void {
    const command = new AssociateSecurityKeyCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Creates an agent status for the specified Amazon Connect instance.</p>
   */
  public createAgentStatus(
    args: CreateAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentStatusCommandOutput>;
  public createAgentStatus(
    args: CreateAgentStatusCommandInput,
    cb: (err: any, data?: CreateAgentStatusCommandOutput) => void
  ): void;
  public createAgentStatus(
    args: CreateAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentStatusCommandOutput) => void
  ): void;
  public createAgentStatus(
    args: CreateAgentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAgentStatusCommandOutput) => void),
    cb?: (err: any, data?: CreateAgentStatusCommandOutput) => void
  ): Promise<CreateAgentStatusCommandOutput> | void {
    const command = new CreateAgentStatusCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Creates hours of operation. </p>
   */
  public createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHoursOfOperationCommandOutput>;
  public createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    cb: (err: any, data?: CreateHoursOfOperationCommandOutput) => void
  ): void;
  public createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHoursOfOperationCommandOutput) => void
  ): void;
  public createHoursOfOperation(
    args: CreateHoursOfOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHoursOfOperationCommandOutput) => void),
    cb?: (err: any, data?: CreateHoursOfOperationCommandOutput) => void
  ): Promise<CreateHoursOfOperationCommandOutput> | void {
    const command = new CreateHoursOfOperationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any
   *    storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not
   *    allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
   *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
   * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
   * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
   */
  public createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  public createInstance(
    args: CreateInstanceCommandInput,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
  public createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
  public createInstance(
    args: CreateInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceCommandOutput) => void
  ): Promise<CreateInstanceCommandOutput> | void {
    const command = new CreateInstanceCommand(args);
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
   * <p>Create an AppIntegration association with an Amazon Connect instance.</p>
   */
  public createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationAssociationCommandOutput>;
  public createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void
  ): void;
  public createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void
  ): void;
  public createIntegrationAssociation(
    args: CreateIntegrationAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIntegrationAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateIntegrationAssociationCommandOutput) => void
  ): Promise<CreateIntegrationAssociationCommandOutput> | void {
    const command = new CreateIntegrationAssociationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Creates a new queue for the specified Amazon Connect instance.</p>
   */
  public createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  public createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  public createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;
  public createQueue(
    args: CreateQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQueueCommandOutput) => void),
    cb?: (err: any, data?: CreateQueueCommandOutput) => void
  ): Promise<CreateQueueCommandOutput> | void {
    const command = new CreateQueueCommand(args);
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
   * <p>Creates a quick connect for the specified Amazon Connect instance.</p>
   */
  public createQuickConnect(
    args: CreateQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuickConnectCommandOutput>;
  public createQuickConnect(
    args: CreateQuickConnectCommandInput,
    cb: (err: any, data?: CreateQuickConnectCommandOutput) => void
  ): void;
  public createQuickConnect(
    args: CreateQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuickConnectCommandOutput) => void
  ): void;
  public createQuickConnect(
    args: CreateQuickConnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQuickConnectCommandOutput) => void),
    cb?: (err: any, data?: CreateQuickConnectCommandOutput) => void
  ): Promise<CreateQuickConnectCommandOutput> | void {
    const command = new CreateQuickConnectCommand(args);
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
   * <p>Creates a use case for an AppIntegration association.</p>
   */
  public createUseCase(
    args: CreateUseCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUseCaseCommandOutput>;
  public createUseCase(
    args: CreateUseCaseCommandInput,
    cb: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): void;
  public createUseCase(
    args: CreateUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): void;
  public createUseCase(
    args: CreateUseCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUseCaseCommandOutput) => void),
    cb?: (err: any, data?: CreateUseCaseCommandOutput) => void
  ): Promise<CreateUseCaseCommandOutput> | void {
    const command = new CreateUseCaseCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Deletes an hours of operation.</p>
   */
  public deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHoursOfOperationCommandOutput>;
  public deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    cb: (err: any, data?: DeleteHoursOfOperationCommandOutput) => void
  ): void;
  public deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHoursOfOperationCommandOutput) => void
  ): void;
  public deleteHoursOfOperation(
    args: DeleteHoursOfOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHoursOfOperationCommandOutput) => void),
    cb?: (err: any, data?: DeleteHoursOfOperationCommandOutput) => void
  ): Promise<DeleteHoursOfOperationCommandOutput> | void {
    const command = new DeleteHoursOfOperationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Deletes the Amazon Connect instance.</p>
   *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
   * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
   * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
   */
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): Promise<DeleteInstanceCommandOutput> | void {
    const command = new DeleteInstanceCommand(args);
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
   * <p>Deletes an AppIntegration association from an Amazon Connect instance. The association must not have
   *    any use cases associated with it.</p>
   */
  public deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationAssociationCommandOutput>;
  public deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void
  ): void;
  public deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void
  ): void;
  public deleteIntegrationAssociation(
    args: DeleteIntegrationAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntegrationAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntegrationAssociationCommandOutput) => void
  ): Promise<DeleteIntegrationAssociationCommandOutput> | void {
    const command = new DeleteIntegrationAssociationCommand(args);
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
   * <p>Deletes a quick connect.</p>
   */
  public deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuickConnectCommandOutput>;
  public deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void
  ): void;
  public deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuickConnectCommandOutput) => void
  ): void;
  public deleteQuickConnect(
    args: DeleteQuickConnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQuickConnectCommandOutput) => void),
    cb?: (err: any, data?: DeleteQuickConnectCommandOutput) => void
  ): Promise<DeleteQuickConnectCommandOutput> | void {
    const command = new DeleteQuickConnectCommand(args);
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
   * <p>Deletes a use case from an AppIntegration association.</p>
   */
  public deleteUseCase(
    args: DeleteUseCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUseCaseCommandOutput>;
  public deleteUseCase(
    args: DeleteUseCaseCommandInput,
    cb: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): void;
  public deleteUseCase(
    args: DeleteUseCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): void;
  public deleteUseCase(
    args: DeleteUseCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUseCaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteUseCaseCommandOutput) => void
  ): Promise<DeleteUseCaseCommandOutput> | void {
    const command = new DeleteUseCaseCommand(args);
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
   *     Your Amazon Connect Instance</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
   * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have
   *    any active child groups.</p>
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Describes an agent status.</p>
   */
  public describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentStatusCommandOutput>;
  public describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    cb: (err: any, data?: DescribeAgentStatusCommandOutput) => void
  ): void;
  public describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentStatusCommandOutput) => void
  ): void;
  public describeAgentStatus(
    args: DescribeAgentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAgentStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeAgentStatusCommandOutput) => void
  ): Promise<DescribeAgentStatusCommandOutput> | void {
    const command = new DescribeAgentStatusCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Describes the hours of operation.</p>
   */
  public describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHoursOfOperationCommandOutput>;
  public describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void
  ): void;
  public describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void
  ): void;
  public describeHoursOfOperation(
    args: DescribeHoursOfOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHoursOfOperationCommandOutput) => void),
    cb?: (err: any, data?: DescribeHoursOfOperationCommandOutput) => void
  ): Promise<DescribeHoursOfOperationCommandOutput> | void {
    const command = new DescribeHoursOfOperationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns the current state of the specified instance identifier. It tracks the instance while
   *    it is being created and returns an error status, if applicable. </p>
   *          <p>If an instance is not created successfully, the instance status reason field returns details
   *    relevant to the reason. The instance in a failed state is returned only for 24 hours after the
   *    CreateInstance API was invoked.</p>
   */
  public describeInstance(
    args: DescribeInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceCommandOutput>;
  public describeInstance(
    args: DescribeInstanceCommandInput,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): void;
  public describeInstance(
    args: DescribeInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): void;
  public describeInstance(
    args: DescribeInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): Promise<DescribeInstanceCommandOutput> | void {
    const command = new DescribeInstanceCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Describes the specified instance attribute.</p>
   */
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAttributeCommandOutput>;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): void;
  public describeInstanceAttribute(
    args: DescribeInstanceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceAttributeCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceAttributeCommandOutput) => void
  ): Promise<DescribeInstanceAttributeCommandOutput> | void {
    const command = new DescribeInstanceAttributeCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Retrieves the current storage configurations for the specified resource type, association
   *    ID, and instance ID.</p>
   */
  public describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceStorageConfigCommandOutput>;
  public describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void
  ): void;
  public describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void
  ): void;
  public describeInstanceStorageConfig(
    args: DescribeInstanceStorageConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceStorageConfigCommandOutput) => void
  ): Promise<DescribeInstanceStorageConfigCommandOutput> | void {
    const command = new DescribeInstanceStorageConfigCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Describes the specified queue.</p>
   */
  public describeQueue(
    args: DescribeQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueueCommandOutput>;
  public describeQueue(
    args: DescribeQueueCommandInput,
    cb: (err: any, data?: DescribeQueueCommandOutput) => void
  ): void;
  public describeQueue(
    args: DescribeQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueueCommandOutput) => void
  ): void;
  public describeQueue(
    args: DescribeQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeQueueCommandOutput) => void),
    cb?: (err: any, data?: DescribeQueueCommandOutput) => void
  ): Promise<DescribeQueueCommandOutput> | void {
    const command = new DescribeQueueCommand(args);
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
   * <p>Describes the quick connect.</p>
   */
  public describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuickConnectCommandOutput>;
  public describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void
  ): void;
  public describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuickConnectCommandOutput) => void
  ): void;
  public describeQuickConnect(
    args: DescribeQuickConnectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeQuickConnectCommandOutput) => void),
    cb?: (err: any, data?: DescribeQuickConnectCommandOutput) => void
  ): Promise<DescribeQuickConnectCommandOutput> | void {
    const command = new DescribeQuickConnectCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Revokes access to integrated applications from Amazon Connect.</p>
   */
  public disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApprovedOriginCommandOutput>;
  public disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void
  ): void;
  public disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void
  ): void;
  public disassociateApprovedOrigin(
    args: DisassociateApprovedOriginCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateApprovedOriginCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApprovedOriginCommandOutput) => void
  ): Promise<DisassociateApprovedOriginCommandOutput> | void {
    const command = new DisassociateApprovedOriginCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2
   *    bot. </p>
   */
  public disassociateBot(
    args: DisassociateBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBotCommandOutput>;
  public disassociateBot(
    args: DisassociateBotCommandInput,
    cb: (err: any, data?: DisassociateBotCommandOutput) => void
  ): void;
  public disassociateBot(
    args: DisassociateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBotCommandOutput) => void
  ): void;
  public disassociateBot(
    args: DisassociateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateBotCommandOutput) => void),
    cb?: (err: any, data?: DisassociateBotCommandOutput) => void
  ): Promise<DisassociateBotCommandOutput> | void {
    const command = new DisassociateBotCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Removes the storage type configurations for the specified resource type and association
   *    ID.</p>
   */
  public disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateInstanceStorageConfigCommandOutput>;
  public disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void
  ): void;
  public disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void
  ): void;
  public disassociateInstanceStorageConfig(
    args: DisassociateInstanceStorageConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void),
    cb?: (err: any, data?: DisassociateInstanceStorageConfigCommandOutput) => void
  ): Promise<DisassociateInstanceStorageConfigCommandOutput> | void {
    const command = new DisassociateInstanceStorageConfigCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Remove the Lambda function from the dropdown options available in the relevant contact flow
   *    blocks.</p>
   */
  public disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLambdaFunctionCommandOutput>;
  public disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void
  ): void;
  public disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void
  ): void;
  public disassociateLambdaFunction(
    args: DisassociateLambdaFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLambdaFunctionCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLambdaFunctionCommandOutput) => void
  ): Promise<DisassociateLambdaFunctionCommandOutput> | void {
    const command = new DisassociateLambdaFunctionCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex bot.</p>
   */
  public disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLexBotCommandOutput>;
  public disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    cb: (err: any, data?: DisassociateLexBotCommandOutput) => void
  ): void;
  public disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLexBotCommandOutput) => void
  ): void;
  public disassociateLexBot(
    args: DisassociateLexBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLexBotCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLexBotCommandOutput) => void
  ): Promise<DisassociateLexBotCommandOutput> | void {
    const command = new DisassociateLexBotCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Disassociates a set of quick connects from a queue.</p>
   */
  public disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateQueueQuickConnectsCommandOutput>;
  public disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void
  ): void;
  public disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void
  ): void;
  public disassociateQueueQuickConnects(
    args: DisassociateQueueQuickConnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateQueueQuickConnectsCommandOutput) => void
  ): Promise<DisassociateQueueQuickConnectsCommandOutput> | void {
    const command = new DisassociateQueueQuickConnectsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Deletes the specified security key.</p>
   */
  public disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSecurityKeyCommandOutput>;
  public disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void
  ): void;
  public disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void
  ): void;
  public disassociateSecurityKey(
    args: DisassociateSecurityKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSecurityKeyCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSecurityKeyCommandOutput) => void
  ): Promise<DisassociateSecurityKeyCommandOutput> | void {
    const command = new DisassociateSecurityKeyCommand(args);
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
   *          <note>
   *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
   *     credentials, an error message similar to the following one appears: </p>
   *             <p>
   *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
   *      Amazon Connect</code>
   *             </p>
   *          </note>
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
   *
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Lists agent statuses.</p>
   */
  public listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentStatusesCommandOutput>;
  public listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    cb: (err: any, data?: ListAgentStatusesCommandOutput) => void
  ): void;
  public listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentStatusesCommandOutput) => void
  ): void;
  public listAgentStatuses(
    args: ListAgentStatusesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAgentStatusesCommandOutput) => void),
    cb?: (err: any, data?: ListAgentStatusesCommandOutput) => void
  ): Promise<ListAgentStatusesCommandOutput> | void {
    const command = new ListAgentStatusesCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
   */
  public listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApprovedOriginsCommandOutput>;
  public listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void
  ): void;
  public listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApprovedOriginsCommandOutput) => void
  ): void;
  public listApprovedOrigins(
    args: ListApprovedOriginsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApprovedOriginsCommandOutput) => void),
    cb?: (err: any, data?: ListApprovedOriginsCommandOutput) => void
  ): Promise<ListApprovedOriginsCommandOutput> | void {
    const command = new ListApprovedOriginsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the
   *    instance. </p>
   */
  public listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  public listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  public listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  public listBots(
    args: ListBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotsCommandOutput) => void),
    cb?: (err: any, data?: ListBotsCommandOutput) => void
  ): Promise<ListBotsCommandOutput> | void {
    const command = new ListBotsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns a paginated list of all attribute types for the given instance.</p>
   */
  public listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceAttributesCommandOutput>;
  public listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void
  ): void;
  public listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceAttributesCommandOutput) => void
  ): void;
  public listInstanceAttributes(
    args: ListInstanceAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceAttributesCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceAttributesCommandOutput) => void
  ): Promise<ListInstanceAttributesCommandOutput> | void {
    const command = new ListInstanceAttributesCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Return a list of instances which are in active state, creation-in-progress state, and failed
   *    state. Instances that aren't successfully created (they are in a failed state) are returned only
   *    for 24 hours after the CreateInstance API was invoked.</p>
   */
  public listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  public listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListInstancesCommandOutput) => void
  ): Promise<ListInstancesCommandOutput> | void {
    const command = new ListInstancesCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *
   *          <p>Returns a paginated list of storage configs for the identified instance and resource
   *    type.</p>
   */
  public listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceStorageConfigsCommandOutput>;
  public listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void
  ): void;
  public listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void
  ): void;
  public listInstanceStorageConfigs(
    args: ListInstanceStorageConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstanceStorageConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListInstanceStorageConfigsCommandOutput) => void
  ): Promise<ListInstanceStorageConfigsCommandOutput> | void {
    const command = new ListInstanceStorageConfigsCommand(args);
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
   * <p>Provides summary information about the AppIntegration associations for the specified Amazon Connect
   *    instance.</p>
   */
  public listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationAssociationsCommandOutput>;
  public listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void
  ): void;
  public listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void
  ): void;
  public listIntegrationAssociations(
    args: ListIntegrationAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIntegrationAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListIntegrationAssociationsCommandOutput) => void
  ): Promise<ListIntegrationAssociationsCommandOutput> | void {
    const command = new ListIntegrationAssociationsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the
   *    relevant contact flow blocks.</p>
   */
  public listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLambdaFunctionsCommandOutput>;
  public listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void
  ): void;
  public listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLambdaFunctionsCommandOutput) => void
  ): void;
  public listLambdaFunctions(
    args: ListLambdaFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLambdaFunctionsCommandOutput) => void),
    cb?: (err: any, data?: ListLambdaFunctionsCommandOutput) => void
  ): Promise<ListLambdaFunctionsCommandOutput> | void {
    const command = new ListLambdaFunctionsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns a paginated list of all the Amazon Lex bots currently associated with the
   *    instance.</p>
   */
  public listLexBots(args: ListLexBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListLexBotsCommandOutput>;
  public listLexBots(args: ListLexBotsCommandInput, cb: (err: any, data?: ListLexBotsCommandOutput) => void): void;
  public listLexBots(
    args: ListLexBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLexBotsCommandOutput) => void
  ): void;
  public listLexBots(
    args: ListLexBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLexBotsCommandOutput) => void),
    cb?: (err: any, data?: ListLexBotsCommandOutput) => void
  ): Promise<ListLexBotsCommandOutput> | void {
    const command = new ListLexBotsCommand(args);
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
   * <p>Provides information about the prompts for the specified Amazon Connect instance.</p>
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Lists the quick connects associated with a queue.</p>
   */
  public listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueueQuickConnectsCommandOutput>;
  public listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void
  ): void;
  public listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void
  ): void;
  public listQueueQuickConnects(
    args: ListQueueQuickConnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueueQuickConnectsCommandOutput) => void),
    cb?: (err: any, data?: ListQueueQuickConnectsCommandOutput) => void
  ): Promise<ListQueueQuickConnectsCommandOutput> | void {
    const command = new ListQueueQuickConnectsCommand(args);
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
   *          <p>If you do not specify a <code>QueueTypes</code>
   *    parameter, both standard and agent queues are returned. This might cause an unexpected truncation
   *    of results if you have more than 1000 agents and you limit the number of results of the API call
   *    in code.</p>
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
   * <p>Provides information about the quick connects for the specified Amazon Connect instance. </p>
   */
  public listQuickConnects(
    args: ListQuickConnectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuickConnectsCommandOutput>;
  public listQuickConnects(
    args: ListQuickConnectsCommandInput,
    cb: (err: any, data?: ListQuickConnectsCommandOutput) => void
  ): void;
  public listQuickConnects(
    args: ListQuickConnectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuickConnectsCommandOutput) => void
  ): void;
  public listQuickConnects(
    args: ListQuickConnectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQuickConnectsCommandOutput) => void),
    cb?: (err: any, data?: ListQuickConnectsCommandOutput) => void
  ): Promise<ListQuickConnectsCommandOutput> | void {
    const command = new ListQuickConnectsCommand(args);
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
   * <p>Lists the queues associated with a routing profile.</p>
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Returns a paginated list of all security keys associated with the instance.</p>
   */
  public listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityKeysCommandOutput>;
  public listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    cb: (err: any, data?: ListSecurityKeysCommandOutput) => void
  ): void;
  public listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityKeysCommandOutput) => void
  ): void;
  public listSecurityKeys(
    args: ListSecurityKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityKeysCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityKeysCommandOutput) => void
  ): Promise<ListSecurityKeysCommandOutput> | void {
    const command = new ListSecurityKeysCommand(args);
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
   * <p>Lists the use cases. </p>
   */
  public listUseCases(
    args: ListUseCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUseCasesCommandOutput>;
  public listUseCases(args: ListUseCasesCommandInput, cb: (err: any, data?: ListUseCasesCommandOutput) => void): void;
  public listUseCases(
    args: ListUseCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUseCasesCommandOutput) => void
  ): void;
  public listUseCases(
    args: ListUseCasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUseCasesCommandOutput) => void),
    cb?: (err: any, data?: ListUseCasesCommandOutput) => void
  ): Promise<ListUseCasesCommandOutput> | void {
    const command = new ListUseCasesCommand(args);
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
   *          <p>When a new chat contact is successfully created, clients must subscribe to the participant’s
   *    connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
   *
   *          <p>A 429 error occurs in two situations:</p>
   *          <ul>
   *             <li>
   *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
   *      exception.</p>
   *             </li>
   *             <li>
   *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
   *       chats</a> is exceeded. Active chat throttling returns a
   *       <code>LimitExceededException</code>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect Administrator
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
   * <p>Starts recording the contact when the agent joins the call. StartContactRecording is a
   *    one-time action. For example, if you use StopContactRecording to stop recording an ongoing call,
   *    you can't use StartContactRecording to restart it. For scenarios where the recording has started
   *    and you want to suspend and resume it, such as when collecting sensitive information (for
   *    example, a credit card number), use SuspendContactRecording and ResumeContactRecording.</p>
   *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
   *     behavior</a> block.</p>
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
   * <p>Places an outbound call to a contact, and then initiates the contact flow. It performs the
   *    actions in the contact flow that's specified (in <code>ContactFlowId</code>).</p>
   *
   *          <p>Agents do not initiate the outbound API, which means that they do not dial the contact. If
   *    the contact flow places an outbound call to a contact, and then puts the contact in queue, the
   *    call is then routed to the agent, like any other inbound case.</p>
   *
   *          <p>There is a 60-second dialing timeout for this operation. If the call is not connected after
   *    60 seconds, it fails.</p>
   *          <note>
   *             <p>UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK
   *     mobile numbers, you must submit a service quota increase request. For more information, see
   *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
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
   * <p>Initiates a contact flow to start a new task.</p>
   */
  public startTaskContact(
    args: StartTaskContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTaskContactCommandOutput>;
  public startTaskContact(
    args: StartTaskContactCommandInput,
    cb: (err: any, data?: StartTaskContactCommandOutput) => void
  ): void;
  public startTaskContact(
    args: StartTaskContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskContactCommandOutput) => void
  ): void;
  public startTaskContact(
    args: StartTaskContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTaskContactCommandOutput) => void),
    cb?: (err: any, data?: StartTaskContactCommandOutput) => void
  ): Promise<StartTaskContactCommandOutput> | void {
    const command = new StartTaskContactCommand(args);
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
   * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
   *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
   *    StartContactRecording to restart it. For scenarios where the recording has started and you want
   *    to suspend it for sensitive information (for example, to collect a credit card number), and then
   *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
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
   *          <p>The supported resource types are users, routing profiles, queues, quick connects,
   *    contact flows, agent status, and hours of operation.</p>
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates agent status.</p>
   */
  public updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentStatusCommandOutput>;
  public updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;
  public updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;
  public updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAgentStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): Promise<UpdateAgentStatusCommandOutput> | void {
    const command = new UpdateAgentStatusCommand(args);
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
   * <p>Creates or updates
   *    user-defined contact attributes
   *    associated with the specified contact.</p>
   *          <p>You can create or update user-defined attributes for both ongoing and completed contacts.
   *    For example, while the call is active, you can update the customer's name or the reason the
   *    customer called. You can add notes about steps that the agent took during the call that display
   *    to the next agent that takes the call. You can also update attributes for a contact using data
   *    from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls
   *    for additional analysis, such as legal review or to identify abusive callers.</p>
   *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For
   *    information about CTR retention and the maximum size of the CTR attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature
   *     specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   *
   *          <p>
   *             <b>Important:</b> You cannot use the operation to update
   *    attributes for contacts that occurred prior to the release of the API, which was September 12,
   *    2018. You can update attributes only for contacts that started after the release of the API. If
   *    you attempt to update attributes for a contact that occurred prior to the release of the API, a
   *    400 error is returned. This applies also to queued callbacks that were initiated prior to the
   *    release of the API but are still active in your instance.</p>
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the hours of operation.</p>
   */
  public updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHoursOfOperationCommandOutput>;
  public updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    cb: (err: any, data?: UpdateHoursOfOperationCommandOutput) => void
  ): void;
  public updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHoursOfOperationCommandOutput) => void
  ): void;
  public updateHoursOfOperation(
    args: UpdateHoursOfOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHoursOfOperationCommandOutput) => void),
    cb?: (err: any, data?: UpdateHoursOfOperationCommandOutput) => void
  ): Promise<UpdateHoursOfOperationCommandOutput> | void {
    const command = new UpdateHoursOfOperationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the value for the specified attribute type.</p>
   */
  public updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceAttributeCommandOutput>;
  public updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void
  ): void;
  public updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void
  ): void;
  public updateInstanceAttribute(
    args: UpdateInstanceAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInstanceAttributeCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceAttributeCommandOutput) => void
  ): Promise<UpdateInstanceAttributeCommandOutput> | void {
    const command = new UpdateInstanceAttributeCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
   */
  public updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceStorageConfigCommandOutput>;
  public updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void
  ): void;
  public updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void
  ): void;
  public updateInstanceStorageConfig(
    args: UpdateInstanceStorageConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceStorageConfigCommandOutput) => void
  ): Promise<UpdateInstanceStorageConfigCommandOutput> | void {
    const command = new UpdateInstanceStorageConfigCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the hours of operation for the specified queue.</p>
   */
  public updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueHoursOfOperationCommandOutput>;
  public updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void
  ): void;
  public updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void
  ): void;
  public updateQueueHoursOfOperation(
    args: UpdateQueueHoursOfOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueHoursOfOperationCommandOutput) => void
  ): Promise<UpdateQueueHoursOfOperationCommandOutput> | void {
    const command = new UpdateQueueHoursOfOperationCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the maximum number of contacts allowed in a queue before it is considered
   *    full.</p>
   */
  public updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueMaxContactsCommandOutput>;
  public updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void
  ): void;
  public updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void
  ): void;
  public updateQueueMaxContacts(
    args: UpdateQueueMaxContactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueMaxContactsCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueMaxContactsCommandOutput) => void
  ): Promise<UpdateQueueMaxContactsCommandOutput> | void {
    const command = new UpdateQueueMaxContactsCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the name and description of a queue. At least <code>Name</code> or <code>Description</code> must be provided.</p>
   */
  public updateQueueName(
    args: UpdateQueueNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueNameCommandOutput>;
  public updateQueueName(
    args: UpdateQueueNameCommandInput,
    cb: (err: any, data?: UpdateQueueNameCommandOutput) => void
  ): void;
  public updateQueueName(
    args: UpdateQueueNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueNameCommandOutput) => void
  ): void;
  public updateQueueName(
    args: UpdateQueueNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueNameCommandOutput) => void
  ): Promise<UpdateQueueNameCommandOutput> | void {
    const command = new UpdateQueueNameCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the outbound caller ID name, number, and outbound whisper flow for a specified
   *    queue.</p>
   */
  public updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueOutboundCallerConfigCommandOutput>;
  public updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void
  ): void;
  public updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void
  ): void;
  public updateQueueOutboundCallerConfig(
    args: UpdateQueueOutboundCallerConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueOutboundCallerConfigCommandOutput) => void
  ): Promise<UpdateQueueOutboundCallerConfigCommandOutput> | void {
    const command = new UpdateQueueOutboundCallerConfigCommand(args);
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
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>Updates the status of the queue.</p>
   */
  public updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQueueStatusCommandOutput>;
  public updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void
  ): void;
  public updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueStatusCommandOutput) => void
  ): void;
  public updateQueueStatus(
    args: UpdateQueueStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQueueStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateQueueStatusCommandOutput) => void
  ): Promise<UpdateQueueStatusCommandOutput> | void {
    const command = new UpdateQueueStatusCommand(args);
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
   * <p>Updates the configuration settings for the specified quick connect.</p>
   */
  public updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickConnectConfigCommandOutput>;
  public updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void
  ): void;
  public updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void
  ): void;
  public updateQuickConnectConfig(
    args: UpdateQuickConnectConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQuickConnectConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateQuickConnectConfigCommandOutput) => void
  ): Promise<UpdateQuickConnectConfigCommandOutput> | void {
    const command = new UpdateQuickConnectConfigCommand(args);
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
   * <p>Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least <code>Name</code> or <code>Description</code> must be provided.</p>
   */
  public updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickConnectNameCommandOutput>;
  public updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void
  ): void;
  public updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void
  ): void;
  public updateQuickConnectName(
    args: UpdateQuickConnectNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQuickConnectNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateQuickConnectNameCommandOutput) => void
  ): Promise<UpdateQuickConnectNameCommandOutput> | void {
    const command = new UpdateQuickConnectNameCommand(args);
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
   * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing
   *    profile.</p>
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
   * <p>Updates the name and description of a routing profile. The request accepts the following data in JSON format.
   *    At least <code>Name</code> or <code>Description</code> must be provided.</p>
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
   *             <p>We strongly recommend limiting who has the ability to invoke
   *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
   *     of other users by changing their email address. This poses a security risk to your organization.
   *     They can change the email address of a user to the attacker's email address, and then reset the
   *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
   *      Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
