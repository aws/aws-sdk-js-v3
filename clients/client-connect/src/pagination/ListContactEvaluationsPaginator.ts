// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactEvaluationsCommand,
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "../commands/ListContactEvaluationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactEvaluations: (
  config: ConnectPaginationConfiguration,
  input: ListContactEvaluationsCommandInput,
  ...rest: any[]
) => Paginator<ListContactEvaluationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput
>(ConnectClient, ListContactEvaluationsCommand, "NextToken", "NextToken", "");
