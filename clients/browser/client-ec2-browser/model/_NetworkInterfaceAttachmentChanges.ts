import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterfaceAttachmentChanges: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    }
  }
};
