import { _TrafficPolicy } from "./_TrafficPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTrafficPolicyOutput: _Structure_ = {
  type: "structure",
  required: ["TrafficPolicy"],
  members: {
    TrafficPolicy: {
      shape: _TrafficPolicy
    }
  }
};
