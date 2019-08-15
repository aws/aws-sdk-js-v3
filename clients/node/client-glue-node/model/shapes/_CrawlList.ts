import { List as _List_ } from "@aws-sdk/types";
import { _Crawl } from "./_Crawl";

export const _CrawlList: _List_ = {
  type: "list",
  member: {
    shape: _Crawl
  }
};
