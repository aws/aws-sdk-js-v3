// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNodegroupsCommand,
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
} from "../commands/ListNodegroupsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodegroups: (
  config: EKSPaginationConfiguration,
  input: ListNodegroupsCommandInput,
  ...rest: any[]
) => Paginator<ListNodegroupsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput
>(EKSClient, ListNodegroupsCommand, "nextToken", "nextToken", "maxResults");
