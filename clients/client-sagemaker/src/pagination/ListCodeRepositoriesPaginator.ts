// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeRepositoriesCommand,
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "../commands/ListCodeRepositoriesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeRepositories: (
  config: SageMakerPaginationConfiguration,
  input: ListCodeRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<ListCodeRepositoriesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput
>(SageMakerClient, ListCodeRepositoriesCommand, "NextToken", "NextToken", "MaxResults");
