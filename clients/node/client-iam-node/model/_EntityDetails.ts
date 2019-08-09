import { _EntityInfo } from "./_EntityInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityDetails: _Structure_ = {
  type: "structure",
  required: ["EntityInfo"],
  members: {
    EntityInfo: {
      shape: _EntityInfo
    },
    LastAuthenticated: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
