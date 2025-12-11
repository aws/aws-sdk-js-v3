// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedPoliciesCommand,
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput,
} from "../commands/ListAttachedPoliciesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedPolicies: (
  config: IoTPaginationConfiguration,
  input: ListAttachedPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedPoliciesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAttachedPoliciesCommandInput,
  ListAttachedPoliciesCommandOutput
>(IoTClient, ListAttachedPoliciesCommand, "marker", "nextMarker", "pageSize");
