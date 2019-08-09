import { _TelemetryMetadataList } from "./_TelemetryMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentRunAgent: _Structure_ = {
  type: "structure",
  required: [
    "agentId",
    "assessmentRunArn",
    "agentHealth",
    "agentHealthCode",
    "telemetryMetadata"
  ],
  members: {
    agentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    agentHealth: {
      shape: {
        type: "string"
      }
    },
    agentHealthCode: {
      shape: {
        type: "string"
      }
    },
    agentHealthDetails: {
      shape: {
        type: "string"
      }
    },
    autoScalingGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    telemetryMetadata: {
      shape: _TelemetryMetadataList
    }
  }
};
