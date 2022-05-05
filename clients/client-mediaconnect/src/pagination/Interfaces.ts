// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaConnect } from "../MediaConnect";
import { MediaConnectClient } from "../MediaConnectClient";

export interface MediaConnectPaginationConfiguration extends PaginationConfiguration {
  client: MediaConnect | MediaConnectClient;
}
