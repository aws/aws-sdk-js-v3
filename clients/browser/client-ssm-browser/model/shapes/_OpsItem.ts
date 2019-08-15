import { _OpsItemNotifications } from "./_OpsItemNotifications";
import { _RelatedOpsItems } from "./_RelatedOpsItems";
import { _OpsItemOperationalData } from "./_OpsItemOperationalData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedBy: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Notifications: {
      shape: _OpsItemNotifications
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RelatedOpsItems: {
      shape: _RelatedOpsItems
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    OpsItemId: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Source: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperationalData: {
      shape: _OpsItemOperationalData
    }
  }
};
