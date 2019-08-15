import { _MitigationActionParams } from "./_MitigationActionParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMitigationActionInput: _Structure_ = {
  type: "structure",
  required: ["actionName"],
  members: {
    actionName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "actionName"
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    actionParams: {
      shape: _MitigationActionParams
    }
  }
};
