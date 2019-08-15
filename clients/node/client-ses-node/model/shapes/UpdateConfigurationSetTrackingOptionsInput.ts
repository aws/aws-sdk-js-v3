import { _TrackingOptions } from "./_TrackingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigurationSetTrackingOptionsInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName", "TrackingOptions"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    TrackingOptions: {
      shape: _TrackingOptions
    }
  }
};
