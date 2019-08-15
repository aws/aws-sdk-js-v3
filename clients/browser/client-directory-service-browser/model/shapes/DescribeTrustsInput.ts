import { _TrustIds } from "./_TrustIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    TrustIds: {
      shape: _TrustIds
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
