// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorldTemplatesCommand,
  ListWorldTemplatesCommandInput,
  ListWorldTemplatesCommandOutput,
} from "../commands/ListWorldTemplatesCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorldTemplates: (
  config: RoboMakerPaginationConfiguration,
  input: ListWorldTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListWorldTemplatesCommandOutput> = createPaginator<
  RoboMakerPaginationConfiguration,
  ListWorldTemplatesCommandInput,
  ListWorldTemplatesCommandOutput
>(RoboMakerClient, ListWorldTemplatesCommand, "nextToken", "nextToken", "maxResults");
