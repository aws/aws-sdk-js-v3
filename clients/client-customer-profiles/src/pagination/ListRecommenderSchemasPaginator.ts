// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommenderSchemasCommand,
  ListRecommenderSchemasCommandInput,
  ListRecommenderSchemasCommandOutput,
} from "../commands/ListRecommenderSchemasCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import type { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommenderSchemas: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListRecommenderSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListRecommenderSchemasCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListRecommenderSchemasCommandInput,
  ListRecommenderSchemasCommandOutput
>(CustomerProfilesClient, ListRecommenderSchemasCommand, "NextToken", "NextToken", "MaxResults");
