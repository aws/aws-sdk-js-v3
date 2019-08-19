import { _SslPolicyNames } from "./_SslPolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSSLPoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _SslPolicyNames
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
