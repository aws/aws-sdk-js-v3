import { _ByteMatchSet } from "./_ByteMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetByteMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ByteMatchSet: {
      shape: _ByteMatchSet
    }
  }
};
