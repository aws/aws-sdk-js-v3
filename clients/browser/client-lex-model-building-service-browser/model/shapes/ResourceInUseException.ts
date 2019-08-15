import { _ResourceReference } from "./_ResourceReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceInUseException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    referenceType: {
      shape: {
        type: "string"
      }
    },
    exampleReference: {
      shape: _ResourceReference
    }
  },
  exceptionType: "ResourceInUseException"
};
