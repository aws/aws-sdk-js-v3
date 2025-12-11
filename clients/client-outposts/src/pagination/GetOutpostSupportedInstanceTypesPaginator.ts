// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOutpostSupportedInstanceTypesCommand,
  GetOutpostSupportedInstanceTypesCommandInput,
  GetOutpostSupportedInstanceTypesCommandOutput,
} from "../commands/GetOutpostSupportedInstanceTypesCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOutpostSupportedInstanceTypes: (
  config: OutpostsPaginationConfiguration,
  input: GetOutpostSupportedInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<GetOutpostSupportedInstanceTypesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  GetOutpostSupportedInstanceTypesCommandInput,
  GetOutpostSupportedInstanceTypesCommandOutput
>(OutpostsClient, GetOutpostSupportedInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
