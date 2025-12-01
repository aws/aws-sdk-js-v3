// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "../commands/ListNotebookInstanceLifecycleConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotebookInstanceLifecycleConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListNotebookInstanceLifecycleConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput
>(SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand, "NextToken", "NextToken", "MaxResults");
