import { _AccountModificationList } from "./_AccountModificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountModificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountModifications: {
      shape: _AccountModificationList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
