import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: [
    "PolicyName",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension"
  ],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalableDimension: {
      shape: {
        type: "string"
      }
    }
  }
};
