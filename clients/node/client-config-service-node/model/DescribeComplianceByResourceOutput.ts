import { _ComplianceByResources } from "./_ComplianceByResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComplianceByResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceByResources: {
      shape: _ComplianceByResources
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
