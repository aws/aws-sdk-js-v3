import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTrafficPolicyInstanceInput: _Structure_ = {
  type: "structure",
  required: ["Id", "TTL", "TrafficPolicyId", "TrafficPolicyVersion"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Id"
    },
    TTL: {
      shape: {
        type: "integer"
      }
    },
    TrafficPolicyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrafficPolicyVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
