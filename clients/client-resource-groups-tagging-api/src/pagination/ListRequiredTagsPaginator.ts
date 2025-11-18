// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRequiredTagsCommand,
  ListRequiredTagsCommandInput,
  ListRequiredTagsCommandOutput,
} from "../commands/ListRequiredTagsCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRequiredTags: (
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: ListRequiredTagsCommandInput,
  ...rest: any[]
) => Paginator<ListRequiredTagsCommandOutput> = createPaginator<
  ResourceGroupsTaggingAPIPaginationConfiguration,
  ListRequiredTagsCommandInput,
  ListRequiredTagsCommandOutput
>(ResourceGroupsTaggingAPIClient, ListRequiredTagsCommand, "NextToken", "NextToken", "MaxResults");
