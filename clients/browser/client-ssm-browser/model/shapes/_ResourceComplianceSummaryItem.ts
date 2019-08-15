import { _ComplianceExecutionSummary } from "./_ComplianceExecutionSummary";
import { _CompliantSummary } from "./_CompliantSummary";
import { _NonCompliantSummary } from "./_NonCompliantSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceComplianceSummaryItem: _Structure_ = {
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
    Status: {
      shape: {
        type: "string"
      }
    },
    OverallSeverity: {
      shape: {
        type: "string"
      }
    },
    ExecutionSummary: {
      shape: _ComplianceExecutionSummary
    },
    CompliantSummary: {
      shape: _CompliantSummary
    },
    NonCompliantSummary: {
      shape: _NonCompliantSummary
    }
  }
};
