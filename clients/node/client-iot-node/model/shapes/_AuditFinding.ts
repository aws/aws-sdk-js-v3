import { _NonCompliantResource } from "./_NonCompliantResource";
import { _RelatedResources } from "./_RelatedResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditFinding: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    findingId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    checkName: {
      shape: {
        type: "string"
      }
    },
    taskStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    findingTime: {
      shape: {
        type: "timestamp"
      }
    },
    severity: {
      shape: {
        type: "string"
      }
    },
    nonCompliantResource: {
      shape: _NonCompliantResource
    },
    relatedResources: {
      shape: _RelatedResources
    },
    reasonForNonCompliance: {
      shape: {
        type: "string"
      }
    },
    reasonForNonComplianceCode: {
      shape: {
        type: "string"
      }
    }
  }
};
