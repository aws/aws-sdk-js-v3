// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchDeleteTaxRegistrationCommandInput,
  type BatchDeleteTaxRegistrationCommandOutput,
  BatchDeleteTaxRegistrationCommand,
} from "./commands/BatchDeleteTaxRegistrationCommand";
import {
  type BatchGetTaxExemptionsCommandInput,
  type BatchGetTaxExemptionsCommandOutput,
  BatchGetTaxExemptionsCommand,
} from "./commands/BatchGetTaxExemptionsCommand";
import {
  type BatchPutTaxRegistrationCommandInput,
  type BatchPutTaxRegistrationCommandOutput,
  BatchPutTaxRegistrationCommand,
} from "./commands/BatchPutTaxRegistrationCommand";
import {
  type DeleteSupplementalTaxRegistrationCommandInput,
  type DeleteSupplementalTaxRegistrationCommandOutput,
  DeleteSupplementalTaxRegistrationCommand,
} from "./commands/DeleteSupplementalTaxRegistrationCommand";
import {
  type DeleteTaxRegistrationCommandInput,
  type DeleteTaxRegistrationCommandOutput,
  DeleteTaxRegistrationCommand,
} from "./commands/DeleteTaxRegistrationCommand";
import {
  type GetTaxExemptionTypesCommandInput,
  type GetTaxExemptionTypesCommandOutput,
  GetTaxExemptionTypesCommand,
} from "./commands/GetTaxExemptionTypesCommand";
import {
  type GetTaxInheritanceCommandInput,
  type GetTaxInheritanceCommandOutput,
  GetTaxInheritanceCommand,
} from "./commands/GetTaxInheritanceCommand";
import {
  type GetTaxRegistrationCommandInput,
  type GetTaxRegistrationCommandOutput,
  GetTaxRegistrationCommand,
} from "./commands/GetTaxRegistrationCommand";
import {
  type GetTaxRegistrationDocumentCommandInput,
  type GetTaxRegistrationDocumentCommandOutput,
  GetTaxRegistrationDocumentCommand,
} from "./commands/GetTaxRegistrationDocumentCommand";
import {
  type ListSupplementalTaxRegistrationsCommandInput,
  type ListSupplementalTaxRegistrationsCommandOutput,
  ListSupplementalTaxRegistrationsCommand,
} from "./commands/ListSupplementalTaxRegistrationsCommand";
import {
  type ListTaxExemptionsCommandInput,
  type ListTaxExemptionsCommandOutput,
  ListTaxExemptionsCommand,
} from "./commands/ListTaxExemptionsCommand";
import {
  type ListTaxRegistrationsCommandInput,
  type ListTaxRegistrationsCommandOutput,
  ListTaxRegistrationsCommand,
} from "./commands/ListTaxRegistrationsCommand";
import {
  type PutSupplementalTaxRegistrationCommandInput,
  type PutSupplementalTaxRegistrationCommandOutput,
  PutSupplementalTaxRegistrationCommand,
} from "./commands/PutSupplementalTaxRegistrationCommand";
import {
  type PutTaxExemptionCommandInput,
  type PutTaxExemptionCommandOutput,
  PutTaxExemptionCommand,
} from "./commands/PutTaxExemptionCommand";
import {
  type PutTaxInheritanceCommandInput,
  type PutTaxInheritanceCommandOutput,
  PutTaxInheritanceCommand,
} from "./commands/PutTaxInheritanceCommand";
import {
  type PutTaxRegistrationCommandInput,
  type PutTaxRegistrationCommandOutput,
  PutTaxRegistrationCommand,
} from "./commands/PutTaxRegistrationCommand";
import { paginateListSupplementalTaxRegistrations } from "./pagination/ListSupplementalTaxRegistrationsPaginator";
import { paginateListTaxExemptions } from "./pagination/ListTaxExemptionsPaginator";
import { paginateListTaxRegistrations } from "./pagination/ListTaxRegistrationsPaginator";
import { TaxSettingsClient } from "./TaxSettingsClient";

const commands = {
  BatchDeleteTaxRegistrationCommand,
  BatchGetTaxExemptionsCommand,
  BatchPutTaxRegistrationCommand,
  DeleteSupplementalTaxRegistrationCommand,
  DeleteTaxRegistrationCommand,
  GetTaxExemptionTypesCommand,
  GetTaxInheritanceCommand,
  GetTaxRegistrationCommand,
  GetTaxRegistrationDocumentCommand,
  ListSupplementalTaxRegistrationsCommand,
  ListTaxExemptionsCommand,
  ListTaxRegistrationsCommand,
  PutSupplementalTaxRegistrationCommand,
  PutTaxExemptionCommand,
  PutTaxInheritanceCommand,
  PutTaxRegistrationCommand,
};
const paginators = {
  paginateListSupplementalTaxRegistrations,
  paginateListTaxExemptions,
  paginateListTaxRegistrations,
};

/**
 * @public
 */
export interface TaxSettingsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface TaxSettings {
  /**
   * @see {@link BatchDeleteTaxRegistrationCommand}
   */
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<BatchDeleteTaxRegistrationCommandOutput>;
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    cb: (err: any, data?: BatchDeleteTaxRegistrationCommandOutput) => void
  ): void;
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: BatchDeleteTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTaxExemptionsCommand}
   */
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<BatchGetTaxExemptionsCommandOutput>;
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    cb: (err: any, data?: BatchGetTaxExemptionsCommandOutput) => void
  ): void;
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: BatchGetTaxExemptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutTaxRegistrationCommand}
   */
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<BatchPutTaxRegistrationCommandOutput>;
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    cb: (err: any, data?: BatchPutTaxRegistrationCommandOutput) => void
  ): void;
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: BatchPutTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSupplementalTaxRegistrationCommand}
   */
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<DeleteSupplementalTaxRegistrationCommandOutput>;
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    cb: (err: any, data?: DeleteSupplementalTaxRegistrationCommandOutput) => void
  ): void;
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: DeleteSupplementalTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaxRegistrationCommand}
   */
  deleteTaxRegistration(): Promise<DeleteTaxRegistrationCommandOutput>;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<DeleteTaxRegistrationCommandOutput>;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    cb: (err: any, data?: DeleteTaxRegistrationCommandOutput) => void
  ): void;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: DeleteTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxExemptionTypesCommand}
   */
  getTaxExemptionTypes(): Promise<GetTaxExemptionTypesCommandOutput>;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<GetTaxExemptionTypesCommandOutput>;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    cb: (err: any, data?: GetTaxExemptionTypesCommandOutput) => void
  ): void;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: GetTaxExemptionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxInheritanceCommand}
   */
  getTaxInheritance(): Promise<GetTaxInheritanceCommandOutput>;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<GetTaxInheritanceCommandOutput>;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    cb: (err: any, data?: GetTaxInheritanceCommandOutput) => void
  ): void;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: GetTaxInheritanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxRegistrationCommand}
   */
  getTaxRegistration(): Promise<GetTaxRegistrationCommandOutput>;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<GetTaxRegistrationCommandOutput>;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    cb: (err: any, data?: GetTaxRegistrationCommandOutput) => void
  ): void;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: GetTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxRegistrationDocumentCommand}
   */
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<GetTaxRegistrationDocumentCommandOutput>;
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    cb: (err: any, data?: GetTaxRegistrationDocumentCommandOutput) => void
  ): void;
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: GetTaxRegistrationDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupplementalTaxRegistrationsCommand}
   */
  listSupplementalTaxRegistrations(): Promise<ListSupplementalTaxRegistrationsCommandOutput>;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<ListSupplementalTaxRegistrationsCommandOutput>;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    cb: (err: any, data?: ListSupplementalTaxRegistrationsCommandOutput) => void
  ): void;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: ListSupplementalTaxRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaxExemptionsCommand}
   */
  listTaxExemptions(): Promise<ListTaxExemptionsCommandOutput>;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<ListTaxExemptionsCommandOutput>;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    cb: (err: any, data?: ListTaxExemptionsCommandOutput) => void
  ): void;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: ListTaxExemptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaxRegistrationsCommand}
   */
  listTaxRegistrations(): Promise<ListTaxRegistrationsCommandOutput>;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<ListTaxRegistrationsCommandOutput>;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    cb: (err: any, data?: ListTaxRegistrationsCommandOutput) => void
  ): void;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: ListTaxRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSupplementalTaxRegistrationCommand}
   */
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<PutSupplementalTaxRegistrationCommandOutput>;
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    cb: (err: any, data?: PutSupplementalTaxRegistrationCommandOutput) => void
  ): void;
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: PutSupplementalTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxExemptionCommand}
   */
  putTaxExemption(
    args: PutTaxExemptionCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<PutTaxExemptionCommandOutput>;
  putTaxExemption(
    args: PutTaxExemptionCommandInput,
    cb: (err: any, data?: PutTaxExemptionCommandOutput) => void
  ): void;
  putTaxExemption(
    args: PutTaxExemptionCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: PutTaxExemptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxInheritanceCommand}
   */
  putTaxInheritance(): Promise<PutTaxInheritanceCommandOutput>;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<PutTaxInheritanceCommandOutput>;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    cb: (err: any, data?: PutTaxInheritanceCommandOutput) => void
  ): void;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: PutTaxInheritanceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxRegistrationCommand}
   */
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    options?: TaxSettingsRequestOptions
  ): Promise<PutTaxRegistrationCommandOutput>;
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    cb: (err: any, data?: PutTaxRegistrationCommandOutput) => void
  ): void;
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    options: TaxSettingsRequestOptions,
    cb: (err: any, data?: PutTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupplementalTaxRegistrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSupplementalTaxRegistrationsCommandOutput}.
   */
  paginateListSupplementalTaxRegistrations(
    args?: ListSupplementalTaxRegistrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSupplementalTaxRegistrationsCommandOutput>;

  /**
   * @see {@link ListTaxExemptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTaxExemptionsCommandOutput}.
   */
  paginateListTaxExemptions(
    args?: ListTaxExemptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTaxExemptionsCommandOutput>;

  /**
   * @see {@link ListTaxRegistrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTaxRegistrationsCommandOutput}.
   */
  paginateListTaxRegistrations(
    args?: ListTaxRegistrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTaxRegistrationsCommandOutput>;
}

/**
 * <p>You can use the tax setting API to programmatically set, modify, and delete the tax registration number (TRN), associated business legal name, and address (Collectively referred to as "TRN information"). You can also programmatically view TRN information and tax addresses ("Tax profiles"). </p> <p>You can use this API to automate your TRN information settings instead of manually using the console.</p> <p>Service Endpoint</p> <ul> <li> <p>https://tax.us-east-1.amazonaws.com</p> </li> </ul>
 * @public
 */
export class TaxSettings extends TaxSettingsClient implements TaxSettings {}
createAggregatedClient(commands, TaxSettings, { paginators });
