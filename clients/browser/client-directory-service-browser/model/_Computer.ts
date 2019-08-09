import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Computer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComputerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComputerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComputerAttributes: {
      shape: _Attributes
    }
  }
};
