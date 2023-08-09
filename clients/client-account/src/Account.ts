// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AccountClient, AccountClientConfig } from "./AccountClient";
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
  GetRegionOptStatusCommand,
  GetRegionOptStatusCommandInput,
  GetRegionOptStatusCommandOutput,
} from "./commands/GetRegionOptStatusCommand";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "./commands/ListRegionsCommand";
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

const commands = {
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
};

export interface Account {
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
  listRegions(args: ListRegionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegionsCommandOutput>;
  listRegions(args: ListRegionsCommandInput, cb: (err: any, data?: ListRegionsCommandOutput) => void): void;
  listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
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
}

/**
 * @public
 * <p>Operations for Amazon Web Services Account Management</p>
 */
export class Account extends AccountClient implements Account {}
createAggregatedClient(commands, Account);
