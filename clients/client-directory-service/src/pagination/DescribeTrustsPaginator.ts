// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrustsCommand,
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput,
} from "../commands/DescribeTrustsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrusts: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeTrustsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrustsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput
>(DirectoryServiceClient, DescribeTrustsCommand, "NextToken", "NextToken", "Limit");
