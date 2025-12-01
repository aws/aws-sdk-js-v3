// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistriesCommand,
  DescribeRegistriesCommandInput,
  DescribeRegistriesCommandOutput,
} from "../commands/DescribeRegistriesCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistries: (
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeRegistriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistriesCommandOutput> = createPaginator<
  ECRPUBLICPaginationConfiguration,
  DescribeRegistriesCommandInput,
  DescribeRegistriesCommandOutput
>(ECRPUBLICClient, DescribeRegistriesCommand, "nextToken", "nextToken", "maxResults");
