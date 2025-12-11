// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobTemplates: (
  config: MediaConvertPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListJobTemplatesCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput
>(MediaConvertClient, ListJobTemplatesCommand, "NextToken", "NextToken", "MaxResults");
