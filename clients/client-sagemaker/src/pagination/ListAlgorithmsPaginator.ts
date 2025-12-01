// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAlgorithmsCommand,
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput,
} from "../commands/ListAlgorithmsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlgorithms: (
  config: SageMakerPaginationConfiguration,
  input: ListAlgorithmsCommandInput,
  ...rest: any[]
) => Paginator<ListAlgorithmsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput
>(SageMakerClient, ListAlgorithmsCommand, "NextToken", "NextToken", "MaxResults");
