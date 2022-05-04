// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WorkLink } from "../WorkLink";
import { WorkLinkClient } from "../WorkLinkClient";

export interface WorkLinkPaginationConfiguration extends PaginationConfiguration {
  client: WorkLink | WorkLinkClient;
}
