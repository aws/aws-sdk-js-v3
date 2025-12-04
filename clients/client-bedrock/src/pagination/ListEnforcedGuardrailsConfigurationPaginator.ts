// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListEnforcedGuardrailsConfigurationCommand,
  ListEnforcedGuardrailsConfigurationCommandInput,
  ListEnforcedGuardrailsConfigurationCommandOutput,
} from "../commands/ListEnforcedGuardrailsConfigurationCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnforcedGuardrailsConfiguration: (
  config: BedrockPaginationConfiguration,
  input: ListEnforcedGuardrailsConfigurationCommandInput,
  ...rest: any[]
) => Paginator<ListEnforcedGuardrailsConfigurationCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListEnforcedGuardrailsConfigurationCommandInput,
  ListEnforcedGuardrailsConfigurationCommandOutput
>(BedrockClient, ListEnforcedGuardrailsConfigurationCommand, "nextToken", "nextToken", "");
