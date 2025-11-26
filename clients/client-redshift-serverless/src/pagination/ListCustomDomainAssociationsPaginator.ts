// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomDomainAssociationsCommand,
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput,
} from "../commands/ListCustomDomainAssociationsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomDomainAssociations: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListCustomDomainAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomDomainAssociationsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput
>(RedshiftServerlessClient, ListCustomDomainAssociationsCommand, "nextToken", "nextToken", "maxResults");
