import { _SslPolicies } from "./_SslPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSSLPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SslPolicies: {
      shape: _SslPolicies
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
