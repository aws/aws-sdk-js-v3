import { _ValidationErrors } from "./_ValidationErrors";
import { _ValidationWarnings } from "./_ValidationWarnings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidatePipelineDefinitionOutput: _Structure_ = {
  type: "structure",
  required: ["errored"],
  members: {
    validationErrors: {
      shape: _ValidationErrors
    },
    validationWarnings: {
      shape: _ValidationWarnings
    },
    errored: {
      shape: {
        type: "boolean"
      }
    }
  }
};
