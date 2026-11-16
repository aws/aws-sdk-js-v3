// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ActivateSubscriptionCommandInput,
  type ActivateSubscriptionCommandOutput,
  ActivateSubscriptionCommand,
} from "./commands/ActivateSubscriptionCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type CreateSubscriptionCommandInput,
  type CreateSubscriptionCommandOutput,
  CreateSubscriptionCommand,
} from "./commands/CreateSubscriptionCommand";
import {
  type DeactivateSubscriptionCommandInput,
  type DeactivateSubscriptionCommandOutput,
  DeactivateSubscriptionCommand,
} from "./commands/DeactivateSubscriptionCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type GetDatasetCommandInput,
  type GetDatasetCommandOutput,
  GetDatasetCommand,
} from "./commands/GetDatasetCommand";
import { type GetDomainCommandInput, type GetDomainCommandOutput, GetDomainCommand } from "./commands/GetDomainCommand";
import {
  type GetMedicalCodingJobCommandInput,
  type GetMedicalCodingJobCommandOutput,
  GetMedicalCodingJobCommand,
} from "./commands/GetMedicalCodingJobCommand";
import {
  type GetMedicalScribeListeningSessionCommandInput,
  type GetMedicalScribeListeningSessionCommandOutput,
  GetMedicalScribeListeningSessionCommand,
} from "./commands/GetMedicalScribeListeningSessionCommand";
import {
  type GetPatientInsightsJobCommandInput,
  type GetPatientInsightsJobCommandOutput,
  GetPatientInsightsJobCommand,
} from "./commands/GetPatientInsightsJobCommand";
import {
  type GetSubscriptionCommandInput,
  type GetSubscriptionCommandOutput,
  GetSubscriptionCommand,
} from "./commands/GetSubscriptionCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
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
  type StartMedicalCodingJobCommandInput,
  type StartMedicalCodingJobCommandOutput,
  StartMedicalCodingJobCommand,
} from "./commands/StartMedicalCodingJobCommand";
import {
  type StartMedicalScribeListeningSessionCommandInput,
  type StartMedicalScribeListeningSessionCommandOutput,
  StartMedicalScribeListeningSessionCommand,
} from "./commands/StartMedicalScribeListeningSessionCommand";
import {
  type StartPatientInsightsJobCommandInput,
  type StartPatientInsightsJobCommandOutput,
  StartPatientInsightsJobCommand,
} from "./commands/StartPatientInsightsJobCommand";
import {
  type SubmitFeedbackCommandInput,
  type SubmitFeedbackCommandOutput,
  SubmitFeedbackCommand,
} from "./commands/SubmitFeedbackCommand";
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
import { ConnectHealthClient } from "./ConnectHealthClient";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";

const commands = {
  ActivateSubscriptionCommand,
  CreateDatasetCommand,
  CreateDomainCommand,
  CreateSubscriptionCommand,
  DeactivateSubscriptionCommand,
  DeleteDatasetCommand,
  DeleteDomainCommand,
  GetDatasetCommand,
  GetDomainCommand,
  GetMedicalCodingJobCommand,
  GetMedicalScribeListeningSessionCommand,
  GetPatientInsightsJobCommand,
  GetSubscriptionCommand,
  ListDatasetsCommand,
  ListDomainsCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  StartMedicalCodingJobCommand,
  StartMedicalScribeListeningSessionCommand,
  StartPatientInsightsJobCommand,
  SubmitFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListDatasets,
  paginateListDomains,
  paginateListSubscriptions,
};

/**
 * @public
 */
export interface ConnectHealthRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ConnectHealth {
  /**
   * @see {@link ActivateSubscriptionCommand}
   */
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<ActivateSubscriptionCommandOutput>;
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    cb: (err: any, data?: ActivateSubscriptionCommandOutput) => void
  ): void;
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: ActivateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateSubscriptionCommand}
   */
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<DeactivateSubscriptionCommandOutput>;
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    cb: (err: any, data?: DeactivateSubscriptionCommandOutput) => void
  ): void;
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: DeactivateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatasetCommand}
   */
  getDataset(
    args: GetDatasetCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetDatasetCommandOutput>;
  getDataset(
    args: GetDatasetCommandInput,
    cb: (err: any, data?: GetDatasetCommandOutput) => void
  ): void;
  getDataset(
    args: GetDatasetCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(
    args: GetDomainCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMedicalCodingJobCommand}
   */
  getMedicalCodingJob(
    args: GetMedicalCodingJobCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetMedicalCodingJobCommandOutput>;
  getMedicalCodingJob(
    args: GetMedicalCodingJobCommandInput,
    cb: (err: any, data?: GetMedicalCodingJobCommandOutput) => void
  ): void;
  getMedicalCodingJob(
    args: GetMedicalCodingJobCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetMedicalCodingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMedicalScribeListeningSessionCommand}
   */
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetMedicalScribeListeningSessionCommandOutput>;
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    cb: (err: any, data?: GetMedicalScribeListeningSessionCommandOutput) => void
  ): void;
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetMedicalScribeListeningSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPatientInsightsJobCommand}
   */
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetPatientInsightsJobCommandOutput>;
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    cb: (err: any, data?: GetPatientInsightsJobCommandOutput) => void
  ): void;
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetPatientInsightsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMedicalCodingJobCommand}
   */
  startMedicalCodingJob(
    args: StartMedicalCodingJobCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<StartMedicalCodingJobCommandOutput>;
  startMedicalCodingJob(
    args: StartMedicalCodingJobCommandInput,
    cb: (err: any, data?: StartMedicalCodingJobCommandOutput) => void
  ): void;
  startMedicalCodingJob(
    args: StartMedicalCodingJobCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: StartMedicalCodingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMedicalScribeListeningSessionCommand}
   */
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<StartMedicalScribeListeningSessionCommandOutput>;
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    cb: (err: any, data?: StartMedicalScribeListeningSessionCommandOutput) => void
  ): void;
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: StartMedicalScribeListeningSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPatientInsightsJobCommand}
   */
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<StartPatientInsightsJobCommandOutput>;
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    cb: (err: any, data?: StartPatientInsightsJobCommandOutput) => void
  ): void;
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: StartPatientInsightsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitFeedbackCommand}
   */
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ConnectHealthRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ConnectHealthRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;
}

/**
 * <p>Amazon Connect Health is an AI-powered healthcare service built on Amazon Connect. It provides pre-built agents that automate patient engagement workflows and support clinical documentation at the point of care.</p> <p>You can use the Amazon Connect Health API to programmatically manage domains, configure patient engagement agents, run patient insights jobs, and stream ambient documentation sessions. This API reference describes the available API operations and data types for Amazon Connect Health.</p> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Amazon Connect Health.</p>
 * @public
 */
export class ConnectHealth extends ConnectHealthClient implements ConnectHealth {}
createAggregatedClient(commands, ConnectHealth, { paginators });
