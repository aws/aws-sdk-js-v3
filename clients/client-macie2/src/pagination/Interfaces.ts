import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Macie2PaginationConfiguration extends PaginationConfiguration {
  client: Macie2 | Macie2Client;
}
