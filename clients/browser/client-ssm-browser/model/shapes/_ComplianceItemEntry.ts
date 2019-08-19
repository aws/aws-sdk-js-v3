import { _ComplianceItemDetails } from "./_ComplianceItemDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceItemEntry: _Structure_ = {
  type: "structure",
  required: ["Severity", "Status"],
  members: {
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
    Severity: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Details: {
      shape: _ComplianceItemDetails
    }
  }
};
