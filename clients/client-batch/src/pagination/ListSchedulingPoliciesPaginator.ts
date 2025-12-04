// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListSchedulingPoliciesCommand,
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput,
} from "../commands/ListSchedulingPoliciesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchedulingPolicies: (
  config: BatchPaginationConfiguration,
  input: ListSchedulingPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListSchedulingPoliciesCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListSchedulingPoliciesCommandInput,
  ListSchedulingPoliciesCommandOutput
>(BatchClient, ListSchedulingPoliciesCommand, "nextToken", "nextToken", "maxResults");
