// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AccountClient } from "./AccountClient";
import {
  AcceptPrimaryEmailUpdateCommand,
  AcceptPrimaryEmailUpdateCommandInput,
  AcceptPrimaryEmailUpdateCommandOutput,
} from "./commands/AcceptPrimaryEmailUpdateCommand";
import {
  DeleteAlternateContactCommand,
  DeleteAlternateContactCommandInput,
  DeleteAlternateContactCommandOutput,
} from "./commands/DeleteAlternateContactCommand";
import {
  DisableRegionCommand,
  DisableRegionCommandInput,
  DisableRegionCommandOutput,
} from "./commands/DisableRegionCommand";
import {
  EnableRegionCommand,
  EnableRegionCommandInput,
  EnableRegionCommandOutput,
} from "./commands/EnableRegionCommand";
import {
  GetAccountInformationCommand,
  GetAccountInformationCommandInput,
  GetAccountInformationCommandOutput,
} from "./commands/GetAccountInformationCommand";
import {
  GetAlternateContactCommand,
  GetAlternateContactCommandInput,
  GetAlternateContactCommandOutput,
} from "./commands/GetAlternateContactCommand";
import {
  GetContactInformationCommand,
  GetContactInformationCommandInput,
  GetContactInformationCommandOutput,
} from "./commands/GetContactInformationCommand";
import {
  GetGovCloudAccountInformationCommand,
  GetGovCloudAccountInformationCommandInput,
  GetGovCloudAccountInformationCommandOutput,
} from "./commands/GetGovCloudAccountInformationCommand";
import {
  GetPrimaryEmailCommand,
  GetPrimaryEmailCommandInput,
  GetPrimaryEmailCommandOutput,
} from "./commands/GetPrimaryEmailCommand";
import {
  GetRegionOptStatusCommand,
  GetRegionOptStatusCommandInput,
  GetRegionOptStatusCommandOutput,
} from "./commands/GetRegionOptStatusCommand";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "./commands/ListRegionsCommand";
import {
  PutAccountNameCommand,
  PutAccountNameCommandInput,
  PutAccountNameCommandOutput,
} from "./commands/PutAccountNameCommand";
import {
  PutAlternateContactCommand,
  PutAlternateContactCommandInput,
  PutAlternateContactCommandOutput,
} from "./commands/PutAlternateContactCommand";
import {
  PutContactInformationCommand,
  PutContactInformationCommandInput,
  PutContactInformationCommandOutput,
} from "./commands/PutContactInformationCommand";
import {
  StartPrimaryEmailUpdateCommand,
  StartPrimaryEmailUpdateCommandInput,
  StartPrimaryEmailUpdateCommandOutput,
} from "./commands/StartPrimaryEmailUpdateCommand";

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
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PutAccountNameCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  StartPrimaryEmailUpdateCommand,
};

export interface Account {
  /**
   * @see {@link AcceptPrimaryEmailUpdateCommand}
   */
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptPrimaryEmailUpdateCommandOutput>;
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    cb: (err: any, data?: AcceptPrimaryEmailUpdateCommandOutput) => void
  ): void;
  acceptPrimaryEmailUpdate(
    args: AcceptPrimaryEmailUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPrimaryEmailUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlternateContactCommand}
   */
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlternateContactCommandOutput>;
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;
  deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRegionCommand}
   */
  disableRegion(args: DisableRegionCommandInput, options?: __HttpHandlerOptions): Promise<DisableRegionCommandOutput>;
  disableRegion(args: DisableRegionCommandInput, cb: (err: any, data?: DisableRegionCommandOutput) => void): void;
  disableRegion(
    args: DisableRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRegionCommand}
   */
  enableRegion(args: EnableRegionCommandInput, options?: __HttpHandlerOptions): Promise<EnableRegionCommandOutput>;
  enableRegion(args: EnableRegionCommandInput, cb: (err: any, data?: EnableRegionCommandOutput) => void): void;
  enableRegion(
    args: EnableRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRegionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountInformationCommand}
   */
  getAccountInformation(): Promise<GetAccountInformationCommandOutput>;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountInformationCommandOutput>;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    cb: (err: any, data?: GetAccountInformationCommandOutput) => void
  ): void;
  getAccountInformation(
    args: GetAccountInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAlternateContactCommand}
   */
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAlternateContactCommandOutput>;
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;
  getAlternateContact(
    args: GetAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactInformationCommand}
   */
  getContactInformation(): Promise<GetContactInformationCommandOutput>;
  getContactInformation(
    args: GetContactInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactInformationCommandOutput>;
  getContactInformation(
    args: GetContactInformationCommandInput,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;
  getContactInformation(
    args: GetContactInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGovCloudAccountInformationCommand}
   */
  getGovCloudAccountInformation(): Promise<GetGovCloudAccountInformationCommandOutput>;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGovCloudAccountInformationCommandOutput>;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    cb: (err: any, data?: GetGovCloudAccountInformationCommandOutput) => void
  ): void;
  getGovCloudAccountInformation(
    args: GetGovCloudAccountInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGovCloudAccountInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrimaryEmailCommand}
   */
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPrimaryEmailCommandOutput>;
  getPrimaryEmail(args: GetPrimaryEmailCommandInput, cb: (err: any, data?: GetPrimaryEmailCommandOutput) => void): void;
  getPrimaryEmail(
    args: GetPrimaryEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPrimaryEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegionOptStatusCommand}
   */
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegionOptStatusCommandOutput>;
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;
  getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(): Promise<ListRegionsCommandOutput>;
  listRegions(args: ListRegionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegionsCommandOutput>;
  listRegions(args: ListRegionsCommandInput, cb: (err: any, data?: ListRegionsCommandOutput) => void): void;
  listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountNameCommand}
   */
  putAccountName(
    args: PutAccountNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountNameCommandOutput>;
  putAccountName(args: PutAccountNameCommandInput, cb: (err: any, data?: PutAccountNameCommandOutput) => void): void;
  putAccountName(
    args: PutAccountNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountNameCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAlternateContactCommand}
   */
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAlternateContactCommandOutput>;
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;
  putAlternateContact(
    args: PutAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link PutContactInformationCommand}
   */
  putContactInformation(
    args: PutContactInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContactInformationCommandOutput>;
  putContactInformation(
    args: PutContactInformationCommandInput,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;
  putContactInformation(
    args: PutContactInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPrimaryEmailUpdateCommand}
   */
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPrimaryEmailUpdateCommandOutput>;
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    cb: (err: any, data?: StartPrimaryEmailUpdateCommandOutput) => void
  ): void;
  startPrimaryEmailUpdate(
    args: StartPrimaryEmailUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPrimaryEmailUpdateCommandOutput) => void
  ): void;
}

/**
 * <p>Operations for Amazon Web Services Account Management</p>
 * @public
 */
export class Account extends AccountClient implements Account {}
createAggregatedClient(commands, Account);
