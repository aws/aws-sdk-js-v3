import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortMapping: _Structure_ = {
  type: "structure",
  required: ["port", "protocol"],
  members: {
    port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    }
  }
};
