// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetsForPolicy: (
  config: IoTPaginationConfiguration,
  input: ListTargetsForPolicyCommandInput,
  ...rest: any[]
) => Paginator<ListTargetsForPolicyCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput
>(IoTClient, ListTargetsForPolicyCommand, "marker", "nextMarker", "pageSize");
