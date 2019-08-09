import { _Server } from "./_Server";
import { _ServerReplicationParameters } from "./_ServerReplicationParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerReplicationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    server: {
      shape: _Server
    },
    serverReplicationParameters: {
      shape: _ServerReplicationParameters
    }
  }
};
