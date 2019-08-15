import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectOutput: _Structure_ = {
  type: "structure",
  required: ["id", "arn"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    projectTemplateId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
