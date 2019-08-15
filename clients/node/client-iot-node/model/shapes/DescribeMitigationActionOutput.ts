import { _MitigationActionParams } from "./_MitigationActionParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMitigationActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionName: {
      shape: {
        type: "string"
      }
    },
    actionType: {
      shape: {
        type: "string"
      }
    },
    actionArn: {
      shape: {
        type: "string"
      }
    },
    actionId: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    actionParams: {
      shape: _MitigationActionParams
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
