import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficMirrorPortRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromPort: {
      shape: {
        type: "integer"
      },
      locationName: "fromPort"
    },
    ToPort: {
      shape: {
        type: "integer"
      },
      locationName: "toPort"
    }
  }
};
