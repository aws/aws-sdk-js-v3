// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "../commands/ListBranchesCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBranches: (
  config: AmplifyPaginationConfiguration,
  input: ListBranchesCommandInput,
  ...rest: any[]
) => Paginator<ListBranchesCommandOutput> = createPaginator<
  AmplifyPaginationConfiguration,
  ListBranchesCommandInput,
  ListBranchesCommandOutput
>(AmplifyClient, ListBranchesCommand, "nextToken", "nextToken", "maxResults");
