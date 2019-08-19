import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsTimedMetadataScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["Id3"],
  members: {
    Id3: {
      shape: {
        type: "string"
      },
      locationName: "id3"
    }
  }
};
