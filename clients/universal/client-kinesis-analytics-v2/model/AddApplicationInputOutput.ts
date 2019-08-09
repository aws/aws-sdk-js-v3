import { _InputDescriptions } from "./_InputDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationInputOutput: _Structure_ = {
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
    InputDescriptions: {
      shape: _InputDescriptions
    }
  }
};
