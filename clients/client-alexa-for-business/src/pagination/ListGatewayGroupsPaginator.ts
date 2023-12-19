// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListGatewayGroupsCommand,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
} from "../commands/ListGatewayGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayGroups: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewayGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayGroupsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput
>(AlexaForBusinessClient, ListGatewayGroupsCommand, "NextToken", "NextToken", "MaxResults");
