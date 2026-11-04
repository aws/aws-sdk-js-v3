// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

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

/**
 * @public
 */
export interface UxcRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Uxc {
  /**
   * @see {@link GetAccountCustomizationsCommand}
   */
  getAccountCustomizations(): Promise<GetAccountCustomizationsCommandOutput>;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    options?: UxcRequestOptions
  ): Promise<GetAccountCustomizationsCommandOutput>;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    cb: (err: any, data?: GetAccountCustomizationsCommandOutput) => void
  ): void;
  getAccountCustomizations(
    args: GetAccountCustomizationsCommandInput,
    options: UxcRequestOptions,
    cb: (err: any, data?: GetAccountCustomizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicesCommand}
   */
  listServices(): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    options?: UxcRequestOptions
  ): Promise<ListServicesCommandOutput>;
  listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  listServices(
    args: ListServicesCommandInput,
    options: UxcRequestOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountCustomizationsCommand}
   */
  updateAccountCustomizations(): Promise<UpdateAccountCustomizationsCommandOutput>;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    options?: UxcRequestOptions
  ): Promise<UpdateAccountCustomizationsCommandOutput>;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    cb: (err: any, data?: UpdateAccountCustomizationsCommandOutput) => void
  ): void;
  updateAccountCustomizations(
    args: UpdateAccountCustomizationsCommandInput,
    options: UxcRequestOptions,
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
 * This is the Amazon Web Services User Experience Customization (UXC) API Reference. Amazon Web Services User Experience Customization (UXC) is a utility that provides programmatic access to enable account administrators to customize the visual appearance of the Amazon Web Services Management Console and manage these settings at the account level.
 *
 * > **Note:** The `visibleServices` and `visibleRegions` settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.
 *
 * For more information about UXC features and console procedures, see [Getting started with Amazon Web Services User Experience Customization](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started-uxc.html). For information about required permissions, see [Identity and access management for Amazon Web Services Management Console](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/security_iam.html).
 *
 * @public
 */
export class Uxc extends UxcClient implements Uxc {}
createAggregatedClient(commands, Uxc, { paginators });
