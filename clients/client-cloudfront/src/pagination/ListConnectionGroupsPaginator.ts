// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListConnectionGroupsCommand,
  ListConnectionGroupsCommandInput,
  ListConnectionGroupsCommandOutput,
} from "../commands/ListConnectionGroupsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectionGroups: (
  config: CloudFrontPaginationConfiguration,
  input: ListConnectionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionGroupsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListConnectionGroupsCommandInput,
  ListConnectionGroupsCommandOutput
>(CloudFrontClient, ListConnectionGroupsCommand, "Marker", "NextMarker", "MaxItems");
