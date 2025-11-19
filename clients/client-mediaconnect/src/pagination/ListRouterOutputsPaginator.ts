// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListRouterOutputsCommand,
  ListRouterOutputsCommandInput,
  ListRouterOutputsCommandOutput,
} from "../commands/ListRouterOutputsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRouterOutputs: (
  config: MediaConnectPaginationConfiguration,
  input: ListRouterOutputsCommandInput,
  ...rest: any[]
) => Paginator<ListRouterOutputsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListRouterOutputsCommandInput,
  ListRouterOutputsCommandOutput
>(MediaConnectClient, ListRouterOutputsCommand, "NextToken", "NextToken", "MaxResults");
