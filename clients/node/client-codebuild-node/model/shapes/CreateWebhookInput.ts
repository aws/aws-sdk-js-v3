import { _FilterGroups } from "./_FilterGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWebhookInput: _Structure_ = {
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
    filterGroups: {
      shape: _FilterGroups
    }
  }
};
