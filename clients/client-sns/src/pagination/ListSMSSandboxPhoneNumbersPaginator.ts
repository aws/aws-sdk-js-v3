// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSMSSandboxPhoneNumbersCommand,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "../commands/ListSMSSandboxPhoneNumbersCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSMSSandboxPhoneNumbers: (
  config: SNSPaginationConfiguration,
  input: ListSMSSandboxPhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListSMSSandboxPhoneNumbersCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput
>(SNSClient, ListSMSSandboxPhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
