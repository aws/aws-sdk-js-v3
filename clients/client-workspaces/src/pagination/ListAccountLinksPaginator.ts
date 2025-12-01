// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountLinksCommand,
  ListAccountLinksCommandInput,
  ListAccountLinksCommandOutput,
} from "../commands/ListAccountLinksCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountLinks: (
  config: WorkSpacesPaginationConfiguration,
  input: ListAccountLinksCommandInput,
  ...rest: any[]
) => Paginator<ListAccountLinksCommandOutput> = createPaginator<
  WorkSpacesPaginationConfiguration,
  ListAccountLinksCommandInput,
  ListAccountLinksCommandOutput
>(WorkSpacesClient, ListAccountLinksCommand, "NextToken", "NextToken", "MaxResults");
