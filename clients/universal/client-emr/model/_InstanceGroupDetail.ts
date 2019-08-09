import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroupDetail: _Structure_ = {
  type: "structure",
  required: [
    "Market",
    "InstanceRole",
    "InstanceType",
    "InstanceRequestCount",
    "InstanceRunningCount",
    "State",
    "CreationDateTime"
  ],
  members: {
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Market: {
      shape: {
        type: "string"
      }
    },
    InstanceRole: {
      shape: {
        type: "string"
      }
    },
    BidPrice: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceRequestCount: {
      shape: {
        type: "integer"
      }
    },
    InstanceRunningCount: {
      shape: {
        type: "integer"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    LastStateChangeReason: {
      shape: {
        type: "string"
      }
    },
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    StartDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    ReadyDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
