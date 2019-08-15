import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStatusEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceEventId: {
      shape: {
        type: "string"
      },
      locationName: "instanceEventId"
    },
    Code: {
      shape: {
        type: "string"
      },
      locationName: "code"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    NotAfter: {
      shape: {
        type: "timestamp"
      },
      locationName: "notAfter"
    },
    NotBefore: {
      shape: {
        type: "timestamp"
      },
      locationName: "notBefore"
    },
    NotBeforeDeadline: {
      shape: {
        type: "timestamp"
      },
      locationName: "notBeforeDeadline"
    }
  }
};
