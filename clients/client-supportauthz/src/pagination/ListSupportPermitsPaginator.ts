// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSupportPermitsCommand,
  ListSupportPermitsCommandInput,
  ListSupportPermitsCommandOutput,
} from "../commands/ListSupportPermitsCommand";
import { SupportAuthZClient } from "../SupportAuthZClient";
import type { SupportAuthZPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSupportPermits: (
  config: SupportAuthZPaginationConfiguration,
  input: ListSupportPermitsCommandInput,
  ...rest: any[]
) => Paginator<ListSupportPermitsCommandOutput> = createPaginator<
  SupportAuthZPaginationConfiguration,
  ListSupportPermitsCommandInput,
  ListSupportPermitsCommandOutput
>(SupportAuthZClient, ListSupportPermitsCommand, "nextToken", "nextToken", "maxResults");
