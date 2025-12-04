// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListInferenceProfilesCommand,
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput,
} from "../commands/ListInferenceProfilesCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceProfiles: (
  config: BedrockPaginationConfiguration,
  input: ListInferenceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceProfilesCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput
>(BedrockClient, ListInferenceProfilesCommand, "nextToken", "nextToken", "maxResults");
