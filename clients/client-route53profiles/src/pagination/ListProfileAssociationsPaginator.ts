// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProfileAssociationsCommand,
  ListProfileAssociationsCommandInput,
  ListProfileAssociationsCommandOutput,
} from "../commands/ListProfileAssociationsCommand";
import { Route53ProfilesClient } from "../Route53ProfilesClient";
import { Route53ProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProfileAssociations: (
  config: Route53ProfilesPaginationConfiguration,
  input: ListProfileAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListProfileAssociationsCommandOutput> = createPaginator<
  Route53ProfilesPaginationConfiguration,
  ListProfileAssociationsCommandInput,
  ListProfileAssociationsCommandOutput
>(Route53ProfilesClient, ListProfileAssociationsCommand, "NextToken", "NextToken", "MaxResults");
