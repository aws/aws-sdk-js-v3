import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTemplateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateStage: {
      shape: {
        type: "string"
      }
    }
  }
};
