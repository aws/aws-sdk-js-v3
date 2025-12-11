// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVcenterClientsCommand,
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "../commands/DescribeVcenterClientsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVcenterClients: (
  config: MgnPaginationConfiguration,
  input: DescribeVcenterClientsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVcenterClientsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput
>(MgnClient, DescribeVcenterClientsCommand, "nextToken", "nextToken", "maxResults");
