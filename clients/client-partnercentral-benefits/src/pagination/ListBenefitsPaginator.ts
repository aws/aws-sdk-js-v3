// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListBenefitsCommand,
  ListBenefitsCommandInput,
  ListBenefitsCommandOutput,
} from "../commands/ListBenefitsCommand";
import { PartnerCentralBenefitsClient } from "../PartnerCentralBenefitsClient";
import { PartnerCentralBenefitsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBenefits: (
  config: PartnerCentralBenefitsPaginationConfiguration,
  input: ListBenefitsCommandInput,
  ...rest: any[]
) => Paginator<ListBenefitsCommandOutput> = createPaginator<
  PartnerCentralBenefitsPaginationConfiguration,
  ListBenefitsCommandInput,
  ListBenefitsCommandOutput
>(PartnerCentralBenefitsClient, ListBenefitsCommand, "NextToken", "NextToken", "MaxResults");
