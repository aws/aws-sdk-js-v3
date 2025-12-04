// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetImagesCommand, GetImagesCommandInput, GetImagesCommandOutput } from "../commands/GetImagesCommand";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetImages: (
  config: KinesisVideoArchivedMediaPaginationConfiguration,
  input: GetImagesCommandInput,
  ...rest: any[]
) => Paginator<GetImagesCommandOutput> = createPaginator<
  KinesisVideoArchivedMediaPaginationConfiguration,
  GetImagesCommandInput,
  GetImagesCommandOutput
>(KinesisVideoArchivedMediaClient, GetImagesCommand, "NextToken", "NextToken", "MaxResults");
