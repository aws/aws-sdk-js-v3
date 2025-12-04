// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOriginationNumbersCommand,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "../commands/ListOriginationNumbersCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOriginationNumbers: (
  config: SNSPaginationConfiguration,
  input: ListOriginationNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListOriginationNumbersCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput
>(SNSClient, ListOriginationNumbersCommand, "NextToken", "NextToken", "MaxResults");
