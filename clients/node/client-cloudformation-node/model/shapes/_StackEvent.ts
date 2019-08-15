import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackEvent: _Structure_ = {
  type: "structure",
  required: ["StackId", "EventId", "StackName", "Timestamp"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    EventId: {
      shape: {
        type: "string"
      }
    },
    StackName: {
      shape: {
        type: "string"
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    },
    PhysicalResourceId: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceStatus: {
      shape: {
        type: "string"
      }
    },
    ResourceStatusReason: {
      shape: {
        type: "string"
      }
    },
    ResourceProperties: {
      shape: {
        type: "string"
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
