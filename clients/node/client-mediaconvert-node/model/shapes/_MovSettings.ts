import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MovSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClapAtom: {
      shape: {
        type: "string"
      },
      locationName: "clapAtom"
    },
    CslgAtom: {
      shape: {
        type: "string"
      },
      locationName: "cslgAtom"
    },
    Mpeg2FourCCControl: {
      shape: {
        type: "string"
      },
      locationName: "mpeg2FourCCControl"
    },
    PaddingControl: {
      shape: {
        type: "string"
      },
      locationName: "paddingControl"
    },
    Reference: {
      shape: {
        type: "string"
      },
      locationName: "reference"
    }
  }
};
