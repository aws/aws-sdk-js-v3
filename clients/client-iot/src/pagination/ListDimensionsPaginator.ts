// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDimensionsCommand,
  ListDimensionsCommandInput,
  ListDimensionsCommandOutput,
} from "../commands/ListDimensionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDimensions: (
  config: IoTPaginationConfiguration,
  input: ListDimensionsCommandInput,
  ...rest: any[]
) => Paginator<ListDimensionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListDimensionsCommandInput,
  ListDimensionsCommandOutput
>(IoTClient, ListDimensionsCommand, "nextToken", "nextToken", "maxResults");
