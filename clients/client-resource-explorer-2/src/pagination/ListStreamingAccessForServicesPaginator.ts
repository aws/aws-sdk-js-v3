// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStreamingAccessForServicesCommand,
  ListStreamingAccessForServicesCommandInput,
  ListStreamingAccessForServicesCommandOutput,
} from "../commands/ListStreamingAccessForServicesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamingAccessForServices: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListStreamingAccessForServicesCommandInput,
  ...rest: any[]
) => Paginator<ListStreamingAccessForServicesCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListStreamingAccessForServicesCommandInput,
  ListStreamingAccessForServicesCommandOutput
>(ResourceExplorer2Client, ListStreamingAccessForServicesCommand, "NextToken", "NextToken", "MaxResults");
