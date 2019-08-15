import { _MitigationActionParams } from "./_MitigationActionParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MitigationAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    id: {
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
    }
  }
};
