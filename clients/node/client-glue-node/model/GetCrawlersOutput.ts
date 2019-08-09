import { _CrawlerList } from "./_CrawlerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCrawlersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Crawlers: {
      shape: _CrawlerList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
