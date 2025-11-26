// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCidrBlocksCommand,
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
} from "../commands/ListCidrBlocksCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCidrBlocks: (
  config: Route53PaginationConfiguration,
  input: ListCidrBlocksCommandInput,
  ...rest: any[]
) => Paginator<ListCidrBlocksCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput
>(Route53Client, ListCidrBlocksCommand, "NextToken", "NextToken", "MaxResults");
