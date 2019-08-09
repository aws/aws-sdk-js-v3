import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterScalableTargetInput: _Structure_ = {
  type: "structure",
  required: ["ServiceNamespace", "ResourceId", "ScalableDimension"],
  members: {
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
