// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSuppressedDestinationsCommand,
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput,
} from "../commands/ListSuppressedDestinationsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSuppressedDestinations: (
  config: SESv2PaginationConfiguration,
  input: ListSuppressedDestinationsCommandInput,
  ...rest: any[]
) => Paginator<ListSuppressedDestinationsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListSuppressedDestinationsCommandInput,
  ListSuppressedDestinationsCommandOutput
>(SESv2Client, ListSuppressedDestinationsCommand, "NextToken", "NextToken", "PageSize");
