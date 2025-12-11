// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import {
  ListDomainAssociationsCommand,
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "../commands/ListDomainAssociationsCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainAssociations: (
  config: AmplifyPaginationConfiguration,
  input: ListDomainAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainAssociationsCommandOutput> = createPaginator<
  AmplifyPaginationConfiguration,
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput
>(AmplifyClient, ListDomainAssociationsCommand, "nextToken", "nextToken", "maxResults");
