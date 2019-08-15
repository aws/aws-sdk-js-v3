import { _policyNameListType } from "./_policyNameListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRolePoliciesOutput: _Structure_ = {
  type: "structure",
  required: ["PolicyNames"],
  members: {
    PolicyNames: {
      shape: _policyNameListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
