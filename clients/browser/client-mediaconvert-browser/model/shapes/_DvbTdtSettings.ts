import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DvbTdtSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TdtInterval: {
      shape: {
        type: "integer",
        min: 1000
      },
      locationName: "tdtInterval"
    }
  }
};
