import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maximumPercent: {
      shape: {
        type: "integer"
      }
    },
    minimumHealthyPercent: {
      shape: {
        type: "integer"
      }
    }
  }
};
