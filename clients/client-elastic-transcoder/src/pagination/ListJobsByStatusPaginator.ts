// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "../commands/ListJobsByStatusCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobsByStatus: (
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByStatusCommandInput,
  ...rest: any[]
) => Paginator<ListJobsByStatusCommandOutput> = createPaginator<
  ElasticTranscoderPaginationConfiguration,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput
>(ElasticTranscoderClient, ListJobsByStatusCommand, "PageToken", "NextPageToken", "");
