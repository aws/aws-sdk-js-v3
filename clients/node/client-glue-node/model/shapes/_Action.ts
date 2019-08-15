import { _GenericMap } from "./_GenericMap";
import { _NotificationProperty } from "./_NotificationProperty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Action: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arguments: {
      shape: _GenericMap
    },
    Timeout: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationProperty: {
      shape: _NotificationProperty
    },
    CrawlerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
