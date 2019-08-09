import { _NodeFrameworkAttributes } from "./_NodeFrameworkAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Node: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    FrameworkAttributes: {
      shape: _NodeFrameworkAttributes
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
