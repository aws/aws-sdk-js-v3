import { _Position } from "./_Position";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Statement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourcePolicyId: {
      shape: {
        type: "string"
      }
    },
    SourcePolicyType: {
      shape: {
        type: "string"
      }
    },
    StartPosition: {
      shape: _Position
    },
    EndPosition: {
      shape: _Position
    }
  }
};
