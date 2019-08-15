import { _LogTypes } from "./_LogTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogSetup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    types: {
      shape: _LogTypes
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
