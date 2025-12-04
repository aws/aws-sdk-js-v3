// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceTypeDetailsCommand,
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
} from "../commands/ListInstanceTypeDetailsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceTypeDetails: (
  config: OpenSearchPaginationConfiguration,
  input: ListInstanceTypeDetailsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceTypeDetailsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput
>(OpenSearchClient, ListInstanceTypeDetailsCommand, "NextToken", "NextToken", "MaxResults");
