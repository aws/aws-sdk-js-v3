import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NielsenConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BreakoutCode: {
      shape: {
        type: "integer"
      },
      locationName: "breakoutCode"
    },
    DistributorId: {
      shape: {
        type: "string"
      },
      locationName: "distributorId"
    }
  }
};
