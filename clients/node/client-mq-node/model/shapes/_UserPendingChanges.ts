import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPendingChanges: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    PendingChange: {
      shape: {
        type: "string"
      },
      locationName: "pendingChange"
    }
  }
};
