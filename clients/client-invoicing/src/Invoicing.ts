// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetInvoiceProfileCommand,
  BatchGetInvoiceProfileCommandInput,
  BatchGetInvoiceProfileCommandOutput,
} from "./commands/BatchGetInvoiceProfileCommand";
import {
  CreateInvoiceUnitCommand,
  CreateInvoiceUnitCommandInput,
  CreateInvoiceUnitCommandOutput,
} from "./commands/CreateInvoiceUnitCommand";
import {
  CreateProcurementPortalPreferenceCommand,
  CreateProcurementPortalPreferenceCommandInput,
  CreateProcurementPortalPreferenceCommandOutput,
} from "./commands/CreateProcurementPortalPreferenceCommand";
import {
  DeleteInvoiceUnitCommand,
  DeleteInvoiceUnitCommandInput,
  DeleteInvoiceUnitCommandOutput,
} from "./commands/DeleteInvoiceUnitCommand";
import {
  DeleteProcurementPortalPreferenceCommand,
  DeleteProcurementPortalPreferenceCommandInput,
  DeleteProcurementPortalPreferenceCommandOutput,
} from "./commands/DeleteProcurementPortalPreferenceCommand";
import {
  GetInvoicePDFCommand,
  GetInvoicePDFCommandInput,
  GetInvoicePDFCommandOutput,
} from "./commands/GetInvoicePDFCommand";
import {
  GetInvoiceUnitCommand,
  GetInvoiceUnitCommandInput,
  GetInvoiceUnitCommandOutput,
} from "./commands/GetInvoiceUnitCommand";
import {
  GetProcurementPortalPreferenceCommand,
  GetProcurementPortalPreferenceCommandInput,
  GetProcurementPortalPreferenceCommandOutput,
} from "./commands/GetProcurementPortalPreferenceCommand";
import {
  ListInvoiceSummariesCommand,
  ListInvoiceSummariesCommandInput,
  ListInvoiceSummariesCommandOutput,
} from "./commands/ListInvoiceSummariesCommand";
import {
  ListInvoiceUnitsCommand,
  ListInvoiceUnitsCommandInput,
  ListInvoiceUnitsCommandOutput,
} from "./commands/ListInvoiceUnitsCommand";
import {
  ListProcurementPortalPreferencesCommand,
  ListProcurementPortalPreferencesCommandInput,
  ListProcurementPortalPreferencesCommandOutput,
} from "./commands/ListProcurementPortalPreferencesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutProcurementPortalPreferenceCommand,
  PutProcurementPortalPreferenceCommandInput,
  PutProcurementPortalPreferenceCommandOutput,
} from "./commands/PutProcurementPortalPreferenceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateInvoiceUnitCommand,
  UpdateInvoiceUnitCommandInput,
  UpdateInvoiceUnitCommandOutput,
} from "./commands/UpdateInvoiceUnitCommand";
import {
  UpdateProcurementPortalPreferenceStatusCommand,
  UpdateProcurementPortalPreferenceStatusCommandInput,
  UpdateProcurementPortalPreferenceStatusCommandOutput,
} from "./commands/UpdateProcurementPortalPreferenceStatusCommand";
import { InvoicingClient } from "./InvoicingClient";

const commands = {
  BatchGetInvoiceProfileCommand,
  CreateInvoiceUnitCommand,
  CreateProcurementPortalPreferenceCommand,
  DeleteInvoiceUnitCommand,
  DeleteProcurementPortalPreferenceCommand,
  GetInvoicePDFCommand,
  GetInvoiceUnitCommand,
  GetProcurementPortalPreferenceCommand,
  ListInvoiceSummariesCommand,
  ListInvoiceUnitsCommand,
  ListProcurementPortalPreferencesCommand,
  ListTagsForResourceCommand,
  PutProcurementPortalPreferenceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInvoiceUnitCommand,
  UpdateProcurementPortalPreferenceStatusCommand,
};

export interface Invoicing {
  /**
   * @see {@link BatchGetInvoiceProfileCommand}
   */
  batchGetInvoiceProfile(
    args: BatchGetInvoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetInvoiceProfileCommandOutput>;
  batchGetInvoiceProfile(
    args: BatchGetInvoiceProfileCommandInput,
    cb: (err: any, data?: BatchGetInvoiceProfileCommandOutput) => void
  ): void;
  batchGetInvoiceProfile(
    args: BatchGetInvoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetInvoiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvoiceUnitCommand}
   */
  createInvoiceUnit(
    args: CreateInvoiceUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvoiceUnitCommandOutput>;
  createInvoiceUnit(
    args: CreateInvoiceUnitCommandInput,
    cb: (err: any, data?: CreateInvoiceUnitCommandOutput) => void
  ): void;
  createInvoiceUnit(
    args: CreateInvoiceUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvoiceUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProcurementPortalPreferenceCommand}
   */
  createProcurementPortalPreference(
    args: CreateProcurementPortalPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProcurementPortalPreferenceCommandOutput>;
  createProcurementPortalPreference(
    args: CreateProcurementPortalPreferenceCommandInput,
    cb: (err: any, data?: CreateProcurementPortalPreferenceCommandOutput) => void
  ): void;
  createProcurementPortalPreference(
    args: CreateProcurementPortalPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProcurementPortalPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvoiceUnitCommand}
   */
  deleteInvoiceUnit(
    args: DeleteInvoiceUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvoiceUnitCommandOutput>;
  deleteInvoiceUnit(
    args: DeleteInvoiceUnitCommandInput,
    cb: (err: any, data?: DeleteInvoiceUnitCommandOutput) => void
  ): void;
  deleteInvoiceUnit(
    args: DeleteInvoiceUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvoiceUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProcurementPortalPreferenceCommand}
   */
  deleteProcurementPortalPreference(
    args: DeleteProcurementPortalPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProcurementPortalPreferenceCommandOutput>;
  deleteProcurementPortalPreference(
    args: DeleteProcurementPortalPreferenceCommandInput,
    cb: (err: any, data?: DeleteProcurementPortalPreferenceCommandOutput) => void
  ): void;
  deleteProcurementPortalPreference(
    args: DeleteProcurementPortalPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProcurementPortalPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvoicePDFCommand}
   */
  getInvoicePDF(args: GetInvoicePDFCommandInput, options?: __HttpHandlerOptions): Promise<GetInvoicePDFCommandOutput>;
  getInvoicePDF(args: GetInvoicePDFCommandInput, cb: (err: any, data?: GetInvoicePDFCommandOutput) => void): void;
  getInvoicePDF(
    args: GetInvoicePDFCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvoicePDFCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvoiceUnitCommand}
   */
  getInvoiceUnit(
    args: GetInvoiceUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvoiceUnitCommandOutput>;
  getInvoiceUnit(args: GetInvoiceUnitCommandInput, cb: (err: any, data?: GetInvoiceUnitCommandOutput) => void): void;
  getInvoiceUnit(
    args: GetInvoiceUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvoiceUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProcurementPortalPreferenceCommand}
   */
  getProcurementPortalPreference(
    args: GetProcurementPortalPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProcurementPortalPreferenceCommandOutput>;
  getProcurementPortalPreference(
    args: GetProcurementPortalPreferenceCommandInput,
    cb: (err: any, data?: GetProcurementPortalPreferenceCommandOutput) => void
  ): void;
  getProcurementPortalPreference(
    args: GetProcurementPortalPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProcurementPortalPreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvoiceSummariesCommand}
   */
  listInvoiceSummaries(
    args: ListInvoiceSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvoiceSummariesCommandOutput>;
  listInvoiceSummaries(
    args: ListInvoiceSummariesCommandInput,
    cb: (err: any, data?: ListInvoiceSummariesCommandOutput) => void
  ): void;
  listInvoiceSummaries(
    args: ListInvoiceSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvoiceSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvoiceUnitsCommand}
   */
  listInvoiceUnits(): Promise<ListInvoiceUnitsCommandOutput>;
  listInvoiceUnits(
    args: ListInvoiceUnitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvoiceUnitsCommandOutput>;
  listInvoiceUnits(
    args: ListInvoiceUnitsCommandInput,
    cb: (err: any, data?: ListInvoiceUnitsCommandOutput) => void
  ): void;
  listInvoiceUnits(
    args: ListInvoiceUnitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvoiceUnitsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProcurementPortalPreferencesCommand}
   */
  listProcurementPortalPreferences(): Promise<ListProcurementPortalPreferencesCommandOutput>;
  listProcurementPortalPreferences(
    args: ListProcurementPortalPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProcurementPortalPreferencesCommandOutput>;
  listProcurementPortalPreferences(
    args: ListProcurementPortalPreferencesCommandInput,
    cb: (err: any, data?: ListProcurementPortalPreferencesCommandOutput) => void
  ): void;
  listProcurementPortalPreferences(
    args: ListProcurementPortalPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProcurementPortalPreferencesCommandOutput) => void
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
   * @see {@link PutProcurementPortalPreferenceCommand}
   */
  putProcurementPortalPreference(
    args: PutProcurementPortalPreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProcurementPortalPreferenceCommandOutput>;
  putProcurementPortalPreference(
    args: PutProcurementPortalPreferenceCommandInput,
    cb: (err: any, data?: PutProcurementPortalPreferenceCommandOutput) => void
  ): void;
  putProcurementPortalPreference(
    args: PutProcurementPortalPreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProcurementPortalPreferenceCommandOutput) => void
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
   * @see {@link UpdateInvoiceUnitCommand}
   */
  updateInvoiceUnit(
    args: UpdateInvoiceUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInvoiceUnitCommandOutput>;
  updateInvoiceUnit(
    args: UpdateInvoiceUnitCommandInput,
    cb: (err: any, data?: UpdateInvoiceUnitCommandOutput) => void
  ): void;
  updateInvoiceUnit(
    args: UpdateInvoiceUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInvoiceUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProcurementPortalPreferenceStatusCommand}
   */
  updateProcurementPortalPreferenceStatus(
    args: UpdateProcurementPortalPreferenceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProcurementPortalPreferenceStatusCommandOutput>;
  updateProcurementPortalPreferenceStatus(
    args: UpdateProcurementPortalPreferenceStatusCommandInput,
    cb: (err: any, data?: UpdateProcurementPortalPreferenceStatusCommandOutput) => void
  ): void;
  updateProcurementPortalPreferenceStatus(
    args: UpdateProcurementPortalPreferenceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProcurementPortalPreferenceStatusCommandOutput) => void
  ): void;
}

/**
 * <p> <b>Amazon Web Services Invoice Configuration</b> </p> <p>You can use Amazon Web Services Invoice Configuration APIs to programmatically create, update, delete, get, and list invoice units. You can also programmatically fetch the information of the invoice receiver. For example, business legal name, address, and invoicing contacts. </p> <p>You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units.</p> <p> <b>Amazon Web Services Procurement Portal Preferences</b> </p> <p>You can use Amazon Web Services Procurement Portal Preferences APIs to programmatically create, update, delete, get, and list procurement portal connections and e-invoice delivery settings. You can also programmatically fetch and modify the status of procurement portal configurations. For example, SAP Business Network or Coupa connections, configure e-invoice delivery and purchase order retrieval features.</p> <p>You can use Amazon Web Services Procurement Portal Preferences to connect e-invoice delivery to your procurement portals based on your organizational needs. By using Amazon Web Services Procurement Portal Preferences, you can configure connections to SAP Business Network and Coupa procurement portals that retrieve purchase orders and deliver Amazon Web Services invoices on the same day they are generated. You can also set up testing environments to validate invoice delivery without affecting live transactions, and manage contact information for portal setup and support. </p> <p>Administrative users should understand that billing read-only policies will show all procurement portal connection details. Review your IAM policies to ensure appropriate access controls are in place for procurement portal preferences.</p> <p> <b>Amazon Web Services Invoice Management</b> </p> <p>You can use Amazon Web Services Invoice Management APIs to programmatically list invoice summaries and get invoice documents. You can also programmatically fetch invoice documents with S3 pre-signed URLs.</p> <p>You can use Amazon Web Services Invoice Management to access invoice information based on your organizational needs. By using Amazon Web Services Invoice Management, you can retrieve paginated lists of invoice summaries that include invoice metadata such as invoice IDs, amounts, and currencies without downloading documents. You can also download invoice documents in PDF format using S3 pre-signed URLs with built-in expiration. As you manage invoices across your organization using Amazon Web Services Invoice Management APIs, you can create invoice retrieval processes and integrate invoice data into your financial systems.</p> <p>Service endpoint</p> <p>You can use the following endpoints for Amazon Web Services Invoice Configuration, Amazon Web Services Procurement Portal Preferences, and Amazon Web Services Invoice Management:</p> <ul> <li> <p> <code>https://invoicing.us-east-1.api.aws</code> </p> </li> </ul>
 * @public
 */
export class Invoicing extends InvoicingClient implements Invoicing {}
createAggregatedClient(commands, Invoicing);
