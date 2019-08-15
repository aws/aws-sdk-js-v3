import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartUserImportJobInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "JobId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
