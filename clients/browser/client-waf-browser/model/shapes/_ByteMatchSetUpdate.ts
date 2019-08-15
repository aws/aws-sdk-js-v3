import { _ByteMatchTuple } from "./_ByteMatchTuple";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ByteMatchSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "ByteMatchTuple"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    ByteMatchTuple: {
      shape: _ByteMatchTuple
    }
  }
};
