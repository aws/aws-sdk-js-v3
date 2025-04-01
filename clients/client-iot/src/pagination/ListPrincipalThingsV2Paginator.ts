// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListPrincipalThingsV2Command,
  ListPrincipalThingsV2CommandInput,
  ListPrincipalThingsV2CommandOutput,
} from "../commands/ListPrincipalThingsV2Command";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipalThingsV2: (
  config: IoTPaginationConfiguration,
  input: ListPrincipalThingsV2CommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalThingsV2CommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPrincipalThingsV2CommandInput,
  ListPrincipalThingsV2CommandOutput
>(IoTClient, ListPrincipalThingsV2Command, "nextToken", "nextToken", "maxResults");
