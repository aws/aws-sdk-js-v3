import { _ComplianceExecutionSummary } from "./_ComplianceExecutionSummary";
import { _ComplianceItemDetails } from "./_ComplianceItemDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: {
        type: "string"
      }
    },
    ExecutionSummary: {
      shape: _ComplianceExecutionSummary
    },
    Details: {
      shape: _ComplianceItemDetails
    }
  }
};
