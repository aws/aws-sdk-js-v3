import { MediaConvert } from "../MediaConvert";
import { MediaConvertClient } from "../MediaConvertClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaConvertPaginationConfiguration extends PaginationConfiguration {
  client: MediaConvert | MediaConvertClient;
}
