import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Endpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Address: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    HostedZoneId: {
      shape: {
        type: "string"
      }
    }
  }
};
