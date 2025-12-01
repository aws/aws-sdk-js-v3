// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetOutpostInstanceTypesCommand,
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "../commands/GetOutpostInstanceTypesCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetOutpostInstanceTypes: (
  config: OutpostsPaginationConfiguration,
  input: GetOutpostInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<GetOutpostInstanceTypesCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput
>(OutpostsClient, GetOutpostInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
