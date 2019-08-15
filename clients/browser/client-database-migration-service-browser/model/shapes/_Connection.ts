import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Connection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    EndpointArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastFailureMessage: {
      shape: {
        type: "string"
      }
    },
    EndpointIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
