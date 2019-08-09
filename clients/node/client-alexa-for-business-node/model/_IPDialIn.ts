import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IPDialIn: _Structure_ = {
  type: "structure",
  required: ["Endpoint", "CommsProtocol"],
  members: {
    Endpoint: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CommsProtocol: {
      shape: {
        type: "string"
      }
    }
  }
};
