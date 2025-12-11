// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActions: (
  config: SageMakerPaginationConfiguration,
  input: ListActionsCommandInput,
  ...rest: any[]
) => Paginator<ListActionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListActionsCommandInput,
  ListActionsCommandOutput
>(SageMakerClient, ListActionsCommand, "NextToken", "NextToken", "MaxResults");
