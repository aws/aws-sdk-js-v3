// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlowAssociationsCommand,
  ListFlowAssociationsCommandInput,
  ListFlowAssociationsCommandOutput,
} from "../commands/ListFlowAssociationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowAssociations: (
  config: ConnectPaginationConfiguration,
  input: ListFlowAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowAssociationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListFlowAssociationsCommandInput,
  ListFlowAssociationsCommandOutput
>(ConnectClient, ListFlowAssociationsCommand, "NextToken", "NextToken", "MaxResults");
