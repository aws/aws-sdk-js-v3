import { _CrawlerNameList } from "./_CrawlerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetCrawlersInput: _Structure_ = {
  type: "structure",
  required: ["CrawlerNames"],
  members: {
    CrawlerNames: {
      shape: _CrawlerNameList
    }
  }
};
