// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListWorkGroupsCommand,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
} from "../commands/ListWorkGroupsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkGroups: (
  config: AthenaPaginationConfiguration,
  input: ListWorkGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkGroupsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput
>(AthenaClient, ListWorkGroupsCommand, "NextToken", "NextToken", "MaxResults");
