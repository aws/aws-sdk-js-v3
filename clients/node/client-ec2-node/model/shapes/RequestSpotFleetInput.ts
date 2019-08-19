import { _SpotFleetRequestConfigData } from "./_SpotFleetRequestConfigData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestSpotFleetInput: _Structure_ = {
  type: "structure",
  required: ["SpotFleetRequestConfig"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    SpotFleetRequestConfig: {
      shape: _SpotFleetRequestConfigData,
      locationName: "spotFleetRequestConfig"
    }
  }
};
