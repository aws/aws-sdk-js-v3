// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedLinksCommand,
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput,
} from "../commands/ListAttachedLinksCommand";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedLinks: (
  config: OAMPaginationConfiguration,
  input: ListAttachedLinksCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedLinksCommandOutput> = createPaginator<
  OAMPaginationConfiguration,
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput
>(OAMClient, ListAttachedLinksCommand, "NextToken", "NextToken", "MaxResults");
