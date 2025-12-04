// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommandInvocationsCommand,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommandInvocations: (
  config: SSMPaginationConfiguration,
  input: ListCommandInvocationsCommandInput,
  ...rest: any[]
) => Paginator<ListCommandInvocationsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput
>(SSMClient, ListCommandInvocationsCommand, "NextToken", "NextToken", "MaxResults");
