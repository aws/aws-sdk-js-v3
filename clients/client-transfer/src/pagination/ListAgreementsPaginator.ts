// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgreementsCommand,
  ListAgreementsCommandInput,
  ListAgreementsCommandOutput,
} from "../commands/ListAgreementsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgreements: (
  config: TransferPaginationConfiguration,
  input: ListAgreementsCommandInput,
  ...rest: any[]
) => Paginator<ListAgreementsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListAgreementsCommandInput,
  ListAgreementsCommandOutput
>(TransferClient, ListAgreementsCommand, "NextToken", "NextToken", "MaxResults");
