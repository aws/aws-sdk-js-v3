import { _CrawlList } from "./_CrawlList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CrawlerNodeDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Crawls: {
      shape: _CrawlList
    }
  }
};
