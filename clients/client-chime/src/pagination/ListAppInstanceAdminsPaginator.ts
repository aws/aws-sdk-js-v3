// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppInstanceAdmins: (
  config: ChimePaginationConfiguration,
  input: ListAppInstanceAdminsCommandInput,
  ...rest: any[]
) => Paginator<ListAppInstanceAdminsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput
>(ChimeClient, ListAppInstanceAdminsCommand, "NextToken", "NextToken", "MaxResults");
