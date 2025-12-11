// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBenefitAllocationsCommand,
  ListBenefitAllocationsCommandInput,
  ListBenefitAllocationsCommandOutput,
} from "../commands/ListBenefitAllocationsCommand";
import { PartnerCentralBenefitsClient } from "../PartnerCentralBenefitsClient";
import { PartnerCentralBenefitsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBenefitAllocations: (
  config: PartnerCentralBenefitsPaginationConfiguration,
  input: ListBenefitAllocationsCommandInput,
  ...rest: any[]
) => Paginator<ListBenefitAllocationsCommandOutput> = createPaginator<
  PartnerCentralBenefitsPaginationConfiguration,
  ListBenefitAllocationsCommandInput,
  ListBenefitAllocationsCommandOutput
>(PartnerCentralBenefitsClient, ListBenefitAllocationsCommand, "NextToken", "NextToken", "MaxResults");
