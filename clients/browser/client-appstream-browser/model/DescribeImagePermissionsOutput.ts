import { _SharedImagePermissionsList } from "./_SharedImagePermissionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagePermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SharedImagePermissionsList: {
      shape: _SharedImagePermissionsList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
