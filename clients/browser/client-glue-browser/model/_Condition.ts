import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Condition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogicalOperator: {
      shape: {
        type: "string"
      }
    },
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    CrawlerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CrawlState: {
      shape: {
        type: "string"
      }
    }
  }
};
