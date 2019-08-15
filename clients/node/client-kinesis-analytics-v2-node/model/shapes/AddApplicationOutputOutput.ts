import { _OutputDescriptions } from "./_OutputDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationOutputOutput: _Structure_ = {
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
    OutputDescriptions: {
      shape: _OutputDescriptions
    }
  }
};
