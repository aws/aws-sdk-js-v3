import { _EndpointConfigurations } from "./_EndpointConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEndpointGroupInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn", "EndpointGroupRegion", "IdempotencyToken"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    EndpointGroupRegion: {
      shape: {
        type: "string"
      }
    },
    EndpointConfigurations: {
      shape: _EndpointConfigurations
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
    },
    IdempotencyToken: {
      shape: {
        type: "string"
      }
    }
  }
};
