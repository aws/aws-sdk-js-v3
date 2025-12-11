// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListGuardrailsCommand,
  ListGuardrailsCommandInput,
  ListGuardrailsCommandOutput,
} from "../commands/ListGuardrailsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGuardrails: (
  config: BedrockPaginationConfiguration,
  input: ListGuardrailsCommandInput,
  ...rest: any[]
) => Paginator<ListGuardrailsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListGuardrailsCommandInput,
  ListGuardrailsCommandOutput
>(BedrockClient, ListGuardrailsCommand, "nextToken", "nextToken", "maxResults");
