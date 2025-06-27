// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAddressListImportJobsCommand,
  ListAddressListImportJobsCommandInput,
  ListAddressListImportJobsCommandOutput,
} from "../commands/ListAddressListImportJobsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAddressListImportJobs: (
  config: MailManagerPaginationConfiguration,
  input: ListAddressListImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAddressListImportJobsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListAddressListImportJobsCommandInput,
  ListAddressListImportJobsCommandOutput
>(MailManagerClient, ListAddressListImportJobsCommand, "NextToken", "NextToken", "PageSize");
