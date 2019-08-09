import { _RootCauseExceptions } from "./_RootCauseExceptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorRootCauseEntity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Exceptions: {
      shape: _RootCauseExceptions
    },
    Remote: {
      shape: {
        type: "boolean"
      }
    }
  }
};
