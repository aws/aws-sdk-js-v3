// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryControlClient } from "../AgentRegistryControlClient";
import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import type { AgentRegistryControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistries: (
  config: AgentRegistryControlPaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...rest: any[]
) => Paginator<ListRegistriesCommandOutput> = createPaginator<
  AgentRegistryControlPaginationConfiguration,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput
>(AgentRegistryControlClient, ListRegistriesCommand, "nextToken", "nextToken", "maxResults");
