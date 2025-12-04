// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectPoliciesCommand,
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
} from "../commands/ListObjectPoliciesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectPolicies: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListObjectPoliciesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput
>(CloudDirectoryClient, ListObjectPoliciesCommand, "NextToken", "NextToken", "MaxResults");
