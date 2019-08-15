import { _DestinationSettings } from "./_DestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Destination: {
      shape: {
        type: "string"
      },
      locationName: "destination"
    },
    DestinationSettings: {
      shape: _DestinationSettings,
      locationName: "destinationSettings"
    }
  }
};
