import { _JobData } from "./_JobData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    data: {
      shape: _JobData
    },
    nonce: {
      shape: {
        type: "string",
        min: 1
      }
    },
    accountId: {
      shape: {
        type: "string"
      }
    }
  }
};
