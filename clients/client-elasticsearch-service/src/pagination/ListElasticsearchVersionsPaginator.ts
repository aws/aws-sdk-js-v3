// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "../commands/ListElasticsearchVersionsCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListElasticsearchVersions: (
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListElasticsearchVersionsCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput
>(ElasticsearchServiceClient, ListElasticsearchVersionsCommand, "NextToken", "NextToken", "MaxResults");
