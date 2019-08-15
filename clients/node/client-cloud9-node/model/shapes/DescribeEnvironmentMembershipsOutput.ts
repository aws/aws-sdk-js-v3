import { _EnvironmentMembersList } from "./_EnvironmentMembersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentMembershipsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    memberships: {
      shape: _EnvironmentMembersList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
