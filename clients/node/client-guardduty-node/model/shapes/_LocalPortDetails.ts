import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LocalPortDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Port: {
      shape: {
        type: "integer"
      },
      locationName: "port"
    },
    PortName: {
      shape: {
        type: "string"
      },
      locationName: "portName"
    }
  }
};
