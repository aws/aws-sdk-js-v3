// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourcePolicies: (
  config: SSMIncidentsPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcePoliciesCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput
>(SSMIncidentsClient, GetResourcePoliciesCommand, "nextToken", "nextToken", "maxResults");
