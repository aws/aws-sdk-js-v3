// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEngagementsCommand,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
} from "../commands/ListEngagementsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagements: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementsCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput
>(PartnerCentralSellingClient, ListEngagementsCommand, "NextToken", "NextToken", "MaxResults");
