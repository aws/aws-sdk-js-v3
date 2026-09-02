// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlexComponentsCommand,
  ListFlexComponentsCommandInput,
  ListFlexComponentsCommandOutput,
} from "../commands/ListFlexComponentsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlexComponents: (
  config: OdbPaginationConfiguration,
  input: ListFlexComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListFlexComponentsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListFlexComponentsCommandInput,
  ListFlexComponentsCommandOutput
>(OdbClient, ListFlexComponentsCommand, "nextToken", "nextToken", "maxResults");
