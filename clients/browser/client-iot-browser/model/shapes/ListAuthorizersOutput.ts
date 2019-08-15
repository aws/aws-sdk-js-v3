import { _Authorizers } from "./_Authorizers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuthorizersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizers: {
      shape: _Authorizers
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
