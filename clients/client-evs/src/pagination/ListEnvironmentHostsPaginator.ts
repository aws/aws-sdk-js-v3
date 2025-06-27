// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEnvironmentHostsCommand,
  ListEnvironmentHostsCommandInput,
  ListEnvironmentHostsCommandOutput,
} from "../commands/ListEnvironmentHostsCommand";
import { EvsClient } from "../EvsClient";
import { EvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentHosts: (
  config: EvsPaginationConfiguration,
  input: ListEnvironmentHostsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentHostsCommandOutput> = createPaginator<
  EvsPaginationConfiguration,
  ListEnvironmentHostsCommandInput,
  ListEnvironmentHostsCommandOutput
>(EvsClient, ListEnvironmentHostsCommand, "nextToken", "nextToken", "maxResults");
