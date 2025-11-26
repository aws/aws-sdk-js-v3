// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroups: (
  config: SyntheticsPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  ListGroupsCommandInput,
  ListGroupsCommandOutput
>(SyntheticsClient, ListGroupsCommand, "NextToken", "NextToken", "MaxResults");
