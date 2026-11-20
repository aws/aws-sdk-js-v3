// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProtectedResourceCoveragesCommand,
  ListProtectedResourceCoveragesCommandInput,
  ListProtectedResourceCoveragesCommandOutput,
} from "../commands/ListProtectedResourceCoveragesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectedResourceCoverages: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListProtectedResourceCoveragesCommandInput,
  ...rest: any[]
) => Paginator<ListProtectedResourceCoveragesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListProtectedResourceCoveragesCommandInput,
  ListProtectedResourceCoveragesCommandOutput
>(NetworkSecurityManagerClient, ListProtectedResourceCoveragesCommand, "nextToken", "nextToken", "maxResults");
