import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Parameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    },
    Selector: {
      shape: {
        type: "string"
      }
    },
    SourceResult: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ARN: {
      shape: {
        type: "string"
      }
    }
  }
};
