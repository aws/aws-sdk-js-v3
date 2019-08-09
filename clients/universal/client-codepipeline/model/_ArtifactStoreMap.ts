import { Map as _Map_ } from "@aws-sdk/types";
import { _ArtifactStore } from "./_ArtifactStore";

export const _ArtifactStoreMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 4
    }
  },
  value: {
    shape: _ArtifactStore
  }
};
