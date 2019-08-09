import { _VmServer } from "./_VmServer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Server: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serverId: {
      shape: {
        type: "string"
      }
    },
    serverType: {
      shape: {
        type: "string"
      }
    },
    vmServer: {
      shape: _VmServer
    },
    replicationJobId: {
      shape: {
        type: "string"
      }
    },
    replicationJobTerminated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
