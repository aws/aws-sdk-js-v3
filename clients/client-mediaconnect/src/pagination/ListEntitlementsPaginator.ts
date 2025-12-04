// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "../commands/ListEntitlementsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntitlements: (
  config: MediaConnectPaginationConfiguration,
  input: ListEntitlementsCommandInput,
  ...rest: any[]
) => Paginator<ListEntitlementsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput
>(MediaConnectClient, ListEntitlementsCommand, "NextToken", "NextToken", "MaxResults");
