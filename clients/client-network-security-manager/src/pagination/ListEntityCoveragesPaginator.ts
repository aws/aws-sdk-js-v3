// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntityCoveragesCommand,
  ListEntityCoveragesCommandInput,
  ListEntityCoveragesCommandOutput,
} from "../commands/ListEntityCoveragesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntityCoverages: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListEntityCoveragesCommandInput,
  ...rest: any[]
) => Paginator<ListEntityCoveragesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListEntityCoveragesCommandInput,
  ListEntityCoveragesCommandOutput
>(NetworkSecurityManagerClient, ListEntityCoveragesCommand, "nextToken", "nextToken", "maxResults");
