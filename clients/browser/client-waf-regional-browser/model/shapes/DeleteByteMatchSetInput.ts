import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteByteMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["ByteMatchSetId", "ChangeToken"],
  members: {
    ByteMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
