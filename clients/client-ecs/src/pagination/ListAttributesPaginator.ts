// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttributesCommand,
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
} from "../commands/ListAttributesCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttributes: (
  config: ECSPaginationConfiguration,
  input: ListAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListAttributesCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListAttributesCommandInput,
  ListAttributesCommandOutput
>(ECSClient, ListAttributesCommand, "nextToken", "nextToken", "maxResults");
