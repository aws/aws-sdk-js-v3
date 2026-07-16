// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type GetEstimatedCarbonEmissionsCommandInput,
  type GetEstimatedCarbonEmissionsCommandOutput,
  GetEstimatedCarbonEmissionsCommand,
} from "./commands/GetEstimatedCarbonEmissionsCommand";
import {
  type GetEstimatedCarbonEmissionsDimensionValuesCommandInput,
  type GetEstimatedCarbonEmissionsDimensionValuesCommandOutput,
  GetEstimatedCarbonEmissionsDimensionValuesCommand,
} from "./commands/GetEstimatedCarbonEmissionsDimensionValuesCommand";
import {
  type GetEstimatedWaterAllocationCommandInput,
  type GetEstimatedWaterAllocationCommandOutput,
  GetEstimatedWaterAllocationCommand,
} from "./commands/GetEstimatedWaterAllocationCommand";
import {
  type GetEstimatedWaterAllocationDimensionValuesCommandInput,
  type GetEstimatedWaterAllocationDimensionValuesCommandOutput,
  GetEstimatedWaterAllocationDimensionValuesCommand,
} from "./commands/GetEstimatedWaterAllocationDimensionValuesCommand";
import {
  paginateGetEstimatedCarbonEmissionsDimensionValues,
} from "./pagination/GetEstimatedCarbonEmissionsDimensionValuesPaginator";
import { paginateGetEstimatedCarbonEmissions } from "./pagination/GetEstimatedCarbonEmissionsPaginator";
import {
  paginateGetEstimatedWaterAllocationDimensionValues,
} from "./pagination/GetEstimatedWaterAllocationDimensionValuesPaginator";
import { paginateGetEstimatedWaterAllocation } from "./pagination/GetEstimatedWaterAllocationPaginator";
import { SustainabilityClient } from "./SustainabilityClient";

const commands = {
  GetEstimatedCarbonEmissionsCommand,
  GetEstimatedCarbonEmissionsDimensionValuesCommand,
  GetEstimatedWaterAllocationCommand,
  GetEstimatedWaterAllocationDimensionValuesCommand,
};
const paginators = {
  paginateGetEstimatedCarbonEmissions,
  paginateGetEstimatedCarbonEmissionsDimensionValues,
  paginateGetEstimatedWaterAllocation,
  paginateGetEstimatedWaterAllocationDimensionValues,
};

export interface Sustainability {
  /**
   * @see {@link GetEstimatedCarbonEmissionsCommand}
   */
  getEstimatedCarbonEmissions(
    args: GetEstimatedCarbonEmissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEstimatedCarbonEmissionsCommandOutput>;
  getEstimatedCarbonEmissions(
    args: GetEstimatedCarbonEmissionsCommandInput,
    cb: (err: any, data?: GetEstimatedCarbonEmissionsCommandOutput) => void
  ): void;
  getEstimatedCarbonEmissions(
    args: GetEstimatedCarbonEmissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEstimatedCarbonEmissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEstimatedCarbonEmissionsDimensionValuesCommand}
   */
  getEstimatedCarbonEmissionsDimensionValues(
    args: GetEstimatedCarbonEmissionsDimensionValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEstimatedCarbonEmissionsDimensionValuesCommandOutput>;
  getEstimatedCarbonEmissionsDimensionValues(
    args: GetEstimatedCarbonEmissionsDimensionValuesCommandInput,
    cb: (err: any, data?: GetEstimatedCarbonEmissionsDimensionValuesCommandOutput) => void
  ): void;
  getEstimatedCarbonEmissionsDimensionValues(
    args: GetEstimatedCarbonEmissionsDimensionValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEstimatedCarbonEmissionsDimensionValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEstimatedWaterAllocationCommand}
   */
  getEstimatedWaterAllocation(
    args: GetEstimatedWaterAllocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEstimatedWaterAllocationCommandOutput>;
  getEstimatedWaterAllocation(
    args: GetEstimatedWaterAllocationCommandInput,
    cb: (err: any, data?: GetEstimatedWaterAllocationCommandOutput) => void
  ): void;
  getEstimatedWaterAllocation(
    args: GetEstimatedWaterAllocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEstimatedWaterAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEstimatedWaterAllocationDimensionValuesCommand}
   */
  getEstimatedWaterAllocationDimensionValues(
    args: GetEstimatedWaterAllocationDimensionValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEstimatedWaterAllocationDimensionValuesCommandOutput>;
  getEstimatedWaterAllocationDimensionValues(
    args: GetEstimatedWaterAllocationDimensionValuesCommandInput,
    cb: (err: any, data?: GetEstimatedWaterAllocationDimensionValuesCommandOutput) => void
  ): void;
  getEstimatedWaterAllocationDimensionValues(
    args: GetEstimatedWaterAllocationDimensionValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEstimatedWaterAllocationDimensionValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEstimatedCarbonEmissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEstimatedCarbonEmissionsCommandOutput}.
   */
  paginateGetEstimatedCarbonEmissions(
    args: GetEstimatedCarbonEmissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEstimatedCarbonEmissionsCommandOutput>;

  /**
   * @see {@link GetEstimatedCarbonEmissionsDimensionValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEstimatedCarbonEmissionsDimensionValuesCommandOutput}.
   */
  paginateGetEstimatedCarbonEmissionsDimensionValues(
    args: GetEstimatedCarbonEmissionsDimensionValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEstimatedCarbonEmissionsDimensionValuesCommandOutput>;

  /**
   * @see {@link GetEstimatedWaterAllocationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEstimatedWaterAllocationCommandOutput}.
   */
  paginateGetEstimatedWaterAllocation(
    args: GetEstimatedWaterAllocationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEstimatedWaterAllocationCommandOutput>;

  /**
   * @see {@link GetEstimatedWaterAllocationDimensionValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEstimatedWaterAllocationDimensionValuesCommandOutput}.
   */
  paginateGetEstimatedWaterAllocationDimensionValues(
    args: GetEstimatedWaterAllocationDimensionValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEstimatedWaterAllocationDimensionValuesCommandOutput>;
}

/**
 * <p>The AWS Sustainability service provides programmatic access to estimated environmental impact data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the environmental impact of your cloud infrastructure over time. </p> <p>With the AWS Sustainability service, you can:</p> <ul> <li> <p>Retrieve estimated carbon emissions and water allocation for your Amazon Web Services usage across different time periods </p> </li> <li> <p>Group environmental impact data by dimensions such as account, region, and service</p> </li> <li> <p>Filter environmental impact data to focus on specific accounts, regions, or services</p> </li> <li> <p>Access multiple carbon emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM) </p> </li> <li> <p>Aggregate environmental impact data at various time granularities including monthly, quarterly, and yearly periods </p> </li> </ul> <p> The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account. </p>
 * @public
 */
export class Sustainability extends SustainabilityClient implements Sustainability {}
createAggregatedClient(commands, Sustainability, { paginators });
