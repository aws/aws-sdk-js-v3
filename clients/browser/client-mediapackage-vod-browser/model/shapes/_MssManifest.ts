import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MssManifest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManifestName: {
      shape: {
        type: "string"
      },
      locationName: "manifestName"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    }
  }
};
