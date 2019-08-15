import { _TargetDescription } from "./_TargetDescription";
import { _TargetHealth } from "./_TargetHealth";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetHealthDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Target: {
      shape: _TargetDescription
    },
    HealthCheckPort: {
      shape: {
        type: "string"
      }
    },
    TargetHealth: {
      shape: _TargetHealth
    }
  }
};
