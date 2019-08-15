import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputLossBehavior: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlackFrameMsec: {
      shape: {
        type: "integer"
      },
      locationName: "blackFrameMsec"
    },
    InputLossImageColor: {
      shape: {
        type: "string",
        min: 6
      },
      locationName: "inputLossImageColor"
    },
    InputLossImageSlate: {
      shape: _InputLocation,
      locationName: "inputLossImageSlate"
    },
    InputLossImageType: {
      shape: {
        type: "string"
      },
      locationName: "inputLossImageType"
    },
    RepeatFrameMsec: {
      shape: {
        type: "integer"
      },
      locationName: "repeatFrameMsec"
    }
  }
};
