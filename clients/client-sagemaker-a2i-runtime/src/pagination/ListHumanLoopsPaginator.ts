// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHumanLoopsCommand,
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput,
} from "../commands/ListHumanLoopsCommand";
import { SageMakerA2IRuntimeClient } from "../SageMakerA2IRuntimeClient";
import { SageMakerA2IRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHumanLoops: (
  config: SageMakerA2IRuntimePaginationConfiguration,
  input: ListHumanLoopsCommandInput,
  ...rest: any[]
) => Paginator<ListHumanLoopsCommandOutput> = createPaginator<
  SageMakerA2IRuntimePaginationConfiguration,
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput
>(SageMakerA2IRuntimeClient, ListHumanLoopsCommand, "NextToken", "NextToken", "MaxResults");
