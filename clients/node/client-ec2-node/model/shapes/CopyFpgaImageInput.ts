import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyFpgaImageInput: _Structure_ = {
  type: "structure",
  required: ["SourceFpgaImageId", "SourceRegion"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    SourceFpgaImageId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
