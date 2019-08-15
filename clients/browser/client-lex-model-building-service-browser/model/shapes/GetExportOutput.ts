import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    exportType: {
      shape: {
        type: "string"
      }
    },
    exportStatus: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    url: {
      shape: {
        type: "string"
      }
    }
  }
};
