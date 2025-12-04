// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementsCommand,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
} from "../commands/ListEngagementsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagements: (
  config: SSMContactsPaginationConfiguration,
  input: ListEngagementsCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput
>(SSMContactsClient, ListEngagementsCommand, "NextToken", "NextToken", "MaxResults");
