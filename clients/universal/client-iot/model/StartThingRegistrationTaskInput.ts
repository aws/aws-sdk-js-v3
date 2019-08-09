import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartThingRegistrationTaskInput: _Structure_ = {
  type: "structure",
  required: ["templateBody", "inputFileBucket", "inputFileKey", "roleArn"],
  members: {
    templateBody: {
      shape: {
        type: "string"
      }
    },
    inputFileBucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    inputFileKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
