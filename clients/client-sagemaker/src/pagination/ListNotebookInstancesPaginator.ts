// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotebookInstancesCommand,
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "../commands/ListNotebookInstancesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotebookInstances: (
  config: SageMakerPaginationConfiguration,
  input: ListNotebookInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListNotebookInstancesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput
>(SageMakerClient, ListNotebookInstancesCommand, "NextToken", "NextToken", "MaxResults");
