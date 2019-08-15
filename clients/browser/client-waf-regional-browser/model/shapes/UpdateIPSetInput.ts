import { _IPSetUpdates } from "./_IPSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIPSetInput: _Structure_ = {
  type: "structure",
  required: ["IPSetId", "ChangeToken", "Updates"],
  members: {
    IPSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _IPSetUpdates
    }
  }
};
