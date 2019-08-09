import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterfaceAttachment: _Structure_ = {
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
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    InstanceOwnerId: {
      shape: {
        type: "string"
      },
      locationName: "instanceOwnerId"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
