// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppVersionAppComponentsCommand,
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput,
} from "../commands/ListAppVersionAppComponentsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppVersionAppComponents: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionAppComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListAppVersionAppComponentsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput
>(ResiliencehubClient, ListAppVersionAppComponentsCommand, "nextToken", "nextToken", "maxResults");
