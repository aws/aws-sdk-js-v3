import { _AvailSettings } from "./_AvailSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailSettings: {
      shape: _AvailSettings,
      locationName: "availSettings"
    }
  }
};
