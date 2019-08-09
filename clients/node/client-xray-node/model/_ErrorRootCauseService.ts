import { _ServiceNames } from "./_ServiceNames";
import { _ErrorRootCauseEntityPath } from "./_ErrorRootCauseEntityPath";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorRootCauseService: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Names: {
      shape: _ServiceNames
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    EntityPath: {
      shape: _ErrorRootCauseEntityPath
    },
    Inferred: {
      shape: {
        type: "boolean"
      }
    }
  }
};
