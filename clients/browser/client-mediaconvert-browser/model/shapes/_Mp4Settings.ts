import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Mp4Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CslgAtom: {
      shape: {
        type: "string"
      },
      locationName: "cslgAtom"
    },
    FreeSpaceBox: {
      shape: {
        type: "string"
      },
      locationName: "freeSpaceBox"
    },
    MoovPlacement: {
      shape: {
        type: "string"
      },
      locationName: "moovPlacement"
    },
    Mp4MajorBrand: {
      shape: {
        type: "string"
      },
      locationName: "mp4MajorBrand"
    }
  }
};
