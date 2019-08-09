import { _MatchCriteria } from "./_MatchCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GetConnectionsFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MatchCriteria: {
      shape: _MatchCriteria
    },
    ConnectionType: {
      shape: {
        type: "string"
      }
    }
  }
};
