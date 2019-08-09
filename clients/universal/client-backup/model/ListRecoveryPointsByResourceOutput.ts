import { _RecoveryPointByResourceList } from "./_RecoveryPointByResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecoveryPointsByResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    RecoveryPoints: {
      shape: _RecoveryPointByResourceList
    }
  }
};
