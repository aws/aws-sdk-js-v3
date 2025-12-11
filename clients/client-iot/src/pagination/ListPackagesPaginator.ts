// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "../commands/ListPackagesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackages: (
  config: IoTPaginationConfiguration,
  input: ListPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListPackagesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPackagesCommandInput,
  ListPackagesCommandOutput
>(IoTClient, ListPackagesCommand, "nextToken", "nextToken", "maxResults");
