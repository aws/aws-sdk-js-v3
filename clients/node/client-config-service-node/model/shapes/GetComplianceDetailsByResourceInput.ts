import { _ComplianceTypes } from "./_ComplianceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceDetailsByResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceType", "ResourceId"],
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
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
