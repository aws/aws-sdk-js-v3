import { _TimeSpan } from "./_TimeSpan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Clip: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimeSpan: {
      shape: _TimeSpan
    }
  }
};
