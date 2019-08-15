import { _Handshakes } from "./_Handshakes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHandshakesForAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Handshakes: {
      shape: _Handshakes
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
