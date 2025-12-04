// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyGenerations: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListPolicyGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyGenerationsCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput
>(AccessAnalyzerClient, ListPolicyGenerationsCommand, "nextToken", "nextToken", "maxResults");
