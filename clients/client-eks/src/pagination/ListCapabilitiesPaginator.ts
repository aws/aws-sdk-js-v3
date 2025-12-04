// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCapabilitiesCommand,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
} from "../commands/ListCapabilitiesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapabilities: (
  config: EKSPaginationConfiguration,
  input: ListCapabilitiesCommandInput,
  ...rest: any[]
) => Paginator<ListCapabilitiesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput
>(EKSClient, ListCapabilitiesCommand, "nextToken", "nextToken", "maxResults");
