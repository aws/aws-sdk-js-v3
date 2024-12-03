// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockRuntimeClient } from "../BedrockRuntimeClient";
import {
  ListAsyncInvokesCommand,
  ListAsyncInvokesCommandInput,
  ListAsyncInvokesCommandOutput,
} from "../commands/ListAsyncInvokesCommand";
import { BedrockRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAsyncInvokes: (
  config: BedrockRuntimePaginationConfiguration,
  input: ListAsyncInvokesCommandInput,
  ...rest: any[]
) => Paginator<ListAsyncInvokesCommandOutput> = createPaginator<
  BedrockRuntimePaginationConfiguration,
  ListAsyncInvokesCommandInput,
  ListAsyncInvokesCommandOutput
>(BedrockRuntimeClient, ListAsyncInvokesCommand, "nextToken", "nextToken", "maxResults");
