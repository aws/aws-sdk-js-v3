// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchDeleteTaxRegistrationCommand,
  BatchDeleteTaxRegistrationCommandInput,
  BatchDeleteTaxRegistrationCommandOutput,
} from "./commands/BatchDeleteTaxRegistrationCommand";
import {
  BatchGetTaxExemptionsCommand,
  BatchGetTaxExemptionsCommandInput,
  BatchGetTaxExemptionsCommandOutput,
} from "./commands/BatchGetTaxExemptionsCommand";
import {
  BatchPutTaxRegistrationCommand,
  BatchPutTaxRegistrationCommandInput,
  BatchPutTaxRegistrationCommandOutput,
} from "./commands/BatchPutTaxRegistrationCommand";
import {
  DeleteSupplementalTaxRegistrationCommand,
  DeleteSupplementalTaxRegistrationCommandInput,
  DeleteSupplementalTaxRegistrationCommandOutput,
} from "./commands/DeleteSupplementalTaxRegistrationCommand";
import {
  DeleteTaxRegistrationCommand,
  DeleteTaxRegistrationCommandInput,
  DeleteTaxRegistrationCommandOutput,
} from "./commands/DeleteTaxRegistrationCommand";
import {
  GetTaxExemptionTypesCommand,
  GetTaxExemptionTypesCommandInput,
  GetTaxExemptionTypesCommandOutput,
} from "./commands/GetTaxExemptionTypesCommand";
import {
  GetTaxInheritanceCommand,
  GetTaxInheritanceCommandInput,
  GetTaxInheritanceCommandOutput,
} from "./commands/GetTaxInheritanceCommand";
import {
  GetTaxRegistrationCommand,
  GetTaxRegistrationCommandInput,
  GetTaxRegistrationCommandOutput,
} from "./commands/GetTaxRegistrationCommand";
import {
  GetTaxRegistrationDocumentCommand,
  GetTaxRegistrationDocumentCommandInput,
  GetTaxRegistrationDocumentCommandOutput,
} from "./commands/GetTaxRegistrationDocumentCommand";
import {
  ListSupplementalTaxRegistrationsCommand,
  ListSupplementalTaxRegistrationsCommandInput,
  ListSupplementalTaxRegistrationsCommandOutput,
} from "./commands/ListSupplementalTaxRegistrationsCommand";
import {
  ListTaxExemptionsCommand,
  ListTaxExemptionsCommandInput,
  ListTaxExemptionsCommandOutput,
} from "./commands/ListTaxExemptionsCommand";
import {
  ListTaxRegistrationsCommand,
  ListTaxRegistrationsCommandInput,
  ListTaxRegistrationsCommandOutput,
} from "./commands/ListTaxRegistrationsCommand";
import {
  PutSupplementalTaxRegistrationCommand,
  PutSupplementalTaxRegistrationCommandInput,
  PutSupplementalTaxRegistrationCommandOutput,
} from "./commands/PutSupplementalTaxRegistrationCommand";
import {
  PutTaxExemptionCommand,
  PutTaxExemptionCommandInput,
  PutTaxExemptionCommandOutput,
} from "./commands/PutTaxExemptionCommand";
import {
  PutTaxInheritanceCommand,
  PutTaxInheritanceCommandInput,
  PutTaxInheritanceCommandOutput,
} from "./commands/PutTaxInheritanceCommand";
import {
  PutTaxRegistrationCommand,
  PutTaxRegistrationCommandInput,
  PutTaxRegistrationCommandOutput,
} from "./commands/PutTaxRegistrationCommand";
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

export interface TaxSettings {
  /**
   * @see {@link BatchDeleteTaxRegistrationCommand}
   */
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTaxRegistrationCommandOutput>;
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    cb: (err: any, data?: BatchDeleteTaxRegistrationCommandOutput) => void
  ): void;
  batchDeleteTaxRegistration(
    args: BatchDeleteTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetTaxExemptionsCommand}
   */
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTaxExemptionsCommandOutput>;
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    cb: (err: any, data?: BatchGetTaxExemptionsCommandOutput) => void
  ): void;
  batchGetTaxExemptions(
    args: BatchGetTaxExemptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTaxExemptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutTaxRegistrationCommand}
   */
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutTaxRegistrationCommandOutput>;
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    cb: (err: any, data?: BatchPutTaxRegistrationCommandOutput) => void
  ): void;
  batchPutTaxRegistration(
    args: BatchPutTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSupplementalTaxRegistrationCommand}
   */
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSupplementalTaxRegistrationCommandOutput>;
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    cb: (err: any, data?: DeleteSupplementalTaxRegistrationCommandOutput) => void
  ): void;
  deleteSupplementalTaxRegistration(
    args: DeleteSupplementalTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSupplementalTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaxRegistrationCommand}
   */
  deleteTaxRegistration(): Promise<DeleteTaxRegistrationCommandOutput>;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaxRegistrationCommandOutput>;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    cb: (err: any, data?: DeleteTaxRegistrationCommandOutput) => void
  ): void;
  deleteTaxRegistration(
    args: DeleteTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxExemptionTypesCommand}
   */
  getTaxExemptionTypes(): Promise<GetTaxExemptionTypesCommandOutput>;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaxExemptionTypesCommandOutput>;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    cb: (err: any, data?: GetTaxExemptionTypesCommandOutput) => void
  ): void;
  getTaxExemptionTypes(
    args: GetTaxExemptionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaxExemptionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxInheritanceCommand}
   */
  getTaxInheritance(): Promise<GetTaxInheritanceCommandOutput>;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaxInheritanceCommandOutput>;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    cb: (err: any, data?: GetTaxInheritanceCommandOutput) => void
  ): void;
  getTaxInheritance(
    args: GetTaxInheritanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaxInheritanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxRegistrationCommand}
   */
  getTaxRegistration(): Promise<GetTaxRegistrationCommandOutput>;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaxRegistrationCommandOutput>;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    cb: (err: any, data?: GetTaxRegistrationCommandOutput) => void
  ): void;
  getTaxRegistration(
    args: GetTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTaxRegistrationDocumentCommand}
   */
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTaxRegistrationDocumentCommandOutput>;
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    cb: (err: any, data?: GetTaxRegistrationDocumentCommandOutput) => void
  ): void;
  getTaxRegistrationDocument(
    args: GetTaxRegistrationDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTaxRegistrationDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupplementalTaxRegistrationsCommand}
   */
  listSupplementalTaxRegistrations(): Promise<ListSupplementalTaxRegistrationsCommandOutput>;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupplementalTaxRegistrationsCommandOutput>;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    cb: (err: any, data?: ListSupplementalTaxRegistrationsCommandOutput) => void
  ): void;
  listSupplementalTaxRegistrations(
    args: ListSupplementalTaxRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupplementalTaxRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaxExemptionsCommand}
   */
  listTaxExemptions(): Promise<ListTaxExemptionsCommandOutput>;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaxExemptionsCommandOutput>;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    cb: (err: any, data?: ListTaxExemptionsCommandOutput) => void
  ): void;
  listTaxExemptions(
    args: ListTaxExemptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaxExemptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTaxRegistrationsCommand}
   */
  listTaxRegistrations(): Promise<ListTaxRegistrationsCommandOutput>;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaxRegistrationsCommandOutput>;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    cb: (err: any, data?: ListTaxRegistrationsCommandOutput) => void
  ): void;
  listTaxRegistrations(
    args: ListTaxRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaxRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSupplementalTaxRegistrationCommand}
   */
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSupplementalTaxRegistrationCommandOutput>;
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    cb: (err: any, data?: PutSupplementalTaxRegistrationCommandOutput) => void
  ): void;
  putSupplementalTaxRegistration(
    args: PutSupplementalTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSupplementalTaxRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxExemptionCommand}
   */
  putTaxExemption(
    args: PutTaxExemptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTaxExemptionCommandOutput>;
  putTaxExemption(args: PutTaxExemptionCommandInput, cb: (err: any, data?: PutTaxExemptionCommandOutput) => void): void;
  putTaxExemption(
    args: PutTaxExemptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTaxExemptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxInheritanceCommand}
   */
  putTaxInheritance(): Promise<PutTaxInheritanceCommandOutput>;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTaxInheritanceCommandOutput>;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    cb: (err: any, data?: PutTaxInheritanceCommandOutput) => void
  ): void;
  putTaxInheritance(
    args: PutTaxInheritanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTaxInheritanceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTaxRegistrationCommand}
   */
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTaxRegistrationCommandOutput>;
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    cb: (err: any, data?: PutTaxRegistrationCommandOutput) => void
  ): void;
  putTaxRegistration(
    args: PutTaxRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTaxRegistrationCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the tax setting API to programmatically set, modify, and delete the tax
 *       registration number (TRN), associated business legal name, and address (Collectively referred
 *       to as "TRN information"). You can also programmatically view TRN information and tax addresses
 *       ("Tax profiles"). </p>
 *          <p>You can use this API to automate your TRN information settings instead of manually using
 *       the console.</p>
 *          <p>Service Endpoint</p>
 *          <ul>
 *             <li>
 *                <p>https://tax.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 * @public
 */
export class TaxSettings extends TaxSettingsClient implements TaxSettings {}
createAggregatedClient(commands, TaxSettings);
