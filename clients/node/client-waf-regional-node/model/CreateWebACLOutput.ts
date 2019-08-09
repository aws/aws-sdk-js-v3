import { _WebACL } from "./_WebACL";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWebACLOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebACL: {
      shape: _WebACL
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
