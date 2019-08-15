import { _Tapes } from "./_Tapes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTapesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tapes: {
      shape: _Tapes
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
