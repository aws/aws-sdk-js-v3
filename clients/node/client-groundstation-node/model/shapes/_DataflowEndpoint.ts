import { _SocketAddress } from "./_SocketAddress";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataflowEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    address: {
      shape: _SocketAddress
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
