// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWebsiteAuthorizationProvidersCommand,
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
} from "../commands/ListWebsiteAuthorizationProvidersCommand";
import { WorkLinkClient } from "../WorkLinkClient";
import { WorkLinkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebsiteAuthorizationProviders: (
  config: WorkLinkPaginationConfiguration,
  input: ListWebsiteAuthorizationProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListWebsiteAuthorizationProvidersCommandOutput> = createPaginator<
  WorkLinkPaginationConfiguration,
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput
>(WorkLinkClient, ListWebsiteAuthorizationProvidersCommand, "NextToken", "NextToken", "MaxResults");
