import { _RemoteAccessSessions } from "./_RemoteAccessSessions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRemoteAccessSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    remoteAccessSessions: {
      shape: _RemoteAccessSessions
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
