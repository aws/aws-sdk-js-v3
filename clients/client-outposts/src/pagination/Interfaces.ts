import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface OutpostsPaginationConfiguration extends PaginationConfiguration {
  client: Outposts | OutpostsClient;
}
