// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CreateBrandProfileAttributesCommandInput,
  type CreateBrandProfileAttributesCommandOutput,
  CreateBrandProfileAttributesCommand,
} from "./commands/CreateBrandProfileAttributesCommand";
import {
  type CreateBrandProfileCommandInput,
  type CreateBrandProfileCommandOutput,
  CreateBrandProfileCommand,
} from "./commands/CreateBrandProfileCommand";
import {
  type CreateBrandProfileFromRegistrationCommandInput,
  type CreateBrandProfileFromRegistrationCommandOutput,
  CreateBrandProfileFromRegistrationCommand,
} from "./commands/CreateBrandProfileFromRegistrationCommand";
import {
  type CreateNotifyCodeConfigurationCommandInput,
  type CreateNotifyCodeConfigurationCommandOutput,
  CreateNotifyCodeConfigurationCommand,
} from "./commands/CreateNotifyCodeConfigurationCommand";
import {
  type CreateRegistrationsFromBrandProfileCommandInput,
  type CreateRegistrationsFromBrandProfileCommandOutput,
  CreateRegistrationsFromBrandProfileCommand,
} from "./commands/CreateRegistrationsFromBrandProfileCommand";
import {
  type DeleteBrandProfileAttributeCommandInput,
  type DeleteBrandProfileAttributeCommandOutput,
  DeleteBrandProfileAttributeCommand,
} from "./commands/DeleteBrandProfileAttributeCommand";
import {
  type DeleteBrandProfileCommandInput,
  type DeleteBrandProfileCommandOutput,
  DeleteBrandProfileCommand,
} from "./commands/DeleteBrandProfileCommand";
import {
  type DeleteNotifyCodeConfigurationCommandInput,
  type DeleteNotifyCodeConfigurationCommandOutput,
  DeleteNotifyCodeConfigurationCommand,
} from "./commands/DeleteNotifyCodeConfigurationCommand";
import {
  type GetBrandProfileAttributeCommandInput,
  type GetBrandProfileAttributeCommandOutput,
  GetBrandProfileAttributeCommand,
} from "./commands/GetBrandProfileAttributeCommand";
import {
  type GetBrandProfileCommandInput,
  type GetBrandProfileCommandOutput,
  GetBrandProfileCommand,
} from "./commands/GetBrandProfileCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import {
  type GetNotifyCodeConfigurationCommandInput,
  type GetNotifyCodeConfigurationCommandOutput,
  GetNotifyCodeConfigurationCommand,
} from "./commands/GetNotifyCodeConfigurationCommand";
import {
  type ListBrandProfileAttributesCommandInput,
  type ListBrandProfileAttributesCommandOutput,
  ListBrandProfileAttributesCommand,
} from "./commands/ListBrandProfileAttributesCommand";
import {
  type ListBrandProfilesCommandInput,
  type ListBrandProfilesCommandOutput,
  ListBrandProfilesCommand,
} from "./commands/ListBrandProfilesCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListNotifyCodeConfigurationsCommandInput,
  type ListNotifyCodeConfigurationsCommandOutput,
  ListNotifyCodeConfigurationsCommand,
} from "./commands/ListNotifyCodeConfigurationsCommand";
import {
  type ListRegistrationsFromBrandProfileCommandInput,
  type ListRegistrationsFromBrandProfileCommandOutput,
  ListRegistrationsFromBrandProfileCommand,
} from "./commands/ListRegistrationsFromBrandProfileCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SendNotifyCodeVerificationCommandInput,
  type SendNotifyCodeVerificationCommandOutput,
  SendNotifyCodeVerificationCommand,
} from "./commands/SendNotifyCodeVerificationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBrandProfileAttributeCommandInput,
  type UpdateBrandProfileAttributeCommandOutput,
  UpdateBrandProfileAttributeCommand,
} from "./commands/UpdateBrandProfileAttributeCommand";
import {
  type UpdateBrandProfileCommandInput,
  type UpdateBrandProfileCommandOutput,
  UpdateBrandProfileCommand,
} from "./commands/UpdateBrandProfileCommand";
import {
  type UpdateBrandProfileFromRegistrationCommandInput,
  type UpdateBrandProfileFromRegistrationCommandOutput,
  UpdateBrandProfileFromRegistrationCommand,
} from "./commands/UpdateBrandProfileFromRegistrationCommand";
import {
  type UpdateNotifyCodeConfigurationCommandInput,
  type UpdateNotifyCodeConfigurationCommandOutput,
  UpdateNotifyCodeConfigurationCommand,
} from "./commands/UpdateNotifyCodeConfigurationCommand";
import {
  type UpdateRegistrationsFromBrandProfileCommandInput,
  type UpdateRegistrationsFromBrandProfileCommandOutput,
  UpdateRegistrationsFromBrandProfileCommand,
} from "./commands/UpdateRegistrationsFromBrandProfileCommand";
import {
  type ValidateNotifyCodeVerificationCommandInput,
  type ValidateNotifyCodeVerificationCommandOutput,
  ValidateNotifyCodeVerificationCommand,
} from "./commands/ValidateNotifyCodeVerificationCommand";
import { EndUserMessagingClient } from "./EndUserMessagingClient";
import type { EndUserMessagingServiceException } from "./models/EndUserMessagingServiceException";
import { paginateListBrandProfileAttributes } from "./pagination/ListBrandProfileAttributesPaginator";
import { paginateListBrandProfiles } from "./pagination/ListBrandProfilesPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListNotifyCodeConfigurations } from "./pagination/ListNotifyCodeConfigurationsPaginator";
import { paginateListRegistrationsFromBrandProfile } from "./pagination/ListRegistrationsFromBrandProfilePaginator";
import { waitUntilBrandProfileActive } from "./waiters/waitForBrandProfileActive";
import { waitUntilJobSuccess } from "./waiters/waitForJobSuccess";

const commands = {
  CreateBrandProfileCommand,
  CreateBrandProfileAttributesCommand,
  CreateBrandProfileFromRegistrationCommand,
  CreateNotifyCodeConfigurationCommand,
  CreateRegistrationsFromBrandProfileCommand,
  DeleteBrandProfileCommand,
  DeleteBrandProfileAttributeCommand,
  DeleteNotifyCodeConfigurationCommand,
  GetBrandProfileCommand,
  GetBrandProfileAttributeCommand,
  GetJobCommand,
  GetNotifyCodeConfigurationCommand,
  ListBrandProfileAttributesCommand,
  ListBrandProfilesCommand,
  ListJobsCommand,
  ListNotifyCodeConfigurationsCommand,
  ListRegistrationsFromBrandProfileCommand,
  ListTagsForResourceCommand,
  SendNotifyCodeVerificationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBrandProfileCommand,
  UpdateBrandProfileAttributeCommand,
  UpdateBrandProfileFromRegistrationCommand,
  UpdateNotifyCodeConfigurationCommand,
  UpdateRegistrationsFromBrandProfileCommand,
  ValidateNotifyCodeVerificationCommand,
};
const paginators = {
  paginateListBrandProfileAttributes,
  paginateListBrandProfiles,
  paginateListJobs,
  paginateListNotifyCodeConfigurations,
  paginateListRegistrationsFromBrandProfile,
};
const waiters = {
  waitUntilBrandProfileActive,
  waitUntilJobSuccess,
};

/**
 * @public
 */
export interface EndUserMessagingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EndUserMessaging {
  /**
   * @see {@link CreateBrandProfileCommand}
   */
  createBrandProfile(
    args: CreateBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<CreateBrandProfileCommandOutput>;
  createBrandProfile(
    args: CreateBrandProfileCommandInput,
    cb: (err: any, data?: CreateBrandProfileCommandOutput) => void
  ): void;
  createBrandProfile(
    args: CreateBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: CreateBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrandProfileAttributesCommand}
   */
  createBrandProfileAttributes(
    args: CreateBrandProfileAttributesCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<CreateBrandProfileAttributesCommandOutput>;
  createBrandProfileAttributes(
    args: CreateBrandProfileAttributesCommandInput,
    cb: (err: any, data?: CreateBrandProfileAttributesCommandOutput) => void
  ): void;
  createBrandProfileAttributes(
    args: CreateBrandProfileAttributesCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: CreateBrandProfileAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrandProfileFromRegistrationCommand}
   */
  createBrandProfileFromRegistration(
    args: CreateBrandProfileFromRegistrationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<CreateBrandProfileFromRegistrationCommandOutput>;
  createBrandProfileFromRegistration(
    args: CreateBrandProfileFromRegistrationCommandInput,
    cb: (err: any, data?: CreateBrandProfileFromRegistrationCommandOutput) => void
  ): void;
  createBrandProfileFromRegistration(
    args: CreateBrandProfileFromRegistrationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: CreateBrandProfileFromRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotifyCodeConfigurationCommand}
   */
  createNotifyCodeConfiguration(
    args: CreateNotifyCodeConfigurationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<CreateNotifyCodeConfigurationCommandOutput>;
  createNotifyCodeConfiguration(
    args: CreateNotifyCodeConfigurationCommandInput,
    cb: (err: any, data?: CreateNotifyCodeConfigurationCommandOutput) => void
  ): void;
  createNotifyCodeConfiguration(
    args: CreateNotifyCodeConfigurationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: CreateNotifyCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistrationsFromBrandProfileCommand}
   */
  createRegistrationsFromBrandProfile(
    args: CreateRegistrationsFromBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<CreateRegistrationsFromBrandProfileCommandOutput>;
  createRegistrationsFromBrandProfile(
    args: CreateRegistrationsFromBrandProfileCommandInput,
    cb: (err: any, data?: CreateRegistrationsFromBrandProfileCommandOutput) => void
  ): void;
  createRegistrationsFromBrandProfile(
    args: CreateRegistrationsFromBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: CreateRegistrationsFromBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandProfileCommand}
   */
  deleteBrandProfile(
    args: DeleteBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<DeleteBrandProfileCommandOutput>;
  deleteBrandProfile(
    args: DeleteBrandProfileCommandInput,
    cb: (err: any, data?: DeleteBrandProfileCommandOutput) => void
  ): void;
  deleteBrandProfile(
    args: DeleteBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: DeleteBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrandProfileAttributeCommand}
   */
  deleteBrandProfileAttribute(
    args: DeleteBrandProfileAttributeCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<DeleteBrandProfileAttributeCommandOutput>;
  deleteBrandProfileAttribute(
    args: DeleteBrandProfileAttributeCommandInput,
    cb: (err: any, data?: DeleteBrandProfileAttributeCommandOutput) => void
  ): void;
  deleteBrandProfileAttribute(
    args: DeleteBrandProfileAttributeCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: DeleteBrandProfileAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotifyCodeConfigurationCommand}
   */
  deleteNotifyCodeConfiguration(
    args: DeleteNotifyCodeConfigurationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<DeleteNotifyCodeConfigurationCommandOutput>;
  deleteNotifyCodeConfiguration(
    args: DeleteNotifyCodeConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotifyCodeConfigurationCommandOutput) => void
  ): void;
  deleteNotifyCodeConfiguration(
    args: DeleteNotifyCodeConfigurationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: DeleteNotifyCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrandProfileCommand}
   */
  getBrandProfile(
    args: GetBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<GetBrandProfileCommandOutput>;
  getBrandProfile(
    args: GetBrandProfileCommandInput,
    cb: (err: any, data?: GetBrandProfileCommandOutput) => void
  ): void;
  getBrandProfile(
    args: GetBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: GetBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrandProfileAttributeCommand}
   */
  getBrandProfileAttribute(
    args: GetBrandProfileAttributeCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<GetBrandProfileAttributeCommandOutput>;
  getBrandProfileAttribute(
    args: GetBrandProfileAttributeCommandInput,
    cb: (err: any, data?: GetBrandProfileAttributeCommandOutput) => void
  ): void;
  getBrandProfileAttribute(
    args: GetBrandProfileAttributeCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: GetBrandProfileAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotifyCodeConfigurationCommand}
   */
  getNotifyCodeConfiguration(
    args: GetNotifyCodeConfigurationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<GetNotifyCodeConfigurationCommandOutput>;
  getNotifyCodeConfiguration(
    args: GetNotifyCodeConfigurationCommandInput,
    cb: (err: any, data?: GetNotifyCodeConfigurationCommandOutput) => void
  ): void;
  getNotifyCodeConfiguration(
    args: GetNotifyCodeConfigurationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: GetNotifyCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrandProfileAttributesCommand}
   */
  listBrandProfileAttributes(
    args: ListBrandProfileAttributesCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListBrandProfileAttributesCommandOutput>;
  listBrandProfileAttributes(
    args: ListBrandProfileAttributesCommandInput,
    cb: (err: any, data?: ListBrandProfileAttributesCommandOutput) => void
  ): void;
  listBrandProfileAttributes(
    args: ListBrandProfileAttributesCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListBrandProfileAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrandProfilesCommand}
   */
  listBrandProfiles(): Promise<ListBrandProfilesCommandOutput>;
  listBrandProfiles(
    args: ListBrandProfilesCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListBrandProfilesCommandOutput>;
  listBrandProfiles(
    args: ListBrandProfilesCommandInput,
    cb: (err: any, data?: ListBrandProfilesCommandOutput) => void
  ): void;
  listBrandProfiles(
    args: ListBrandProfilesCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListBrandProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotifyCodeConfigurationsCommand}
   */
  listNotifyCodeConfigurations(): Promise<ListNotifyCodeConfigurationsCommandOutput>;
  listNotifyCodeConfigurations(
    args: ListNotifyCodeConfigurationsCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListNotifyCodeConfigurationsCommandOutput>;
  listNotifyCodeConfigurations(
    args: ListNotifyCodeConfigurationsCommandInput,
    cb: (err: any, data?: ListNotifyCodeConfigurationsCommandOutput) => void
  ): void;
  listNotifyCodeConfigurations(
    args: ListNotifyCodeConfigurationsCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListNotifyCodeConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistrationsFromBrandProfileCommand}
   */
  listRegistrationsFromBrandProfile(
    args: ListRegistrationsFromBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListRegistrationsFromBrandProfileCommandOutput>;
  listRegistrationsFromBrandProfile(
    args: ListRegistrationsFromBrandProfileCommandInput,
    cb: (err: any, data?: ListRegistrationsFromBrandProfileCommandOutput) => void
  ): void;
  listRegistrationsFromBrandProfile(
    args: ListRegistrationsFromBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListRegistrationsFromBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendNotifyCodeVerificationCommand}
   */
  sendNotifyCodeVerification(
    args: SendNotifyCodeVerificationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<SendNotifyCodeVerificationCommandOutput>;
  sendNotifyCodeVerification(
    args: SendNotifyCodeVerificationCommandInput,
    cb: (err: any, data?: SendNotifyCodeVerificationCommandOutput) => void
  ): void;
  sendNotifyCodeVerification(
    args: SendNotifyCodeVerificationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: SendNotifyCodeVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandProfileCommand}
   */
  updateBrandProfile(
    args: UpdateBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UpdateBrandProfileCommandOutput>;
  updateBrandProfile(
    args: UpdateBrandProfileCommandInput,
    cb: (err: any, data?: UpdateBrandProfileCommandOutput) => void
  ): void;
  updateBrandProfile(
    args: UpdateBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UpdateBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandProfileAttributeCommand}
   */
  updateBrandProfileAttribute(
    args: UpdateBrandProfileAttributeCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UpdateBrandProfileAttributeCommandOutput>;
  updateBrandProfileAttribute(
    args: UpdateBrandProfileAttributeCommandInput,
    cb: (err: any, data?: UpdateBrandProfileAttributeCommandOutput) => void
  ): void;
  updateBrandProfileAttribute(
    args: UpdateBrandProfileAttributeCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UpdateBrandProfileAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrandProfileFromRegistrationCommand}
   */
  updateBrandProfileFromRegistration(
    args: UpdateBrandProfileFromRegistrationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UpdateBrandProfileFromRegistrationCommandOutput>;
  updateBrandProfileFromRegistration(
    args: UpdateBrandProfileFromRegistrationCommandInput,
    cb: (err: any, data?: UpdateBrandProfileFromRegistrationCommandOutput) => void
  ): void;
  updateBrandProfileFromRegistration(
    args: UpdateBrandProfileFromRegistrationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UpdateBrandProfileFromRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotifyCodeConfigurationCommand}
   */
  updateNotifyCodeConfiguration(
    args: UpdateNotifyCodeConfigurationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UpdateNotifyCodeConfigurationCommandOutput>;
  updateNotifyCodeConfiguration(
    args: UpdateNotifyCodeConfigurationCommandInput,
    cb: (err: any, data?: UpdateNotifyCodeConfigurationCommandOutput) => void
  ): void;
  updateNotifyCodeConfiguration(
    args: UpdateNotifyCodeConfigurationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UpdateNotifyCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistrationsFromBrandProfileCommand}
   */
  updateRegistrationsFromBrandProfile(
    args: UpdateRegistrationsFromBrandProfileCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<UpdateRegistrationsFromBrandProfileCommandOutput>;
  updateRegistrationsFromBrandProfile(
    args: UpdateRegistrationsFromBrandProfileCommandInput,
    cb: (err: any, data?: UpdateRegistrationsFromBrandProfileCommandOutput) => void
  ): void;
  updateRegistrationsFromBrandProfile(
    args: UpdateRegistrationsFromBrandProfileCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: UpdateRegistrationsFromBrandProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateNotifyCodeVerificationCommand}
   */
  validateNotifyCodeVerification(
    args: ValidateNotifyCodeVerificationCommandInput,
    options?: EndUserMessagingRequestOptions
  ): Promise<ValidateNotifyCodeVerificationCommandOutput>;
  validateNotifyCodeVerification(
    args: ValidateNotifyCodeVerificationCommandInput,
    cb: (err: any, data?: ValidateNotifyCodeVerificationCommandOutput) => void
  ): void;
  validateNotifyCodeVerification(
    args: ValidateNotifyCodeVerificationCommandInput,
    options: EndUserMessagingRequestOptions,
    cb: (err: any, data?: ValidateNotifyCodeVerificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrandProfileAttributesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrandProfileAttributesCommandOutput}.
   */
  paginateListBrandProfileAttributes(
    args: ListBrandProfileAttributesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrandProfileAttributesCommandOutput>;

  /**
   * @see {@link ListBrandProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrandProfilesCommandOutput}.
   */
  paginateListBrandProfiles(
    args?: ListBrandProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrandProfilesCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args?: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListNotifyCodeConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotifyCodeConfigurationsCommandOutput}.
   */
  paginateListNotifyCodeConfigurations(
    args?: ListNotifyCodeConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotifyCodeConfigurationsCommandOutput>;

  /**
   * @see {@link ListRegistrationsFromBrandProfileCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegistrationsFromBrandProfileCommandOutput}.
   */
  paginateListRegistrationsFromBrandProfile(
    args: ListRegistrationsFromBrandProfileCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegistrationsFromBrandProfileCommandOutput>;

  /**
   * @see {@link GetBrandProfileCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilBrandProfileActive(
    args: GetBrandProfileCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EndUserMessaging>, "client">
  ): Promise<WaiterResult<GetBrandProfileCommandOutput>>;

  /**
   * @see {@link GetJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilJobSuccess(
    args: GetJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<EndUserMessaging>, "client">
  ): Promise<WaiterResult<GetJobCommandOutput>>;
}

/**
 * <p>AWS End User Messaging provides a set of APIs to manage brand profiles, synchronize brand profile data with SMS and Rich Communication Services (RCS) registrations, and send and validate one-time passcodes across the SMS, voice, and WhatsApp channels.</p>
 * @public
 */
export class EndUserMessaging extends EndUserMessagingClient implements EndUserMessaging {}
createAggregatedClient(commands, EndUserMessaging, { paginators, waiters });
