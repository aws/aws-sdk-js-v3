import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetByteMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["ByteMatchSetId"],
  members: {
    ByteMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
