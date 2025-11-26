// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "../commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReservedNodeExchangeConfigurationOptions: (
  config: RedshiftPaginationConfiguration,
  input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
  ...rest: any[]
) => Paginator<GetReservedNodeExchangeConfigurationOptionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput
>(RedshiftClient, GetReservedNodeExchangeConfigurationOptionsCommand, "Marker", "Marker", "MaxRecords");
