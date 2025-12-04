// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFraudstersCommand,
  ListFraudstersCommandInput,
  ListFraudstersCommandOutput,
} from "../commands/ListFraudstersCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFraudsters: (
  config: VoiceIDPaginationConfiguration,
  input: ListFraudstersCommandInput,
  ...rest: any[]
) => Paginator<ListFraudstersCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListFraudstersCommandInput,
  ListFraudstersCommandOutput
>(VoiceIDClient, ListFraudstersCommand, "NextToken", "NextToken", "MaxResults");
