// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  ActivateSubscriptionCommand,
  ActivateSubscriptionCommandInput,
  ActivateSubscriptionCommandOutput,
} from "./commands/ActivateSubscriptionCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateSubscriptionCommand,
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput,
} from "./commands/CreateSubscriptionCommand";
import {
  DeactivateSubscriptionCommand,
  DeactivateSubscriptionCommandInput,
  DeactivateSubscriptionCommandOutput,
} from "./commands/DeactivateSubscriptionCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import {
  GetMedicalScribeListeningSessionCommand,
  GetMedicalScribeListeningSessionCommandInput,
  GetMedicalScribeListeningSessionCommandOutput,
} from "./commands/GetMedicalScribeListeningSessionCommand";
import {
  GetPatientInsightsJobCommand,
  GetPatientInsightsJobCommandInput,
  GetPatientInsightsJobCommandOutput,
} from "./commands/GetPatientInsightsJobCommand";
import {
  GetSubscriptionCommand,
  GetSubscriptionCommandInput,
  GetSubscriptionCommandOutput,
} from "./commands/GetSubscriptionCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
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
import {
  StartMedicalScribeListeningSessionCommand,
  StartMedicalScribeListeningSessionCommandInput,
  StartMedicalScribeListeningSessionCommandOutput,
} from "./commands/StartMedicalScribeListeningSessionCommand";
import {
  StartPatientInsightsJobCommand,
  StartPatientInsightsJobCommandInput,
  StartPatientInsightsJobCommandOutput,
} from "./commands/StartPatientInsightsJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { ConnectHealthClient } from "./ConnectHealthClient";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";

const commands = {
  ActivateSubscriptionCommand,
  CreateDomainCommand,
  CreateSubscriptionCommand,
  DeactivateSubscriptionCommand,
  DeleteDomainCommand,
  GetDomainCommand,
  GetMedicalScribeListeningSessionCommand,
  GetPatientInsightsJobCommand,
  GetSubscriptionCommand,
  ListDomainsCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  StartMedicalScribeListeningSessionCommand,
  StartPatientInsightsJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListDomains,
  paginateListSubscriptions,
};

export interface ConnectHealth {
  /**
   * @see {@link ActivateSubscriptionCommand}
   */
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateSubscriptionCommandOutput>;
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    cb: (err: any, data?: ActivateSubscriptionCommandOutput) => void
  ): void;
  activateSubscription(
    args: ActivateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateSubscriptionCommand}
   */
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateSubscriptionCommandOutput>;
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    cb: (err: any, data?: DeactivateSubscriptionCommandOutput) => void
  ): void;
  deactivateSubscription(
    args: DeactivateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(
    args: GetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMedicalScribeListeningSessionCommand}
   */
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalScribeListeningSessionCommandOutput>;
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    cb: (err: any, data?: GetMedicalScribeListeningSessionCommandOutput) => void
  ): void;
  getMedicalScribeListeningSession(
    args: GetMedicalScribeListeningSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalScribeListeningSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPatientInsightsJobCommand}
   */
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPatientInsightsJobCommandOutput>;
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    cb: (err: any, data?: GetPatientInsightsJobCommandOutput) => void
  ): void;
  getPatientInsightsJob(
    args: GetPatientInsightsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPatientInsightsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionCommand}
   */
  getSubscription(
    args: GetSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionCommandOutput>;
  getSubscription(
    args: GetSubscriptionCommandInput,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;
  getSubscription(
    args: GetSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
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
   * @see {@link StartMedicalScribeListeningSessionCommand}
   */
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalScribeListeningSessionCommandOutput>;
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    cb: (err: any, data?: StartMedicalScribeListeningSessionCommandOutput) => void
  ): void;
  startMedicalScribeListeningSession(
    args: StartMedicalScribeListeningSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalScribeListeningSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPatientInsightsJobCommand}
   */
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPatientInsightsJobCommandOutput>;
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    cb: (err: any, data?: StartPatientInsightsJobCommandOutput) => void
  ): void;
  startPatientInsightsJob(
    args: StartPatientInsightsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPatientInsightsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

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
 * <p>Health Agent for healthcare providers and patient engagement</p>
 * @public
 */
export class ConnectHealth extends ConnectHealthClient implements ConnectHealth {}
createAggregatedClient(commands, ConnectHealth, { paginators });
