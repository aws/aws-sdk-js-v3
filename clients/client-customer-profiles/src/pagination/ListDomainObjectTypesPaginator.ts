// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDomainObjectTypesCommand,
  ListDomainObjectTypesCommandInput,
  ListDomainObjectTypesCommandOutput,
} from "../commands/ListDomainObjectTypesCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainObjectTypes: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListDomainObjectTypesCommandInput,
  ...rest: any[]
) => Paginator<ListDomainObjectTypesCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListDomainObjectTypesCommandInput,
  ListDomainObjectTypesCommandOutput
>(CustomerProfilesClient, ListDomainObjectTypesCommand, "NextToken", "NextToken", "MaxResults");
