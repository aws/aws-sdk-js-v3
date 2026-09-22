// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  AddPermissionCommand,
} from "./commands/AddPermissionCommand";
import {
  type CheckIfPhoneNumberIsOptedOutCommandInput,
  type CheckIfPhoneNumberIsOptedOutCommandOutput,
  CheckIfPhoneNumberIsOptedOutCommand,
} from "./commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  type ConfirmSubscriptionCommandInput,
  type ConfirmSubscriptionCommandOutput,
  ConfirmSubscriptionCommand,
} from "./commands/ConfirmSubscriptionCommand";
import {
  type CreatePlatformApplicationCommandInput,
  type CreatePlatformApplicationCommandOutput,
  CreatePlatformApplicationCommand,
} from "./commands/CreatePlatformApplicationCommand";
import {
  type CreatePlatformEndpointCommandInput,
  type CreatePlatformEndpointCommandOutput,
  CreatePlatformEndpointCommand,
} from "./commands/CreatePlatformEndpointCommand";
import {
  type CreateSMSSandboxPhoneNumberCommandInput,
  type CreateSMSSandboxPhoneNumberCommandOutput,
  CreateSMSSandboxPhoneNumberCommand,
} from "./commands/CreateSMSSandboxPhoneNumberCommand";
import {
  type CreateTopicCommandInput,
  type CreateTopicCommandOutput,
  CreateTopicCommand,
} from "./commands/CreateTopicCommand";
import {
  type DeleteEndpointCommandInput,
  type DeleteEndpointCommandOutput,
  DeleteEndpointCommand,
} from "./commands/DeleteEndpointCommand";
import {
  type DeletePlatformApplicationCommandInput,
  type DeletePlatformApplicationCommandOutput,
  DeletePlatformApplicationCommand,
} from "./commands/DeletePlatformApplicationCommand";
import {
  type DeleteSMSSandboxPhoneNumberCommandInput,
  type DeleteSMSSandboxPhoneNumberCommandOutput,
  DeleteSMSSandboxPhoneNumberCommand,
} from "./commands/DeleteSMSSandboxPhoneNumberCommand";
import {
  type DeleteTopicCommandInput,
  type DeleteTopicCommandOutput,
  DeleteTopicCommand,
} from "./commands/DeleteTopicCommand";
import {
  type GetDataProtectionPolicyCommandInput,
  type GetDataProtectionPolicyCommandOutput,
  GetDataProtectionPolicyCommand,
} from "./commands/GetDataProtectionPolicyCommand";
import {
  type GetEndpointAttributesCommandInput,
  type GetEndpointAttributesCommandOutput,
  GetEndpointAttributesCommand,
} from "./commands/GetEndpointAttributesCommand";
import {
  type GetPlatformApplicationAttributesCommandInput,
  type GetPlatformApplicationAttributesCommandOutput,
  GetPlatformApplicationAttributesCommand,
} from "./commands/GetPlatformApplicationAttributesCommand";
import {
  type GetSMSAttributesCommandInput,
  type GetSMSAttributesCommandOutput,
  GetSMSAttributesCommand,
} from "./commands/GetSMSAttributesCommand";
import {
  type GetSMSSandboxAccountStatusCommandInput,
  type GetSMSSandboxAccountStatusCommandOutput,
  GetSMSSandboxAccountStatusCommand,
} from "./commands/GetSMSSandboxAccountStatusCommand";
import {
  type GetSubscriptionAttributesCommandInput,
  type GetSubscriptionAttributesCommandOutput,
  GetSubscriptionAttributesCommand,
} from "./commands/GetSubscriptionAttributesCommand";
import {
  type GetTopicAttributesCommandInput,
  type GetTopicAttributesCommandOutput,
  GetTopicAttributesCommand,
} from "./commands/GetTopicAttributesCommand";
import {
  type ListEndpointsByPlatformApplicationCommandInput,
  type ListEndpointsByPlatformApplicationCommandOutput,
  ListEndpointsByPlatformApplicationCommand,
} from "./commands/ListEndpointsByPlatformApplicationCommand";
import {
  type ListOriginationNumbersCommandInput,
  type ListOriginationNumbersCommandOutput,
  ListOriginationNumbersCommand,
} from "./commands/ListOriginationNumbersCommand";
import {
  type ListPhoneNumbersOptedOutCommandInput,
  type ListPhoneNumbersOptedOutCommandOutput,
  ListPhoneNumbersOptedOutCommand,
} from "./commands/ListPhoneNumbersOptedOutCommand";
import {
  type ListPlatformApplicationsCommandInput,
  type ListPlatformApplicationsCommandOutput,
  ListPlatformApplicationsCommand,
} from "./commands/ListPlatformApplicationsCommand";
import {
  type ListSMSSandboxPhoneNumbersCommandInput,
  type ListSMSSandboxPhoneNumbersCommandOutput,
  ListSMSSandboxPhoneNumbersCommand,
} from "./commands/ListSMSSandboxPhoneNumbersCommand";
import {
  type ListSubscriptionsByTopicCommandInput,
  type ListSubscriptionsByTopicCommandOutput,
  ListSubscriptionsByTopicCommand,
} from "./commands/ListSubscriptionsByTopicCommand";
import {
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsCommand,
} from "./commands/ListSubscriptionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTopicsCommandInput,
  type ListTopicsCommandOutput,
  ListTopicsCommand,
} from "./commands/ListTopicsCommand";
import {
  type OptInPhoneNumberCommandInput,
  type OptInPhoneNumberCommandOutput,
  OptInPhoneNumberCommand,
} from "./commands/OptInPhoneNumberCommand";
import {
  type PublishBatchCommandInput,
  type PublishBatchCommandOutput,
  PublishBatchCommand,
} from "./commands/PublishBatchCommand";
import { type PublishCommandInput, type PublishCommandOutput, PublishCommand } from "./commands/PublishCommand";
import {
  type PutDataProtectionPolicyCommandInput,
  type PutDataProtectionPolicyCommandOutput,
  PutDataProtectionPolicyCommand,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  RemovePermissionCommand,
} from "./commands/RemovePermissionCommand";
import {
  type SetEndpointAttributesCommandInput,
  type SetEndpointAttributesCommandOutput,
  SetEndpointAttributesCommand,
} from "./commands/SetEndpointAttributesCommand";
import {
  type SetPlatformApplicationAttributesCommandInput,
  type SetPlatformApplicationAttributesCommandOutput,
  SetPlatformApplicationAttributesCommand,
} from "./commands/SetPlatformApplicationAttributesCommand";
import {
  type SetSMSAttributesCommandInput,
  type SetSMSAttributesCommandOutput,
  SetSMSAttributesCommand,
} from "./commands/SetSMSAttributesCommand";
import {
  type SetSubscriptionAttributesCommandInput,
  type SetSubscriptionAttributesCommandOutput,
  SetSubscriptionAttributesCommand,
} from "./commands/SetSubscriptionAttributesCommand";
import {
  type SetTopicAttributesCommandInput,
  type SetTopicAttributesCommandOutput,
  SetTopicAttributesCommand,
} from "./commands/SetTopicAttributesCommand";
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
  type VerifySMSSandboxPhoneNumberCommandInput,
  type VerifySMSSandboxPhoneNumberCommandOutput,
  VerifySMSSandboxPhoneNumberCommand,
} from "./commands/VerifySMSSandboxPhoneNumberCommand";
import { paginateListEndpointsByPlatformApplication } from "./pagination/ListEndpointsByPlatformApplicationPaginator";
import { paginateListOriginationNumbers } from "./pagination/ListOriginationNumbersPaginator";
import { paginateListPhoneNumbersOptedOut } from "./pagination/ListPhoneNumbersOptedOutPaginator";
import { paginateListPlatformApplications } from "./pagination/ListPlatformApplicationsPaginator";
import { paginateListSMSSandboxPhoneNumbers } from "./pagination/ListSMSSandboxPhoneNumbersPaginator";
import { paginateListSubscriptionsByTopic } from "./pagination/ListSubscriptionsByTopicPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";
import { paginateListTopics } from "./pagination/ListTopicsPaginator";
import { SNSClient } from "./SNSClient";

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
const paginators = {
  paginateListEndpointsByPlatformApplication,
  paginateListOriginationNumbers,
  paginateListPhoneNumbersOptedOut,
  paginateListPlatformApplications,
  paginateListSMSSandboxPhoneNumbers,
  paginateListSubscriptions,
  paginateListSubscriptionsByTopic,
  paginateListTopics,
};

/**
 * @public
 */
export interface SNSRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SNS {
  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: SNSRequestOptions
  ): Promise<AddPermissionCommandOutput>;
  addPermission(
    args: AddPermissionCommandInput,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;
  addPermission(
    args: AddPermissionCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: AddPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckIfPhoneNumberIsOptedOutCommand}
   */
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options?: SNSRequestOptions
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput>;
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;
  checkIfPhoneNumberIsOptedOut(
    args: CheckIfPhoneNumberIsOptedOutCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: CheckIfPhoneNumberIsOptedOutCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfirmSubscriptionCommand}
   */
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options?: SNSRequestOptions
  ): Promise<ConfirmSubscriptionCommandOutput>;
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;
  confirmSubscription(
    args: ConfirmSubscriptionCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ConfirmSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformApplicationCommand}
   */
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options?: SNSRequestOptions
  ): Promise<CreatePlatformApplicationCommandOutput>;
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;
  createPlatformApplication(
    args: CreatePlatformApplicationCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: CreatePlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlatformEndpointCommand}
   */
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options?: SNSRequestOptions
  ): Promise<CreatePlatformEndpointCommandOutput>;
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;
  createPlatformEndpoint(
    args: CreatePlatformEndpointCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: CreatePlatformEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSMSSandboxPhoneNumberCommand}
   */
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options?: SNSRequestOptions
  ): Promise<CreateSMSSandboxPhoneNumberCommandOutput>;
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  createSMSSandboxPhoneNumber(
    args: CreateSMSSandboxPhoneNumberCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: CreateSMSSandboxPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTopicCommand}
   */
  createTopic(
    args: CreateTopicCommandInput,
    options?: SNSRequestOptions
  ): Promise<CreateTopicCommandOutput>;
  createTopic(
    args: CreateTopicCommandInput,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;
  createTopic(
    args: CreateTopicCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: CreateTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: SNSRequestOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlatformApplicationCommand}
   */
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options?: SNSRequestOptions
  ): Promise<DeletePlatformApplicationCommandOutput>;
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;
  deletePlatformApplication(
    args: DeletePlatformApplicationCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: DeletePlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSMSSandboxPhoneNumberCommand}
   */
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options?: SNSRequestOptions
  ): Promise<DeleteSMSSandboxPhoneNumberCommandOutput>;
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  deleteSMSSandboxPhoneNumber(
    args: DeleteSMSSandboxPhoneNumberCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: DeleteSMSSandboxPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTopicCommand}
   */
  deleteTopic(
    args: DeleteTopicCommandInput,
    options?: SNSRequestOptions
  ): Promise<DeleteTopicCommandOutput>;
  deleteTopic(
    args: DeleteTopicCommandInput,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;
  deleteTopic(
    args: DeleteTopicCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: DeleteTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProtectionPolicyCommand}
   */
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetDataProtectionPolicyCommandOutput>;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;
  getDataProtectionPolicy(
    args: GetDataProtectionPolicyCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointAttributesCommand}
   */
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetEndpointAttributesCommandOutput>;
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;
  getEndpointAttributes(
    args: GetEndpointAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetEndpointAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlatformApplicationAttributesCommand}
   */
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetPlatformApplicationAttributesCommandOutput>;
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  getPlatformApplicationAttributes(
    args: GetPlatformApplicationAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetPlatformApplicationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSMSAttributesCommand}
   */
  getSMSAttributes(): Promise<GetSMSAttributesCommandOutput>;
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetSMSAttributesCommandOutput>;
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;
  getSMSAttributes(
    args: GetSMSAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetSMSAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSMSSandboxAccountStatusCommand}
   */
  getSMSSandboxAccountStatus(): Promise<GetSMSSandboxAccountStatusCommandOutput>;
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetSMSSandboxAccountStatusCommandOutput>;
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;
  getSMSSandboxAccountStatus(
    args: GetSMSSandboxAccountStatusCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetSMSSandboxAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionAttributesCommand}
   */
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetSubscriptionAttributesCommandOutput>;
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;
  getSubscriptionAttributes(
    args: GetSubscriptionAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetSubscriptionAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTopicAttributesCommand}
   */
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<GetTopicAttributesCommandOutput>;
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;
  getTopicAttributes(
    args: GetTopicAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: GetTopicAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   */
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListEndpointsByPlatformApplicationCommandOutput>;
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;
  listEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListEndpointsByPlatformApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginationNumbersCommand}
   */
  listOriginationNumbers(): Promise<ListOriginationNumbersCommandOutput>;
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListOriginationNumbersCommandOutput>;
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;
  listOriginationNumbers(
    args: ListOriginationNumbersCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListOriginationNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   */
  listPhoneNumbersOptedOut(): Promise<ListPhoneNumbersOptedOutCommandOutput>;
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListPhoneNumbersOptedOutCommandOutput>;
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;
  listPhoneNumbersOptedOut(
    args: ListPhoneNumbersOptedOutCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListPhoneNumbersOptedOutCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   */
  listPlatformApplications(): Promise<ListPlatformApplicationsCommandOutput>;
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListPlatformApplicationsCommandOutput>;
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;
  listPlatformApplications(
    args: ListPlatformApplicationsCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListPlatformApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   */
  listSMSSandboxPhoneNumbers(): Promise<ListSMSSandboxPhoneNumbersCommandOutput>;
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListSMSSandboxPhoneNumbersCommandOutput>;
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;
  listSMSSandboxPhoneNumbers(
    args: ListSMSSandboxPhoneNumbersCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListSMSSandboxPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   */
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListSubscriptionsByTopicCommandOutput>;
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): void;
  listSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListSubscriptionsByTopicCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsCommand}
   */
  listTopics(): Promise<ListTopicsCommandOutput>;
  listTopics(
    args: ListTopicsCommandInput,
    options?: SNSRequestOptions
  ): Promise<ListTopicsCommandOutput>;
  listTopics(
    args: ListTopicsCommandInput,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;
  listTopics(
    args: ListTopicsCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: ListTopicsCommandOutput) => void
  ): void;

  /**
   * @see {@link OptInPhoneNumberCommand}
   */
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options?: SNSRequestOptions
  ): Promise<OptInPhoneNumberCommandOutput>;
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;
  optInPhoneNumber(
    args: OptInPhoneNumberCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: OptInPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishCommand}
   */
  publish(
    args: PublishCommandInput,
    options?: SNSRequestOptions
  ): Promise<PublishCommandOutput>;
  publish(
    args: PublishCommandInput,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;
  publish(
    args: PublishCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: PublishCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishBatchCommand}
   */
  publishBatch(
    args: PublishBatchCommandInput,
    options?: SNSRequestOptions
  ): Promise<PublishBatchCommandOutput>;
  publishBatch(
    args: PublishBatchCommandInput,
    cb: (err: any, data?: PublishBatchCommandOutput) => void
  ): void;
  publishBatch(
    args: PublishBatchCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: PublishBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataProtectionPolicyCommand}
   */
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options?: SNSRequestOptions
  ): Promise<PutDataProtectionPolicyCommandOutput>;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;
  putDataProtectionPolicy(
    args: PutDataProtectionPolicyCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: PutDataProtectionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: SNSRequestOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetEndpointAttributesCommand}
   */
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<SetEndpointAttributesCommandOutput>;
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;
  setEndpointAttributes(
    args: SetEndpointAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SetEndpointAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetPlatformApplicationAttributesCommand}
   */
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<SetPlatformApplicationAttributesCommandOutput>;
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;
  setPlatformApplicationAttributes(
    args: SetPlatformApplicationAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SetPlatformApplicationAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSMSAttributesCommand}
   */
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<SetSMSAttributesCommandOutput>;
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;
  setSMSAttributes(
    args: SetSMSAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SetSMSAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSubscriptionAttributesCommand}
   */
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<SetSubscriptionAttributesCommandOutput>;
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;
  setSubscriptionAttributes(
    args: SetSubscriptionAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SetSubscriptionAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTopicAttributesCommand}
   */
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options?: SNSRequestOptions
  ): Promise<SetTopicAttributesCommandOutput>;
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): void;
  setTopicAttributes(
    args: SetTopicAttributesCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SetTopicAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SubscribeCommand}
   */
  subscribe(
    args: SubscribeCommandInput,
    options?: SNSRequestOptions
  ): Promise<SubscribeCommandOutput>;
  subscribe(
    args: SubscribeCommandInput,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;
  subscribe(
    args: SubscribeCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: SubscribeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SNSRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UnsubscribeCommand}
   */
  unsubscribe(
    args: UnsubscribeCommandInput,
    options?: SNSRequestOptions
  ): Promise<UnsubscribeCommandOutput>;
  unsubscribe(
    args: UnsubscribeCommandInput,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;
  unsubscribe(
    args: UnsubscribeCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: UnsubscribeCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SNSRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifySMSSandboxPhoneNumberCommand}
   */
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options?: SNSRequestOptions
  ): Promise<VerifySMSSandboxPhoneNumberCommandOutput>;
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;
  verifySMSSandboxPhoneNumber(
    args: VerifySMSSandboxPhoneNumberCommandInput,
    options: SNSRequestOptions,
    cb: (err: any, data?: VerifySMSSandboxPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsByPlatformApplicationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEndpointsByPlatformApplicationCommandOutput}.
   */
  paginateListEndpointsByPlatformApplication(
    args: ListEndpointsByPlatformApplicationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEndpointsByPlatformApplicationCommandOutput>;

  /**
   * @see {@link ListOriginationNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOriginationNumbersCommandOutput}.
   */
  paginateListOriginationNumbers(
    args?: ListOriginationNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOriginationNumbersCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersOptedOutCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumbersOptedOutCommandOutput}.
   */
  paginateListPhoneNumbersOptedOut(
    args?: ListPhoneNumbersOptedOutCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumbersOptedOutCommandOutput>;

  /**
   * @see {@link ListPlatformApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPlatformApplicationsCommandOutput}.
   */
  paginateListPlatformApplications(
    args?: ListPlatformApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPlatformApplicationsCommandOutput>;

  /**
   * @see {@link ListSMSSandboxPhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSMSSandboxPhoneNumbersCommandOutput}.
   */
  paginateListSMSSandboxPhoneNumbers(
    args?: ListSMSSandboxPhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSMSSandboxPhoneNumbersCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args?: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;

  /**
   * @see {@link ListSubscriptionsByTopicCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsByTopicCommandOutput}.
   */
  paginateListSubscriptionsByTopic(
    args: ListSubscriptionsByTopicCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsByTopicCommandOutput>;

  /**
   * @see {@link ListTopicsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTopicsCommandOutput}.
   */
  paginateListTopics(
    args?: ListTopicsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTopicsCommandOutput>;
}

/**
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
 * @public
 */
export class SNS extends SNSClient implements SNS {}
createAggregatedClient(commands, SNS, { paginators });
