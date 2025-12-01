// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreams: (
  config: IoTPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListStreamsCommandInput,
  ListStreamsCommandOutput
>(IoTClient, ListStreamsCommand, "nextToken", "nextToken", "maxResults");
