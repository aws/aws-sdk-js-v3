// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type GetAccountCustomizationsCommandInput,
  type GetAccountCustomizationsCommandOutput,
  GetAccountCustomizationsCommand,
} from "./commands/GetAccountCustomizationsCommand";
import {
  type ListServicesCommandInput,
  type ListServicesCommandOutput,
  ListServicesCommand,
} from "./commands/ListServicesCommand";
import {
  type UpdateAccountCustomizationsCommandInput,
  type UpdateAccountCustomizationsCommandOutput,
  UpdateAccountCustomizationsCommand,
} from "./commands/UpdateAccountCustomizationsCommand";
import { paginateListServices } from "./pagination/ListServicesPaginator";
import { UxcClient } from "./UxcClient";

const commands = {
  GetAccountCustomizationsCommand,
  ListServicesCommand,
  UpdateAccountCustomizationsCommand,
};
const paginators = {
  paginateListServices,
};

export interface Uxc {
  /**
   * @see {@link GetAccountCustomizationsCommand}
   */
  getAccountCustomizations(): Promise<GetAccountCustomizationsCommandOutput>;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountCustomizationsCommandOutput>;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    cb: (err: any, data?: GetAccountCustomizationsCommandOutput) => void
  ): void;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCustomizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCustomizationsCommand}
   */
  updateAccountCustomizations(): Promise<UpdateAccountCustomizationsCommandOutput>;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCustomizationsCommandOutput>;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    cb: (err: any, data?: UpdateAccountCustomizationsCommandOutput) => void
  ): void;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCustomizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServicesCommandOutput}.
   */
  paginateListServices(
    args?: ListServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServicesCommandOutput>;
}

/**
 * <p>This is the Amazon Web Services User Experience Customization (UXC) API Reference. Amazon Web Services User Experience Customization (UXC) is a utility that provides programmatic access to enable account administrators to customize the visual appearance of the Amazon Web Services Management Console and manage these settings at the account level.</p> <note> <p>The <code>visibleServices</code> and <code>visibleRegions</code> settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</p> </note> <p>For more information about UXC features and console procedures, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started-uxc.html">Getting started with Amazon Web Services User Experience Customization</a>. For information about required permissions, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/security_iam.html">Identity and access management for Amazon Web Services Management Console</a>.</p>
 * @public
 */
export class Uxc extends UxcClient implements Uxc {}
createAggregatedClient(commands, Uxc, { paginators });
