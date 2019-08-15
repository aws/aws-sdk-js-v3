import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RulesPackage: _Structure_ = {
  type: "structure",
  required: ["arn", "name", "version", "provider"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    provider: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
