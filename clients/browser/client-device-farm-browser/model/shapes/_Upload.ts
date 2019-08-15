import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Upload: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    url: {
      shape: {
        type: "string"
      }
    },
    metadata: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    category: {
      shape: {
        type: "string"
      }
    }
  }
};
