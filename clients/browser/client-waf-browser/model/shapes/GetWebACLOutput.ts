import { _WebACL } from "./_WebACL";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWebACLOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebACL: {
      shape: _WebACL
    }
  }
};
