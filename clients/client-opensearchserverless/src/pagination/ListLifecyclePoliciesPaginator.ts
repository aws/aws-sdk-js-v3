// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "../commands/ListLifecyclePoliciesCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLifecyclePolicies: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListLifecyclePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListLifecyclePoliciesCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput
>(OpenSearchServerlessClient, ListLifecyclePoliciesCommand, "nextToken", "nextToken", "");
