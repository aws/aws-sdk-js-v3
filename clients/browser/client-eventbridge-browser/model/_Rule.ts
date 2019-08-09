import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventPattern: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ScheduleExpression: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ManagedBy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
