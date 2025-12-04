// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCidrCollectionsCommand,
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "../commands/ListCidrCollectionsCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCidrCollections: (
  config: Route53PaginationConfiguration,
  input: ListCidrCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListCidrCollectionsCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput
>(Route53Client, ListCidrCollectionsCommand, "NextToken", "NextToken", "MaxResults");
