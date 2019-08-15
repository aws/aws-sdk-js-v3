import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PermissionsBoundary: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _tagListType
    }
  }
};
