// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFeedsCommand, ListFeedsCommandInput, ListFeedsCommandOutput } from "../commands/ListFeedsCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFeeds: (
  config: ElementalInferencePaginationConfiguration,
  input: ListFeedsCommandInput,
  ...rest: any[]
) => Paginator<ListFeedsCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListFeedsCommandInput,
  ListFeedsCommandOutput
>(ElementalInferenceClient, ListFeedsCommand, "nextToken", "nextToken", "maxResults");
