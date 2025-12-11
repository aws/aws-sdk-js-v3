// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedGroupsCommand,
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput,
} from "../commands/ListAssociatedGroupsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedGroups: (
  config: SyntheticsPaginationConfiguration,
  input: ListAssociatedGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedGroupsCommandOutput> = createPaginator<
  SyntheticsPaginationConfiguration,
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput
>(SyntheticsClient, ListAssociatedGroupsCommand, "NextToken", "NextToken", "MaxResults");
