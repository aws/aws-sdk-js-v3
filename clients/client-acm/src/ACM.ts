// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { ACMClient } from "./ACMClient";
import {
  type AddTagsToCertificateCommandInput,
  type AddTagsToCertificateCommandOutput,
  AddTagsToCertificateCommand,
} from "./commands/AddTagsToCertificateCommand";
import {
  type CreateAcmeDomainValidationCommandInput,
  type CreateAcmeDomainValidationCommandOutput,
  CreateAcmeDomainValidationCommand,
} from "./commands/CreateAcmeDomainValidationCommand";
import {
  type CreateAcmeEndpointCommandInput,
  type CreateAcmeEndpointCommandOutput,
  CreateAcmeEndpointCommand,
} from "./commands/CreateAcmeEndpointCommand";
import {
  type CreateAcmeExternalAccountBindingCommandInput,
  type CreateAcmeExternalAccountBindingCommandOutput,
  CreateAcmeExternalAccountBindingCommand,
} from "./commands/CreateAcmeExternalAccountBindingCommand";
import {
  type DeleteAcmeDomainValidationCommandInput,
  type DeleteAcmeDomainValidationCommandOutput,
  DeleteAcmeDomainValidationCommand,
} from "./commands/DeleteAcmeDomainValidationCommand";
import {
  type DeleteAcmeEndpointCommandInput,
  type DeleteAcmeEndpointCommandOutput,
  DeleteAcmeEndpointCommand,
} from "./commands/DeleteAcmeEndpointCommand";
import {
  type DeleteAcmeExternalAccountBindingCommandInput,
  type DeleteAcmeExternalAccountBindingCommandOutput,
  DeleteAcmeExternalAccountBindingCommand,
} from "./commands/DeleteAcmeExternalAccountBindingCommand";
import {
  type DeleteCertificateCommandInput,
  type DeleteCertificateCommandOutput,
  DeleteCertificateCommand,
} from "./commands/DeleteCertificateCommand";
import {
  type DescribeAcmeAccountCommandInput,
  type DescribeAcmeAccountCommandOutput,
  DescribeAcmeAccountCommand,
} from "./commands/DescribeAcmeAccountCommand";
import {
  type DescribeAcmeDomainValidationCommandInput,
  type DescribeAcmeDomainValidationCommandOutput,
  DescribeAcmeDomainValidationCommand,
} from "./commands/DescribeAcmeDomainValidationCommand";
import {
  type DescribeAcmeEndpointCommandInput,
  type DescribeAcmeEndpointCommandOutput,
  DescribeAcmeEndpointCommand,
} from "./commands/DescribeAcmeEndpointCommand";
import {
  type DescribeAcmeExternalAccountBindingCommandInput,
  type DescribeAcmeExternalAccountBindingCommandOutput,
  DescribeAcmeExternalAccountBindingCommand,
} from "./commands/DescribeAcmeExternalAccountBindingCommand";
import {
  type DescribeCertificateCommandInput,
  type DescribeCertificateCommandOutput,
  DescribeCertificateCommand,
} from "./commands/DescribeCertificateCommand";
import {
  type ExportCertificateCommandInput,
  type ExportCertificateCommandOutput,
  ExportCertificateCommand,
} from "./commands/ExportCertificateCommand";
import {
  type GetAccountConfigurationCommandInput,
  type GetAccountConfigurationCommandOutput,
  GetAccountConfigurationCommand,
} from "./commands/GetAccountConfigurationCommand";
import {
  type GetAcmeExternalAccountBindingCredentialsCommandInput,
  type GetAcmeExternalAccountBindingCredentialsCommandOutput,
  GetAcmeExternalAccountBindingCredentialsCommand,
} from "./commands/GetAcmeExternalAccountBindingCredentialsCommand";
import {
  type GetCertificateCommandInput,
  type GetCertificateCommandOutput,
  GetCertificateCommand,
} from "./commands/GetCertificateCommand";
import {
  type ImportCertificateCommandInput,
  type ImportCertificateCommandOutput,
  ImportCertificateCommand,
} from "./commands/ImportCertificateCommand";
import {
  type ListAcmeAccountsCommandInput,
  type ListAcmeAccountsCommandOutput,
  ListAcmeAccountsCommand,
} from "./commands/ListAcmeAccountsCommand";
import {
  type ListAcmeDomainValidationsCommandInput,
  type ListAcmeDomainValidationsCommandOutput,
  ListAcmeDomainValidationsCommand,
} from "./commands/ListAcmeDomainValidationsCommand";
import {
  type ListAcmeEndpointsCommandInput,
  type ListAcmeEndpointsCommandOutput,
  ListAcmeEndpointsCommand,
} from "./commands/ListAcmeEndpointsCommand";
import {
  type ListAcmeExternalAccountBindingsCommandInput,
  type ListAcmeExternalAccountBindingsCommandOutput,
  ListAcmeExternalAccountBindingsCommand,
} from "./commands/ListAcmeExternalAccountBindingsCommand";
import {
  type ListCertificatesCommandInput,
  type ListCertificatesCommandOutput,
  ListCertificatesCommand,
} from "./commands/ListCertificatesCommand";
import {
  type ListTagsForCertificateCommandInput,
  type ListTagsForCertificateCommandOutput,
  ListTagsForCertificateCommand,
} from "./commands/ListTagsForCertificateCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAccountConfigurationCommandInput,
  type PutAccountConfigurationCommandOutput,
  PutAccountConfigurationCommand,
} from "./commands/PutAccountConfigurationCommand";
import {
  type RemoveTagsFromCertificateCommandInput,
  type RemoveTagsFromCertificateCommandOutput,
  RemoveTagsFromCertificateCommand,
} from "./commands/RemoveTagsFromCertificateCommand";
import {
  type RenewCertificateCommandInput,
  type RenewCertificateCommandOutput,
  RenewCertificateCommand,
} from "./commands/RenewCertificateCommand";
import {
  type RequestCertificateCommandInput,
  type RequestCertificateCommandOutput,
  RequestCertificateCommand,
} from "./commands/RequestCertificateCommand";
import {
  type ResendValidationEmailCommandInput,
  type ResendValidationEmailCommandOutput,
  ResendValidationEmailCommand,
} from "./commands/ResendValidationEmailCommand";
import {
  type RevokeAcmeAccountCommandInput,
  type RevokeAcmeAccountCommandOutput,
  RevokeAcmeAccountCommand,
} from "./commands/RevokeAcmeAccountCommand";
import {
  type RevokeAcmeExternalAccountBindingCommandInput,
  type RevokeAcmeExternalAccountBindingCommandOutput,
  RevokeAcmeExternalAccountBindingCommand,
} from "./commands/RevokeAcmeExternalAccountBindingCommand";
import {
  type RevokeCertificateCommandInput,
  type RevokeCertificateCommandOutput,
  RevokeCertificateCommand,
} from "./commands/RevokeCertificateCommand";
import {
  type SearchCertificatesCommandInput,
  type SearchCertificatesCommandOutput,
  SearchCertificatesCommand,
} from "./commands/SearchCertificatesCommand";
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
  type UpdateAcmeDomainValidationCommandInput,
  type UpdateAcmeDomainValidationCommandOutput,
  UpdateAcmeDomainValidationCommand,
} from "./commands/UpdateAcmeDomainValidationCommand";
import {
  type UpdateAcmeEndpointCommandInput,
  type UpdateAcmeEndpointCommandOutput,
  UpdateAcmeEndpointCommand,
} from "./commands/UpdateAcmeEndpointCommand";
import {
  type UpdateCertificateOptionsCommandInput,
  type UpdateCertificateOptionsCommandOutput,
  UpdateCertificateOptionsCommand,
} from "./commands/UpdateCertificateOptionsCommand";
import type { ACMServiceException } from "./models/ACMServiceException";
import type { ResourceNotFoundException } from "./models/errors";
import { paginateListAcmeAccounts } from "./pagination/ListAcmeAccountsPaginator";
import { paginateListAcmeDomainValidations } from "./pagination/ListAcmeDomainValidationsPaginator";
import { paginateListAcmeEndpoints } from "./pagination/ListAcmeEndpointsPaginator";
import { paginateListAcmeExternalAccountBindings } from "./pagination/ListAcmeExternalAccountBindingsPaginator";
import { paginateListCertificates } from "./pagination/ListCertificatesPaginator";
import { paginateSearchCertificates } from "./pagination/SearchCertificatesPaginator";
import { waitUntilAcmeDomainValidationDeleted } from "./waiters/waitForAcmeDomainValidationDeleted";
import { waitUntilAcmeDomainValidationValidated } from "./waiters/waitForAcmeDomainValidationValidated";
import { waitUntilAcmeEndpointActive } from "./waiters/waitForAcmeEndpointActive";
import { waitUntilAcmeEndpointDeleted } from "./waiters/waitForAcmeEndpointDeleted";
import { waitUntilCertificateValidated } from "./waiters/waitForCertificateValidated";

const commands = {
  AddTagsToCertificateCommand,
  CreateAcmeDomainValidationCommand,
  CreateAcmeEndpointCommand,
  CreateAcmeExternalAccountBindingCommand,
  DeleteAcmeDomainValidationCommand,
  DeleteAcmeEndpointCommand,
  DeleteAcmeExternalAccountBindingCommand,
  DeleteCertificateCommand,
  DescribeAcmeAccountCommand,
  DescribeAcmeDomainValidationCommand,
  DescribeAcmeEndpointCommand,
  DescribeAcmeExternalAccountBindingCommand,
  DescribeCertificateCommand,
  ExportCertificateCommand,
  GetAccountConfigurationCommand,
  GetAcmeExternalAccountBindingCredentialsCommand,
  GetCertificateCommand,
  ImportCertificateCommand,
  ListAcmeAccountsCommand,
  ListAcmeDomainValidationsCommand,
  ListAcmeEndpointsCommand,
  ListAcmeExternalAccountBindingsCommand,
  ListCertificatesCommand,
  ListTagsForCertificateCommand,
  ListTagsForResourceCommand,
  PutAccountConfigurationCommand,
  RemoveTagsFromCertificateCommand,
  RenewCertificateCommand,
  RequestCertificateCommand,
  ResendValidationEmailCommand,
  RevokeAcmeAccountCommand,
  RevokeAcmeExternalAccountBindingCommand,
  RevokeCertificateCommand,
  SearchCertificatesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAcmeDomainValidationCommand,
  UpdateAcmeEndpointCommand,
  UpdateCertificateOptionsCommand,
};
const paginators = {
  paginateListAcmeAccounts,
  paginateListAcmeDomainValidations,
  paginateListAcmeEndpoints,
  paginateListAcmeExternalAccountBindings,
  paginateListCertificates,
  paginateSearchCertificates,
};
const waiters = {
  waitUntilAcmeDomainValidationValidated,
  waitUntilAcmeDomainValidationDeleted,
  waitUntilAcmeEndpointActive,
  waitUntilAcmeEndpointDeleted,
  waitUntilCertificateValidated,
};

export interface ACM {
  /**
   * @see {@link AddTagsToCertificateCommand}
   */
  addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToCertificateCommandOutput>;
  addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void
  ): void;
  addTagsToCertificate(
    args: AddTagsToCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAcmeDomainValidationCommand}
   */
  createAcmeDomainValidation(
    args: CreateAcmeDomainValidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAcmeDomainValidationCommandOutput>;
  createAcmeDomainValidation(
    args: CreateAcmeDomainValidationCommandInput,
    cb: (err: any, data?: CreateAcmeDomainValidationCommandOutput) => void
  ): void;
  createAcmeDomainValidation(
    args: CreateAcmeDomainValidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAcmeDomainValidationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAcmeEndpointCommand}
   */
  createAcmeEndpoint(
    args: CreateAcmeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAcmeEndpointCommandOutput>;
  createAcmeEndpoint(
    args: CreateAcmeEndpointCommandInput,
    cb: (err: any, data?: CreateAcmeEndpointCommandOutput) => void
  ): void;
  createAcmeEndpoint(
    args: CreateAcmeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAcmeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAcmeExternalAccountBindingCommand}
   */
  createAcmeExternalAccountBinding(
    args: CreateAcmeExternalAccountBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAcmeExternalAccountBindingCommandOutput>;
  createAcmeExternalAccountBinding(
    args: CreateAcmeExternalAccountBindingCommandInput,
    cb: (err: any, data?: CreateAcmeExternalAccountBindingCommandOutput) => void
  ): void;
  createAcmeExternalAccountBinding(
    args: CreateAcmeExternalAccountBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAcmeExternalAccountBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAcmeDomainValidationCommand}
   */
  deleteAcmeDomainValidation(
    args: DeleteAcmeDomainValidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAcmeDomainValidationCommandOutput>;
  deleteAcmeDomainValidation(
    args: DeleteAcmeDomainValidationCommandInput,
    cb: (err: any, data?: DeleteAcmeDomainValidationCommandOutput) => void
  ): void;
  deleteAcmeDomainValidation(
    args: DeleteAcmeDomainValidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAcmeDomainValidationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAcmeEndpointCommand}
   */
  deleteAcmeEndpoint(
    args: DeleteAcmeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAcmeEndpointCommandOutput>;
  deleteAcmeEndpoint(
    args: DeleteAcmeEndpointCommandInput,
    cb: (err: any, data?: DeleteAcmeEndpointCommandOutput) => void
  ): void;
  deleteAcmeEndpoint(
    args: DeleteAcmeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAcmeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAcmeExternalAccountBindingCommand}
   */
  deleteAcmeExternalAccountBinding(
    args: DeleteAcmeExternalAccountBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAcmeExternalAccountBindingCommandOutput>;
  deleteAcmeExternalAccountBinding(
    args: DeleteAcmeExternalAccountBindingCommandInput,
    cb: (err: any, data?: DeleteAcmeExternalAccountBindingCommandOutput) => void
  ): void;
  deleteAcmeExternalAccountBinding(
    args: DeleteAcmeExternalAccountBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAcmeExternalAccountBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcmeAccountCommand}
   */
  describeAcmeAccount(
    args: DescribeAcmeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcmeAccountCommandOutput>;
  describeAcmeAccount(
    args: DescribeAcmeAccountCommandInput,
    cb: (err: any, data?: DescribeAcmeAccountCommandOutput) => void
  ): void;
  describeAcmeAccount(
    args: DescribeAcmeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcmeAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcmeDomainValidationCommand}
   */
  describeAcmeDomainValidation(
    args: DescribeAcmeDomainValidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcmeDomainValidationCommandOutput>;
  describeAcmeDomainValidation(
    args: DescribeAcmeDomainValidationCommandInput,
    cb: (err: any, data?: DescribeAcmeDomainValidationCommandOutput) => void
  ): void;
  describeAcmeDomainValidation(
    args: DescribeAcmeDomainValidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcmeDomainValidationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcmeEndpointCommand}
   */
  describeAcmeEndpoint(
    args: DescribeAcmeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcmeEndpointCommandOutput>;
  describeAcmeEndpoint(
    args: DescribeAcmeEndpointCommandInput,
    cb: (err: any, data?: DescribeAcmeEndpointCommandOutput) => void
  ): void;
  describeAcmeEndpoint(
    args: DescribeAcmeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcmeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcmeExternalAccountBindingCommand}
   */
  describeAcmeExternalAccountBinding(
    args: DescribeAcmeExternalAccountBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcmeExternalAccountBindingCommandOutput>;
  describeAcmeExternalAccountBinding(
    args: DescribeAcmeExternalAccountBindingCommandInput,
    cb: (err: any, data?: DescribeAcmeExternalAccountBindingCommandOutput) => void
  ): void;
  describeAcmeExternalAccountBinding(
    args: DescribeAcmeExternalAccountBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcmeExternalAccountBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportCertificateCommand}
   */
  exportCertificate(
    args: ExportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportCertificateCommandOutput>;
  exportCertificate(
    args: ExportCertificateCommandInput,
    cb: (err: any, data?: ExportCertificateCommandOutput) => void
  ): void;
  exportCertificate(
    args: ExportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountConfigurationCommand}
   */
  getAccountConfiguration(): Promise<GetAccountConfigurationCommandOutput>;
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountConfigurationCommandOutput>;
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;
  getAccountConfiguration(
    args: GetAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAcmeExternalAccountBindingCredentialsCommand}
   */
  getAcmeExternalAccountBindingCredentials(
    args: GetAcmeExternalAccountBindingCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAcmeExternalAccountBindingCredentialsCommandOutput>;
  getAcmeExternalAccountBindingCredentials(
    args: GetAcmeExternalAccountBindingCredentialsCommandInput,
    cb: (err: any, data?: GetAcmeExternalAccountBindingCredentialsCommandOutput) => void
  ): void;
  getAcmeExternalAccountBindingCredentials(
    args: GetAcmeExternalAccountBindingCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAcmeExternalAccountBindingCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCertificateCommand}
   */
  getCertificate(
    args: GetCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCertificateCommandOutput>;
  getCertificate(
    args: GetCertificateCommandInput,
    cb: (err: any, data?: GetCertificateCommandOutput) => void
  ): void;
  getCertificate(
    args: GetCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCertificateCommand}
   */
  importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcmeAccountsCommand}
   */
  listAcmeAccounts(
    args: ListAcmeAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcmeAccountsCommandOutput>;
  listAcmeAccounts(
    args: ListAcmeAccountsCommandInput,
    cb: (err: any, data?: ListAcmeAccountsCommandOutput) => void
  ): void;
  listAcmeAccounts(
    args: ListAcmeAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcmeAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcmeDomainValidationsCommand}
   */
  listAcmeDomainValidations(
    args: ListAcmeDomainValidationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcmeDomainValidationsCommandOutput>;
  listAcmeDomainValidations(
    args: ListAcmeDomainValidationsCommandInput,
    cb: (err: any, data?: ListAcmeDomainValidationsCommandOutput) => void
  ): void;
  listAcmeDomainValidations(
    args: ListAcmeDomainValidationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcmeDomainValidationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcmeEndpointsCommand}
   */
  listAcmeEndpoints(): Promise<ListAcmeEndpointsCommandOutput>;
  listAcmeEndpoints(
    args: ListAcmeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcmeEndpointsCommandOutput>;
  listAcmeEndpoints(
    args: ListAcmeEndpointsCommandInput,
    cb: (err: any, data?: ListAcmeEndpointsCommandOutput) => void
  ): void;
  listAcmeEndpoints(
    args: ListAcmeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcmeEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcmeExternalAccountBindingsCommand}
   */
  listAcmeExternalAccountBindings(
    args: ListAcmeExternalAccountBindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcmeExternalAccountBindingsCommandOutput>;
  listAcmeExternalAccountBindings(
    args: ListAcmeExternalAccountBindingsCommandInput,
    cb: (err: any, data?: ListAcmeExternalAccountBindingsCommandOutput) => void
  ): void;
  listAcmeExternalAccountBindings(
    args: ListAcmeExternalAccountBindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcmeExternalAccountBindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForCertificateCommand}
   */
  listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForCertificateCommandOutput>;
  listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void
  ): void;
  listTagsForCertificate(
    args: ListTagsForCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForCertificateCommandOutput) => void
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
   * @see {@link PutAccountConfigurationCommand}
   */
  putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountConfigurationCommandOutput>;
  putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    cb: (err: any, data?: PutAccountConfigurationCommandOutput) => void
  ): void;
  putAccountConfiguration(
    args: PutAccountConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromCertificateCommand}
   */
  removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromCertificateCommandOutput>;
  removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void
  ): void;
  removeTagsFromCertificate(
    args: RemoveTagsFromCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link RenewCertificateCommand}
   */
  renewCertificate(
    args: RenewCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenewCertificateCommandOutput>;
  renewCertificate(
    args: RenewCertificateCommandInput,
    cb: (err: any, data?: RenewCertificateCommandOutput) => void
  ): void;
  renewCertificate(
    args: RenewCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestCertificateCommand}
   */
  requestCertificate(
    args: RequestCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestCertificateCommandOutput>;
  requestCertificate(
    args: RequestCertificateCommandInput,
    cb: (err: any, data?: RequestCertificateCommandOutput) => void
  ): void;
  requestCertificate(
    args: RequestCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link ResendValidationEmailCommand}
   */
  resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResendValidationEmailCommandOutput>;
  resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    cb: (err: any, data?: ResendValidationEmailCommandOutput) => void
  ): void;
  resendValidationEmail(
    args: ResendValidationEmailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResendValidationEmailCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeAcmeAccountCommand}
   */
  revokeAcmeAccount(
    args: RevokeAcmeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeAcmeAccountCommandOutput>;
  revokeAcmeAccount(
    args: RevokeAcmeAccountCommandInput,
    cb: (err: any, data?: RevokeAcmeAccountCommandOutput) => void
  ): void;
  revokeAcmeAccount(
    args: RevokeAcmeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeAcmeAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeAcmeExternalAccountBindingCommand}
   */
  revokeAcmeExternalAccountBinding(
    args: RevokeAcmeExternalAccountBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeAcmeExternalAccountBindingCommandOutput>;
  revokeAcmeExternalAccountBinding(
    args: RevokeAcmeExternalAccountBindingCommandInput,
    cb: (err: any, data?: RevokeAcmeExternalAccountBindingCommandOutput) => void
  ): void;
  revokeAcmeExternalAccountBinding(
    args: RevokeAcmeExternalAccountBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeAcmeExternalAccountBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeCertificateCommand}
   */
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeCertificateCommandOutput>;
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;
  revokeCertificate(
    args: RevokeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCertificatesCommand}
   */
  searchCertificates(): Promise<SearchCertificatesCommandOutput>;
  searchCertificates(
    args: SearchCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchCertificatesCommandOutput>;
  searchCertificates(
    args: SearchCertificatesCommandInput,
    cb: (err: any, data?: SearchCertificatesCommandOutput) => void
  ): void;
  searchCertificates(
    args: SearchCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCertificatesCommandOutput) => void
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
   * @see {@link UpdateAcmeDomainValidationCommand}
   */
  updateAcmeDomainValidation(
    args: UpdateAcmeDomainValidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcmeDomainValidationCommandOutput>;
  updateAcmeDomainValidation(
    args: UpdateAcmeDomainValidationCommandInput,
    cb: (err: any, data?: UpdateAcmeDomainValidationCommandOutput) => void
  ): void;
  updateAcmeDomainValidation(
    args: UpdateAcmeDomainValidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcmeDomainValidationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAcmeEndpointCommand}
   */
  updateAcmeEndpoint(
    args: UpdateAcmeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcmeEndpointCommandOutput>;
  updateAcmeEndpoint(
    args: UpdateAcmeEndpointCommandInput,
    cb: (err: any, data?: UpdateAcmeEndpointCommandOutput) => void
  ): void;
  updateAcmeEndpoint(
    args: UpdateAcmeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcmeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCertificateOptionsCommand}
   */
  updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCertificateOptionsCommandOutput>;
  updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void
  ): void;
  updateCertificateOptions(
    args: UpdateCertificateOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCertificateOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcmeAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAcmeAccountsCommandOutput}.
   */
  paginateListAcmeAccounts(
    args: ListAcmeAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAcmeAccountsCommandOutput>;

  /**
   * @see {@link ListAcmeDomainValidationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAcmeDomainValidationsCommandOutput}.
   */
  paginateListAcmeDomainValidations(
    args: ListAcmeDomainValidationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAcmeDomainValidationsCommandOutput>;

  /**
   * @see {@link ListAcmeEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAcmeEndpointsCommandOutput}.
   */
  paginateListAcmeEndpoints(
    args?: ListAcmeEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAcmeEndpointsCommandOutput>;

  /**
   * @see {@link ListAcmeExternalAccountBindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAcmeExternalAccountBindingsCommandOutput}.
   */
  paginateListAcmeExternalAccountBindings(
    args: ListAcmeExternalAccountBindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAcmeExternalAccountBindingsCommandOutput>;

  /**
   * @see {@link ListCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCertificatesCommandOutput}.
   */
  paginateListCertificates(
    args?: ListCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCertificatesCommandOutput>;

  /**
   * @see {@link SearchCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchCertificatesCommandOutput}.
   */
  paginateSearchCertificates(
    args?: SearchCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchCertificatesCommandOutput>;

  /**
   * @see {@link DescribeAcmeDomainValidationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAcmeDomainValidationValidated(
    args: DescribeAcmeDomainValidationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult<DescribeAcmeDomainValidationCommandOutput>>;

  /**
   * @see {@link DescribeAcmeDomainValidationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAcmeDomainValidationDeleted(
    args: DescribeAcmeDomainValidationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link DescribeAcmeEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAcmeEndpointActive(
    args: DescribeAcmeEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult<DescribeAcmeEndpointCommandOutput>>;

  /**
   * @see {@link DescribeAcmeEndpointCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAcmeEndpointDeleted(
    args: DescribeAcmeEndpointCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link DescribeCertificateCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCertificateValidated(
    args: DescribeCertificateCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult<DescribeCertificateCommandOutput>>;
}

/**
 * <fullname>Certificate Manager</fullname> <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
 * @public
 */
export class ACM extends ACMClient implements ACM {}
createAggregatedClient(commands, ACM, { paginators, waiters });
