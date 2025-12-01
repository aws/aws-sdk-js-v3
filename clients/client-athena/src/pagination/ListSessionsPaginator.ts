// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessions: (
  config: AthenaPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListSessionsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListSessionsCommandInput,
  ListSessionsCommandOutput
>(AthenaClient, ListSessionsCommand, "NextToken", "NextToken", "MaxResults");
