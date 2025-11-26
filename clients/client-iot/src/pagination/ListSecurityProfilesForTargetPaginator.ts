// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfilesForTargetCommand,
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "../commands/ListSecurityProfilesForTargetCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfilesForTarget: (
  config: IoTPaginationConfiguration,
  input: ListSecurityProfilesForTargetCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfilesForTargetCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput
>(IoTClient, ListSecurityProfilesForTargetCommand, "nextToken", "nextToken", "maxResults");
