import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AncillarySourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceAncillaryChannelNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "sourceAncillaryChannelNumber"
    }
  }
};
