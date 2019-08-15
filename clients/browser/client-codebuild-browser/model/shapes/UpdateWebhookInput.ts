import { _FilterGroups } from "./_FilterGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWebhookInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    branchFilter: {
      shape: {
        type: "string"
      }
    },
    rotateSecret: {
      shape: {
        type: "boolean"
      }
    },
    filterGroups: {
      shape: _FilterGroups
    }
  }
};
