import { _DeletionTaskFailureReasonType } from "./_DeletionTaskFailureReasonType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceLinkedRoleDeletionStatusOutput: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: _DeletionTaskFailureReasonType
    }
  }
};
