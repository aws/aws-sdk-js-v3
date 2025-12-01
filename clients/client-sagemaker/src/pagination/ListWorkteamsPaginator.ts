// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkteamsCommand,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
} from "../commands/ListWorkteamsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkteams: (
  config: SageMakerPaginationConfiguration,
  input: ListWorkteamsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkteamsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput
>(SageMakerClient, ListWorkteamsCommand, "NextToken", "NextToken", "MaxResults");
