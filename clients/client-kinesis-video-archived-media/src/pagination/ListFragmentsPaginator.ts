// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFragmentsCommand,
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput,
} from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFragments: (
  config: KinesisVideoArchivedMediaPaginationConfiguration,
  input: ListFragmentsCommandInput,
  ...rest: any[]
) => Paginator<ListFragmentsCommandOutput> = createPaginator<
  KinesisVideoArchivedMediaPaginationConfiguration,
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput
>(KinesisVideoArchivedMediaClient, ListFragmentsCommand, "NextToken", "NextToken", "MaxResults");
