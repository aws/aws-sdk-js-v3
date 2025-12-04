// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRouterInputsCommand,
  ListRouterInputsCommandInput,
  ListRouterInputsCommandOutput,
} from "../commands/ListRouterInputsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRouterInputs: (
  config: MediaConnectPaginationConfiguration,
  input: ListRouterInputsCommandInput,
  ...rest: any[]
) => Paginator<ListRouterInputsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListRouterInputsCommandInput,
  ListRouterInputsCommandOutput
>(MediaConnectClient, ListRouterInputsCommand, "NextToken", "NextToken", "MaxResults");
