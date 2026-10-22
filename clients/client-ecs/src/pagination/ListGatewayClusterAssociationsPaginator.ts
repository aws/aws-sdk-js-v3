// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGatewayClusterAssociationsCommand,
  ListGatewayClusterAssociationsCommandInput,
  ListGatewayClusterAssociationsCommandOutput,
} from "../commands/ListGatewayClusterAssociationsCommand";
import { ECSClient } from "../ECSClient";
import type { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayClusterAssociations: (
  config: ECSPaginationConfiguration,
  input: ListGatewayClusterAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayClusterAssociationsCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListGatewayClusterAssociationsCommandInput,
  ListGatewayClusterAssociationsCommandOutput
>(ECSClient, ListGatewayClusterAssociationsCommand, "nextToken", "nextToken", "maxResults");
