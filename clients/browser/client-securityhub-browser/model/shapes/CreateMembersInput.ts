import { _AccountDetailsList } from "./_AccountDetailsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMembersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountDetails: {
      shape: _AccountDetailsList
    }
  }
};
