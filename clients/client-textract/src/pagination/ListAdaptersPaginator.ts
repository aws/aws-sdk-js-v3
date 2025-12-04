// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdaptersCommand,
  ListAdaptersCommandInput,
  ListAdaptersCommandOutput,
} from "../commands/ListAdaptersCommand";
import { TextractClient } from "../TextractClient";
import { TextractPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdapters: (
  config: TextractPaginationConfiguration,
  input: ListAdaptersCommandInput,
  ...rest: any[]
) => Paginator<ListAdaptersCommandOutput> = createPaginator<
  TextractPaginationConfiguration,
  ListAdaptersCommandInput,
  ListAdaptersCommandOutput
>(TextractClient, ListAdaptersCommand, "NextToken", "NextToken", "MaxResults");
