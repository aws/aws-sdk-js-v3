// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSharesCommand, ListSharesCommandInput, ListSharesCommandOutput } from "../commands/ListSharesCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListShares: (
  config: OmicsPaginationConfiguration,
  input: ListSharesCommandInput,
  ...rest: any[]
) => Paginator<ListSharesCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListSharesCommandInput,
  ListSharesCommandOutput
>(OmicsClient, ListSharesCommand, "nextToken", "nextToken", "maxResults");
