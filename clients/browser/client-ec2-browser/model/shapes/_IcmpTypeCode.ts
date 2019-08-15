import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IcmpTypeCode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "integer"
      },
      locationName: "code"
    },
    Type: {
      shape: {
        type: "integer"
      },
      locationName: "type"
    }
  }
};
