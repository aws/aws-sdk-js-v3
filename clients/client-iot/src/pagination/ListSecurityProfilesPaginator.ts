// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfiles: (
  config: IoTPaginationConfiguration,
  input: ListSecurityProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfilesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput
>(IoTClient, ListSecurityProfilesCommand, "nextToken", "nextToken", "maxResults");
