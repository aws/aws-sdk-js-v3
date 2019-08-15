import { ___listOfMediaPackageOutputDestinationSettings } from "./___listOfMediaPackageOutputDestinationSettings";
import { ___listOfOutputDestinationSettings } from "./___listOfOutputDestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    MediaPackageSettings: {
      shape: ___listOfMediaPackageOutputDestinationSettings,
      locationName: "mediaPackageSettings"
    },
    Settings: {
      shape: ___listOfOutputDestinationSettings,
      locationName: "settings"
    }
  }
};
