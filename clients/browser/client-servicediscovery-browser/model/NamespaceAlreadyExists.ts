import { Structure as _Structure_ } from "@aws-sdk/types";

export const NamespaceAlreadyExists: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    NamespaceId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "NamespaceAlreadyExists"
};
