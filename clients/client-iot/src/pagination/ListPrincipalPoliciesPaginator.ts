// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrincipalPoliciesCommand,
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput,
} from "../commands/ListPrincipalPoliciesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipalPolicies: (
  config: IoTPaginationConfiguration,
  input: ListPrincipalPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalPoliciesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPrincipalPoliciesCommandInput,
  ListPrincipalPoliciesCommandOutput
>(IoTClient, ListPrincipalPoliciesCommand, "marker", "nextMarker", "pageSize");
