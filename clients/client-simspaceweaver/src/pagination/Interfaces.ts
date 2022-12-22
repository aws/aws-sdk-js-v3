// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SimSpaceWeaver } from "../SimSpaceWeaver";
import { SimSpaceWeaverClient } from "../SimSpaceWeaverClient";

export interface SimSpaceWeaverPaginationConfiguration extends PaginationConfiguration {
  client: SimSpaceWeaver | SimSpaceWeaverClient;
}
