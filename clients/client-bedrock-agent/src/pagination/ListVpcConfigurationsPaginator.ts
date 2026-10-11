// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListVpcConfigurationsCommand,
  ListVpcConfigurationsCommandInput,
  ListVpcConfigurationsCommandOutput,
} from "../commands/ListVpcConfigurationsCommand";
import type { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcConfigurations: (
  config: BedrockAgentPaginationConfiguration,
  input: ListVpcConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcConfigurationsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListVpcConfigurationsCommandInput,
  ListVpcConfigurationsCommandOutput
>(BedrockAgentClient, ListVpcConfigurationsCommand, "nextToken", "nextToken", "maxResults");
