import { _PrincipalList } from "./_PrincipalList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourcePermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Principals: {
      shape: _PrincipalList
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
