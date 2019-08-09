import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentationPartLocation: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    method: {
      shape: {
        type: "string"
      }
    },
    statusCode: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    }
  }
};
