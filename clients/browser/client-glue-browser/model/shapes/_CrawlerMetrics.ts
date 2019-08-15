import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CrawlerMetrics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CrawlerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TimeLeftSeconds: {
      shape: {
        type: "float"
      }
    },
    StillEstimating: {
      shape: {
        type: "boolean"
      }
    },
    LastRuntimeSeconds: {
      shape: {
        type: "float"
      }
    },
    MedianRuntimeSeconds: {
      shape: {
        type: "float"
      }
    },
    TablesCreated: {
      shape: {
        type: "integer"
      }
    },
    TablesUpdated: {
      shape: {
        type: "integer"
      }
    },
    TablesDeleted: {
      shape: {
        type: "integer"
      }
    }
  }
};
