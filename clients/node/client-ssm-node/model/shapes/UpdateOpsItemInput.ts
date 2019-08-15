import { _OpsItemOperationalData } from "./_OpsItemOperationalData";
import { _OpsItemOpsDataKeysList } from "./_OpsItemOpsDataKeysList";
import { _OpsItemNotifications } from "./_OpsItemNotifications";
import { _RelatedOpsItems } from "./_RelatedOpsItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateOpsItemInput: _Structure_ = {
  type: "structure",
  required: ["OpsItemId"],
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
    OperationalDataToDelete: {
      shape: _OpsItemOpsDataKeysList
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
    Title: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
