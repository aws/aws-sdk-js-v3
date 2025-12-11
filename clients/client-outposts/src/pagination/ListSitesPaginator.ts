// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSites: (
  config: OutpostsPaginationConfiguration,
  input: ListSitesCommandInput,
  ...rest: any[]
) => Paginator<ListSitesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListSitesCommandInput,
  ListSitesCommandOutput
>(OutpostsClient, ListSitesCommand, "NextToken", "NextToken", "MaxResults");
