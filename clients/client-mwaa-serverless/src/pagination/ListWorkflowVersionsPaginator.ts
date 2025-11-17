// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "../commands/ListWorkflowVersionsCommand";
import { MWAAServerlessClient } from "../MWAAServerlessClient";
import { MWAAServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowVersions: (
  config: MWAAServerlessPaginationConfiguration,
  input: ListWorkflowVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowVersionsCommandOutput> = createPaginator<
  MWAAServerlessPaginationConfiguration,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput
>(MWAAServerlessClient, ListWorkflowVersionsCommand, "NextToken", "NextToken", "MaxResults");
