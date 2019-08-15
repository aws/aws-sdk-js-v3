import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceShadowEnrichActivity: _Structure_ = {
  type: "structure",
  required: ["name", "attribute", "thingName", "roleArn"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attribute: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
