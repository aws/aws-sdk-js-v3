// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AccountClient } from "./AccountClient";
import {
  type AcceptPrimaryEmailUpdateCommandInput,
  type AcceptPrimaryEmailUpdateCommandOutput,
  AcceptPrimaryEmailUpdateCommand,
} from "./commands/AcceptPrimaryEmailUpdateCommand";
import {
  type DeleteAlternateContactCommandInput,
  type DeleteAlternateContactCommandOutput,
  DeleteAlternateContactCommand,
} from "./commands/DeleteAlternateContactCommand";
import {
  type DisableRegionCommandInput,
  type DisableRegionCommandOutput,
  DisableRegionCommand,
} from "./commands/DisableRegionCommand";
import {
  type EnableRegionCommandInput,
  type EnableRegionCommandOutput,
  EnableRegionCommand,
} from "./commands/EnableRegionCommand";
import {
  type GetAccountInformationCommandInput,
  type GetAccountInformationCommandOutput,
  GetAccountInformationCommand,
} from "./commands/GetAccountInformationCommand";
import {
  type GetAlternateContactCommandInput,
  type GetAlternateContactCommandOutput,
  GetAlternateContactCommand,
} from "./commands/GetAlternateContactCommand";
import {
  type GetContactInformationCommandInput,
  type GetContactInformationCommandOutput,
  GetContactInformationCommand,
} from "./commands/GetContactInformationCommand";
import {
  type GetGovCloudAccountInformationCommandInput,
  type GetGovCloudAccountInformationCommandOutput,
  GetGovCloudAccountInformationCommand,
} from "./commands/GetGovCloudAccountInformationCommand";
import {
  type GetPrimaryEmailCommandInput,
  type GetPrimaryEmailCommandOutput,
  GetPrimaryEmailCommand,
} from "./commands/GetPrimaryEmailCommand";
import {
  type GetPrimaryEmailUpdateStatusCommandInput,
  type GetPrimaryEmailUpdateStatusCommandOutput,
  GetPrimaryEmailUpdateStatusCommand,
} from "./commands/GetPrimaryEmailUpdateStatusCommand";
import {
  type GetRegionOptStatusCommandInput,
  type GetRegionOptStatusCommandOutput,
  GetRegionOptStatusCommand,
} from "./commands/GetRegionOptStatusCommand";
import {
  type ListRegionsCommandInput,
  type ListRegionsCommandOutput,
  ListRegionsCommand,
} from "./commands/ListRegionsCommand";
import {
  type PutAccountNameCommandInput,
  type PutAccountNameCommandOutput,
  PutAccountNameCommand,
} from "./commands/PutAccountNameCommand";
import {
  type PutAlternateContactCommandInput,
  type PutAlternateContactCommandOutput,
  PutAlternateContactCommand,
} from "./commands/PutAlternateContactCommand";
import {
  type PutContactInformationCommandInput,
  type PutContactInformationCommandOutput,
  PutContactInformationCommand,
} from "./commands/PutContactInformationCommand";
import {
  type StartPrimaryEmailUpdateCommandInput,
  type StartPrimaryEmailUpdateCommandOutput,
  StartPrimaryEmailUpdateCommand,
} from "./commands/StartPrimaryEmailUpdateCommand";
import { paginateListRegions } from "./pagination/ListRegionsPaginator";

const commands = {
  AcceptPrimaryEmailUpdateCommand,
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAccountInformationCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetGovCloudAccountInformationCommand,
  GetPrimaryEmailCommand,
  GetPrimaryEmailUpdateStatusCommand,
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PutAccountNameCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  StartPrimaryEmailUpdateCommand,
};
const paginators = {
  paginateListRegions,
};

/**
 * @public
 */
export interface AccountRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Account {
  /**
   * @see {@link AcceptPrimaryEmailUpdateCommand}
   */
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    options?: AccountRequestOptions
  ): Promise<AcceptPrimaryEmailUpdateCommandOutput>;
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    cb: (err: any, data?: AcceptPrimaryEmailUpdateCommandOutput) => void
  ): void;
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: AcceptPrimaryEmailUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlternateContactCommand}
   */
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options?: AccountRequestOptions
  ): Promise<DeleteAlternateContactCommandOutput>;
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRegionCommand}
   */
  disableRegion(
    args: DisableRegionCommandInput,
    options?: AccountRequestOptions
  ): Promise<DisableRegionCommandOutput>;
  disableRegion(
    args: DisableRegionCommandInput,
    cb: (err: any, data?: DisableRegionCommandOutput) => void
  ): void;
  disableRegion(
    args: DisableRegionCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: DisableRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRegionCommand}
   */
  enableRegion(
    args: EnableRegionCommandInput,
    options?: AccountRequestOptions
  ): Promise<EnableRegionCommandOutput>;
  enableRegion(
    args: EnableRegionCommandInput,
    cb: (err: any, data?: EnableRegionCommandOutput) => void
  ): void;
  enableRegion(
    args: EnableRegionCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: EnableRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountInformationCommand}
   */
  getAccountInformation(): Promise<GetAccountInformationCommandOutput>;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetAccountInformationCommandOutput>;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    cb: (err: any, data?: GetAccountInformationCommandOutput) => void
  ): void;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetAccountInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAlternateContactCommand}
   */
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetAlternateContactCommandOutput>;
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactInformationCommand}
   */
  getContactInformation(): Promise<GetContactInformationCommandOutput>;
  getContactInformation(
    args: GetContactInformationCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetContactInformationCommandOutput>;
  getContactInformation(
    args: GetContactInformationCommandInput,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;
  getContactInformation(
    args: GetContactInformationCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGovCloudAccountInformationCommand}
   */
  getGovCloudAccountInformation(): Promise<GetGovCloudAccountInformationCommandOutput>;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetGovCloudAccountInformationCommandOutput>;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    cb: (err: any, data?: GetGovCloudAccountInformationCommandOutput) => void
  ): void;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetGovCloudAccountInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrimaryEmailCommand}
   */
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetPrimaryEmailCommandOutput>;
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    cb: (err: any, data?: GetPrimaryEmailCommandOutput) => void
  ): void;
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetPrimaryEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrimaryEmailUpdateStatusCommand}
   */
  getPrimaryEmailUpdateStatus(): Promise<GetPrimaryEmailUpdateStatusCommandOutput>;
  getPrimaryEmailUpdateStatus(
    args: GetPrimaryEmailUpdateStatusCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetPrimaryEmailUpdateStatusCommandOutput>;
  getPrimaryEmailUpdateStatus(
    args: GetPrimaryEmailUpdateStatusCommandInput,
    cb: (err: any, data?: GetPrimaryEmailUpdateStatusCommandOutput) => void
  ): void;
  getPrimaryEmailUpdateStatus(
    args: GetPrimaryEmailUpdateStatusCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetPrimaryEmailUpdateStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegionOptStatusCommand}
   */
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options?: AccountRequestOptions
  ): Promise<GetRegionOptStatusCommandOutput>;
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(): Promise<ListRegionsCommandOutput>;
  listRegions(
    args: ListRegionsCommandInput,
    options?: AccountRequestOptions
  ): Promise<ListRegionsCommandOutput>;
  listRegions(
    args: ListRegionsCommandInput,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  listRegions(
    args: ListRegionsCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountNameCommand}
   */
  putAccountName(
    args: PutAccountNameCommandInput,
    options?: AccountRequestOptions
  ): Promise<PutAccountNameCommandOutput>;
  putAccountName(
    args: PutAccountNameCommandInput,
    cb: (err: any, data?: PutAccountNameCommandOutput) => void
  ): void;
  putAccountName(
    args: PutAccountNameCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: PutAccountNameCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAlternateContactCommand}
   */
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options?: AccountRequestOptions
  ): Promise<PutAlternateContactCommandOutput>;
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutContactInformationCommand}
   */
  putContactInformation(
    args: PutContactInformationCommandInput,
    options?: AccountRequestOptions
  ): Promise<PutContactInformationCommandOutput>;
  putContactInformation(
    args: PutContactInformationCommandInput,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;
  putContactInformation(
    args: PutContactInformationCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPrimaryEmailUpdateCommand}
   */
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    options?: AccountRequestOptions
  ): Promise<StartPrimaryEmailUpdateCommandOutput>;
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    cb: (err: any, data?: StartPrimaryEmailUpdateCommandOutput) => void
  ): void;
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    options: AccountRequestOptions,
    cb: (err: any, data?: StartPrimaryEmailUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegionsCommandOutput}.
   */
  paginateListRegions(
    args?: ListRegionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegionsCommandOutput>;
}

/**
 * <p>Operations for Amazon Web Services Account Management</p>
 * @public
 */
export class Account extends AccountClient implements Account {}
createAggregatedClient(commands, Account, { paginators });
