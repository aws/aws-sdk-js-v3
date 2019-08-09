import { _ByteMatchSetUpdates } from "./_ByteMatchSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateByteMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["ByteMatchSetId", "ChangeToken", "Updates"],
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
    },
    Updates: {
      shape: _ByteMatchSetUpdates
    }
  }
};
