// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPartnersCommand,
  ListPartnersCommandInput,
  ListPartnersCommandOutput,
} from "../commands/ListPartnersCommand";
import { PartnerCentralAccountClient } from "../PartnerCentralAccountClient";
import { PartnerCentralAccountPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPartners: (
  config: PartnerCentralAccountPaginationConfiguration,
  input: ListPartnersCommandInput,
  ...rest: any[]
) => Paginator<ListPartnersCommandOutput> = createPaginator<
  PartnerCentralAccountPaginationConfiguration,
  ListPartnersCommandInput,
  ListPartnersCommandOutput
>(PartnerCentralAccountClient, ListPartnersCommand, "NextToken", "NextToken", "");
