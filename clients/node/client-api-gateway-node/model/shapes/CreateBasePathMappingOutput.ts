import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBasePathMappingOutput: _Structure_ = {
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
