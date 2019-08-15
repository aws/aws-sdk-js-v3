import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLoadBalancerAttributeInput: _Structure_ = {
  type: "structure",
  required: ["loadBalancerName", "attributeName", "attributeValue"],
  members: {
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    attributeName: {
      shape: {
        type: "string"
      }
    },
    attributeValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
