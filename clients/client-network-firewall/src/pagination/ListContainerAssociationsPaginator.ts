// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContainerAssociationsCommand,
  ListContainerAssociationsCommandInput,
  ListContainerAssociationsCommandOutput,
} from "../commands/ListContainerAssociationsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import type { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerAssociations: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListContainerAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListContainerAssociationsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListContainerAssociationsCommandInput,
  ListContainerAssociationsCommandOutput
>(NetworkFirewallClient, ListContainerAssociationsCommand, "NextToken", "NextToken", "MaxResults");
