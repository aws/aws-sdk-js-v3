import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficPolicyInstance: _Structure_ = {
  type: "structure",
  required: [
    "Id",
    "HostedZoneId",
    "Name",
    "TTL",
    "State",
    "Message",
    "TrafficPolicyId",
    "TrafficPolicyVersion",
    "TrafficPolicyType"
  ],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    State: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
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
    },
    TrafficPolicyType: {
      shape: {
        type: "string"
      }
    }
  }
};
