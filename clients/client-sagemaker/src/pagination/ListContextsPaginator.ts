// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextsCommand,
  ListContextsCommandInput,
  ListContextsCommandOutput,
} from "../commands/ListContextsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContexts: (
  config: SageMakerPaginationConfiguration,
  input: ListContextsCommandInput,
  ...rest: any[]
) => Paginator<ListContextsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListContextsCommandInput,
  ListContextsCommandOutput
>(SageMakerClient, ListContextsCommand, "NextToken", "NextToken", "MaxResults");
