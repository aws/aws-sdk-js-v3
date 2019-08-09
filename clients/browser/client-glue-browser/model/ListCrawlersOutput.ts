import { _CrawlerNameList } from "./_CrawlerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCrawlersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrawlerNames: {
      shape: _CrawlerNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
