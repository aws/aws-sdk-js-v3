// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSetRevisionsCommand,
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "../commands/ListDataSetRevisionsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSetRevisions: (
  config: DataExchangePaginationConfiguration,
  input: ListDataSetRevisionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetRevisionsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput
>(DataExchangeClient, ListDataSetRevisionsCommand, "NextToken", "NextToken", "MaxResults");
