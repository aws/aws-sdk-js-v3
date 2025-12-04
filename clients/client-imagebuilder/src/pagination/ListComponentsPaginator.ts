// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponents: (
  config: ImagebuilderPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListComponentsCommandInput,
  ListComponentsCommandOutput
>(ImagebuilderClient, ListComponentsCommand, "nextToken", "nextToken", "maxResults");
