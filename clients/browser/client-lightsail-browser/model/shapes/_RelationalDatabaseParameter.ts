import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    allowedValues: {
      shape: {
        type: "string"
      }
    },
    applyMethod: {
      shape: {
        type: "string"
      }
    },
    applyType: {
      shape: {
        type: "string"
      }
    },
    dataType: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    isModifiable: {
      shape: {
        type: "boolean"
      }
    },
    parameterName: {
      shape: {
        type: "string"
      }
    },
    parameterValue: {
      shape: {
        type: "string"
      }
    }
  }
};
