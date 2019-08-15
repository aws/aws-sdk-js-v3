import { _ServiceNames } from "./_ServiceNames";
import { _FaultRootCauseEntityPath } from "./_FaultRootCauseEntityPath";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaultRootCauseService: _Structure_ = {
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
      shape: _FaultRootCauseEntityPath
    },
    Inferred: {
      shape: {
        type: "boolean"
      }
    }
  }
};
