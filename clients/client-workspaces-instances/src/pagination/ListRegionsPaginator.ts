// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import { WorkspacesInstancesClient } from "../WorkspacesInstancesClient";
import { WorkspacesInstancesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegions: (
  config: WorkspacesInstancesPaginationConfiguration,
  input: ListRegionsCommandInput,
  ...rest: any[]
) => Paginator<ListRegionsCommandOutput> = createPaginator<
  WorkspacesInstancesPaginationConfiguration,
  ListRegionsCommandInput,
  ListRegionsCommandOutput
>(WorkspacesInstancesClient, ListRegionsCommand, "NextToken", "NextToken", "MaxResults");
