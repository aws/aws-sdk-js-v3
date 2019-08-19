import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserImportJobInput: _Structure_ = {
  type: "structure",
  required: ["JobName", "UserPoolId", "CloudWatchLogsRoleArn"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CloudWatchLogsRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
