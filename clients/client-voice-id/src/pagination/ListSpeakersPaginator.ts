// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSpeakersCommand,
  ListSpeakersCommandInput,
  ListSpeakersCommandOutput,
} from "../commands/ListSpeakersCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpeakers: (
  config: VoiceIDPaginationConfiguration,
  input: ListSpeakersCommandInput,
  ...rest: any[]
) => Paginator<ListSpeakersCommandOutput> = createPaginator<
  VoiceIDPaginationConfiguration,
  ListSpeakersCommandInput,
  ListSpeakersCommandOutput
>(VoiceIDClient, ListSpeakersCommand, "NextToken", "NextToken", "MaxResults");
