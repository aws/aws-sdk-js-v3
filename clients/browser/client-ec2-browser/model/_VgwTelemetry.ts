import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VgwTelemetry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptedRouteCount: {
      shape: {
        type: "integer"
      },
      locationName: "acceptedRouteCount"
    },
    LastStatusChange: {
      shape: {
        type: "timestamp"
      },
      locationName: "lastStatusChange"
    },
    OutsideIpAddress: {
      shape: {
        type: "string"
      },
      locationName: "outsideIpAddress"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    }
  }
};
