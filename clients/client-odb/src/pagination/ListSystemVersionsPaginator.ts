// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSystemVersionsCommand,
  ListSystemVersionsCommandInput,
  ListSystemVersionsCommandOutput,
} from "../commands/ListSystemVersionsCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSystemVersions: (
  config: OdbPaginationConfiguration,
  input: ListSystemVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListSystemVersionsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListSystemVersionsCommandInput,
  ListSystemVersionsCommandOutput
>(OdbClient, ListSystemVersionsCommand, "nextToken", "nextToken", "maxResults");
