import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingArn: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    },
    version: {
      shape: {
        type: "integer"
      }
    }
  }
};
