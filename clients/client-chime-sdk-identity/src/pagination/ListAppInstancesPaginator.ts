// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "../commands/ListAppInstancesCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstances: (
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstancesCommandOutput> = createPaginator<
  ChimeSDKIdentityPaginationConfiguration,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput
>(ChimeSDKIdentityClient, ListAppInstancesCommand, "NextToken", "NextToken", "MaxResults");
