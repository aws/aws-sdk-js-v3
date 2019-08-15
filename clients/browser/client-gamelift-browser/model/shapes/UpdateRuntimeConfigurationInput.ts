import { _RuntimeConfiguration } from "./_RuntimeConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRuntimeConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "RuntimeConfiguration"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    RuntimeConfiguration: {
      shape: _RuntimeConfiguration
    }
  }
};
