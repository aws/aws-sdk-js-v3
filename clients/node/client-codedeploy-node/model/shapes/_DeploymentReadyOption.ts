import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentReadyOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionOnTimeout: {
      shape: {
        type: "string"
      }
    },
    waitTimeInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
