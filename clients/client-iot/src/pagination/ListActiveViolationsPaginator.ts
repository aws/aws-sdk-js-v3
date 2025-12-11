// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListActiveViolationsCommand,
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "../commands/ListActiveViolationsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActiveViolations: (
  config: IoTPaginationConfiguration,
  input: ListActiveViolationsCommandInput,
  ...rest: any[]
) => Paginator<ListActiveViolationsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput
>(IoTClient, ListActiveViolationsCommand, "nextToken", "nextToken", "maxResults");
