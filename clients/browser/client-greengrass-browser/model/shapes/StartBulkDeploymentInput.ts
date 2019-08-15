import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBulkDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["ExecutionRoleArn", "InputFileUri"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    ExecutionRoleArn: {
      shape: {
        type: "string"
      }
    },
    InputFileUri: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
