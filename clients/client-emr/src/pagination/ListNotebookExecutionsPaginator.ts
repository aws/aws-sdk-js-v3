// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "../commands/ListNotebookExecutionsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotebookExecutions: (
  config: EMRPaginationConfiguration,
  input: ListNotebookExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListNotebookExecutionsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput
>(EMRClient, ListNotebookExecutionsCommand, "Marker", "Marker", "");
