// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPresetsCommand, ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPresets: (
  config: MediaConvertPaginationConfiguration,
  input: ListPresetsCommandInput,
  ...rest: any[]
) => Paginator<ListPresetsCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  ListPresetsCommandInput,
  ListPresetsCommandOutput
>(MediaConvertClient, ListPresetsCommand, "NextToken", "NextToken", "MaxResults");
