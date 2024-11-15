// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListThingPrincipalsV2Command,
  ListThingPrincipalsV2CommandInput,
  ListThingPrincipalsV2CommandOutput,
} from "../commands/ListThingPrincipalsV2Command";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingPrincipalsV2: (
  config: IoTPaginationConfiguration,
  input: ListThingPrincipalsV2CommandInput,
  ...rest: any[]
) => Paginator<ListThingPrincipalsV2CommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingPrincipalsV2CommandInput,
  ListThingPrincipalsV2CommandOutput
>(IoTClient, ListThingPrincipalsV2Command, "nextToken", "nextToken", "maxResults");
