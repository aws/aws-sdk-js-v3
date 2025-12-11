// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "../commands/ListJobExecutionsForJobCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobExecutionsForJob: (
  config: IoTPaginationConfiguration,
  input: ListJobExecutionsForJobCommandInput,
  ...rest: any[]
) => Paginator<ListJobExecutionsForJobCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput
>(IoTClient, ListJobExecutionsForJobCommand, "nextToken", "nextToken", "maxResults");
