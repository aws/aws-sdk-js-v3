import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThreatIntelIndicator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    Category: {
      shape: {
        type: "string"
      }
    },
    LastObservedAt: {
      shape: {
        type: "string"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    SourceUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
