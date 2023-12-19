// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSipMediaApplications: (
  config: ChimePaginationConfiguration,
  input: ListSipMediaApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListSipMediaApplicationsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput
>(ChimeClient, ListSipMediaApplicationsCommand, "NextToken", "NextToken", "MaxResults");
