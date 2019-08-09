import { _ServiceNames } from "./_ServiceNames";
import { _ResponseTimeRootCauseEntityPath } from "./_ResponseTimeRootCauseEntityPath";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseTimeRootCauseService: _Structure_ = {
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
      shape: _ResponseTimeRootCauseEntityPath
    },
    Inferred: {
      shape: {
        type: "boolean"
      }
    }
  }
};
