// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetContentModerationCommand,
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "../commands/GetContentModerationCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetContentModeration: (
  config: RekognitionPaginationConfiguration,
  input: GetContentModerationCommandInput,
  ...rest: any[]
) => Paginator<GetContentModerationCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput
>(RekognitionClient, GetContentModerationCommand, "NextToken", "NextToken", "MaxResults");
