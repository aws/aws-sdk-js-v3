// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxScalingGroupsCommand,
  ListKxScalingGroupsCommandInput,
  ListKxScalingGroupsCommandOutput,
} from "../commands/ListKxScalingGroupsCommand";
import { FinspaceClient } from "../FinspaceClient";
import type { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxScalingGroups: (
  config: FinspacePaginationConfiguration,
  input: ListKxScalingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListKxScalingGroupsCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxScalingGroupsCommandInput,
  ListKxScalingGroupsCommandOutput
>(FinspaceClient, ListKxScalingGroupsCommand, "nextToken", "nextToken", "maxResults");
