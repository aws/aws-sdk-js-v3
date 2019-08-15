import { _ThirdPartyJobData } from "./_ThirdPartyJobData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThirdPartyJobDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    data: {
      shape: _ThirdPartyJobData
    },
    nonce: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
