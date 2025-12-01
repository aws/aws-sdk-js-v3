// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfileResourceAssociationsCommand,
  ListProfileResourceAssociationsCommandInput,
  ListProfileResourceAssociationsCommandOutput,
} from "../commands/ListProfileResourceAssociationsCommand";
import { Route53ProfilesClient } from "../Route53ProfilesClient";
import { Route53ProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfileResourceAssociations: (
  config: Route53ProfilesPaginationConfiguration,
  input: ListProfileResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListProfileResourceAssociationsCommandOutput> = createPaginator<
  Route53ProfilesPaginationConfiguration,
  ListProfileResourceAssociationsCommandInput,
  ListProfileResourceAssociationsCommandOutput
>(Route53ProfilesClient, ListProfileResourceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
