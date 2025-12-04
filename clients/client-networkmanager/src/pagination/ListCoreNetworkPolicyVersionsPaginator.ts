// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "../commands/ListCoreNetworkPolicyVersionsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreNetworkPolicyVersions: (
  config: NetworkManagerPaginationConfiguration,
  input: ListCoreNetworkPolicyVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListCoreNetworkPolicyVersionsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput
>(NetworkManagerClient, ListCoreNetworkPolicyVersionsCommand, "NextToken", "NextToken", "MaxResults");
