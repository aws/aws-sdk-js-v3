import { _AccountIdList } from "./_AccountIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMembersInput: _Structure_ = {
  type: "structure",
  required: ["AccountIds"],
  members: {
    AccountIds: {
      shape: _AccountIdList
    }
  }
};
