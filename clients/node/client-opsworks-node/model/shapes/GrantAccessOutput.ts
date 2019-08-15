import { _TemporaryCredential } from "./_TemporaryCredential";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GrantAccessOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemporaryCredential: {
      shape: _TemporaryCredential
    }
  }
};
