import { MediaStoreData } from "../MediaStoreData";
import { MediaStoreDataClient } from "../MediaStoreDataClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaStoreDataPaginationConfiguration extends PaginationConfiguration {
  client: MediaStoreData | MediaStoreDataClient;
}
