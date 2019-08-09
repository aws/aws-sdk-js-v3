import { _TrafficPolicyInstance } from "./_TrafficPolicyInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficPolicyInstanceOutput: _Structure_ = {
  type: "structure",
  required: ["TrafficPolicyInstance", "Location"],
  members: {
    TrafficPolicyInstance: {
      shape: _TrafficPolicyInstance
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
