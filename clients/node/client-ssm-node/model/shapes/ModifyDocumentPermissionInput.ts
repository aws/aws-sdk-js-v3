import { _AccountIdList } from "./_AccountIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDocumentPermissionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "PermissionType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    PermissionType: {
      shape: {
        type: "string"
      }
    },
    AccountIdsToAdd: {
      shape: _AccountIdList
    },
    AccountIdsToRemove: {
      shape: _AccountIdList
    }
  }
};
