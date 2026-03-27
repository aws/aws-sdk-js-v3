// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import { ACMClient } from "./ACMClient";
import {
  type AddTagsToCertificateCommandInput,
  type AddTagsToCertificateCommandOutput,
  AddTagsToCertificateCommand,
} from "./commands/AddTagsToCertificateCommand";
import {
  type DeleteCertificateCommandInput,
  type DeleteCertificateCommandOutput,
  DeleteCertificateCommand,
} from "./commands/DeleteCertificateCommand";
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
  type RevokeCertificateCommandInput,
  type RevokeCertificateCommandOutput,
  RevokeCertificateCommand,
} from "./commands/RevokeCertificateCommand";
import {
  type UpdateCertificateOptionsCommandInput,
  type UpdateCertificateOptionsCommandOutput,
  UpdateCertificateOptionsCommand,
} from "./commands/UpdateCertificateOptionsCommand";
import { paginateListCertificates } from "./pagination/ListCertificatesPaginator";
import { waitUntilCertificateValidated } from "./waiters/waitForCertificateValidated";

const commands = {
  AddTagsToCertificateCommand,
  DeleteCertificateCommand,
  DescribeCertificateCommand,
  ExportCertificateCommand,
  GetAccountConfigurationCommand,
  GetCertificateCommand,
  ImportCertificateCommand,
  ListCertificatesCommand,
  ListTagsForCertificateCommand,
  PutAccountConfigurationCommand,
  RemoveTagsFromCertificateCommand,
  RenewCertificateCommand,
  RequestCertificateCommand,
  ResendValidationEmailCommand,
  RevokeCertificateCommand,
  UpdateCertificateOptionsCommand,
};
const paginators = {
  paginateListCertificates,
};
const waiters = {
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
   * @see {@link DescribeCertificateCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCertificateValidated(
    args: DescribeCertificateCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ACM>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <fullname>Certificate Manager</fullname> <p>You can use Certificate Manager (ACM) to manage SSL/TLS certificates for your Amazon Web Services-based websites and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User Guide</a>.</p>
 * @public
 */
export class ACM extends ACMClient implements ACM {}
createAggregatedClient(commands, ACM, { paginators, waiters });
