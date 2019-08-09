import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnabledServicePrincipal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServicePrincipal: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DateEnabled: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
