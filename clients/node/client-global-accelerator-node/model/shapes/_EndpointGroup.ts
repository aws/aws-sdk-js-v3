import { _EndpointDescriptions } from "./_EndpointDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointGroupArn: {
      shape: {
        type: "string"
      }
    },
    EndpointGroupRegion: {
      shape: {
        type: "string"
      }
    },
    EndpointDescriptions: {
      shape: _EndpointDescriptions
    },
    TrafficDialPercentage: {
      shape: {
        type: "float"
      }
    },
    HealthCheckPort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    HealthCheckProtocol: {
      shape: {
        type: "string"
      }
    },
    HealthCheckPath: {
      shape: {
        type: "string"
      }
    },
    HealthCheckIntervalSeconds: {
      shape: {
        type: "integer",
        min: 10
      }
    },
    ThresholdCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
