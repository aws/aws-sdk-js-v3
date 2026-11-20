// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListTrustedAccessProgramsCommand,
  ListTrustedAccessProgramsCommandInput,
  ListTrustedAccessProgramsCommandOutput,
} from "../commands/ListTrustedAccessProgramsCommand";
import type { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustedAccessPrograms: (
  config: BedrockPaginationConfiguration,
  input: ListTrustedAccessProgramsCommandInput,
  ...rest: any[]
) => Paginator<ListTrustedAccessProgramsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListTrustedAccessProgramsCommandInput,
  ListTrustedAccessProgramsCommandOutput
>(BedrockClient, ListTrustedAccessProgramsCommand, "nextToken", "nextToken", "maxResults");
