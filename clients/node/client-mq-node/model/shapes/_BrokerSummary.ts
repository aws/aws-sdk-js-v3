import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BrokerSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerArn: {
      shape: {
        type: "string"
      },
      locationName: "brokerArn"
    },
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    },
    BrokerName: {
      shape: {
        type: "string"
      },
      locationName: "brokerName"
    },
    BrokerState: {
      shape: {
        type: "string"
      },
      locationName: "brokerState"
    },
    Created: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "created"
    },
    DeploymentMode: {
      shape: {
        type: "string"
      },
      locationName: "deploymentMode"
    },
    HostInstanceType: {
      shape: {
        type: "string"
      },
      locationName: "hostInstanceType"
    }
  }
};
