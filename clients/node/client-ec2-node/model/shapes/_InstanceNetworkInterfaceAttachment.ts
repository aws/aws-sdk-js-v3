import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceNetworkInterfaceAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "attachTime"
    },
    AttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "attachmentId"
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    },
    DeviceIndex: {
      shape: {
        type: "integer"
      },
      locationName: "deviceIndex"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
