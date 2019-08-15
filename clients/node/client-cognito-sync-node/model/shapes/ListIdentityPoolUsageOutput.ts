import { _IdentityPoolUsageList } from "./_IdentityPoolUsageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityPoolUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolUsages: {
      shape: _IdentityPoolUsageList
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    Count: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
