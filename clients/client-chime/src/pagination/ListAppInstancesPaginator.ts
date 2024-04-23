// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstancesCommand,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput,
} from "../commands/ListAppInstancesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstances: (
  config: ChimePaginationConfiguration,
  input: ListAppInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstancesCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListAppInstancesCommandInput,
  ListAppInstancesCommandOutput
>(ChimeClient, ListAppInstancesCommand, "NextToken", "NextToken", "MaxResults");
