// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetLinkAssociationsCommand,
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "../commands/GetLinkAssociationsCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLinkAssociations: (
  config: NetworkManagerPaginationConfiguration,
  input: GetLinkAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetLinkAssociationsCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput
>(NetworkManagerClient, GetLinkAssociationsCommand, "NextToken", "NextToken", "MaxResults");
