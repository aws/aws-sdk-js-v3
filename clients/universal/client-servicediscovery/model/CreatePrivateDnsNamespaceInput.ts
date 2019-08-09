import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePrivateDnsNamespaceInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Vpc"],
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
    },
    Vpc: {
      shape: {
        type: "string"
      }
    }
  }
};
