import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailBlanking: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailBlankingImage: {
      shape: _InputLocation,
      locationName: "availBlankingImage"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
