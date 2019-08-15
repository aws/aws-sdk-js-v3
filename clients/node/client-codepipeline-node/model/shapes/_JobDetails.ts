import { _JobData } from "./_JobData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobDetails: _Structure_ = {
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
    accountId: {
      shape: {
        type: "string"
      }
    }
  }
};
