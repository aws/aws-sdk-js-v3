// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTags: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListTagsCommandInput,
  ...rest: any[]
) => Paginator<ListTagsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListTagsCommandInput,
  ListTagsCommandOutput
>(AlexaForBusinessClient, ListTagsCommand, "NextToken", "NextToken", "MaxResults");
