// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  LookupPolicyCommand,
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
} from "../commands/LookupPolicyCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateLookupPolicy: (
  config: CloudDirectoryPaginationConfiguration,
  input: LookupPolicyCommandInput,
  ...rest: any[]
) => Paginator<LookupPolicyCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput
>(CloudDirectoryClient, LookupPolicyCommand, "NextToken", "NextToken", "MaxResults");
