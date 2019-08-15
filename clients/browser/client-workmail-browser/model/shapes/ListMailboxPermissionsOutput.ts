import { _Permissions } from "./_Permissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMailboxPermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Permissions: {
      shape: _Permissions
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
