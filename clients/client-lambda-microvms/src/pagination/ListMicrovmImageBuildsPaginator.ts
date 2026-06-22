// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMicrovmImageBuildsCommand,
  ListMicrovmImageBuildsCommandInput,
  ListMicrovmImageBuildsCommandOutput,
} from "../commands/ListMicrovmImageBuildsCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrovmImageBuilds: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListMicrovmImageBuildsCommandInput,
  ...rest: any[]
) => Paginator<ListMicrovmImageBuildsCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListMicrovmImageBuildsCommandInput,
  ListMicrovmImageBuildsCommandOutput
>(LambdaMicrovmsClient, ListMicrovmImageBuildsCommand, "nextToken", "nextToken", "maxResults");
