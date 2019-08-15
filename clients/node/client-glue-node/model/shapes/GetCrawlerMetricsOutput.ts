import { _CrawlerMetricsList } from "./_CrawlerMetricsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCrawlerMetricsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrawlerMetricsList: {
      shape: _CrawlerMetricsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
