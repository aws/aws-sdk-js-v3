import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Id3Insertion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id3: {
      shape: {
        type: "string"
      },
      locationName: "id3"
    },
    Timecode: {
      shape: {
        type: "string"
      },
      locationName: "timecode"
    }
  }
};
