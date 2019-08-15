import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlackoutSlate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlackoutSlateImage: {
      shape: _InputLocation,
      locationName: "blackoutSlateImage"
    },
    NetworkEndBlackout: {
      shape: {
        type: "string"
      },
      locationName: "networkEndBlackout"
    },
    NetworkEndBlackoutImage: {
      shape: _InputLocation,
      locationName: "networkEndBlackoutImage"
    },
    NetworkId: {
      shape: {
        type: "string",
        min: 34
      },
      locationName: "networkId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
