import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountQuota: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountQuotaName: {
      shape: {
        type: "string"
      }
    },
    Used: {
      shape: {
        type: "integer"
      }
    },
    Max: {
      shape: {
        type: "integer"
      }
    }
  }
};
