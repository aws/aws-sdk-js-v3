import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceRegion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegionName: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
