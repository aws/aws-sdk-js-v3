// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOutpostBillingInformationCommand,
  GetOutpostBillingInformationCommandInput,
  GetOutpostBillingInformationCommandOutput,
} from "../commands/GetOutpostBillingInformationCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOutpostBillingInformation: (
  config: OutpostsPaginationConfiguration,
  input: GetOutpostBillingInformationCommandInput,
  ...rest: any[]
) => Paginator<GetOutpostBillingInformationCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  GetOutpostBillingInformationCommandInput,
  GetOutpostBillingInformationCommandOutput
>(OutpostsClient, GetOutpostBillingInformationCommand, "NextToken", "NextToken", "MaxResults");
