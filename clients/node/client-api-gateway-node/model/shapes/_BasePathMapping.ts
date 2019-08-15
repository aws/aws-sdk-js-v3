import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BasePathMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    basePath: {
      shape: {
        type: "string"
      }
    },
    restApiId: {
      shape: {
        type: "string"
      }
    },
    stage: {
      shape: {
        type: "string"
      }
    }
  }
};
