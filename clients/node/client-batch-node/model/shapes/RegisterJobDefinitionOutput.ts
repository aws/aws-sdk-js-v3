import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterJobDefinitionOutput: _Structure_ = {
  type: "structure",
  required: ["jobDefinitionName", "jobDefinitionArn", "revision"],
  members: {
    jobDefinitionName: {
      shape: {
        type: "string"
      }
    },
    jobDefinitionArn: {
      shape: {
        type: "string"
      }
    },
    revision: {
      shape: {
        type: "integer"
      }
    }
  }
};
