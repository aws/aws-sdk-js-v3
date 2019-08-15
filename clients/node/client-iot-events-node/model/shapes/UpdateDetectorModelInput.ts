import { _DetectorModelDefinition } from "./_DetectorModelDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDetectorModelInput: _Structure_ = {
  type: "structure",
  required: ["detectorModelName", "detectorModelDefinition", "roleArn"],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorModelName"
    },
    detectorModelDefinition: {
      shape: _DetectorModelDefinition
    },
    detectorModelDescription: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
