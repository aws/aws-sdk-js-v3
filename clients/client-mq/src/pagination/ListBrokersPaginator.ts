// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBrokersCommand, ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import { MqClient } from "../MqClient";
import { MqPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrokers: (
  config: MqPaginationConfiguration,
  input: ListBrokersCommandInput,
  ...rest: any[]
) => Paginator<ListBrokersCommandOutput> = createPaginator<
  MqPaginationConfiguration,
  ListBrokersCommandInput,
  ListBrokersCommandOutput
>(MqClient, ListBrokersCommand, "NextToken", "NextToken", "MaxResults");
