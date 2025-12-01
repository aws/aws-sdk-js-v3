// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIpRoutesCommand,
  ListIpRoutesCommandInput,
  ListIpRoutesCommandOutput,
} from "../commands/ListIpRoutesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIpRoutes: (
  config: DirectoryServicePaginationConfiguration,
  input: ListIpRoutesCommandInput,
  ...rest: any[]
) => Paginator<ListIpRoutesCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  ListIpRoutesCommandInput,
  ListIpRoutesCommandOutput
>(DirectoryServiceClient, ListIpRoutesCommand, "NextToken", "NextToken", "Limit");
