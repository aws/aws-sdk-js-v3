// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobTemplates: (
  config: IoTPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListJobTemplatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput
>(IoTClient, ListJobTemplatesCommand, "nextToken", "nextToken", "maxResults");
