import { MediaStore } from "../MediaStore";
import { MediaStoreClient } from "../MediaStoreClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaStorePaginationConfiguration extends PaginationConfiguration {
  client: MediaStore | MediaStoreClient;
}
