import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeclineHandshakeInput: _Structure_ = {
  type: "structure",
  required: ["HandshakeId"],
  members: {
    HandshakeId: {
      shape: {
        type: "string"
      }
    }
  }
};
