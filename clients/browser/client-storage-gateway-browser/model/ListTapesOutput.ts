import { _TapeInfos } from "./_TapeInfos";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTapesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeInfos: {
      shape: _TapeInfos
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
