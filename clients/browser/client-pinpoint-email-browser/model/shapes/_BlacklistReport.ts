import { Map as _Map_ } from "@aws-sdk/types";
import { _BlacklistEntries } from "./_BlacklistEntries";

export const _BlacklistReport: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _BlacklistEntries
  }
};
