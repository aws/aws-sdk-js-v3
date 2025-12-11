// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetNetworkResourceRelationshipsCommand,
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput,
} from "../commands/GetNetworkResourceRelationshipsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetNetworkResourceRelationships: (
  config: NetworkManagerPaginationConfiguration,
  input: GetNetworkResourceRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<GetNetworkResourceRelationshipsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput
>(NetworkManagerClient, GetNetworkResourceRelationshipsCommand, "NextToken", "NextToken", "MaxResults");
