// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVmEntitlementsCommand,
  ListVmEntitlementsCommandInput,
  ListVmEntitlementsCommandOutput,
} from "../commands/ListVmEntitlementsCommand";
import { EvsClient } from "../EvsClient";
import type { EvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVmEntitlements: (
  config: EvsPaginationConfiguration,
  input: ListVmEntitlementsCommandInput,
  ...rest: any[]
) => Paginator<ListVmEntitlementsCommandOutput> = createPaginator<
  EvsPaginationConfiguration,
  ListVmEntitlementsCommandInput,
  ListVmEntitlementsCommandOutput
>(EvsClient, ListVmEntitlementsCommand, "nextToken", "nextToken", "maxResults");
