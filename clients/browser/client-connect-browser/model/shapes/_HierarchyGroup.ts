import { _HierarchyPath } from "./_HierarchyPath";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HierarchyGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    LevelId: {
      shape: {
        type: "string"
      }
    },
    HierarchyPath: {
      shape: _HierarchyPath
    }
  }
};
