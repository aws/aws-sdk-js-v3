import { _OpsItemOperationalData } from "./_OpsItemOperationalData";
import { _OpsItemNotifications } from "./_OpsItemNotifications";
import { _RelatedOpsItems } from "./_RelatedOpsItems";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOpsItemInput: _Structure_ = {
  type: "structure",
  required: ["Description", "Source", "Title"],
  members: {
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperationalData: {
      shape: _OpsItemOperationalData
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
    Source: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Title: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
