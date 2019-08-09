import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopDeploymentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
