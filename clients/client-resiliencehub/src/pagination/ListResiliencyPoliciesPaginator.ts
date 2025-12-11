// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResiliencyPoliciesCommand,
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "../commands/ListResiliencyPoliciesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResiliencyPolicies: (
  config: ResiliencehubPaginationConfiguration,
  input: ListResiliencyPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListResiliencyPoliciesCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput
>(ResiliencehubClient, ListResiliencyPoliciesCommand, "nextToken", "nextToken", "maxResults");
