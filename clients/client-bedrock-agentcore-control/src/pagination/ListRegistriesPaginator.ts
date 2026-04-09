// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistries: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...rest: any[]
) => Paginator<ListRegistriesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput
>(BedrockAgentCoreControlClient, ListRegistriesCommand, "nextToken", "nextToken", "maxResults");
