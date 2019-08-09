import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventDate: {
      shape: {
        type: "timestamp"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    PlatformArn: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: {
        type: "string"
      }
    }
  }
};
