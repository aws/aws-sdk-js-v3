// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdapterVersionsCommand,
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput,
} from "../commands/ListAdapterVersionsCommand";
import { TextractClient } from "../TextractClient";
import { TextractPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdapterVersions: (
  config: TextractPaginationConfiguration,
  input: ListAdapterVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAdapterVersionsCommandOutput> = createPaginator<
  TextractPaginationConfiguration,
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput
>(TextractClient, ListAdapterVersionsCommand, "NextToken", "NextToken", "MaxResults");
