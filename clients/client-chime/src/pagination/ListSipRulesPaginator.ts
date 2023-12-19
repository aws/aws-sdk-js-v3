// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "../commands/ListSipRulesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSipRules: (
  config: ChimePaginationConfiguration,
  input: ListSipRulesCommandInput,
  ...rest: any[]
) => Paginator<ListSipRulesCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput
>(ChimeClient, ListSipRulesCommand, "NextToken", "NextToken", "MaxResults");
