import { _ByteMatchTuples } from "./_ByteMatchTuples";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ByteMatchSet: _Structure_ = {
  type: "structure",
  required: ["ByteMatchSetId", "ByteMatchTuples"],
  members: {
    ByteMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ByteMatchTuples: {
      shape: _ByteMatchTuples
    }
  }
};
