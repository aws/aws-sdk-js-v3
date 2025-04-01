// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPersonalAccessTokensCommand,
  ListPersonalAccessTokensCommandInput,
  ListPersonalAccessTokensCommandOutput,
} from "../commands/ListPersonalAccessTokensCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPersonalAccessTokens: (
  config: WorkMailPaginationConfiguration,
  input: ListPersonalAccessTokensCommandInput,
  ...rest: any[]
) => Paginator<ListPersonalAccessTokensCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListPersonalAccessTokensCommandInput,
  ListPersonalAccessTokensCommandOutput
>(WorkMailClient, ListPersonalAccessTokensCommand, "NextToken", "NextToken", "MaxResults");
