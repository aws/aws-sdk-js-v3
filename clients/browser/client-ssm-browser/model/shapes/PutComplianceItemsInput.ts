import { _ComplianceExecutionSummary } from "./_ComplianceExecutionSummary";
import { _ComplianceItemEntryList } from "./_ComplianceItemEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutComplianceItemsInput: _Structure_ = {
  type: "structure",
  required: [
    "ResourceId",
    "ResourceType",
    "ComplianceType",
    "ExecutionSummary",
    "Items"
  ],
  members: {
    ResourceId: {
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
    ComplianceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExecutionSummary: {
      shape: _ComplianceExecutionSummary
    },
    Items: {
      shape: _ComplianceItemEntryList
    },
    ItemContentHash: {
      shape: {
        type: "string"
      }
    }
  }
};
