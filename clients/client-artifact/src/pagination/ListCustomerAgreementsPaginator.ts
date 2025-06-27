// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ArtifactClient } from "../ArtifactClient";
import {
  ListCustomerAgreementsCommand,
  ListCustomerAgreementsCommandInput,
  ListCustomerAgreementsCommandOutput,
} from "../commands/ListCustomerAgreementsCommand";
import { ArtifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomerAgreements: (
  config: ArtifactPaginationConfiguration,
  input: ListCustomerAgreementsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomerAgreementsCommandOutput> = createPaginator<
  ArtifactPaginationConfiguration,
  ListCustomerAgreementsCommandInput,
  ListCustomerAgreementsCommandOutput
>(ArtifactClient, ListCustomerAgreementsCommand, "nextToken", "nextToken", "maxResults");
