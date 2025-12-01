// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitiesForPolicyCommand,
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "../commands/ListEntitiesForPolicyCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntitiesForPolicy: (
  config: IAMPaginationConfiguration,
  input: ListEntitiesForPolicyCommandInput,
  ...rest: any[]
) => Paginator<ListEntitiesForPolicyCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput
>(IAMClient, ListEntitiesForPolicyCommand, "Marker", "Marker", "MaxItems");
