import { List as _List_ } from "@aws-sdk/types";
import { _Crawler } from "./_Crawler";

export const _CrawlerList: _List_ = {
  type: "list",
  member: {
    shape: _Crawler
  }
};
