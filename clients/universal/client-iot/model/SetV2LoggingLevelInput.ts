import { _LogTarget } from "./_LogTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetV2LoggingLevelInput: _Structure_ = {
  type: "structure",
  required: ["logTarget", "logLevel"],
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
