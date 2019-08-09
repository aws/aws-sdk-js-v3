import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFlowTemplateInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    revisionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
