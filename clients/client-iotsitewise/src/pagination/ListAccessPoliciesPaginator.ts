// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPolicies: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPoliciesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput
>(IoTSiteWiseClient, ListAccessPoliciesCommand, "nextToken", "nextToken", "maxResults");
