// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AcceptGrantCommand, AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand";
import {
  CheckInLicenseCommand,
  CheckInLicenseCommandInput,
  CheckInLicenseCommandOutput,
} from "./commands/CheckInLicenseCommand";
import {
  CheckoutBorrowLicenseCommand,
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "./commands/CheckoutBorrowLicenseCommand";
import {
  CheckoutLicenseCommand,
  CheckoutLicenseCommandInput,
  CheckoutLicenseCommandOutput,
} from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommand, CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import {
  CreateGrantVersionCommand,
  CreateGrantVersionCommandInput,
  CreateGrantVersionCommandOutput,
} from "./commands/CreateGrantVersionCommand";
import {
  CreateLicenseCommand,
  CreateLicenseCommandInput,
  CreateLicenseCommandOutput,
} from "./commands/CreateLicenseCommand";
import {
  CreateLicenseConfigurationCommand,
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
} from "./commands/CreateLicenseConfigurationCommand";
import {
  CreateLicenseConversionTaskForResourceCommand,
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
} from "./commands/CreateLicenseConversionTaskForResourceCommand";
import {
  CreateLicenseManagerReportGeneratorCommand,
  CreateLicenseManagerReportGeneratorCommandInput,
  CreateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/CreateLicenseManagerReportGeneratorCommand";
import {
  CreateLicenseVersionCommand,
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
} from "./commands/CreateLicenseVersionCommand";
import { CreateTokenCommand, CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteGrantCommand, DeleteGrantCommandInput, DeleteGrantCommandOutput } from "./commands/DeleteGrantCommand";
import {
  DeleteLicenseCommand,
  DeleteLicenseCommandInput,
  DeleteLicenseCommandOutput,
} from "./commands/DeleteLicenseCommand";
import {
  DeleteLicenseConfigurationCommand,
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput,
} from "./commands/DeleteLicenseConfigurationCommand";
import {
  DeleteLicenseManagerReportGeneratorCommand,
  DeleteLicenseManagerReportGeneratorCommandInput,
  DeleteLicenseManagerReportGeneratorCommandOutput,
} from "./commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommand, DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  ExtendLicenseConsumptionCommand,
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
} from "./commands/ExtendLicenseConsumptionCommand";
import {
  GetAccessTokenCommand,
  GetAccessTokenCommandInput,
  GetAccessTokenCommandOutput,
} from "./commands/GetAccessTokenCommand";
import { GetGrantCommand, GetGrantCommandInput, GetGrantCommandOutput } from "./commands/GetGrantCommand";
import { GetLicenseCommand, GetLicenseCommandInput, GetLicenseCommandOutput } from "./commands/GetLicenseCommand";
import {
  GetLicenseConfigurationCommand,
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput,
} from "./commands/GetLicenseConfigurationCommand";
import {
  GetLicenseConversionTaskCommand,
  GetLicenseConversionTaskCommandInput,
  GetLicenseConversionTaskCommandOutput,
} from "./commands/GetLicenseConversionTaskCommand";
import {
  GetLicenseManagerReportGeneratorCommand,
  GetLicenseManagerReportGeneratorCommandInput,
  GetLicenseManagerReportGeneratorCommandOutput,
} from "./commands/GetLicenseManagerReportGeneratorCommand";
import {
  GetLicenseUsageCommand,
  GetLicenseUsageCommandInput,
  GetLicenseUsageCommandOutput,
} from "./commands/GetLicenseUsageCommand";
import {
  GetServiceSettingsCommand,
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
} from "./commands/GetServiceSettingsCommand";
import {
  ListAssociationsForLicenseConfigurationCommand,
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
} from "./commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListDistributedGrantsCommand,
  ListDistributedGrantsCommandInput,
  ListDistributedGrantsCommandOutput,
} from "./commands/ListDistributedGrantsCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
} from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseConfigurationsCommand,
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "./commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseConversionTasksCommand,
  ListLicenseConversionTasksCommandInput,
  ListLicenseConversionTasksCommandOutput,
} from "./commands/ListLicenseConversionTasksCommand";
import {
  ListLicenseManagerReportGeneratorsCommand,
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
} from "./commands/ListLicenseManagerReportGeneratorsCommand";
import {
  ListLicensesCommand,
  ListLicensesCommandInput,
  ListLicensesCommandOutput,
} from "./commands/ListLicensesCommand";
import {
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "./commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListLicenseVersionsCommand,
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "./commands/ListLicenseVersionsCommand";
import {
  ListReceivedGrantsCommand,
  ListReceivedGrantsCommandInput,
  ListReceivedGrantsCommandOutput,
} from "./commands/ListReceivedGrantsCommand";
import {
  ListReceivedGrantsForOrganizationCommand,
  ListReceivedGrantsForOrganizationCommandInput,
  ListReceivedGrantsForOrganizationCommandOutput,
} from "./commands/ListReceivedGrantsForOrganizationCommand";
import {
  ListReceivedLicensesCommand,
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "./commands/ListReceivedLicensesCommand";
import {
  ListReceivedLicensesForOrganizationCommand,
  ListReceivedLicensesForOrganizationCommandInput,
  ListReceivedLicensesForOrganizationCommandOutput,
} from "./commands/ListReceivedLicensesForOrganizationCommand";
import {
  ListResourceInventoryCommand,
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
} from "./commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTokensCommand, ListTokensCommandInput, ListTokensCommandOutput } from "./commands/ListTokensCommand";
import {
  ListUsageForLicenseConfigurationCommand,
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
} from "./commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommand, RejectGrantCommandInput, RejectGrantCommandOutput } from "./commands/RejectGrantCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLicenseConfigurationCommand,
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
} from "./commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseManagerReportGeneratorCommand,
  UpdateLicenseManagerReportGeneratorCommandInput,
  UpdateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/UpdateLicenseManagerReportGeneratorCommand";
import {
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
import { LicenseManagerClient, LicenseManagerClientConfig } from "./LicenseManagerClient";

const commands = {
  AcceptGrantCommand,
  CheckInLicenseCommand,
  CheckoutBorrowLicenseCommand,
  CheckoutLicenseCommand,
  CreateGrantCommand,
  CreateGrantVersionCommand,
  CreateLicenseCommand,
  CreateLicenseConfigurationCommand,
  CreateLicenseConversionTaskForResourceCommand,
  CreateLicenseManagerReportGeneratorCommand,
  CreateLicenseVersionCommand,
  CreateTokenCommand,
  DeleteGrantCommand,
  DeleteLicenseCommand,
  DeleteLicenseConfigurationCommand,
  DeleteLicenseManagerReportGeneratorCommand,
  DeleteTokenCommand,
  ExtendLicenseConsumptionCommand,
  GetAccessTokenCommand,
  GetGrantCommand,
  GetLicenseCommand,
  GetLicenseConfigurationCommand,
  GetLicenseConversionTaskCommand,
  GetLicenseManagerReportGeneratorCommand,
  GetLicenseUsageCommand,
  GetServiceSettingsCommand,
  ListAssociationsForLicenseConfigurationCommand,
  ListDistributedGrantsCommand,
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListLicenseConfigurationsCommand,
  ListLicenseConversionTasksCommand,
  ListLicenseManagerReportGeneratorsCommand,
  ListLicensesCommand,
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseVersionsCommand,
  ListReceivedGrantsCommand,
  ListReceivedGrantsForOrganizationCommand,
  ListReceivedLicensesCommand,
  ListReceivedLicensesForOrganizationCommand,
  ListResourceInventoryCommand,
  ListTagsForResourceCommand,
  ListTokensCommand,
  ListUsageForLicenseConfigurationCommand,
  RejectGrantCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLicenseConfigurationCommand,
  UpdateLicenseManagerReportGeneratorCommand,
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateServiceSettingsCommand,
};

export interface LicenseManager {
  /**
   * @see {@link AcceptGrantCommand}
   */
  acceptGrant(args: AcceptGrantCommandInput, options?: __HttpHandlerOptions): Promise<AcceptGrantCommandOutput>;
  acceptGrant(args: AcceptGrantCommandInput, cb: (err: any, data?: AcceptGrantCommandOutput) => void): void;
  acceptGrant(
    args: AcceptGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckInLicenseCommand}
   */
  checkInLicense(
    args: CheckInLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckInLicenseCommandOutput>;
  checkInLicense(args: CheckInLicenseCommandInput, cb: (err: any, data?: CheckInLicenseCommandOutput) => void): void;
  checkInLicense(
    args: CheckInLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckInLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckoutBorrowLicenseCommand}
   */
  checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckoutBorrowLicenseCommandOutput>;
  checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void
  ): void;
  checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckoutLicenseCommand}
   */
  checkoutLicense(
    args: CheckoutLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckoutLicenseCommandOutput>;
  checkoutLicense(args: CheckoutLicenseCommandInput, cb: (err: any, data?: CheckoutLicenseCommandOutput) => void): void;
  checkoutLicense(
    args: CheckoutLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckoutLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGrantCommand}
   */
  createGrant(args: CreateGrantCommandInput, options?: __HttpHandlerOptions): Promise<CreateGrantCommandOutput>;
  createGrant(args: CreateGrantCommandInput, cb: (err: any, data?: CreateGrantCommandOutput) => void): void;
  createGrant(
    args: CreateGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGrantVersionCommand}
   */
  createGrantVersion(
    args: CreateGrantVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGrantVersionCommandOutput>;
  createGrantVersion(
    args: CreateGrantVersionCommandInput,
    cb: (err: any, data?: CreateGrantVersionCommandOutput) => void
  ): void;
  createGrantVersion(
    args: CreateGrantVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGrantVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseCommand}
   */
  createLicense(args: CreateLicenseCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseCommandOutput>;
  createLicense(args: CreateLicenseCommandInput, cb: (err: any, data?: CreateLicenseCommandOutput) => void): void;
  createLicense(
    args: CreateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseConfigurationCommand}
   */
  createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseConfigurationCommandOutput>;
  createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;
  createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseConversionTaskForResourceCommand}
   */
  createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseConversionTaskForResourceCommandOutput>;
  createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    cb: (err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void
  ): void;
  createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseManagerReportGeneratorCommand}
   */
  createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseManagerReportGeneratorCommandOutput>;
  createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLicenseVersionCommand}
   */
  createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseVersionCommandOutput>;
  createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void
  ): void;
  createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTokenCommand}
   */
  createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGrantCommand}
   */
  deleteGrant(args: DeleteGrantCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGrantCommandOutput>;
  deleteGrant(args: DeleteGrantCommandInput, cb: (err: any, data?: DeleteGrantCommandOutput) => void): void;
  deleteGrant(
    args: DeleteGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseCommand}
   */
  deleteLicense(args: DeleteLicenseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLicenseCommandOutput>;
  deleteLicense(args: DeleteLicenseCommandInput, cb: (err: any, data?: DeleteLicenseCommandOutput) => void): void;
  deleteLicense(
    args: DeleteLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseConfigurationCommand}
   */
  deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseConfigurationCommandOutput>;
  deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;
  deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLicenseManagerReportGeneratorCommand}
   */
  deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseManagerReportGeneratorCommandOutput>;
  deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTokenCommand}
   */
  deleteToken(args: DeleteTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTokenCommandOutput>;
  deleteToken(args: DeleteTokenCommandInput, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
  deleteToken(
    args: DeleteTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ExtendLicenseConsumptionCommand}
   */
  extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExtendLicenseConsumptionCommandOutput>;
  extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void
  ): void;
  extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessTokenCommand}
   */
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessTokenCommandOutput>;
  getAccessToken(args: GetAccessTokenCommandInput, cb: (err: any, data?: GetAccessTokenCommandOutput) => void): void;
  getAccessToken(
    args: GetAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGrantCommand}
   */
  getGrant(args: GetGrantCommandInput, options?: __HttpHandlerOptions): Promise<GetGrantCommandOutput>;
  getGrant(args: GetGrantCommandInput, cb: (err: any, data?: GetGrantCommandOutput) => void): void;
  getGrant(
    args: GetGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseCommand}
   */
  getLicense(args: GetLicenseCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseCommandOutput>;
  getLicense(args: GetLicenseCommandInput, cb: (err: any, data?: GetLicenseCommandOutput) => void): void;
  getLicense(
    args: GetLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseConfigurationCommand}
   */
  getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseConfigurationCommandOutput>;
  getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;
  getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseConversionTaskCommand}
   */
  getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseConversionTaskCommandOutput>;
  getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    cb: (err: any, data?: GetLicenseConversionTaskCommandOutput) => void
  ): void;
  getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseConversionTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseManagerReportGeneratorCommand}
   */
  getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseManagerReportGeneratorCommandOutput>;
  getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLicenseUsageCommand}
   */
  getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseUsageCommandOutput>;
  getLicenseUsage(args: GetLicenseUsageCommandInput, cb: (err: any, data?: GetLicenseUsageCommandOutput) => void): void;
  getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSettingsCommand}
   */
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsForLicenseConfigurationCommand}
   */
  listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
  listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void
  ): void;
  listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributedGrantsCommand}
   */
  listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributedGrantsCommandOutput>;
  listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void
  ): void;
  listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFailuresForLicenseConfigurationOperationsCommand}
   */
  listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
  listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void
  ): void;
  listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseConfigurationsCommand}
   */
  listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseConfigurationsCommandOutput>;
  listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;
  listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseConversionTasksCommand}
   */
  listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseConversionTasksCommandOutput>;
  listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    cb: (err: any, data?: ListLicenseConversionTasksCommandOutput) => void
  ): void;
  listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseConversionTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseManagerReportGeneratorsCommand}
   */
  listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput>;
  listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void
  ): void;
  listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicensesCommand}
   */
  listLicenses(args: ListLicensesCommandInput, options?: __HttpHandlerOptions): Promise<ListLicensesCommandOutput>;
  listLicenses(args: ListLicensesCommandInput, cb: (err: any, data?: ListLicensesCommandOutput) => void): void;
  listLicenses(
    args: ListLicensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicensesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseSpecificationsForResourceCommand}
   */
  listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseSpecificationsForResourceCommandOutput>;
  listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLicenseVersionsCommand}
   */
  listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseVersionsCommandOutput>;
  listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void
  ): void;
  listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceivedGrantsCommand}
   */
  listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedGrantsCommandOutput>;
  listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void
  ): void;
  listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceivedGrantsForOrganizationCommand}
   */
  listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedGrantsForOrganizationCommandOutput>;
  listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    cb: (err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void
  ): void;
  listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceivedLicensesCommand}
   */
  listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedLicensesCommandOutput>;
  listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void
  ): void;
  listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReceivedLicensesForOrganizationCommand}
   */
  listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedLicensesForOrganizationCommandOutput>;
  listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    cb: (err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void
  ): void;
  listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceInventoryCommand}
   */
  listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceInventoryCommandOutput>;
  listResourceInventory(
    args: ListResourceInventoryCommandInput,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): void;
  listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
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
   * @see {@link ListTokensCommand}
   */
  listTokens(args: ListTokensCommandInput, options?: __HttpHandlerOptions): Promise<ListTokensCommandOutput>;
  listTokens(args: ListTokensCommandInput, cb: (err: any, data?: ListTokensCommandOutput) => void): void;
  listTokens(
    args: ListTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTokensCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsageForLicenseConfigurationCommand}
   */
  listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageForLicenseConfigurationCommandOutput>;
  listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;
  listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectGrantCommand}
   */
  rejectGrant(args: RejectGrantCommandInput, options?: __HttpHandlerOptions): Promise<RejectGrantCommandOutput>;
  rejectGrant(args: RejectGrantCommandInput, cb: (err: any, data?: RejectGrantCommandOutput) => void): void;
  rejectGrant(
    args: RejectGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectGrantCommandOutput) => void
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
   * @see {@link UpdateLicenseConfigurationCommand}
   */
  updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseConfigurationCommandOutput>;
  updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;
  updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLicenseManagerReportGeneratorCommand}
   */
  updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseManagerReportGeneratorCommandOutput>;
  updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLicenseSpecificationsForResourceCommand}
   */
  updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
  updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSettingsCommand}
   */
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>License Manager makes it easier to manage licenses from software vendors across multiple
 *          Amazon Web Services accounts and on-premises servers.</p>
 */
export class LicenseManager extends LicenseManagerClient implements LicenseManager {}
createAggregatedClient(commands, LicenseManager);
