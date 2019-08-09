import { _NodeIdentifierList } from "./_NodeIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyStatus: {
      shape: {
        type: "string"
      }
    },
    NodeIdsToReboot: {
      shape: _NodeIdentifierList
    }
  }
};
