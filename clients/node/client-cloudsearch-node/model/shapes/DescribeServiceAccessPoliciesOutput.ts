import { _AccessPoliciesStatus } from "./_AccessPoliciesStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceAccessPoliciesOutput: _Structure_ = {
  type: "structure",
  required: ["AccessPolicies"],
  members: {
    AccessPolicies: {
      shape: _AccessPoliciesStatus
    }
  }
};
