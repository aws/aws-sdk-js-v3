// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "../commands/ListElasticsearchInstanceTypesCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListElasticsearchInstanceTypes: (
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListElasticsearchInstanceTypesCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput
>(ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
