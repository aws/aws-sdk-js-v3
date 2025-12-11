// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupsOlderThanOrderingIdCommand,
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "../commands/ListGroupsOlderThanOrderingIdCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupsOlderThanOrderingId: (
  config: KendraPaginationConfiguration,
  input: ListGroupsOlderThanOrderingIdCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsOlderThanOrderingIdCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput
>(KendraClient, ListGroupsOlderThanOrderingIdCommand, "NextToken", "NextToken", "MaxResults");
