import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePublicDnsNamespaceInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
