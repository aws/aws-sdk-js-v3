import { _InputProcessingConfigurationDescription } from "./_InputProcessingConfigurationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationInputProcessingConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationVersionId: {
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
    InputProcessingConfigurationDescription: {
      shape: _InputProcessingConfigurationDescription
    }
  }
};
