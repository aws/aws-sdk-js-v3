import { _CrawlerList } from "./_CrawlerList";
import { _CrawlerNameList } from "./_CrawlerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetCrawlersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Crawlers: {
      shape: _CrawlerList
    },
    CrawlersNotFound: {
      shape: _CrawlerNameList
    }
  }
};
