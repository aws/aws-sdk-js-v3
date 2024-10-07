// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListJobParameterDefinitionsCommand,
  ListJobParameterDefinitionsCommandInput,
  ListJobParameterDefinitionsCommandOutput,
} from "../commands/ListJobParameterDefinitionsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobParameterDefinitions: (
  config: DeadlinePaginationConfiguration,
  input: ListJobParameterDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListJobParameterDefinitionsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListJobParameterDefinitionsCommandInput,
  ListJobParameterDefinitionsCommandOutput
>(DeadlineClient, ListJobParameterDefinitionsCommand, "nextToken", "nextToken", "maxResults");
