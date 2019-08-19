import { _MapOfMethod } from "./_MapOfMethod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    parentId: {
      shape: {
        type: "string"
      }
    },
    pathPart: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    resourceMethods: {
      shape: _MapOfMethod
    }
  }
};
