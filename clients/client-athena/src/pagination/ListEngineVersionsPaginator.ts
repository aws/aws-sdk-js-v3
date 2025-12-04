// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "../commands/ListEngineVersionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngineVersions: (
  config: AthenaPaginationConfiguration,
  input: ListEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListEngineVersionsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput
>(AthenaClient, ListEngineVersionsCommand, "NextToken", "NextToken", "MaxResults");
