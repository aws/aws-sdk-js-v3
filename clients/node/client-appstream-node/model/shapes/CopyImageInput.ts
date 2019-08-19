import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyImageInput: _Structure_ = {
  type: "structure",
  required: ["SourceImageName", "DestinationImageName", "DestinationRegion"],
  members: {
    SourceImageName: {
      shape: {
        type: "string"
      }
    },
    DestinationImageName: {
      shape: {
        type: "string"
      }
    },
    DestinationRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DestinationImageDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
