import { ___listOf__string } from "./___listOf__string";
import { _UserPendingChanges } from "./_UserPendingChanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    },
    ConsoleAccess: {
      shape: {
        type: "boolean"
      },
      locationName: "consoleAccess"
    },
    Groups: {
      shape: ___listOf__string,
      locationName: "groups"
    },
    Pending: {
      shape: _UserPendingChanges,
      locationName: "pending"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    }
  }
};
