// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetsForSecurityProfileCommand,
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "../commands/ListTargetsForSecurityProfileCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetsForSecurityProfile: (
  config: IoTPaginationConfiguration,
  input: ListTargetsForSecurityProfileCommandInput,
  ...rest: any[]
) => Paginator<ListTargetsForSecurityProfileCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput
>(IoTClient, ListTargetsForSecurityProfileCommand, "nextToken", "nextToken", "maxResults");
