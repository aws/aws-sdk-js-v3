// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkforcesCommand,
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
} from "../commands/ListWorkforcesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkforces: (
  config: SageMakerPaginationConfiguration,
  input: ListWorkforcesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkforcesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput
>(SageMakerClient, ListWorkforcesCommand, "NextToken", "NextToken", "MaxResults");
