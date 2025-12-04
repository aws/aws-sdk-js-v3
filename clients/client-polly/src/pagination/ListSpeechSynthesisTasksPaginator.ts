// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSpeechSynthesisTasksCommand,
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
} from "../commands/ListSpeechSynthesisTasksCommand";
import { PollyClient } from "../PollyClient";
import { PollyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpeechSynthesisTasks: (
  config: PollyPaginationConfiguration,
  input: ListSpeechSynthesisTasksCommandInput,
  ...rest: any[]
) => Paginator<ListSpeechSynthesisTasksCommandOutput> = createPaginator<
  PollyPaginationConfiguration,
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput
>(PollyClient, ListSpeechSynthesisTasksCommand, "NextToken", "NextToken", "MaxResults");
