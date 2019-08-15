import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopCrawlerScheduleInput: _Structure_ = {
  type: "structure",
  required: ["CrawlerName"],
  members: {
    CrawlerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
