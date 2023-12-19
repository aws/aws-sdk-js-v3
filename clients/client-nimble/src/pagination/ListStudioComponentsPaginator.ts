// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStudioComponentsCommand,
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "../commands/ListStudioComponentsCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudioComponents: (
  config: NimblePaginationConfiguration,
  input: ListStudioComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListStudioComponentsCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput
>(NimbleClient, ListStudioComponentsCommand, "nextToken", "nextToken", "maxResults");
