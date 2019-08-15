import { _ComplianceTypes } from "./_ComplianceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComplianceByResourceInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceTypes: {
      shape: _ComplianceTypes
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
