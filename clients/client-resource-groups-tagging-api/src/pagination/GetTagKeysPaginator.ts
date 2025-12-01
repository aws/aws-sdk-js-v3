// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetTagKeysCommand, GetTagKeysCommandInput, GetTagKeysCommandOutput } from "../commands/GetTagKeysCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTagKeys: (
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetTagKeysCommandInput,
  ...rest: any[]
) => Paginator<GetTagKeysCommandOutput> = createPaginator<
  ResourceGroupsTaggingAPIPaginationConfiguration,
  GetTagKeysCommandInput,
  GetTagKeysCommandOutput
>(ResourceGroupsTaggingAPIClient, GetTagKeysCommand, "PaginationToken", "PaginationToken", "");
