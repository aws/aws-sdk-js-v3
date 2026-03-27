// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelCardVersionsCommand,
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "../commands/ListModelCardVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelCardVersions: (
  config: SageMakerPaginationConfiguration,
  input: ListModelCardVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListModelCardVersionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput
>(SageMakerClient, ListModelCardVersionsCommand, "NextToken", "NextToken", "MaxResults");
