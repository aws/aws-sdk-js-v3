import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectorDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    CoreDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    DeviceDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    FunctionDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    LoggerDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    ResourceDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    },
    SubscriptionDefinitionVersionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
