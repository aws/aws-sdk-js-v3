import { _LayerList } from "./_LayerList";
import { _LayerFailureList } from "./_LayerFailureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchCheckLayerAvailabilityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    layers: {
      shape: _LayerList
    },
    failures: {
      shape: _LayerFailureList
    }
  }
};
