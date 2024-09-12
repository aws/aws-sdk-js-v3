// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "../commands/ListVersionsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVersions: (
  config: MediaConvertPaginationConfiguration,
  input: ListVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListVersionsCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  ListVersionsCommandInput,
  ListVersionsCommandOutput
>(MediaConvertClient, ListVersionsCommand, "NextToken", "NextToken", "MaxResults");
