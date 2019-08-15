import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCrawlerScheduleInput: _Structure_ = {
  type: "structure",
  required: ["CrawlerName"],
  members: {
    CrawlerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Schedule: {
      shape: {
        type: "string"
      }
    }
  }
};
