// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaskInstancesCommand,
  ListTaskInstancesCommandInput,
  ListTaskInstancesCommandOutput,
} from "../commands/ListTaskInstancesCommand";
import { MWAAServerlessClient } from "../MWAAServerlessClient";
import { MWAAServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaskInstances: (
  config: MWAAServerlessPaginationConfiguration,
  input: ListTaskInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListTaskInstancesCommandOutput> = createPaginator<
  MWAAServerlessPaginationConfiguration,
  ListTaskInstancesCommandInput,
  ListTaskInstancesCommandOutput
>(MWAAServerlessClient, ListTaskInstancesCommand, "NextToken", "NextToken", "MaxResults");
