import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupVersionInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
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
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
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
