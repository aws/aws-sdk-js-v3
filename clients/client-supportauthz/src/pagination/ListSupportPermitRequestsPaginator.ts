// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSupportPermitRequestsCommand,
  ListSupportPermitRequestsCommandInput,
  ListSupportPermitRequestsCommandOutput,
} from "../commands/ListSupportPermitRequestsCommand";
import { SupportAuthZClient } from "../SupportAuthZClient";
import type { SupportAuthZPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSupportPermitRequests: (
  config: SupportAuthZPaginationConfiguration,
  input: ListSupportPermitRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListSupportPermitRequestsCommandOutput> = createPaginator<
  SupportAuthZPaginationConfiguration,
  ListSupportPermitRequestsCommandInput,
  ListSupportPermitRequestsCommandOutput
>(SupportAuthZClient, ListSupportPermitRequestsCommand, "nextToken", "nextToken", "maxResults");
