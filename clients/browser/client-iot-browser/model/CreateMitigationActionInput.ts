import { _MitigationActionParams } from "./_MitigationActionParams";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMitigationActionInput: _Structure_ = {
  type: "structure",
  required: ["actionName", "roleArn", "actionParams"],
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
    },
    tags: {
      shape: _TagList
    }
  }
};
