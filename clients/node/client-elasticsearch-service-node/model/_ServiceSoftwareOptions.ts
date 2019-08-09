import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSoftwareOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrentVersion: {
      shape: {
        type: "string"
      }
    },
    NewVersion: {
      shape: {
        type: "string"
      }
    },
    UpdateAvailable: {
      shape: {
        type: "boolean"
      }
    },
    Cancellable: {
      shape: {
        type: "boolean"
      }
    },
    UpdateStatus: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    AutomatedUpdateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
