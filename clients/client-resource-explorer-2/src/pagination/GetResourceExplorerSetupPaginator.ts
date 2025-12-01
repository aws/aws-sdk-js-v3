// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceExplorerSetupCommand,
  GetResourceExplorerSetupCommandInput,
  GetResourceExplorerSetupCommandOutput,
} from "../commands/GetResourceExplorerSetupCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceExplorerSetup: (
  config: ResourceExplorer2PaginationConfiguration,
  input: GetResourceExplorerSetupCommandInput,
  ...rest: any[]
) => Paginator<GetResourceExplorerSetupCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  GetResourceExplorerSetupCommandInput,
  GetResourceExplorerSetupCommandOutput
>(ResourceExplorer2Client, GetResourceExplorerSetupCommand, "NextToken", "NextToken", "MaxResults");
