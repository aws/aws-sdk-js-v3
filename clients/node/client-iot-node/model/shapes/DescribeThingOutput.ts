import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    defaultClientId: {
      shape: {
        type: "string"
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingId: {
      shape: {
        type: "string"
      }
    },
    thingArn: {
      shape: {
        type: "string"
      }
    },
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attributes: {
      shape: _Attributes
    },
    version: {
      shape: {
        type: "integer"
      }
    },
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
