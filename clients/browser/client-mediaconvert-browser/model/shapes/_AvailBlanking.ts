import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailBlanking: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailBlankingImage: {
      shape: {
        type: "string",
        min: 14
      },
      locationName: "availBlankingImage"
    }
  }
};
