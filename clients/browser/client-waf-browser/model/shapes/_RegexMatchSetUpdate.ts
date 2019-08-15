import { _RegexMatchTuple } from "./_RegexMatchTuple";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexMatchSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "RegexMatchTuple"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    RegexMatchTuple: {
      shape: _RegexMatchTuple
    }
  }
};
