import { _LogSetups } from "./_LogSetups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Logging: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusterLogging: {
      shape: _LogSetups
    }
  }
};
