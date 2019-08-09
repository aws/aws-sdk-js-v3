import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSoftwareUpdateJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IotJobArn: {
      shape: {
        type: "string"
      }
    },
    IotJobId: {
      shape: {
        type: "string"
      }
    }
  }
};
