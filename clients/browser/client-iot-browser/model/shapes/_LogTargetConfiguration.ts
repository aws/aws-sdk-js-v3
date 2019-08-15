import { _LogTarget } from "./_LogTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogTargetConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logTarget: {
      shape: _LogTarget
    },
    logLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
