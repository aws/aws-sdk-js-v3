// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRulesetsCommand,
  ListRulesetsCommandInput,
  ListRulesetsCommandOutput,
} from "../commands/ListRulesetsCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRulesets: (
  config: DataBrewPaginationConfiguration,
  input: ListRulesetsCommandInput,
  ...rest: any[]
) => Paginator<ListRulesetsCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListRulesetsCommandInput,
  ListRulesetsCommandOutput
>(DataBrewClient, ListRulesetsCommand, "NextToken", "NextToken", "MaxResults");
