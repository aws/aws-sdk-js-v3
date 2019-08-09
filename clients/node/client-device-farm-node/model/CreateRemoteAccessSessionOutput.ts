import { _RemoteAccessSession } from "./_RemoteAccessSession";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRemoteAccessSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    remoteAccessSession: {
      shape: _RemoteAccessSession
    }
  }
};
