import { _InputProcessingConfiguration } from "./_InputProcessingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationInputProcessingConfigurationInput: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "CurrentApplicationVersionId",
    "InputId",
    "InputProcessingConfiguration"
  ],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    InputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputProcessingConfiguration: {
      shape: _InputProcessingConfiguration
    }
  }
};
