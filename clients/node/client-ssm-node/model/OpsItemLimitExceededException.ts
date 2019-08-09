import { _OpsItemParameterNamesList } from "./_OpsItemParameterNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const OpsItemLimitExceededException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceTypes: {
      shape: _OpsItemParameterNamesList
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    LimitType: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "OpsItemLimitExceededException"
};
