import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SocketAddress: _Structure_ = {
  type: "structure",
  required: ["name", "port"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    port: {
      shape: {
        type: "integer"
      }
    }
  }
};
