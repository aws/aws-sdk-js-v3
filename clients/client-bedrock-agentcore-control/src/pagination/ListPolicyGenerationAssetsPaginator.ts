// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationAssetsCommandInput,
  ListPolicyGenerationAssetsCommandOutput,
} from "../commands/ListPolicyGenerationAssetsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyGenerationAssets: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicyGenerationAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyGenerationAssetsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicyGenerationAssetsCommandInput,
  ListPolicyGenerationAssetsCommandOutput
>(BedrockAgentCoreControlClient, ListPolicyGenerationAssetsCommand, "nextToken", "nextToken", "maxResults");
