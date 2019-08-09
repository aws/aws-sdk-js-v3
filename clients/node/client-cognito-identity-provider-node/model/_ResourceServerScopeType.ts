import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceServerScopeType: _Structure_ = {
  type: "structure",
  required: ["ScopeName", "ScopeDescription"],
  members: {
    ScopeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScopeDescription: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
