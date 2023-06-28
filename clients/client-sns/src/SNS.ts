// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddPermissionCommand,
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
} from "./commands/AddPermissionCommand";
import {
  CheckIfPhoneNumberIsOptedOutCommand,
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
} from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  ConfirmSubscriptionCommand,
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
} from "./commands/ConfirmSubscriptionCommand";
import {
  CreatePlatformApplicationCommand,
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
} from "./commands/CreatePlatformApplicationCommand";
import {
  CreatePlatformEndpointCommand,
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
} from "./commands/CreatePlatformEndpointCommand";
import {
  CreateSMSSandboxPhoneNumberCommand,
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
} from "./commands/CreateSMSSandboxPhoneNumberCommand";
import { CreateTopicCommand, CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeletePlatformApplicationCommand,
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
} from "./commands/DeletePlatformApplicationCommand";
import {
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
} from "./commands/DeleteSMSSandboxPhoneNumberCommand";
import { DeleteTopicCommand, DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import {
  GetDataProtectionPolicyCommand,
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import {
  GetEndpointAttributesCommand,
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
} from "./commands/GetEndpointAttributesCommand";
import {
  GetPlatformApplicationAttributesCommand,
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
} from "./commands/GetPlatformApplicationAttributesCommand";
import {
  GetSMSAttributesCommand,
  GetSMSAttributesCommandInput,
  GetSMSAttributesCommandOutput,
} from "./commands/GetSMSAttributesCommand";
import {
  GetSMSSandboxAccountStatusCommand,
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
} from "./commands/GetSMSSandboxAccountStatusCommand";
import {
  GetSubscriptionAttributesCommand,
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
} from "./commands/GetSubscriptionAttributesCommand";
import {
  GetTopicAttributesCommand,
  GetTopicAttributesCommandInput,
  GetTopicAttributesCommandOutput,
} from "./commands/GetTopicAttributesCommand";
import {
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "./commands/ListEndpointsByPlatformApplicationCommand";
import {
  ListOriginationNumbersCommand,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "./commands/ListOriginationNumbersCommand";
import {
  ListPhoneNumbersOptedOutCommand,
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
} from "./commands/ListPhoneNumbersOptedOutCommand";
import {
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "./commands/ListPlatformApplicationsCommand";
import {
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "./commands/ListSMSSandboxPhoneNumbersCommand";
import {
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "./commands/ListSubscriptionsByTopicCommand";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "./commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import {
  OptInPhoneNumberCommand,
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput,
} from "./commands/OptInPhoneNumberCommand";
import {
  PublishBatchCommand,
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
} from "./commands/PublishBatchCommand";
import { PublishCommand, PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import {
  PutDataProtectionPolicyCommand,
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  SetEndpointAttributesCommand,
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
} from "./commands/SetEndpointAttributesCommand";
import {
  SetPlatformApplicationAttributesCommand,
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput,
} from "./commands/SetPlatformApplicationAttributesCommand";
import {
  SetSMSAttributesCommand,
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
} from "./commands/SetSMSAttributesCommand";
import {
  SetSubscriptionAttributesCommand,
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
} from "./commands/SetSubscriptionAttributesCommand";
import {
  SetTopicAttributesCommand,
  SetTopicAttributesCommandInput,
  SetTopicAttributesCommandOutput,
} from "./commands/SetTopicAttributesCommand";
import { SubscribeCommand, SubscribeCommandInput, SubscribeCommandOutput } from "./commands/SubscribeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnsubscribeCommand, UnsubscribeCommandInput, UnsubscribeCommandOutput } from "./commands/UnsubscribeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  VerifySMSSandboxPhoneNumberCommand,
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
} from "./commands/VerifySMSSandboxPhoneNumberCommand";
import { SNSClient, SNSClientConfig } from "./SNSClient";

const commands = {
  AddPermissionCommand,
  CheckIfPhoneNumberIsOptedOutCommand,
  ConfirmSubscriptionCommand,
  CreatePlatformApplicationCommand,
  CreatePlatformEndpointCommand,
  CreateSMSSandboxPhoneNumberCommand,
  CreateTopicCommand,
  DeleteEndpointCommand,
  DeletePlatformApplicationCommand,
  DeleteSMSSandboxPhoneNumberCommand,
  DeleteTopicCommand,
  GetDataProtectionPolicyCommand,
  GetEndpointAttributesCommand,
  GetPlatformApplicationAttributesCommand,
  GetSMSAttributesCommand,
  GetSMSSandboxAccountStatusCommand,
  GetSubscriptionAttributesCommand,
  GetTopicAttributesCommand,
  ListEndpointsByPlatformApplicationCommand,
  ListOriginationNumbersCommand,
  ListPhoneNumbersOptedOutCommand,
  ListPlatformApplicationsCommand,
  ListSMSSandboxPhoneNumbersCommand,
  ListSubscriptionsCommand,
  ListSubscriptionsByTopicCommand,
  ListTagsForResourceCommand,
  ListTopicsCommand,
  OptInPhoneNumberCommand,
  PublishCommand,
  PublishBatchCommand,
  PutDataProtectionPolicyCommand,
  RemovePermissionCommand,
  SetEndpointAttributesCommand,
  SetPlatformApplicationAttributesCommand,
  SetSMSAttributesCommand,
  SetSubscriptionAttributesCommand,
  SetTopicAttributesCommand,
  SubscribeCommand,
  TagResourceCommand,
  UnsubscribeCommand,
  UntagResourceCommand,
  VerifySMSSandboxPhoneNumberCommand,
};

export interface SNS {
  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(args: AddPermissionCommandInput, options?: __HttpHandlerOptions): Promise<AddPermissionCommandOutput>;
  addPermission(args: AddPermissionCommandInput, cb: (err: any, data?: AddPermissionCommandOutput) => void): void;
  addPermission(
    args: AddPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput>;
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfirmSubscriptionCommandOutput>;
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformApplicationCommandOutput>;
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformEndpointCommandOutput>;
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSMSSandboxPhoneNumberCommandOutput>;
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(args: CreateTopicCommandInput, options?: __HttpHandlerOptions): Promise<CreateTopicCommandOutput>;
  createTopic(args: CreateTopicCommandInput, cb: (err: any, data?: CreateTopicCommandOutput) => void): void;
  createTopic(
    args: CreateTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlatformApplicationCommandOutput>;
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSMSSandboxPhoneNumberCommandOutput>;
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(args: DeleteTopicCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTopicCommandOutput>;
  deleteTopic(args: DeleteTopicCommandInput, cb: (err: any, data?: DeleteTopicCommandOutput) => void): void;
  deleteTopic(
    args: DeleteTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEndpointAttributesCommandOutput>;
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlatformApplicationAttributesCommandOutput>;
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSMSAttributesCommandOutput>;
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSMSSandboxAccountStatusCommandOutput>;
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionAttributesCommandOutput>;
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTopicAttributesCommandOutput>;
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointsByPlatformApplicationCommandOutput>;
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginationNumbersCommandOutput>;
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersOptedOutCommandOutput>;
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformApplicationsCommandOutput>;
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSMSSandboxPhoneNumbersCommandOutput>;
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsByTopicCommandOutput>;
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): void;
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
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
   * @see {@link ListTopicsCommand}
   */
  listTopics(args: ListTopicsCommandInput, options?: __HttpHandlerOptions): Promise<ListTopicsCommandOutput>;
  listTopics(args: ListTopicsCommandInput, cb: (err: any, data?: ListTopicsCommandOutput) => void): void;
  listTopics(
    args: ListTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptInPhoneNumberCommandOutput>;
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishCommand}
   */
  publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
  publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
  publish(
    args: PublishCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(args: PublishBatchCommandInput, options?: __HttpHandlerOptions): Promise<PublishBatchCommandOutput>;
  publishBatch(args: PublishBatchCommandInput, cb: (err: any, data?: PublishBatchCommandOutput) => void): void;
  publishBatch(
    args: PublishBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetEndpointAttributesCommandOutput>;
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetPlatformApplicationAttributesCommandOutput>;
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSMSAttributesCommandOutput>;
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSubscriptionAttributesCommandOutput>;
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTopicAttributesCommandOutput>;
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): void;
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
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
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifySMSSandboxPhoneNumberCommandOutput>;
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Simple Notification Service</fullname>
 *          <p>Amazon Simple Notification Service (Amazon SNS) is a web service that enables you
 *             to build distributed web-enabled applications. Applications can use Amazon SNS to easily push
 *             real-time notification messages to interested subscribers over multiple delivery
 *             protocols. For more information about this product see the <a href="http://aws.amazon.com/sns/">Amazon SNS product page</a>. For detailed information about Amazon SNS features
 *             and their associated API calls, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/">Amazon SNS Developer Guide</a>. </p>
 *          <p>For information on the permissions you need to use this API, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html">Identity and access management in Amazon SNS</a> in the <i>Amazon SNS Developer
 *                 Guide.</i>
 *          </p>
 *          <p>We also provide SDKs that enable you to access Amazon SNS from your preferred programming
 *             language. The SDKs contain functionality that automatically takes care of tasks such as:
 *             cryptographically signing your service requests, retrying requests, and handling error
 *             responses. For a list of available SDKs, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p>
 */
export class SNS extends SNSClient implements SNS {}
createAggregatedClient(commands, SNS);
