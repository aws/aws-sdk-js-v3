import { _AccountIds } from "./_AccountIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInvitationsInput: _Structure_ = {
  type: "structure",
  required: ["AccountIds"],
  members: {
    AccountIds: {
      shape: _AccountIds,
      locationName: "accountIds"
    }
  }
};
