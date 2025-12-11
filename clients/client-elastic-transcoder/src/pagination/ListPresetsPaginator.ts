// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPresets: (
  config: ElasticTranscoderPaginationConfiguration,
  input: ListPresetsCommandInput,
  ...rest: any[]
) => Paginator<ListPresetsCommandOutput> = createPaginator<
  ElasticTranscoderPaginationConfiguration,
  ListPresetsCommandInput,
  ListPresetsCommandOutput
>(ElasticTranscoderClient, ListPresetsCommand, "PageToken", "NextPageToken", "");
