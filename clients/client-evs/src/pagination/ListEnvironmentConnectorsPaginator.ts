// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentConnectorsCommand,
  ListEnvironmentConnectorsCommandInput,
  ListEnvironmentConnectorsCommandOutput,
} from "../commands/ListEnvironmentConnectorsCommand";
import { EvsClient } from "../EvsClient";
import type { EvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentConnectors: (
  config: EvsPaginationConfiguration,
  input: ListEnvironmentConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentConnectorsCommandOutput> = createPaginator<
  EvsPaginationConfiguration,
  ListEnvironmentConnectorsCommandInput,
  ListEnvironmentConnectorsCommandOutput
>(EvsClient, ListEnvironmentConnectorsCommand, "nextToken", "nextToken", "maxResults");
