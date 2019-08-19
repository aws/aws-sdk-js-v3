import { _DetectorModelDefinition } from "./_DetectorModelDefinition";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDetectorModelInput: _Structure_ = {
  type: "structure",
  required: ["detectorModelName", "detectorModelDefinition", "roleArn"],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    detectorModelDefinition: {
      shape: _DetectorModelDefinition
    },
    detectorModelDescription: {
      shape: {
        type: "string"
      }
    },
    key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
