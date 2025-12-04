// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelCardsCommand,
  ListModelCardsCommandInput,
  ListModelCardsCommandOutput,
} from "../commands/ListModelCardsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelCards: (
  config: SageMakerPaginationConfiguration,
  input: ListModelCardsCommandInput,
  ...rest: any[]
) => Paginator<ListModelCardsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelCardsCommandInput,
  ListModelCardsCommandOutput
>(SageMakerClient, ListModelCardsCommand, "NextToken", "NextToken", "MaxResults");
