import { _LayersList } from "./_LayersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLayersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    Layers: {
      shape: _LayersList
    }
  }
};
