import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceUsage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      locationName: "accountId"
    },
    UsedInstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "usedInstanceCount"
    }
  }
};
