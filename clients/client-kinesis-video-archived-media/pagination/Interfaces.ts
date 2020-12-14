import { KinesisVideoArchivedMedia } from "../KinesisVideoArchivedMedia";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KinesisVideoArchivedMediaPaginationConfiguration extends PaginationConfiguration {
  client: KinesisVideoArchivedMedia | KinesisVideoArchivedMediaClient;
}
