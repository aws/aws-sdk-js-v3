import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2ResourceUtilization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxCpuUtilizationPercentage: {
      shape: {
        type: "string"
      }
    },
    MaxMemoryUtilizationPercentage: {
      shape: {
        type: "string"
      }
    },
    MaxStorageUtilizationPercentage: {
      shape: {
        type: "string"
      }
    }
  }
};
