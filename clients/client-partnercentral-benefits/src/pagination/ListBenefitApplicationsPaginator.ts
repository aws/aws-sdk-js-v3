// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBenefitApplicationsCommand,
  ListBenefitApplicationsCommandInput,
  ListBenefitApplicationsCommandOutput,
} from "../commands/ListBenefitApplicationsCommand";
import { PartnerCentralBenefitsClient } from "../PartnerCentralBenefitsClient";
import { PartnerCentralBenefitsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBenefitApplications: (
  config: PartnerCentralBenefitsPaginationConfiguration,
  input: ListBenefitApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListBenefitApplicationsCommandOutput> = createPaginator<
  PartnerCentralBenefitsPaginationConfiguration,
  ListBenefitApplicationsCommandInput,
  ListBenefitApplicationsCommandOutput
>(PartnerCentralBenefitsClient, ListBenefitApplicationsCommand, "NextToken", "NextToken", "MaxResults");
