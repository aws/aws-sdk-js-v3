// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListProvisionedModelThroughputsCommand,
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "../commands/ListProvisionedModelThroughputsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisionedModelThroughputs: (
  config: BedrockPaginationConfiguration,
  input: ListProvisionedModelThroughputsCommandInput,
  ...rest: any[]
) => Paginator<ListProvisionedModelThroughputsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput
>(BedrockClient, ListProvisionedModelThroughputsCommand, "nextToken", "nextToken", "maxResults");
