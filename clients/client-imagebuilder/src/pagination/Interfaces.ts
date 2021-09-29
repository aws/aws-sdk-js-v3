import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ImagebuilderPaginationConfiguration extends PaginationConfiguration {
  client: Imagebuilder | ImagebuilderClient;
}
