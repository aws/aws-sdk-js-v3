import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachNetworkInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["AttachmentId"],
  members: {
    AttachmentId: {
      shape: {
        type: "string"
      },
      locationName: "attachmentId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Force: {
      shape: {
        type: "boolean"
      },
      locationName: "force"
    }
  }
};
