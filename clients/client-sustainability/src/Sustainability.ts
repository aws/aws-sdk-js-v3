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
  paginateGetEstimatedCarbonEmissionsDimensionValues,
} from "./pagination/GetEstimatedCarbonEmissionsDimensionValuesPaginator";
import { paginateGetEstimatedCarbonEmissions } from "./pagination/GetEstimatedCarbonEmissionsPaginator";
import { SustainabilityClient } from "./SustainabilityClient";

const commands = {
  GetEstimatedCarbonEmissionsCommand,
  GetEstimatedCarbonEmissionsDimensionValuesCommand,
};
const paginators = {
  paginateGetEstimatedCarbonEmissions,
  paginateGetEstimatedCarbonEmissionsDimensionValues,
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
}

/**
 * <p>The AWS Sustainability service provides programmatic access to estimated carbon emissions data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the carbon footprint of your cloud infrastructure over time. </p> <p>With the AWS Sustainability service, you can:</p> <ul> <li> <p>Retrieve estimated carbon emissions for your Amazon Web Services usage across different time periods </p> </li> <li> <p>Group emissions data by dimensions such as account, region, and service</p> </li> <li> <p>Filter emissions data to focus on specific accounts, regions, or services</p> </li> <li> <p>Access multiple emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM) </p> </li> <li> <p>Aggregate emissions data at various time granularities including monthly, quarterly, and yearly periods </p> </li> </ul> <p> The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account. </p> <p> All emissions values are calculated using methodologies aligned with the Greenhouse Gas (GHG) Protocol and are provided in metric tons of carbon dioxide-equivalent (MTCO2e). </p>
 * @public
 */
export class Sustainability extends SustainabilityClient implements Sustainability {}
createAggregatedClient(commands, Sustainability, { paginators });
