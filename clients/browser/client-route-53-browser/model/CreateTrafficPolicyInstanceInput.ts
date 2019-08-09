import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficPolicyInstanceInput: _Structure_ = {
  type: "structure",
  required: [
    "HostedZoneId",
    "Name",
    "TTL",
    "TrafficPolicyId",
    "TrafficPolicyVersion"
  ],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
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
