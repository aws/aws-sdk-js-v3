// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "./commands/DescribeServicesCommand";
import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "./commands/GetAttributeValuesCommand";
import {
  GetPriceListFileUrlCommand,
  GetPriceListFileUrlCommandInput,
  GetPriceListFileUrlCommandOutput,
} from "./commands/GetPriceListFileUrlCommand";
import { GetProductsCommand, GetProductsCommandInput, GetProductsCommandOutput } from "./commands/GetProductsCommand";
import {
  ListPriceListsCommand,
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput,
} from "./commands/ListPriceListsCommand";
import { PricingClient, PricingClientConfig } from "./PricingClient";

const commands = {
  DescribeServicesCommand,
  GetAttributeValuesCommand,
  GetPriceListFileUrlCommand,
  GetProductsCommand,
  ListPriceListsCommand,
};

export interface Pricing {
  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttributeValuesCommand}
   */
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttributeValuesCommandOutput>;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPriceListFileUrlCommand}
   */
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPriceListFileUrlCommandOutput>;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductsCommand}
   */
  getProducts(args: GetProductsCommandInput, options?: __HttpHandlerOptions): Promise<GetProductsCommandOutput>;
  getProducts(args: GetProductsCommandInput, cb: (err: any, data?: GetProductsCommandOutput) => void): void;
  getProducts(
    args: GetProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPriceListsCommand}
   */
  listPriceLists(
    args: ListPriceListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPriceListsCommandOutput>;
  listPriceLists(args: ListPriceListsCommandInput, cb: (err: any, data?: ListPriceListsCommandOutput) => void): void;
  listPriceLists(
    args: ListPriceListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPriceListsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Web Services Price List API is a centralized and convenient way to programmatically
 *          query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>,
 *             <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at
 *          the SKU level. You can use the Amazon Web Services Price List to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Build cost control and scenario planning tools</p>
 *             </li>
 *             <li>
 *                <p>Reconcile billing data</p>
 *             </li>
 *             <li>
 *                <p>Forecast future spend for budgeting purposes</p>
 *             </li>
 *             <li>
 *                <p>Provide cost benefit analysis that compare your internal workloads with Amazon Web Services</p>
 *             </li>
 *          </ul>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for
 *          all Amazon Web Services, then <code>GetServices</code> with a service code to
 *          retrieve the attribute names for that service. After you have the service code and
 *          attribute names, you can use <code>GetAttributeValues</code> to see what values are
 *          available for an attribute. With the service code and an attribute name and value, you can
 *          use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">Using the
 *          Amazon Web Services Price List API</a> in the <i>Billing User
 *             Guide</i>.</p>
 */
export class Pricing extends PricingClient implements Pricing {}
createAggregatedClient(commands, Pricing);
