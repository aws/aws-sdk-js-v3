// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainLayoutsCommand,
  ListDomainLayoutsCommandInput,
  ListDomainLayoutsCommandOutput,
} from "../commands/ListDomainLayoutsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainLayouts: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListDomainLayoutsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainLayoutsCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListDomainLayoutsCommandInput,
  ListDomainLayoutsCommandOutput
>(CustomerProfilesClient, ListDomainLayoutsCommand, "NextToken", "NextToken", "MaxResults");
