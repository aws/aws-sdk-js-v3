// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListCustomModelDeploymentsCommand,
  ListCustomModelDeploymentsCommandInput,
  ListCustomModelDeploymentsCommandOutput,
} from "../commands/ListCustomModelDeploymentsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomModelDeployments: (
  config: BedrockPaginationConfiguration,
  input: ListCustomModelDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomModelDeploymentsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListCustomModelDeploymentsCommandInput,
  ListCustomModelDeploymentsCommandOutput
>(BedrockClient, ListCustomModelDeploymentsCommand, "nextToken", "nextToken", "maxResults");
