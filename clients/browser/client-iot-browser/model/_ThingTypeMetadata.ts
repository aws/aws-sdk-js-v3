import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingTypeMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deprecated: {
      shape: {
        type: "boolean"
      }
    },
    deprecationDate: {
      shape: {
        type: "timestamp"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
