import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeployedImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SpecifiedImage: {
      shape: {
        type: "string"
      }
    },
    ResolvedImage: {
      shape: {
        type: "string"
      }
    },
    ResolutionTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
