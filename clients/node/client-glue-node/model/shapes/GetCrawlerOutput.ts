import { _Crawler } from "./_Crawler";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCrawlerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Crawler: {
      shape: _Crawler
    }
  }
};
