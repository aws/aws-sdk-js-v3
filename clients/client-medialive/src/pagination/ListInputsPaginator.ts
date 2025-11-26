// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInputs: (
  config: MediaLivePaginationConfiguration,
  input: ListInputsCommandInput,
  ...rest: any[]
) => Paginator<ListInputsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListInputsCommandInput,
  ListInputsCommandOutput
>(MediaLiveClient, ListInputsCommand, "NextToken", "NextToken", "MaxResults");
