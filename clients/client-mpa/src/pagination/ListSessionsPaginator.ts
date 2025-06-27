// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { MPAClient } from "../MPAClient";
import { MPAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: MPAPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  MPAPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(MPAClient, ListSessionsCommand, "NextToken", "NextToken", "MaxResults");
