import { _Samples } from "./_Samples";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSamplesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    samples: {
      shape: _Samples
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
