import { Structure as _Structure_ } from "@aws-sdk/types";

export const _M2tsScte35Esam: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Scte35EsamPid: {
      shape: {
        type: "integer",
        min: 32
      },
      locationName: "scte35EsamPid"
    }
  }
};
