import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunPropertiesInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RunId"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
