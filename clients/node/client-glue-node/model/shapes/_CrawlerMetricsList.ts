import { List as _List_ } from "@aws-sdk/types";
import { _CrawlerMetrics } from "./_CrawlerMetrics";

export const _CrawlerMetricsList: _List_ = {
  type: "list",
  member: {
    shape: _CrawlerMetrics
  }
};
