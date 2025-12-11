// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListCapabilitiesCommand,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
} from "../commands/ListCapabilitiesCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapabilities: (
  config: B2biPaginationConfiguration,
  input: ListCapabilitiesCommandInput,
  ...rest: any[]
) => Paginator<ListCapabilitiesCommandOutput> = createPaginator<
  B2biPaginationConfiguration,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput
>(B2biClient, ListCapabilitiesCommand, "nextToken", "nextToken", "maxResults");
