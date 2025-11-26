// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowTypesCommand,
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput,
} from "../commands/ListWorkflowTypesCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowTypes: (
  config: SWFPaginationConfiguration,
  input: ListWorkflowTypesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowTypesCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput
>(SWFClient, ListWorkflowTypesCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
