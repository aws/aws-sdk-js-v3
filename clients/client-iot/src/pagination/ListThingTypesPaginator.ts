// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingTypesCommand,
  ListThingTypesCommandInput,
  ListThingTypesCommandOutput,
} from "../commands/ListThingTypesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingTypes: (
  config: IoTPaginationConfiguration,
  input: ListThingTypesCommandInput,
  ...rest: any[]
) => Paginator<ListThingTypesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingTypesCommandInput,
  ListThingTypesCommandOutput
>(IoTClient, ListThingTypesCommand, "nextToken", "nextToken", "maxResults");
