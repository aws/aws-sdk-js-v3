import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    projectId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    projectArn: {
      shape: {
        type: "string"
      }
    }
  }
};
