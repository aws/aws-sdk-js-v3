// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasourcePackagesCommand,
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput,
} from "../commands/ListDatasourcePackagesCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasourcePackages: (
  config: DetectivePaginationConfiguration,
  input: ListDatasourcePackagesCommandInput,
  ...rest: any[]
) => Paginator<ListDatasourcePackagesCommandOutput> = createPaginator<
  DetectivePaginationConfiguration,
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput
>(DetectiveClient, ListDatasourcePackagesCommand, "NextToken", "NextToken", "MaxResults");
