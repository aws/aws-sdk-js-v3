import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashManifest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManifestName: {
      shape: {
        type: "string"
      },
      locationName: "manifestName"
    },
    MinBufferTimeSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "minBufferTimeSeconds"
    },
    Profile: {
      shape: {
        type: "string"
      },
      locationName: "profile"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    }
  }
};
