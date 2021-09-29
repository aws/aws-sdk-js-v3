import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface NeptunePaginationConfiguration extends PaginationConfiguration {
  client: Neptune | NeptuneClient;
}
