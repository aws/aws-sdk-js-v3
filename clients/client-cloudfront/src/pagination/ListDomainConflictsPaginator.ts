// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListDomainConflictsCommand,
  ListDomainConflictsCommandInput,
  ListDomainConflictsCommandOutput,
} from "../commands/ListDomainConflictsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainConflicts: (
  config: CloudFrontPaginationConfiguration,
  input: ListDomainConflictsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainConflictsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListDomainConflictsCommandInput,
  ListDomainConflictsCommandOutput
>(CloudFrontClient, ListDomainConflictsCommand, "Marker", "NextMarker", "MaxItems");
