import { _CrawlerNameList } from "./_CrawlerNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCrawlerMetricsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrawlerNameList: {
      shape: _CrawlerNameList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
