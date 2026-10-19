// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceAssociationsCommand,
  ListResourceAssociationsCommandInput,
  ListResourceAssociationsCommandOutput,
} from "../commands/ListResourceAssociationsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceAssociations: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceAssociationsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListResourceAssociationsCommandInput,
  ListResourceAssociationsCommandOutput
>(NetworkSecurityManagerClient, ListResourceAssociationsCommand, "nextToken", "nextToken", "maxResults");
