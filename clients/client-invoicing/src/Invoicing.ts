// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  DeleteInvoiceUnitCommand,
  DeleteInvoiceUnitCommandInput,
  DeleteInvoiceUnitCommandOutput,
} from "./commands/DeleteInvoiceUnitCommand";
import {
  GetInvoiceUnitCommand,
  GetInvoiceUnitCommandInput,
  GetInvoiceUnitCommandOutput,
} from "./commands/GetInvoiceUnitCommand";
import {
  ListInvoiceUnitsCommand,
  ListInvoiceUnitsCommandInput,
  ListInvoiceUnitsCommandOutput,
} from "./commands/ListInvoiceUnitsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
import { InvoicingClient, InvoicingClientConfig } from "./InvoicingClient";

const commands = {
  BatchGetInvoiceProfileCommand,
  CreateInvoiceUnitCommand,
  DeleteInvoiceUnitCommand,
  GetInvoiceUnitCommand,
  ListInvoiceUnitsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInvoiceUnitCommand,
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
}

/**
 * <p>
 *             <b>Amazon Web Services Invoice Configuration</b>
 *          </p>
 *          <p>You can use Amazon Web Services Invoice Configuration APIs to programmatically create,
 *       update, delete, get, and list invoice units. You can also programmatically fetch the
 *       information of the invoice receiver. For example, business legal name, address, and invoicing
 *       contacts. </p>
 *          <p>You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units.</p>
 *          <p>Service endpoint</p>
 *          <p>You can use the following endpoints for Amazon Web Services Invoice Configuration:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>https://invoicing.us-east-1.api.aws</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class Invoicing extends InvoicingClient implements Invoicing {}
createAggregatedClient(commands, Invoicing);
