import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HealthCheckCustomConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailureThreshold: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
