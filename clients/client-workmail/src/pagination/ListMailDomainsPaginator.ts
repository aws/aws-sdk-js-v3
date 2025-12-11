// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMailDomainsCommand,
  ListMailDomainsCommandInput,
  ListMailDomainsCommandOutput,
} from "../commands/ListMailDomainsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMailDomains: (
  config: WorkMailPaginationConfiguration,
  input: ListMailDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListMailDomainsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListMailDomainsCommandInput,
  ListMailDomainsCommandOutput
>(WorkMailClient, ListMailDomainsCommand, "NextToken", "NextToken", "MaxResults");
