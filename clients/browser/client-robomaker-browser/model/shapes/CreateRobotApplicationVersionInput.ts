import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRobotApplicationVersionInput: _Structure_ = {
  type: "structure",
  required: ["application"],
  members: {
    application: {
      shape: {
        type: "string",
        min: 1
      }
    },
    currentRevisionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
