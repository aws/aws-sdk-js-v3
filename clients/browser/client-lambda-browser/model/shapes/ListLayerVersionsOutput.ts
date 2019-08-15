import { _LayerVersionsList } from "./_LayerVersionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLayerVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    LayerVersions: {
      shape: _LayerVersionsList
    }
  }
};
