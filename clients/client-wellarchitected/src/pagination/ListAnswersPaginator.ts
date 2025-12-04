// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAnswersCommand, ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnswers: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAnswersCommandInput,
  ...rest: any[]
) => Paginator<ListAnswersCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAnswersCommandInput,
  ListAnswersCommandOutput
>(WellArchitectedClient, ListAnswersCommand, "NextToken", "NextToken", "MaxResults");
