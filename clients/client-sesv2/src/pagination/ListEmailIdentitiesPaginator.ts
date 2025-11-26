// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEmailIdentitiesCommand,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEmailIdentities: (
  config: SESv2PaginationConfiguration,
  input: ListEmailIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListEmailIdentitiesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput
>(SESv2Client, ListEmailIdentitiesCommand, "NextToken", "NextToken", "PageSize");
