import { _PermissionsList } from "./_PermissionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentMembershipsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    userArn: {
      shape: {
        type: "string"
      }
    },
    environmentId: {
      shape: {
        type: "string"
      }
    },
    permissions: {
      shape: _PermissionsList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
