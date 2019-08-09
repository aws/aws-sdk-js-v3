import { _BatchedOperationLayerDigestList } from "./_BatchedOperationLayerDigestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchCheckLayerAvailabilityInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "layerDigests"],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    layerDigests: {
      shape: _BatchedOperationLayerDigestList
    }
  }
};
