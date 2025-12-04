// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCompatibleImagesCommand,
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "../commands/ListCompatibleImagesCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCompatibleImages: (
  config: SnowballPaginationConfiguration,
  input: ListCompatibleImagesCommandInput,
  ...rest: any[]
) => Paginator<ListCompatibleImagesCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput
>(SnowballClient, ListCompatibleImagesCommand, "NextToken", "NextToken", "MaxResults");
