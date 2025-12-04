// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDomainControllersCommand,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "../commands/DescribeDomainControllersCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDomainControllers: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeDomainControllersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDomainControllersCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput
>(DirectoryServiceClient, DescribeDomainControllersCommand, "NextToken", "NextToken", "Limit");
