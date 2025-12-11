// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlywheelsCommand,
  ListFlywheelsCommandInput,
  ListFlywheelsCommandOutput,
} from "../commands/ListFlywheelsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlywheels: (
  config: ComprehendPaginationConfiguration,
  input: ListFlywheelsCommandInput,
  ...rest: any[]
) => Paginator<ListFlywheelsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListFlywheelsCommandInput,
  ListFlywheelsCommandOutput
>(ComprehendClient, ListFlywheelsCommand, "NextToken", "NextToken", "MaxResults");
