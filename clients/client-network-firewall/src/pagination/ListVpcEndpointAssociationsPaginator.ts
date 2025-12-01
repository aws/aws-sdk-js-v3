// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVpcEndpointAssociationsCommand,
  ListVpcEndpointAssociationsCommandInput,
  ListVpcEndpointAssociationsCommandOutput,
} from "../commands/ListVpcEndpointAssociationsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcEndpointAssociations: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListVpcEndpointAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcEndpointAssociationsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListVpcEndpointAssociationsCommandInput,
  ListVpcEndpointAssociationsCommandOutput
>(NetworkFirewallClient, ListVpcEndpointAssociationsCommand, "NextToken", "NextToken", "MaxResults");
