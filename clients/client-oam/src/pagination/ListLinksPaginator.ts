// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLinksCommand, ListLinksCommandInput, ListLinksCommandOutput } from "../commands/ListLinksCommand";
import { OAMClient } from "../OAMClient";
import { OAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinks: (
  config: OAMPaginationConfiguration,
  input: ListLinksCommandInput,
  ...rest: any[]
) => Paginator<ListLinksCommandOutput> = createPaginator<
  OAMPaginationConfiguration,
  ListLinksCommandInput,
  ListLinksCommandOutput
>(OAMClient, ListLinksCommand, "NextToken", "NextToken", "MaxResults");
