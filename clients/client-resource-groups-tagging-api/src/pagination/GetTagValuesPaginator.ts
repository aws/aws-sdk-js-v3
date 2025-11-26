// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTagValuesCommand,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput,
} from "../commands/GetTagValuesCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTagValues: (
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetTagValuesCommandInput,
  ...rest: any[]
) => Paginator<GetTagValuesCommandOutput> = createPaginator<
  ResourceGroupsTaggingAPIPaginationConfiguration,
  GetTagValuesCommandInput,
  GetTagValuesCommandOutput
>(ResourceGroupsTaggingAPIClient, GetTagValuesCommand, "PaginationToken", "PaginationToken", "");
