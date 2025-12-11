// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "../commands/ListActionTypesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActionTypes: (
  config: CodePipelinePaginationConfiguration,
  input: ListActionTypesCommandInput,
  ...rest: any[]
) => Paginator<ListActionTypesCommandOutput> = createPaginator<
  CodePipelinePaginationConfiguration,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput
>(CodePipelineClient, ListActionTypesCommand, "nextToken", "nextToken", "");
