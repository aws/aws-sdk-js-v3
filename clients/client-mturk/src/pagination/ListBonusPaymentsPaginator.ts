// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBonusPaymentsCommand,
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
} from "../commands/ListBonusPaymentsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBonusPayments: (
  config: MTurkPaginationConfiguration,
  input: ListBonusPaymentsCommandInput,
  ...rest: any[]
) => Paginator<ListBonusPaymentsCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput
>(MTurkClient, ListBonusPaymentsCommand, "NextToken", "NextToken", "MaxResults");
