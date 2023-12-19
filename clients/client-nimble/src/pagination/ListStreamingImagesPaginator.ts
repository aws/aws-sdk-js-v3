// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStreamingImagesCommand,
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "../commands/ListStreamingImagesCommand";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamingImages: (
  config: NimblePaginationConfiguration,
  input: ListStreamingImagesCommandInput,
  ...rest: any[]
) => Paginator<ListStreamingImagesCommandOutput> = createPaginator<
  NimblePaginationConfiguration,
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput
>(NimbleClient, ListStreamingImagesCommand, "nextToken", "nextToken", "");
