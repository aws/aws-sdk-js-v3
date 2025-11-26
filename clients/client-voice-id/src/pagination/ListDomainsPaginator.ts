// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomains: (
  config: VoiceIDPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainsCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListDomainsCommandInput,
  ListDomainsCommandOutput
>(VoiceIDClient, ListDomainsCommand, "NextToken", "NextToken", "MaxResults");
