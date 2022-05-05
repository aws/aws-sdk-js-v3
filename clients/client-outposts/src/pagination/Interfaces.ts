// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";

export interface OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: Outposts | OutpostsClient;
}
