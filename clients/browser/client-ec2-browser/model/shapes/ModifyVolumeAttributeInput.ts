import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVolumeAttributeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    AutoEnableIO: {
      shape: _AttributeBooleanValue
    },
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
