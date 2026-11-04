// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type DescribeServicesCommandInput,
  type DescribeServicesCommandOutput,
  DescribeServicesCommand,
} from "./commands/DescribeServicesCommand";
import {
  type GetAttributeValuesCommandInput,
  type GetAttributeValuesCommandOutput,
  GetAttributeValuesCommand,
} from "./commands/GetAttributeValuesCommand";
import {
  type GetPriceListFileUrlCommandInput,
  type GetPriceListFileUrlCommandOutput,
  GetPriceListFileUrlCommand,
} from "./commands/GetPriceListFileUrlCommand";
import {
  type GetProductsCommandInput,
  type GetProductsCommandOutput,
  GetProductsCommand,
} from "./commands/GetProductsCommand";
import {
  type ListPriceListsCommandInput,
  type ListPriceListsCommandOutput,
  ListPriceListsCommand,
} from "./commands/ListPriceListsCommand";
import { paginateDescribeServices } from "./pagination/DescribeServicesPaginator";
import { paginateGetAttributeValues } from "./pagination/GetAttributeValuesPaginator";
import { paginateGetProducts } from "./pagination/GetProductsPaginator";
import { paginateListPriceLists } from "./pagination/ListPriceListsPaginator";
import { PricingClient } from "./PricingClient";

const commands = {
  DescribeServicesCommand,
  GetAttributeValuesCommand,
  GetPriceListFileUrlCommand,
  GetProductsCommand,
  ListPriceListsCommand,
};
const paginators = {
  paginateDescribeServices,
  paginateGetAttributeValues,
  paginateGetProducts,
  paginateListPriceLists,
};

/**
 * @public
 */
export interface PricingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Pricing {
  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    options?: PricingRequestOptions
  ): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  describeServices(
    args: DescribeServicesCommandInput,
    options: PricingRequestOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttributeValuesCommand}
   */
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options?: PricingRequestOptions
  ): Promise<GetAttributeValuesCommandOutput>;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options: PricingRequestOptions,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPriceListFileUrlCommand}
   */
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options?: PricingRequestOptions
  ): Promise<GetPriceListFileUrlCommandOutput>;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options: PricingRequestOptions,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductsCommand}
   */
  getProducts(
    args: GetProductsCommandInput,
    options?: PricingRequestOptions
  ): Promise<GetProductsCommandOutput>;
  getProducts(
    args: GetProductsCommandInput,
    cb: (err: any, data?: GetProductsCommandOutput) => void
  ): void;
  getProducts(
    args: GetProductsCommandInput,
    options: PricingRequestOptions,
    cb: (err: any, data?: GetProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPriceListsCommand}
   */
  listPriceLists(
    args: ListPriceListsCommandInput,
    options?: PricingRequestOptions
  ): Promise<ListPriceListsCommandOutput>;
  listPriceLists(
    args: ListPriceListsCommandInput,
    cb: (err: any, data?: ListPriceListsCommandOutput) => void
  ): void;
  listPriceLists(
    args: ListPriceListsCommandInput,
    options: PricingRequestOptions,
    cb: (err: any, data?: ListPriceListsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeServicesCommandOutput}.
   */
  paginateDescribeServices(
    args?: DescribeServicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeServicesCommandOutput>;

  /**
   * @see {@link GetAttributeValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAttributeValuesCommandOutput}.
   */
  paginateGetAttributeValues(
    args: GetAttributeValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAttributeValuesCommandOutput>;

  /**
   * @see {@link GetProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetProductsCommandOutput}.
   */
  paginateGetProducts(
    args: GetProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetProductsCommandOutput>;

  /**
   * @see {@link ListPriceListsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPriceListsCommandOutput}.
   */
  paginateListPriceLists(
    args: ListPriceListsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPriceListsCommandOutput>;
}

/**
 * The Amazon Web Services Price List API is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as `Location`, `Storage Class`, and `Operating System`, and provides prices at the SKU level. You can use the Amazon Web Services Price List to do the following:
 *
 * - Build cost control and scenario planning tools
 * - Reconcile billing data
 * - Forecast future spend for budgeting purposes
 * - Provide cost benefit analysis that compare your internal workloads with Amazon Web Services
 *
 * Use `GetServices` without a service code to retrieve the service codes for all Amazon Web Services services, then `GetServices` with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use `GetAttributeValues` to see what values are available for an attribute. With the service code and an attribute name and value, you can use `GetProducts` to find specific products that you're interested in, such as an `AmazonEC2` instance, with a `Provisioned IOPS` `volumeType`.
 *
 * For more information, see [Using the Amazon Web Services Price List API](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html) in the *Billing User Guide*.
 *
 * @public
 */
export class Pricing extends PricingClient implements Pricing {}
createAggregatedClient(commands, Pricing, { paginators });
