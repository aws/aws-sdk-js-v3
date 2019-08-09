import { _Resources } from "./_Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    projectId: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    consoleUrl: {
      shape: {
        type: "string"
      }
    },
    resources: {
      shape: _Resources
    }
  }
};
