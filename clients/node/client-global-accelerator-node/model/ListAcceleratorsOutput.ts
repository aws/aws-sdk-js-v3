import { _Accelerators } from "./_Accelerators";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAcceleratorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accelerators: {
      shape: _Accelerators
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
