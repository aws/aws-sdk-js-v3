import { _Server } from "./_Server";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMaintenanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Server: {
      shape: _Server
    }
  }
};
