// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "../commands/ListSubscribedWorkteamsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscribedWorkteams: (
  config: SageMakerPaginationConfiguration,
  input: ListSubscribedWorkteamsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscribedWorkteamsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput
>(SageMakerClient, ListSubscribedWorkteamsCommand, "NextToken", "NextToken", "MaxResults");
