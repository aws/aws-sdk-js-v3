import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachNetworkInterfaceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "attachmentId"
    }
  }
};
