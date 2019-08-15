import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionConfigurationProperty: _Structure_ = {
  type: "structure",
  required: ["name", "required", "key", "secret"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    required: {
      shape: {
        type: "boolean"
      }
    },
    key: {
      shape: {
        type: "boolean"
      }
    },
    secret: {
      shape: {
        type: "boolean"
      }
    },
    queryable: {
      shape: {
        type: "boolean"
      }
    },
    description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
