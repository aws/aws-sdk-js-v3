import { _Stats } from "./_Stats";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StatsEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Details: {
      shape: _Stats
    }
  }
};
