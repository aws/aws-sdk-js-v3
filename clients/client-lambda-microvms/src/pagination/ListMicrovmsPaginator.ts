// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMicrovmsCommand,
  ListMicrovmsCommandInput,
  ListMicrovmsCommandOutput,
} from "../commands/ListMicrovmsCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrovms: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListMicrovmsCommandInput,
  ...rest: any[]
) => Paginator<ListMicrovmsCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListMicrovmsCommandInput,
  ListMicrovmsCommandOutput
>(LambdaMicrovmsClient, ListMicrovmsCommand, "nextToken", "nextToken", "maxResults");
