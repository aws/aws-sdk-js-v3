import { Structure as _Structure_ } from "@aws-sdk/types";

export const MoveAccountInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "SourceParentId", "DestinationParentId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    SourceParentId: {
      shape: {
        type: "string"
      }
    },
    DestinationParentId: {
      shape: {
        type: "string"
      }
    }
  }
};
