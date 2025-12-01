// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchVulnerabilitiesCommand,
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "../commands/SearchVulnerabilitiesCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchVulnerabilities: (
  config: Inspector2PaginationConfiguration,
  input: SearchVulnerabilitiesCommandInput,
  ...rest: any[]
) => Paginator<SearchVulnerabilitiesCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput
>(Inspector2Client, SearchVulnerabilitiesCommand, "nextToken", "nextToken", "");
