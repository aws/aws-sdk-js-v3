import { _ContainerSummary } from "./_ContainerSummary";
import { _ArrayPropertiesSummary } from "./_ArrayPropertiesSummary";
import { _NodePropertiesSummary } from "./_NodePropertiesSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobSummary: _Structure_ = {
  type: "structure",
  required: ["jobId", "jobName"],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    jobName: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "integer"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    startedAt: {
      shape: {
        type: "integer"
      }
    },
    stoppedAt: {
      shape: {
        type: "integer"
      }
    },
    container: {
      shape: _ContainerSummary
    },
    arrayProperties: {
      shape: _ArrayPropertiesSummary
    },
    nodeProperties: {
      shape: _NodePropertiesSummary
    }
  }
};
