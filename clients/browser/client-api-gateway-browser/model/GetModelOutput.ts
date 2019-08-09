import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetModelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    }
  }
};
