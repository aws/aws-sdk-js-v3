import { _TrafficPolicy } from "./_TrafficPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficPolicyOutput: _Structure_ = {
  type: "structure",
  required: ["TrafficPolicy", "Location"],
  members: {
    TrafficPolicy: {
      shape: _TrafficPolicy
    },
    Location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    }
  }
};
