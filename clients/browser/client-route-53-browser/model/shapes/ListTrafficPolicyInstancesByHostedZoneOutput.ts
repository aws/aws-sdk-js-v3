import { _TrafficPolicyInstances } from "./_TrafficPolicyInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrafficPolicyInstancesByHostedZoneOutput: _Structure_ = {
  type: "structure",
  required: ["TrafficPolicyInstances", "IsTruncated", "MaxItems"],
  members: {
    TrafficPolicyInstances: {
      shape: _TrafficPolicyInstances
    },
    TrafficPolicyInstanceNameMarker: {
      shape: {
        type: "string"
      }
    },
    TrafficPolicyInstanceTypeMarker: {
      shape: {
        type: "string"
      }
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    MaxItems: {
      shape: {
        type: "string"
      }
    }
  }
};
