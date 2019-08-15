import { _SessionManagerParameters } from "./_SessionManagerParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSessionInput: _Structure_ = {
  type: "structure",
  required: ["Target"],
  members: {
    Target: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DocumentName: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _SessionManagerParameters
    }
  }
};
