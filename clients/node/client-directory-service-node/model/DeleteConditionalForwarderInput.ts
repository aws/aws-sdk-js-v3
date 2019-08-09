import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConditionalForwarderInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "RemoteDomainName"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    RemoteDomainName: {
      shape: {
        type: "string"
      }
    }
  }
};
