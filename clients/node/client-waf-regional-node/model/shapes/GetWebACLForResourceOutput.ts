import { _WebACLSummary } from "./_WebACLSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWebACLForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WebACLSummary: {
      shape: _WebACLSummary
    }
  }
};
