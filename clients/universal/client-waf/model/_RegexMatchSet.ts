import { _RegexMatchTuples } from "./_RegexMatchTuples";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexMatchSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegexMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RegexMatchTuples: {
      shape: _RegexMatchTuples
    }
  }
};
